import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const RetainingWallConstructionPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-stone-600 to-gray-700 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Retaining Wall Construction
              </h1>
              <p className="text-xl text-stone-100 mb-8">
                Professional retaining wall design and construction to solve slope issues and enhance your San Antonio landscape.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Build My Wall
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Expert Retaining Wall Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Functional Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Engineer-designed retaining walls that solve erosion problems, create usable space, and manage drainage effectively.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Slope stabilization and erosion control</li>
                    <li>• Drainage management systems</li>
                    <li>• Soil retention and grading</li>
                    <li>• Foundation protection</li>
                    <li>• Usable space creation</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Aesthetic Design</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful retaining walls that enhance your landscape design while providing essential structural support and functionality.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Custom design integration</li>
                    <li>• Material and color coordination</li>
                    <li>• Terraced landscaping options</li>
                    <li>• Built-in seating and planters</li>
                    <li>• Lighting integration capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wall Types Section */}
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

        {/* Construction Process Section */}
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Foundation Prep</h3>
                  <p className="text-gray-600 text-sm">
                    Excavation, base preparation, and drainage system installation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Wall Construction</h3>
                  <p className="text-gray-600 text-sm">
                    Professional installation with proper drainage and backfill
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
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

        {/* Engineering & Permits Section */}
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-stone-600 to-gray-700 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Solve Your Slope & Erosion Problems
              </h2>
              <p className="text-xl text-stone-100 mb-8">
                Contact Rhinamic Landscape Design for professional retaining wall design and construction that solves problems and enhances your San Antonio property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-stone-600 transition-colors duration-300"
                >
                  Call (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RetainingWallConstructionPage;
