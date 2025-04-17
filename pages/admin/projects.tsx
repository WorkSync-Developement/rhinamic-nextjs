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
  const [projects, setProjects] = useState(projectsData);
  const [form, setForm] = useState({
    title: "",
    service: SERVICES[0],
    image: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
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

  function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    const slug = slugify(form.service, form.title);
    setProjects([
      ...projects,
      { ...form, slug, image: imagePreview },
    ]);
    setShowModal(false);
    setForm({ title: "", service: SERVICES[0], image: "", description: "" });
    setImageFile(null);
    setImagePreview("");
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
                <h2 className="text-xl font-bold text-purple-900 mb-2">{proj.title}</h2>
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
                  setImageFile(null);
                  setImagePreview("");
                }}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-6 text-purple-900">Add New Project</h2>
              <form onSubmit={handleAddProject} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
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
                    required
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
                  />
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
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-800 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-900 transition"
                >
                  Add Project
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
