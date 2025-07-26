import { CheckCircle, Wrench, Shield, Truck, Clock, Phone, Droplets, Sun, Scissors } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

export default function ArtificialTurfInstallation() {
  const serviceFeatures = [
    {
      title: "Premium Turf Selection",
      description: "High-quality artificial turf designed to look and feel like natural grass with UV protection for San Antonio's intense sun."
    },
    {
      title: "Professional Installation",
      description: "Expert installation with proper base preparation, drainage, and securing techniques for long-lasting, beautiful results."
    },
    {
      title: "Custom Design Options",
      description: "Multiple turf styles, colors, and pile heights to match your aesthetic preferences and functional needs."
    },
    {
      title: "Drainage Solutions",
      description: "Integrated drainage systems designed to handle San Antonio's heavy rains and prevent water pooling on your turf."
    },
    {
      title: "Pet-Friendly Options",
      description: "Specialized pet turf with antimicrobial backing, superior drainage, and easy-clean surfaces for pet owners."
    },
    {
      title: "Sports & Recreation",
      description: "Performance turf designed for play areas, putting greens, and sports applications with appropriate infill systems."
    },
    {
      title: "Maintenance-Free Beauty",
      description: "No mowing, watering, or fertilizing required. Enjoy a perfect lawn year-round with minimal maintenance."
    },
    {
      title: "Water Conservation",
      description: "Eliminate lawn watering and contribute to water conservation efforts while maintaining beautiful landscaping."
    }
  ];

  const plans = [
    {
      name: "Basic Installation",
      icon: <Truck className="w-8 h-8 text-green-600" />,
      description: "Standard artificial turf installation",
      features: [
        "Quality synthetic turf",
        "Basic base preparation",
        "Standard installation",
        "1-year warranty"
      ]
    },
    {
      name: "Premium Installation",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      description: "Enhanced turf with superior features",
      highlight: true,
      features: [
        "All Basic services",
        "Premium turf material",
        "Enhanced drainage system",
        "Professional edging",
        "5-year warranty"
      ]
    },
    {
      name: "Luxury Installation",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      description: "Top-tier turf with all upgrades",
      features: [
        "All Premium services",
        "Luxury turf materials",
        "Custom design features",
        "Pet-friendly options",
        "10-year warranty"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Perfect installation season",
        "Brush to restore pile",
        "Check for winter damage"
      ]
    },
    {
      season: "Summer",
      items: [
        "Rinse during hot periods",
        "Monitor drainage",
        "Enjoy maintenance-free lawn"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove fallen leaves",
        "Inspect seams and edges",
        "Ideal installation weather"
      ]
    },
    {
      season: "Winter",
      items: [
        "Minimal maintenance needed",
        "Snow removal safe",
        "Planning and preparation"
      ]
    }
  ];

  const faq = [
    {
      question: "How long does artificial turf last?",
      answer: "High-quality artificial turf typically lasts 15-20 years with proper installation and minimal maintenance. Our premium materials come with comprehensive warranties up to 10 years."
    },
    {
      question: "Is artificial turf safe for children and pets?",
      answer: "Yes, our artificial turf is non-toxic, lead-free, and designed with safety in mind. We offer specialized pet-friendly options with antimicrobial properties and superior drainage."
    },
    {
      question: "How much water will I save with artificial turf?",
      answer: "San Antonio homeowners typically save 50-70% on their water bill by replacing natural grass with artificial turf. That's thousands of gallons per year in water conservation."
    },
    {
      question: "Does artificial turf get hot in Texas summer?",
      answer: "Modern artificial turf is designed with heat-reducing technology. We also recommend infill options that help keep surface temperatures comfortable even in San Antonio's summer heat."
    }
  ];

  return (
    <ServicesLayout
      title="Professional Artificial Turf Installation"
      description="Expert artificial turf installation in San Antonio, TX. Water-saving, low-maintenance synthetic grass solutions. Professional installation with warranty."
      heroTitle="Professional Artificial Turf Installation"
      heroDescription="Transform your outdoor space with premium artificial turf that looks and feels like natural grass. Perfect for San Antonio's climate—no watering, mowing, or maintenance required while enjoying a beautiful lawn year-round."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for a Maintenance-Free Lawn?"
      ctaDescription="Discover the freedom of artificial turf. No more watering, mowing, or fertilizing—just beautiful, green lawn space that's perfect for families, pets, and entertaining all year long."
    >
      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Professional Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Site Preparation</h3>
              <p className="text-gray-700">
                Remove existing grass, excavate to proper depth, and prepare a stable base with proper grading for drainage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Base Installation</h3>
              <p className="text-gray-700">
                Install and compact aggregate base material, ensuring proper drainage and creating a smooth, stable foundation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Turf Installation</h3>
              <p className="text-gray-700">
                Precisely cut and install artificial turf, ensuring proper alignment, seam placement, and secure attachment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Finishing & Infill</h3>
              <p className="text-gray-700">
                Add appropriate infill material, brush turf to proper pile height, and complete edge finishing for a professional look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Artificial Turf */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Artificial Turf in San Antonio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Droplets className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Water Conservation</h3>
                <p className="text-gray-700">
                  Save thousands of gallons of water annually and reduce your water bill by 50-70%. Perfect for San Antonio's 
                  water conservation efforts and drought restrictions.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Sun className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Heat & UV Resistant</h3>
                <p className="text-gray-700">
                  Our premium turf is designed to withstand San Antonio's intense sun and heat with advanced UV protection 
                  that prevents fading and degradation.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Scissors className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">No Maintenance</h3>
                <p className="text-gray-700">
                  Eliminate mowing, watering, fertilizing, and pesticide applications. Enjoy a perfect lawn year-round 
                  with minimal upkeep requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turf Options */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Artificial Turf Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Residential Turf</h3>
              <p className="text-gray-700 mb-4">
                Beautiful, realistic turf perfect for front yards, backyards, and landscaping applications. Available in 
                multiple colors and textures to match your preferences.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Natural green color variations</li>
                <li>• Soft, comfortable texture</li>
                <li>• Family and pet friendly</li>
                <li>• Long-lasting durability</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Specialty Applications</h3>
              <p className="text-gray-700 mb-4">
                Specialized turf options for unique needs including pet areas, putting greens, playgrounds, and 
                commercial applications with specific performance requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Pet turf with antimicrobial backing</li>
                <li>• Putting green surfaces</li>
                <li>• Playground safety turf</li>
                <li>• Commercial grade options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Long-Term Savings</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Annual Savings with Artificial Turf</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Water costs:</span>
                    <strong>$800-1,200/year</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Lawn service:</span>
                    <strong>$1,500-2,500/year</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Fertilizer & chemicals:</span>
                    <strong>$200-400/year</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Equipment & repairs:</span>
                    <strong>$300-500/year</strong>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span><strong>Total Annual Savings:</strong></span>
                    <strong className="text-green-600">$2,800-4,600</strong>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Investment Payback</h3>
                <p className="text-gray-700 mb-4">
                  Quality artificial turf typically pays for itself within 3-5 years through water savings, elimination 
                  of lawn care costs, and increased property value.
                </p>
                <p className="text-gray-700">
                  <strong>Plus:</strong> 15-20 years of maintenance-free enjoyment with no ongoing costs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
}