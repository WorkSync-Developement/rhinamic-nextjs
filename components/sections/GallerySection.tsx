import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Camera, ChevronRight } from "lucide-react";
import { getSupabaseClient } from "../../lib/supabase";

interface FeaturedProject {
  id: string;
  title: string;
  service_name: string;
  location: string;
  primary_image_url: string;
}

const GallerySection = () => {
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProjects();
  }, []);

  const loadFeaturedProjects = async () => {
    try {
      const supabase = getSupabaseClient();
      
      // Fetch featured projects with their primary images
      const { data, error } = await supabase
        .from('projects')
        .select(`
          id,
          title,
          service_name,
          location,
          project_images!left (
            public_url,
            is_primary
          )
        `)
        .eq('status', 'published')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(6); // Limit to 6 projects for homepage

      if (error) {
        console.error('Error loading featured projects:', error);
        return;
      }

      // Transform data to get primary images
      const transformedProjects: FeaturedProject[] = (data || [])
        .map(project => {
          const primaryImage = project.project_images?.find(img => img.is_primary);
          if (!primaryImage?.public_url) return null; // Skip projects without images
          
          return {
            id: project.id,
            title: project.title,
            service_name: project.service_name,
            location: project.location || 'San Antonio, TX',
            primary_image_url: primaryImage.public_url
          };
        })
        .filter(Boolean) as FeaturedProject[];

      setFeaturedProjects(transformedProjects);
    } catch (error) {
      console.error('Failed to load featured projects:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="py-12 sm:py-20 bg-rhinamic-light" id="gallery">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-rhinamic-dark">Our Project Gallery</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Browse through our collection of stunning landscapes we've designed and maintained
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-rhinamic-primary border-r-transparent"></div>
          </div>
        ) : featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="relative overflow-hidden rounded-lg group h-64 sm:h-72 shadow-md border-2 border-white hover:shadow-lg transition-all duration-300 active:scale-95">
                <Image 
                  src={project.primary_image_url} 
                  alt={project.title} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-500 group-hover:scale-105 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-white/90 mb-1">{project.service_name}</p>
                    <p className="text-xs sm:text-sm text-white/80">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">
              <Camera size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No featured projects available</p>
              <p className="text-sm">Featured projects will appear here once configured by an administrator.</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <Link 
            href="/gallery" 
            className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 border-b-2 border-rhinamic-lavender/50 text-sm sm:text-base"
          >
            <Camera size={18} className="sm:hidden" />
            <Camera size={20} className="hidden sm:block" />
            <span>View Full Gallery</span>
            <ChevronRight size={14} className="ml-1 sm:hidden" />
            <ChevronRight size={16} className="ml-1 hidden sm:block" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
