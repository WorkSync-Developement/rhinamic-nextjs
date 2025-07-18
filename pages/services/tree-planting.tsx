import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const TreePlantingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional Tree Planting Services
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Add lasting beauty and value to your San Antonio property with expert tree selection, planting, and establishment services.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Plant My Trees
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Expert Tree Selection & Planting
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Tree Specialists</h3>
                  <p className="text-gray-600 mb-4">
                    Choose from Texas native trees perfectly adapted to San Antonio's climate, soil, and growing conditions for maximum success.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Native Texas oak varieties</li>
                    <li>• Drought-tolerant species</li>
                    <li>• Heat-resistant selections</li>
                    <li>• Wildlife-friendly options</li>
                    <li>• Low-maintenance varieties</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Custom Landscape Design</h3>
                  <p className="text-gray-600 mb-4">
                    Professional consultation to select the right trees for your specific site conditions, design goals, and long-term vision.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Site analysis and soil testing</li>
                    <li>• Mature size considerations</li>
                    <li>• Seasonal interest planning</li>
                    <li>• Utility line avoidance</li>
                    <li>• Property value enhancement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tree Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Recommended Trees for San Antonio
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Oak Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Live Oak (Quercus virginiana)</li>
                    <li>• Texas Red Oak (Quercus buckleyi)</li>
                    <li>• Lacey Oak (Quercus laceyi)</li>
                    <li>• Post Oak (Quercus stellata)</li>
                    <li>• Bur Oak (Quercus macrocarpa)</li>
                    <li>• Chinkapin Oak (Quercus muehlenbergii)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Shade Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Texas Ash (Fraxinus texensis)</li>
                    <li>• Pecan (Carya illinoinensis)</li>
                    <li>• Bald Cypress (Taxodium distichum)</li>
                    <li>• American Elm (Ulmus americana)</li>
                    <li>• Mexican Buckeye (Ungnadia speciosa)</li>
                    <li>• Cedar Elm (Ulmus crassifolia)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Flowering Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Texas Redbud (Cercis canadensis)</li>
                    <li>• Mexican Plum (Prunus mexicana)</li>
                    <li>• Texas Mountain Laurel (Dermatophyllum)</li>
                    <li>• Flameleaf Sumac (Rhus lanceolata)</li>
                    <li>• Anacacho Orchid Tree (Bauhinia)</li>
                    <li>• Pride of Barbados (Caesalpinia)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Evergreen Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Ashe Juniper (Juniperus ashei)</li>
                    <li>• Eastern Red Cedar (Juniperus virginiana)</li>
                    <li>• Agarito (Mahonia trifoliolata)</li>
                    <li>• Texas Persimmon (Diospyros texana)</li>
                    <li>• Yaupon Holly (Ilex vomitoria)</li>
                    <li>• Wax Myrtle (Morella cerifera)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Fruit Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Fig varieties (Ficus carica)</li>
                    <li>• Pomegranate (Punica granatum)</li>
                    <li>• Jujube (Ziziphus jujuba)</li>
                    <li>• Prickly Pear (Opuntia ficus-indica)</li>
                    <li>• Texas Persimmon (Diospyros texana)</li>
                    <li>• Mexican Buckeye (Ungnadia speciosa)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Small Accent Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Texas Sage (Leucophyllum)</li>
                    <li>• Cenizo (Leucophyllum candidum)</li>
                    <li>• Turk's Cap (Malvaviscus arboreus)</li>
                    <li>• Esperanza (Tecoma stans)</li>
                    <li>• Barberry (Mahonia trifoliolata)</li>
                    <li>• Desert Willow (Chilopsis linearis)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planting Process Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Professional Tree Planting Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Evaluate soil conditions, drainage, sunlight, and space requirements
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Tree Selection</h3>
                  <p className="text-gray-600 text-sm">
                    Choose appropriate species based on site conditions and design goals
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Proper Planting</h3>
                  <p className="text-gray-600 text-sm">
                    Expert installation with correct depth, soil amendments, and placement
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Establishment Care</h3>
                  <p className="text-gray-600 text-sm">
                    Initial watering, mulching, and staking for optimal establishment
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Planting Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Installation Standards</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Hole width 2-3x root ball diameter</li>
                      <li>• Proper planting depth (root flare visible)</li>
                      <li>• Native soil backfill with amendments</li>
                      <li>• Slow-release fertilizer application</li>
                      <li>• Professional grade mulch installation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Support & Protection</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Appropriate staking system</li>
                      <li>• Tree wrap for young bark protection</li>
                      <li>• Watering basin construction</li>
                      <li>• Initial pruning if necessary</li>
                      <li>• Establishment care instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Best Planting Times in San Antonio
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fall Planting</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Optimal Time:</strong> October - December
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Ideal conditions for root establishment</li>
                    <li>• Cooler temperatures reduce stress</li>
                    <li>• Winter rains aid in establishment</li>
                    <li>• Full growing season ahead in spring</li>
                    <li>• Best survival rates</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Spring Planting</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Alternative Time:</strong> February - April
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Good alternative to fall planting</li>
                    <li>• Plant before hot summer weather</li>
                    <li>• Requires more intensive watering</li>
                    <li>• Monitor closely during establishment</li>
                    <li>• Avoid late spring planting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Complete Tree Planting Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Consultation & Design</h3>
                  <p className="text-gray-600">
                    Professional consultation to select the perfect trees for your landscape goals, site conditions, and long-term vision.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Tree Sourcing</h3>
                  <p className="text-gray-600">
                    Access to high-quality nursery stock with healthy root systems and proper tree structure from trusted local suppliers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Professional Installation</h3>
                  <p className="text-gray-600">
                    Expert planting techniques following industry standards for optimal establishment and long-term tree health.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Soil Preparation</h3>
                  <p className="text-gray-600">
                    Soil testing and amendment to create optimal growing conditions for new trees in San Antonio's challenging soils.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Establishment Care</h3>
                  <p className="text-gray-600">
                    Initial care including proper watering schedules, mulching, and monitoring to ensure successful establishment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Guarantee Program</h3>
                  <p className="text-gray-600">
                    Comprehensive warranty on properly installed trees with follow-up care and replacement if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Benefits of Professional Tree Planting
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Increased Property Value</h3>
                  <p className="text-gray-600">
                    Mature trees can increase property value by 10-15%, providing excellent return on investment while enhancing curb appeal and marketability.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Energy Savings</h3>
                  <p className="text-gray-600">
                    Strategically placed shade trees can reduce cooling costs by up to 30% during San Antonio's hot summers while providing natural wind protection.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Environmental Benefits</h3>
                  <p className="text-gray-600">
                    Trees improve air quality, reduce urban heat, provide wildlife habitat, and help manage stormwater runoff naturally.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Long-term Investment</h3>
                  <p className="text-gray-600">
                    Professional planting ensures healthy establishment and decades of benefits including beauty, shade, and environmental contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Plant Your Legacy Today
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design to add beautiful, long-lasting trees to your San Antonio property with professional planting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Schedule Consultation
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
                >
                  Call (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TreePlantingPage;
