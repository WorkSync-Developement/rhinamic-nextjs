# Supabase SQL Execution Order

Execute these SQL files in the following order for proper Supabase setup:

## 1. Main Database Schema
```sql
-- File: schema.sql
-- What it does: Creates all tables, indexes, triggers, and views with complete 32-service list
-- Time: ~30 seconds
```
**Run first** - This creates the core database structure

## 2. Functions and Triggers (if separated)
```sql
-- File: functions-triggers.sql (referenced in migration-setup.sql)
-- What it does: Creates helper functions for RLS and data processing
-- Time: ~10 seconds
```
**Run second** - Helper functions needed for RLS policies

## 3. Row Level Security Policies
```sql
-- File: rls-policies.sql
-- What it does: Sets up security policies for public/admin access
-- Time: ~15 seconds
```
**Run third** - Security policies depend on functions from step 2

## 4. Storage Configuration
```sql
-- File: supabase-storage-config.sql
-- What it does: Creates storage bucket and policies for images
-- Time: ~10 seconds
```
**Run fourth** - Storage setup for image uploads

## 5. Complete Services Insert (Optional)
```sql
-- File: complete-services-list.sql
-- What it does: Updates services with complete list (already in schema.sql)
-- Time: ~5 seconds
```
**Skip this** - Services are already inserted in schema.sql

## Alternative: Single Migration Script
```sql
-- File: migration-setup.sql
-- What it does: Comprehensive setup with cleanup and verification
-- Time: ~45 seconds
```
**OR use this instead** - Single script that handles most setup

---

## RECOMMENDED EXECUTION ORDER:

### Option A: Individual Files (More Control)
1. `schema.sql` - Core database structure
2. `rls-policies.sql` - Security policies  
3. `supabase-storage-config.sql` - Storage setup

### Option B: Single Migration (Easier)
1. `migration-setup.sql` - Complete setup
2. `supabase-storage-config.sql` - Storage setup

---

## POST-EXECUTION STEPS:

### In Supabase Dashboard:
1. **Storage > Create Bucket:**
   - Name: `project-images`
   - Public: ✅ Yes
   - File size limit: 10MB
   - MIME types: image/jpeg, image/jpg, image/png, image/webp

2. **Authentication > Users:**
   - Create your first admin user
   - Assign to `admin_profiles` table with role 'super_admin'

3. **API > Settings:**
   - Note your project URL and anon key for frontend

### Verification Queries:
```sql
-- Check services count (should be 32)
SELECT COUNT(*) FROM services;

-- Check tables created
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Test RLS policies
SELECT * FROM services; -- Should work (public)
```

---

## FILE PURPOSES:

- **schema.sql** ✅ Main database structure (USE THIS)
- **rls-policies.sql** ✅ Security policies (USE THIS)  
- **supabase-storage-config.sql** ✅ Storage setup (USE THIS)
- **migration-setup.sql** ✅ Alternative single setup
- **complete-services-list.sql** ❌ Skip (redundant)
- **project-data-analysis.md** 📋 Documentation only
- **services-audit.md** 📋 Documentation only
- **schema-ui-verification.md** 📋 Documentation only