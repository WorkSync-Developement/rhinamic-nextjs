import React from 'react';
import { CheckCircle, Phone, Leaf, Calendar, Shield, Wrench } from 'lucide-react';
import ServicesLayout from '../../components/layout/ServicesLayout';

const LawnCareServicesPage = () => {
  const serviceFeatures = [
    {
      title: "Regular Mowing & Edging",
      description: "Professional weekly or bi-weekly mowing with precision edging for a clean, manicured appearance year-round."
    },
    {
      title: "Fertilization Programs",
      description: "Customized fertilization schedules designed for San Antonio's climate to promote healthy, green growth."
    },
    {
      title: "Weed Control",
      description: "Pre-emergent and post-emergent treatments to keep your lawn free from invasive weeds and maintain uniformity."
    },
    {
      title: "Aeration Services",
      description: "Core aeration to improve soil compaction, enhance water absorption, and promote healthy root development."
    },
    {
      title: "Disease & Pest Management",
      description: "Proactive monitoring and treatment for common lawn diseases and pests that affect Texas lawns."
    },
    {
      title: "Overseeding & Renovation",
      description: "Seasonal overseeding and lawn renovation services to maintain density and repair damaged areas."
    },
    {
      title: "Seasonal Cleanup",
      description: "Spring and fall cleanup services including leaf removal, dethatching, and preparing your lawn for seasonal changes."
    },
    {
      title: "Soil Testing & Analysis",
      description: "Professional soil testing to determine nutrient needs and pH levels for optimal lawn health."
    }
  ];

  const plans = [
    {
      name: "Basic Lawn Care",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      description: "Essential maintenance for healthy lawns",
      features: [
        "Weekly mowing",
        "Edge trimming",
        "Grass clipping cleanup",
        "Basic weed control"
      ]
    },
    {
      name: "Premium Lawn Care",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      description: "Complete lawn care with treatments",
      highlight: true,
      features: [
        "All Basic services",
        "Fertilization program",
        "Weed & pest control",
        "Seasonal aeration",
        "Disease monitoring"
      ]
    },
    {
      name: "Elite Lawn Management",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      description: "Full-service lawn perfection",
      features: [
        "All Premium services",
        "Soil amendments",
        "Overseeding program",
        "Monthly reports",
        "Priority service"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Pre-emergent application",
        "First fertilization",
        "Aeration if needed"
      ]
    },
    {
      season: "Summer",
      items: [
        "Increased mowing frequency",
        "Summer fertilization",
        "Pest monitoring"
      ]
    },
    {
      season: "Fall",
      items: [
        "Overseeding preparation",
        "Fall fertilization",
        "Leaf cleanup"
      ]
    },
    {
      season: "Winter",
      items: [
        "Reduced mowing",
        "Winter prep treatment",
        "Equipment maintenance"
      ]
    }
  ];

  const faq = [
    {
      question: "How often should my lawn be mowed in San Antonio?",
      answer: "During peak growing season (spring and summer), weekly mowing is recommended. In fall and winter, bi-weekly service is usually sufficient depending on grass type and weather conditions."
    },
    {
      question: "What type of grass grows best in San Antonio?",
      answer: "St. Augustine, Bermuda, and Zoysia grasses are excellent choices for San Antonio. Each has different maintenance requirements, and we customize our care based on your specific grass type."
    },
    {
      question: "How do you handle drought conditions and water restrictions?",
      answer: "We adjust our care programs during drought conditions, focusing on proper mowing height, reduced fertilization, and drought-stress management techniques to keep your lawn healthy with less water."
    }
  ];

  return (
    <ServicesLayout
      title="Professional Lawn Care Services"
      description="Complete lawn care services in San Antonio, TX. Professional mowing, fertilization, weed control, and seasonal maintenance for a healthy, beautiful lawn year-round."
      heroTitle="Professional Lawn Care Services"
      heroDescription="Keep your San Antonio lawn healthy, green, and beautiful year-round with our comprehensive lawn care services. From regular mowing to complete lawn management programs."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for a Healthier, Greener Lawn?"
      ctaDescription="Let our lawn care experts create a customized maintenance program that keeps your grass looking its best through every Texas season."
    >
      {/* Lawn Care Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            Comprehensive Lawn Care Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Mowing & Edging</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Professional mowing patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Precision edge trimming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Proper height adjustment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Clipping cleanup</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Fertilization</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Custom blend formulas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Seasonal applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Slow-release nutrients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Soil-specific treatments</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Weed Control</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Pre-emergent barriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Targeted spot treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Broadleaf weed control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Grassy weed prevention</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Aeration</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Core aeration service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Compaction relief</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Improved water absorption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Enhanced root growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Pest Control</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Grub prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Chinch bug treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Fire ant control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Disease prevention</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Seasonal Services</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Spring scalping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Fall overseeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Leaf removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={16} />
                  <span>Winter preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grass Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
            San Antonio Grass Types We Maintain
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">St. Augustine Grass</h3>
              <p className="text-gray-600 mb-4">
                The most popular choice for San Antonio lawns, known for its thick, carpet-like appearance and shade tolerance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Excellent heat tolerance</li>
                <li>• Good shade tolerance</li>
                <li>• Weekly mowing needed</li>
                <li>• Higher water requirements</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Bermuda Grass</h3>
              <p className="text-gray-600 mb-4">
                Durable and drought-tolerant, perfect for high-traffic areas and full sun locations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Superior drought tolerance</li>
                <li>• Rapid growth and recovery</li>
                <li>• Requires full sun</li>
                <li>• Frequent mowing needed</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Zoysia Grass</h3>
              <p className="text-gray-600 mb-4">
                Dense, slow-growing grass that forms a beautiful lawn with less maintenance once established.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Low maintenance once established</li>
                <li>• Good drought resistance</li>
                <li>• Dense growth pattern</li>
                <li>• Slower to establish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Care Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Why Professional Lawn Care Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Expert Knowledge</h3>
              <p className="text-gray-600 mb-4">
                Our technicians understand San Antonio's unique climate challenges and know exactly what your lawn needs 
                throughout the year. From proper mowing heights to targeted treatments, we ensure optimal lawn health.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-600 mb-4 mt-6">Time Savings</h3>
              <p className="text-gray-600">
                Spend your weekends enjoying your lawn instead of working on it. Our regular service schedule ensures 
                your grass always looks its best without the hassle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Professional Equipment</h3>
              <p className="text-gray-600 mb-4">
                Commercial-grade mowers and equipment provide superior results compared to residential tools. 
                Our well-maintained equipment ensures clean cuts and professional results every time.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-600 mb-4 mt-6">Consistent Results</h3>
              <p className="text-gray-600">
                Regular professional care prevents problems before they start. We maintain consistent schedules 
                and apply treatments at the optimal times for maximum effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

export default LawnCareServicesPage;