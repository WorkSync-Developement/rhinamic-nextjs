import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const projects = [
  {
    title: "Modern Paver Patio",
    slug: "modern-paver-patio",
    image: "/gallery/patio1.jpg",
    service: "Paver Patio Installation"
  },
  {
    title: "Native Plant Xeriscape",
    slug: "native-plant-xeriscape",
    image: "/gallery/xeriscape1.jpg",
    service: "Xeriscaping (drought-tolerant landscaping)"
  }
  // Add more project objects here as needed
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container-custom max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-12 text-purple-900 drop-shadow-sm">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="relative group rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-end aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/60 to-transparent py-3 px-5">
                    <span className="text-lg font-semibold text-white drop-shadow-sm">{project.service}</span>
                  </div>
                  <div className="relative z-10 p-4 mt-auto">
                    <span className="text-base font-medium text-purple-900 bg-white/80 rounded px-2 py-1 shadow">
                      {project.title}
                    </span>
                  </div>
                  <span className="absolute inset-0 z-20 group-hover:bg-purple-900/10 transition-colors" />
                </a>
              ))}
            </div>
            <div className="text-center mt-14">
              <span className="text-lg text-gray-600">Click a project to view more details.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
