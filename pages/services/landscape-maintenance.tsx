import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Calendar, Scissors, Droplets, Shield, Phone } from "lucide-react";

export default function LandscapeMaintenance() {
  return (
    <>
      <Head>
        <title>Landscape Maintenance Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional landscape maintenance in San Antonio, TX. Keep your outdoor space healthy and beautiful year-round. Lawn care, pruning, and ongoing maintenance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/landscape-maintenance" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Landscape Maintenance
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Keep your San Antonio landscape healthy, beautiful, and thriving year-round. From regular maintenance 
                  to seasonal care, we protect your investment and enhance your property's curb appeal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Maintenance Quote
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

          {/* Our Maintenance Services */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Maintenance Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Lawn Care & Mowing</h3>
                      <p className="text-gray-700">Regular mowing, edging, and trimming to keep your lawn healthy and looking its best throughout the growing season.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tree & Shrub Pruning</h3>
                      <p className="text-gray-700">Expert pruning to maintain plant health, control growth, and enhance the natural shape and beauty of your landscape.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Fertilization & Soil Care</h3>
                      <p className="text-gray-700">Seasonal fertilization programs and soil amendments to ensure your plants have the nutrients they need to thrive.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Weed & Pest Control</h3>
                      <p className="text-gray-700">Integrated approach to weed prevention and pest management that protects your landscape without harming beneficial insects.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Irrigation Maintenance</h3>
                      <p className="text-gray-700">Regular inspection, adjustment, and repair of irrigation systems to ensure efficient water use and healthy plant growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Mulching & Bed Care</h3>
                      <p className="text-gray-700">Fresh mulch application, bed weeding, and plant bed maintenance to conserve moisture and suppress weeds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Seasonal Cleanup</h3>
                      <p className="text-gray-700">Spring and fall cleanup services, including leaf removal, debris clearing, and preparation for seasonal transitions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Plant Health Monitoring</h3>
                      <p className="text-gray-700">Regular assessment of plant health, early problem detection, and proactive treatment recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance Plans */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Flexible Maintenance Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <div className="text-center mb-4">
                    <Calendar className="text-green-600 mx-auto mb-2" size={48} />
                    <h3 className="text-xl font-semibold text-purple-900">Basic Care</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Monthly lawn mowing & edging</li>
                    <li>• Seasonal pruning</li>
                    <li>• Basic weed control</li>
                    <li>• Spring & fall cleanup</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Perfect for low-maintenance landscapes and budget-conscious homeowners who want their property to look neat and cared for.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
                  <div className="text-center mb-4">
                    <Scissors className="text-purple-600 mx-auto mb-2" size={48} />
                    <h3 className="text-xl font-semibold text-purple-900">Complete Care</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Bi-weekly lawn care</li>
                    <li>• Regular pruning & shaping</li>
                    <li>• Fertilization program</li>
                    <li>• Mulch refresh</li>
                    <li>• Irrigation adjustments</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Comprehensive care for homeowners who want their landscape to look its best year-round with professional attention to detail.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="text-center mb-4">
                    <Shield className="text-blue-600 mx-auto mb-2" size={48} />
                    <h3 className="text-xl font-semibold text-purple-900">Premium Care</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Weekly lawn maintenance</li>
                    <li>• Expert plant health care</li>
                    <li>• Integrated pest management</li>
                    <li>• Soil testing & amendments</li>
                    <li>• Priority service response</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    For discerning homeowners who demand exceptional landscape care and want their property to be the envy of the neighborhood.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Maintenance Calendar */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">San Antonio Seasonal Care</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Spring (Mar-May)</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pre-emergent weed control</li>
                    <li>• Spring pruning after freeze danger</li>
                    <li>• Irrigation system startup</li>
                    <li>• Fresh mulch application</li>
                    <li>• Lawn fertilization</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Summer (Jun-Aug)</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Increased watering schedules</li>
                    <li>• Heat stress monitoring</li>
                    <li>• Regular mowing (higher blade)</li>
                    <li>• Shade area plant care</li>
                    <li>• Drought management</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Fall (Sep-Nov)</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Fall fertilization</li>
                    <li>• Leaf removal</li>
                    <li>• Tree & shrub pruning</li>
                    <li>• Irrigation winterization prep</li>
                    <li>• Winter plant protection</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Winter (Dec-Feb)</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Freeze protection measures</li>
                    <li>• Dormant season pruning</li>
                    <li>• Planning for spring projects</li>
                    <li>• Equipment maintenance</li>
                    <li>• Soil preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Maintenance */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Rhinamic for Maintenance</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Local Climate Expertise</h3>
                  <p className="text-gray-700 mb-6">
                    41+ years in San Antonio means we understand the unique challenges of Texas climate—from scorching 
                    summers to unexpected freezes. Our maintenance programs are specifically designed for South Texas conditions.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Relationship-Based Service</h3>
                  <p className="text-gray-700 mb-6">
                    We're not just maintaining your landscape—we're protecting your investment. Most of our maintenance 
                    clients have been with us for years because we treat their property like our own.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Proactive Approach</h3>
                  <p className="text-gray-700">
                    Instead of just reacting to problems, we prevent them. Our experienced team spots potential issues 
                    early and addresses them before they become expensive problems.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">What Sets Us Apart</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Droplets className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Water Conservation Focus</h4>
                        <p className="text-gray-700 text-sm">Smart irrigation management and drought-resistant plant care that saves water and money.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Environmentally Responsible</h4>
                        <p className="text-gray-700 text-sm">Integrated pest management and organic practices that protect beneficial insects and soil health.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Consistent, Reliable Service</h4>
                        <p className="text-gray-700 text-sm">Regular schedules you can count on, with advance notice of any changes or weather delays.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Protect Your Landscape Investment</h2>
              <p className="text-xl text-purple-100 mb-8">
                Regular maintenance keeps your landscape healthy, beautiful, and valuable. Let us create a custom 
                maintenance plan that fits your property's needs and your budget.
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
                  Get Maintenance Quote
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
                  <p className="text-gray-600">Specialized lawn care for healthy, green grass year-round</p>
                </Link>
                <Link 
                  href="/services/landscape-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Installation</h3>
                  <p className="text-gray-600">Professional installation that sets up your landscape for success</p>
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