import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, AlertTriangle, Shield, Truck, Recycle, Phone } from "lucide-react";

export default function TreeRemoval() {
  return (
    <>
      <Head>
        <title>Professional Tree Removal Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Safe, professional tree removal in San Antonio, TX. Licensed arborists handle hazardous, diseased, or unwanted trees with full cleanup and stump grinding." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/tree-removal" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Tree Removal Services
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Safe, efficient tree removal in San Antonio by certified arborists. From hazardous trees 
                  threatening your property to diseased trees compromising your landscape—we handle it all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Tree Removal Quote
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

          {/* When Tree Removal is Necessary */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">When Tree Removal is Necessary</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Safety Hazards</h3>
                      <p className="text-gray-700">Trees with structural damage, decay, or leaning toward buildings, power lines, or high-traffic areas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Disease & Pest Infestation</h3>
                      <p className="text-gray-700">Trees affected by oak wilt, fire blight, or severe pest damage that cannot be successfully treated.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Storm Damage</h3>
                      <p className="text-gray-700">Trees severely damaged by San Antonio storms with broken trunks, extensive branch loss, or root damage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Construction Interference</h3>
                      <p className="text-gray-700">Trees that interfere with new construction, additions, or utility installations.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Poor Location</h3>
                      <p className="text-gray-700">Wrong tree in the wrong place—too large for the space, blocking views, or damaging foundations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Overcrowding</h3>
                      <p className="text-gray-700">Multiple trees competing for space, light, and nutrients, requiring selective removal for overall forest health.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Landscape Renovation</h3>
                      <p className="text-gray-700">Outdated or inappropriate species that no longer fit your landscape design or maintenance goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Dead or Dying Trees</h3>
                      <p className="text-gray-700">Trees that have died or are in irreversible decline, posing safety risks and attracting pests.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Tree Removal Process */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Safe, Professional Removal Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-purple-800 font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Assessment</h3>
                  <p className="text-gray-700 text-xs">
                    Certified arborist evaluates tree condition, hazards, and best removal approach for safety.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-green-700 font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Planning</h3>
                  <p className="text-gray-700 text-xs">
                    Site preparation, equipment staging, and protection of surrounding property and plants.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-blue-700 font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Safe Removal</h3>
                  <p className="text-gray-700 text-xs">
                    Systematic removal using proper techniques, rigging, and equipment to prevent damage.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-orange-700 font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Cleanup</h3>
                  <p className="text-gray-700 text-xs">
                    Complete debris removal, stump grinding, and site restoration to original condition.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-red-700 font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-sm font-semibold text-purple-900 mb-2">Restoration</h3>
                  <p className="text-gray-700 text-xs">
                    Soil amendment, grass repair, and replanting recommendations to restore your landscape.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Removal Techniques */}
          <section className="py-16 bg-blue-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Professional Removal Techniques</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Sectional Removal</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Piece-by-piece removal for trees near buildings, power lines, or other valuable property. 
                    Each section is carefully lowered using ropes and rigging.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Best for:</strong> Urban settings, tight spaces, valuable property protection</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Directional Felling</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Strategic cutting to control the direction of tree fall in open areas. 
                    Requires careful planning and precise cuts for safe, controlled falling.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Best for:</strong> Open areas, minimal obstacles, straight healthy trees</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Crane-Assisted Removal</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Heavy equipment for large trees or difficult access situations. 
                    Allows precise control and removal of very large sections safely.
                  </p>
                  <p className="text-xs text-gray-600"><strong>Best for:</strong> Large trees, complex situations, maximum precision</p>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Tree Removal */}
          <section className="py-16 bg-red-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Emergency Tree Removal</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Storm Damage Response</h3>
                  <p className="text-gray-700 mb-4">
                    San Antonio's severe weather can cause immediate tree hazards. Our emergency response team 
                    provides rapid assessment and removal of dangerous trees threatening life and property.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-red-800 mb-4">24/7 Emergency Service</h3>
                  <p className="text-gray-700 mb-4">
                    When trees fall on homes, block roads, or create immediate safety hazards, 
                    we respond quickly to minimize damage and restore safety.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Insurance Documentation</h3>
                  <p className="text-gray-700">
                    We provide detailed documentation and photos for insurance claims, working with 
                    adjusters to ensure proper coverage for storm damage.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Emergency Situations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Trees fallen on structures or vehicles</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Hanging branches over walkways or roads</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Trees leaning against power lines</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Blocked driveways or access routes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Structurally compromised trees</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-red-100 rounded-lg">
                    <p className="text-red-800 font-semibold text-center">Call immediately for emergency situations</p>
                    <p className="text-red-700 text-center text-sm">Available 24/7 for urgent tree hazards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stump Grinding & Complete Cleanup */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Complete Removal & Cleanup</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Truck className="text-green-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Stump Grinding</h3>
                  <p className="text-gray-700 mb-4">
                    Professional stump grinding removes the entire stump below ground level, 
                    eliminating tripping hazards and allowing for immediate replanting or lawn restoration.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Complete root system removal</li>
                    <li>• Below-grade grinding</li>
                    <li>• Wood chip mulch production</li>
                    <li>• Immediate area restoration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Recycle className="text-blue-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Debris Management</h3>
                  <p className="text-gray-700 mb-4">
                    Responsible disposal and recycling of all tree debris. Large logs can be processed 
                    into lumber or firewood, while branches are chipped for mulch.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Complete site cleanup</li>
                    <li>• Eco-friendly recycling</li>
                    <li>• Firewood processing available</li>
                    <li>• Mulch for your landscape</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Safety & Insurance */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Safety & Protection You Can Trust</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Certified Professionals</h3>
                  <p className="text-gray-700 mb-4">
                    Our certified arborists have extensive training in safe tree removal techniques, 
                    hazard assessment, and proper equipment use for every situation.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Fully Insured Service</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive liability and worker's compensation insurance protects your property 
                    and gives you peace of mind during the removal process.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Property Protection</h3>
                  <p className="text-gray-700">
                    We use protective materials, careful planning, and precision techniques to ensure 
                    your home, landscaping, and other structures remain undamaged.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Safety Protocols</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">OSHA-compliant safety procedures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Professional climbing and rigging equipment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Utility line awareness and coordination</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Property protection systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">Emergency response protocols</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Alternatives to Removal */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Alternatives to Consider</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 text-center">
                  Our certified arborists always explore alternatives to removal when possible. 
                  Sometimes a tree can be saved with proper treatment or management.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Corrective Pruning</h3>
                    <p className="text-gray-700 text-sm">
                      Structural pruning can address many safety concerns while preserving the tree's health and value.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Disease Treatment</h3>
                    <p className="text-gray-700 text-sm">
                      Some diseases and pest infestations can be successfully treated with proper diagnosis and care.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">Cabling & Bracing</h3>
                    <p className="text-gray-700 text-sm">
                      Support systems can help structurally compromised trees remain safe while preserving their benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Need Safe, Professional Tree Removal?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Don't risk your safety or property with dangerous tree removal. Our certified arborists 
                provide safe, efficient service with complete cleanup and protection for your landscape.
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
                  Get Free Assessment
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
                  href="/services/tree-trimming"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Tree Trimming</h3>
                  <p className="text-gray-600">Professional pruning to maintain healthy, safe trees</p>
                </Link>
                <Link 
                  href="/services/tree-planting"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Tree Planting</h3>
                  <p className="text-gray-600">Replace removed trees with appropriate new plantings</p>
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