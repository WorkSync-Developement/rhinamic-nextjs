import React, { useState } from 'react';
import { Search, Filter, X, Grid, List } from 'lucide-react';

interface FilterProps {
  services: string[];
  selectedService: string | null;
  onServiceChange: (service: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  projectCount: number;
  totalCount: number;
}

export default function ProjectFilter({
  services,
  selectedService,
  onServiceChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  projectCount,
  totalCount,
}: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    onServiceChange(null);
    onSearchChange('');
  };

  const hasActiveFilters = selectedService || searchQuery;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container-custom max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">Project Gallery</h1>
            <p className="text-gray-600">
              Explore our completed landscaping projects in San Antonio
            </p>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
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
              onClick={() => onViewModeChange('list')}
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

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search projects by title or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter size={20} />
            Filters
            {hasActiveFilters && (
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {(selectedService ? 1 : 0) + (searchQuery ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Service Filter - Desktop always visible, Mobile toggleable */}
          <div className={`flex-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap gap-2">
              {/* All Services Button */}
              <button
                onClick={() => onServiceChange(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedService
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>

              {/* Individual Service Buttons */}
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => onServiceChange(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedService === service
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count and Clear Filters */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              {projectCount === totalCount ? (
                <span>Showing all {totalCount} projects</span>
              ) : (
                <span>Showing {projectCount} of {totalCount} projects</span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 underline"
              >
                <X size={16} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
            <span className="text-sm text-gray-500">Active filters:</span>
            
            {selectedService && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Service: {selectedService}
                <button
                  onClick={() => onServiceChange(null)}
                  className="hover:text-purple-900"
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Search: "{searchQuery}"
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:text-purple-900"
                >
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}