import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LogOut, 
  Home as HomeIcon, 
  BarChart3, 
  FolderOpen, 
  Users as UsersIcon,
  Settings,
  Star,
  StarOff,
  Save,
  RotateCcw
} from 'lucide-react';
import { authService } from '../../lib/auth';
import { getSupabaseClient } from '../../lib/supabase';

interface Project {
  id: string;
  title: string;
  service_name: string;
  description: string;
  primary_image_url?: string;
  is_featured_homepage: boolean;
}

const Sidebar = ({ onLogout }: { onLogout: () => void }) => (
  <aside className="h-screen w-64 bg-purple-900 text-white flex flex-col p-6 fixed left-0 top-0 z-20 justify-between">
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Rhinamic Admin</h2>
        <p className="text-purple-200 text-sm mt-1">Homepage Settings</p>
      </div>
      
      <nav className="space-y-2">
        <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <FolderOpen size={20} />
          Projects
        </Link>
        <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <UsersIcon size={20} />
          Users
        </Link>
        <Link href="/admin/gallery" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <BarChart3 size={20} />
          Gallery
        </Link>
        <Link href="/admin/homepage-settings" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-800 text-white">
          <Settings size={20} />
          Homepage Settings
        </Link>
      </nav>
    </div>
    
    <div className="space-y-4">
      <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
        <HomeIcon size={20} />
        View Website
      </Link>
      <button
        onClick={onLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors text-left"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  </aside>
);

export default function HomepageSettings() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  // Check authentication and load projects
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authService.isAuthenticated();
        if (!isAuth) {
          router.push("/login");
          return;
        }
        await loadProjects();
      } catch (error) {
        console.error("Auth check error:", error);
        setAuthError("Authentication error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const loadProjects = async () => {
    try {
      const supabase = getSupabaseClient();
      
      // Fetch all projects with their primary images
      const { data, error } = await supabase
        .from('projects')
        .select(`
          id,
          title,
          service_name,
          description,
          is_featured,
          project_images!left (
            public_url,
            is_primary
          )
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading projects:', error);
        return;
      }

      // Transform data and add homepage featured flag (we'll use is_featured for now)
      const transformedProjects: Project[] = data?.map(project => {
        const primaryImage = project.project_images?.find(img => img.is_primary);
        return {
          id: project.id,
          title: project.title,
          service_name: project.service_name,
          description: project.description,
          primary_image_url: primaryImage?.public_url,
          is_featured_homepage: project.is_featured || false
        };
      }) || [];

      setProjects(transformedProjects);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleHomepageFeatured = (projectId: string) => {
    setProjects(prev => prev.map(project => 
      project.id === projectId 
        ? { ...project, is_featured_homepage: !project.is_featured_homepage }
        : project
    ));
  };

  const saveSettings = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const supabase = getSupabaseClient();
      
      // Update each project's featured status
      const updates = projects.map(project => ({
        id: project.id,
        is_featured: project.is_featured_homepage
      }));

      for (const update of updates) {
        const { error } = await supabase
          .from('projects')
          .update({ is_featured: update.is_featured })
          .eq('id', update.id);

        if (error) {
          throw error;
        }
      }

      setMessage({ type: 'success', text: 'Homepage settings saved successfully!' });
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setIsSaving(false);
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const resetSettings = () => {
    loadProjects(); // Reload original settings
    setMessage({ type: 'success', text: 'Settings reset to saved values.' });
    setTimeout(() => setMessage(null), 3000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-r-transparent"></div>
      </div>
    );
  }

  if (authError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
          <p className="text-gray-600">{authError}</p>
        </div>
      </div>
    );
  }

  const featuredCount = projects.filter(p => p.is_featured_homepage).length;

  return (
    <>
      <Head>
        <title>Homepage Settings | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar onLogout={handleLogout} />
        
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-purple-900">Homepage Gallery Settings</h1>
                <p className="text-gray-600 mt-1">Select which projects to display in the homepage gallery section</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{featuredCount}</span> projects selected for homepage
                </div>
                
                <button
                  onClick={resetSettings}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <RotateCcw size={20} />
                  Reset
                </button>
                
                <button
                  onClick={saveSettings}
                  disabled={isSaving}
                  className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  <Save size={20} />
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </div>

            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {message.text}
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Project Selection</h2>
                <p className="text-gray-600 mt-1">Click the star icon to feature/unfeature projects on the homepage gallery.</p>
              </div>
              
              <div className="divide-y">
                {projects.map((project) => (
                  <div key={project.id} className="p-6 flex items-center gap-6">
                    {/* Project Image */}
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      {project.primary_image_url ? (
                        <Image
                          src={project.primary_image_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>
                    
                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-purple-600 font-medium">{project.service_name}</p>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
                    </div>
                    
                    {/* Featured Toggle */}
                    <button
                      onClick={() => toggleHomepageFeatured(project.id)}
                      className={`p-3 rounded-lg transition-colors ${
                        project.is_featured_homepage
                          ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
                          : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                      }`}
                      title={project.is_featured_homepage ? 'Remove from homepage' : 'Feature on homepage'}
                    >
                      {project.is_featured_homepage ? <Star size={24} fill="currentColor" /> : <StarOff size={24} />}
                    </button>
                  </div>
                ))}
              </div>
              
              {projects.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                  <p>No published projects found.</p>
                  <Link href="/admin/projects" className="text-purple-600 hover:text-purple-700 font-medium">
                    Create your first project →
                  </Link>
                </div>
              )}  
            </div>
          </div>
        </main>
      </div>
    </>
  );
}