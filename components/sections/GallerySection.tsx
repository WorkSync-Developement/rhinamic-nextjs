import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Camera, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    "/images/gallery/garden1.jpg",
    "/images/gallery/garden2.jpg", 
    "/images/gallery/garden3.jpg",
    "/images/gallery/garden4.jpg",
    "/images/gallery/garden5.jpg",
    "/images/gallery/garden6.jpg",
  ];
  
  return (
    <section className="py-20 bg-rhinamic-light" id="gallery">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-6 text-rhinamic-dark">Our Project Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning landscapes we've designed and maintained
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-md group h-72 shadow-md border-2 border-white hover:shadow-lg transition-all duration-300">
              <Image 
                src={image} 
                alt={`Landscape project ${index + 1}`} 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Landscape Project {index + 1}</h3>
                  <p className="text-sm text-white/80">San Antonio, TX</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/gallery" 
            className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border-b-2 border-rhinamic-lavender/50"
          >
            <Camera size={20} />
            <span>View Full Gallery</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
