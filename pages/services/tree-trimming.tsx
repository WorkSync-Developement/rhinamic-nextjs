import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Scissors, Shield, Eye, Calendar, Phone } from "lucide-react";

export default function TreeTrimming() {
  return (
    <>
      <Head>
        <title>Professional Tree Trimming Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Expert tree trimming and pruning services in San Antonio, TX. Professional arborists ensure healthy tree growth, safety, and beautiful landscape appearance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/tree-trimming" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Tree Trimming Services
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Expert tree trimming and pruning in San Antonio. Promote healthy growth, ensure safety, 
                  and enhance your property's beauty with professional arborist services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Tree Trimming Quote
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

          {/* Why Tree Trimming is Important */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Professional Tree Trimming Matters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tree Health & Longevity</h3>
                      <p className="text-gray-700">Proper pruning removes diseased, damaged, or dead branches, improving overall tree health and extending lifespan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Safety & Property Protection</h3>
                      <p className="text-gray-700">Remove hazardous branches that could fall and damage your home, vehicles, or injure people during storms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Improved Appearance</h3>
                      <p className="text-gray-700">Professional shaping enhances your landscape's aesthetic appeal and maintains your property's curb appeal.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Storm Damage Prevention</h3>
                      <p className="text-gray-700">Regular trimming reduces wind resistance and prevents branch breakage during San Antonio's severe weather events.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Clearance & Access</h3>
                      <p className="text-gray-700">Maintain proper clearance from buildings, power lines, and walkways for safety and functionality.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Light & Air Circulation</h3>
                      <p className="text-gray-700">Selective pruning allows more sunlight to reach your lawn and garden while improving air circulation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Disease Prevention</h3>
                      <p className="text-gray-700">Removing infected branches prevents disease spread and allows early detection of potential problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Property Value</h3>
                      <p className="text-gray-700">Well-maintained trees increase property value and appeal to potential buyers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Tree Trimming */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Professional Pruning Techniques</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Scissors className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Cleaning</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Removal of dead, diseased, damaged, or weakly attached branches to improve 
                    tree health and reduce safety hazards.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Dead branch removal</li>
                    <li>• Disease prevention</li>
                    <li>• Safety improvement</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Eye className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Thinning</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Selective removal of branches to increase light penetration and air movement 
                    while maintaining the tree's natural shape.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Improved light penetration</li>
                    <li>• Better air circulation</li>
                    <li>• Maintains natural form</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Shield className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Raising</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Removal of lower branches to provide clearance for buildings, vehicles, 
                    pedestrians, and lawn maintenance equipment.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Clearance improvement</li>
                    <li>• Access enhancement</li>
                    <li>• Safety compliance</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <Scissors className="text-orange-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Crown Reduction</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Careful reduction of tree height or spread while maintaining structural 
                    integrity and natural appearance.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Size management</li>
                    <li>• Storm resistance</li>
                    <li>• Structural preservation</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <Shield className="text-red-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Structural Pruning</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Young tree training to develop strong structure and prevent future problems 
                    through proper branch selection and spacing.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Young tree training</li>
                    <li>• Future problem prevention</li>
                    <li>• Strong framework development</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <Eye className="text-yellow-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Vista Pruning</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Selective removal or reduction of specific branches to enhance views 
                    while maintaining tree health and appearance.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• View enhancement</li>
                    <li>• Selective branch removal</li>
                    <li>• Aesthetic preservation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Best Timing for Tree Trimming */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-909 mb-8 text-center">Best Times for Tree Trimming in San Antonio</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-blue-600" size={32} />
                    <h3 className="text-xl font-semibold text-purple-900">Winter Trimming (Recommended)</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Best Time:</strong> December - February</p>
                    <p className="text-gray-700"><strong>Why It's Ideal:</strong></p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Trees are dormant, reducing stress</li>
                      <li>• Easy to see tree structure without leaves</li>
                      <li>• Faster healing when growth resumes</li>
                      <li>• Reduced disease transmission risk</li>
                      <li>• Minimal disruption to wildlife</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-orange-600" size={32} />
                    <h3 className="text-xl font-semibold text-purple-900">Species-Specific Timing</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Special Considerations:</strong></p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Oak Trees:</strong> ONLY trim October-February to prevent oak wilt disease</li>
                      <li><strong>Flowering Trees:</strong> Trim immediately after flowering</li>
                      <li><strong>Fruit Trees:</strong> Late winter before bud break</li>
                      <li><strong>Emergency Trimming:</strong> Any time for safety hazards</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">When NOT to Trim Trees</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li>• <strong>Oak Wilt Season:</strong> March-September for oak trees</li>
                    <li>• <strong>Active Growth:</strong> Spring flush period for most trees</li>
                    <li>• <strong>Extreme Weather:</strong> During drought, heat stress, or storms</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• <strong>Flowering Season:</strong> For spring-blooming ornamental trees</li>
                    <li>• <strong>Nesting Season:</strong> When birds are actively nesting</li>
                    <li>• <strong>Disease Outbreaks:</strong> When fungal diseases are spreading</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common San Antonio Tree Issues */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Common Tree Problems in San Antonio</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Oak Wilt Disease</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Fatal disease affecting oak trees. Proper timing of trimming (winter only) 
                    and wound treatment are crucial for prevention.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Prevention:</strong> Winter trimming, wound paint, avoid root damage</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Storm Damage</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    San Antonio's severe weather can cause broken branches and split trees. 
                    Regular pruning reduces wind resistance and storm vulnerability.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Prevention:</strong> Crown thinning, dead branch removal, structural pruning</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Drought Stress</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Extended dry periods weaken trees, making them susceptible to pests and diseases. 
                    Proper pruning helps trees cope with water stress.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Management:</strong> Reduce canopy size, remove dead branches, improve watering</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-909 mb-3">Overcrowding</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Trees planted too close together compete for resources and develop poor structure. 
                    Selective removal and pruning can help.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Solution:</strong> Crown thinning, selective tree removal, proper spacing</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Power Line Conflicts</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Trees growing into power lines create safety hazards and service interruptions. 
                    Professional trimming maintains safe clearances.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Solution:</strong> Directional pruning, crown reduction, species selection</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Poor Structure</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Trees with co-dominant stems, included bark, or poor branch angles 
                    are prone to failure and require corrective pruning.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Correction:</strong> Structural pruning, cable support, selective removal</p>
                </div>
              </div>
            </div>
          </section>

          {/* Safety & Professional Equipment */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Professional Tree Service</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Safety First</h3>
                  <p className="text-gray-700 mb-4">
                    Tree trimming involves significant safety risks from heights, power lines, and heavy equipment. 
                    Our certified arborists have the training and equipment to work safely.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Proper Techniques</h3>
                  <p className="text-gray-700 mb-4">
                    Incorrect pruning can permanently damage trees or make them more susceptible to disease. 
                    We follow ISA standards for proper cuts and tree health.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Professional Equipment</h3>
                  <p className="text-gray-700">
                    Specialized tools including bucket trucks, climbing gear, and professional-grade saws 
                    allow us to safely reach and properly trim any tree.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Our Qualifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Certified arborists with ongoing training</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Fully insured for property protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Professional safety equipment and protocols</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Knowledge of local tree species and diseases</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Proper disposal and cleanup services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Keep Your Trees Healthy and Safe</h2>
              <p className="text-xl text-purple-100 mb-8">
                Professional tree trimming protects your property, enhances your landscape's beauty, 
                and ensures your trees remain healthy for years to come. Schedule your consultation today.
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
                  Schedule Tree Assessment
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
                  href="/services/tree-removal"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Tree Removal</h3>
                  <p className="text-gray-600">Safe removal of hazardous or unwanted trees</p>
                </Link>
                <Link 
                  href="/services/tree-planting"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Tree Planting</h3>
                  <p className="text-gray-600">Professional tree selection and planting services</p>
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