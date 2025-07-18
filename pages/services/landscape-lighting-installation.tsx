import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Lightbulb, Shield, Zap, Moon, Phone } from "lucide-react";

export default function LandscapeLightingInstallation() {
  return (
    <>
      <Head>
        <title>Landscape Lighting Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional landscape lighting installation in San Antonio, TX. LED outdoor lighting systems for security, beauty, and extended outdoor enjoyment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/landscape-lighting-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Landscape Lighting Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Transform your San Antonio property after dark with professional landscape lighting. 
                  Enhance security, showcase your landscape's beauty, and extend outdoor living into the evening hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Lighting Quote
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

          {/* Benefits of Landscape Lighting */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Add Landscape Lighting?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enhanced Security</h3>
                      <p className="text-gray-700">Well-lit properties deter intruders and provide safe navigation around your home after dark.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Curb Appeal at Night</h3>
                      <p className="text-gray-700">Highlight your landscape's best features and architectural elements for stunning nighttime beauty.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Extended Outdoor Living</h3>
                      <p className="text-gray-700">Enjoy patios, decks, and gardens longer with comfortable, functional outdoor lighting.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Increased Property Value</h3>
                      <p className="text-gray-700">Professional lighting systems add significant value and appeal to your property investment.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Safety & Navigation</h3>
                      <p className="text-gray-700">Illuminate walkways, steps, and potential hazards to prevent accidents and falls.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Energy Efficiency</h3>
                      <p className="text-gray-700">Modern LED systems use minimal electricity while providing years of reliable illumination.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Low Maintenance</h3>
                      <p className="text-gray-700">Quality LED fixtures last 15+ years with minimal maintenance requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Smart Controls</h3>
                      <p className="text-gray-700">Automated timers, motion sensors, and smartphone controls for convenient operation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lighting Types & Applications */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Types of Landscape Lighting</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Lightbulb className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Path & Walkway Lighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Guide visitors safely along driveways, sidewalks, and garden paths with low-level 
                    fixtures that provide gentle illumination without glare.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Bollard lights for driveways</li>
                    <li>• Step lights for stairs</li>
                    <li>• Path lights for walkways</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Zap className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Accent & Uplighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Highlight architectural features, specimen trees, and landscape focal points 
                    to create dramatic visual interest and depth.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Tree uplighting</li>
                    <li>• Wall washing</li>
                    <li>• Feature spotlights</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Shield className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Security & Area Lighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Provide safety and security with motion-activated floodlights, entry lighting, 
                    and area illumination for outdoor living spaces.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Motion sensor lights</li>
                    <li>• Entry door lighting</li>
                    <li>• Patio/deck lighting</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <Moon className="text-yellow-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Moonlighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Subtle downlighting from tree canopies creates soft, natural-looking illumination 
                    that mimics moonlight filtering through branches.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Tree-mounted fixtures</li>
                    <li>• Soft, diffused light</li>
                    <li>• Natural shadow patterns</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <Lightbulb className="text-orange-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Water Feature Lighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Illuminate fountains, ponds, and other water features to create stunning 
                    nighttime focal points with underwater and surrounding lighting.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Submersible LED lights</li>
                    <li>• Fountain illumination</li>
                    <li>• Pond accent lighting</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <Zap className="text-red-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Holiday & Color Lighting</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Seasonal and color-changing LED systems for holidays, special events, 
                    and year-round mood lighting with smartphone controls.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Color-changing LEDs</li>
                    <li>• Holiday lighting systems</li>
                    <li>• Smart controls</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* LED Technology Benefits */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">LED Technology Advantages</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Energy Efficiency</h3>
                  <p className="text-gray-700 mb-4">
                    LED landscape lighting uses 75% less energy than traditional halogen systems while 
                    providing superior light quality and reliability.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Long Lifespan</h3>
                  <p className="text-gray-700 mb-4">
                    Quality LED fixtures last 15-20 years with minimal maintenance, eliminating frequent 
                    bulb replacements and reducing long-term costs.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Superior Performance</h3>
                  <p className="text-gray-700">
                    LEDs provide instant-on operation, consistent light output, and excellent color 
                    rendering to showcase your landscape's true beauty.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Cost Comparison</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-700">System Type</span>
                      <span className="text-gray-700 font-semibold">Annual Energy Cost*</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Traditional Halogen</span>
                      <span className="text-red-600 font-semibold">$180-250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">LED System</span>
                      <span className="text-green-600 font-semibold">$45-65</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                      <span className="text-purple-800 font-semibold">Annual Savings</span>
                      <span className="text-purple-800 font-bold">$135-185</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">*Based on typical residential system, current electricity rates</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Professional Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Design Consultation</h3>
                  <p className="text-gray-700 text-sm">
                    Site evaluation and lighting design consultation to identify key features 
                    and create optimal lighting plan for your property.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">System Design</h3>
                  <p className="text-gray-700 text-sm">
                    Detailed plan showing fixture placement, wiring routes, and transformer 
                    locations for optimal performance and aesthetics.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Installation</h3>
                  <p className="text-gray-700 text-sm">
                    Professional installation with buried low-voltage wiring, fixture mounting, 
                    and transformer setup by certified technicians.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-700 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-909 mb-3">Fine-tuning</h3>
                  <p className="text-gray-700 text-sm">
                    Precise aiming and adjustment of fixtures, timer programming, 
                    and system testing to ensure perfect illumination.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance & Warranty */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Low Maintenance, High Reliability</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Minimal Maintenance Required</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">No bulb replacements for 15+ years</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Weather-resistant fixtures and wiring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Annual cleaning and adjustment service available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Professional timer and controller programming</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Quality Warranty Protection</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Shield className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">2-year installation warranty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Manufacturer warranty on LED fixtures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Transformer and control warranty coverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Service support for system adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Illuminate Your Landscape?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Transform your San Antonio property with professional landscape lighting that enhances beauty, 
                security, and outdoor enjoyment. Let's design the perfect lighting solution for your space.
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
                  Get Free Lighting Design
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
                  href="/services/landscape-design"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Design</h3>
                  <p className="text-gray-600">Create beautiful features worth illuminating with professional design</p>
                </Link>
                <Link 
                  href="/services/landscape-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Installation</h3>
                  <p className="text-gray-600">Complete outdoor transformations including lighting-ready infrastructure</p>
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