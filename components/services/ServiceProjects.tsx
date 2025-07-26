import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, Calendar, ExternalLink } from 'lucide-react';
import projectsData from '../../public/data/projects.json';

interface ServiceProject {
  title: string;
  slug: string;
  image: string;
  service: string;
  description: string;
  createdAt?: string;
}

interface ServiceProjectsProps {
  serviceName: string;
  showTitle?: boolean;
  maxProjects?: number;
  className?: string;
}

// Service name mapping to handle variations in naming
const serviceNameMappings: Record<string, string[]> = {
  "Landscape Design": ["Landscape Design", "Garden Design", "landscape design"],
  "Landscape Installation": ["Landscape Installation", "landscape installation"],
  "Paver Patio Installation": ["Paver Patio Installation", "paver patio", "patio installation"],
  "Hardscaping": ["Hardscaping", "hardscape", "hardscaping"],
  "Xeriscaping": ["Xeriscaping", "xeriscaping", "drought-tolerant", "native plants"],
  "Irrigation": ["Irrigation", "irrigation", "drip irrigation"],
  "Landscape Lighting": ["Landscape Lighting", "landscape lighting", "outdoor lighting"],
  "Tree Services": ["Tree Services", "tree trimming", "tree planting", "palm tree"],
  "Lawn Maintenance": ["Lawn Maintenance", "lawn care", "lawn installation", "sod installation"],
  "Concrete Work": ["Concrete Work", "concrete", "walkways", "pathways"],
  "Artificial Turf Installation": ["Artificial Turf Installation", "artificial turf"],
  "Garden Maintenance": ["Garden Maintenance", "garden design", "shrub pruning"],
};

export default function ServiceProjects({ 
  serviceName, 
  showTitle = true, 
  maxProjects = 6,
  className = "" 
}: ServiceProjectsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Find projects that match this service
  const relevantProjects = useMemo(() => {
    const projects = projectsData as ServiceProject[];
    
    // Get all possible variations of the service name
    const serviceVariations = serviceNameMappings[serviceName] || [serviceName];
    
    // Find projects that match any of the service variations
    const matchingProjects = projects.filter(project => {
      return serviceVariations.some(variation => 
        project.service.toLowerCase().includes(variation.toLowerCase()) ||
        project.title.toLowerCase().includes(variation.toLowerCase()) ||
        project.description.toLowerCase().includes(variation.toLowerCase())
      );
    });

    // Sort by creation date (newest first) and limit
    return matchingProjects
      .sort((a, b) => {
        const dateA = new Date(a.createdAt || '').getTime();
        const dateB = new Date(b.createdAt || '').getTime();
        return dateB - dateA;
      })
      .slice(0, maxProjects);
  }, [serviceName, maxProjects]);

  if (relevantProjects.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container-custom max-w-6xl mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Our {serviceName} Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              See examples of our professional {serviceName.toLowerCase()} work in San Antonio
            </p>
            
            {/* View Mode Toggle */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:text-gray-900 border'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:text-gray-900 border'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        )}

        {/* Projects Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relevantProjects.map((project, index) => (
              <div key={project.slug || index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                {/* Project Image */}
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
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {project.service}
                    </span>
                  </div>
                  
                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link 
                      href="/gallery"
                      className="flex items-center gap-1 bg-white text-purple-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors"
                    >
                      <Eye size={14} />
                      View Details
                    </Link>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  
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
        ) : (
          <div className="space-y-6">
            {relevantProjects.map((project, index) => (
              <div key={project.slug || index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="md:flex">
                  {/* Project Image */}
                  <div className="md:w-1/3">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      
                      {/* Service Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {project.service}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-purple-900 mb-3 hover:text-purple-700 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {project.createdAt && (
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar size={14} />
                            {new Date(project.createdAt).toLocaleDateString()}
                          </div>
                        )}
                        
                        <Link 
                          href="/gallery"
                          className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium text-sm"
                        >
                          View Details
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}