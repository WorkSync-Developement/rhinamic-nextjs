-- Create Admin User for Rhinamic Dashboard
-- Simple approach: Create user in Supabase Dashboard, then run this SQL

-- =============================================================================
-- STEP 1: CREATE USER IN SUPABASE DASHBOARD FIRST
-- =============================================================================
/*
1. Go to Supabase Dashboard → Authentication → Users
2. Click "Add user"
3. Email: rhinamic@gmail.com
4. Password: Elaine606!
5. Click "Create user"
6. Copy the User ID from the users list
7. Replace {USER_ID} below with the actual UUID
*/

-- =============================================================================
-- STEP 2: ADD TO ADMIN PROFILES TABLE
-- =============================================================================

-- Replace {USER_ID} with the actual UUID from the dashboard
INSERT INTO admin_profiles (id, email, full_name, role, is_active)
VALUES (
  '{USER_ID}',  -- REPLACE THIS WITH ACTUAL USER ID
  'rhinamic@gmail.com',
  'Rhinamic Admin',
  'super_admin',
  true
);

-- =============================================================================
-- VERIFY CREATION
-- =============================================================================

SELECT 
  id,
  email,
  full_name,
  role,
  is_active,
  created_at
FROM admin_profiles 
WHERE email = 'rhinamic@gmail.com';