import { getSupabaseClient } from './supabase';

export interface AuthResult {
  success: boolean;
  error?: string | null;
  user?: any;
}

export const authService = {
  // Sign in with Supabase
  async signIn(email: string, password: string): Promise<AuthResult> {
    // Only attempt sign in on client side
    if (typeof window === 'undefined') {
      return { success: false, error: 'Authentication only available on client side' };
    }

    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      return { success: true, user: data.user };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Authentication failed' 
      };
    }
  },

  // Sign out with Supabase
  async signOut(): Promise<void> {
    // Only attempt sign out on client side
    if (typeof window === 'undefined') {
      console.warn('Sign out only available on client side');
      return;
    }

    try {
      const supabase = getSupabaseClient();
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Supabase sign out error:', error);
    }
  },

  // Check authentication status
  async isAuthenticated(): Promise<boolean> {
    // On server side, assume not authenticated
    if (typeof window === 'undefined') {
      return false;
    }

    try {
      const supabase = getSupabaseClient();
      const { data: { session } } = await supabase.auth.getSession();
      return !!session;
    } catch (error) {
      console.error('Auth check error:', error);
      return false;
    }
  },

  // Get current user
  async getCurrentUser() {
    // On server side, return null
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      const supabase = getSupabaseClient();
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  }
};

// Server-side authentication check for API routes
export async function requireAuth(req: any, res: any) {
  // TODO: Implement server-side Supabase auth check
  // For now, return true to allow development
  return true;
}

// Middleware for protecting pages - moved to components/auth/withAuth.tsx
// This is just a placeholder for now
export function withAuth(WrappedComponent: any) {
  return WrappedComponent;
}