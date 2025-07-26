import type { NextApiRequest, NextApiResponse } from 'next';
import { getSupabaseClient } from '../../../lib/supabase';

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
    const supabase = getSupabaseClient();
    
    // Fetch project images from Supabase
    const { data, error } = await supabase
      .from('project_images')
      .select(`
        id,
        public_url,
        alt_text,
        caption,
        image_type,
        is_primary,
        created_at,
        projects (
          title,
          service_name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    // Transform Supabase data to match expected format
    const transformedImages: GalleryImage[] = (data || []).map((image) => ({
      id: image.id,
      name: image.projects?.title || 'Project Image',
      description: image.caption || image.alt_text || `${image.image_type} image from ${image.projects?.service_name || 'project'}`,
      url: image.public_url,
      createdTime: image.created_at,
    }));

    res.status(200).json(transformedImages);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Error fetching gallery images from Supabase' });
  }
}
