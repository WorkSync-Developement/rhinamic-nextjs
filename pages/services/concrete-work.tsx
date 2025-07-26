import { CheckCircle, Wrench, Shield, Truck, Clock, Phone } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

export default function ConcreteWork() {
  const serviceFeatures = [
    {
      title: "Concrete Patios",
      description: "Durable, long-lasting concrete patios designed to withstand San Antonio's weather with decorative options for enhanced curb appeal."
    },
    {
      title: "Driveways & Walkways",
      description: "Professional concrete driveways and walkways with proper base preparation, reinforcement, and finishing for lasting durability."
    },
    {
      title: "Decorative Concrete",
      description: "Stamped, stained, and textured concrete finishes that provide the look of natural stone or brick at a fraction of the cost."
    },
    {
      title: "Concrete Repair",
      description: "Expert repair of cracked, sunken, or damaged concrete surfaces using proven techniques and quality materials."
    },
    {
      title: "Foundation Work",
      description: "Residential foundation repair, leveling, and new foundation installation with proper drainage and soil preparation."
    },
    {
      title: "Retaining Walls",
      description: "Structural concrete retaining walls designed to handle San Antonio's clay soil movement and drainage challenges."
    },
    {
      title: "Pool Decks",
      description: "Slip-resistant concrete pool decks with proper drainage and decorative finishes for safety and beauty around your pool."
    },
    {
      title: "Commercial Concrete",
      description: "Heavy-duty commercial concrete work including sidewalks, parking areas, and structural elements built to code."
    }
  ];

  const plans = [
    {
      name: "Basic Concrete",
      icon: <Truck className="w-8 h-8 text-gray-600" />,
      description: "Standard concrete installation",
      features: [
        "Basic concrete mix",
        "Standard finishing",
        "Proper curing",
        "Clean worksite"
      ]
    },
    {
      name: "Enhanced Concrete",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      description: "Upgraded concrete with reinforcement",
      highlight: true,
      features: [
        "All Basic services",
        "Fiber reinforcement",
        "Decorative edging",
        "Sealed surface",
        "2-year warranty"
      ]
    },
    {
      name: "Premium Decorative",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      description: "High-end decorative concrete work",
      features: [
        "All Enhanced services",
        "Stamped or stained finish",
        "Premium sealers",
        "Custom colors/patterns",
        "5-year warranty"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Ideal concrete pouring season",
        "Inspect winter damage",
        "Plan major projects"
      ]
    },
    {
      season: "Summer",
      items: [
        "Early morning pours",
        "Extra curing protection",
        "Heat stress prevention"
      ]
    },
    {
      season: "Fall",
      items: [
        "Perfect curing conditions",
        "Prepare for winter",
        "Seal existing concrete"
      ]
    },
    {
      season: "Winter",
      items: [
        "Repair and maintenance",
        "Planning phase",
        "Interior concrete work"
      ]
    }
  ];

  const faq = [
    {
      question: "How long does concrete take to cure?",
      answer: "Concrete reaches initial set in 24-48 hours but continues curing for 28 days to reach full strength. We protect your concrete during this critical period and provide care instructions."
    },
    {
      question: "What's the difference between concrete and cement?",
      answer: "Cement is an ingredient in concrete. Concrete is a mixture of cement, sand, gravel, and water. We use high-quality concrete mixes designed for San Antonio's climate and soil conditions."
    },
    {
      question: "How do you prevent cracking in concrete?",
      answer: "We use proper base preparation, correct concrete mix design, fiber reinforcement, control joints, and proper curing techniques. These methods significantly reduce the risk of cracking."
    },
    {
      question: "Can you match existing concrete colors?",
      answer: "Yes, we can match most existing concrete colors using integral color or staining techniques. We'll provide samples to ensure the best match for your project."
    }
  ];

  return (
    <ServicesLayout
      title="Professional Concrete Work"
      description="Expert concrete services in San Antonio, TX. Driveways, patios, walkways, and decorative concrete installation. 41+ years experience with quality results."
      heroTitle="Professional Concrete Work & Installation"
      heroDescription="Expert concrete services for residential and commercial properties in San Antonio. From basic slabs to decorative stamped concrete, we deliver durable, beautiful results built to last in Texas conditions."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for Quality Concrete Work?"
      ctaDescription="Whether you need a new driveway, patio repair, or decorative concrete installation, our experienced team delivers professional results with attention to detail and lasting quality."
    >
      {/* Our Concrete Process */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Concrete Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Site Preparation</h3>
              <p className="text-gray-700">
                Proper excavation, base preparation, and grading. We ensure proper drainage and stable foundation for your concrete.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Forming & Reinforcement</h3>
              <p className="text-gray-700">
                Precise forming and reinforcement placement. We use quality materials and proper techniques for structural integrity.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Pouring & Finishing</h3>
              <p className="text-gray-700">
                Expert concrete placement and finishing. We achieve the right texture, slope, and appearance for your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Curing & Protection</h3>
              <p className="text-gray-700">
                Proper curing and protection during the critical 28-day strength development period for lasting durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Concrete Work */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Our Concrete Lasts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Wrench className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Quality Materials</h3>
                <p className="text-gray-700">
                  We use only high-grade concrete mixes, proper reinforcement, and quality aggregates designed to perform 
                  in San Antonio's challenging climate and soil conditions.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Shield className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Proven Techniques</h3>
                <p className="text-gray-700">
                  Four generations of construction experience means we know the right way to handle San Antonio's 
                  clay soil, drainage challenges, and foundation requirements.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Truck className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  41+ years in San Antonio gives us deep understanding of local building codes, soil conditions, 
                  and the specific challenges concrete faces in our climate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Options */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Decorative Concrete Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Stamped Concrete</h3>
              <p className="text-gray-700 mb-4">
                Create the look of natural stone, brick, or wood with stamped concrete patterns. Available in dozens of 
                patterns and colors for patios, driveways, and walkways.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Stone and slate patterns</li>
                <li>• Brick and cobblestone designs</li>
                <li>• Wood plank textures</li>
                <li>• Custom color combinations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Stained & Polished</h3>
              <p className="text-gray-700 mb-4">
                Transform plain concrete with acid stains, water-based stains, or polished finishes. Perfect for interior 
                and exterior applications with endless color possibilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Acid stain earth tones</li>
                <li>• Water-based vibrant colors</li>
                <li>• Polished concrete floors</li>
                <li>• Decorative scoring patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
}