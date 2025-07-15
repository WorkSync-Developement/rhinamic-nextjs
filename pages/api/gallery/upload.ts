import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadImageToDrive } from '../../../lib/googleDrive';
import { IncomingForm } from 'formidable';
import fs from 'fs';

// Disable body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

interface UploadResponse {
  success: boolean;
  file?: any;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  const form = new IncomingForm();
  
  try {
    // Parse the form
    const [fields, files] = await new Promise<[any, any]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve([fields, files]);
      });
    });
    
    // Get the uploaded file
    const uploadedFile = files?.image?.[0];
    if (!uploadedFile) {
      return res.status(400).json({ 
        success: false,
        message: 'No image file provided' 
      });
    }


    
    // Create file stream for upload
    const fileStream = fs.createReadStream(uploadedFile.filepath);
    const folderId = process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;
    
    if (!folderId) {
      throw new Error('Google Drive folder ID is not configured');
    }

    const description = fields.description?.[0] || '';
    
    // Upload the file to Google Drive
    const uploadResult = await uploadImageToDrive({
      name: uploadedFile.originalFilename || `image-${Date.now()}.jpg`,
      type: uploadedFile.mimetype || 'image/jpeg',
      stream: fileStream,
    }, folderId, description);

    // Clean up the temporary file
    fs.unlink(uploadedFile.filepath, (err) => {
      if (err) console.error('Error deleting temporary file:', err);
    });

    return res.status(200).json({ 
      success: true, 
      file: uploadResult 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Error uploading image'
    });
  }
}
