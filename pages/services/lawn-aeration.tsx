import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, CircleDot, Droplets, Leaf, Calendar, Phone } from "lucide-react";

export default function LawnAeration() {
  return (
    <>
      <Head>
        <title>Professional Lawn Aeration | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert lawn aeration services in San Antonio, TX. Core aeration to relieve soil compaction, improve water penetration, and promote healthy root growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/lawn-aeration" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Lawn Aeration
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Revitalize your San Antonio lawn with core aeration. Break through compacted clay soil 
                  to improve water penetration, nutrient absorption, and root development for a thicker, healthier lawn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Aeration Quote
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

          {/* Why Aeration is Essential */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Your San Antonio Lawn Needs Aeration</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Clay Soil Challenges</h3>
                  <p className="text-gray-700 mb-4">
                    San Antonio's heavy clay soil naturally compacts over time, especially with foot traffic, 
                    mowing, and weather. Compacted soil prevents water, nutrients, and oxygen from reaching grass roots.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Signs Your Lawn Needs Aeration</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Water runs off instead of soaking in</li>
                    <li>• Puddles form after rain or watering</li>
                    <li>• Grass feels spongy or bouncy when walked on</li>
                    <li>• Thin or bare spots in high-traffic areas</li>
                    <li>• Difficulty pushing a screwdriver into soil</li>
                    <li>• Poor response to fertilization</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Benefits of Core Aeration</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Droplets className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Improved Water Penetration</h4>
                        <p className="text-gray-700 text-sm">Water reaches root zone instead of running off compacted soil</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Leaf className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Enhanced Nutrient Uptake</h4>
                        <p className="text-gray-700 text-sm">Fertilizers and organic matter reach roots more effectively</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CircleDot className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Stronger Root Development</h4>
                        <p className="text-gray-700 text-sm">Roots can penetrate deeper and spread wider for better drought tolerance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Aeration Process */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Core Aeration Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Soil Assessment</h3>
                  <p className="text-gray-700 text-sm">
                    Evaluate soil compaction levels and identify areas that need the most attention 
                    for targeted aeration.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-700 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Core Extraction</h3>
                  <p className="text-gray-700 text-sm">
                    Professional aerator removes 2-3 inch soil cores every 4-6 inches 
                    across your entire lawn area.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-700 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Core Breakdown</h3>
                  <p className="text-gray-700 text-sm">
                    Soil cores are left on the surface to naturally break down and 
                    add organic matter back to your lawn.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-700 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Optional Overseeding</h3>
                  <p className="text-gray-700 text-sm">
                    Perfect time to overseed thin areas as seeds can fall into 
                    aeration holes for excellent soil contact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Timing for Aeration */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Best Times for Aeration in San Antonio</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-green-600" size={32} />
                    <h3 className="text-xl font-semibold text-purple-900">Fall Aeration (Recommended)</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Best Time:</strong> September - November</p>
                    <p className="text-gray-700"><strong>Why It's Ideal:</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Cooler temperatures reduce stress</li>
                      <li>• Grass actively growing and recovering</li>
                      <li>• Perfect for overseeding</li>
                      <li>• Prepares lawn for winter dormancy</li>
                      <li>• Spring growth benefits from improved soil</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-blue-600" size={32} />
                    <h3 className="text-xl font-semibold text-purple-900">Spring Aeration (Alternative)</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Best Time:</strong> March - April</p>
                    <p className="text-gray-700"><strong>Considerations:</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Good for severely compacted lawns</li>
                      <li>• Allows full growing season recovery</li>
                      <li>• Avoid pre-emergent herbicide conflict</li>
                      <li>• May stress lawn going into summer</li>
                      <li>• Less ideal than fall timing</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">When NOT to Aerate</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li>• During summer heat stress (June-August)</li>
                    <li>• When soil is too wet or muddy</li>
                    <li>• During drought conditions</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Recently after pre-emergent application</li>
                    <li>• When grass is dormant (winter)</li>
                    <li>• During periods of disease pressure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Aeration + Additional Services */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Maximize Results with Combined Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Aeration + Overseeding</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Perfect timing to fill in thin spots. Seeds fall into aeration holes for excellent 
                    soil contact and germination rates.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Improved seed-to-soil contact</li>
                    <li>• Higher germination rates</li>
                    <li>• Thicker, more drought-tolerant lawn</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Aeration + Fertilization</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Fertilizer reaches the root zone more effectively through aeration holes, 
                    maximizing nutrient uptake and lawn response.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Enhanced nutrient absorption</li>
                    <li>• Better fertilizer efficiency</li>
                    <li>• Faster green-up response</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Aeration + Topdressing</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Adding compost or quality topsoil after aeration improves soil structure 
                    and provides long-term organic matter benefits.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Improved soil structure</li>
                    <li>• Long-term organic matter</li>
                    <li>• Enhanced water retention</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Frequency Recommendations */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">How Often Should You Aerate?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Low Traffic Areas</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600">Every 2-3 Years</div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Front yards and areas with minimal foot traffic may only need aeration 
                    every few years to maintain soil health.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Decorative front lawn areas</li>
                    <li>• Limited foot traffic zones</li>
                    <li>• Well-established mature lawns</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Moderate Traffic Areas</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">Annually</div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Most San Antonio lawns benefit from annual fall aeration to combat 
                    natural clay soil compaction and maintain health.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Typical backyard usage</li>
                    <li>• Regular family activities</li>
                    <li>• Clay soil properties</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">High Traffic Areas</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-red-600">Twice Yearly</div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Areas with heavy use, pets, or equipment traffic may need spring 
                    and fall aeration to prevent severe compaction.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Play areas and pet runs</li>
                    <li>• Pathways and gathering spots</li>
                    <li>• Equipment storage areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Give Your Lawn Room to Breathe</h2>
              <p className="text-xl text-purple-100 mb-8">
                Break through San Antonio's compacted clay soil with professional core aeration. 
                Your lawn will reward you with thicker, healthier growth and better drought tolerance.
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
                  Schedule Aeration Service
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
                  href="/services/lawn-fertilization"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Lawn Fertilization</h3>
                  <p className="text-gray-600">Maximize aeration benefits with targeted fertilization programs</p>
                </Link>
                <Link 
                  href="/services/grass-seeding-overseeding"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Overseeding</h3>
                  <p className="text-gray-600">Perfect timing to thicken your lawn with new grass seed</p>
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