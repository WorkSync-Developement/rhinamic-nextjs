import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const GrassSeedingOverseedingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Grass Seeding & Overseeding Services
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Restore, thicken, and improve your San Antonio lawn with professional seeding and overseeding techniques.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Seeding Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Transform Your Lawn with Professional Seeding
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">New Lawn Seeding</h3>
                  <p className="text-gray-600 mb-4">
                    Establish a brand new lawn with proper soil preparation, premium seed selection, and professional installation techniques.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Complete soil preparation</li>
                    <li>• Premium grass seed varieties</li>
                    <li>• Proper seeding rate application</li>
                    <li>• Starter fertilizer inclusion</li>
                    <li>• Watering schedule guidance</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Lawn Overseeding</h3>
                  <p className="text-gray-600 mb-4">
                    Thicken existing lawns, fill bare spots, and improve overall turf density with targeted overseeding applications.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Thick, lush lawn development</li>
                    <li>• Bare spot restoration</li>
                    <li>• Improved drought tolerance</li>
                    <li>• Enhanced disease resistance</li>
                    <li>• Better weed competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grass Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Best Grass Types for San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Bermuda Grass</h3>
                  <p className="text-gray-600 mb-4">
                    Heat and drought tolerant, perfect for San Antonio's climate. Fast-growing and durable.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Excellent heat tolerance</li>
                    <li>• High traffic tolerance</li>
                    <li>• Fast establishment</li>
                    <li>• Self-repairing</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Zoysia Grass</h3>
                  <p className="text-gray-600 mb-4">
                    Dense, low-maintenance grass that forms a beautiful, carpet-like lawn. Excellent for yards with moderate traffic.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Dense growth pattern</li>
                    <li>• Drought tolerant</li>
                    <li>• Low maintenance</li>
                    <li>• Weed resistant</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Buffalo Grass</h3>
                  <p className="text-gray-600 mb-4">
                    Native Texas grass requiring minimal water and maintenance. Perfect for eco-friendly landscaping.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Native to Texas</li>
                    <li>• Extremely drought tolerant</li>
                    <li>• Low water requirements</li>
                    <li>• Minimal maintenance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">St. Augustine</h3>
                  <p className="text-gray-600 mb-4">
                    Shade-tolerant grass ideal for areas with trees. Thick, broad blades create a lush appearance.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Excellent shade tolerance</li>
                    <li>• Thick, lush appearance</li>
                    <li>• Salt tolerant</li>
                    <li>• Good for problem areas</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Cool-Season Mix</h3>
                  <p className="text-gray-600 mb-4">
                    Fescue and ryegrass blends for winter overseeding to maintain green color year-round.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Winter color retention</li>
                    <li>• Cool weather growth</li>
                    <li>• Temporary overseeding</li>
                    <li>• Enhanced appearance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Custom Blends</h3>
                  <p className="text-gray-600 mb-4">
                    Specially formulated seed mixes designed for specific site conditions and client preferences.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Site-specific formulations</li>
                    <li>• Multi-variety benefits</li>
                    <li>• Enhanced performance</li>
                    <li>• Professional recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Our Professional Seeding Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Evaluate soil conditions, drainage, sunlight, and existing vegetation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Soil Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Improve soil quality with amendments, aeration, and pH adjustment
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Seed Application</h3>
                  <p className="text-gray-600 text-sm">
                    Professional seeding with proper rates and uniform distribution
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Establishment Care</h3>
                  <p className="text-gray-600 text-sm">
                    Starter fertilizer, mulching, and watering schedule guidance
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
                Optimal Seeding Times in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Spring Seeding</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Best Time:</strong> April - May (Warm-season grasses)
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Ideal for Bermuda, Zoysia, Buffalo grass</li>
                    <li>• Soil temperatures reach 65-70°F</li>
                    <li>• Full growing season ahead</li>
                    <li>• Excellent establishment conditions</li>
                    <li>• Reduced competition from weeds</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fall Overseeding</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Best Time:</strong> October - November (Cool-season grasses)
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Perfect for winter overseeding</li>
                    <li>• Ryegrass and fescue varieties</li>
                    <li>• Maintains green color in winter</li>
                    <li>• Cooler temperatures reduce stress</li>
                    <li>• Extends growing season</li>
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
                Comprehensive Seeding Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Soil Testing & Analysis</h3>
                  <p className="text-gray-600">
                    Professional soil testing to determine pH, nutrient levels, and soil composition for optimal seed selection and amendments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Hydroseeding</h3>
                  <p className="text-gray-600">
                    Advanced hydroseeding technique for large areas, slopes, and challenging terrain with superior germination rates.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Slice Seeding</h3>
                  <p className="text-gray-600">
                    Precision slice seeding equipment creates optimal seed-to-soil contact for improved germination and establishment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Erosion Control</h3>
                  <p className="text-gray-600">
                    Combine seeding with erosion control measures including mulching, blankets, and slope stabilization techniques.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Maintenance Programs</h3>
                  <p className="text-gray-600">
                    Follow-up care including watering schedules, fertilization, and first-year maintenance to ensure establishment success.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Renovation Services</h3>
                  <p className="text-gray-600">
                    Complete lawn renovation including existing grass removal, soil preparation, and new grass establishment.
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
                Why Choose Professional Seeding?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Higher Success Rate</h3>
                  <p className="text-gray-600">
                    Professional techniques, proper timing, and quality seeds result in significantly higher germination and establishment rates compared to DIY methods.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Cost-Effective</h3>
                  <p className="text-gray-600">
                    Avoid the expense of repeated attempts and wasted materials. Professional seeding gets it right the first time, saving money long-term.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Benefit from professional knowledge of local conditions, grass varieties, and establishment techniques specific to San Antonio.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Time Savings</h3>
                  <p className="text-gray-600">
                    Professional equipment and techniques complete seeding projects quickly and efficiently, minimizing disruption to your property.
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
                Ready to Transform Your Lawn?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design for professional grass seeding and overseeding services tailored to your San Antonio property.
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

export default GrassSeedingOverseedingPage;
