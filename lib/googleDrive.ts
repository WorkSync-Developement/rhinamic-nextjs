import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/drive'];

interface FileUpload {
  name: string;
  type: string;
  stream: any;
}

// Initialize Google Drive client
export const getDriveClient = () => {
  try {
    let credentials;
    
    // First, try to load from a file if path is specified
    const keyFilePath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE;
    if (keyFilePath) {
      try {
        const keyFileContent = fs.readFileSync(path.resolve(keyFilePath), 'utf8');
        credentials = JSON.parse(keyFileContent);
        console.log('Service account loaded from file successfully');
      } catch (fileError) {
        console.error('Error loading service account from file:', fileError instanceof Error ? fileError.message : 'Unknown error');
      }
    }
    
    // If no credentials loaded from file, try from env var
    if (!credentials && process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      try {
        credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
        console.log('Service account loaded from environment variable successfully');
      } catch (parseError) {
        console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY as JSON:', parseError instanceof Error ? parseError.message : 'Unknown error');
      }
    }
    
    if (!credentials) {
      throw new Error('Google service account credentials not found or not valid JSON format');
    }
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });

    return google.drive({ version: 'v3', auth });
  } catch (error) {
    console.error('Error initializing Google Drive client:', error);
    throw error;
  }
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
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
      fileId: response.data.id as string,
      fields: 'id',
    });

    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
