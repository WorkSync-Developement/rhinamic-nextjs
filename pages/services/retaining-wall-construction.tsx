import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ServicesLayout from '../../components/layout/ServicesLayout';

const RetainingWallConstructionPage = () => {
  const serviceFeatures = [
    {
      title: 'Functional Solutions',
      description: 'Engineer-designed retaining walls that solve erosion problems, create usable space, and manage drainage effectively.',
    },
    {
      title: 'Aesthetic Design',
      description: 'Beautiful retaining walls that enhance your landscape design while providing essential structural support and functionality.',
    },
  ];

  const plans = [
    {
      name: 'Basic Wall',
      icon: '🧱',
      features: ['Segmental block construction', 'Up to 4 feet tall', 'Basic drainage', 'Standard backfill'],
      description: 'Ideal for simple landscape projects with minimal height requirements.',
    },
    {
      name: 'Premium Wall',
      icon: '🏗️',
      features: ['Natural stone or premium block', 'Up to 6 feet tall', 'Advanced drainage system', 'Reinforced backfill', 'Custom design options'],
      description: 'Perfect for larger projects requiring enhanced durability and aesthetic appeal.',
      highlight: true,
    },
    {
      name: 'Custom Solution',
      icon: '🎨',
      features: ['Fully customized design', 'Engineered solutions', 'Unlimited height options', 'Integrated features', 'Premium materials'],
      description: 'Tailored solutions for complex projects with specific requirements.',
    },
  ];

  const seasonalCare = [
    {
      season: 'Spring',
      items: ['Inspect for winter damage', 'Check drainage systems', 'Clean wall surfaces', 'Inspect for settling'],
    },
    {
      season: 'Summer',
      items: ['Monitor drainage', 'Check for erosion', 'Inspect for cracks', 'Clean wall surfaces'],
    },
    {
      season: 'Fall',
      items: ['Clear debris', 'Check drainage', 'Pre-winter inspection', 'Address any issues'],
    },
    {
      season: 'Winter',
      items: ['Monitor for frost heave', 'Clear snow buildup', 'Check for ice damage', 'Plan spring maintenance'],
    },
  ];

  const faq = [
    {
      question: 'How long does a retaining wall last?',
      answer: 'A well-constructed retaining wall with proper drainage can last 30-50 years or more, depending on materials and maintenance.',
    },
    {
      question: 'Do I need a permit for a retaining wall?',
      answer: 'In San Antonio, walls over 4 feet tall typically require a permit. We handle all permitting as part of our service.',
    },
    {
      question: 'What maintenance do retaining walls require?',
      answer: 'Minimal maintenance is required - regular inspections, keeping drainage clear, and addressing any cracks or movement promptly.',
    },
    {
      question: 'Can I build a retaining wall myself?',
      answer: 'While small walls under 3 feet can be DIY projects, we recommend professional installation for proper engineering, drainage, and longevity.',
    },
  ];

  return (
    <ServicesLayout
      title="Retaining Wall Construction | Rhinamic Landscape Design"
      description="Professional retaining wall design and construction in San Antonio. Expert solutions for slope stabilization, erosion control, and landscape enhancement."
      heroTitle="Retaining Wall Construction"
      heroDescription="Professional retaining wall design and construction to solve slope issues and enhance your San Antonio landscape."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Build Your Retaining Wall?"
      ctaDescription="Contact us today for a free consultation and quote on your retaining wall project."
    >

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Retaining Wall Material Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Natural Stone</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, durable limestone and flagstone walls that blend naturally with Texas landscapes.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Texas limestone varieties</li>
                  <li>• Flagstone and sandstone options</li>
                  <li>• Natural color variations</li>
                  <li>• Extremely long-lasting</li>
                  <li>• Increases property value</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Segmental Block</h3>
                <p className="text-gray-600 mb-4">
                  Engineered concrete blocks offering consistent appearance, easy installation, and excellent structural integrity.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Interlocking design system</li>
                  <li>• Multiple color and texture options</li>
                  <li>• Consistent dimensions</li>
                  <li>• Cost-effective solution</li>
                  <li>• Easy maintenance</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Poured Concrete</h3>
                <p className="text-gray-600 mb-4">
                  Reinforced concrete walls with custom finishes, textures, and colors for modern design applications.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Custom forms and shapes</li>
                  <li>• Stamped and textured finishes</li>
                  <li>• Integrated color options</li>
                  <li>• Maximum structural strength</li>
                  <li>• Smooth, clean lines</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Timber Walls</h3>
                <p className="text-gray-600 mb-4">
                  Natural wood retaining walls perfect for rustic settings and shorter applications with organic appeal.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Pressure-treated lumber</li>
                  <li>• Cedar and redwood options</li>
                  <li>• Natural, organic appearance</li>
                  <li>• Budget-friendly option</li>
                  <li>• Easy integration with landscapes</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Boulder Walls</h3>
                <p className="text-gray-600 mb-4">
                  Large natural boulder retaining walls that create dramatic visual impact while providing excellent stability.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Native Texas stone boulders</li>
                  <li>• Natural, irregular shapes</li>
                  <li>• Excellent drainage properties</li>
                  <li>• Wildlife-friendly design</li>
                  <li>• Minimal maintenance required</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Gabion Walls</h3>
                <p className="text-gray-600 mb-4">
                  Wire basket systems filled with stone offering excellent drainage and modern industrial aesthetic appeal.
                </p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Galvanized steel wire baskets</li>
                  <li>• Excellent drainage properties</li>
                  <li>• Modern, industrial look</li>
                  <li>• Flexible installation</li>
                  <li>• Environmentally friendly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-br from-stone-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Professional Construction Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-stone-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Assess soil conditions, drainage, and structural requirements
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-stone-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Engineering Design</h3>
                <p className="text-gray-600 text-sm">
                  Professional design ensuring structural integrity and local code compliance
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-stone-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Selection</h3>
                <p className="text-gray-600 text-sm">
                  Choose from a variety of materials to match your aesthetic and budget
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-stone-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Installation</h3>
                <p className="text-gray-600 text-sm">
                  Expert construction with attention to detail and quality craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Retaining Wall Material Options
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Natural Stone</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful, durable limestone and flagstone walls that blend naturally with Texas landscapes.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Texas limestone varieties</li>
                    <li>• Flagstone and sandstone options</li>
                    <li>• Natural color variations</li>
                    <li>• Extremely long-lasting</li>
                    <li>• Increases property value</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Segmental Block</h3>
                  <p className="text-gray-600 mb-4">
                    Engineered concrete blocks offering consistent appearance, easy installation, and excellent structural integrity.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Interlocking design system</li>
                    <li>• Multiple color and texture options</li>
                    <li>• Consistent dimensions</li>
                    <li>• Cost-effective solution</li>
                    <li>• Easy maintenance</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Poured Concrete</h3>
                  <p className="text-gray-600 mb-4">
                    Reinforced concrete walls with custom finishes, textures, and colors for modern design applications.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Custom forms and shapes</li>
                    <li>• Stamped and textured finishes</li>
                    <li>• Integrated color options</li>
                    <li>• Maximum structural strength</li>
                    <li>• Smooth, clean lines</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Timber Walls</h3>
                  <p className="text-gray-600 mb-4">
                    Natural wood retaining walls perfect for rustic settings and shorter applications with organic appeal.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Pressure-treated lumber</li>
                    <li>• Cedar and redwood options</li>
                    <li>• Natural, organic appearance</li>
                    <li>• Budget-friendly option</li>
                    <li>• Easy integration with landscapes</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Boulder Walls</h3>
                  <p className="text-gray-600 mb-4">
                    Large natural boulder retaining walls that create dramatic visual impact while providing excellent stability.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Native Texas stone boulders</li>
                    <li>• Natural, irregular shapes</li>
                    <li>• Excellent drainage properties</li>
                    <li>• Wildlife-friendly design</li>
                    <li>• Minimal maintenance required</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Gabion Walls</h3>
                  <p className="text-gray-600 mb-4">
                    Wire basket systems filled with stone offering excellent drainage and modern industrial aesthetic appeal.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Galvanized steel wire baskets</li>
                    <li>• Excellent drainage properties</li>
                    <li>• Modern, industrial look</li>
                    <li>• Flexible installation</li>
                    <li>• Environmentally friendly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-stone-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Construction Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Assess soil conditions, drainage, and structural requirements
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Engineering Design</h3>
                  <p className="text-gray-600 text-sm">
                    Professional design ensuring structural integrity and local code compliance
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Selection</h3>
                  <p className="text-gray-600 text-sm">
                    Choose from a variety of materials to match your aesthetic and budget
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Expert construction with attention to detail and quality craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Common Retaining Wall Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏔️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Slope Stabilization</h3>
                  <p className="text-gray-600 text-sm">
                    Prevent erosion and manage steep grade changes in your landscape
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Foundation Protection</h3>
                  <p className="text-gray-600 text-sm">
                    Protect home foundations from soil movement and water damage
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Garden Terracing</h3>
                  <p className="text-gray-600 text-sm">
                    Create level planting areas on sloped terrain for better gardening
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Driveway Support</h3>
                  <p className="text-gray-600 text-sm">
                    Support driveways and parking areas on sloped properties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-stone-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Engineering & Code Compliance
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Professional Engineering</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Structural analysis and design</li>
                    <li>• Soil testing and analysis</li>
                    <li>• Load calculation and safety factors</li>
                    <li>• Drainage system design</li>
                    <li>• Foundation requirements</li>
                    <li>• Geotechnical recommendations</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Permits & Compliance</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• San Antonio building code compliance</li>
                    <li>• Permit application and processing</li>
                    <li>• Inspection coordination</li>
                    <li>• HOA approval assistance</li>
                    <li>• Setback and height requirements</li>
                    <li>• Utility clearance verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drainage Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Critical Drainage Solutions
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Behind-Wall Drainage</h3>
                  <p className="text-gray-600 mb-4">
                    Essential drainage systems to prevent water buildup and wall failure.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• French drain installation</li>
                    <li>• Drainage aggregate placement</li>
                    <li>• Weep hole integration</li>
                    <li>• Waterproof membrane application</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Surface Water Management</h3>
                  <p className="text-gray-600 mb-4">
                    Control surface water flow to prevent erosion and foundation issues.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Swales and drainage channels</li>
                    <li>• Downspout extension systems</li>
                    <li>• Surface grading optimization</li>
                    <li>• Catch basin installation</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Long-term Protection</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive water management for long-lasting wall performance.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Proper backfill materials</li>
                    <li>• Geotextile fabric installation</li>
                    <li>• Outlet pipe systems</li>
                    <li>• Regular maintenance access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-stone-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Benefits of Professional Retaining Walls
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Problem Solution</h3>
                  <p className="text-gray-600">
                    Effectively solve erosion, drainage, and slope stability issues while creating usable space and protecting your property investment.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Increased Property Value</h3>
                  <p className="text-gray-600">
                    Well-designed retaining walls enhance property aesthetics and functionality, significantly increasing overall property value and appeal.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Long-term Durability</h3>
                  <p className="text-gray-600">
                    Professional engineering and construction ensure walls last for decades with minimal maintenance while continuing to perform their function.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Design Integration</h3>
                  <p className="text-gray-600">
                    Custom design options seamlessly integrate walls into your landscape while providing opportunities for additional features like seating and planters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </ServicesLayout>
  );
};

export default RetainingWallConstructionPage;
