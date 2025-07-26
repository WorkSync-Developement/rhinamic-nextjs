import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Grid, List, Calendar, ArrowRight, Tag } from 'lucide-react';
import projectsData from '../../public/data/projects.json';

interface ServiceProject {
  title: string;
  slug: string;
  image: string;
  service: string;
  description: string;
  createdAt?: string;
}

interface ServiceProjectsFilterProps {
  serviceName: string;
  showAllLink?: boolean;
  className?: string;
}

// Extended service mapping for better filtering
const serviceKeywords: Record<string, string[]> = {
  "Landscape Design": ["design", "planning", "garden", "landscape"],
  "Landscape Installation": ["installation", "planting", "landscape"],
  "Paver Patio Installation": ["paver", "patio", "stone", "hardscape"],
  "Hardscaping": ["hardscape", "stone", "concrete", "paver", "retaining"],
  "Xeriscaping": ["xeriscape", "drought", "native", "water-wise"],
  "Irrigation": ["irrigation", "drip", "watering", "sprinkler"],
  "Landscape Lighting": ["lighting", "outdoor lighting", "illumination"],
  "Tree Services": ["tree", "trimming", "pruning", "palm"],
  "Lawn Maintenance": ["lawn", "grass", "mowing", "maintenance"],
  "Concrete Work": ["concrete", "walkway", "pathway", "driveway"],
  "Artificial Turf Installation": ["turf", "artificial", "synthetic"],
};

export default function ServiceProjectsFilter({ 
  serviceName, 
  showAllLink = true,
  className = "" 
}: ServiceProjectsFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get all projects related to this service
  const serviceProjects = useMemo(() => {
    const projects = projectsData as ServiceProject[];
    const keywords = serviceKeywords[serviceName] || [serviceName];
    
    return projects.filter(project => {
      return keywords.some(keyword => 
        project.service.toLowerCase().includes(keyword.toLowerCase()) ||
        project.title.toLowerCase().includes(keyword.toLowerCase()) ||
        project.description.toLowerCase().includes(keyword.toLowerCase())
      );
    });
  }, [serviceName]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = serviceProjects;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.service.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        case 'oldest':
          return new Date(a.createdAt || '').getTime() - new Date(b.createdAt || '').getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [serviceProjects, searchQuery, sortBy]);

  if (serviceProjects.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container-custom max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            {serviceName} Project Gallery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Browse our completed {serviceName.toLowerCase()} projects in San Antonio
          </p>
        </div>

        {/* Controls */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500" size={20} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex bg-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                title="Grid view"
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                title="List view"
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {filteredProjects.length === serviceProjects.length 
                ? `Showing all ${serviceProjects.length} ${serviceName.toLowerCase()} projects`
                : `Showing ${filteredProjects.length} of ${serviceProjects.length} ${serviceName.toLowerCase()} projects`
              }
            </p>
          </div>
        </div>

        {/* Projects Display */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms to find what you're looking for.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear search
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.slug || index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1">
                {/* Project Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Service Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-1 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      <Tag size={12} />
                      {project.service}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            {filteredProjects.map((project, index) => (
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
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-purple-900 hover:text-purple-700 transition-colors flex-1">
                            {project.title}
                          </h3>
                          <div className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium ml-3">
                            <Tag size={12} />
                            {project.service}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {project.description}
                        </p>
                      </div>
                      
                      {project.createdAt && (
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar size={14} />
                          {new Date(project.createdAt).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Projects Link */}
        {showAllLink && (
          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Projects in Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}