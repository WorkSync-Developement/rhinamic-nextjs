-- Supabase Storage Configuration for Rhinamic Project Images
-- This script sets up storage buckets and policies for handling project images

-- =============================================================================
-- STORAGE BUCKET CREATION
-- =============================================================================

-- Create the main project images bucket
-- Note: Bucket creation is typically done via Supabase Dashboard or API
-- This is the configuration that should be applied:

/*
Bucket Name: project-images
Public: true (for public gallery access)
File Size Limit: 10MB per file
Allowed MIME Types: image/jpeg, image/jpg, image/png, image/webp
*/

-- If using SQL to create bucket (alternative to Dashboard):
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'project-images',
  'project-images', 
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- =============================================================================
-- FOLDER STRUCTURE WITHIN BUCKET
-- =============================================================================

/*
Recommended folder structure in 'project-images' bucket:

/projects/{project-slug}/
  - original/        -- Original uploaded images
  - thumbnails/      -- Auto-generated thumbnails (150x150)
  - medium/          -- Medium size images (800x600)
  - large/           -- Large display images (1200x900)

Example paths:
- /projects/modern-paver-patio/original/IMG_001.jpg
- /projects/modern-paver-patio/thumbnails/IMG_001_thumb.jpg
- /projects/modern-paver-patio/medium/IMG_001_medium.jpg

File naming pattern: {original-name}_{image-type}_{timestamp}.{ext}
- before_image_1640995200.jpg
- after_image_1640995201.jpg
- general_image_1640995202.jpg
*/

-- =============================================================================
-- STORAGE POLICIES
-- =============================================================================

-- Remove existing policies if they exist
DROP POLICY IF EXISTS "Public read access for project images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload project images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete project images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update project images" ON storage.objects;

-- Policy 1: Public read access to project images
CREATE POLICY "Public read access for project images"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-images');

-- Policy 2: Only authenticated admin users can upload images
CREATE POLICY "Authenticated users can upload project images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'project-images' 
  AND auth.role() = 'authenticated'
  AND EXISTS (
    SELECT 1 FROM admin_profiles 
    WHERE id = auth.uid() 
    AND is_active = true
    AND role IN ('editor', 'admin', 'super_admin')
  )
);

-- Policy 3: Only admin users can update image metadata
CREATE POLICY "Admins can update project images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'project-images'
  AND EXISTS (
    SELECT 1 FROM admin_profiles 
    WHERE id = auth.uid() 
    AND is_active = true
    AND role IN ('admin', 'super_admin')
  )
);

-- Policy 4: Only admin users can delete images
CREATE POLICY "Admins can delete project images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'project-images'
  AND EXISTS (
    SELECT 1 FROM admin_profiles 
    WHERE id = auth.uid() 
    AND is_active = true
    AND role IN ('admin', 'super_admin')
  )
);

-- =============================================================================
-- STORAGE HELPER FUNCTIONS
-- =============================================================================

-- Function to generate storage path for uploaded image
CREATE OR REPLACE FUNCTION generate_image_storage_path(
  project_slug TEXT,
  original_filename TEXT,
  image_type TEXT,
  size_variant TEXT DEFAULT 'original'
)
RETURNS TEXT AS $$
DECLARE
  file_extension TEXT;
  base_name TEXT;
  timestamp_suffix TEXT;
BEGIN
  -- Extract file extension
  file_extension := lower(substring(original_filename from '\.([^.]*)$'));
  
  -- Remove extension from filename and clean it
  base_name := regexp_replace(
    substring(original_filename from '^(.+)\.[^.]*$'), 
    '[^a-zA-Z0-9_-]', 
    '_', 
    'g'
  );
  
  -- Generate timestamp suffix
  timestamp_suffix := extract(epoch from now())::text;
  
  -- Build path: /projects/{slug}/{size}/{name}_{type}_{timestamp}.{ext}
  RETURN format(
    'projects/%s/%s/%s_%s_%s.%s',
    project_slug,
    size_variant,
    base_name,
    image_type,
    timestamp_suffix,
    file_extension
  );
END;
$$ LANGUAGE plpgsql;

-- Function to get public URL for storage object
CREATE OR REPLACE FUNCTION get_storage_public_url(storage_path TEXT)
RETURNS TEXT AS $$
BEGIN
  -- Return the public URL format for Supabase Storage
  -- Format: https://{project-ref}.supabase.co/storage/v1/object/public/{bucket}/{path}
  RETURN format(
    'https://%s.supabase.co/storage/v1/object/public/project-images/%s',
    current_setting('app.supabase_project_ref', true),
    storage_path
  );
END;
$$ LANGUAGE plpgsql;

-- Function to validate image file before upload
CREATE OR REPLACE FUNCTION validate_image_upload(
  file_name TEXT,
  file_size BIGINT,
  mime_type TEXT
)
RETURNS BOOLEAN AS $$
BEGIN
  -- Check file size (max 10MB)
  IF file_size > 10485760 THEN
    RAISE EXCEPTION 'File size exceeds 10MB limit';
  END IF;
  
  -- Check mime type
  IF mime_type NOT IN ('image/jpeg', 'image/jpg', 'image/png', 'image/webp') THEN
    RAISE EXCEPTION 'Invalid file type. Only JPEG, PNG, and WebP images are allowed';
  END IF;
  
  -- Check file extension matches mime type
  IF NOT (
    (mime_type LIKE 'image/jpeg%' AND file_name ~* '\.(jpg|jpeg)$') OR
    (mime_type = 'image/png' AND file_name ~* '\.png$') OR
    (mime_type = 'image/webp' AND file_name ~* '\.webp$')
  ) THEN
    RAISE EXCEPTION 'File extension does not match content type';
  END IF;
  
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- IMAGE PROCESSING CONFIGURATION
-- =============================================================================

/*
For automatic image processing and optimization, consider using:

1. Supabase Edge Functions for image resizing
2. Integration with services like Cloudinary or ImageKit
3. Client-side image compression before upload

Recommended image sizes:
- Thumbnail: 300x200 (for gallery grid)
- Medium: 800x600 (for modal preview)
- Large: 1200x900 (for full-screen view)
- Original: Keep original for admin purposes
*/

-- =============================================================================
-- STORAGE BUCKET SETTINGS SUMMARY
-- =============================================================================

/*
Apply these settings in Supabase Dashboard > Storage:

1. CREATE BUCKET:
   - Name: project-images
   - Public: Yes
   - File size limit: 10MB
   - Allowed MIME types: image/jpeg, image/jpg, image/png, image/webp

2. CONFIGURE POLICIES:
   - Run the above SQL policies
   - Test upload/download permissions

3. FOLDER STRUCTURE:
   - Create example folders: projects/test-project/original/
   - Upload a test image to verify permissions

4. DOMAIN CONFIGURATION:
   - Note your Supabase project URL
   - Update client-side code with correct storage URLs

5. BACKUP STRATEGY:
   - Consider automated backups of storage bucket
   - Document image recovery procedures
*/

-- Grant execute permissions for helper functions
GRANT EXECUTE ON FUNCTION generate_image_storage_path TO authenticated;
GRANT EXECUTE ON FUNCTION get_storage_public_url TO authenticated, anon;
GRANT EXECUTE ON FUNCTION validate_image_upload TO authenticated;