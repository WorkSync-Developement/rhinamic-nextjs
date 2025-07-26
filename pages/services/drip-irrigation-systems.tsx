import React from 'react';
import Link from 'next/link';
import ServicesLayout from '../../components/layout/ServicesLayout';
import { Droplet, Settings, Wrench, Zap, Sun, CloudRain, Cloud, Snowflake } from 'lucide-react';

const DripIrrigationSystemsPage = () => {
  const serviceFeatures = [
    {
      title: "Water-Efficient Technology",
      description: "Advanced drip irrigation technology that delivers water directly to plant root zones, reducing water usage by up to 50% compared to traditional sprinkler systems."
    },
    {
      title: "Custom System Design",
      description: "Tailored irrigation solutions designed specifically for your landscape's unique needs, plant types, and San Antonio's challenging growing conditions."
    },
    {
      title: "Smart Controller Integration",
      description: "Weather-based controllers and smart technology that automatically adjusts watering based on local weather conditions and soil moisture levels."
    },
    {
      title: "Water Conservation",
      description: "Significantly reduce water waste and comply with local water restrictions while maintaining a healthy, vibrant landscape."
    },
    {
      title: "Plant Health Optimization",
      description: "Consistent, precise watering promotes deeper root growth and healthier plants with reduced disease and weed problems."
    },
    {
      title: "Professional Installation",
      description: "Expert installation ensures optimal system performance, proper zoning, and long-term reliability for your landscape."
    }
  ];

  const plans = [
    {
      name: "Basic Drip System",
      icon: <Droplet className="w-8 h-8 text-purple-800" />,
      description: "Perfect for small gardens and simple landscapes",
      features: [
        "Single-zone system",
        "Basic timer control",
        "Standard emitters",
        "Above-ground installation"
      ]
    },
    {
      name: "Smart Drip System",
      icon: <Settings className="w-8 h-8 text-purple-800" />,
      description: "Advanced technology for optimal water management",
      highlight: true,
      features: [
        "Multi-zone control",
        "Wi-Fi enabled controller",
        "Weather-based adjustments",
        "Smartphone app control"
      ]
    },
    {
      name: "Complete Irrigation",
      icon: <Wrench className="w-8 h-8 text-purple-800" />,
      description: "Full-service solution for complex landscapes",
      features: [
        "Custom design & installation",
        "Smart controller with sensors",
        "Rainwater harvesting integration",
        "Annual maintenance included"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      icon: <Sun className="w-6 h-6" />,
      items: [
        "Inspect and clean system",
        "Adjust emitters for new growth",
        "Check for winter damage"
      ]
    },
    {
      season: "Summer",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Increase watering frequency",
        "Check for clogs and leaks",
        "Monitor soil moisture"
      ]
    },
    {
      season: "Fall",
      icon: <CloudRain className="w-6 h-6" />,
      items: [
        "Reduce watering schedule",
        "Drain and winterize system",
        "Protect above-ground components"
      ]
    },
    {
      season: "Winter",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        "System shutdown complete",
        "Plan spring upgrades",
        "Check for any needed repairs"
      ]
    }
  ];

  const faq = [
    {
      question: "How much water can I save with a drip system?",
      answer: "Drip irrigation can reduce water usage by 30-50% compared to traditional sprinkler systems by delivering water directly to plant roots with minimal evaporation or runoff."
    },
    {
      question: "Can drip irrigation work with my existing sprinkler system?",
      answer: "Yes, we can integrate drip irrigation zones into your existing system or convert appropriate areas to drip for more efficient watering of plant beds and garden areas."
    },
    {
      question: "How often should I run my drip system in San Antonio's climate?",
      answer: "During peak summer, most landscapes benefit from 2-3 watering sessions per week, while spring and fall may only need 1-2 times weekly. We'll program your system based on your specific landscape needs."
    }
  ];

  return (
    <ServicesLayout
      title="Drip Irrigation Systems | San Antonio, TX | Rhinamic"
      description="Professional drip irrigation system installation and repair in San Antonio. Save water and maintain a healthy landscape with our custom drip irrigation solutions."
      heroTitle="Drip Irrigation Systems"
      heroDescription="Efficient, water-saving irrigation solutions perfect for San Antonio's climate - deliver water precisely where plants need it while reducing waste and water bills."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Upgrade to Water-Efficient Irrigation"
      ctaDescription="Contact Rhinamic Landscape Design to design and install a custom drip irrigation system that saves water, reduces costs, and keeps your San Antonio landscape thriving."
    >

      {/* System Types Section */}
      <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
                Drip Irrigation System Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Surface Drip Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Above-ground drip lines perfect for vegetable gardens, flower beds, and container plantings with easy access for maintenance.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Easy installation and adjustment</li>
                    <li>• Visible system for monitoring</li>
                    <li>• Cost-effective option</li>
                    <li>• Quick repairs and modifications</li>
                    <li>• Ideal for annual plantings</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Subsurface Drip Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Underground installation that delivers water directly to root zones while maintaining clean landscape aesthetics.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Hidden, aesthetic installation</li>
                    <li>• Reduced evaporation losses</li>
                    <li>• Protection from damage</li>
                    <li>• Ideal for turf areas</li>
                    <li>• Long-term installation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Micro-Spray Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Low-volume spray systems that cover larger areas while maintaining water efficiency for shrubs and groundcovers.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Larger coverage areas</li>
                    <li>• Adjustable spray patterns</li>
                    <li>• Ideal for shrub beds</li>
                    <li>• Reduced clogging issues</li>
                    <li>• Multiple head options</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Container Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized drip systems designed for container gardens, hanging baskets, and potted plant collections.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Individual container control</li>
                    <li>• Adjustable flow rates</li>
                    <li>• Self-watering capabilities</li>
                    <li>• Vacation watering solution</li>
                    <li>• Expandable design</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Tree & Shrub Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Deep watering systems designed specifically for established trees and large shrubs with extensive root systems.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Deep root zone watering</li>
                    <li>• Multiple emitter placement</li>
                    <li>• Slow, deep infiltration</li>
                    <li>• Drought stress prevention</li>
                    <li>• Mature plant support</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Smart Drip Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Technology-integrated systems with weather monitoring, soil sensors, and smartphone control for optimal automation.
                  </p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Weather-based adjustments</li>
                    <li>• Soil moisture monitoring</li>
                    <li>• Remote smartphone control</li>
                    <li>• Water usage tracking</li>
                    <li>• Automated scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
                System Components & Technology
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Controllers</h3>
                  <p className="text-gray-600 text-sm">
                    Smart controllers with weather sensors and programmable schedules
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Emitters</h3>
                  <p className="text-gray-600 text-sm">
                    Precision emitters with adjustable flow rates and pressure compensation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Valves</h3>
                  <p className="text-gray-600 text-sm">
                    High-quality valves for zone control and pressure regulation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Smart Controls</h3>
                  <p className="text-gray-600 text-sm">
                    Smartphone apps and Wi-Fi connectivity for remote system management
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
                Professional Installation Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-800">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Site Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Analyze landscape, water pressure, plant needs, and existing irrigation
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-800">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">System Design</h3>
                  <p className="text-gray-600 text-sm">
                    Create custom layout with zone planning and component selection
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-800">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Professional installation with quality components and proper connections
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-800">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Programming</h3>
                  <p className="text-gray-600 text-sm">
                    System setup, testing, and programming for optimal performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
                System Maintenance & Support
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Regular Maintenance</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Emitter cleaning and inspection</li>
                    <li>• Filter replacement and cleaning</li>
                    <li>• Line pressure testing</li>
                    <li>• Controller programming updates</li>
                    <li>• Seasonal system adjustments</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Troubleshooting</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Clogged emitter diagnosis</li>
                    <li>• Pressure problem identification</li>
                    <li>• Line break detection and repair</li>
                    <li>• Timer and controller issues</li>
                    <li>• Coverage optimization</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">System Upgrades</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Smart controller installation</li>
                    <li>• Additional zone expansion</li>
                    <li>• Sensor integration upgrades</li>
                    <li>• Efficiency improvements</li>
                    <li>• Technology updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-purple-900 mb-8">
                Perfect Applications for Drip Irrigation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Ideal Landscape Areas</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Vegetable and herb gardens</li>
                    <li>• Flower beds and perennial borders</li>
                    <li>• Shrub and foundation plantings</li>
                    <li>• Tree and large plant watering</li>
                    <li>• Container and raised bed gardens</li>
                    <li>• Native and drought-tolerant plants</li>
                    <li>• Steep slopes and challenging terrain</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">San Antonio Benefits</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Compliance with water restrictions</li>
                    <li>• Efficient use during hot summers</li>
                    <li>• Reduced evaporation in dry climate</li>
                    <li>• Support for native plant establishment</li>
                    <li>• Year-round consistent watering</li>
                    <li>• Protection from wind and heat</li>
                    <li>• Lower utility costs long-term</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
          <div className="container-custom max-w-4xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Upgrade to Water-Efficient Irrigation
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact Rhinamic Landscape Design to design and install a custom drip irrigation system that saves water, reduces costs, and keeps your San Antonio landscape thriving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
                >
                  Get System Quote
                </Link>
                <a
                  href="tel:2012544911"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  Call (201) 254-4911
                </a>
              </div>
            </div>
          </div>
      </section>
    </ServicesLayout>
  );
};

export default DripIrrigationSystemsPage;
