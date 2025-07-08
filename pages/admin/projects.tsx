import React, { useState } from "react";
import projectsData from "../../public/data/projects.json";
import { Plus, X, LogOut, Home as HomeIcon } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  "Lawn Maintenance",
  "Garden Design",
  "Hardscaping",
  "Irrigation",
  "Landscape Lighting",
  "Tree Services",
];

function slugify(service: string, title: string) {
  return `${service}-${title}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const Sidebar = ({ onLogout }: { onLogout: () => void }) => (
  <aside className="h-screen w-64 bg-purple-900 text-white flex flex-col p-6 fixed left-0 top-0 z-20 justify-between">
    <div>
      <h2 className="text-2xl font-bold mb-8 tracking-tight">Admin</h2>
      <nav className="space-y-2">
        <Link href="/" className="text-gray-700 hover:text-purple-800 flex items-center gap-2 mb-8">
          <HomeIcon size={20} /> Home
        </Link>
        <a className="block py-2 px-4 rounded bg-purple-800 font-semibold mt-2" href="#">Projects</a>
      </nav>
    </div>
    <button
      className="flex items-center gap-2 text-purple-200 hover:text-white mt-8 py-2 px-4 rounded hover:bg-purple-800 font-semibold"
      onClick={onLogout}
    >
      <LogOut size={18} /> Log Out
    </button>
  </aside>
);

export default function ProjectsDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [projects, setProjects] = useState(projectsData);
  const [form, setForm] = useState({
    title: "",
    service: SERVICES[0],
    image: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  function handleLogout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("rhinamic_admin");
      router.push("/admin");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImagePreview("");
    }
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};
    
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.service.trim()) newErrors.service = 'Service is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!imagePreview && editingId === null) newErrors.image = 'Image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Don't proceed if validation fails
    }
    
    try {
      let imageUrl = imagePreview;
      
      // If we have a new image file, upload it to Google Drive
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('description', form.description);
        
        const response = await fetch('/api/gallery/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to upload image');
        }
        
        const result = await response.json();
        imageUrl = `https://drive.google.com/uc?id=${result.file.id}`;
      }
      
      const slug = slugify(form.service, form.title);
      const projectData = { 
        ...form, 
        slug, 
        image: imageUrl 
      };
      
      if (editingId !== null) {
        // Update existing project
        setProjects(projects.map((project, index) => 
          index === editingId 
            ? projectData
            : project
        ));
      } else {
        // Add new project
        setProjects([
          ...projects,
          projectData,
        ]);
      }
      
      // Reset form and close modal
      setShowModal(false);
      setEditingId(null);
      setForm({ title: "", service: SERVICES[0], image: "", description: "" });
      setImageFile(null);
      setImagePreview("");
      setErrors({});
      
    } catch (error) {
      console.error('Error saving project:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Failed to save project'}`);
    }
  }
  
  function handleEditProject(index: number) {
    const project = projects[index];
    setForm({
      title: project.title,
      service: project.service,
      image: project.image,
      description: project.description,
    });
    setImagePreview(project.image);
    setEditingId(index);
    setErrors({});
    setShowModal(true);
  }
  
  function handleDeleteProject(index: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((_, i) => i !== index));
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogout={handleLogout} />
      <main className="ml-64 flex-1 p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-purple-900">Project Gallery Dashboard</h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-900 transition"
          >
            <Plus size={20} /> Add Project
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col">
              {proj.image && (
                <Image src={proj.image} alt={proj.title} className="rounded-lg mb-4 h-40 w-full object-cover bg-gray-200" width={400} height={160} />
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-purple-900">{proj.title}</h2>
                  <button 
                    onClick={() => handleEditProject(i)}
                    className="text-purple-600 hover:text-purple-800"
                    aria-label="Edit project"
                  >
                    Edit
                  </button>
                </div>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mb-2">{proj.service}</span>
                <p className="text-gray-700 text-sm mb-2">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-purple-800"
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                  setForm({ title: "", service: SERVICES[0], image: "", description: "" });
                  setImageFile(null);
                  setImagePreview("");
                  setErrors({});
                }}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-purple-900">
                {editingId !== null ? 'Edit Project' : 'Add New Project'}
              </h2>
              <form onSubmit={handleAddProject} className="space-y-5" encType="multipart/form-data">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.service ? 'border-red-500' : 'border-purple-200'} rounded-lg focus:ring-2 focus:ring-purple-300 outline-none`}
                  >
                    {SERVICES.map((svc) => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.title ? 'border-red-500' : 'border-purple-200'} rounded-lg focus:ring-2 focus:ring-purple-300 outline-none`}
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={`w-full px-4 py-2 border ${errors.image ? 'border-red-500' : 'border-purple-200'} rounded-lg focus:ring-2 focus:ring-purple-300 outline-none`}
                  />
                  {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                  {imagePreview && (
                    <Image src={imagePreview} alt="Preview" className="mt-3 rounded-lg h-32 w-full object-cover border border-purple-100" width={400} height={128} />
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500' : 'border-purple-200'} rounded-lg focus:ring-2 focus:ring-purple-300 outline-none`}
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                </div>
                <div className="flex gap-3">
                  {editingId !== null && (
                    <button
                      type="button"
                      onClick={() => handleDeleteProject(editingId)}
                      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 bg-purple-800 text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:bg-purple-900 transition"
                  >
                    {editingId !== null ? 'Update' : 'Add'} Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
