import React from 'react';
import { CheckCircle, Phone, Leaf, TreePine, Flower, Sun } from 'lucide-react';
import ServicesLayout from '../../components/layout/ServicesLayout';

const TreePlantingPage = () => {
  const serviceFeatures = [
    {
      title: "Native Tree Specialists",
      description: "Choose from Texas native trees perfectly adapted to San Antonio's climate, soil, and growing conditions for maximum success."
    },
    {
      title: "Custom Landscape Design",
      description: "Professional consultation to select the right trees for your specific site conditions, design goals, and long-term vision."
    },
    {
      title: "Expert Installation",
      description: "Professional planting techniques following industry standards for optimal establishment and long-term tree health."
    },
    {
      title: "Soil Preparation",
      description: "Soil testing and amendment to create optimal growing conditions for new trees in San Antonio's challenging soils."
    },
    {
      title: "Establishment Care",
      description: "Initial care including proper watering schedules, mulching, and monitoring to ensure successful establishment."
    },
    {
      title: "Tree Sourcing",
      description: "Access to high-quality nursery stock with healthy root systems and proper tree structure from trusted local suppliers."
    },
    {
      title: "Site Assessment",
      description: "Evaluate soil conditions, drainage, sunlight, and space requirements to ensure proper tree selection and placement."
    },
    {
      title: "Guarantee Program",
      description: "Comprehensive warranty on properly installed trees with follow-up care and replacement if needed."
    }
  ];

  const plans = [
    {
      name: "Basic Tree Package",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      description: "Perfect for single tree additions",
      features: [
        "1-3 trees planted",
        "Basic soil preparation",
        "Standard mulching",
        "Basic planting guide"
      ]
    },
    {
      name: "Landscape Tree Package",
      icon: <TreePine className="w-8 h-8 text-purple-600" />,
      description: "Complete tree landscape transformation",
      highlight: true,
      features: [
        "4-10 trees planted",
        "Soil testing & amendment",
        "Professional mulching",
        "Watering system setup",
        "90-day guarantee"
      ]
    },
    {
      name: "Premium Tree Installation",
      icon: <Flower className="w-8 h-8 text-blue-600" />,
      description: "Full-service tree planting with care",
      features: [
        "Unlimited trees",
        "Complete site preparation",
        "Irrigation integration",
        "1-year guarantee",
        "Quarterly check-ups"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Fertilize established trees",
        "Check for pest issues",
        "Prune if needed"
      ]
    },
    {
      season: "Summer",
      items: [
        "Deep watering schedule",
        "Monitor for heat stress",
        "Maintain mulch layer"
      ]
    },
    {
      season: "Fall",
      items: [
        "Optimal planting season",
        "Plant October-December",
        "Prepare winter protection"
      ]
    },
    {
      season: "Winter",
      items: [
        "Protect young trees",
        "Light winter watering",
        "Plan spring additions"
      ]
    }
  ];

  const faq = [
    {
      question: "When is the best time to plant trees in San Antonio?",
      answer: "Fall (October through December) is the optimal time for tree planting in San Antonio. The cooler temperatures and winter rains help trees establish strong root systems before the hot summer."
    },
    {
      question: "What trees grow best in San Antonio?",
      answer: "Native Texas trees like Live Oak, Texas Red Oak, Cedar Elm, and Texas Redbud thrive in our climate. These species are adapted to our heat, drought conditions, and alkaline soils."
    },
    {
      question: "How much space do trees need?",
      answer: "Space requirements vary by species. Small trees need 15-20 feet from structures, medium trees 20-30 feet, and large trees like Live Oaks need 40+ feet for proper growth."
    }
  ];

  return (
    <ServicesLayout
      title="Professional Tree Planting Services"
      description="Add lasting beauty and value to your San Antonio property with expert tree selection, planting, and establishment services."
      heroTitle="Professional Tree Planting Services"
      heroDescription="Add lasting beauty and value to your San Antonio property with expert tree selection, planting, and establishment services."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Plant Your Legacy Today"
      ctaDescription="Contact Rhinamic Landscape Design to add beautiful, long-lasting trees to your San Antonio property with professional planting services."
    >
      {/* Tree Types Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Recommended Trees for San Antonio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Native Oak Trees</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Live Oak (Quercus virginiana)</li>
                <li>• Texas Red Oak (Quercus buckleyi)</li>
                <li>• Lacey Oak (Quercus laceyi)</li>
                <li>• Post Oak (Quercus stellata)</li>
                <li>• Bur Oak (Quercus macrocarpa)</li>
                <li>• Chinkapin Oak (Quercus muehlenbergii)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Shade Trees</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Texas Ash (Fraxinus texensis)</li>
                <li>• Pecan (Carya illinoinensis)</li>
                <li>• Bald Cypress (Taxodium distichum)</li>
                <li>• American Elm (Ulmus americana)</li>
                <li>• Mexican Buckeye (Ungnadia speciosa)</li>
                <li>• Cedar Elm (Ulmus crassifolia)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Flowering Trees</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Texas Redbud (Cercis canadensis)</li>
                <li>• Mexican Plum (Prunus mexicana)</li>
                <li>• Texas Mountain Laurel (Dermatophyllum)</li>
                <li>• Flameleaf Sumac (Rhus lanceolata)</li>
                <li>• Anacacho Orchid Tree (Bauhinia)</li>
                <li>• Pride of Barbados (Caesalpinia)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Evergreen Trees</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Ashe Juniper (Juniperus ashei)</li>
                <li>• Eastern Red Cedar (Juniperus virginiana)</li>
                <li>• Agarito (Mahonia trifoliolata)</li>
                <li>• Texas Persimmon (Diospyros texana)</li>
                <li>• Yaupon Holly (Ilex vomitoria)</li>
                <li>• Wax Myrtle (Morella cerifera)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Fruit Trees</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Fig varieties (Ficus carica)</li>
                <li>• Pomegranate (Punica granatum)</li>
                <li>• Jujube (Ziziphus jujuba)</li>
                <li>• Prickly Pear (Opuntia ficus-indica)</li>
                <li>• Texas Persimmon (Diospyros texana)</li>
                <li>• Mexican Buckeye (Ungnadia speciosa)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Small Accent Trees</h3>
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
      </section>

      {/* Planting Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Professional Tree Planting Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Site Assessment</h3>
              <p className="text-gray-600 text-sm">
                Evaluate soil conditions, drainage, sunlight, and space requirements
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Tree Selection</h3>
              <p className="text-gray-600 text-sm">
                Choose appropriate species based on site conditions and design goals
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Proper Planting</h3>
              <p className="text-gray-600 text-sm">
                Expert installation with correct depth, soil amendments, and placement
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Establishment Care</h3>
              <p className="text-gray-600 text-sm">
                Initial watering, mulching, and staking for optimal establishment
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4 text-center">Planting Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-3">Installation Standards</h4>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Hole width 2-3x root ball diameter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Proper planting depth (root flare visible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Native soil backfill with amendments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Slow-release fertilizer application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Professional grade mulch installation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-3">Support & Protection</h4>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Appropriate staking system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Tree wrap for young bark protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Watering basin construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Initial pruning if necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                    <span>Establishment care instructions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Best Planting Times in San Antonio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Fall Planting</h3>
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
            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Spring Planting</h3>
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
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">
            Benefits of Professional Tree Planting
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Increased Property Value</h3>
              <p className="text-gray-600">
                Mature trees can increase property value by 10-15%, providing excellent return on investment while enhancing curb appeal and marketability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Energy Savings</h3>
              <p className="text-gray-600">
                Strategically placed shade trees can reduce cooling costs by up to 30% during San Antonio's hot summers while providing natural wind protection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Environmental Benefits</h3>
              <p className="text-gray-600">
                Trees improve air quality, reduce urban heat, provide wildlife habitat, and help manage stormwater runoff naturally.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Long-term Investment</h3>
              <p className="text-gray-600">
                Professional planting ensures healthy establishment and decades of benefits including beauty, shade, and environmental contributions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

export default TreePlantingPage;