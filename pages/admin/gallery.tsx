import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { authService } from "../../lib/auth";

interface GalleryImage {
  id: string;
  name: string;
  description: string;
  url: string;
  createdTime: string;
}

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authService.isAuthenticated();
        if (!isAuth) {
          router.push("/login");
          return;
        }
        setIsAuthenticated(true);
        fetchImages();
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/gallery/images");
      
      if (!response.ok) {
        throw new Error("Failed to fetch gallery images");
      }
      
      const data = await response.json();
      setImages(data);
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Unable to load gallery images");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error uploading image");
      }

      // Reset form and refresh gallery
      (e.target as HTMLFormElement).reset();
      await fetchImages();
      alert("Image uploaded successfully!");
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-r-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-900">Gallery Admin</h1>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Back to Site
          </button>
        </div>

        {/* Upload Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New Image</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="image-upload">
                Image File
              </label>
              <input
                id="image-upload"
                type="file"
                name="image"
                accept="image/*"
                required
                className="w-full p-2 border rounded"
              />
              <p className="text-xs text-gray-500 mt-1">
                Max size: 5MB. Supported formats: JPG, PNG, WebP
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full p-2 border rounded"
                placeholder="Describe this landscaping project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={uploading}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
            >
              {uploading ? (
                <span className="flex items-center">
                  <span className="inline-block h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-r-transparent"></span>
                  Uploading...
                </span>
              ) : (
                "Upload Image"
              )}
            </button>
          </form>
        </div>

        {/* Current Images */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Current Gallery {images.length > 0 && `(${images.length} images)`}
          </h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading gallery images...</p>
            </div>
          ) : images.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No images have been uploaded yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={image.url}
                      alt={image.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium truncate">{image.name}</p>
                    {image.description && (
                      <p className="text-xs text-gray-500 mt-1 truncate">{image.description}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(image.createdTime).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
