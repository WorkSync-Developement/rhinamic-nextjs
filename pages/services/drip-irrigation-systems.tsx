import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const DripIrrigationSystemsPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Drip Irrigation Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Efficient, water-saving irrigation solutions perfect for San Antonio's climate - deliver water precisely where plants need it while reducing waste and water bills.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Design Drip System
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Precision Water Delivery Systems
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Water-Efficient Technology</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced drip irrigation technology that delivers water directly to plant root zones, reducing water usage by up to 50% compared to traditional sprinkler systems.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Precision water delivery to root zones</li>
                    <li>• Reduced water waste and evaporation</li>
                    <li>• Lower water bills and conservation</li>
                    <li>• Consistent soil moisture levels</li>
                    <li>• Smart controller integration</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Custom System Design</h3>
                  <p className="text-gray-600 mb-4">
                    Tailored irrigation solutions designed specifically for your landscape's unique needs, plant types, and San Antonio's challenging growing conditions.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Site-specific system design</li>
                    <li>• Plant-specific watering zones</li>
                    <li>• Slope and terrain adaptation</li>
                    <li>• Integration with existing landscaping</li>
                    <li>• Future expansion capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Drip Irrigation System Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Surface Drip Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Above-ground drip lines perfect for vegetable gardens, flower beds, and container plantings with easy access for maintenance.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Easy installation and adjustment</li>
                    <li>• Visible system for monitoring</li>
                    <li>• Cost-effective option</li>
                    <li>• Quick repairs and modifications</li>
                    <li>• Ideal for annual plantings</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Subsurface Drip Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Underground installation that delivers water directly to root zones while maintaining clean landscape aesthetics.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Hidden, aesthetic installation</li>
                    <li>• Reduced evaporation losses</li>
                    <li>• Protection from damage</li>
                    <li>• Ideal for turf areas</li>
                    <li>• Long-term installation</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Micro-Spray Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Low-volume spray systems that cover larger areas while maintaining water efficiency for shrubs and groundcovers.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Larger coverage areas</li>
                    <li>• Adjustable spray patterns</li>
                    <li>• Ideal for shrub beds</li>
                    <li>• Reduced clogging issues</li>
                    <li>• Multiple head options</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Container Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized drip systems designed for container gardens, hanging baskets, and potted plant collections.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Individual container control</li>
                    <li>• Adjustable flow rates</li>
                    <li>• Self-watering capabilities</li>
                    <li>• Vacation watering solution</li>
                    <li>• Expandable design</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Tree & Shrub Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Deep watering systems designed specifically for established trees and large shrubs with extensive root systems.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Deep root zone watering</li>
                    <li>• Multiple emitter placement</li>
                    <li>• Slow, deep infiltration</li>
                    <li>• Drought stress prevention</li>
                    <li>• Mature plant support</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Smart Drip Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Technology-integrated systems with weather monitoring, soil sensors, and smartphone control for optimal automation.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Weather-based adjustments</li>
                    <li>• Soil moisture monitoring</li>
                    <li>• Remote smartphone control</li>
                    <li>• Water usage tracking</li>
                    <li>• Automated scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                System Components & Technology
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Controllers</h3>
                  <p className="text-gray-600 text-sm">
                    Smart controllers with weather sensors and programmable schedules
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Emitters</h3>
                  <p className="text-gray-600 text-sm">
                    Precision emitters with adjustable flow rates and pressure compensation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Valves</h3>
                  <p className="text-gray-600 text-sm">
                    High-quality valves for zone control and pressure regulation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Controls</h3>
                  <p className="text-gray-600 text-sm">
                    Smartphone apps and Wi-Fi connectivity for remote system management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Benefits of Drip Irrigation in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-cyan-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">Water Conservation</h3>
                  <p className="text-gray-600">
                    Reduce water usage by 30-50% compared to traditional sprinkler systems while maintaining healthier plants and landscapes.
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">Cost Savings</h3>
                  <p className="text-gray-600">
                    Lower water bills and reduced plant replacement costs through more efficient watering and improved plant health.
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">Plant Health</h3>
                  <p className="text-gray-600">
                    Consistent soil moisture levels promote healthier root development and reduce plant stress and disease issues.
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">Weed Reduction</h3>
                  <p className="text-gray-600">
                    Targeted watering reduces weed germination in non-planted areas, decreasing maintenance requirements.
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">Erosion Prevention</h3>
                  <p className="text-gray-600">
                    Gentle water delivery prevents soil erosion and nutrient runoff, protecting your landscape investment.
                  </p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-4">Flexible Operation</h3>
                  <p className="text-gray-600">
                    Operate during any time of day, including water restriction periods, with low-pressure requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Installation Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Analyze landscape, water pressure, plant needs, and existing irrigation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">System Design</h3>
                  <p className="text-gray-600 text-sm">
                    Create custom layout with zone planning and component selection
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Professional installation with quality components and proper connections
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Programming</h3>
                  <p className="text-gray-600 text-sm">
                    System setup, testing, and programming for optimal performance
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
                System Maintenance & Support
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Regular Maintenance</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Emitter cleaning and inspection</li>
                    <li>• Filter replacement and cleaning</li>
                    <li>• Line pressure testing</li>
                    <li>• Controller programming updates</li>
                    <li>• Seasonal system adjustments</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Troubleshooting</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Clogged emitter diagnosis</li>
                    <li>• Pressure problem identification</li>
                    <li>• Line break detection and repair</li>
                    <li>• Timer and controller issues</li>
                    <li>• Coverage optimization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">System Upgrades</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Smart controller installation</li>
                    <li>• Additional zone expansion</li>
                    <li>• Sensor integration upgrades</li>
                    <li>• Efficiency improvements</li>
                    <li>• Technology updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Perfect Applications for Drip Irrigation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Ideal Landscape Areas</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Vegetable and herb gardens</li>
                    <li>• Flower beds and perennial borders</li>
                    <li>• Shrub and foundation plantings</li>
                    <li>• Tree and large plant watering</li>
                    <li>• Container and raised bed gardens</li>
                    <li>• Native and drought-tolerant plants</li>
                    <li>• Steep slopes and challenging terrain</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">San Antonio Benefits</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Compliance with water restrictions</li>
                    <li>• Efficient use during hot summers</li>
                    <li>• Reduced evaporation in dry climate</li>
                    <li>• Support for native plant establishment</li>
                    <li>• Year-round consistent watering</li>
                    <li>• Protection from wind and heat</li>
                    <li>• Lower utility costs long-term</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Upgrade to Water-Efficient Irrigation
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact Rhinamic Landscape Design to design and install a custom drip irrigation system that saves water, reduces costs, and keeps your San Antonio landscape thriving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Get System Quote
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
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

export default DripIrrigationSystemsPage;
