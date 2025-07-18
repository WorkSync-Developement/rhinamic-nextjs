import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Scissors, Clock, Leaf, Calendar, Phone } from "lucide-react";

export default function LawnMowing() {
  return (
    <>
      <Head>
        <title>Professional Lawn Mowing Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional lawn mowing services in San Antonio, TX. Regular mowing, edging, and trimming for healthy, beautiful grass. Reliable weekly and bi-weekly service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/lawn-mowing" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Lawn Mowing Services
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Keep your San Antonio lawn looking pristine with professional mowing services. 
                  Regular, reliable care that promotes healthy grass growth and maintains perfect curb appeal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Mowing Quote
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

          {/* Our Mowing Services */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Complete Lawn Mowing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Mowing</h3>
                      <p className="text-gray-700">Sharp blades and proper mowing height for your specific grass type to promote healthy growth and thick coverage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Precision Edging</h3>
                      <p className="text-gray-700">Clean, crisp edges along driveways, sidewalks, and flower beds for a polished, professional appearance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">String Trimming</h3>
                      <p className="text-gray-700">Detailed trimming around trees, fences, and obstacles where mowers can't reach for complete coverage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Clipping Management</h3>
                      <p className="text-gray-700">Proper handling of grass clippings—mulching when beneficial or removal when necessary for lawn health.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Reliable Scheduling</h3>
                      <p className="text-gray-700">Consistent weekly or bi-weekly service that adapts to seasonal growth patterns and weather conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Equipment Maintenance</h3>
                      <p className="text-gray-700">Well-maintained, professional-grade equipment that ensures clean cuts and prevents damage to your lawn.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Pattern Variation</h3>
                      <p className="text-gray-700">Alternating mowing patterns to prevent soil compaction and promote upright grass growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Weather Flexibility</h3>
                      <p className="text-gray-700">Adjustments for weather conditions and grass growth rates to maintain optimal lawn health year-round.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mowing Best Practices */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Proper Mowing Techniques for San Antonio Grass</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Scissors className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Correct Height</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>St. Augustine:</strong> 2.5-3.5 inches</p>
                    <p><strong>Bermuda:</strong> 1.5-2.5 inches</p>
                    <p><strong>Zoysia:</strong> 2-3 inches</p>
                    <p className="text-xs text-gray-600 mt-2">Higher heights during summer stress periods</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Clock className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Timing</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Morning hours when possible</li>
                    <li>• Avoid wet grass conditions</li>
                    <li>• Never during extreme heat</li>
                    <li>• Adjust frequency seasonally</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Leaf className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Sharp Blades</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Clean cuts prevent disease</li>
                    <li>• Reduce stress on grass</li>
                    <li>• Promote faster healing</li>
                    <li>• Better overall appearance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Mowing Schedule */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">San Antonio Seasonal Mowing Schedule</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-green-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Spring</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Frequency:</strong> Weekly</p>
                    <p><strong>Height:</strong> Gradual reduction</p>
                    <p><strong>Focus:</strong> Growth resumption</p>
                    <p className="text-xs text-gray-600">March-May: Grass awakens and grows rapidly</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-orange-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Summer</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Frequency:</strong> Weekly</p>
                    <p><strong>Height:</strong> Maximum recommended</p>
                    <p><strong>Focus:</strong> Heat protection</p>
                    <p className="text-xs text-gray-600">June-August: Maintain height for stress tolerance</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-red-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-909">Fall</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Frequency:</strong> Weekly to bi-weekly</p>
                    <p><strong>Height:</strong> Maintain current</p>
                    <p><strong>Focus:</strong> Leaf management</p>
                    <p className="text-xs text-gray-600">September-November: Slower growth, leaf removal</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-blue-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Winter</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Frequency:</strong> Monthly or as needed</p>
                    <p><strong>Height:</strong> Slightly lower</p>
                    <p><strong>Focus:</strong> Dormancy prep</p>
                    <p className="text-xs text-gray-600">December-February: Minimal growth period</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Plans */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Flexible Mowing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4 text-center">Basic Mowing</h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-600">Bi-Weekly</div>
                    <div className="text-sm text-gray-600">Every 2 weeks</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>• Professional mowing</li>
                    <li>• Basic edging</li>
                    <li>• Clipping management</li>
                    <li>• Weather adjustments</li>
                  </ul>
                  <p className="text-xs text-gray-600">Perfect for low-maintenance homeowners who want a neat, well-kept lawn.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4 text-center">Premium Mowing</h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-600">Weekly</div>
                    <div className="text-sm text-gray-600">Every week</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>• Weekly professional mowing</li>
                    <li>• Precision edging</li>
                    <li>• Detailed trimming</li>
                    <li>• Pattern variation</li>
                    <li>• Seasonal adjustments</li>
                  </ul>
                  <p className="text-xs text-gray-600">Ideal for homeowners who want their lawn to look its absolute best year-round.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4 text-center">Full Service</h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-purple-600">Weekly +</div>
                    <div className="text-sm text-gray-600">Complete care</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>• All premium mowing services</li>
                    <li>• Fertilization program</li>
                    <li>• Weed control</li>
                    <li>• Seasonal cleanup</li>
                    <li>• Priority scheduling</li>
                  </ul>
                  <p className="text-xs text-gray-600">Complete lawn care solution for discerning homeowners who want perfection.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional Mowing */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Professional Mowing?</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Healthier Lawn</h3>
                  <p className="text-gray-700 mb-4">
                    Professional mowing with sharp blades at the correct height promotes thick, healthy grass 
                    that resists weeds, disease, and drought stress better than improperly maintained lawns.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Time & Convenience</h3>
                  <p className="text-gray-700 mb-4">
                    Reliable weekly service means you never have to worry about finding time to mow or 
                    dealing with equipment maintenance, repairs, and storage.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Consistent Results</h3>
                  <p className="text-gray-700">
                    Professional crews deliver consistent, quality results every visit, maintaining your 
                    property's curb appeal and value regardless of weather or your schedule.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Cost Comparison</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">DIY Costs (Annual)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Mower purchase/maintenance: $400-800</li>
                        <li>• Gas and oil: $150-250</li>
                        <li>• Time investment: 52+ hours</li>
                        <li>• Equipment storage space</li>
                      </ul>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Professional Service</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Predictable monthly cost</li>
                        <li>• No equipment investment</li>
                        <li>• 52+ hours of free time</li>
                        <li>• Guaranteed results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Professional Lawn Care?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Stop spending your weekends behind a mower. Let our professional team keep your San Antonio 
                lawn looking pristine while you enjoy your free time.
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
                  Get Free Mowing Estimate
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
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Complete Lawn Care</h3>
                  <p className="text-gray-600">Full lawn maintenance including fertilization and weed control</p>
                </Link>
                <Link 
                  href="/services/landscape-maintenance"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Maintenance</h3>
                  <p className="text-gray-600">Complete property maintenance beyond just the lawn</p>
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