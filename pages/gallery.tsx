import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image from "next/image";

interface GalleryImage {
  id: string;
  name: string;
  description: string;
  url: string;
  createdTime: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch('/api/gallery/images');
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images');
        }
        
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Unable to load gallery images. Please try again later.');
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container-custom max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-12 text-purple-900 drop-shadow-sm">Gallery</h1>
            
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
            
            {!loading && !error && images.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No gallery images found.</p>
              </div>
            )}

            {!loading && !error && images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative group rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-end aspect-[4/3]"
                  >
                    <Image
                      src={image.url}
                      alt={image.name}
                      className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-300"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    {image.description && (
                      <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/60 to-transparent py-3 px-5">
                        <span className="text-lg font-semibold text-white drop-shadow-sm">{image.description}</span>
                      </div>
                    )}
                    <div className="relative z-10 p-4 mt-auto">
                      <span className="text-base font-medium text-purple-900 bg-white/80 rounded px-2 py-1 shadow">
                        {image.name}
                      </span>
                    </div>
                    <span className="absolute inset-0 z-20 group-hover:bg-purple-900/10 transition-colors" />
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-center mt-14">
              <span className="text-lg text-gray-600">Explore our landscaping projects and design inspirations.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
