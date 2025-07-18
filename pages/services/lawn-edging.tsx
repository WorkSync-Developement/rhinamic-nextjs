import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const LawnEdgingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional Lawn Edging Services
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Create clean, defined borders and enhance your San Antonio landscape with professional lawn edging solutions.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Edging Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Professional Lawn Edging Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Decorative Edging</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your landscape's visual appeal with beautiful, functional edging materials that complement your home's style.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Natural stone borders</li>
                    <li>• Decorative concrete edging</li>
                    <li>• Brick and paver borders</li>
                    <li>• Metal landscape edging</li>
                    <li>• Custom design integration</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Functional Edging</h3>
                  <p className="text-gray-600 mb-4">
                    Create practical barriers that prevent grass spread, contain mulch, and define planting areas for easier maintenance.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Root barrier installation</li>
                    <li>• Mulch containment systems</li>
                    <li>• Grass spread prevention</li>
                    <li>• Drainage channel integration</li>
                    <li>• Low-maintenance solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Edging Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Edging Material Options
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Natural Stone</h3>
                  <p className="text-gray-600 mb-4">
                    Elegant, durable stone edging that adds natural beauty and long-lasting appeal to any landscape.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Limestone and flagstone options</li>
                    <li>• Natural color variations</li>
                    <li>• Extremely durable</li>
                    <li>• Increases property value</li>
                    <li>• Weather resistant</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Concrete Edging</h3>
                  <p className="text-gray-600 mb-4">
                    Versatile, affordable concrete solutions with various textures, colors, and custom design options.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Stamped and textured finishes</li>
                    <li>• Multiple color choices</li>
                    <li>• Custom curves and angles</li>
                    <li>• Cost-effective solution</li>
                    <li>• Long-lasting durability</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Brick & Pavers</h3>
                  <p className="text-gray-600 mb-4">
                    Classic brick and paver edging that provides timeless appeal and complements traditional home styles.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Traditional clay brick</li>
                    <li>• Concrete paver options</li>
                    <li>• Various laying patterns</li>
                    <li>• Easy repairs and replacement</li>
                    <li>• Matches existing hardscaping</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Steel Edging</h3>
                  <p className="text-gray-600 mb-4">
                    Modern, sleek metal edging that provides clean lines and excellent grass barrier properties.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cor-Ten weathering steel</li>
                    <li>• Powder-coated options</li>
                    <li>• Thin, subtle profile</li>
                    <li>• Superior root barrier</li>
                    <li>• Contemporary appearance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Plastic/Composite</h3>
                  <p className="text-gray-600 mb-4">
                    Budget-friendly, flexible edging solutions perfect for curved borders and temporary installations.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Recycled plastic options</li>
                    <li>• Flexible for curves</li>
                    <li>• Easy installation</li>
                    <li>• Multiple colors available</li>
                    <li>• Low maintenance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Wood Edging</h3>
                  <p className="text-gray-600 mb-4">
                    Natural wood borders that blend seamlessly with garden settings and provide rustic charm.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cedar and treated lumber</li>
                    <li>• Natural, organic appearance</li>
                    <li>• Easy to work with</li>
                    <li>• Biodegradable option</li>
                    <li>• Complements natural landscapes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Edging Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Flower Beds</h3>
                  <p className="text-gray-600 text-sm">
                    Define planting areas and prevent grass intrusion into flower beds
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌳</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Tree Rings</h3>
                  <p className="text-gray-600 text-sm">
                    Protect tree bases and create attractive mulched areas
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Foundation Areas</h3>
                  <p className="text-gray-600 text-sm">
                    Separate lawn from foundation plantings and mulched areas
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛤️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Walkways</h3>
                  <p className="text-gray-600 text-sm">
                    Border pathways and driveways with clean, defined edges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Installation Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Design & Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Assess landscape and design edging layout with material selection
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Excavation</h3>
                  <p className="text-gray-600 text-sm">
                    Mark and excavate trenches to proper depth and width specifications
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Base Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Install proper base materials and ensure level, stable foundation
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Install edging materials with proper alignment and finishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Benefits of Professional Lawn Edging
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Enhanced Curb Appeal</h3>
                  <p className="text-gray-600">
                    Clean, defined edges create a polished, professional appearance that significantly increases your property's visual appeal and market value.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Easier Maintenance</h3>
                  <p className="text-gray-600">
                    Proper edging prevents grass from spreading into flower beds and makes mowing, trimming, and garden maintenance much easier and more efficient.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Mulch Containment</h3>
                  <p className="text-gray-600">
                    Keep mulch in place and prevent it from washing away during San Antonio's heavy rains, maintaining neat appearance year-round.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Long-Term Value</h3>
                  <p className="text-gray-600">
                    Durable edging materials provide lasting results with minimal maintenance, offering excellent return on investment for your landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Edging Maintenance & Care
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Regular Cleaning</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Remove debris and leaves</li>
                    <li>• Clear weeds from edges</li>
                    <li>• Rinse stone and concrete surfaces</li>
                    <li>• Trim overhanging vegetation</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Seasonal Maintenance</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Check for settling or shifting</li>
                    <li>• Refill base materials as needed</li>
                    <li>• Repair any damaged sections</li>
                    <li>• Reapply sealers when necessary</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Long-Term Care</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional inspection annually</li>
                    <li>• Replace worn or damaged materials</li>
                    <li>• Adjust for landscape changes</li>
                    <li>• Update design as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Define Your Landscape?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design for professional lawn edging services that will enhance your San Antonio property's beauty and functionality.
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
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
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

export default LawnEdgingPage;
