import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const WalkwaysPathwaysPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Walkways & Pathways
              </h1>
              <p className="text-xl text-amber-100 mb-8">
                Beautiful, functional walkways and pathways that enhance your San Antonio landscape while providing safe, attractive access throughout your property.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Pathway Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Custom Walkway & Pathway Design
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Functional Pathways</h3>
                  <p className="text-gray-600 mb-4">
                    Well-designed pathways that provide safe, convenient access while enhancing your landscape's overall functionality and flow.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Safe, non-slip surface materials</li>
                    <li>• Proper drainage and grading</li>
                    <li>• ADA-compliant design options</li>
                    <li>• Strategic lighting integration</li>
                    <li>• Weather-resistant construction</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Aesthetic Design</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful walkways that complement your home's architecture and landscape design while adding visual interest and curb appeal.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Custom pattern and design options</li>
                    <li>• Color coordination with existing features</li>
                    <li>• Border and accent integration</li>
                    <li>• Landscape plant integration</li>
                    <li>• Architectural style matching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Options Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Walkway Material Options
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Natural Stone</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful, durable stone walkways that provide timeless elegance and excellent longevity.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Texas limestone and flagstone</li>
                    <li>• Natural color variations</li>
                    <li>• Slip-resistant surfaces</li>
                    <li>• Excellent weather resistance</li>
                    <li>• Unique, organic appearance</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Concrete Pavers</h3>
                  <p className="text-gray-600 mb-4">
                    Versatile, consistent pavers offering numerous design possibilities with excellent durability and maintenance ease.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Multiple sizes and shapes</li>
                    <li>• Wide range of colors</li>
                    <li>• Consistent dimensions</li>
                    <li>• Easy repair and replacement</li>
                    <li>• Cost-effective option</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Brick Walkways</h3>
                  <p className="text-gray-600 mb-4">
                    Classic brick pathways that provide traditional charm and complement historic or colonial home styles.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Traditional clay brick</li>
                    <li>• Multiple laying patterns</li>
                    <li>• Timeless, classic appearance</li>
                    <li>• Excellent durability</li>
                    <li>• Matches existing brick features</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Stamped Concrete</h3>
                  <p className="text-gray-600 mb-4">
                    Decorative concrete that mimics expensive materials while providing durability and custom design flexibility.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Stone and brick texture patterns</li>
                    <li>• Custom color options</li>
                    <li>• Seamless, continuous surface</li>
                    <li>• Lower maintenance requirements</li>
                    <li>• Weather-resistant finish</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Decomposed Granite</h3>
                  <p className="text-gray-600 mb-4">
                    Natural, permeable pathway material perfect for informal, naturalistic landscape designs.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Natural, organic appearance</li>
                    <li>• Excellent drainage properties</li>
                    <li>• Cost-effective installation</li>
                    <li>• Comfortable walking surface</li>
                    <li>• Blends with natural landscapes</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Stepping Stones</h3>
                  <p className="text-gray-600 mb-4">
                    Individual stones creating informal pathways that blend beautifully with planted areas and natural settings.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Natural stone or concrete options</li>
                    <li>• Flexible spacing and layout</li>
                    <li>• Easy plant integration</li>
                    <li>• Minimal ground disturbance</li>
                    <li>• Creative design possibilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Styles Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Pathway Design Styles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Formal</h3>
                  <p className="text-gray-600 text-sm">
                    Straight lines, geometric patterns, and symmetrical design for elegant, structured landscapes
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Natural</h3>
                  <p className="text-gray-600 text-sm">
                    Curved, organic pathways that follow natural contours and blend with existing landscape features
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Rustic</h3>
                  <p className="text-gray-600 text-sm">
                    Informal design using natural materials for comfortable, casual outdoor living spaces
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Contemporary</h3>
                  <p className="text-gray-600 text-sm">
                    Clean lines, modern materials, and minimalist design for updated, sophisticated appeal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Installation Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Design & Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Site assessment, traffic pattern analysis, and custom design development
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Excavation</h3>
                  <p className="text-gray-600 text-sm">
                    Precise excavation to proper depth with utility marking and protection
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Base Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Proper base material installation, compaction, and leveling for stability
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Material Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Professional installation with proper drainage, joint sand, and finishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pathway Features Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Enhanced Pathway Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Lighting Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance safety and beauty with integrated pathway lighting systems.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• LED path lights and bollards</li>
                    <li>• Solar-powered options</li>
                    <li>• Low-voltage safety systems</li>
                    <li>• Accent and security lighting</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Drainage Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Proper water management to prevent pooling and pathway damage.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Permeable paving options</li>
                    <li>• Proper slope and grading</li>
                    <li>• French drain integration</li>
                    <li>• Surface water diversion</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Landscape Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Seamlessly blend pathways with surrounding landscape elements.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Border plantings and edging</li>
                    <li>• Complementary hardscaping</li>
                    <li>• Natural transition areas</li>
                    <li>• Seasonal interest features</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Safety Features</h3>
                  <p className="text-gray-600 mb-4">
                    Design elements that prioritize user safety and accessibility.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Non-slip surface textures</li>
                    <li>• Proper width and clearance</li>
                    <li>• Gentle grade transitions</li>
                    <li>• Visibility and sight lines</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Decorative Elements</h3>
                  <p className="text-gray-600 mb-4">
                    Artistic touches that add character and visual interest to pathways.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Inlay patterns and borders</li>
                    <li>• Contrasting material accents</li>
                    <li>• Decorative joint treatments</li>
                    <li>• Custom design elements</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Maintenance Access</h3>
                  <p className="text-gray-600 mb-4">
                    Design considerations for long-term maintenance and durability.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Easy cleaning and upkeep</li>
                    <li>• Repair-friendly installation</li>
                    <li>• Weed prevention measures</li>
                    <li>• Seasonal maintenance planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Benefits of Professional Walkways
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Enhanced Safety</h3>
                  <p className="text-gray-600">
                    Well-designed pathways provide safe, stable walking surfaces that reduce slip and fall risks while improving nighttime visibility and navigation.
                  </p>
                </div>
                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Increased Property Value</h3>
                  <p className="text-gray-600">
                    Professional walkways significantly enhance curb appeal and property functionality, providing excellent return on investment and market appeal.
                  </p>
                </div>
                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Improved Functionality</h3>
                  <p className="text-gray-600">
                    Strategic pathway placement creates logical traffic flow, protects lawn areas from foot traffic, and provides convenient access to all landscape areas.
                  </p>
                </div>
                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-600 mb-4">Design Unity</h3>
                  <p className="text-gray-600">
                    Professional walkways tie together landscape elements, creating cohesive design that complements your home's architecture and enhances overall aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Create Beautiful, Functional Pathways
              </h2>
              <p className="text-xl text-amber-100 mb-8">
                Contact Rhinamic Landscape Design for custom walkway and pathway design that enhances your San Antonio property's safety, beauty, and functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Design Your Pathway
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors duration-300"
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

export default WalkwaysPathwaysPage;
