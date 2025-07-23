import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import { X, ZoomIn, Filter, Camera, Leaf, Droplets, Scissors, Hammer, Sun } from "lucide-react";

interface GalleryImage {
  id: string;
  name: string;
  description: string;
  url: string;
  createdTime: string;
}

interface ProjectImage {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  beforeImageUrl?: string;
}

const serviceCategories = [
  "Lawn Maintenance",
  "Garden Design", 
  "Hardscaping",
  "Irrigation",
  "Landscape Lighting",
  "Tree Services"
];

const categories = [
  { name: "All", icon: Camera },
  { name: "Lawn Maintenance", icon: Leaf },
  { name: "Garden Design", icon: Leaf },
  { name: "Hardscaping", icon: Hammer },
  { name: "Irrigation", icon: Droplets },
  { name: "Landscape Lighting", icon: Sun },
  { name: "Tree Services", icon: Scissors }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
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

  // Transform gallery images into project format for display
  const transformedImages: ProjectImage[] = galleryImages.map((image, index) => {
    // Try to match with existing projects or create default data
    const matchingProject = projects.find(p => p.image && p.image.includes(image.id));
    
    return {
      id: image.id,
      title: matchingProject?.title || image.name || `Project ${index + 1}`,
      description: image.description || matchingProject?.description || 'Beautiful landscaping project in San Antonio, TX',
      category: matchingProject?.service || 'Garden Design',
      location: 'San Antonio, TX',
      year: new Date(image.createdTime).getFullYear().toString(),
      imageUrl: image.url,
    };
  });

  const filteredImages = selectedCategory === "All" 
    ? transformedImages 
    : transformedImages.filter(img => img.category === selectedCategory);

  // Update category counts dynamically
  const categoriesWithCounts = categories.map(cat => ({
    ...cat,
    count: cat.name === "All" ? transformedImages.length : transformedImages.filter(img => img.category === cat.name).length
  }));

  const openLightbox = (image: ProjectImage) => {
    setSelectedImage(image);
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
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Project Gallery
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Explore our portfolio of stunning landscape transformations across San Antonio. 
                  From drought-tolerant xeriscaping to luxurious outdoor living spaces.
                </p>
              </div>
            </div>
          </section>

          {/* Filter Categories */}
          <section className="py-8 bg-gray-50 border-b">
            <div className="container-custom max-w-6xl mx-auto px-4">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="text-purple-700" size={20} />
                <h2 className="text-lg font-semibold text-purple-900">Filter by Category</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {categoriesWithCounts.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category.name
                          ? "bg-purple-800 text-white shadow-md"
                          : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-800 border border-gray-200"
                      }`}
                    >
                      <IconComponent size={16} />
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredImages.map((image) => (
                    <div
                      key={image.id}
                      className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="text-purple-700" size={16} />
                        </div>
                        {image.beforeImageUrl && (
                          <div className="absolute top-4 left-4 bg-purple-700 text-white px-2 py-1 rounded text-xs font-medium">
                            Before/After
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-purple-700 bg-purple-50 px-2 py-1 rounded">
                            {image.category}
                          </span>
                          <span className="text-sm text-gray-500">{image.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {image.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          📍 {image.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && !error && filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No projects found in this category.</p>
                </div>
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
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Free Consultation
                </a>
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
      </Layout>
    </>
  );
}
