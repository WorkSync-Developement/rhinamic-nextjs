import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Palette, Users, Clock, MapPin, Phone } from "lucide-react";

export default function LandscapeDesign() {
  return (
    <>
      <Head>
        <title>Professional Landscape Design | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert landscape design services in San Antonio, TX. Custom outdoor designs that fit your lifestyle, budget, and Texas climate. 41+ years experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/landscape-design" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Landscape Design
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Transform your San Antonio property with custom landscape design that works with Texas climate, 
                  fits your lifestyle, and reflects your vision. From concept to reality—we build what matters to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Your Free Consultation
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

          {/* What's Included Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">What's Included in Our Design Service</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Site Analysis & Consultation</h3>
                      <p className="text-gray-700">We assess your soil, drainage, sun exposure, and existing features to understand what works best for your property.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Custom Design Plans</h3>
                      <p className="text-gray-700">Detailed layout showing plant placement, hardscape features, and how everything connects to create your ideal outdoor space.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Native Plant Selection</h3>
                      <p className="text-gray-700">Plants that thrive in San Antonio's climate, require less water, and provide year-round beauty with minimal maintenance.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phased Implementation Plan</h3>
                      <p className="text-gray-700">Strategic timeline that fits your budget, with clear priorities so you can start enjoying results now and expand later.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hardscape Integration</h3>
                      <p className="text-gray-700">Patios, walkways, retaining walls, and outdoor features that complement your landscape and enhance usability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                      <p className="text-gray-700">We're here after installation with maintenance guidance and adjustments as your landscape matures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process Section */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Design Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-purple-800" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">1. Consultation</h3>
                  <p className="text-gray-700">
                    We start with a conversation about your vision, challenges, and how you want to use your outdoor space. 
                    Every great design begins with understanding your goals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Palette className="text-green-700" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">2. Design</h3>
                  <p className="text-gray-700">
                    Collaborative design process where we create and refine plans together. We'll walk through options, 
                    make adjustments, and ensure the design fits your lifestyle and budget.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-blue-700" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">3. Implementation</h3>
                  <p className="text-gray-700">
                    Phased installation plan with smart priorities. Start enjoying your space now with the most impactful 
                    elements, then expand when it makes sense for your timeline.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Rhinamic Section */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Rhinamic for Landscape Design</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">41+ Years of San Antonio Experience</h3>
                  <p className="text-gray-700 mb-6">
                    We know what works in South Texas. From scorching summers to occasional freezes, our designs account 
                    for San Antonio's unique climate challenges and opportunities.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Family Craftmanship</h3>
                  <p className="text-gray-700 mb-6">
                    Four generations of builders, with deep experience in concrete, masonry, carpentry, and garden design. 
                    That means more creative, custom options—whether it's a stone patio, outdoor kitchen, or native plant garden.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Relationship-Focused</h3>
                  <p className="text-gray-700">
                    Most of our work comes from referrals because we focus on long-term relationships over quick wins. 
                    When you recommend us, you're staking your name on our work—and we take that seriously.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-green-600" size={24} />
                    <h3 className="text-xl font-semibold text-purple-900">Local San Antonio Focus</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Understanding of local soil conditions and drainage challenges</li>
                    <li>• Native and adapted plant expertise for Texas climate</li>
                    <li>• Knowledge of HOA requirements and city regulations</li>
                    <li>• Drought-tolerant designs that reduce water usage</li>
                    <li>• Plants that provide year-round interest in our growing zone</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss your landscape design vision. Whether you're starting from scratch or enhancing existing 
                features, we'll create a plan that works for your property, lifestyle, and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2012544911"
                  className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
                >
                  <Phone size={20} />
                  Call (201) 254-4911
                </a>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href="/services/landscape-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Installation</h3>
                  <p className="text-gray-600">Professional installation to bring your landscape design to life</p>
                </Link>
                <Link 
                  href="/services/landscape-maintenance"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Maintenance</h3>
                  <p className="text-gray-600">Ongoing care to keep your landscape healthy and beautiful</p>
                </Link>
                <Link 
                  href="/services"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">View All Services</h3>
                  <p className="text-gray-600">Explore our complete range of landscaping services</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Back to Services */}
          <section className="py-8 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4 text-center">
              <Link href="/services" className="text-purple-700 hover:text-purple-900 underline font-medium">
                ← Back to All Services
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}