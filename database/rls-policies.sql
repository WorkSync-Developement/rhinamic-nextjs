-- Row Level Security (RLS) Policies for Rhinamic Database
-- These policies control access to data based on user roles and authentication status

-- =============================================================================
-- ENABLE RLS ON ALL TABLES
-- =============================================================================

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- HELPER FUNCTIONS FOR RLS
-- =============================================================================

-- Function to check if current user is authenticated admin
CREATE OR REPLACE FUNCTION is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM admin_profiles 
        WHERE id = auth.uid() 
        AND is_active = true
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get current user's admin role
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS TEXT AS $$
BEGIN
    RETURN (
        SELECT role FROM admin_profiles 
        WHERE id = auth.uid() 
        AND is_active = true
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user has specific role or higher
CREATE OR REPLACE FUNCTION has_role_or_higher(required_role TEXT)
RETURNS BOOLEAN AS $$
DECLARE
    user_role TEXT;
    role_hierarchy INTEGER;
    required_hierarchy INTEGER;
BEGIN
    user_role := get_user_role();
    
    -- If no role found, deny access
    IF user_role IS NULL THEN
        RETURN FALSE;
    END IF;
    
    -- Define role hierarchy (higher number = more permissions)
    role_hierarchy := CASE user_role
        WHEN 'super_admin' THEN 3
        WHEN 'admin' THEN 2
        WHEN 'editor' THEN 1
        ELSE 0
    END;
    
    required_hierarchy := CASE required_role
        WHEN 'super_admin' THEN 3
        WHEN 'admin' THEN 2
        WHEN 'editor' THEN 1
        ELSE 0
    END;
    
    RETURN role_hierarchy >= required_hierarchy;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================================================
-- SERVICES TABLE POLICIES
-- =============================================================================

-- Public read access to active services (for website visitors)
CREATE POLICY "Public can read active services" ON services
    FOR SELECT 
    USING (is_active = true);

-- Admins can read all services
CREATE POLICY "Admins can read all services" ON services
    FOR SELECT 
    USING (is_admin_user());

-- Admins can insert services
CREATE POLICY "Admins can insert services" ON services
    FOR INSERT 
    WITH CHECK (has_role_or_higher('admin'));

-- Admins can update services
CREATE POLICY "Admins can update services" ON services
    FOR UPDATE 
    USING (has_role_or_higher('admin'))
    WITH CHECK (has_role_or_higher('admin'));

-- Only super admins can delete services
CREATE POLICY "Super admins can delete services" ON services
    FOR DELETE 
    USING (has_role_or_higher('super_admin'));

-- =============================================================================
-- PROJECTS TABLE POLICIES
-- =============================================================================

-- Public read access to published projects (for website visitors)
CREATE POLICY "Public can read published projects" ON projects
    FOR SELECT 
    USING (status = 'published');

-- Admins can read all projects
CREATE POLICY "Admins can read all projects" ON projects
    FOR SELECT 
    USING (is_admin_user());

-- Editors and above can insert projects
CREATE POLICY "Editors can insert projects" ON projects
    FOR INSERT 
    WITH CHECK (has_role_or_higher('editor'));

-- Editors and above can update projects
CREATE POLICY "Editors can update projects" ON projects
    FOR UPDATE 
    USING (has_role_or_higher('editor'))
    WITH CHECK (has_role_or_higher('editor'));

-- Admins and above can delete projects
CREATE POLICY "Admins can delete projects" ON projects
    FOR DELETE 
    USING (has_role_or_higher('admin'));

-- =============================================================================
-- PROJECT IMAGES TABLE POLICIES
-- =============================================================================

-- Public read access to images of published projects
CREATE POLICY "Public can read published project images" ON project_images
    FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM projects 
            WHERE projects.id = project_images.project_id 
            AND projects.status = 'published'
        )
    );

-- Admins can read all project images
CREATE POLICY "Admins can read all project images" ON project_images
    FOR SELECT 
    USING (is_admin_user());

-- Editors and above can insert project images
CREATE POLICY "Editors can insert project images" ON project_images
    FOR INSERT 
    WITH CHECK (has_role_or_higher('editor'));

-- Editors and above can update project images
CREATE POLICY "Editors can update project images" ON project_images
    FOR UPDATE 
    USING (has_role_or_higher('editor'))
    WITH CHECK (has_role_or_higher('editor'));

-- Editors and above can delete project images
CREATE POLICY "Editors can delete project images" ON project_images
    FOR DELETE 
    USING (has_role_or_higher('editor'));

-- =============================================================================
-- ADMIN PROFILES TABLE POLICIES
-- =============================================================================

-- Users can read their own profile
CREATE POLICY "Users can read own profile" ON admin_profiles
    FOR SELECT 
    USING (id = auth.uid());

-- Admins can read all profiles
CREATE POLICY "Admins can read all profiles" ON admin_profiles
    FOR SELECT 
    USING (has_role_or_higher('admin'));

-- Super admins can insert admin profiles
CREATE POLICY "Super admins can insert profiles" ON admin_profiles
    FOR INSERT 
    WITH CHECK (has_role_or_higher('super_admin'));

-- Users can update their own profile (limited fields)
CREATE POLICY "Users can update own profile" ON admin_profiles
    FOR UPDATE 
    USING (id = auth.uid())
    WITH CHECK (
        id = auth.uid() 
        AND role = (SELECT role FROM admin_profiles WHERE id = auth.uid()) -- Can't change own role
    );

-- Super admins can update any profile
CREATE POLICY "Super admins can update any profile" ON admin_profiles
    FOR UPDATE 
    USING (has_role_or_higher('super_admin'))
    WITH CHECK (has_role_or_higher('super_admin'));

-- Super admins can delete profiles (except their own)
CREATE POLICY "Super admins can delete other profiles" ON admin_profiles
    FOR DELETE 
    USING (
        has_role_or_higher('super_admin') 
        AND id != auth.uid() -- Can't delete own profile
    );

-- =============================================================================
-- STORAGE POLICIES (for Supabase Storage buckets)
-- =============================================================================

-- Note: These would be applied in the Supabase dashboard Storage section

-- Policy for 'project-images' bucket:
-- INSERT: Admins only
-- SELECT: Public (for published projects), Admins (for all)
-- UPDATE: Admins only  
-- DELETE: Admins only

-- Example storage policy (applied via Supabase Dashboard or SQL):
/*
-- Public read access to project images
CREATE POLICY "Public can view project images" ON storage.objects
    FOR SELECT 
    USING (bucket_id = 'project-images');

-- Admins can upload project images
CREATE POLICY "Admins can upload project images" ON storage.objects
    FOR INSERT 
    WITH CHECK (
        bucket_id = 'project-images' 
        AND is_admin_user()
    );

-- Admins can delete project images
CREATE POLICY "Admins can delete project images" ON storage.objects
    FOR DELETE 
    USING (
        bucket_id = 'project-images' 
        AND is_admin_user()
    );
*/

-- =============================================================================
-- SECURITY DEFINER FUNCTIONS FOR PUBLIC API
-- =============================================================================

-- Function for public gallery access (bypasses RLS for published content)
CREATE OR REPLACE FUNCTION get_published_projects(
    service_filter TEXT DEFAULT NULL,
    search_query TEXT DEFAULT NULL,
    limit_count INTEGER DEFAULT 50
)
RETURNS TABLE (
    id UUID,
    title VARCHAR(200),
    slug VARCHAR(200),
    description TEXT,
    service_name VARCHAR(100),
    location VARCHAR(200),
    primary_image_url VARCHAR(500),
    total_images BIGINT,
    created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id,
        p.title,
        p.slug,
        p.description,
        p.service_name,
        p.location,
        pi.public_url as primary_image_url,
        (SELECT COUNT(*) FROM project_images WHERE project_id = p.id) as total_images,
        p.created_at
    FROM projects p
    LEFT JOIN project_images pi ON p.id = pi.project_id AND pi.is_primary = true
    WHERE p.status = 'published'
        AND (service_filter IS NULL OR p.service_name ILIKE '%' || service_filter || '%')
        AND (search_query IS NULL OR 
             p.title ILIKE '%' || search_query || '%' OR 
             p.description ILIKE '%' || search_query || '%' OR
             p.service_name ILIKE '%' || search_query || '%')
    ORDER BY p.created_at DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permissions to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION get_published_projects TO authenticated, anon;

-- =============================================================================
-- SECURITY NOTES
-- =============================================================================

/*
SECURITY CONSIDERATIONS:

1. PUBLIC ACCESS:
   - Only published projects and their images are accessible to the public
   - Services must be active to be visible publicly
   - No sensitive admin data is exposed

2. ROLE HIERARCHY:
   - super_admin: Full access to everything, including user management
   - admin: Can manage projects, services, and images; can read user profiles
   - editor: Can manage projects and images only

3. DATA PROTECTION:
   - Users cannot escalate their own roles
   - Super admins cannot delete their own profiles (prevents lockouts)
   - All administrative actions require proper authentication

4. STORAGE SECURITY:
   - Project images are publicly readable (for website display)
   - Only authenticated admins can upload/modify images
   - Storage policies should be configured in Supabase dashboard

5. AUDIT TRAIL:
   - All tables have created_at and updated_at timestamps
   - Consider adding audit logging for sensitive operations
*/