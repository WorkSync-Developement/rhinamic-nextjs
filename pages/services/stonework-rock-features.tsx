import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const StoneworkRockFeaturesPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-stone-600 to-gray-700 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Stonework & Rock Features
              </h1>
              <p className="text-xl text-stone-100 mb-8">
                Transform your San Antonio landscape with stunning natural stonework and custom rock features that add timeless beauty and character.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Stonework Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Custom Stonework & Natural Rock Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Natural Stone Features</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful, durable stone installations using native Texas materials that complement your landscape and withstand the elements.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Native Texas limestone and flagstone</li>
                    <li>• Custom stone water features</li>
                    <li>• Decorative boulder placement</li>
                    <li>• Stone garden accents</li>
                    <li>• Rock outcropping creation</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Artistic Rock Design</h3>
                  <p className="text-gray-600 mb-4">
                    Creative rock arrangements and stonework that serve as focal points while providing functional landscape solutions.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Rock garden design and installation</li>
                    <li>• Sculptural stone arrangements</li>
                    <li>• Zen garden and meditation spaces</li>
                    <li>• Fire pit and seating integration</li>
                    <li>• Artistic landscape sculptures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stone Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Native Texas Stone Materials
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Texas Limestone</h3>
                  <p className="text-gray-600 mb-4">
                    Classic Texas limestone in various colors and textures, perfect for formal and rustic applications.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Austin limestone (cream to tan)</li>
                    <li>• Lueders limestone (buff to gray)</li>
                    <li>• Oklahoma limestone (red tones)</li>
                    <li>• Excellent weather resistance</li>
                    <li>• Natural patina development</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Flagstone</h3>
                  <p className="text-gray-600 mb-4">
                    Flat, layered stone perfect for patios, walkways, and natural-looking installations.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Oklahoma flagstone</li>
                    <li>• Arizona flagstone</li>
                    <li>• Natural split surfaces</li>
                    <li>• Irregular, organic shapes</li>
                    <li>• Non-slip natural texture</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">River Rock</h3>
                  <p className="text-gray-600 mb-4">
                    Smooth, rounded stones perfect for drainage, borders, and decorative ground cover applications.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Texas river rock</li>
                    <li>• Multiple size ranges</li>
                    <li>• Natural color variations</li>
                    <li>• Excellent drainage properties</li>
                    <li>• Low maintenance requirements</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Fieldstone</h3>
                  <p className="text-gray-600 mb-4">
                    Naturally weathered stones with irregular shapes, perfect for rustic and informal designs.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Native Texas fieldstone</li>
                    <li>• Weathered, natural patina</li>
                    <li>• Irregular, organic shapes</li>
                    <li>• Perfect for natural gardens</li>
                    <li>• Excellent for rock walls</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Granite Boulders</h3>
                  <p className="text-gray-600 mb-4">
                    Large, dramatic stones that serve as focal points and provide substantial visual impact.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Texas pink granite</li>
                    <li>• Various sizes available</li>
                    <li>• Extremely durable</li>
                    <li>• Natural sculptural quality</li>
                    <li>• Unique character pieces</li>
                  </ul>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Decorative Gravel</h3>
                  <p className="text-gray-600 mb-4">
                    Crushed stone and decorative aggregates for pathways, drainage, and ground cover.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Decomposed granite</li>
                    <li>• Crushed limestone</li>
                    <li>• Pea gravel varieties</li>
                    <li>• Multiple color options</li>
                    <li>• Permeable surface option</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Types Section */}
        <section className="py-16 bg-gradient-to-br from-stone-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Stonework & Rock Feature Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏔️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Rock Gardens</h3>
                  <p className="text-gray-600 text-sm">
                    Drought-tolerant gardens featuring native plants and artistic stone arrangements
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Water Features</h3>
                  <p className="text-gray-600 text-sm">
                    Natural stone fountains, waterfalls, and pond features with rock borders
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Fire Features</h3>
                  <p className="text-gray-600 text-sm">
                    Stone fire pits, outdoor fireplaces, and surrounding seating areas
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Garden Borders</h3>
                  <p className="text-gray-600 text-sm">
                    Stone edging, raised beds, and decorative borders for planting areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Styles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Stonework Design Styles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Natural & Rustic</h3>
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
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Formal & Structured</h3>
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
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Contemporary</h3>
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
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Mediterranean</h3>
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
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Japanese/Zen</h3>
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
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Desert/Xeriscape</h3>
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
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-stone-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Installation Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Design Development</h3>
                  <p className="text-gray-600 text-sm">
                    Site analysis, concept design, and material selection consultation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Excavation, grading, and foundation preparation for stone features
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Stone Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Expert placement and assembly using proper techniques and equipment
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-stone-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Finishing Details</h3>
                  <p className="text-gray-600 text-sm">
                    Final adjustments, plant integration, and feature completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Comprehensive Stonework Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Custom Stone Features</h3>
                  <p className="text-gray-600">
                    Unique, one-of-a-kind stone installations designed specifically for your property and aesthetic preferences.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Rock Garden Design</h3>
                  <p className="text-gray-600">
                    Drought-tolerant gardens featuring artistic stone arrangements and native plant combinations.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Water Feature Integration</h3>
                  <p className="text-gray-600">
                    Natural stone fountains, waterfalls, and pond features with professional plumbing and electrical work.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Fire Feature Construction</h3>
                  <p className="text-gray-600">
                    Stone fire pits, outdoor fireplaces, and cooking areas with proper safety and ventilation considerations.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Structural Stonework</h3>
                  <p className="text-gray-600">
                    Retaining walls, garden borders, and structural elements combining function with natural beauty.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Restoration & Repair</h3>
                  <p className="text-gray-600">
                    Restoration of existing stone features and repair of damaged stonework to original condition.
                  </p>
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
                Benefits of Professional Stonework
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Timeless Beauty</h3>
                  <p className="text-gray-600">
                    Natural stone features provide lasting beauty that improves with age, adding character and value to your property for generations.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Extreme Durability</h3>
                  <p className="text-gray-600">
                    Stone features withstand San Antonio's weather extremes, requiring minimal maintenance while providing decades of service.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Unique Character</h3>
                  <p className="text-gray-600">
                    Each stone feature is unique, creating distinctive landscape elements that can't be replicated by manufactured materials.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-stone-600 mb-4">Environmental Harmony</h3>
                  <p className="text-gray-600">
                    Native stone materials blend naturally with Texas landscapes while supporting local ecology and sustainable practices.
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
                Create Stunning Stone Features
              </h2>
              <p className="text-xl text-stone-100 mb-8">
                Contact Rhinamic Landscape Design for custom stonework and rock features that add timeless beauty and character to your San Antonio property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Design Your Feature
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

export default StoneworkRockFeaturesPage;
