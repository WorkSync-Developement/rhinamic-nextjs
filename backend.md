# Backend Architecture & Migration Plan

## Current Implementation

### 1. Google API Photo Storage
- **Storage Service**: Google Photos API
- **Implementation**:
  - Photos are uploaded to Google Photos
  - Authentication via OAuth 2.0
  - Media items stored in Google's infrastructure
  - CDN delivery through Google's infrastructure

### 2. Authentication
- **Service**: NextAuth.js
- **Implementation**:
  - Credentials-based authentication
  - Environment-based admin credentials
  - Session management via JWT
  - Protected API routes

## Migration to Supabase

### 1. Supabase Storage for Photos

**Benefits**:
- Direct integration with Next.js
- Built-in CDN
- File organization with buckets
- Row Level Security (RLS)
- Cost-effective at scale

**Implementation Steps**:

1. **Setup Supabase Project**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create Storage Buckets**
   - `public` - For publicly accessible images
   - `private` - For admin-uploaded content
   - `gallery` - For before/after images

3. **Migration Script**
   - Create script to transfer existing Google Photos to Supabase Storage
   - Update image URLs in the database

4. **Update Frontend Components**
   - Replace Google Photos API calls with Supabase Storage
   - Implement upload components using Supabase client

### 2. Supabase Authentication

**Benefits**:
- Built-in auth UI components
- Email/Password, OAuth, and Magic Links
- Row Level Security (RLS)
- Better TypeScript support
- Real-time subscriptions

**Implementation Steps**:

1. **Setup Auth**
   ```bash
   npm install @supabase/auth-helpers-nextjs
   ```

2. **Replace NextAuth Configuration**
   - Remove NextAuth dependencies
   - Set up Supabase client
   - Implement auth state management

3. **Update Protected Routes**
   - Replace NextAuth middleware with Supabase auth helpers
   - Update API routes to use Supabase session

4. **User Management**
   - Migrate existing users
   - Set up RLS policies
   - Implement password reset flow

## Code Examples

### Supabase Client Setup
```typescript
// utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### File Upload Example
```typescript
// components/ImageUpload.tsx
const uploadImage = async (file: File) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = `${fileName}`

  const { error: uploadError } = await supabase.storage
    .from('gallery')
    .upload(filePath, file)

  if (uploadError) throw uploadError
  
  return supabase.storage
    .from('gallery')
    .getPublicUrl(filePath).data.publicUrl
}
```

### Protected API Route
```typescript
// pages/api/admin/upload.ts
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default async function handler(req, res) {
  const supabase = createServerSupabaseClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' })
  }
  
  // Handle upload
}
```

## Migration Checklist

### Phase 1: Setup & Preparation
- [ ] Create Supabase project
- [ ] Set up environment variables
- [ ] Configure storage buckets
- [ ] Set up authentication providers

### Phase 2: Authentication Migration
- [ ] Implement Supabase auth
- [ ] Migrate existing users
- [ ] Update protected routes
- [ ] Test authentication flows

### Phase 3: Photo Storage Migration
- [ ] Create migration script
- [ ] Transfer existing photos
- [ ] Update frontend components
- [ ] Test upload/download functionality

### Phase 4: Cleanup
- [ ] Remove Google Photos API code
- [ ] Remove NextAuth dependencies
- [ ] Update documentation
- [ ] Monitor for issues

## Post-Migration Considerations

1. **Performance Monitoring**
   - Monitor CDN performance
   - Track storage usage
   - Set up alerts for rate limits

2. **Security**
   - Review RLS policies
   - Audit user permissions
   - Set up logging

3. **Backup Strategy**
   - Configure automated backups
   - Test restore process
   - Document recovery procedures

## Rollback Plan
1. Keep Google Photos integration in feature flag
2. Maintain database backups
3. Document rollback procedures
4. Test rollback before full migration
