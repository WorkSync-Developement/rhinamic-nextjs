import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useRouter } from "next/router";

const projects = [
  {
    title: "Modern Paver Patio",
    slug: "modern-paver-patio",
    image: "/gallery/patio1.jpg",
    service: "Paver Patio Installation",
    description: "A modern paver patio with clean lines, custom seating, and integrated lighting. Designed for outdoor entertaining and relaxation."
  },
  {
    title: "Native Plant Xeriscape",
    slug: "native-plant-xeriscape",
    image: "/gallery/xeriscape1.jpg",
    service: "Xeriscaping (drought-tolerant landscaping)",
    description: "Low-maintenance, water-wise landscape featuring native Texas plants and stone pathways."
  }
  // Add more project objects here
];

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <span className="text-gray-500 text-xl">Project not found.</span>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-green-50/30">
          <div className="container-custom max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-semibold mb-4 text-purple-900">{project.title}</h1>
            <h2 className="text-lg mb-6 text-green-700">{project.service}</h2>
            <img src={project.image} alt={project.title} className="rounded-xl w-full mb-8 object-cover aspect-[4/3]" />
            <p className="text-base text-gray-800 mb-8">{project.description}</p>
            <a href="/gallery" className="text-purple-700 underline">Back to Gallery</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
