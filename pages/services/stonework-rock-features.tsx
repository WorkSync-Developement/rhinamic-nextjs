import React from 'react';
import { CheckCircle, Phone, Mountain, Droplets, Flame, Flower } from 'lucide-react';
import ServicesLayout from '../../components/layout/ServicesLayout';

const StoneworkRockFeaturesPage = () => {
  const serviceFeatures = [
    {
      title: "Native Texas Stone Materials",
      description: "Beautiful, durable stone installations using native Texas materials that complement your landscape and withstand the elements."
    },
    {
      title: "Custom Rock Features",
      description: "Unique, one-of-a-kind stone installations designed specifically for your property and aesthetic preferences."
    },
    {
      title: "Rock Garden Design",
      description: "Drought-tolerant gardens featuring artistic stone arrangements and native plant combinations."
    },
    {
      title: "Water Feature Integration",
      description: "Natural stone fountains, waterfalls, and pond features with professional plumbing and electrical work."
    },
    {
      title: "Fire Feature Construction",
      description: "Stone fire pits, outdoor fireplaces, and cooking areas with proper safety and ventilation considerations."
    },
    {
      title: "Structural Stonework",
      description: "Retaining walls, garden borders, and structural elements combining function with natural beauty."
    },
    {
      title: "Artistic Rock Design",
      description: "Creative rock arrangements and stonework that serve as focal points while providing functional landscape solutions."
    },
    {
      title: "Restoration & Repair",
      description: "Restoration of existing stone features and repair of damaged stonework to original condition."
    }
  ];

  const plans = [
    {
      name: "Basic Stonework",
      icon: <Mountain className="w-8 h-8 text-gray-600" />,
      description: "Perfect for small rock features and borders",
      features: [
        "Rock garden design",
        "Basic stone installation",
        "Border creation",
        "Standard materials"
      ]
    },
    {
      name: "Premium Features",
      icon: <Droplets className="w-8 h-8 text-purple-600" />,
      description: "Complete stone feature installations",
      highlight: true,
      features: [
        "Custom water features",
        "Premium stone selection",
        "Professional installation",
        "Landscape integration",
        "1-year warranty"
      ]
    },
    {
      name: "Elite Stonework",
      icon: <Flame className="w-8 h-8 text-orange-600" />,
      description: "Luxury stone installations with all features",
      features: [
        "Complete design service",
        "Fire & water features",
        "Premium materials only",
        "Structural elements",
        "2-year warranty"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Clean winter debris",
        "Check for frost damage",
        "Refresh rock mulch"
      ]
    },
    {
      season: "Summer",
      items: [
        "Maintain water features",
        "Remove weeds in rocks",
        "Monitor drainage"
      ]
    },
    {
      season: "Fall",
      items: [
        "Winterize water features",
        "Clear leaves from rocks",
        "Inspect for settling"
      ]
    },
    {
      season: "Winter",
      items: [
        "Protect water lines",
        "Check structural integrity",
        "Plan spring updates"
      ]
    }
  ];

  const faq = [
    {
      question: "How long do stone features last?",
      answer: "Properly installed stone features can last 50+ years with minimal maintenance. Natural stone actually improves with age, developing a beautiful patina over time."
    },
    {
      question: "What types of stone work best in San Antonio?",
      answer: "Native Texas limestone, flagstone, and granite work excellently in our climate. These materials withstand heat, occasional freezes, and heavy rains while maintaining their beauty."
    },
    {
      question: "Can stone features help with drainage issues?",
      answer: "Yes! Strategic placement of rock features, dry creek beds, and gravel areas can effectively manage water runoff while adding beauty to your landscape."
    }
  ];

  return (
    <ServicesLayout
      title="Stonework & Rock Features"
      description="Transform your San Antonio landscape with stunning natural stonework and custom rock features that add timeless beauty and character."
      heroTitle="Stonework & Rock Features"
      heroDescription="Transform your San Antonio landscape with stunning natural stonework and custom rock features that add timeless beauty and character."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Create Stunning Stone Features"
      ctaDescription="Contact Rhinamic Landscape Design for custom stonework and rock features that add timeless beauty and character to your San Antonio property."
    >
      {/* Stone Types Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Native Texas Stone Materials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Texas Limestone</h3>
              <p className="text-gray-600 mb-4">
                Classic Texas limestone in various colors and textures, perfect for formal and rustic applications.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Austin limestone (cream to tan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Lueders limestone (buff to gray)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Oklahoma limestone (red tones)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Excellent weather resistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Natural patina development</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Flagstone</h3>
              <p className="text-gray-600 mb-4">
                Flat, layered stone perfect for patios, walkways, and natural-looking installations.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Oklahoma flagstone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Arizona flagstone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Natural split surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Irregular, organic shapes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Non-slip natural texture</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">River Rock</h3>
              <p className="text-gray-600 mb-4">
                Smooth, rounded stones perfect for drainage, borders, and decorative ground cover applications.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Texas river rock</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Multiple size ranges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Natural color variations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Excellent drainage properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Low maintenance requirements</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Fieldstone</h3>
              <p className="text-gray-600 mb-4">
                Naturally weathered stones with irregular shapes, perfect for rustic and informal designs.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Native Texas fieldstone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Weathered, natural patina</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Irregular, organic shapes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Perfect for natural gardens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Excellent for rock walls</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Granite Boulders</h3>
              <p className="text-gray-600 mb-4">
                Large, dramatic stones that serve as focal points and provide substantial visual impact.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Texas pink granite</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Various sizes available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Extremely durable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Natural sculptural quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Unique character pieces</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Decorative Gravel</h3>
              <p className="text-gray-600 mb-4">
                Crushed stone and decorative aggregates for pathways, drainage, and ground cover.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Decomposed granite</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Crushed limestone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Pea gravel varieties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Multiple color options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Permeable surface option</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Stonework & Rock Feature Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Rock Gardens</h3>
              <p className="text-gray-600 text-sm">
                Drought-tolerant gardens featuring native plants and artistic stone arrangements
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Water Features</h3>
              <p className="text-gray-600 text-sm">
                Natural stone fountains, waterfalls, and pond features with rock borders
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Fire Features</h3>
              <p className="text-gray-600 text-sm">
                Stone fire pits, outdoor fireplaces, and surrounding seating areas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flower className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Garden Borders</h3>
              <p className="text-gray-600 text-sm">
                Stone edging, raised beds, and decorative borders for planting areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Stonework Design Styles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Natural & Rustic</h3>
              <p className="text-gray-600 mb-4">
                Organic arrangements that mimic natural rock outcroppings and blend seamlessly with the landscape.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Irregular stone placement</li>
                <li>• Native plant integration</li>
                <li>• Weathered, natural materials</li>
                <li>• Organic, flowing designs</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Formal & Structured</h3>
              <p className="text-gray-600 mb-4">
                Geometric patterns and precise stone cutting for elegant, architectural landscape features.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cut stone with clean lines</li>
                <li>• Symmetrical arrangements</li>
                <li>• Geometric patterns</li>
                <li>• Architectural integration</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Contemporary</h3>
              <p className="text-gray-600 mb-4">
                Modern stonework with clean lines, minimal plantings, and artistic focal points.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Sleek, modern materials</li>
                <li>• Minimalist design approach</li>
                <li>• Bold, sculptural elements</li>
                <li>• Integrated lighting features</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Mediterranean</h3>
              <p className="text-gray-600 mb-4">
                Warm stone colors and textures that complement stucco and tile architectural elements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Warm, earth-tone stones</li>
                <li>• Textured, aged surfaces</li>
                <li>• Courtyard-style features</li>
                <li>• Water feature integration</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Japanese/Zen</h3>
              <p className="text-gray-600 mb-4">
                Carefully balanced stone arrangements creating peaceful, meditative spaces with symbolic meaning.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Balanced, asymmetrical design</li>
                <li>• Gravel and sand elements</li>
                <li>• Meditation focal points</li>
                <li>• Minimal plant palette</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Desert/Xeriscape</h3>
              <p className="text-gray-600 mb-4">
                Drought-tolerant designs featuring desert plants, gravel mulches, and sun-loving arrangements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Desert plant combinations</li>
                <li>• Gravel and stone mulches</li>
                <li>• Heat-resistant materials</li>
                <li>• Water-wise design principles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Professional Installation Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Design Development</h3>
              <p className="text-gray-600 text-sm">
                Site analysis, concept design, and material selection consultation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Site Preparation</h3>
              <p className="text-gray-600 text-sm">
                Excavation, grading, and foundation preparation for stone features
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Stone Installation</h3>
              <p className="text-gray-600 text-sm">
                Expert placement and assembly using proper techniques and equipment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Finishing Details</h3>
              <p className="text-gray-600 text-sm">
                Final adjustments, plant integration, and feature completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            Benefits of Professional Stonework
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Timeless Beauty</h3>
              <p className="text-gray-600">
                Natural stone features provide lasting beauty that improves with age, adding character and value to your property for generations.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Extreme Durability</h3>
              <p className="text-gray-600">
                Stone features withstand San Antonio's weather extremes, requiring minimal maintenance while providing decades of service.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Unique Character</h3>
              <p className="text-gray-600">
                Each stone feature is unique, creating distinctive landscape elements that can't be replicated by manufactured materials.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Environmental Harmony</h3>
              <p className="text-gray-600">
                Native stone materials blend naturally with Texas landscapes while supporting local ecology and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

export default StoneworkRockFeaturesPage;