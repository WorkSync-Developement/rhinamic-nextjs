import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CheckCircle, Leaf, Calendar, Beaker, Droplets, Phone } from "lucide-react";

export default function LawnFertilization() {
  return (
    <>
      <Head>
        <title>Lawn Fertilization Services | San Antonio, TX | Rhinamic</title>
        <meta name="description" content="Professional lawn fertilization in San Antonio, TX. Seasonal fertilizer programs for healthy, green grass. Soil testing and custom nutrient programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com/services/lawn-fertilization" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-purple-900 mb-6 drop-shadow-sm">
                  Professional Lawn Fertilization
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Keep your San Antonio lawn lush and green with professional fertilization programs. 
                  Custom nutrient plans based on soil testing and seasonal needs for optimal grass health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Get Fertilization Quote
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

          {/* Why Fertilization is Essential */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Your San Antonio Lawn Needs Regular Fertilization</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Nutrient Depletion</h3>
                      <p className="text-gray-700">Regular mowing, watering, and Texas heat constantly drain nutrients from your lawn, requiring replenishment for healthy growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Clay Soil Challenges</h3>
                      <p className="text-gray-700">San Antonio's clay soil can bind nutrients, making them unavailable to grass roots without proper fertilization and soil amendments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Thicker, Greener Lawn</h3>
                      <p className="text-gray-700">Proper fertilization promotes dense grass growth that naturally crowds out weeds and creates the lush lawn you want.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Disease & Stress Resistance</h3>
                      <p className="text-gray-700">Well-fertilized grass better withstands heat stress, drought, disease pressure, and recovery from damage.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Seasonal Growth Cycles</h3>
                      <p className="text-gray-700">Texas grass varieties have specific nutritional needs during spring green-up, summer stress, and fall preparation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Root Development</h3>
                      <p className="text-gray-700">Balanced nutrition encourages deep root growth, improving drought tolerance and overall lawn resilience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enhanced Color</h3>
                      <p className="text-gray-700">Proper nitrogen levels maintain that deep green color that makes your lawn the envy of the neighborhood.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Improved Recovery</h3>
                      <p className="text-gray-700">Fertilized lawns recover faster from foot traffic, pet damage, and seasonal stress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Nutrients */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Essential Lawn Nutrients</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Leaf className="text-green-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Nitrogen (N)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Primary nutrient for leaf growth and that deep green color. 
                    Promotes thick, lush grass that crowds out weeds naturally.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Promotes green color and growth</li>
                    <li>• Most frequently needed nutrient</li>
                    <li>• Water-soluble, requires regular application</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <Beaker className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Phosphorus (P)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Essential for root development and overall plant energy. 
                    Critical for new grass establishment and strong root systems.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Builds strong root systems</li>
                    <li>• Important for new grass seeding</li>
                    <li>• Less mobile in soil, lasts longer</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <Droplets className="text-orange-600 mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Potassium (K)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Strengthens grass against stress, disease, and extreme weather. 
                    Especially important for Texas heat and drought tolerance.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Increases stress tolerance</li>
                    <li>• Improves disease resistance</li>
                    <li>• Helps with winter hardiness</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Secondary & Micronutrients</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p><strong>Sulfur:</strong> Helps with chlorophyll production and nitrogen utilization</p>
                    <p><strong>Calcium:</strong> Improves soil structure and nutrient uptake</p>
                    <p><strong>Magnesium:</strong> Central component of chlorophyll for green color</p>
                  </div>
                  <div>
                    <p><strong>Iron:</strong> Prevents yellowing and promotes deep green color</p>
                    <p><strong>Zinc & Manganese:</strong> Support enzyme functions and growth</p>
                    <p><strong>Organic Matter:</strong> Improves soil health and nutrient retention</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Fertilization Program */}
          <section className="py-16 bg-green-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">San Antonio Seasonal Fertilization Program</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-green-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Spring</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Timing:</strong> March - April</p>
                    <p><strong>Focus:</strong> Growth stimulation</p>
                    <p><strong>Formula:</strong> High nitrogen with slow-release</p>
                    <div className="bg-green-50 p-3 rounded text-xs">
                      <strong>Goal:</strong> Jumpstart spring green-up and establish thick growth before summer heat
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-orange-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Summer</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Timing:</strong> June - July</p>
                    <p><strong>Focus:</strong> Stress protection</p>
                    <p><strong>Formula:</strong> Lower nitrogen, higher potassium</p>
                    <div className="bg-orange-50 p-3 rounded text-xs">
                      <strong>Goal:</strong> Help grass cope with heat stress and maintain health through summer
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-red-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-900">Fall</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Timing:</strong> September - October</p>
                    <p><strong>Focus:</strong> Root strengthening</p>
                    <p><strong>Formula:</strong> Balanced with extra potassium</p>
                    <div className="bg-red-50 p-3 rounded text-xs">
                      <strong>Goal:</strong> Prepare for winter and promote spring recovery
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-blue-500" size={24} />
                    <h3 className="text-lg font-semibold text-purple-909">Winter</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Timing:</strong> December - February</p>
                    <p><strong>Focus:</strong> Soil improvement</p>
                    <p><strong>Formula:</strong> Organic matter and soil conditioners</p>
                    <div className="bg-blue-50 p-3 rounded text-xs">
                      <strong>Goal:</strong> Improve soil structure while grass is dormant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fertilizer Types */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Professional Fertilizer Options</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Slow-Release Granular</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Coated granules that release nutrients gradually over 6-12 weeks, 
                    providing consistent feeding with less risk of burning.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <p><strong>Best for:</strong> Regular maintenance programs</p>
                    <p><strong>Benefits:</strong> Long-lasting, burn-resistant, consistent feeding</p>
                    <p><strong>Application:</strong> 3-4 times per year</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Liquid Fertilizer</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Fast-acting liquid nutrients that provide immediate green-up 
                    and can be precisely applied for specific needs.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <p><strong>Best for:</strong> Quick correction, iron applications</p>
                    <p><strong>Benefits:</strong> Fast results, precise application, iron supplementation</p>
                    <p><strong>Application:</strong> Monthly during growing season</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Organic Programs</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Natural, slow-release nutrients that improve soil biology 
                    and provide sustainable lawn nutrition over time.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <p><strong>Best for:</strong> Soil health improvement, sustainable practices</p>
                    <p><strong>Benefits:</strong> Soil building, environmental safety, long-term improvement</p>
                    <p><strong>Application:</strong> 2-3 times per year</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Soil Testing */}
          <section className="py-16 bg-blue-50">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Professional Soil Testing</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Know Your Soil's Needs</h3>
                  <p className="text-gray-700 mb-4">
                    Professional soil testing reveals exactly what nutrients your lawn needs, preventing over-fertilization 
                    and ensuring you're addressing the right deficiencies for optimal results.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">pH Balance</h3>
                  <p className="text-gray-700 mb-4">
                    San Antonio's alkaline soil can prevent nutrient uptake even when fertilizer is present. 
                    Soil testing identifies pH issues and guides corrective treatments.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Custom Programs</h3>
                  <p className="text-gray-700">
                    Test results allow us to create customized fertilization programs that address your soil's 
                    specific needs rather than using generic, one-size-fits-all approaches.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">What Soil Tests Reveal</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Beaker className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <h4 className="font-semibold text-gray-900">pH Level</h4>
                        <p className="text-gray-700 text-sm">Determines nutrient availability and need for lime or sulfur</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Beaker className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Nutrient Levels</h4>
                        <p className="text-gray-700 text-sm">Nitrogen, phosphorus, potassium, and micronutrient status</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Beaker className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Organic Matter</h4>
                        <p className="text-gray-700 text-sm">Soil health and need for organic amendments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Beaker className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Salt Levels</h4>
                        <p className="text-gray-700 text-sm">Important in areas with poor drainage or heavy clay</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Lawn Nutrient Problems */}
          <section className="py-16 bg-white">
            <div className="container-custom max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Common San Antonio Lawn Nutrient Issues</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Iron Deficiency</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Symptoms:</strong> Yellow grass with green veins, especially in alkaline soil areas.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Iron sulfate applications and soil pH adjustment</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Nitrogen Deficiency</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Symptoms:</strong> Overall yellowing, slow growth, thin grass coverage.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Regular nitrogen applications with slow-release fertilizer</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Phosphorus Lockup</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Symptoms:</strong> Poor root development, slow establishment, purplish color.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> pH adjustment and targeted phosphorus application</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Potassium Deficiency</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Symptoms:</strong> Brown leaf edges, poor heat tolerance, increased disease susceptibility.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Potassium-rich fertilizers, especially before summer</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">pH Problems</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Symptoms:</strong> Poor fertilizer response, patchy growth, persistent nutrient deficiencies.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Soil testing and pH correction with lime or sulfur</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Over-Fertilization</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Symptoms:</strong> Excessive growth, thatch buildup, increased disease pressure, fertilizer burn.
                  </p>
                  <p className="text-gray-700 text-sm"><strong>Solution:</strong> Soil testing and balanced, appropriately-timed applications</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-16 bg-purple-900 text-white">
            <div className="container-custom max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready for a Healthier, Greener Lawn?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Professional fertilization programs give your San Antonio lawn the nutrients it needs to thrive 
                in our challenging climate. Let's create a custom program for your property.
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
                  Schedule Soil Test & Consultation
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
                  href="/services/lawn-aeration"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Lawn Aeration</h3>
                  <p className="text-gray-600">Improve fertilizer uptake with professional aeration service</p>
                </Link>
                <Link 
                  href="/services/weed-control"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Weed Control</h3>
                  <p className="text-gray-600">Comprehensive weed management for a pristine lawn</p>
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