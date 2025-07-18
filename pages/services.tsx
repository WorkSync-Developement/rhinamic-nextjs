import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Link from "next/link";
import { Tractor, Flower, Grid2X2, Sprout, Droplets, Trees, FileText, ChevronDown, ChevronUp } from "lucide-react";

const serviceCategories = [
  {
    icon: <Tractor className="w-8 h-8 text-purple-700" />,
    title: "General Landscaping Services",
    summary: "Design, installation, maintenance, irrigation, lighting, and more.",
    details: [
      { name: "Landscape design", slug: "landscape-design" },
      { name: "Landscape installation", slug: "landscape-installation" },
      { name: "Landscape maintenance", slug: "landscape-maintenance" },
      { name: "Lawn care services", slug: "lawn-care-services" },
      { name: "Sod installation", slug: "sod-installation" },
      { name: "Irrigation system installation & repair", slug: "irrigation-system-installation-repair" },
      { name: "Sprinkler system installation", slug: "sprinkler-system-installation" },
      { name: "Landscape lighting installation", slug: "landscape-lighting-installation" }
    ]
  },
  {
    icon: <Flower className="w-8 h-8 text-purple-700" />,
    title: "Lawn & Turf Services",
    summary: "Lawn care, mowing, aeration, fertilization, turf installation, and edging.",
    details: [
      { name: "Lawn mowing", slug: "lawn-mowing" },
      { name: "Lawn aeration", slug: "lawn-aeration" },
      { name: "Lawn fertilization", slug: "lawn-fertilization" },
      { name: "Weed control", slug: "weed-control" },
      { name: "Grass seeding and overseeding", slug: "grass-seeding-overseeding" },
      { name: "Artificial turf installation", slug: "artificial-turf-installation" },
      { name: "Lawn edging", slug: "lawn-edging" }
    ]
  },
  {
    icon: <Trees className="w-8 h-8 text-purple-700" />,
    title: "Tree & Plant Services",
    summary: "Tree trimming, removal, planting, shrub pruning, palm tree care.",
    details: [
      { name: "Tree trimming", slug: "tree-trimming" },
      { name: "Tree removal", slug: "tree-removal" },
      { name: "Shrub pruning", slug: "shrub-pruning" },
      { name: "Tree planting", slug: "tree-planting" },
      { name: "Palm tree trimming", slug: "palm-tree-trimming" }
    ]
  },
  {
    icon: <Grid2X2 className="w-8 h-8 text-purple-700" />,
    title: "Hardscaping Services",
    summary: "Patios, retaining walls, walkways, stonework, outdoor kitchens, fire pits.",
    details: [
      { name: "Paver patio installation", slug: "paver-patio-installation" },
      { name: "Retaining wall construction", slug: "retaining-wall-construction" },
      { name: "Walkways and pathways", slug: "walkways-pathways" },
      { name: "Stonework and rock features", slug: "stonework-rock-features" },
      { name: "Outdoor kitchens", slug: "outdoor-kitchens" },
      { name: "Fire pit installation", slug: "fire-pit-installation" }
    ]
  },
  {
    icon: <Sprout className="w-8 h-8 text-purple-700" />,
    title: "Xeriscaping & Eco-Friendly",
    summary: "Drought-tolerant landscaping, native plants, rainwater harvesting.",
    details: [
      { name: "Xeriscaping (drought-tolerant landscaping)", slug: "xeriscaping" },
      { name: "Native plant landscaping", slug: "native-plant-landscaping" },
      { name: "Drip irrigation systems", slug: "drip-irrigation-systems" },
      { name: "Rainwater harvesting integration", slug: "services" }
    ]
  },
  {
    icon: <Droplets className="w-8 h-8 text-purple-700" />,
    title: "Seasonal & Cleanup Services",
    summary: "Spring/fall cleanup, mulching, storm cleanup, seasonal planting.",
    details: [
      { name: "Fall leaf cleanup", slug: "services" },
      { name: "Spring yard cleanup", slug: "services" },
      { name: "Storm damage cleanup", slug: "services" },
      { name: "Mulching", slug: "services" },
      { name: "Seasonal flower planting", slug: "services" }
    ]
  }
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container-custom max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-12 text-purple-900 drop-shadow-sm">Our Services</h1>
            <div className="flex flex-col gap-8 mb-10">
              {serviceCategories.map((cat, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className={`transition-all duration-300 bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden ${isOpen ? 'ring-2 ring-green-400 z-10 relative' : ''}`}
                  >
                    <button
                      className={`flex items-start gap-6 w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-green-400 group ${isOpen ? 'bg-purple-50' : ''}`}
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`accordion-content-${idx}`}
                      id={`accordion-header-${idx}`}
                      type="button"
                    >
                      <div>{cat.icon}</div>
                      <div className="flex-1 border-l-4 pl-6" style={{ borderColor: '#22c55e' }}>
                        <h2 className="text-xl font-semibold mb-2 text-purple-800">{cat.title}</h2>
                        <p className="text-gray-700 text-base">{cat.summary}</p>
                      </div>
                      <span className="ml-4 mt-2">
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-purple-500" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-purple-400" />
                        )}
                      </span>
                    </button>
                    <div
                      id={`accordion-content-${idx}`}
                      aria-labelledby={`accordion-header-${idx}`}
                      className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 py-4 px-8' : 'max-h-0 opacity-0 py-0 px-8'} overflow-hidden`}
                    >
                      {isOpen && (
                        <ul>
                          {cat.details.map((item) => (
                            <li key={item.slug} className="text-gray-700 text-base pl-3 py-1 list-disc list-inside">
                              <Link href={item.slug === "services" ? "/services" : `/services/${item.slug}`} className="text-purple-700 hover:underline">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/services.md" legacyBehavior>
                <a className="flex items-center gap-2 bg-purple-800 text-white px-7 py-4 rounded-full font-medium shadow hover:bg-purple-900 transition-all text-lg">
                  <FileText className="w-6 h-6" />
                  View Complete Services List
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
