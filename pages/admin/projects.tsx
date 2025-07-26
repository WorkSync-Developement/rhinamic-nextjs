import React, { useState, useEffect } from "react";
import { getSupabaseClient } from "../../lib/supabase";
import { Plus, X, LogOut, Home as HomeIcon, Edit, Trash2, Eye, Search, Filter, BarChart3, FolderOpen, Users } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { authService } from "../../lib/auth";
import EnhancedProjectForm from "../../components/admin/EnhancedProjectForm";
import { ProjectUploadData } from "../../lib/validations";

// Services will be imported from the EnhancedProjectForm component

function slugify(service: string, title: string) {
  return `${service}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const Sidebar = ({ onLogout }: { onLogout: () => void }) => (
  <aside className="h-screen w-64 bg-purple-900 text-white flex flex-col p-6 fixed left-0 top-0 z-20 justify-between">
    <div>
      <h2 className="text-2xl font-bold mb-8 tracking-tight">Admin</h2>
      <nav className="space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-purple-200 hover:text-white py-2 px-4 rounded hover:bg-purple-800 transition-colors"
        >
          <HomeIcon size={20} /> Home
        </Link>
        
        <Link 
          href="/admin/projects" 
          className="flex items-center gap-2 bg-purple-800 text-white py-2 px-4 rounded font-semibold"
        >
          <FolderOpen size={20} /> Projects
        </Link>
        
        <Link 
          href="/admin/users" 
          className="flex items-center gap-2 text-purple-200 hover:text-white py-2 px-4 rounded hover:bg-purple-800 transition-colors"
        >
          <Users size={20} /> Users
        </Link>
      </nav>
    </div>
    <button
      className="flex items-center gap-2 text-purple-200 hover:text-white mt-8 py-2 px-4 rounded hover:bg-purple-800 font-semibold transition-colors"
      onClick={onLogout}
    >
      <LogOut size={18} /> Log Out
    </button>
  </aside>
);

export default function ProjectsDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterService, setFilterService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  // Check authentication and load projects on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authService.isAuthenticated();
        if (!isAuth) {
          router.push("/admin");
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
      
      // Fetch projects with ALL their images (for editing) and services
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          project_images (
            id,
            public_url,
            alt_text,
            is_primary,
            image_type,
            caption,
            display_order
          ),
          services (
            name,
            slug
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading projects:', error);
        return;
      }

      // Transform data to match expected format
      const transformedProjects = data?.map(project => {
        // Sort images by display_order and find primary image
        const sortedImages = project.project_images?.sort((a, b) => a.display_order - b.display_order) || [];
        const primaryImage = sortedImages.find(img => img.is_primary) || sortedImages[0];
        
        return {
          title: project.title,
          slug: project.slug,
          service: project.service_name,
          description: project.description,
          image: primaryImage?.public_url || '/placeholder-image.jpg',
          status: project.status || 'published',
          location: project.location || 'San Antonio, TX',
          createdAt: project.created_at,
          id: project.id,
          images: sortedImages // Include all images for editing
        };
      }) || [];

      setProjects(transformedProjects);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  };

  async function handleLogout() {
    try {
      await authService.signOut();
      router.push("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-700">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state if authentication failed
  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <p className="text-red-600 mb-4">{authError}</p>
          <button
            onClick={() => router.push("/admin")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  const handleCreateProject = async (data: ProjectUploadData) => {
    try {
      setIsSubmitting(true);
      
      // Upload images to Google Drive API
      const uploadedImages = [];
      for (const imgData of data.images) {
        const formData = new FormData();
        formData.append('image', imgData.file);
        formData.append('description', data.description);
        
        const response = await fetch('/api/gallery/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to upload image');
        }
        
        const result = await response.json();
        uploadedImages.push({
          url: `https://drive.google.com/uc?id=${result.file.id}`,
          isPrimary: imgData.isPrimary,
          order: imgData.order,
        });
      }
      
      const slug = slugify(data.service, data.title);
      const primaryImage = uploadedImages.find(img => img.isPrimary)?.url || uploadedImages[0]?.url || '';
      
      const newProject = {
        title: data.title,
        service: data.service,
        description: data.description,
        image: primaryImage, // For backward compatibility
        slug,
        images: uploadedImages, // New multi-image structure
        createdAt: new Date().toISOString(),
      };
      
      setProjects(prev => [...prev, newProject]);
      setShowForm(false);
      
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditProject = async (data: ProjectUploadData) => {
    if (!editingProject) return;
    
    try {
      setIsSubmitting(true);
      
      // Upload new images to Google Drive API
      const uploadedImages = [];
      for (const imgData of data.images) {
        const formData = new FormData();
        formData.append('image', imgData.file);
        formData.append('description', data.description);
        
        const response = await fetch('/api/gallery/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to upload image');
        }
        
        const result = await response.json();
        uploadedImages.push({
          url: `https://drive.google.com/uc?id=${result.file.id}`,
          isPrimary: imgData.isPrimary,
          order: imgData.order,
        });
      }
      
      const slug = slugify(data.service, data.title);
      const primaryImage = uploadedImages.find(img => img.isPrimary)?.url || uploadedImages[0]?.url || '';
      
      const updatedProject = {
        ...editingProject,
        title: data.title,
        service: data.service,
        description: data.description,
        image: primaryImage,
        slug,
        images: uploadedImages,
        updatedAt: new Date().toISOString(),
      };
      
      setProjects(prev => prev.map((p, index) => 
        index === projects.findIndex(proj => proj === editingProject) ? updatedProject : p
      ));
      
      setEditingProject(null);
      setShowForm(false);
      
    } catch (error) {
      console.error('Error updating project:', error);
      throw new Error('Failed to update project');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const openEditForm = (project: any) => {
    setEditingProject(project);
    setShowForm(true);
  };
  
  const handleDeleteProject = (index: number) => {
    if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      setProjects(projects.filter((_, i) => i !== index));
      // Remove from selection if it was selected
      setSelectedProjects(prev => prev.filter(id => id !== index.toString()));
    }
  };

  // Bulk operations handlers

  const closeForm = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  // Get unique services for filter dropdown
  const availableServices = Array.from(new Set(projects.map(p => p.service))).sort();

  // Filter projects based on search and service filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesService = !filterService || project.service === filterService;
    
    return matchesSearch && matchesService;
  });


  return (
    <>
      <Head>
        <title>Project Management | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar onLogout={handleLogout} />
        <main className="ml-64 flex-1 p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-purple-900">Project Management</h1>
              <p className="text-gray-600 mt-1">Manage your gallery projects</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <Eye size={20} />
                View Gallery
              </a>
              
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                <Plus size={20} />
                Add Project
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
                />
              </div>
              
              {/* Service Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={filterService || ''}
                  onChange={(e) => setFilterService(e.target.value || null)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors min-w-[200px]"
                >
                  <option value="">All Services</option>
                  {availableServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>


          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="text-gray-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">
                  {projects.length === 0 
                    ? "Get started by creating your first project"
                    : "Try adjusting your search or filters"
                  }
                </p>
                {projects.length === 0 && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Plus size={20} />
                    Create First Project
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  {/* Project Image */}
                  {proj.image && (
                    <div className="aspect-[4/3] relative bg-gray-100">
                      <Image 
                        src={proj.image} 
                        alt={proj.title} 
                        fill
                        className="object-cover" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-xl font-bold text-purple-900 line-clamp-2 flex-1">
                        {proj.title}
                      </h2>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">
                        {proj.service}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {proj.description}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditForm(proj)}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded hover:bg-blue-50 transition-colors"
                      >
                        <Edit size={16} />
                        Edit
                      </button>
                      
                      <button
                        onClick={() => handleDeleteProject(i)}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-red-600 hover:text-red-700 border border-red-200 rounded hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Modal for Create/Edit Project Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-purple-900">
                {editingProject ? 'Edit Project' : 'Create New Project'}
              </h2>
              <button
                onClick={closeForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <EnhancedProjectForm
                onSubmit={editingProject ? handleEditProject : handleCreateProject}
                onCancel={closeForm}
                initialData={editingProject ? {
                  title: editingProject.title,
                  service: editingProject.service,
                  description: editingProject.description,
                  // Convert existing images to the format expected by the form
                  images: editingProject.images ? editingProject.images.map((img: any, index: number) => ({
                    id: img.id || `existing-${index}`,
                    file: null, // No file for existing images
                    preview: img.public_url || img.url || img.image,
                    isPrimary: img.is_primary || false,
                    order: img.display_order || index,
                    imageType: img.image_type || 'general',
                    caption: img.caption || img.alt_text || '',
                    isExisting: true // Flag to identify existing images
                  })) : []
                } : undefined}
                isLoading={isSubmitting}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
