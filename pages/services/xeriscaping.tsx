import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const XeriscapingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Xeriscaping Services
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Water-wise landscaping solutions perfect for San Antonio's climate - beautiful, sustainable, and drought-tolerant gardens that thrive with minimal water.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Start Your Xeriscape
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Sustainable Water-Wise Landscaping
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Drought-Tolerant Design</h3>
                  <p className="text-gray-600 mb-4">
                    Beautiful landscapes that thrive in San Antonio's hot, dry climate while using 50-75% less water than traditional landscaping.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Native and adapted plant selections</li>
                    <li>• Efficient irrigation design</li>
                    <li>• Mulching and soil improvement</li>
                    <li>• Strategic plant grouping by water needs</li>
                    <li>• Heat and drought-resistant materials</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Sustainable Beauty</h3>
                  <p className="text-gray-600 mb-4">
                    Stunning landscapes that provide year-round color and interest while supporting local wildlife and reducing maintenance requirements.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Four-season visual interest</li>
                    <li>• Wildlife habitat creation</li>
                    <li>• Low maintenance requirements</li>
                    <li>• Reduced chemical inputs</li>
                    <li>• Climate-appropriate design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seven Principles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                The Seven Principles of Xeriscaping
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">1. Planning & Design</h3>
                  <p className="text-gray-600">
                    Thoughtful design that considers site conditions, water availability, and maintenance requirements while creating beautiful, functional spaces.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">2. Soil Analysis</h3>
                  <p className="text-gray-600">
                    Soil testing and improvement to enhance water retention, drainage, and nutrient availability for optimal plant health.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">3. Appropriate Plants</h3>
                  <p className="text-gray-600">
                    Selection of native and adapted plants that naturally thrive in San Antonio's climate with minimal water requirements.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">4. Practical Turf Areas</h3>
                  <p className="text-gray-600">
                    Limited use of traditional lawn grass in high-use areas only, replacing unused lawn with water-wise alternatives.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">5. Efficient Irrigation</h3>
                  <p className="text-gray-600">
                    Smart irrigation systems including drip irrigation, micro-sprinklers, and smart controllers that deliver water efficiently.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">6. Mulching</h3>
                  <p className="text-gray-600">
                    Organic and inorganic mulches that conserve moisture, suppress weeds, and moderate soil temperature.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">7. Maintenance</h3>
                  <p className="text-gray-600">
                    Appropriate maintenance practices that support plant health while minimizing water use and chemical inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Selection Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Drought-Tolerant Plants for San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Native Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Texas Red Oak</li>
                    <li>• Live Oak</li>
                    <li>• Cedar Elm</li>
                    <li>• Texas Redbud</li>
                    <li>• Mexican Buckeye</li>
                    <li>• Desert Willow</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Native Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Cenizo (Texas Sage)</li>
                    <li>• Flameleaf Sumac</li>
                    <li>• Agarito</li>
                    <li>• Yaupon Holly</li>
                    <li>• Turk's Cap</li>
                    <li>• Fragrant Sumac</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Perennials</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Autumn Sage</li>
                    <li>• Blackfoot Daisy</li>
                    <li>• Esperanza</li>
                    <li>• Pride of Barbados</li>
                    <li>• Mexican Mint Marigold</li>
                    <li>• Lantana</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Ornamental Grasses</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Buffalo Grass</li>
                    <li>• Mexican Feather Grass</li>
                    <li>• Lindheimer's Muhly</li>
                    <li>• Gulf Muhly</li>
                    <li>• Little Bluestem</li>
                    <li>• Curly Mesquite</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Succulents & Cacti</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Prickly Pear Cactus</li>
                    <li>• Agave varieties</li>
                    <li>• Yucca species</li>
                    <li>• Sedum varieties</li>
                    <li>• Barrel Cactus</li>
                    <li>• Sotol</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Groundcovers</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Damianita</li>
                    <li>• Trailing Lantana</li>
                    <li>• Skullcap</li>
                    <li>• Frog Fruit</li>
                    <li>• Prairie Verbena</li>
                    <li>• Creeping Thyme</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Elements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Xeriscape Design Elements
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🪨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Rock Gardens</h3>
                  <p className="text-gray-600 text-sm">
                    Natural stone arrangements with drought-tolerant plantings and decomposed granite pathways
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌵</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Desert Gardens</h3>
                  <p className="text-gray-600 text-sm">
                    Sculptural cacti and succulents with colorful gravel mulches and artistic arrangements
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Prairie Gardens</h3>
                  <p className="text-gray-600 text-sm">
                    Native wildflowers and ornamental grasses creating naturalistic meadow landscapes
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Rain Gardens</h3>
                  <p className="text-gray-600 text-sm">
                    Designed to capture and utilize rainwater with plants that tolerate both wet and dry conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Water Conservation Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Water Conservation Strategies
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Efficient Irrigation</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Drip irrigation systems</li>
                    <li>• Micro-spray installations</li>
                    <li>• Smart irrigation controllers</li>
                    <li>• Rain sensors and shut-offs</li>
                    <li>• Soil moisture monitoring</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Soil Improvement</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Organic matter addition</li>
                    <li>• Soil aeration and decompaction</li>
                    <li>• pH adjustment and testing</li>
                    <li>• Native soil enhancement</li>
                    <li>• Drainage improvements</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Mulching Systems</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Organic mulch applications</li>
                    <li>• Decorative gravel and stone</li>
                    <li>• Living mulch groundcovers</li>
                    <li>• Moisture retention techniques</li>
                    <li>• Weed suppression methods</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Hydrozoning</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Plants grouped by water needs</li>
                    <li>• High-water areas minimized</li>
                    <li>• Transition zones planned</li>
                    <li>• Irrigation zone optimization</li>
                    <li>• Microclimate consideration</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Rainwater Harvesting</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Rain barrel installations</li>
                    <li>• Cistern system design</li>
                    <li>• Roof water collection</li>
                    <li>• Swales and bioretention</li>
                    <li>• Permeable paving options</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Alternative Surfaces</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Permeable paving materials</li>
                    <li>• Decorative gravel areas</li>
                    <li>• Artificial turf options</li>
                    <li>• Native groundcover lawns</li>
                    <li>• Hardscape integration</li>
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
                Benefits of Xeriscaping in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Water Savings</h3>
                  <p className="text-gray-600">
                    Reduce water usage by 50-75% compared to traditional landscaping while maintaining beautiful, thriving gardens that comply with water restrictions.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Lower Maintenance</h3>
                  <p className="text-gray-600">
                    Significantly reduced maintenance requirements including less mowing, pruning, fertilizing, and pest control for more time to enjoy your landscape.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Cost Savings</h3>
                  <p className="text-gray-600">
                    Lower water bills, reduced maintenance costs, and fewer plant replacements create significant long-term financial savings.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Environmental Benefits</h3>
                  <p className="text-gray-600">
                    Support native wildlife, reduce chemical runoff, conserve water resources, and create sustainable landscapes that work with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Xeriscape Maintenance Calendar
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Spring (Mar-May)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Refresh mulch layers</li>
                    <li>• Prune dormant plants</li>
                    <li>• Check irrigation systems</li>
                    <li>• Plant new additions</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Summer (Jun-Aug)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Monitor soil moisture</li>
                    <li>• Deadhead spent flowers</li>
                    <li>• Deep watering as needed</li>
                    <li>• Watch for heat stress</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fall (Sep-Nov)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Plant cool-season plants</li>
                    <li>• Collect and save seeds</li>
                    <li>• Prepare for winter</li>
                    <li>• Adjust irrigation timers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Winter (Dec-Feb)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Protect tender plants</li>
                    <li>• Reduce watering frequency</li>
                    <li>• Plan next year's changes</li>
                    <li>• Maintain hardscape elements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Create Your Water-Wise Landscape
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Contact Rhinamic Landscape Design to design and install a beautiful, sustainable xeriscape that saves water, reduces maintenance, and thrives in San Antonio's climate.
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
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors duration-300"
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

export default XeriscapingPage;
