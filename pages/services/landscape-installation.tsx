import { CheckCircle, Wrench, Shield, Truck, Clock, Phone } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

export default function LandscapeInstallation() {
  const serviceFeatures = [
    {
      title: "Trees & Plants",
      description: "Native and adapted species, properly planted with the right soil amendments and spacing for long-term success in San Antonio."
    },
    {
      title: "Sod & Lawn Installation",
      description: "Quality sod installation with proper soil preparation, grading, and establishment care for instant curb appeal."
    },
    {
      title: "Irrigation Systems",
      description: "Efficient sprinkler and drip irrigation systems designed for water conservation and optimal plant health."
    },
    {
      title: "Mulching & Edging",
      description: "Professional mulch installation and clean edging that enhances plant health and creates polished, finished look."
    },
    {
      title: "Hardscape Features",
      description: "Patios, walkways, retaining walls, and outdoor kitchens built with quality materials and expert craftsmanship."
    },
    {
      title: "Landscape Lighting",
      description: "Low-voltage lighting systems that highlight your landscape's best features and extend outdoor enjoyment into the evening."
    },
    {
      title: "Drainage Solutions",
      description: "French drains, grading, and other drainage improvements to protect your landscape and foundation from water issues."
    },
    {
      title: "Xeriscaping",
      description: "Water-wise landscapes featuring drought-tolerant plants, efficient irrigation, and beautiful rock features."
    }
  ];

  const plans = [
    {
      name: "Basic Installation",
      icon: <Truck className="w-8 h-8 text-green-600" />,
      description: "Perfect for small projects and updates",
      features: [
        "Plant installation",
        "Basic soil prep",
        "Mulch application",
        "Initial watering"
      ]
    },
    {
      name: "Complete Installation",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      description: "Full landscape transformation",
      highlight: true,
      features: [
        "All Basic services",
        "Irrigation installation",
        "Hardscape features",
        "Landscape lighting",
        "90-day plant warranty"
      ]
    },
    {
      name: "Premium Installation",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      description: "Luxury landscape installation",
      features: [
        "All Complete services",
        "Smart irrigation systems",
        "Premium materials",
        "1-year plant warranty",
        "Maintenance plan included"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Ideal planting season",
        "Soil preparation",
        "New plant establishment"
      ]
    },
    {
      season: "Summer",
      items: [
        "Early morning installations",
        "Extra watering care",
        "Heat stress prevention"
      ]
    },
    {
      season: "Fall",
      items: [
        "Perfect for tree planting",
        "Root establishment time",
        "Winter prep included"
      ]
    },
    {
      season: "Winter",
      items: [
        "Dormant season planting",
        "Hardscape focus",
        "Spring planning"
      ]
    }
  ];

  const faq = [
    {
      question: "How long does landscape installation take?",
      answer: "Small installations (plants, sod) take 1-2 days. Medium projects with irrigation take 3-5 days. Large full landscape installations typically require 1-2 weeks depending on scope."
    },
    {
      question: "What's included in your installation warranty?",
      answer: "We provide a 90-day plant warranty with our Complete Installation package and a 1-year warranty with Premium Installation. This covers plant replacement if proper care instructions are followed."
    },
    {
      question: "When is the best time for landscape installation?",
      answer: "Spring and fall are ideal for most plantings in San Antonio. We work year-round but schedule installations to avoid extreme heat or freeze periods for optimal plant establishment."
    }
  ];

  return (
    <ServicesLayout
      title="Expert Landscape Installation"
      description="Professional landscape installation services in San Antonio, TX. Expert plant installation, hardscaping, and irrigation for lasting beauty. 41+ years experience."
      heroTitle="Professional Landscape Installation"
      heroDescription="Expert installation of landscapes, plants, and outdoor features built to last in San Antonio's climate. From plants and irrigation to hardscapes and lighting—we bring your vision to life with lasting quality."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for Professional Installation?"
      ctaDescription="Whether you have design plans ready or need help with the design process, we'll handle every detail of your landscape installation with the care and expertise your property deserves."
    >
      {/* Our Installation Process */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Site Preparation</h3>
              <p className="text-gray-700">
                Proper soil testing, grading, and amendments. We prepare the foundation for success before any planting begins.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Infrastructure First</h3>
              <p className="text-gray-700">
                Irrigation, lighting, and hardscape elements go in first, so we're not disturbing plants later.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Expert Planting</h3>
              <p className="text-gray-700">
                Strategic placement, proper depth, and soil amendments for each plant's specific needs and growth pattern.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Finishing & Care</h3>
              <p className="text-gray-700">
                Mulching, initial watering schedule, and establishment care instructions to ensure healthy growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Installation Lasts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Our Installations Last</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Wrench className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Quality Materials</h3>
                <p className="text-gray-700">
                  We source healthy plants from reputable nurseries and use professional-grade irrigation components, 
                  soil amendments, and hardscape materials built to last in Texas weather.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Shield className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Expert Technique</h3>
                <p className="text-gray-700">
                  Four generations of building experience means we know how to do things right the first time. 
                  Proper installation techniques prevent future problems and ensure long-term success.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Truck className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Local Knowledge</h3>
                <p className="text-gray-700">
                  41+ years in San Antonio means we understand local soil conditions, drainage challenges, 
                  and what plants thrive in our specific climate and growing zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & What to Expect */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Installation Timeline & What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Project Size Matters</h3>
                    <p className="text-gray-700">
                      Small installations (plants, sod): 1-2 days<br/>
                      Medium projects (with irrigation): 3-5 days<br/>
                      Large installations (full landscape): 1-2 weeks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Weather Considerations</h3>
                    <p className="text-gray-700">
                      We time installations for optimal plant establishment, avoiding extreme heat or freeze periods 
                      when possible. Your landscape's long-term success is our priority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <Shield className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Clean, Professional Work</h3>
                    <p className="text-gray-700">
                      We protect existing features, clean up daily, and leave your property better than we found it. 
                      Professional work means professional cleanup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Establishment Period</h3>
              <p className="text-gray-700 mb-4">
                Your new landscape needs time to establish. We provide detailed care instructions and are available 
                for questions during the critical first few months.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>First 2 weeks:</strong> Daily watering and monitoring</li>
                <li>• <strong>Months 1-3:</strong> Regular watering, mulch check, minor adjustments</li>
                <li>• <strong>Months 3-12:</strong> Gradual reduction in watering as roots establish</li>
                <li>• <strong>Year 2+:</strong> Mature landscape requiring minimal intervention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
}