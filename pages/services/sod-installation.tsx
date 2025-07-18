import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Clock, Thermometer, Droplets, MapPin, Phone } from "lucide-react";

export default function SodInstallation() {
  return (
    <>
      <Head>
        <title>Professional Sod Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert sod installation in San Antonio, TX. Instant lawn transformation with quality sod varieties for Texas climate. Professional installation for lasting results." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/sod-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Sod Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Transform your San Antonio property overnight with professional sod installation. 
                  Get instant curb appeal and a beautiful, established lawn from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Sod Installation Quote
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

          {/* Benefits of Sod vs Seed */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Sod Over Seed?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Sod Installation Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Instant Results:</strong>
                        <span className="text-gray-700"> Beautiful lawn immediately, ready to enjoy</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Erosion Control:</strong>
                        <span className="text-gray-700"> Immediate soil stabilization and runoff prevention</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Weed-Free Start:</strong>
                        <span className="text-gray-700"> Established grass crowds out weeds naturally</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Weather Independent:</strong>
                        <span className="text-gray-700"> Less vulnerable to rain, wind, or heat damage</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Seed Installation Challenges</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Long Wait Time:</strong>
                        <span className="text-gray-700"> 6-12 weeks for establishment, longer for full coverage</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Weather Dependent:</strong>
                        <span className="text-gray-700"> Rain can wash away seed, heat can kill seedlings</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Weed Competition:</strong>
                        <span className="text-gray-700"> Weeds often establish faster than grass seed</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <strong className="text-gray-900">Patchy Results:</strong>
                        <span className="text-gray-700"> Uneven germination creates inconsistent coverage</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sod Varieties */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Quality Sod Varieties for San Antonio</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">St. Augustine Sod</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    The most popular choice for San Antonio homes. Excellent heat tolerance, good shade tolerance, 
                    and creates a thick, lush lawn.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Thermometer className="text-red-500" size={16} />
                      <span className="text-xs text-gray-600">Excellent heat tolerance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-green-600" size={16} />
                      <span className="text-xs text-gray-600">Moderate shade tolerance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="text-blue-500" size={16} />
                      <span className="text-xs text-gray-600">Regular watering needed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Bermuda Sod</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Extremely durable and drought-tolerant. Perfect for high-traffic areas and full-sun locations. 
                    Handles San Antonio heat exceptionally well.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Thermometer className="text-red-500" size={16} />
                      <span className="text-xs text-gray-600">Outstanding heat tolerance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-xs text-gray-600">High traffic tolerance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="text-blue-500" size={16} />
                      <span className="text-xs text-gray-600">Very drought tolerant</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Zoysia Sod</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Low-maintenance option with dense growth pattern. Slower to establish but creates a beautiful, 
                    carpet-like lawn requiring less mowing.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="text-purple-500" size={16} />
                      <span className="text-xs text-gray-600">Low maintenance needs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="text-orange-500" size={16} />
                      <span className="text-xs text-gray-600">Good heat tolerance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-xs text-gray-600">Dense, thick growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Professional Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-purple-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Site Preparation</h3>
                  <p className="text-gray-700 text-sm">
                    Remove existing grass, weeds, and debris. Test and amend soil pH if needed. 
                    Grade for proper drainage and smooth surface.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-green-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Soil Enhancement</h3>
                  <p className="text-gray-700 text-sm">
                    Add quality topsoil and soil amendments. Till to proper depth and create 
                    optimal growing environment for sod establishment.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-blue-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Expert Installation</h3>
                  <p className="text-gray-700 text-sm">
                    Install fresh sod with proper alignment, tight seams, and no gaps. 
                    Roll for good soil contact and immediate establishment.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-orange-700 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Initial Care</h3>
                  <p className="text-gray-700 text-sm">
                    Deep initial watering and establishment care instructions. 
                    Follow-up support during critical first few weeks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline & Care */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Installation Timeline & Care</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Project Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Small Areas (under 2,000 sq ft)</h4>
                        <p className="text-gray-700 text-sm">Typically completed in 1 day</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Medium Lawns (2,000-5,000 sq ft)</h4>
                        <p className="text-gray-700 text-sm">1-2 days depending on site conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Large Properties (5,000+ sq ft)</h4>
                        <p className="text-gray-700 text-sm">2-3 days with full site preparation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Establishment Care</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">First 2 Weeks</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Water daily to keep sod moist but not soggy</li>
                        <li>• Avoid heavy foot traffic</li>
                        <li>• Monitor for proper soil contact</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Weeks 2-6</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Gradually reduce watering frequency</li>
                        <li>• First mowing when grass reaches 3-4 inches</li>
                        <li>• Light foot traffic acceptable</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">After 6 Weeks</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Normal watering schedule</li>
                        <li>• Regular mowing and maintenance</li>
                        <li>• Fully established and ready for regular use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Time for Installation */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Best Times for Sod Installation in San Antonio</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-100 p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Spring (March-May)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Ideal time</strong> for sod installation. Moderate temperatures and spring rains 
                    help establishment before summer heat arrives.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Optimal growing conditions</li>
                    <li>• Natural rainfall assistance</li>
                    <li>• Full season to establish</li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Fall (September-November)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Excellent choice</strong> as temperatures cool but soil remains warm. 
                    Less stress on new sod during establishment.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Reduced heat stress</li>
                    <li>• Warm soil for root growth</li>
                    <li>• Lower water requirements</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Summer/Winter</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Possible but challenging.</strong> Summer heat requires intensive watering. 
                    Winter dormancy slows establishment.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Extra care required</li>
                    <li>• Higher water costs</li>
                    <li>• Consider waiting for ideal season</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Rhinamic */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Rhinamic for Sod Installation</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Quality Sod Sources</h3>
                  <p className="text-gray-700 mb-4">
                    We partner with reputable local sod farms that grow grass specifically for Texas conditions. 
                    Fresh-cut sod delivered the same day for optimal transplant success.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Expert Installation</h3>
                  <p className="text-gray-700 mb-4">
                    Proper site preparation and installation techniques ensure your sod establishes quickly 
                    and provides years of beautiful lawn coverage.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Local Experience</h3>
                  <p className="text-gray-700">
                    41+ years in San Antonio means we understand local soil conditions, climate challenges, 
                    and what varieties perform best in different areas of the city.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Our Sod Installation Promise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">Fresh sod installed same day as delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">Proper soil preparation for long-term success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">Detailed care instructions and follow-up support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">Professional cleanup and site restoration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for an Instant Lawn Transformation?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Don't wait months for a beautiful lawn. Professional sod installation gives you immediate results 
                and lasting beauty. Let's discuss the best sod variety for your San Antonio property.
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
                  Get Free Estimate
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
                  href="/services/lawn-care-services"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Lawn Care Services</h3>
                  <p className="text-gray-600">Keep your new sod healthy with professional maintenance</p>
                </Link>
                <Link 
                  href="/services/landscape-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Installation</h3>
                  <p className="text-gray-600">Complete your outdoor transformation with professional landscaping</p>
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