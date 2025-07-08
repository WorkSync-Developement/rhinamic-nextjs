import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/drive'];

interface FileUpload {
  name: string;
  type: string;
  stream: any;
}

// Initialize Google Drive client
export const getDriveClient = () => {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');
  
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return google.drive({ version: 'v3', auth });
};

// Get all images from a specific folder
export const getGalleryImages = async (folderId: string) => {
  const drive = getDriveClient();
  
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and (mimeType='image/jpeg' or mimeType='image/png' or mimeType='image/webp')`,
      fields: 'files(id, name, description, webViewLink, webContentLink, createdTime)',
      orderBy: 'createdTime desc'
    });

    return response.data.files;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

// Upload image to Google Drive
export const uploadImageToDrive = async (file: FileUpload, folderId: string, description: string) => {
  const drive = getDriveClient();
  
  try {
    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [folderId],
        description: description,
      },
      media: {
        mimeType: file.type,
        body: file.stream,
      },
      fields: 'id, name, webViewLink',
    });

    // Make file publicly viewable
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
