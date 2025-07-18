import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Wrench, Shield, Truck, Clock, Phone } from "lucide-react";

export default function LandscapeInstallation() {
  return (
    <>
      <Head>
        <title>Expert Landscape Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional landscape installation services in San Antonio, TX. Expert plant installation, hardscaping, and irrigation for lasting beauty. 41+ years experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/landscape-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Landscape Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Expert installation of landscapes, plants, and outdoor features built to last in San Antonio's climate. 
                  From plants and irrigation to hardscapes and lighting—we bring your vision to life with lasting quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Installation Quote
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

          {/* What We Install Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">What We Install</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Trees & Plants</h3>
                      <p className="text-gray-700">Native and adapted species, properly planted with the right soil amendments and spacing for long-term success in San Antonio.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Sod & Lawn Installation</h3>
                      <p className="text-gray-700">Quality sod installation with proper soil preparation, grading, and establishment care for instant curb appeal.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Irrigation Systems</h3>
                      <p className="text-gray-700">Efficient sprinkler and drip irrigation systems designed for water conservation and optimal plant health.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Mulching & Edging</h3>
                      <p className="text-gray-700">Professional mulch installation and clean edging that enhances plant health and creates polished, finished look.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hardscape Features</h3>
                      <p className="text-gray-700">Patios, walkways, retaining walls, and outdoor kitchens built with quality materials and expert craftsmanship.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Landscape Lighting</h3>
                      <p className="text-gray-700">Low-voltage lighting systems that highlight your landscape's best features and extend outdoor enjoyment into the evening.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Drainage Solutions</h3>
                      <p className="text-gray-700">French drains, grading, and other drainage improvements to protect your landscape and foundation from water issues.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Xeriscaping</h3>
                      <p className="text-gray-700">Water-wise landscapes featuring drought-tolerant plants, efficient irrigation, and beautiful rock features.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Installation Process */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Installation Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Site Preparation</h3>
                  <p className="text-gray-700">
                    Proper soil testing, grading, and amendments. We prepare the foundation for success before any planting begins.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Infrastructure First</h3>
                  <p className="text-gray-700">
                    Irrigation, lighting, and hardscape elements go in first, so we're not disturbing plants later.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Expert Planting</h3>
                  <p className="text-gray-700">
                    Strategic placement, proper depth, and soil amendments for each plant's specific needs and growth pattern.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-700 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Finishing & Care</h3>
                  <p className="text-gray-700">
                    Mulching, initial watering schedule, and establishment care instructions to ensure healthy growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Our Installation Lasts */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Our Installations Last</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <Wrench className="text-purple-700 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Quality Materials</h3>
                    <p className="text-gray-700">
                      We source healthy plants from reputable nurseries and use professional-grade irrigation components, 
                      soil amendments, and hardscape materials built to last in Texas weather.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <Shield className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Expert Technique</h3>
                    <p className="text-gray-700">
                      Four generations of building experience means we know how to do things right the first time. 
                      Proper installation techniques prevent future problems and ensure long-term success.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <Truck className="text-blue-600 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">Local Knowledge</h3>
                    <p className="text-gray-700">
                      41+ years in San Antonio means we understand local soil conditions, drainage challenges, 
                      and what plants thrive in our specific climate and growing zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline & What to Expect */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Installation Timeline & What to Expect</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                        <Clock className="text-purple-700" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Project Size Matters</h3>
                        <p className="text-gray-700">
                          Small installations (plants, sod): 1-2 days<br/>
                          Medium projects (with irrigation): 3-5 days<br/>
                          Large installations (full landscape): 1-2 weeks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Weather Considerations</h3>
                        <p className="text-gray-700">
                          We time installations for optimal plant establishment, avoiding extreme heat or freeze periods 
                          when possible. Your landscape's long-term success is our priority.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <Shield className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Clean, Professional Work</h3>
                        <p className="text-gray-700">
                          We protect existing features, clean up daily, and leave your property better than we found it. 
                          Professional work means professional cleanup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Establishment Period</h3>
                  <p className="text-gray-700 mb-4">
                    Your new landscape needs time to establish. We provide detailed care instructions and are available 
                    for questions during the critical first few months.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>First 2 weeks:</strong> Daily watering and monitoring</li>
                    <li>• <strong>Months 1-3:</strong> Regular watering, mulch check, minor adjustments</li>
                    <li>• <strong>Months 3-12:</strong> Gradual reduction in watering as roots establish</li>
                    <li>• <strong>Year 2+:</strong> Mature landscape requiring minimal intervention</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Professional Installation?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Whether you have design plans ready or need help with the design process, we'll handle every detail 
                of your landscape installation with the care and expertise your property deserves.
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
                  href="/services/landscape-design"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Design</h3>
                  <p className="text-gray-600">Custom design plans that guide successful installation</p>
                </Link>
                <Link 
                  href="/services/sod-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Sod Installation</h3>
                  <p className="text-gray-600">Quick, professional sod installation for instant lawn</p>
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