import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import ProjectFilter from "../components/gallery/ProjectFilter";
import ProjectGrid from "../components/gallery/ProjectGrid";
import ProjectModal from "../components/gallery/ProjectModal";

interface GalleryImage {
  id: string;
  name: string;
  description: string;
  url: string;
  createdTime: string;
}

interface Project {
  title: string;
  slug: string;
  image: string;
  service: string;
  description: string;
  createdAt?: string;
}

interface LightboxImage {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  beforeImageUrl?: string;
}

export default function Gallery() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch gallery images from Google Drive
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        // Fetch gallery images from Google Drive
        const galleryResponse = await fetch('/api/gallery/images');
        if (galleryResponse.ok) {
          const galleryData = await galleryResponse.json();
          setGalleryImages(galleryData);
        }

        // Fetch projects data
        const projectsResponse = await fetch('/data/projects.json');
        if (projectsResponse.ok) {
          const projectsData = await projectsResponse.json();
          setProjects(projectsData);
        }
      } catch (err) {
        console.error('Error fetching gallery data:', err);
        setError('Unable to load gallery images');
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Transform gallery images and projects into unified format
  const allProjects = useMemo(() => {
    // Combine gallery images and JSON projects
    const galleryProjects = galleryImages.map((image, index) => {
      const matchingProject = projects.find(p => p.image && p.image.includes(image.id));
      
      return {
        title: matchingProject?.title || image.name || `Project ${index + 1}`,
        slug: matchingProject?.slug || `project-${index + 1}`,
        image: image.url,
        service: matchingProject?.service || 'Garden Design',
        description: image.description || matchingProject?.description || 'Beautiful landscaping project in San Antonio, TX',
        createdAt: image.createdTime,
      };
    });

    // Add JSON projects that might not have gallery images yet
    const jsonProjects = projects.map(project => ({
      title: project.title,
      slug: project.slug,
      image: project.image,
      service: project.service,
      description: project.description,
      createdAt: new Date().toISOString(), // Default to current date
    }));

    // Combine and deduplicate
    const combined = [...galleryProjects, ...jsonProjects];
    const unique = combined.filter((project, index, self) => 
      index === self.findIndex(p => p.slug === project.slug)
    );

    return unique;
  }, [galleryImages, projects]);

  // Get unique services for filtering
  const availableServices = useMemo(() => {
    const services = new Set(allProjects.map(project => project.service));
    return Array.from(services).sort();
  }, [allProjects]);

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    // Filter by service
    if (selectedService) {
      filtered = filtered.filter(project => project.service === selectedService);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.service.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [allProjects, selectedService, searchQuery]);

  const openProjectModal = (project: Project) => {
    // Convert project to modal format with multiple images
    const modalProject = {
      title: project.title,
      service: project.service,
      description: project.description,
      images: [{
        id: `${project.slug}-1`,
        url: project.image,
        alt: project.title,
        isPrimary: true,
      }],
      createdAt: project.createdAt,
      location: 'San Antonio, TX',
    };
    setSelectedProject(modalProject);
    setIsModalOpen(true);
  };

  const openLightbox = (project: Project) => {
    // Convert project to lightbox format (keep for backward compatibility)
    const lightboxImage: LightboxImage = {
      id: project.slug,
      title: project.title,
      description: project.description,
      category: project.service,
      location: 'San Antonio, TX',
      year: new Date(project.createdAt || '').getFullYear().toString() || new Date().getFullYear().toString(),
      imageUrl: project.image,
    };
    setSelectedImage(lightboxImage);
    setShowBeforeAfter(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setShowBeforeAfter(false);
  };

  return (
    <>
      <Head>
        <title>Project Gallery | Rhinamic Landscape Design | San Antonio, TX</title>
        <meta name="description" content="Browse our portfolio of stunning landscape projects in San Antonio. From xeriscaping to outdoor kitchens, see our professional landscaping work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/gallery" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Project Filter */}
          <ProjectFilter
            services={availableServices}
            selectedService={selectedService}
            onServiceChange={setSelectedService}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            projectCount={filteredProjects.length}
            totalCount={allProjects.length}
          />

          {/* Gallery Grid */}
          <section className="py-16">
            <div className="container-custom max-w-6xl mx-auto px-4">
              {loading && (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-r-transparent"></div>
                  <p className="mt-4 text-gray-600">Loading gallery images...</p>
                </div>
              )}
              
              {error && (
                <div className="text-center py-12">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
              
              {!loading && !error && (
                <ProjectGrid 
                  projects={filteredProjects}
                  viewMode={viewMode}
                  onProjectClick={openProjectModal}
                />
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Landscape?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's create something beautiful together. Contact us for a free consultation 
                and see how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2012544911"
                  className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call (201) 254-4911
                </a>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={showBeforeAfter && selectedImage.beforeImageUrl ? selectedImage.beforeImageUrl : selectedImage.imageUrl}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded">
                        {selectedImage.category}
                      </span>
                      <span className="text-sm text-gray-500">{selectedImage.year}</span>
                    </div>
                    {selectedImage.beforeImageUrl && (
                      <button
                        onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                        className="bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-purple-800 transition-colors"
                      >
                        {showBeforeAfter ? "Show After" : "Show Before"}
                      </button>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {selectedImage.description}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    📍 {selectedImage.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      </Layout>
    </>
  );
}
