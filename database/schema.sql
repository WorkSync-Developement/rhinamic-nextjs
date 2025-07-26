-- Rhinamic Landscape Design - Supabase Database Schema
-- This schema supports the project gallery system with multi-image uploads,
-- before/after labeling, admin user management, and service integration.

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- SERVICES TABLE
-- =============================================================================
CREATE TABLE services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert complete services list based on actual website pages (32 total)
INSERT INTO services (name, slug, description, display_order) VALUES
  -- Core Landscaping Services
  ('Landscape Design', 'landscape-design', 'Professional landscape design and planning services', 1),
  ('Landscape Installation', 'landscape-installation', 'Complete landscape installation and construction', 2),
  ('Landscape Maintenance', 'landscape-maintenance', 'Ongoing landscape care and maintenance', 3),
  ('Native Plant Landscaping', 'native-plant-landscaping', 'Native Texas plant installation and design', 4),
  
  -- Lawn Services
  ('Lawn Care Services', 'lawn-care-services', 'Comprehensive lawn care and maintenance', 5),
  ('Lawn Installation', 'lawn-installation', 'New lawn installation and establishment', 6),
  ('Lawn Fertilization', 'lawn-fertilization', 'Professional lawn fertilization programs', 7),
  ('Sod Installation', 'sod-installation', 'Professional sod installation services', 8),
  ('Artificial Turf Installation', 'artificial-turf-installation', 'Synthetic grass installation and setup', 9),
  ('Weed Control', 'weed-control', 'Professional weed prevention and removal', 10),
  
  -- Tree and Plant Services
  ('Tree Planting', 'tree-planting', 'Professional tree selection and planting', 11),
  ('Tree Trimming', 'tree-trimming', 'Expert tree pruning and maintenance', 12),
  ('Palm Tree Trimming', 'palm-tree-trimming', 'Specialized palm tree care and trimming', 13),
  ('Shrub Pruning', 'shrub-pruning', 'Professional shrub trimming and shaping', 14),
  ('Cactus Services', 'cactus', 'Cactus installation, maintenance, and removal', 15),
  
  -- Garden Services
  ('Garden Maintenance', 'garden-maintenance', 'Complete garden care and upkeep', 16),
  ('Mulching Services', 'mulching-services', 'Professional mulch installation and maintenance', 17),
  
  -- Hardscaping and Structures
  ('Paver Patio Installation', 'paver-patio-installation', 'Custom paver patio design and installation', 18),
  ('Concrete Work', 'concrete-work', 'Concrete walkways, patios, and structures', 19),
  ('Stonework & Rock Features', 'stonework-rock-features', 'Natural stone installation and rock gardens', 20),
  ('Walkways & Pathways', 'walkways-pathways', 'Custom walkway and pathway construction', 21),
  ('Retaining Wall Construction', 'retaining-wall-construction', 'Professional retaining wall design and build', 22),
  ('Rusted Iron Walls', 'rusted-iron-walls', 'Decorative rusted iron wall installation', 23),
  
  -- Outdoor Living Spaces
  ('Outdoor Kitchens', 'outdoor-kitchens', 'Custom outdoor kitchen design and construction', 24),
  ('Fire Pit Installation', 'fire-pit-installation', 'Custom fire pit design and installation', 25),
  ('Pergolas', 'pergolas', 'Custom pergola design and construction', 26),
  ('Decks', 'decks', 'Professional deck construction and design', 27),
  ('Fence Installation', 'fence-installation', 'Residential and commercial fence installation', 28),
  
  -- Water and Lighting Systems
  ('Drip Irrigation Systems', 'drip-irrigation-systems', 'Efficient drip irrigation installation', 29),
  ('Drainage Solutions', 'drainage-solutions', 'Professional drainage system installation', 30),
  ('Landscape Lighting Installation', 'landscape-lighting-installation', 'Outdoor lighting design and installation', 31),
  
  -- Specialized Services
  ('Xeriscaping', 'xeriscaping', 'Drought-tolerant landscape design and installation', 32);

-- =============================================================================
-- PROJECTS TABLE
-- =============================================================================
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  service_name VARCHAR(100) NOT NULL, -- Denormalized for easier queries
  location VARCHAR(200) DEFAULT 'San Antonio, TX',
  status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =============================================================================
-- PROJECT IMAGES TABLE
-- =============================================================================
CREATE TABLE project_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  storage_path VARCHAR(500) NOT NULL, -- Path in Supabase Storage
  public_url VARCHAR(500) NOT NULL,   -- Public URL for display
  alt_text VARCHAR(200),
  caption TEXT,
  image_type VARCHAR(20) DEFAULT 'general' CHECK (image_type IN ('before', 'after', 'during', 'general')),
  is_primary BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  file_size INTEGER, -- Size in bytes
  mime_type VARCHAR(50),
  width INTEGER,
  height INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure only one primary image per project
CREATE UNIQUE INDEX idx_one_primary_per_project 
ON project_images (project_id) 
WHERE is_primary = true;

-- =============================================================================
-- ADMIN USERS TABLE (extends Supabase auth.users)
-- =============================================================================
CREATE TABLE admin_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(100),
  role VARCHAR(20) DEFAULT 'editor' CHECK (role IN ('super_admin', 'admin', 'editor')),
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =============================================================================
-- INDEXES FOR PERFORMANCE
-- =============================================================================

-- Projects indexes
CREATE INDEX idx_projects_service_id ON projects(service_id);
CREATE INDEX idx_projects_service_name ON projects(service_name);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX idx_projects_featured ON projects(is_featured) WHERE is_featured = true;

-- Project images indexes
CREATE INDEX idx_project_images_project_id ON project_images(project_id);
CREATE INDEX idx_project_images_type ON project_images(image_type);
CREATE INDEX idx_project_images_primary ON project_images(is_primary) WHERE is_primary = true;
CREATE INDEX idx_project_images_order ON project_images(project_id, display_order);

-- Services indexes
CREATE INDEX idx_services_active ON services(is_active) WHERE is_active = true;
CREATE INDEX idx_services_order ON services(display_order);

-- Admin profiles indexes
CREATE INDEX idx_admin_profiles_role ON admin_profiles(role);
CREATE INDEX idx_admin_profiles_active ON admin_profiles(is_active) WHERE is_active = true;

-- =============================================================================
-- FUNCTIONS AND TRIGGERS
-- =============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update_updated_at trigger to all tables
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_project_images_updated_at BEFORE UPDATE ON project_images
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_profiles_updated_at BEFORE UPDATE ON admin_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '-', 'g'));
END;
$$ language 'plpgsql';

-- Function to ensure unique slug
CREATE OR REPLACE FUNCTION ensure_unique_project_slug()
RETURNS TRIGGER AS $$
DECLARE
    base_slug TEXT;
    counter INTEGER;
    new_slug TEXT;
BEGIN
    -- Generate base slug from title
    base_slug := generate_slug(NEW.title);
    new_slug := base_slug;
    counter := 1;
    
    -- Check if slug exists (excluding current record for updates)
    WHILE EXISTS (
        SELECT 1 FROM projects 
        WHERE slug = new_slug 
        AND (TG_OP = 'INSERT' OR id != NEW.id)
    ) LOOP
        new_slug := base_slug || '-' || counter;
        counter := counter + 1;
    END LOOP;
    
    NEW.slug := new_slug;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply slug generation trigger
CREATE TRIGGER ensure_unique_project_slug_trigger 
    BEFORE INSERT OR UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION ensure_unique_project_slug();

-- =============================================================================
-- VIEWS FOR COMMON QUERIES
-- =============================================================================

-- View for projects with primary image and service details
CREATE VIEW projects_with_images AS
SELECT 
    p.*,
    s.name as service_display_name,
    s.slug as service_slug,
    pi.public_url as primary_image_url,
    pi.alt_text as primary_image_alt,
    (SELECT COUNT(*) FROM project_images WHERE project_id = p.id) as total_images,
    (SELECT COUNT(*) FROM project_images WHERE project_id = p.id AND image_type = 'before') as before_images,
    (SELECT COUNT(*) FROM project_images WHERE project_id = p.id AND image_type = 'after') as after_images
FROM projects p
LEFT JOIN services s ON p.service_id = s.id
LEFT JOIN project_images pi ON p.id = pi.project_id AND pi.is_primary = true
WHERE p.status = 'published'
ORDER BY p.created_at DESC;

-- View for admin dashboard statistics
CREATE VIEW admin_stats AS
SELECT 
    (SELECT COUNT(*) FROM projects WHERE status = 'published') as published_projects,
    (SELECT COUNT(*) FROM projects WHERE status = 'draft') as draft_projects,
    (SELECT COUNT(*) FROM project_images) as total_images,
    (SELECT COUNT(*) FROM services WHERE is_active = true) as active_services,
    (SELECT COUNT(*) FROM admin_profiles WHERE is_active = true) as active_admins;

-- =============================================================================
-- SUPABASE STORAGE CONFIGURATION REQUIRED
-- =============================================================================
/*
IMPORTANT: This schema works with Supabase Storage for image handling.
After running this schema, you must also:

1. Create Storage Bucket:
   - Name: 'project-images'
   - Public: true
   - File size limit: 10MB
   - Allowed MIME types: image/jpeg, image/jpg, image/png, image/webp

2. Apply Storage Policies:
   - Run supabase-storage-config.sql for proper security policies
   
3. Configure Storage Structure:
   - Folder pattern: projects/{project-slug}/{size}/filename.ext
   - Sizes: original, thumbnails, medium, large

See supabase-storage-config.sql for complete storage setup instructions.
*/

-- =============================================================================
-- COMMENTS FOR DOCUMENTATION
-- =============================================================================

COMMENT ON TABLE services IS 'Service types offered by Rhinamic Landscape Design - All 32 actual services from website';
COMMENT ON TABLE projects IS 'Completed projects to be displayed in the gallery';
COMMENT ON TABLE project_images IS 'Images associated with projects, supporting before/after labeling and stored in Supabase Storage';
COMMENT ON TABLE admin_profiles IS 'Admin user profiles with role-based permissions';

COMMENT ON COLUMN project_images.image_type IS 'Type of image: before, after, during (work), or general';
COMMENT ON COLUMN project_images.is_primary IS 'Primary image shown in project listings';
COMMENT ON COLUMN project_images.storage_path IS 'Path to image file in Supabase Storage bucket';
COMMENT ON COLUMN project_images.public_url IS 'Public URL for displaying the image';
COMMENT ON COLUMN admin_profiles.role IS 'User role: super_admin, admin, or editor';
COMMENT ON COLUMN projects.status IS 'Project status: published, draft, or archived';