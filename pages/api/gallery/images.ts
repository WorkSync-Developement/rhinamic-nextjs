import type { NextApiRequest, NextApiResponse } from 'next';
import { getGalleryImages } from '../../../lib/googleDrive';

interface GalleryImage {
  id: string;
  name: string;
  description: string;
  url: string;
  createdTime: string;
}

interface ErrorResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GalleryImage[] | ErrorResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const folderId = process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;
    
    if (!folderId) {
      throw new Error('Google Drive folder ID is not configured');
    }
    
    const images = await getGalleryImages(folderId);
    
    // Transform Google Drive URLs to direct image URLs
    const transformedImages = images.map((image: any) => ({
      id: image.id,
      name: image.name,
      description: image.description || '',
      url: `https://drive.google.com/uc?id=${image.id}`,
      createdTime: image.createdTime,
    }));

    res.status(200).json(transformedImages);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Error fetching gallery images' });
  }
}
