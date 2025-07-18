import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { CheckCircle, Leaf, Shield, Droplets, Calendar, Phone } from 'lucide-react';

const WeedControlPage = () => {
  return (
    <>
      <Head>
        <title>Professional Weed Control Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert weed control services in San Antonio, TX. Pre-emergent and post-emergent treatments for a weed-free landscape. Safe, effective solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/weed-control" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Weed Control Services
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Keep your San Antonio landscape weed-free with our targeted, eco-friendly weed control solutions. 
                  Prevent and eliminate weeds for a healthier, more beautiful lawn and garden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Weed Control Quote
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
                Comprehensive Weed Control Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Pre-Emergent Control</h3>
                  <p className="text-gray-600 mb-4">
                    Prevent weeds before they start with our strategic pre-emergent applications targeting common San Antonio weeds.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Timing based on soil temperature</li>
                    <li>• Prevents crabgrass and annual weeds</li>
                    <li>• Safe for existing lawn grass</li>
                    <li>• Multiple application windows</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Post-Emergent Treatment</h3>
                  <p className="text-gray-600 mb-4">
                    Target existing weeds with selective herbicides that eliminate weeds while protecting your grass.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Selective herbicide applications</li>
                    <li>• Targets broadleaf and grassy weeds</li>
                    <li>• Spot treatment for problem areas</li>
                    <li>• Follow-up treatments as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Weeds Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Common San Antonio Weeds We Control
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Grassy Weeds</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Crabgrass</li>
                    <li>• Dallisgrass</li>
                    <li>• Johnsongrass</li>
                    <li>• Bermudagrass (unwanted)</li>
                    <li>• Annual bluegrass</li>
                    <li>• Goosegrass</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Broadleaf Weeds</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dandelions</li>
                    <li>• Clover</li>
                    <li>• Henbit</li>
                    <li>• Chickweed</li>
                    <li>• Oxalis</li>
                    <li>• Plantain</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Sedges & Rushes</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Nutsedge (yellow/purple)</li>
                    <li>• Kyllinga</li>
                    <li>• Globe sedge</li>
                    <li>• Fragrant flatsedge</li>
                    <li>• Texas sedge</li>
                    <li>• Spike rushes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Methods */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Our Weed Control Methods
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Pre-Emergent</h3>
                  <p className="text-gray-600 text-sm">
                    Barrier treatments to prevent weed seeds from germinating
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Selective Control</h3>
                  <p className="text-gray-600 text-sm">
                    Target specific weeds while protecting desired grass
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Organic Options</h3>
                  <p className="text-gray-600 text-sm">
                    Natural corn gluten and organic herbicide alternatives
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Scheduled Program</h3>
                  <p className="text-gray-600 text-sm">
                    Year-round program with optimal timing for each treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Schedule */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                San Antonio Weed Control Schedule
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Spring (Mar-May)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Pre-emergent application</li>
                    <li>• Early broadleaf treatment</li>
                    <li>• Crabgrass prevention</li>
                    <li>• Cool-season weed control</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Summer (Jun-Aug)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Post-emergent spot treatment</li>
                    <li>• Sedge and nutsedge control</li>
                    <li>• Heat-tolerant weed targeting</li>
                    <li>• Selective herbicide applications</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fall (Sep-Nov)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Second pre-emergent round</li>
                    <li>• Winter weed prevention</li>
                    <li>• Broadleaf weed treatment</li>
                    <li>• Preparation for dormancy</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Winter (Dec-Feb)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Cool-season weed control</li>
                    <li>• Henbit and chickweed treatment</li>
                    <li>• Planning next year's program</li>
                    <li>• Dormant season applications</li>
                  </ul>
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
                Benefits of Professional Weed Control
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Healthier Lawn</h3>
                  <p className="text-gray-600">
                    Remove competition for nutrients, water, and sunlight, allowing your grass to thrive and develop a thick, healthy turf that naturally resists weeds.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Long-term Results</h3>
                  <p className="text-gray-600">
                    Strategic timing and proper products provide lasting weed control, reducing the need for frequent treatments and saving time and money.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Expert Knowledge</h3>
                  <p className="text-gray-600">
                    Our licensed professionals understand local weed patterns, optimal timing, and proper application rates for maximum effectiveness and safety.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Increased Property Value</h3>
                  <p className="text-gray-600">
                    A weed-free, lush lawn enhances curb appeal and increases your property value while creating a beautiful outdoor space for your family.
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
                Ready for a Weed-Free Lawn?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design today for a customized weed control program tailored to your San Antonio property's specific needs.
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
    </>
  );
};

export default WeedControlPage;
