import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { CheckCircle, Scissors, Droplets, Sun, Shield, Phone } from 'lucide-react';

const ArtificialTurfInstallationPage = () => {
  return (
    <>
      <Head>
        <title>Artificial Turf Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional artificial turf installation in San Antonio, TX. Low-maintenance, drought-resistant synthetic grass that looks beautiful year-round." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/artificial-turf-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Artificial Turf Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Experience the beauty of a perfect lawn year-round with professional artificial turf installation in San Antonio. 
                  Low-maintenance, drought-resistant, and always green.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Free Turf Quote
                  </a>
                  <a 
                    href="tel:2012544911"
                    className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Call (201) 254-4911
                  </a>
                </div>
              </div>
            </div>
          </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Premium Artificial Turf Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Residential Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your home's landscape with beautiful, maintenance-free artificial turf that looks and feels like natural grass.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Front and backyard applications</li>
                    <li>• Pool deck and patio areas</li>
                    <li>• Play areas and pet zones</li>
                    <li>• Rooftop and balcony installations</li>
                    <li>• Custom design integration</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Commercial Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Professional artificial turf installation for businesses, schools, sports facilities, and public spaces.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Office building landscapes</li>
                    <li>• Sports fields and courts</li>
                    <li>• Playground surfaces</li>
                    <li>• Event venues and hotels</li>
                    <li>• Large-scale installations</li>
                  </ul>
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
                Benefits of Artificial Turf in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Water Conservation</h3>
                  <p className="text-gray-600">
                    Save thousands of gallons annually with no watering required, perfect for San Antonio's water restrictions.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌡️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Heat Resistance</h3>
                  <p className="text-gray-600">
                    Advanced UV protection and heat-resistant fibers withstand San Antonio's intense summer temperatures.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✂️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">No Maintenance</h3>
                  <p className="text-gray-600">
                    Eliminate mowing, fertilizing, weeding, and pest control for significant time and cost savings.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Always Green</h3>
                  <p className="text-gray-600">
                    Maintain a lush, green appearance year-round regardless of weather, drought, or dormant seasons.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏃</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">High Durability</h3>
                  <p className="text-gray-600">
                    Heavy foot traffic, pets, and play activities won't damage the surface - it bounces back every time.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Cost Effective</h3>
                  <p className="text-gray-600">
                    Lower long-term costs with no water bills, equipment purchases, or ongoing maintenance expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Turf Types Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Premium Turf Options
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Landscape Turf</h3>
                  <p className="text-gray-600 mb-4">
                    Premium residential turf with natural appearance and soft texture for landscaping applications.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 35-60mm pile height options</li>
                    <li>• Natural color variations</li>
                    <li>• Soft, realistic texture</li>
                    <li>• UV stabilized fibers</li>
                    <li>• 15-20 year warranty</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Pet-Friendly Turf</h3>
                  <p className="text-gray-600 mb-4">
                    Specially designed turf with enhanced drainage and antimicrobial protection for pet areas.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Superior drainage system</li>
                    <li>• Antimicrobial infill options</li>
                    <li>• Odor-resistant properties</li>
                    <li>• Easy cleaning and maintenance</li>
                    <li>• Non-toxic materials</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Sports Turf</h3>
                  <p className="text-gray-600 mb-4">
                    High-performance turf designed for sports applications with excellent durability and safety features.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• High-traffic durability</li>
                    <li>• Shock absorption padding</li>
                    <li>• Consistent playing surface</li>
                    <li>• Fast drainage technology</li>
                    <li>• Professional specifications</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Putting Green Turf</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized turf for golf putting greens with precise ball roll and realistic playing characteristics.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Professional golf specifications</li>
                    <li>• Consistent ball roll speed</li>
                    <li>• Multiple stimp ratings available</li>
                    <li>• Custom hole cup integration</li>
                    <li>• Precision leveling required</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Playground Turf</h3>
                  <p className="text-gray-600 mb-4">
                    Safety-certified playground surface with impact protection and child-friendly features.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• IPEMA safety certified</li>
                    <li>• Impact absorption system</li>
                    <li>• Lead-free, non-toxic</li>
                    <li>• Easy sanitization</li>
                    <li>• Bright, colorful options</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Commercial Grade</h3>
                  <p className="text-gray-600 mb-4">
                    Heavy-duty turf for commercial applications with maximum durability and professional appearance.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Maximum traffic capacity</li>
                    <li>• Extended warranty coverage</li>
                    <li>• Fire-resistant properties</li>
                    <li>• Professional installation</li>
                    <li>• Custom specifications</li>
                  </ul>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Remove existing vegetation, grade the surface, and ensure proper drainage
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Base Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Install and compact crushed stone base for stability and drainage
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Turf Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Roll out, cut, and seam turf with professional joining techniques
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Finishing Touches</h3>
                  <p className="text-gray-600 text-sm">
                    Add infill material, brush fibers, and complete edge securing
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Quality Installation Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Professional Grade Materials</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 6-8 inch crushed stone base</li>
                      <li>• Woven geotextile fabric</li>
                      <li>• Premium joining tape and adhesive</li>
                      <li>• Galvanized securing nails</li>
                      <li>• Silica sand or rubber infill</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Installation Standards</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Precise grade and slope calculations</li>
                      <li>• Invisible seam joining techniques</li>
                      <li>• Proper perimeter anchoring</li>
                      <li>• Drainage system integration</li>
                      <li>• Final quality inspection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Perfect Applications for Artificial Turf
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Ideal Locations</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• High-traffic areas that struggle with natural grass</li>
                    <li>• Shaded areas where grass won't grow</li>
                    <li>• Pool decks and water feature surrounds</li>
                    <li>• Pet runs and exercise areas</li>
                    <li>• Rooftops and balconies</li>
                    <li>• Commercial landscaping</li>
                    <li>• Event venues and entertainment areas</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Climate Benefits</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Excellent for San Antonio's hot, dry climate</li>
                    <li>• No brown dormant periods in winter</li>
                    <li>• Unaffected by drought conditions</li>
                    <li>• Maintains appearance through extreme weather</li>
                    <li>• No water restrictions impact</li>
                    <li>• Heat-resistant advanced fibers</li>
                    <li>• Fade-resistant UV protection</li>
                  </ul>
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
                Ready for a Perfect Lawn Year-Round?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design for a consultation and discover how artificial turf can transform your San Antonio property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Schedule Site Visit
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
    </>
  );
};

export default ArtificialTurfInstallationPage;
