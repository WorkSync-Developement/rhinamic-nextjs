import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Flame, Users, Shield, Wrench, Phone } from "lucide-react";

export default function FirePitInstallation() {
  return (
    <>
      <Head>
        <title>Fire Pit Installation | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Custom fire pit installation in San Antonio, TX. Professional design and construction of gas and wood-burning fire pits for outdoor entertaining and ambiance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/fire-pit-installation" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Custom Fire Pit Installation
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Create a stunning focal point for your San Antonio backyard with a custom fire pit. 
                  Extend your outdoor entertaining season and add warmth, ambiance, and gathering space for family and friends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Fire Pit Quote
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

          {/* Benefits of Fire Pits */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Add a Fire Pit to Your Outdoor Space?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Year-Round Outdoor Use</h3>
                      <p className="text-gray-700">Extend your outdoor season into San Antonio's mild winter months with cozy warmth and ambiance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Natural Gathering Point</h3>
                      <p className="text-gray-700">Create a magnetic focal point where family and friends naturally congregate for conversation and relaxation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Entertainment Value</h3>
                      <p className="text-gray-700">Perfect for roasting marshmallows, hosting parties, or enjoying quiet evenings under the Texas stars.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Property Value Increase</h3>
                      <p className="text-gray-700">Fire pits are highly desirable features that enhance property appeal and market value.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Stress Relief & Relaxation</h3>
                      <p className="text-gray-700">The primal appeal of fire creates a calming, meditative atmosphere that promotes relaxation and well-being.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Cooking Opportunities</h3>
                      <p className="text-gray-700">Wood-burning fire pits offer opportunities for outdoor cooking, grilling, and traditional campfire meals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Customizable Design</h3>
                      <p className="text-gray-700">Endless design possibilities to match your landscape style, from rustic stone to modern concrete and steel.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Low Maintenance</h3>
                      <p className="text-gray-700">Properly installed fire pits require minimal maintenance while providing years of enjoyment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fire Pit Types */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Fire Pit Options & Styles</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
                  <Flame className="text-orange-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Wood-Burning Fire Pits</h3>
                  <p className="text-gray-700 mb-4">
                    Traditional wood-burning fire pits offer the authentic crackling sounds, aromatic smoke, 
                    and primal experience that people love about fires.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Authentic fire experience</li>
                        <li>• Lower installation cost</li>
                        <li>• Cooking capabilities</li>
                        <li>• No utility connections needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Considerations:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Requires wood supply</li>
                        <li>• More cleanup needed</li>
                        <li>• Smoke production</li>
                        <li>• Fire restrictions may apply</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
                  <Flame className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Gas Fire Pits</h3>
                  <p className="text-gray-700 mb-4">
                    Clean-burning gas fire pits provide instant ignition, adjustable flames, 
                    and convenient operation with minimal maintenance requirements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Instant on/off control</li>
                        <li>• No smoke or ash</li>
                        <li>• Adjustable flame height</li>
                        <li>• Clean burning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Considerations:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Requires gas line installation</li>
                        <li>• Higher upfront cost</li>
                        <li>• Less authentic fire experience</li>
                        <li>• Professional installation required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Styles */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Popular Fire Pit Designs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Rustic Stone Circle</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Natural stone fire pits with irregular shapes and earthy materials 
                    that blend seamlessly with landscape and provide timeless appeal.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Flagstone or limestone construction</li>
                    <li>• Irregular, organic shapes</li>
                    <li>• Natural, weathered appearance</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Modern Geometric</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Clean-lined, contemporary designs featuring geometric shapes, 
                    concrete elements, and integrated seating for modern landscapes.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Square, rectangular, or circular forms</li>
                    <li>• Concrete, steel, or modern stone</li>
                    <li>• Integrated bench seating</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Elevated Bowl Style</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Raised fire bowls and pedestals that create dramatic focal points 
                    while allowing 360-degree viewing and easier maintenance.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Elevated fire bowl design</li>
                    <li>• 360-degree viewing</li>
                    <li>• Easier cleaning and maintenance</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Sunken Fire Pit</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    In-ground fire pits with surrounding seating walls that create 
                    intimate conversation areas and wind protection.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Below-grade fire area</li>
                    <li>• Integrated seating walls</li>
                    <li>• Intimate gathering space</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Table Fire Feature</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Fire pits integrated into outdoor dining tables, combining 
                    warmth and ambiance with functional surface space.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Dining table integration</li>
                    <li>• Functional surface space</li>
                    <li>• Compact design option</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Custom Artistic</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Unique, artistic designs incorporating decorative elements, 
                    sculptures, or themed features that reflect personal style.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Custom artistic elements</li>
                    <li>• Unique design features</li>
                    <li>• Personal style expression</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Professional Installation Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-purple-800 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Site Assessment</h3>
                  <p className="text-gray-700 text-xs">
                    Evaluate location for safety clearances, utility lines, drainage, and optimal positioning.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-green-700 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Permits & Planning</h3>
                  <p className="text-gray-700 text-xs">
                    Obtain necessary permits and coordinate utility marking for safe excavation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-blue-700 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Foundation</h3>
                  <p className="text-gray-700 text-xs">
                    Excavation, base preparation, and proper drainage installation for stable foundation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-orange-700 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Construction</h3>
                  <p className="text-gray-700 text-xs">
                    Fire pit construction using quality materials and proper masonry techniques.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-red-700 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Finishing</h3>
                  <p className="text-gray-700 text-xs">
                    Final details, safety features, and thorough testing of all components.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Considerations */}
          <section className="py-16 bg-red-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Safety & Code Compliance</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Professional Installation Ensures Safety</h3>
                  <p className="text-gray-700 mb-4">
                    Fire pit installation involves important safety considerations including proper clearances, 
                    drainage, ventilation, and compliance with local fire codes and HOA requirements.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-red-800 mb-4">San Antonio Regulations</h3>
                  <p className="text-gray-700 mb-4">
                    We ensure compliance with San Antonio fire department requirements, including 
                    burn restrictions, permit requirements, and safety clearances from structures.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Insurance Protection</h3>
                  <p className="text-gray-700">
                    Professional installation with proper permits helps ensure your homeowner's 
                    insurance coverage remains valid and provides liability protection.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Safety Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Minimum 10-foot clearance from structures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Proper drainage to prevent water accumulation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Non-combustible material construction</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Adequate ventilation and air flow</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Fire extinguisher and water source nearby</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Spark arrestor for wood-burning units</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seating & Accessories */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Complete Fire Pit Areas</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Built-in Seating</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Integrated stone or concrete seating walls provide permanent, weather-resistant 
                    seating that doesn't require storage or maintenance.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Stone or concrete construction</li>
                    <li>• Cushion-ready design</li>
                    <li>• Permanent installation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Wrench className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Accessories</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Enhance your fire pit experience with cooking grates, spark screens, 
                    tool sets, and storage solutions for wood or propane.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Cooking grates and rotisseries</li>
                    <li>• Spark screens and safety tools</li>
                    <li>• Wood storage and covers</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Flame className="text-orange-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Lighting Integration</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Coordinate fire pit installation with landscape lighting to create 
                    a complete evening entertainment environment.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Path lighting to fire pit</li>
                    <li>• Accent lighting around seating</li>
                    <li>• Safety and ambiance lighting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance & Care */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Easy Maintenance & Long-Term Care</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Wood-Burning Maintenance</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Remove ash after each use when cool</li>
                    <li>• Clean fire pit bowl and surrounding area</li>
                    <li>• Check and replace spark screen as needed</li>
                    <li>• Inspect stone/brick for damage annually</li>
                    <li>• Store firewood properly to prevent pests</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Gas Fire Pit Maintenance</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Annual gas line inspection by professional</li>
                    <li>• Clean burner and control components</li>
                    <li>• Check and clean decorative media (glass/stones)</li>
                    <li>• Test ignition and safety systems</li>
                    <li>• Cover when not in use to protect components</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Add Warmth to Your Backyard?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Create a stunning gathering place with a custom fire pit that brings family and friends together. 
                Professional design and installation ensure safety, beauty, and years of enjoyment.
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
                  Schedule Fire Pit Consultation
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
                  href="/services/outdoor-kitchens"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Outdoor Kitchens</h3>
                  <p className="text-gray-600">Complete your outdoor entertaining space with a custom kitchen</p>
                </Link>
                <Link 
                  href="/services/paver-patio-installation"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Paver Patio Installation</h3>
                  <p className="text-gray-600">Create the perfect foundation for your fire pit area</p>
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