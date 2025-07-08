import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadImageToDrive } from '../../../lib/googleDrive';
import formidable from 'formidable';
import fs from 'fs';
import { getSession } from 'next-auth/react';

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

  // Check authentication
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ 
      success: false,
      message: 'Unauthorized' 
    });
  }

  try {
    const form = new formidable.IncomingForm();
    const [fields, files] = await form.parse(req) as [formidable.Fields, formidable.Files];
    
    const uploadedFile = files.image?.[0];
    if (!uploadedFile) {
      return res.status(400).json({ 
        success: false,
        message: 'No image file provided' 
      });
    }

    // Validate file type
    const validMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validMimeTypes.includes(uploadedFile.mimetype || '')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.'
      });
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (uploadedFile.size > maxSize) {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
    
    const fileStream = fs.createReadStream(uploadedFile.filepath);
    const folderId = process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;
    
    if (!folderId) {
      throw new Error('Google Drive folder ID is not configured');
    }

    const description = fields.description?.[0] || '';
    
    const uploadResult = await uploadImageToDrive({
      name: uploadedFile.originalFilename || 'unnamed.jpg',
      type: uploadedFile.mimetype || 'image/jpeg',
      stream: fileStream,
    }, folderId, description);

    res.status(200).json({ 
      success: true, 
      file: uploadResult 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error uploading image' 
    });
  }
}
