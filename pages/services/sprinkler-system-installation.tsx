import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Droplets, Zap, Shield, Clock, Phone } from "lucide-react";

export default function SprinklerSystemInstallation() {
  return (
    <>
      <Head>
        <title>Sprinkler System Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional sprinkler system installation in San Antonio, TX. Automated lawn watering systems with smart controllers for healthy, green grass year-round." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/sprinkler-system-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Sprinkler System Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Automated lawn watering systems designed for San Antonio's climate. Keep your grass green 
                  and healthy with smart, efficient sprinkler systems that save time, water, and money.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Sprinkler Quote
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

          {/* Benefits of Automated Sprinklers */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Install a Sprinkler System?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Consistent Watering Schedule</h3>
                      <p className="text-gray-700">Automated systems water your lawn at optimal times, even when you're away or forget to water manually.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Water Conservation</h3>
                      <p className="text-gray-700">Precise water delivery and smart controllers reduce waste compared to manual watering methods.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Healthier Lawn</h3>
                      <p className="text-gray-700">Even coverage and proper timing promote deep root growth and reduce disease from overwatering.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Time Savings</h3>
                      <p className="text-gray-700">No more dragging hoses or forgetting to move sprinklers—your system handles everything automatically.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Property Value Increase</h3>
                      <p className="text-gray-700">Professional sprinkler systems increase curb appeal and home value while reducing maintenance needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Weather-Smart Operation</h3>
                      <p className="text-gray-700">Rain sensors and smart controllers adjust schedules based on weather conditions and soil moisture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Zone-Specific Control</h3>
                      <p className="text-gray-700">Different areas get different amounts of water based on sun exposure, grass type, and usage patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">SAWS Compliance</h3>
                      <p className="text-gray-700">Systems designed to meet San Antonio water restrictions while maintaining a beautiful lawn.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Components */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Quality System Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Droplets className="text-blue-700" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Spray Heads</h3>
                  <p className="text-gray-700 text-sm">
                    High-quality spray heads with adjustable patterns for uniform coverage 
                    and efficient water distribution across your lawn.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-green-700" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-909 mb-3">Smart Controllers</h3>
                  <p className="text-gray-700 text-sm">
                    Weather-based controllers that automatically adjust watering schedules 
                    based on rainfall, temperature, and seasonal needs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-purple-700" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Control Valves</h3>
                  <p className="text-gray-700 text-sm">
                    Professional-grade valves that control water flow to each zone 
                    with precision and reliability for years of trouble-free operation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-orange-700" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Rain Sensors</h3>
                  <p className="text-gray-700 text-sm">
                    Automatic rain detection that skips unnecessary watering cycles 
                    when natural rainfall provides adequate moisture for your lawn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 bg-blue-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Professional Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-purple-800 font-bold">1</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Site Assessment</h3>
                  <p className="text-gray-700 text-xs">
                    Measure lawn areas, assess water pressure, and plan optimal zone layout for complete coverage.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">System Design</h3>
                  <p className="text-gray-700 text-xs">
                    Create detailed plans showing sprinkler placement, pipe routing, and controller location.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Trenching & Pipe</h3>
                  <p className="text-gray-700 text-xs">
                    Professional trenching and pipe installation with minimal disruption to existing landscape.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-orange-700 font-bold">4</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Head Installation</h3>
                  <p className="text-gray-700 text-xs">
                    Precise placement and adjustment of spray heads for optimal coverage patterns and efficiency.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-red-700 font-bold">5</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Testing & Setup</h3>
                  <p className="text-gray-700 text-xs">
                    System testing, controller programming, and homeowner training for optimal operation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* San Antonio Considerations */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Designed for San Antonio Conditions</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Clay Soil Challenges</h3>
                  <p className="text-gray-700 mb-4">
                    San Antonio's heavy clay soil requires special attention to prevent runoff. We design systems 
                    with cycle-and-soak programming that allows water to penetrate slowly.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Water Restrictions Compliance</h3>
                  <p className="text-gray-700 mb-4">
                    All systems comply with SAWS watering restrictions and include rain sensors as required. 
                    Smart controllers help you stay within usage guidelines automatically.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Extreme Weather Durability</h3>
                  <p className="text-gray-700">
                    Components selected for Texas weather extremes—from summer heat that can reach 105°F 
                    to occasional winter freezes that require proper winterization.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Local Expertise Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Understanding of local grass types and water needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Knowledge of SAWS requirements and rebate programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Experience with neighborhood water pressure variations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Proper seasonal programming for Texas climate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Local supplier relationships for quality components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Investment & ROI */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Smart Investment in Your Property</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Water Savings</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Smart sprinkler systems typically reduce water usage by 20-30% compared to manual watering, 
                    lowering monthly water bills.
                  </p>
                  <p className="text-purple-800 font-semibold text-sm">Typical savings: $30-80/month</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Time Value</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Eliminate hours spent moving sprinklers and worrying about watering schedules. 
                    Your time is valuable—invest it in enjoying your yard.
                  </p>
                  <p className="text-purple-800 font-semibold text-sm">Save: 2-5 hours per week</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Property Value</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Professional irrigation systems increase property value and appeal to buyers 
                    who want move-in ready landscapes.
                  </p>
                  <p className="text-purple-800 font-semibold text-sm">ROI: 80-100% at resale</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Automated Lawn Care?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Stop dragging hoses and worrying about watering schedules. Professional sprinkler systems 
                keep your San Antonio lawn green and healthy while you enjoy your free time.
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
                  Get Free Sprinkler Estimate
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
                  href="/services/irrigation-system-installation-repair"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Complete Irrigation Systems</h3>
                  <p className="text-gray-600">Full-property irrigation including drip zones for gardens</p>
                </Link>
                <Link 
                  href="/services/lawn-care-services"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Lawn Care Services</h3>
                  <p className="text-gray-600">Complete lawn maintenance to complement your sprinkler system</p>
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