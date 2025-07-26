import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Calendar, Tag, MapPin } from 'lucide-react';

interface ProjectImage {
  id: string;
  url: string;
  alt?: string;
  isPrimary?: boolean;
  imageType?: 'before' | 'after' | 'during' | 'general';
  caption?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    service: string;
    description: string;
    images: ProjectImage[];
    createdAt?: string;
    location?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset to first image when project changes
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { title, service, description, images, createdAt, location } = project;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="grid lg:grid-cols-2 h-full max-h-[90vh]">
          {/* Image Carousel */}
          <div className="relative bg-gray-900 flex items-center justify-center">
            {images.length > 0 && (
              <>
                {/* Main Image */}
                <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
                  <Image
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].alt || `${title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter with Type */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-2 rounded-full text-sm flex items-center gap-2">
                    <span>{currentImageIndex + 1} / {images.length}</span>
                    {images[currentImageIndex]?.imageType && images[currentImageIndex].imageType !== 'general' && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        images[currentImageIndex].imageType === 'before' ? 'bg-red-500' :
                        images[currentImageIndex].imageType === 'after' ? 'bg-green-500' :
                        images[currentImageIndex].imageType === 'during' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`}>
                        {images[currentImageIndex].imageType.charAt(0).toUpperCase() + images[currentImageIndex].imageType.slice(1)}
                      </span>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 flex-1">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                    <Tag size={14} />
                    {service}
                  </div>
                  {createdAt && (
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={14} />
                      {formatDate(createdAt)}
                    </div>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-purple-900 mb-3">
                  {title}
                </h1>
                
                {location && (
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    {location}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Project Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Image Thumbnails */}
              {images.length > 1 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Project Images ({images.length})
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {images.map((image, index) => (
                      <button
                        key={image.id || index}
                        onClick={() => goToImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                          currentImageIndex === index
                            ? 'border-purple-500 ring-2 ring-purple-200'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Image
                          src={image.url}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12.5vw"
                        />
                        
                        {/* Image Type Badge */}
                        {image.imageType && image.imageType !== 'general' && (
                          <div className={`absolute top-1 left-1 text-white text-xs px-1.5 py-0.5 rounded font-medium ${
                            image.imageType === 'before' ? 'bg-red-500' :
                            image.imageType === 'after' ? 'bg-green-500' :
                            image.imageType === 'during' ? 'bg-yellow-500' :
                            'bg-gray-500'
                          }`}>
                            {image.imageType === 'before' ? 'Before' :
                             image.imageType === 'after' ? 'After' :
                             image.imageType === 'during' ? 'During' : 'General'}
                          </div>
                        )}
                        
                        {/* Primary Badge */}
                        {image.isPrimary && (
                          <div className="absolute top-1 right-1 bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                            Primary
                          </div>
                        )}
                        
                        {/* Active indicator */}
                        {currentImageIndex === index && (
                          <div className="absolute inset-0 bg-purple-600/20 flex items-center justify-center">
                            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Current Image Caption */}
                  {images[currentImageIndex]?.caption && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700 italic">
                        "{images[currentImageIndex].caption}"
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-8 border-t bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors"
                >
                  Get Similar Work Done
                </Link>
                <Link 
                  href="/services"
                  className="flex-1 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-50 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}