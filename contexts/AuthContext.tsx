import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { getSupabaseClient } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase, setSupabase] = useState<any>(null);

  useEffect(() => {
    // Only initialize Supabase client on the browser
    if (typeof window !== 'undefined') {
      const client = getSupabaseClient();
      setSupabase(client);

      // Get initial session
      const getSession = async () => {
        try {
          const { data: { session }, error } = await client.auth.getSession();
          if (error) {
            console.error('Error getting session:', error);
          } else {
            setSession(session);
            setUser(session?.user ?? null);
          }
        } catch (error) {
          console.error('Error in getSession:', error);
        } finally {
          setLoading(false);
        }
      };

      getSession();

      // Listen for auth changes
      const { data: { subscription } } = client.auth.onAuthStateChange(
        async (event, session) => {
          console.log('Auth state change:', event, session?.user?.email);
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );

      return () => subscription.unsubscribe();
    } else {
      // On server-side, just set loading to false
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!supabase) {
      return { error: 'Supabase client not initialized' };
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Sign in error:', error);
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      console.error('Sign in catch error:', error);
      return { error };
    }
  };

  const signOut = async () => {
    if (!supabase) {
      console.error('Supabase client not initialized');
      return;
    }

    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
      }
    } catch (error) {
      console.error('Sign out catch error:', error);
    }
  };

  const value: AuthContextType = {
    user,
    session,
    loading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

