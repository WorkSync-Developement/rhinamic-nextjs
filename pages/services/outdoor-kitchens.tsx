import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Home, Zap, Droplets, Phone } from "lucide-react";

export default function OutdoorKitchens() {
  return (
    <>
      <Head>
        <title>Outdoor Kitchen Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Custom outdoor kitchen installation in San Antonio, TX. Professional design and construction with grills, countertops, storage, and utilities for perfect entertaining." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/outdoor-kitchens" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Custom Outdoor Kitchen Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Transform your San Antonio backyard into the ultimate entertaining space with a custom outdoor kitchen. 
                  Professional design, quality materials, and expert installation for year-round outdoor cooking and dining.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Kitchen Quote
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

          {/* Benefits of Outdoor Kitchens */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Add an Outdoor Kitchen?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Extended Living Space</h3>
                      <p className="text-gray-700">Create an additional functional room outdoors, perfect for San Antonio's mild climate and outdoor lifestyle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Entertaining Excellence</h3>
                      <p className="text-gray-700">Host memorable gatherings where the cook remains part of the conversation instead of isolated indoors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Property Value Increase</h3>
                      <p className="text-gray-700">Outdoor kitchens provide excellent ROI and are highly desirable features for potential home buyers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Year-Round Use</h3>
                      <p className="text-gray-700">San Antonio's climate allows outdoor cooking and dining throughout most of the year.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Healthier Cooking</h3>
                      <p className="text-gray-700">Outdoor grilling and cooking reduces indoor heat and keeps cooking odors and smoke outside.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Custom Design</h3>
                      <p className="text-gray-700">Tailored to your cooking style, space, and budget with endless design possibilities and material options.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Family Time</h3>
                      <p className="text-gray-700">Bring families together outdoors for cooking, dining, and creating lasting memories in your backyard.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Energy Savings</h3>
                      <p className="text-gray-700">Reduce indoor cooling costs by keeping heat-generating cooking activities outside during hot Texas summers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Kitchen Components */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Essential Outdoor Kitchen Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <Home className="text-red-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Grilling Station</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    High-quality built-in or freestanding grills with options for gas, charcoal, 
                    or hybrid systems to suit your cooking preferences.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Gas, charcoal, or pellet grills</li>
                    <li>• Side burners and warming drawers</li>
                    <li>• Rotisserie and specialty accessories</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Home className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Counter & Storage</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Durable countertops and ample storage solutions designed to withstand 
                    outdoor conditions while providing functionality and style.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Granite, concrete, or stone tops</li>
                    <li>• Weather-resistant cabinets</li>
                    <li>• Drawers and pantry storage</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Droplets className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Sink & Plumbing</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Convenient cleanup with outdoor-rated sinks, faucets, and plumbing 
                    connections for food prep and easy maintenance.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Stainless steel or stone sinks</li>
                    <li>• Hot and cold water supply</li>
                    <li>• Drainage and waste connections</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Zap className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Electrical & Lighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Proper electrical infrastructure for appliances, task lighting, 
                    and ambient lighting for evening entertaining.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• GFCI-protected outlets</li>
                    <li>• Under-cabinet task lighting</li>
                    <li>• Ambient and accent lighting</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <Home className="text-orange-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Refrigeration</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Outdoor-rated refrigerators, wine coolers, and ice makers 
                    keep food and beverages at perfect temperatures.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Outdoor refrigerators and freezers</li>
                    <li>• Wine and beverage coolers</li>
                    <li>• Built-in ice makers</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <Home className="text-yellow-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Specialty Features</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Pizza ovens, smokers, teppanyaki grills, and other specialty 
                    cooking equipment for gourmet outdoor dining experiences.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Wood-fired pizza ovens</li>
                    <li>• Built-in smokers</li>
                    <li>• Teppanyaki and hibachi grills</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Styles */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Popular Design Styles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Modern Contemporary</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Clean lines, sleek materials, and minimalist design with stainless steel appliances, 
                    concrete countertops, and integrated lighting.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Stainless steel and concrete</li>
                    <li>• Geometric clean lines</li>
                    <li>• Integrated LED lighting</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Rustic Traditional</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Natural stone, weathered wood, and earth-tone materials that blend 
                    seamlessly with landscape and provide timeless appeal.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Natural stone and brick</li>
                    <li>• Wood accents and beams</li>
                    <li>• Warm, earthy color palette</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Mediterranean Villa</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Inspired by European outdoor living with travertine, wrought iron details, 
                    and warm colors that complement San Antonio's climate.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Travertine and natural stone</li>
                    <li>• Arched openings and details</li>
                    <li>• Warm Mediterranean colors</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Planning & Design Process */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-909 mb-12 text-center">Design & Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Consultation</h3>
                  <p className="text-gray-700 text-sm">
                    Discuss your vision, cooking style, budget, and space to create 
                    a customized design that fits your lifestyle.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Design</h3>
                  <p className="text-gray-700 text-sm">
                    Detailed plans showing layout, materials, appliances, 
                    and utility connections for your approval.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Infrastructure</h3>
                  <p className="text-gray-700 text-sm">
                    Foundation, plumbing, electrical, and gas line installation 
                    by licensed professionals following all codes.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-700 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Completion</h3>
                  <p className="text-gray-700 text-sm">
                    Countertop installation, appliance setup, final connections, 
                    and thorough testing of all systems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Materials & Durability */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Weather-Resistant Materials</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Built for Texas Weather</h3>
                  <p className="text-gray-700 mb-4">
                    San Antonio's climate demands materials that can withstand intense UV exposure, 
                    temperature extremes, and occasional severe weather. We select only proven outdoor-rated components.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Quality Construction</h3>
                  <p className="text-gray-700 mb-4">
                    Proper construction techniques including adequate drainage, ventilation, 
                    and weatherproofing ensure your investment lasts for decades.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Low Maintenance</h3>
                  <p className="text-gray-700">
                    Strategic material selection minimizes maintenance requirements while 
                    maintaining beauty and functionality year after year.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Recommended Materials</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Countertops</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Granite: Heat and stain resistant</li>
                        <li>• Concrete: Customizable and durable</li>
                        <li>• Quartzite: Low maintenance, non-porous</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cabinetry</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Marine-grade polymer</li>
                        <li>• Stainless steel frames</li>
                        <li>• Teak or other weather-resistant woods</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Natural stone or quality pavers</li>
                        <li>• Steel frame construction</li>
                        <li>• Proper drainage and ventilation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Investment & ROI */}
          <section className="py-16 bg-blue-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Investment & Return Value</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Immediate Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Enhanced lifestyle and entertaining</li>
                    <li>• Increased usable living space</li>
                    <li>• Improved family time and memories</li>
                    <li>• Reduced indoor cooling costs</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Property Value</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 70-80% return on investment</li>
                    <li>• High buyer appeal and demand</li>
                    <li>• Competitive advantage in resale</li>
                    <li>• Premium property positioning</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Long-Term Value</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 15-20 year functional lifespan</li>
                    <li>• Low maintenance requirements</li>
                    <li>• Timeless design appeal</li>
                    <li>• Warranty protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Create Your Dream Outdoor Kitchen?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Transform your backyard into the ultimate entertaining destination with a custom outdoor kitchen. 
                From design to completion, we'll create the perfect space for your lifestyle and budget.
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
                  Schedule Design Consultation
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
                  href="/services/paver-patio-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Paver Patio Installation</h3>
                  <p className="text-gray-600">Create the perfect foundation for your outdoor kitchen</p>
                </Link>
                <Link 
                  href="/services/fire-pit-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Fire Pit Installation</h3>
                  <p className="text-gray-600">Extend entertaining into the evening with a custom fire feature</p>
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