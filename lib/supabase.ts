import { createClient } from '@supabase/supabase-js'
import { createBrowserClient, createServerClient } from '@supabase/ssr'

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Browser client for client-side operations - only create when needed
export const createClientComponentClient = () => {
  if (typeof window === 'undefined') {
    // Return null on server-side, let components handle this gracefully
    return null
  }
  
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

// Safe client creation that can be called anywhere
export const getSupabaseClient = () => {
  if (typeof window !== 'undefined') {
    // Browser environment
    return createBrowserClient(supabaseUrl, supabaseAnonKey)
  } else {
    // Server environment - return basic client for non-auth operations
    return createClient(supabaseUrl, supabaseAnonKey)
  }
}

// Server client for server-side operations (API routes, SSR)
export const createServerComponentClient = (cookieStore: any) => {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  })
}

// Simple client for basic operations (non-auth) - safe for SSR
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (to be expanded as we build the schema)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          slug: string
          description: string
          service_id: string | null
          status: string
          featured: boolean
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description: string
          service_id?: string | null
          status?: string
          featured?: boolean
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string
          service_id?: string | null
          status?: string
          featured?: boolean
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      project_images: {
        Row: {
          id: string
          project_id: string
          storage_path: string
          public_url: string
          alt_text: string | null
          is_primary: boolean
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          storage_path: string
          public_url: string
          alt_text?: string | null
          is_primary?: boolean
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          storage_path?: string
          public_url?: string
          alt_text?: string | null
          is_primary?: boolean
          display_order?: number
          created_at?: string
        }
      }
    }
  }
}