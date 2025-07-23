import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import ServicesLayout from '../../components/layout/ServicesLayout';

const GardenMaintenancePage = () => {
  const serviceFeatures = [
    {
      title: 'Professional Care',
      description: 'Expert garden maintenance services to keep your landscape healthy and beautiful year-round with proper care and attention.',
    },
    {
      title: 'Customized Plans',
      description: 'Tailored maintenance schedules and services to meet the specific needs of your garden and landscape.',
    },
  ];

  const plans = [
    {
      name: 'Basic Maintenance',
      icon: '🌱',
      features: ['Lawn mowing', 'Edging', 'Trimming', 'Basic cleanup'],
      description: 'Essential services to keep your garden looking neat and tidy on a regular basis.',
    },
    {
      name: 'Comprehensive Care',
      icon: '🌿',
      features: ['All Basic services', 'Fertilization', 'Weed control', 'Seasonal pruning', 'Mulching'],
      description: 'Complete garden care to maintain plant health and landscape beauty throughout the seasons.',
      highlight: true,
    },
    {
      name: 'Premium Service',
      icon: '🌸',
      features: ['All Comprehensive services', 'Pest management', 'Soil testing', 'Irrigation checks', 'Plant health monitoring'],
      description: 'The ultimate garden maintenance package with regular monitoring and expert care.',
    },
  ];

  const seasonalCare = [
    {
      season: 'Spring',
      items: ['Clean up winter debris', 'Prune spring-flowering shrubs', 'Apply pre-emergent weed control', 'Start regular mowing schedule'],
    },
    {
      season: 'Summer',
      items: ['Regular mowing and edging', 'Monitor irrigation', 'Deadhead flowers', 'Check for pests and diseases'],
    },
    {
      season: 'Fall',
      items: ['Rake leaves', 'Aerate and overseed lawn', 'Plant spring bulbs', 'Winterize irrigation system'],
    },
    {
      season: 'Winter',
      items: ['Prune dormant plants', 'Protect sensitive plants', 'Plan next year\'s garden', 'Maintain garden tools'],
    },
  ];

  const faq = [
    {
      question: 'How often should I have my garden maintained?',
      answer: 'Most gardens benefit from weekly or bi-weekly maintenance during the growing season, with monthly visits in winter. We can assess your specific needs and recommend a schedule.',
    },
    {
      question: 'Do you provide organic garden maintenance?',
      answer: 'Yes, we offer organic garden maintenance options using natural fertilizers and pest control methods that are safe for your family and the environment.',
    },
    {
      question: 'Can you work with existing landscaping?',
      answer: 'Absolutely! We can maintain and enhance your existing landscape while preserving its unique character and design.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide garden maintenance services throughout the San Antonio area and surrounding communities.',
    },
  ];

  return (
    <ServicesLayout
      title="Garden Maintenance | Rhinamic Landscape Design"
      description="Professional garden maintenance services in San Antonio. Keep your landscape healthy and beautiful year-round with our expert care and attention to detail."
      heroTitle="Garden Maintenance"
      heroDescription="Professional garden care services to keep your San Antonio landscape healthy, beautiful, and thriving throughout the seasons."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for a Beautiful, Well-Maintained Garden?"
      ctaDescription="Contact us today to schedule your garden maintenance service and keep your landscape looking its best."
    >
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Garden Maintenance Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Lawn Care</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular mowing and edging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Aeration and overseeding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fertilization and weed control</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-600 mb-4">Plant Care</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pruning and deadheading</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mulching and soil care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pest and disease management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
};

export default GardenMaintenancePage;
