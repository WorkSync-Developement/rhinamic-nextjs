import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

interface Project {
  title: string;
  slug: string;
  image: string;
  service: string;
  description: string;
  createdAt?: string;
}

interface ProjectGridProps {
  projects: Project[];
  viewMode: 'grid' | 'list';
  onProjectClick?: (project: Project) => void;
}

export default function ProjectGrid({ projects, viewMode, onProjectClick }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
          </div>
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            Browse our services
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={`${project.slug}-${index}`}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
            onClick={() => onProjectClick?.(project)}
          >
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/3 lg:w-1/4">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-2/3 lg:w-3/4 p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-purple-900 line-clamp-2 hover:text-purple-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Service Tag */}
                    <div className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mb-3">
                      <Tag size={14} />
                      {project.service}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 line-clamp-3 flex-1 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {project.createdAt && (
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(project.createdAt).toLocaleDateString()}
                      </div>
                    )}
                    
                    <button className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium">
                      View Project
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Grid view
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={`${project.slug}-${index}`}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group hover:-translate-y-1"
          onClick={() => onProjectClick?.(project)}
        >
          {/* Image */}
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Service Tag */}
            <div className="absolute top-4 left-4">
              <div className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-purple-800 text-sm px-3 py-1 rounded-full">
                <Tag size={14} />
                {project.service}
              </div>
            </div>
            
            {/* View Button */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="flex items-center gap-1 bg-white text-purple-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors">
                View Project
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-700 line-clamp-3 mb-4">
              {project.description}
            </p>
            
            {/* Footer */}
            {project.createdAt && (
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar size={14} />
                {new Date(project.createdAt).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}