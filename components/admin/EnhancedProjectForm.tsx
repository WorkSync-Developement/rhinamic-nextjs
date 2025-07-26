import React, { useState, useCallback } from 'react';
import { Plus, X, Upload, Image, AlertCircle, CheckCircle, Move } from 'lucide-react';
import { validateProjectUpload, formatValidationErrors, ProjectUploadData } from '../../lib/validations';

interface ImageUpload {
  file: File | null;
  preview: string;
  isPrimary: boolean;
  order: number;
  id: string;
  imageType: 'before' | 'after' | 'during' | 'general';
  caption?: string;
  isExisting?: boolean; // Flag for existing images
}

interface EnhancedProjectFormProps {
  onSubmit: (data: ProjectUploadData) => Promise<void>;
  onCancel: () => void;
  initialData?: Partial<ProjectUploadData>;
  isLoading?: boolean;
}

const SERVICES = [
  // Core Landscaping Services
  "Landscape Design",
  "Landscape Installation", 
  "Landscape Maintenance",
  "Native Plant Landscaping",
  
  // Lawn Services
  "Lawn Care Services",
  "Lawn Installation",
  "Lawn Fertilization",
  "Sod Installation",
  "Artificial Turf Installation",
  "Weed Control",
  
  // Tree and Plant Services
  "Tree Planting",
  "Tree Trimming",
  "Palm Tree Trimming",
  "Shrub Pruning",
  "Cactus Services",
  
  // Garden Services
  "Garden Maintenance",
  "Mulching Services",
  
  // Hardscaping and Structures
  "Paver Patio Installation",
  "Concrete Work",
  "Stonework & Rock Features",
  "Walkways & Pathways",
  "Retaining Wall Construction",
  "Rusted Iron Walls",
  
  // Outdoor Living Spaces
  "Outdoor Kitchens",
  "Fire Pit Installation",
  "Pergolas",
  "Decks",
  "Fence Installation",
  
  // Water and Lighting Systems
  "Drip Irrigation Systems",
  "Drainage Solutions",
  "Landscape Lighting Installation",
  
  // Specialized Services
  "Xeriscaping",
];

export default function EnhancedProjectForm({ 
  onSubmit, 
  onCancel, 
  initialData,
  isLoading = false 
}: EnhancedProjectFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    service: initialData?.service || SERVICES[0],
    description: initialData?.description || '',
  });

  const [images, setImages] = useState<ImageUpload[]>(
    initialData?.images?.map((img: any, index: number) => ({
      id: img.id || `initial-${index}`,
      file: img.file || null,
      preview: img.preview || img.public_url || img.url || '',
      isPrimary: img.isPrimary || img.is_primary || false,
      order: img.order || img.display_order || index,
      imageType: img.imageType || img.image_type || 'general',
      caption: img.caption || img.alt_text || '',
      isExisting: img.isExisting || true
    })) || []
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dragOver, setDragOver] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const newImages: ImageUpload[] = [];

    fileArray.forEach((file) => {
      // Validate file
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, images: 'Each image must be less than 5MB' }));
        return;
      }

      if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
        setErrors(prev => ({ ...prev, images: 'Only JPEG, PNG, and WebP images are allowed' }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage: ImageUpload = {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: e.target?.result as string,
          isPrimary: images.length === 0 && newImages.length === 0, // First image is primary by default
          order: images.length + newImages.length,
          imageType: 'general', // Default to general
          caption: '',
        };
        newImages.push(newImage);
        
        if (newImages.length === fileArray.length) {
          setImages(prev => [...prev, ...newImages]);
          setErrors(prev => ({ ...prev, images: '' }));
        }
      };
      reader.readAsDataURL(file);
    });
  }, [images.length]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files);
    }
  }, [handleImageUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const removeImage = (id: string) => {
    setImages(prev => {
      const updated = prev.filter(img => img.id !== id);
      // If we removed the primary image, make the first remaining image primary
      if (updated.length > 0 && !updated.some(img => img.isPrimary)) {
        updated[0].isPrimary = true;
      }
      return updated;
    });
  };

  const setPrimaryImage = (id: string) => {
    setImages(prev => prev.map(img => ({
      ...img,
      isPrimary: img.id === id
    })));
  };

  const updateImageType = (id: string, imageType: 'before' | 'after' | 'during' | 'general') => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, imageType } : img
    ));
  };

  const updateImageCaption = (id: string, caption: string) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, caption } : img
    ));
  };

  const moveImage = (id: string, direction: 'up' | 'down') => {
    setImages(prev => {
      const currentIndex = prev.findIndex(img => img.id === id);
      if (currentIndex === -1) return prev;
      
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      
      const updated = [...prev];
      [updated[currentIndex], updated[newIndex]] = [updated[newIndex], updated[currentIndex]];
      
      // Update order values
      updated.forEach((img, index) => {
        img.order = index;
      });
      
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      images: images.map(img => ({
        file: img.file,
        preview: img.preview,
        isPrimary: img.isPrimary,
        order: img.order,
        imageType: img.imageType,
        caption: img.caption,
      })),
    };

    const validation = validateProjectUpload(submitData);
    
    if (!validation.success) {
      setErrors(formatValidationErrors(validation.error));
      return;
    }

    try {
      await onSubmit(validation.data);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ general: 'Failed to upload project. Please try again.' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">
          {initialData ? 'Edit Project' : 'Upload New Project'}
        </h2>
        <p className="text-gray-600">
          Add your completed project to the gallery for visitors to see
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="text-red-500" size={20} />
            <span className="text-red-700">{errors.general}</span>
          </div>
        )}

        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-purple-900 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors ${
                errors.title ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="e.g., Modern Backyard Transformation"
              disabled={isLoading}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-900 mb-2">
              Service Type *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors ${
                errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              disabled={isLoading}
            >
              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.service}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-purple-900 mb-2">
            Project Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors resize-vertical ${
              errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Describe the project, challenges overcome, and key features that make it special..."
            disabled={isLoading}
          />
          <div className="flex justify-between mt-1">
            {errors.description ? (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.description}
              </p>
            ) : (
              <div></div>
            )}
            <span className="text-sm text-gray-500">
              {formData.description.length}/500
            </span>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-purple-900 mb-2">
            Project Images * ({images.length}/10)
          </label>
          
          {/* Upload Area */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragOver 
                ? 'border-purple-400 bg-purple-50' 
                : errors.images 
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 hover:border-purple-300'
            }`}
          >
            <input
              type="file"
              multiple
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={(e) => e.target.files && handleImageUpload(e.target.files)}
              className="hidden"
              id="image-upload"
              disabled={isLoading || images.length >= 10}
            />
            
            <Upload className="mx-auto mb-4 text-gray-400" size={48} />
            
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-700">
                Drop images here or{' '}
                <label 
                  htmlFor="image-upload" 
                  className="text-purple-600 hover:text-purple-700 cursor-pointer underline"
                >
                  browse
                </label>
              </p>
              <p className="text-sm text-gray-500">
                JPEG, PNG, or WebP • Max 5MB per image • Up to 10 images
              </p>
            </div>
          </div>

          {errors.images && (
            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.images}
            </p>
          )}

          {/* Image Previews */}
          {images.length > 0 && (
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Uploaded Images ({images.length}/10)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                  <div key={image.id} className="bg-white border border-gray-200 rounded-lg p-4 space-y-4">
                    {/* Image Preview */}
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image.preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Image Controls Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <div className="flex gap-2">
                          {/* Move Up */}
                          <button
                            type="button"
                            onClick={() => moveImage(image.id, 'up')}
                            disabled={index === 0}
                            className="p-2 bg-white rounded text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Move up"
                          >
                            <Move size={16} className="rotate-180" />
                          </button>
                          
                          {/* Move Down */}
                          <button
                            type="button"
                            onClick={() => moveImage(image.id, 'down')}
                            disabled={index === images.length - 1}
                            className="p-2 bg-white rounded text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Move down"
                          >
                            <Move size={16} />
                          </button>
                          
                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="p-2 bg-red-500 rounded text-white hover:bg-red-600"
                            title="Remove image"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Primary Badge */}
                      {image.isPrimary && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle size={12} />
                          Primary
                        </div>
                      )}
                      
                      {/* Image Type Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          image.imageType === 'before' ? 'bg-red-100 text-red-800' :
                          image.imageType === 'after' ? 'bg-green-100 text-green-800' :
                          image.imageType === 'during' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {image.imageType.charAt(0).toUpperCase() + image.imageType.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Image Controls */}
                    <div className="space-y-3">
                      {/* Image Type Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Image Type
                        </label>
                        <select
                          value={image.imageType}
                          onChange={(e) => updateImageType(image.id, e.target.value as any)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
                        >
                          <option value="general">General</option>
                          <option value="before">Before</option>
                          <option value="after">After</option>
                          <option value="during">During Work</option>
                        </select>
                      </div>
                      
                      {/* Image Caption */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Caption (Optional)
                        </label>
                        <input
                          type="text"
                          value={image.caption || ''}
                          onChange={(e) => updateImageCaption(image.id, e.target.value)}
                          placeholder="Add a caption for this image..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
                        />
                      </div>
                      
                      {/* Primary Image Control */}
                      {!image.isPrimary && (
                        <button
                          type="button"
                          onClick={() => setPrimaryImage(image.id)}
                          className="w-full px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                        >
                          Set as Primary Image
                        </button>
                      )}
                      
                      {image.isPrimary && (
                        <div className="text-center text-sm text-green-600 font-medium py-2">
                          ✓ This is the primary image for the project
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 pt-6 border-t">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isLoading || images.length === 0}
            className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Uploading...
              </>
            ) : (
              <>
                <Upload size={20} />
                {initialData ? 'Update Project' : 'Upload Project'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}