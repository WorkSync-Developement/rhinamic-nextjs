import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const NativePlantLandscapingPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Native Plant Landscaping
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Celebrate Texas heritage with beautiful native plant landscapes that support local wildlife, conserve water, and thrive naturally in San Antonio's climate.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Design Native Landscape
              </Link>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Texas Native Plant Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Authentic Texas Landscapes</h3>
                  <p className="text-gray-600 mb-4">
                    Create landscapes that reflect the natural beauty of Texas using plants that have evolved to thrive in our unique climate and soil conditions.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• True native Texas plant species</li>
                    <li>• Regionally appropriate selections</li>
                    <li>• Natural plant communities</li>
                    <li>• Seasonal succession planning</li>
                    <li>• Habitat restoration techniques</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Ecological Benefits</h3>
                  <p className="text-gray-600 mb-4">
                    Support local ecosystems while enjoying reduced maintenance, improved soil health, and natural pest control through biodiversity.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Native wildlife habitat creation</li>
                    <li>• Pollinator garden development</li>
                    <li>• Natural pest management</li>
                    <li>• Soil health improvement</li>
                    <li>• Carbon sequestration benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Native Plant Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Native Plants for San Antonio Region
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Trees</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Live Oak (Quercus virginiana)</li>
                    <li>• Texas Red Oak (Quercus buckleyi)</li>
                    <li>• Cedar Elm (Ulmus crassifolia)</li>
                    <li>• Texas Redbud (Cercis canadensis)</li>
                    <li>• Mexican Buckeye (Ungnadia speciosa)</li>
                    <li>• Anacua (Ehretia anacua)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Shrubs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Cenizo (Leucophyllum)</li>
                    <li>• Agarito (Mahonia trifoliolata)</li>
                    <li>• Flameleaf Sumac (Rhus lanceolata)</li>
                    <li>• Yaupon Holly (Ilex vomitoria)</li>
                    <li>• Turk's Cap (Malvaviscus arboreus)</li>
                    <li>• Fragrant Sumac (Rhus aromatica)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Wildflowers</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Bluebonnets (Lupinus texensis)</li>
                    <li>• Indian Paintbrush (Castilleja)</li>
                    <li>• Black-eyed Susan (Rudbeckia)</li>
                    <li>• Mexican Hat (Ratibida)</li>
                    <li>• Blanket Flower (Gaillardia)</li>
                    <li>• Coreopsis (Coreopsis tinctoria)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Perennials</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Autumn Sage (Salvia greggii)</li>
                    <li>• Blackfoot Daisy (Melampodium)</li>
                    <li>• Esperanza (Tecoma stans)</li>
                    <li>• Pride of Barbados (Caesalpinia)</li>
                    <li>• Mexican Mint Marigold (Tagetes)</li>
                    <li>• Damianita (Chrysactinia mexicana)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Grasses</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Buffalo Grass (Poaceae)</li>
                    <li>• Lindheimer's Muhly (Muhlenbergia)</li>
                    <li>• Mexican Feather Grass (Nassella)</li>
                    <li>• Little Bluestem (Schizachyrium)</li>
                    <li>• Gulf Muhly (Muhlenbergia capillaris)</li>
                    <li>• Curly Mesquite (Hilaria belangeri)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Native Groundcovers</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Frog Fruit (Phyla nodiflora)</li>
                    <li>• Prairie Verbena (Glandularia)</li>
                    <li>• Skullcap (Scutellaria wrightii)</li>
                    <li>• Trailing Lantana (Lantana camara)</li>
                    <li>• Texas Sedge (Carex texensis)</li>
                    <li>• Wild Strawberry (Fragaria)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Native Plants Support Local Wildlife
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🦋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Butterflies</h3>
                  <p className="text-gray-600 text-sm">
                    Native plants provide essential nectar sources and host plants for monarch, swallowtail, and other butterflies
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Native Bees</h3>
                  <p className="text-gray-600 text-sm">
                    Support over 400 native bee species with plants that have co-evolved with local pollinators
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐦</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Songbirds</h3>
                  <p className="text-gray-600 text-sm">
                    Native plants produce seeds, berries, and attract insects that feed cardinals, wrens, and mockingbirds
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🦎</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Beneficial Wildlife</h3>
                  <p className="text-gray-600 text-sm">
                    Create habitat for lizards, beneficial insects, and other creatures that help maintain garden balance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Approaches Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Native Plant Design Approaches
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Prairie Restoration</h3>
                  <p className="text-gray-600 mb-4">
                    Recreate the natural Texas prairie with native grasses and wildflowers for authentic, low-maintenance landscapes.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Mixed grass prairie communities</li>
                    <li>• Seasonal wildflower displays</li>
                    <li>• Natural succession planning</li>
                    <li>• Minimal irrigation requirements</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Woodland Gardens</h3>
                  <p className="text-gray-600 mb-4">
                    Shade-loving native plants that thrive under mature trees, creating natural woodland environments.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Native understory plants</li>
                    <li>• Shade-tolerant groundcovers</li>
                    <li>• Natural mulch layers</li>
                    <li>• Wildlife shelter areas</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Hill Country Gardens</h3>
                  <p className="text-gray-600 mb-4">
                    Rock gardens featuring plants adapted to limestone soils and rocky terrain typical of the Texas Hill Country.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Limestone-loving plants</li>
                    <li>• Rock outcrop recreations</li>
                    <li>• Drought-adapted species</li>
                    <li>• Natural stone integration</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Butterfly Gardens</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized gardens featuring plants that support butterflies throughout their entire life cycle.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Nectar-rich flowering plants</li>
                    <li>• Host plants for caterpillars</li>
                    <li>• Seasonal bloom succession</li>
                    <li>• Shelter and water features</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Rain Gardens</h3>
                  <p className="text-gray-600 mb-4">
                    Native plants that handle both wet and dry conditions, perfect for managing stormwater naturally.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Water-tolerant natives</li>
                    <li>• Natural filtration systems</li>
                    <li>• Erosion control benefits</li>
                    <li>• Attractive year-round</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4">Heritage Gardens</h3>
                  <p className="text-gray-600 mb-4">
                    Celebrate Texas history with plants that early settlers and indigenous peoples used for food, medicine, and crafts.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Historical plant varieties</li>
                    <li>• Cultural significance stories</li>
                    <li>• Educational opportunities</li>
                    <li>• Traditional garden layouts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Interest Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Year-Round Beauty with Native Plants
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Spring (Mar-May)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Bluebonnet blooms</li>
                    <li>• Redbud flowering</li>
                    <li>• Fresh green growth</li>
                    <li>• Wildflower carpets</li>
                    <li>• Butterfly emergence</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Summer (Jun-Aug)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Esperanza golden blooms</li>
                    <li>• Native grass movement</li>
                    <li>• Hummingbird activity</li>
                    <li>• Heat-adapted flowering</li>
                    <li>• Dramatic seed heads</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fall (Sep-Nov)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Autumn sage blooms</li>
                    <li>• Sumac fall color</li>
                    <li>• Seed production peak</li>
                    <li>• Monarch migration</li>
                    <li>• Berry production</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Winter (Dec-Feb)</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Evergreen structure</li>
                    <li>• Persistent seed heads</li>
                    <li>• Winter bird feeding</li>
                    <li>• Architectural forms</li>
                    <li>• Quiet beauty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Establishment & Care Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                Native Plant Establishment & Care
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Proper Plant Selection</h3>
                  <p className="text-gray-600 mb-4">
                    Choose true natives adapted to your specific site conditions for the best establishment and long-term success.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Site-appropriate species</li>
                    <li>• Local ecotype preferences</li>
                    <li>• Companion plant compatibility</li>
                    <li>• Mature size considerations</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Soil Preparation</h3>
                  <p className="text-gray-600 mb-4">
                    Minimal soil amendments that work with existing conditions rather than dramatically altering the soil structure.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Native soil analysis</li>
                    <li>• Minimal organic matter addition</li>
                    <li>• Drainage assessment</li>
                    <li>• pH testing and adjustment</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Establishment Care</h3>
                  <p className="text-gray-600 mb-4">
                    Proper watering and care during the first year to establish strong root systems for long-term drought tolerance.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• First-year watering schedule</li>
                    <li>• Mulching strategies</li>
                    <li>• Weed management</li>
                    <li>• Growth monitoring</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Long-term Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Minimal maintenance practices that support natural plant behaviors and ecosystem development.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Selective pruning only</li>
                    <li>• Natural pest management</li>
                    <li>• Minimal fertilization</li>
                    <li>• Seed collection opportunities</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Wildlife Enhancement</h3>
                  <p className="text-gray-600 mb-4">
                    Additional features that maximize wildlife benefits and create complete habitat environments.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Water source installation</li>
                    <li>• Nesting site creation</li>
                    <li>• Shelter plant groupings</li>
                    <li>• Pesticide-free maintenance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Education & Enjoyment</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about your native plants and enjoy the changing seasons in your authentic Texas landscape.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Plant identification guides</li>
                    <li>• Seasonal observation tips</li>
                    <li>• Wildlife watching opportunities</li>
                    <li>• Educational signage options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Benefits of Native Plant Landscaping
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Environmental Stewardship</h3>
                  <p className="text-gray-600">
                    Support local ecosystems, conserve water, reduce chemical inputs, and provide essential habitat for native wildlife while creating beautiful landscapes.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Low Maintenance</h3>
                  <p className="text-gray-600">
                    Once established, native plants require minimal care, watering, and pest management, saving time and money while providing natural beauty.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Climate Adaptation</h3>
                  <p className="text-gray-600">
                    Native plants are perfectly adapted to San Antonio's climate extremes, surviving droughts, heat waves, and occasional freezes without assistance.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Cultural Connection</h3>
                  <p className="text-gray-600">
                    Connect with Texas heritage and natural history while creating landscapes that tell the story of our unique regional ecology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Celebrate Texas with Native Plants
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact Rhinamic Landscape Design to create an authentic Texas landscape with native plants that support wildlife, conserve resources, and provide natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Plan Native Garden
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

export default NativePlantLandscapingPage;
