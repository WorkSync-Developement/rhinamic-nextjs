# Project Data Structure Analysis

## Current projects.json Structure
```json
{
  "title": "string",
  "slug": "string", 
  "image": "string", // Single image path
  "service": "string",
  "description": "string"
}
```

## Expected Validation Schema (from lib/validations.ts)
```typescript
{
  title: string (3-100 chars),
  service: string (required),
  description: string (10-500 chars),
  images: Array<{
    file: File,
    preview: string,
    isPrimary: boolean,
    order: number,
    imageType: 'before'|'after'|'during'|'general',
    caption?: string
  }>
}
```

## Database Schema Structure (project_images table)
```sql
{
  id: UUID,
  project_id: UUID,
  storage_path: string,
  public_url: string,
  alt_text?: string,
  caption?: string,
  image_type: 'before'|'after'|'during'|'general',
  is_primary: boolean,
  display_order: number,
  file_size?: number,
  mime_type?: string,
  width?: number,
  height?: number
}
```

## Issues Identified

1. **Single vs Multiple Images**: Current projects.json has single `image` field, but system expects multiple images with metadata
2. **Missing Fields**: No slug generation, no image metadata, no before/after labeling
3. **Service Mismatch**: Current services in projects.json may not match the complete 32-service list
4. **No Storage Path**: No connection between local image paths and Supabase storage paths

## Required Data Migration

When setting up Supabase, existing projects.json data needs to:
1. Convert single `image` field to `images` array
2. Set default `imageType` to 'general'
3. Set first image as `isPrimary: true`
4. Generate proper slugs
5. Map service names to new complete service list
6. Upload images to Supabase storage and update paths

## Recommended Project Structure for Database
```sql
-- Projects table matches validation schema requirements
-- Images stored separately in project_images table
-- Service references complete 32-service list
-- Proper slug generation and uniqueness constraints
```