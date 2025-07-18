import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const ShrubPruningPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional Shrub Pruning Services
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Expert shrub care and pruning to keep your San Antonio landscape healthy, beautiful, and properly shaped year-round.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Prune My Shrubs
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Expert Shrub Care & Maintenance
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Pruning & Shaping</h3>
                  <p className="text-gray-600 mb-4">
                    Professional pruning techniques to maintain shape, promote healthy growth, and enhance your landscape's overall appearance.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Proper timing for each shrub variety</li>
                    <li>• Shape maintenance and restoration</li>
                    <li>• Deadheading and flower removal</li>
                    <li>• Selective branch removal</li>
                    <li>• Size control and management</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Health & Disease Prevention</h3>
                  <p className="text-gray-600 mb-4">
                    Preventive care and maintenance to keep shrubs healthy, disease-free, and thriving in San Antonio's climate.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Disease and pest identification</li>
                    <li>• Air circulation improvement</li>
                    <li>• Dead and diseased wood removal</li>
                    <li>• Growth pattern optimization</li>
                    <li>• Stress reduction techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Shrubs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Common San Antonio Shrubs We Service
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Agarito</li>
                    <li>• Cenizo (Texas Sage)</li>
                    <li>• Flameleaf Sumac</li>
                    <li>• Fragrant Sumac</li>
                    <li>• Turk's Cap</li>
                    <li>• Yaupon Holly</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Flowering Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Azaleas</li>
                    <li>• Camellias</li>
                    <li>• Knockout Roses</li>
                    <li>• Esperanza</li>
                    <li>• Pride of Barbados</li>
                    <li>• Lantana</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Evergreen Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Boxwood</li>
                    <li>• Japanese Yew</li>
                    <li>• Juniper varieties</li>
                    <li>• Nandina</li>
                    <li>• Photinia</li>
                    <li>• Wax Myrtle</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Ornamental Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Barberry</li>
                    <li>• Spirea</li>
                    <li>• Forsythia</li>
                    <li>• Weigela</li>
                    <li>• Viburnum</li>
                    <li>• Lilac</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Fruit-Bearing Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Blueberry bushes</li>
                    <li>• Pomegranate</li>
                    <li>• Fig varieties</li>
                    <li>• Mexican Buckeye</li>
                    <li>• Beauty Berry</li>
                    <li>• Elderberry</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Tropical Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Oleander</li>
                    <li>• Bougainvillea</li>
                    <li>• Hibiscus</li>
                    <li>• Plumbago</li>
                    <li>• Ixora</li>
                    <li>• Croton</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pruning Techniques Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Pruning Techniques
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✂️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Selective Pruning</h3>
                  <p className="text-gray-600 text-sm">
                    Careful removal of specific branches to improve structure and health
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Thinning</h3>
                  <p className="text-gray-600 text-sm">
                    Remove overcrowded branches to improve air circulation and light penetration
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Heading Back</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic cutting to control size and encourage dense, bushy growth
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Renewal Pruning</h3>
                  <p className="text-gray-600 text-sm">
                    Rejuvenate overgrown or neglected shrubs with strategic heavy pruning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Optimal Pruning Times in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Spring (Mar-May)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Early spring bloomers (after flowering)</li>
                    <li>• Dead-heading winter damage</li>
                    <li>• Shape maintenance pruning</li>
                    <li>• New growth encouragement</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Summer (Jun-Aug)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Summer-blooming shrubs</li>
                    <li>• Light maintenance pruning</li>
                    <li>• Deadheading spent flowers</li>
                    <li>• Water sprout removal</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fall (Sep-Nov)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Preparation for dormancy</li>
                    <li>• Fall-flowering varieties</li>
                    <li>• Structural pruning</li>
                    <li>• Disease prevention cuts</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Winter (Dec-Feb)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dormant season pruning</li>
                    <li>• Major structural work</li>
                    <li>• Renovation pruning</li>
                    <li>• Tool cleaning and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Comprehensive Shrub Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Regular Maintenance</h3>
                  <p className="text-gray-600">
                    Scheduled pruning and care to maintain optimal health, appearance, and size throughout the growing season.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Restoration Pruning</h3>
                  <p className="text-gray-600">
                    Rejuvenate overgrown, neglected, or damaged shrubs through strategic renovation techniques.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Disease Management</h3>
                  <p className="text-gray-600">
                    Identify and address disease issues through proper pruning, sanitation, and preventive care measures.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Shape Training</h3>
                  <p className="text-gray-600">
                    Train young shrubs into desired forms and maintain established shapes for formal landscape designs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Seasonal Care</h3>
                  <p className="text-gray-600">
                    Year-round shrub care including fertilization, mulching, and protection from extreme weather conditions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Emergency Service</h3>
                  <p className="text-gray-600">
                    Storm damage cleanup and emergency pruning to address immediate safety concerns and plant health issues.
                  </p>
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
                Benefits of Professional Shrub Pruning
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Enhanced Beauty</h3>
                  <p className="text-gray-600">
                    Professional pruning maintains attractive shapes, promotes abundant flowering, and creates a polished landscape appearance that increases property value.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Improved Health</h3>
                  <p className="text-gray-600">
                    Proper pruning techniques remove diseased wood, improve air circulation, and reduce pest problems while promoting strong, healthy growth.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Better Flowering</h3>
                  <p className="text-gray-600">
                    Strategic pruning at the right time maximizes flower production and extends blooming periods for more colorful landscape displays.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Long-term Value</h3>
                  <p className="text-gray-600">
                    Regular professional care extends plant life, reduces replacement costs, and maintains consistent landscape quality over many years.
                  </p>
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
                Keep Your Shrubs Healthy & Beautiful
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design for expert shrub pruning services that will enhance your San Antonio landscape's health and appearance.
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

export default ShrubPruningPage;
