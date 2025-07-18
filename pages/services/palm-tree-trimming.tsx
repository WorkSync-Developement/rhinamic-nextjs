import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const PalmTreeTrimmingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional Palm Tree Trimming
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Expert palm tree care and trimming services to keep your San Antonio palms healthy, safe, and beautiful year-round.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Schedule Palm Service
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Specialized Palm Tree Care
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Proper Trimming Technique</h3>
                  <p className="text-gray-600 mb-4">
                    Expert trimming that follows proper palm care guidelines to maintain health while removing only dead, dying, or dangerous fronds.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Remove only brown, dead fronds</li>
                    <li>• Preserve healthy green fronds</li>
                    <li>• Safe seed pod removal</li>
                    <li>• Proper cutting angle techniques</li>
                    <li>• Avoid over-pruning damage</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Health & Safety Focus</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive palm care that prioritizes tree health, property safety, and long-term palm vitality in San Antonio's climate.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Disease prevention and identification</li>
                    <li>• Hazard assessment and removal</li>
                    <li>• Growth pattern maintenance</li>
                    <li>• Nutritional deficiency detection</li>
                    <li>• Storm damage prevention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Palm Trees Common in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Cold-Hardy Palms</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Windmill Palm (Trachycarpus fortunei)</li>
                    <li>• Needle Palm (Rhapidophyllum hystrix)</li>
                    <li>• Dwarf Palmetto (Sabal minor)</li>
                    <li>• Texas Sabal Palm (Sabal mexicana)</li>
                    <li>• Pindo Palm (Butia capitata)</li>
                    <li>• Mediterranean Fan Palm (Chamaerops)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Popular Landscape Palms</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Queen Palm (Syagrus romanzoffiana)</li>
                    <li>• Phoenix Palm varieties</li>
                    <li>• Washington Palm (Washingtonia robusta)</li>
                    <li>• European Fan Palm (Chamaerops humilis)</li>
                    <li>• Date Palm (Phoenix dactylifera)</li>
                    <li>• Bismarck Palm (Bismarckia nobilis)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Smaller Palm Varieties</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Sago Palm (Cycas revoluta)</li>
                    <li>• Saw Palmetto (Serenoa repens)</li>
                    <li>• Cardboard Palm (Zamia furfuracea)</li>
                    <li>• Mediterranean Fan Palm</li>
                    <li>• Lady Palm (Rhapis excelsa)</li>
                    <li>• Coontie (Zamia integrifolia)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trimming Guidelines Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Trimming Guidelines
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌴</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Dead Frond Removal</h3>
                  <p className="text-gray-600 text-sm">
                    Remove only completely brown, dead fronds to maintain palm health
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Avoid Over-Pruning</h3>
                  <p className="text-gray-600 text-sm">
                    Never remove green fronds or create "hurricane cuts" that damage palms
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✂️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Proper Cutting</h3>
                  <p className="text-gray-600 text-sm">
                    Clean cuts close to trunk without damaging the palm's growing crown
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🗓️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Timing Matters</h3>
                  <p className="text-gray-600 text-sm">
                    Schedule trimming during optimal times to minimize stress and promote health
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Common Palm Tree Issues in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-600 mb-4">Nutrient Deficiencies</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Manganese deficiency (frizzle top)</li>
                    <li>• Potassium deficiency (orange spotting)</li>
                    <li>• Magnesium deficiency (yellow edges)</li>
                    <li>• Iron deficiency (overall yellowing)</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4">Disease Problems</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Fusarium wilt</li>
                    <li>• Pink rot</li>
                    <li>• Bacterial bud rot</li>
                    <li>• Leaf spot diseases</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-yellow-600 mb-4">Environmental Stress</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Cold damage from freezes</li>
                    <li>• Wind damage and breakage</li>
                    <li>• Drought stress</li>
                    <li>• Soil compaction issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Care Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Year-Round Palm Care Schedule
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Spring (Mar-May)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Remove winter-damaged fronds</li>
                    <li>• Apply fertilizer with micronutrients</li>
                    <li>• Check for pest infestations</li>
                    <li>• Begin regular watering schedule</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Summer (Jun-Aug)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Monitor for nutrient deficiencies</li>
                    <li>• Increase watering frequency</li>
                    <li>• Remove seed pods and flowers</li>
                    <li>• Watch for heat stress signs</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fall (Sep-Nov)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Prepare for winter weather</li>
                    <li>• Final trimming before cold</li>
                    <li>• Apply winter fertilizer</li>
                    <li>• Install cold protection if needed</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Winter (Dec-Feb)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Protect from freeze damage</li>
                    <li>• Reduce watering frequency</li>
                    <li>• Monitor for cold damage</li>
                    <li>• Plan for spring care needs</li>
                  </ul>
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
                Comprehensive Palm Tree Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Professional Trimming</h3>
                  <p className="text-gray-600">
                    Expert trimming following proper palm care guidelines to maintain health, safety, and appearance without causing damage.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Health Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive evaluation of palm health including nutrient deficiency identification and disease detection.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Seed Pod Removal</h3>
                  <p className="text-gray-600">
                    Safe removal of flower stalks and seed pods to redirect energy to palm health and prevent unwanted sprouting.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Fertilization Program</h3>
                  <p className="text-gray-600">
                    Specialized palm fertilization with essential micronutrients to prevent deficiencies and promote healthy growth.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Storm Preparation</h3>
                  <p className="text-gray-600">
                    Pre-storm palm preparation and post-storm damage assessment and cleanup to minimize property damage.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Consultation & Education</h3>
                  <p className="text-gray-600">
                    Expert guidance on palm selection, care practices, and maintenance schedules for optimal long-term palm health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Benefits of Professional Palm Care
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Extended Palm Life</h3>
                  <p className="text-gray-600">
                    Proper care techniques significantly extend palm lifespan, protecting your investment and maintaining landscape beauty for decades.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Safety & Risk Reduction</h3>
                  <p className="text-gray-600">
                    Professional trimming removes hazardous fronds and seed pods that could fall and cause property damage or personal injury.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Enhanced Appearance</h3>
                  <p className="text-gray-600">
                    Expert care maintains the natural beauty and tropical appeal of your palms while avoiding the damage caused by improper pruning.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Disease Prevention</h3>
                  <p className="text-gray-600">
                    Regular professional care identifies and prevents common palm diseases and nutrient deficiencies before they become serious problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Keep Your Palms Healthy & Beautiful
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design for expert palm tree trimming and care services that protect your investment and enhance your San Antonio landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Schedule Palm Service
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

export default PalmTreeTrimmingPage;
