import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Scissors, Droplets, Sun, Calendar, Phone } from "lucide-react";

export default function LawnCareServices() {
  return (
    <>
      <Head>
        <title>Professional Lawn Care Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert lawn care services in San Antonio, TX. Mowing, fertilization, weed control, and aeration for healthy, green grass. Professional lawn maintenance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/lawn-care-services" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Lawn Care Services
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Achieve the lush, green lawn you've always wanted in San Antonio's challenging climate. 
                  Our comprehensive lawn care services keep your grass healthy, thick, and beautiful year-round.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Lawn Care Quote
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

          {/* Our Lawn Care Services */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Complete Lawn Care Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Regular Mowing & Edging</h3>
                      <p className="text-gray-700">Professional mowing at the optimal height for your grass type, with clean edging for a polished look.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Fertilization Programs</h3>
                      <p className="text-gray-700">Seasonal fertilization tailored to San Antonio soil conditions and your specific grass type for optimal nutrition.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Weed Control</h3>
                      <p className="text-gray-700">Pre-emergent and post-emergent weed control to prevent and eliminate common Texas weeds without harming your lawn.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Lawn Aeration</h3>
                      <p className="text-gray-700">Core aeration to relieve soil compaction, improve water penetration, and enhance root development.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Overseeding & Repair</h3>
                      <p className="text-gray-700">Fill in thin or bare spots with quality grass seed varieties that thrive in San Antonio's climate.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Disease & Pest Management</h3>
                      <p className="text-gray-700">Early detection and treatment of lawn diseases and pest issues common to South Texas lawns.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Soil Testing & pH Adjustment</h3>
                      <p className="text-gray-700">Professional soil analysis and amendments to create optimal growing conditions for healthy grass.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Seasonal Treatments</h3>
                      <p className="text-gray-700">Spring green-up, summer stress protection, fall winterization, and dormant season care.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* San Antonio Grass Types */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">San Antonio Grass Types We Maintain</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">St. Augustine</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    The most popular choice in San Antonio. Heat and shade tolerant, requires regular watering and fertilization.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Excellent heat tolerance</li>
                    <li>• Moderate shade tolerance</li>
                    <li>• Dense, thick growth</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Bermuda Grass</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Extremely heat and drought tolerant. Perfect for high-traffic areas and full sun locations.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Outstanding heat/drought tolerance</li>
                    <li>• High traffic tolerance</li>
                    <li>• Full sun requirement</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Zoysia Grass</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Low-maintenance option with good heat tolerance and slower growth requiring less frequent mowing.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Low maintenance needs</li>
                    <li>• Good heat tolerance</li>
                    <li>• Slower growth rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Lawn Care Calendar */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Year-Round Lawn Care Program</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="text-yellow-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Spring</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pre-emergent weed control</li>
                    <li>• First fertilization</li>
                    <li>• Mowing height adjustment</li>
                    <li>• Irrigation system check</li>
                    <li>• Overseeding thin areas</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="text-orange-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Summer</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Higher mowing height</li>
                    <li>• Deep, less frequent watering</li>
                    <li>• Pest monitoring</li>
                    <li>• Heat stress management</li>
                    <li>• Post-emergent weed control</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-orange-600" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Fall</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Fall fertilization</li>
                    <li>• Aeration service</li>
                    <li>• Overseeding program</li>
                    <li>• Winterization prep</li>
                    <li>• Leaf removal</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets className="text-blue-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Winter</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Reduced watering schedule</li>
                    <li>• Dormant season care</li>
                    <li>• Equipment maintenance</li>
                    <li>• Planning next year's program</li>
                    <li>• Cold protection when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Lawn Problems */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Common San Antonio Lawn Problems We Solve</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Heat Stress & Brown Patches</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      San Antonio's intense summer heat can stress even heat-tolerant grasses. We adjust watering schedules, 
                      raise mowing heights, and apply protective treatments.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Clay Soil Compaction</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Heavy clay soils common in San Antonio can become compacted, preventing water and nutrients from 
                      reaching grass roots. Regular aeration and soil amendments solve this issue.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Chinch Bugs & Grub Damage</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      These common Texas pests can devastate lawns quickly. Our monitoring and treatment programs 
                      prevent infestations and protect your investment.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Weed Invasions</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Dandelions, crabgrass, and other weeds thrive in San Antonio. Our pre-emergent and targeted 
                      post-emergent treatments keep weeds from taking over your lawn.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Thin or Bare Spots</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      High traffic, pet damage, or disease can create unsightly bare areas. We repair these spots 
                      with proper soil preparation and appropriate grass varieties.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Fungal Disease</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      San Antonio's humidity can promote fungal diseases like brown patch and take-all root rot. 
                      Early detection and proper treatment prevent permanent damage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Rhinamic for Lawn Care */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Rhinamic for Lawn Care</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">41+ Years of Texas Lawn Experience</h3>
                  <p className="text-gray-700 mb-6">
                    We understand the unique challenges of maintaining beautiful lawns in San Antonio's climate. 
                    From clay soils to extreme heat, we've seen it all and know what works.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Science-Based Approach</h3>
                  <p className="text-gray-700 mb-6">
                    Our lawn care programs are based on soil science, plant physiology, and local environmental conditions. 
                    We don't just guess—we use proven methods that deliver results.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Customized Programs</h3>
                  <p className="text-gray-700">
                    Every lawn is different. We assess your specific grass type, soil conditions, and usage patterns 
                    to create a maintenance program that delivers the results you want.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Our Lawn Care Guarantee</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Consistent, Professional Service</h4>
                        <p className="text-gray-700 text-sm">Regular schedules you can count on, with advance notice of any changes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Responsive Communication</h4>
                        <p className="text-gray-700 text-sm">Questions or concerns? We're here to help and adjust our approach as needed.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Long-term Relationship Focus</h4>
                        <p className="text-gray-700 text-sm">We're invested in your lawn's long-term health, not just quick fixes.</p>
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
              <h2 className="text-3xl font-bold mb-6">Ready for a Healthier, Greener Lawn?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Let us create a custom lawn care program that keeps your grass healthy and beautiful through 
                San Antonio's challenging seasons. Your neighbors will notice the difference.
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
                  Get Free Lawn Analysis
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
                  href="/services/sod-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Sod Installation</h3>
                  <p className="text-gray-600">Quick transformation with professional sod installation</p>
                </Link>
                <Link 
                  href="/services/landscape-maintenance"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Full Landscape Maintenance</h3>
                  <p className="text-gray-600">Complete property care including lawn and landscape</p>
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