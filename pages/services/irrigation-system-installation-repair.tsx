import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Droplets, Settings, Shield, Clock, Phone } from "lucide-react";

export default function IrrigationSystemInstallationRepair() {
  return (
    <>
      <Head>
        <title>Irrigation System Installation & Repair | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert irrigation system installation and repair in San Antonio, TX. Efficient sprinkler systems, drip irrigation, and smart controllers for water conservation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/irrigation-system-installation-repair" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Irrigation System Installation & Repair
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Keep your San Antonio landscape healthy and water-efficient with professional irrigation systems. 
                  Smart controllers, zone optimization, and expert repairs that save water and money.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Irrigation Quote
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

          {/* Services Overview */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Irrigation Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">New System Installation</h3>
                      <p className="text-gray-700">Complete irrigation system design and installation with zone optimization for different plant types and sun exposure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">System Repairs & Troubleshooting</h3>
                      <p className="text-gray-700">Diagnose and repair broken heads, leaks, controller issues, and valve problems to restore efficient operation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Smart Controller Upgrades</h3>
                      <p className="text-gray-700">Weather-based controllers that adjust watering schedules automatically, reducing water waste and plant stress.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Drip Irrigation Systems</h3>
                      <p className="text-gray-700">Water-efficient drip systems for gardens, trees, and shrubs that deliver water directly to root zones.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Seasonal Maintenance</h3>
                      <p className="text-gray-700">Spring startup, summer adjustments, fall winterization, and ongoing system optimization for peak performance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Water Conservation Audits</h3>
                      <p className="text-gray-700">Evaluate existing systems for efficiency improvements and recommend upgrades to reduce water usage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Zone Expansion & Modification</h3>
                      <p className="text-gray-700">Add new zones, modify existing coverage, or update systems as your landscape evolves and grows.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Emergency Repairs</h3>
                      <p className="text-gray-700">Quick response for broken pipes, malfunctioning valves, and other urgent irrigation issues.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Types */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Irrigation System Types</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Droplets className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Spray Irrigation</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Perfect for lawns and groundcover areas. Quick, even coverage with adjustable spray patterns 
                    for different lawn shapes and sizes.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Ideal for turf areas</li>
                    <li>• Multiple spray patterns available</li>
                    <li>• Efficient for large coverage areas</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Droplets className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Drip Irrigation</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Water-efficient system for gardens, trees, and shrub beds. Delivers water slowly 
                    and directly to root zones with minimal evaporation.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 90%+ water efficiency</li>
                    <li>• Perfect for plant beds</li>
                    <li>• Reduces weed growth</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Settings className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Smart Controllers</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Weather-based controllers that automatically adjust watering schedules based on 
                    local weather conditions, soil moisture, and plant needs.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Weather-based adjustments</li>
                    <li>• Remote smartphone control</li>
                    <li>• 20-50% water savings</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* San Antonio Water Challenges */}
          <section className="py-16 bg-blue-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">San Antonio Water Conservation</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Local Water Restrictions</h3>
                  <p className="text-gray-700 mb-4">
                    San Antonio's water restrictions require efficient irrigation systems. Our installations 
                    comply with all SAWS requirements and maximize water efficiency.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Climate Considerations</h3>
                  <p className="text-gray-700 mb-4">
                    From scorching summers to occasional drought conditions, San Antonio's climate demands 
                    smart irrigation. We design systems that adapt to changing weather patterns.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Water Bill Savings</h3>
                  <p className="text-gray-700">
                    Properly designed irrigation systems can reduce your water usage by 20-50% while 
                    keeping your landscape healthier than manual watering.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Efficiency Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Droplets className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Rain Sensors</h4>
                        <p className="text-gray-700 text-sm">Automatically skip watering when natural rainfall is sufficient</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Pressure Regulation</h4>
                        <p className="text-gray-700 text-sm">Maintain optimal pressure for efficient water distribution</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Cycle & Soak Programming</h4>
                        <p className="text-gray-700 text-sm">Reduce runoff on clay soils with multiple short cycles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Problems We Fix */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Common Irrigation Problems We Fix</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Broken Sprinkler Heads</h3>
                  <p className="text-gray-700 text-sm">
                    Damaged heads cause uneven watering and water waste. We replace and adjust heads 
                    for optimal coverage patterns.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Controller Malfunctions</h3>
                  <p className="text-gray-700 text-sm">
                    Faulty timers and programming issues lead to over or under-watering. We repair 
                    or upgrade controllers for reliable operation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Valve Problems</h3>
                  <p className="text-gray-700 text-sm">
                    Stuck valves cause zones to not turn on or off properly. We diagnose and repair 
                    valve issues to restore proper zone control.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Pipe Leaks</h3>
                  <p className="text-gray-700 text-sm">
                    Underground leaks waste water and can damage foundations. We locate and repair 
                    leaks with minimal landscape disruption.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Poor Coverage</h3>
                  <p className="text-gray-700 text-sm">
                    Dead spots and overwatered areas indicate design problems. We redesign zones 
                    for uniform coverage and plant health.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">High Water Bills</h3>
                  <p className="text-gray-700 text-sm">
                    Inefficient systems waste money. We audit and upgrade systems to reduce water 
                    usage while maintaining landscape health.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for Smart, Efficient Irrigation?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Save water, save money, and keep your landscape healthy with professional irrigation systems. 
                Let's design the perfect watering solution for your San Antonio property.
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
                  Get Free System Evaluation
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