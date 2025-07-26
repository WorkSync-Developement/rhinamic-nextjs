import { CheckCircle, Palette, Users, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ServicesLayout from "../../components/layout/ServicesLayout";
import ServiceProjects from "../../components/services/ServiceProjects";

export default function LandscapeDesign() {
  const serviceFeatures = [
    {
      title: "Site Analysis & Consultation",
      description: "We assess your soil, drainage, sun exposure, and existing features to understand what works best for your property."
    },
    {
      title: "Custom Design Plans",
      description: "Detailed layout showing plant placement, hardscape features, and how everything connects to create your ideal outdoor space."
    },
    {
      title: "Native Plant Selection",
      description: "Plants that thrive in San Antonio's climate, require less water, and provide year-round beauty with minimal maintenance."
    },
    {
      title: "Phased Implementation Plan",
      description: "Strategic timeline that fits your budget, with clear priorities so you can start enjoying results now and expand later."
    },
    {
      title: "Hardscape Integration",
      description: "Patios, walkways, retaining walls, and outdoor features that complement your landscape and enhance usability."
    },
    {
      title: "Ongoing Support",
      description: "We're here after installation with maintenance guidance and adjustments as your landscape matures."
    }
  ];

  const plans = [
    {
      name: "Basic Design",
      icon: <Palette className="w-8 h-8 text-green-600" />,
      description: "Perfect for straightforward projects",
      features: [
        "Site analysis & measurements",
        "2D design concept",
        "Plant selection guide",
        "Basic material recommendations"
      ]
    },
    {
      name: "Premium Design",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      description: "Comprehensive landscape planning",
      highlight: true,
      features: [
        "All Basic Design features",
        "3D renderings",
        "Detailed planting plan",
        "Material specifications",
        "Lighting design"
      ]
    },
    {
      name: "Elite Design",
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      description: "Complete outdoor living solution",
      features: [
        "All Premium Design features",
        "Outdoor kitchen/entertainment design",
        "Water feature integration",
        "Project management",
        "Seasonal maintenance plan"
      ]
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Plant new flowers and shrubs",
        "Apply pre-emergent weed control",
        "Fertilize for healthy growth"
      ]
    },
    {
      season: "Summer",
      items: [
        "Deep watering schedule",
        "Mulch refresh",
        "Pest and disease monitoring"
      ]
    },
    {
      season: "Fall",
      items: [
        "Plant spring-blooming bulbs",
        "Aerate and overseed lawn",
        "Winterize irrigation system"
      ]
    },
    {
      season: "Winter",
      items: [
        "Prune dormant plants",
        "Protect sensitive plants",
        "Plan next season's updates"
      ]
    }
  ];

  const faq = [
    {
      question: "How long does the design process take?",
      answer: "Most residential designs take 2-4 weeks from initial consultation to final plan, depending on the project's complexity and our current schedule."
    },
    {
      question: "Do you help with plant selection and sourcing?",
      answer: "Yes, we provide detailed plant lists with local nursery recommendations and can even handle plant procurement and installation."
    },
    {
      question: "What's the difference between a landscape designer and architect?",
      answer: "Landscape architects typically handle larger, more complex projects requiring structural engineering, while designers focus on residential and small commercial spaces with an emphasis on plants and outdoor living areas."
    }
  ];

  return (
    <ServicesLayout
      title="Professional Landscape Design"
      description="Expert landscape design services in San Antonio, TX. Custom outdoor designs that fit your lifestyle, budget, and Texas climate. 41+ years experience."
      heroTitle="Professional Landscape Design"
      heroDescription="Transform your San Antonio property with custom landscape design that works with Texas climate, fits your lifestyle, and reflects your vision. From concept to reality—we build what matters to you."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Transform Your Outdoor Space?"
      ctaDescription="Let's discuss your landscape design vision. Whether you're starting from scratch or enhancing existing features, we'll create a plan that works for your property, lifestyle, and budget."
    >

      {/* Custom Content Section - Design Process */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Design Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">1. Consultation</h3>
              <p className="text-gray-700">
                We start with a conversation about your vision, challenges, and how you want to use your outdoor space. 
                Every great design begins with understanding your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">2. Design</h3>
              <p className="text-gray-700">
                Collaborative design process where we create and refine plans together. We'll walk through options, 
                make adjustments, and ensure the design fits your lifestyle and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">3. Implementation</h3>
              <p className="text-gray-700">
                Phased installation plan with smart priorities. Start enjoying your space now with the most impactful 
                elements, then expand when it makes sense for your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-green-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Rhinamic for Landscape Design</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4">41+ Years of San Antonio Experience</h3>
              <p className="text-gray-700 mb-6">
                We know what works in South Texas. From scorching summers to occasional freezes, our designs account 
                for San Antonio's unique climate challenges and opportunities.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Family Craftmanship</h3>
              <p className="text-gray-700 mb-6">
                Four generations of builders, with deep experience in concrete, masonry, carpentry, and garden design. 
                That means more creative, custom options—whether it's a stone patio, outdoor kitchen, or native plant garden.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Relationship-Focused</h3>
              <p className="text-gray-700">
                Most of our work comes from referrals because we focus on long-term relationships over quick wins. 
                When you recommend us, you're staking your name on our work—and we take that seriously.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-purple-900">Local San Antonio Focus</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Understanding of local soil conditions and drainage challenges</li>
                <li>• Native and adapted plant expertise for Texas climate</li>
                <li>• Knowledge of HOA requirements and city regulations</li>
                <li>• Drought-tolerant designs that reduce water usage</li>
                <li>• Plants that provide year-round interest in our growing zone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <ServiceProjects serviceName="Landscape Design" />

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-purple-900 text-white">
        <div className="container-custom max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your landscape design vision. Whether you're starting from scratch or enhancing existing 
            features, we'll create a plan that works for your property, lifestyle, and budget.
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
              Send Message
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
    </ServicesLayout>
  );
}