-- Rhinamic Database Setup Migration Script
-- Run this script in your Supabase SQL editor to set up the complete database schema

-- =============================================================================
-- STEP 1: VERIFY PREREQUISITES
-- =============================================================================

-- Check if we're running on Supabase (should have auth schema)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'auth') THEN
        RAISE EXCEPTION 'This script must be run on a Supabase instance with auth schema';
    END IF;
    
    RAISE NOTICE 'Supabase instance detected. Proceeding with setup...';
END
$$;

-- =============================================================================
-- STEP 2: CLEANUP (if re-running)
-- =============================================================================

-- Drop existing policies (if any)
DROP POLICY IF EXISTS "Public can read active services" ON services;
DROP POLICY IF EXISTS "Admins can read all services" ON services;
DROP POLICY IF EXISTS "Admins can insert services" ON services;
DROP POLICY IF EXISTS "Admins can update services" ON services;
DROP POLICY IF EXISTS "Super admins can delete services" ON services;

DROP POLICY IF EXISTS "Public can read published projects" ON projects;
DROP POLICY IF EXISTS "Admins can read all projects" ON projects;
DROP POLICY IF EXISTS "Editors can insert projects" ON projects;
DROP POLICY IF EXISTS "Editors can update projects" ON projects;
DROP POLICY IF EXISTS "Admins can delete projects" ON projects;

DROP POLICY IF EXISTS "Public can read published project images" ON project_images;
DROP POLICY IF EXISTS "Admins can read all project images" ON project_images;
DROP POLICY IF EXISTS "Editors can insert project images" ON project_images;
DROP POLICY IF EXISTS "Editors can update project images" ON project_images;
DROP POLICY IF EXISTS "Editors can delete project images" ON project_images;

DROP POLICY IF EXISTS "Users can read own profile" ON admin_profiles;
DROP POLICY IF EXISTS "Admins can read all profiles" ON admin_profiles;
DROP POLICY IF EXISTS "Super admins can insert profiles" ON admin_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON admin_profiles;
DROP POLICY IF EXISTS "Super admins can update any profile" ON admin_profiles;
DROP POLICY IF EXISTS "Super admins can delete other profiles" ON admin_profiles;

-- Drop existing functions
DROP FUNCTION IF EXISTS get_published_projects(TEXT, TEXT, INTEGER);
DROP FUNCTION IF EXISTS has_role_or_higher(TEXT);
DROP FUNCTION IF EXISTS get_user_role();
DROP FUNCTION IF EXISTS is_admin_user();
DROP FUNCTION IF EXISTS ensure_unique_project_slug();
DROP FUNCTION IF EXISTS generate_slug(TEXT);
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Drop existing views
DROP VIEW IF EXISTS admin_stats;
DROP VIEW IF EXISTS projects_with_images;

-- Drop existing triggers
DROP TRIGGER IF EXISTS ensure_unique_project_slug_trigger ON projects;
DROP TRIGGER IF EXISTS update_admin_profiles_updated_at ON admin_profiles;
DROP TRIGGER IF EXISTS update_project_images_updated_at ON project_images;
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
DROP TRIGGER IF EXISTS update_services_updated_at ON services;

-- Drop existing indexes (will be recreated)
DROP INDEX IF EXISTS idx_admin_profiles_active;
DROP INDEX IF EXISTS idx_admin_profiles_role;
DROP INDEX IF EXISTS idx_services_order;
DROP INDEX IF EXISTS idx_services_active;
DROP INDEX IF EXISTS idx_project_images_order;
DROP INDEX IF EXISTS idx_project_images_primary;
DROP INDEX IF EXISTS idx_project_images_type;
DROP INDEX IF EXISTS idx_project_images_project_id;
DROP INDEX IF EXISTS idx_projects_featured;
DROP INDEX IF EXISTS idx_projects_created_at;
DROP INDEX IF EXISTS idx_projects_status;
DROP INDEX IF EXISTS idx_projects_service_name;
DROP INDEX IF EXISTS idx_projects_service_id;
DROP INDEX IF EXISTS idx_one_primary_per_project;

-- Drop existing tables (careful - this will delete data!)
-- Uncomment the following lines only if you want to completely reset the database
-- DROP TABLE IF EXISTS admin_profiles CASCADE;
-- DROP TABLE IF EXISTS project_images CASCADE;
-- DROP TABLE IF EXISTS projects CASCADE;
-- DROP TABLE IF EXISTS services CASCADE;

-- =============================================================================
-- STEP 3: CREATE TABLES
-- =============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  service_name VARCHAR(100) NOT NULL,
  location VARCHAR(200) DEFAULT 'San Antonio, TX',
  status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Project images table
CREATE TABLE IF NOT EXISTS project_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  storage_path VARCHAR(500) NOT NULL,
  public_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(200),
  caption TEXT,
  image_type VARCHAR(20) DEFAULT 'general' CHECK (image_type IN ('before', 'after', 'during', 'general')),
  is_primary BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  file_size INTEGER,
  mime_type VARCHAR(50),
  width INTEGER,
  height INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Admin profiles table
CREATE TABLE IF NOT EXISTS admin_profiles (
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
-- STEP 4: CREATE INDEXES
-- =============================================================================

-- Unique constraint for one primary image per project
CREATE UNIQUE INDEX IF NOT EXISTS idx_one_primary_per_project 
ON project_images (project_id) 
WHERE is_primary = true;

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_projects_service_id ON projects(service_id);
CREATE INDEX IF NOT EXISTS idx_projects_service_name ON projects(service_name);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured) WHERE is_featured = true;

CREATE INDEX IF NOT EXISTS idx_project_images_project_id ON project_images(project_id);
CREATE INDEX IF NOT EXISTS idx_project_images_type ON project_images(image_type);
CREATE INDEX IF NOT EXISTS idx_project_images_primary ON project_images(is_primary) WHERE is_primary = true;
CREATE INDEX IF NOT EXISTS idx_project_images_order ON project_images(project_id, display_order);

CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_services_order ON services(display_order);

CREATE INDEX IF NOT EXISTS idx_admin_profiles_role ON admin_profiles(role);
CREATE INDEX IF NOT EXISTS idx_admin_profiles_active ON admin_profiles(is_active) WHERE is_active = true;

-- =============================================================================
-- STEP 5: INSERT DEFAULT DATA
-- =============================================================================

-- Insert default services (only if table is empty)
INSERT INTO services (name, slug, description, display_order)
SELECT * FROM (VALUES
  ('Lawn Maintenance', 'lawn-maintenance', 'Professional lawn care and maintenance services', 1),
  ('Garden Design', 'garden-design', 'Custom garden design and planning', 2),
  ('Hardscaping', 'hardscaping', 'Stone work, patios, and outdoor structures', 3),
  ('Irrigation', 'irrigation', 'Sprinkler systems and water management', 4),
  ('Landscape Lighting', 'landscape-lighting', 'Outdoor lighting design and installation', 5),
  ('Tree Services', 'tree-services', 'Tree trimming, pruning, and removal', 6),
  ('Paver Patio Installation', 'paver-patio-installation', 'Custom paver patio design and installation', 7),
  ('Xeriscaping', 'xeriscaping', 'Drought-tolerant landscape design', 8),
  ('Landscape Design', 'landscape-design', 'Complete landscape design services', 9),
  ('Landscape Installation', 'landscape-installation', 'Professional landscape installation', 10),
  ('Concrete Work', 'concrete-work', 'Concrete walkways and structures', 11),
  ('Artificial Turf Installation', 'artificial-turf-installation', 'Synthetic grass installation', 12)
) AS v(name, slug, description, display_order)
WHERE NOT EXISTS (SELECT 1 FROM services);

-- =============================================================================
-- COMPLETION MESSAGE
-- =============================================================================

DO $$
BEGIN
    RAISE NOTICE '=============================================================================';
    RAISE NOTICE 'DATABASE SCHEMA SETUP COMPLETE!';
    RAISE NOTICE '=============================================================================';
    RAISE NOTICE 'Next steps:';
    RAISE NOTICE '1. Run the functions and triggers script (functions-triggers.sql)';
    RAISE NOTICE '2. Run the RLS policies script (rls-policies.sql)';
    RAISE NOTICE '3. Configure storage buckets in Supabase dashboard';
    RAISE NOTICE '4. Create your first admin user';
    RAISE NOTICE '=============================================================================';
END
$$;