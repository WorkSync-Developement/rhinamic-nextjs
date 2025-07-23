import React from 'react';
import { Phone, CheckCircle, Scissors, Leaf, Sun, Droplets, Sprout, Trees } from 'lucide-react';
import ServicesLayout from '../../components/layout/ServicesLayout';

const ShrubPruningPage = () => {
  const serviceFeatures = [
    {
      title: 'Pruning & Shaping',
      description: 'Professional pruning techniques to maintain shape, promote healthy growth, and enhance your landscape\'s overall appearance.'
    },
    {
      title: 'Health & Disease Prevention',
      description: 'Preventive care and maintenance to keep shrubs healthy, disease-free, and thriving in San Antonio\'s climate.'
    },
    {
      title: 'Seasonal Maintenance',
      description: 'Proper timing and techniques for each season to ensure optimal growth and flowering.'
    },
    {
      title: 'Variety-Specific Care',
      description: 'Specialized care for native, flowering, evergreen, and ornamental shrubs common in San Antonio.'
    }
  ];

  const plans = [
    {
      name: 'Basic Pruning',
      icon: <Scissors size={24} />,
      features: [
        'Shape maintenance',
        'Dead branch removal',
        'Basic cleanup',
        'Annual service'
      ],
      description: 'Essential pruning to maintain basic shape and health of your shrubs.'
    },
    {
      name: 'Premium Care',
      icon: <Leaf size={24} />,
      features: [
        'All Basic services',
        'Disease inspection',
        'Seasonal maintenance',
        'Fertilization',
        'Bi-annual service'
      ],
      description: 'Comprehensive care including health assessments and seasonal maintenance.',
      highlight: true
    },
    {
      name: 'Complete Shrub Care',
      icon: <Trees size={24} />,
      features: [
        'All Premium services',
        'Quarterly maintenance',
        'Pest control',
        'Soil testing',
        'Emergency care'
      ],
      description: 'Complete year-round care program for optimal shrub health and appearance.'
    }
  ];

  const seasonalCare = [
    {
      season: 'Spring',
      items: [
        'Light pruning of spring bloomers after flowering',
        'Remove winter damage',
        'Fertilize for new growth',
        'Monitor for pests'
      ]
    },
    {
      season: 'Summer',
      items: [
        'Minimal pruning',
        'Focus on proper watering',
        'Monitor for heat stress',
        'Check for disease'
      ]
    },
    {
      season: 'Fall',
      items: [
        'Major pruning for most shrubs',
        'Remove dead/diseased wood',
        'Prepare for winter',
        'Apply winter mulch'
      ]
    },
    {
      season: 'Winter',
      items: [
        'Dormant season pruning',
        'Structural pruning',
        'Protect from frost',
        'Plan spring care'
      ]
    }
  ];

  const faq = [
    {
      question: 'How often should I have my shrubs pruned?',
      answer: 'Most shrubs benefit from annual pruning, but the ideal frequency depends on the specific type of shrub, its growth rate, and your landscape goals. We can assess your specific needs during a consultation.'
    },
    {
      question: 'What is the best time of year to prune flowering shrubs?',
      answer: 'The best time depends on when the shrub blooms. Spring-flowering shrubs should be pruned right after they bloom, while summer-flowering shrubs are best pruned in late winter or early spring before new growth begins.'
    },
    {
      question: 'Can pruning help with pest control?',
      answer: 'Yes, proper pruning improves air circulation and sunlight penetration, which can reduce pest problems. It also allows for early detection and removal of infested branches before pests can spread.'
    },
    {
      question: 'Will pruning encourage more flowers?',
      answer: 'Absolutely! Proper pruning stimulates new growth where flowers form. For most flowering shrubs, removing old wood encourages the growth of new, flower-producing stems.'
    }
  ];

  return (
    <ServicesLayout
      title="Shrub Pruning"
      description="Professional shrub pruning services in San Antonio to keep your landscape healthy and beautiful. Expert care for all types of shrubs, from native plants to ornamental varieties."
      heroTitle="Professional Shrub Pruning Services"
      heroDescription="Expert shrub care and pruning to keep your San Antonio landscape healthy, beautiful, and properly shaped year-round."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for Healthier, More Beautiful Shrubs?"
      ctaDescription="Contact us today for expert shrub pruning services tailored to your San Antonio landscape. Our team is ready to help your shrubs thrive."
    >

      <div className="container-custom max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
          San Antonio Shrub Varieties We Service
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Native Shrubs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Agarito</li>
              <li>• Cenizo (Texas Sage)</li>
              <li>• Flameleaf Sumac</li>
              <li>• Fragrant Sumac</li>
              <li>• Turk's Cap</li>
              <li>• Yaupon Holly</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Flowering Shrubs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Azaleas</li>
              <li>• Camellias</li>
              <li>• Knockout Roses</li>
              <li>• Esperanza</li>
              <li>• Pride of Barbados</li>
              <li>• Lantana</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Evergreen Shrubs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Boxwood</li>
              <li>• Japanese Yew</li>
              <li>• Juniper varieties</li>
              <li>• Nandina</li>
              <li>• Photinia</li>
              <li>• Wax Myrtle</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Ornamental Shrubs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Barberry</li>
              <li>• Spirea</li>
              <li>• Forsythia</li>
              <li>• Weigela</li>
              <li>• Viburnum</li>
              <li>• Lilac</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Fruit-Bearing Shrubs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Blueberry bushes</li>
              <li>• Pomegranate</li>
              <li>• Fig varieties</li>
              <li>• Mexican Buckeye</li>
              <li>• Beauty Berry</li>
              <li>• Elderberry</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Tropical Shrubs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Oleander</li>
              <li>• Bougainvillea</li>
              <li>• Hibiscus</li>
              <li>• Plumbago</li>
              <li>• Ixora</li>
              <li>• Croton</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Professional Pruning Techniques
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Selective Pruning</h3>
              <p className="text-gray-700 mb-4">
                Careful removal of specific branches to improve structure and health while maintaining the plant's natural form.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Removes dead, damaged, or diseased branches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Improves plant structure and appearance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Encourages healthy new growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Thinning</h3>
              <p className="text-gray-700 mb-4">
                Strategic removal of select branches to improve air circulation and light penetration throughout the plant.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Reduces disease pressure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Allows sunlight to reach inner branches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>Maintains natural shape while reducing density</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
};

export default ShrubPruningPage;
