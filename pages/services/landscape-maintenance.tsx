import { CheckCircle, Calendar, Scissors, Droplets, Shield, Phone } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";
import Link from "next/link";

const serviceFeatures = [
  {
    title: "Lawn Care & Mowing",
    description: "Regular mowing, edging, and trimming to keep your lawn healthy and looking its best throughout the growing season."
  },
  {
    title: "Tree & Shrub Pruning",
    description: "Expert pruning to maintain plant health, control growth, and enhance the natural shape and beauty of your landscape."
  },
  {
    title: "Fertilization & Soil Care",
    description: "Seasonal fertilization programs and soil amendments to ensure your plants have the nutrients they need to thrive."
  },
  {
    title: "Weed & Pest Control",
    description: "Integrated approach to weed prevention and pest management that protects your landscape without harming beneficial insects."
  },
  {
    title: "Irrigation Maintenance",
    description: "Regular inspection, adjustment, and repair of irrigation systems to ensure efficient water use and healthy plant growth."
  },
  {
    title: "Mulching & Bed Care",
    description: "Fresh mulch application, bed weeding, and plant bed maintenance to conserve moisture and suppress weeds."
  }
];

const plans = [
  {
    name: "Basic Care",
    icon: <Calendar className="w-8 h-8 text-green-600" />,
    description: "Perfect for low-maintenance landscapes and budget-conscious homeowners",
    features: [
      "Monthly lawn mowing & edging",
      "Seasonal pruning",
      "Basic weed control",
      "Spring & fall cleanup"
    ]
  },
  {
    name: "Complete Care",
    icon: <Scissors className="w-8 h-8 text-purple-600" />,
    description: "Comprehensive care for beautiful landscapes year-round",
    highlight: true,
    features: [
      "Bi-weekly lawn care",
      "Regular pruning & shaping",
      "Fertilization program",
      "Mulch refresh",
      "Irrigation adjustments"
    ]
  },
  {
    name: "Premium Care",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    description: "Exceptional care for the most discerning homeowners",
    features: [
      "Weekly lawn maintenance",
      "Expert plant health care",
      "Integrated pest management",
      "Soil testing & amendments",
      "Priority service response"
    ]
  }
];

const seasonalCare = [
  {
    season: "Spring (Mar-May)",
    icon: <Calendar className="w-6 h-6 text-green-600" />,
    items: [
      "Pre-emergent weed control",
      "Spring pruning after freeze danger",
      "Irrigation system startup",
      "Fresh mulch application"
    ]
  },
  {
    season: "Summer (Jun-Aug)",
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    items: [
      "Increased watering schedules",
      "Heat stress monitoring",
      "Regular mowing (higher blade)",
      "Drought management"
    ]
  },
  {
    season: "Fall (Sep-Nov)",
    icon: <Scissors className="w-6 h-6 text-orange-600" />,
    items: [
      "Fall fertilization",
      "Leaf removal",
      "Tree & shrub pruning",
      "Irrigation winterization"
    ]
  },
  {
    season: "Winter (Dec-Feb)",
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    items: [
      "Freeze protection measures",
      "Dormant season pruning",
      "Planning for spring projects",
      "Equipment maintenance"
    ]
  }
];

const faq = [
  {
    question: "How often should I have my landscape maintained?",
    answer: "Most residential properties benefit from weekly or bi-weekly maintenance during peak growing seasons (spring and fall) and less frequent service during winter months. We'll assess your property and recommend a schedule that keeps your landscape looking its best year-round."
  },
  {
    question: "What's included in a typical maintenance visit?",
    answer: "Our maintenance visits include mowing, edging, blowing, bed maintenance, and a thorough property inspection. We'll also address any specific concerns you have and provide recommendations for keeping your landscape healthy and beautiful."
  },
  {
    question: "Do you offer one-time clean-up services?",
    answer: "Yes, we provide one-time clean-up services for properties that need immediate attention or for homeowners who prefer to handle regular maintenance themselves but need help with seasonal clean-ups or special projects."
  }
];

export default function LandscapeMaintenance() {
  return (
    <ServicesLayout
      title="Landscape Maintenance Services | San Antonio, TX | Rhinamic"
      description="Professional landscape maintenance in San Antonio, TX. Keep your outdoor space healthy and beautiful year-round with our comprehensive maintenance services."
      heroTitle="Professional Landscape Maintenance"
      heroDescription="Keep your San Antonio landscape healthy, beautiful, and thriving year-round. From regular maintenance to seasonal care, we protect your investment and enhance your property's curb appeal."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Protect Your Landscape Investment"
      ctaDescription="Regular maintenance keeps your landscape healthy, beautiful, and valuable. Let us create a custom maintenance plan that fits your property's needs and your budget."
    >

      {/* Why Choose Our Maintenance */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Why Choose Rhinamic for Maintenance</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Local Climate Expertise</h3>
              <p className="text-gray-700 mb-6">
                41+ years in San Antonio means we understand the unique challenges of Texas climate—from scorching 
                summers to unexpected freezes. Our maintenance programs are specifically designed for South Texas conditions.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Relationship-Based Service</h3>
              <p className="text-gray-700 mb-6">
                We're not just maintaining your landscape—we're protecting your investment. Most of our maintenance 
                clients have been with us for years because we treat their property like our own.
              </p>
              
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Proactive Approach</h3>
              <p className="text-gray-700">
                Instead of just reacting to problems, we prevent them. Our experienced team spots potential issues 
                early and addresses them before they become expensive problems.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">What Sets Us Apart</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Water Conservation Focus</h4>
                    <p className="text-gray-700 text-sm">Smart irrigation management and drought-resistant plant care that saves water and money.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmentally Responsible</h4>
                    <p className="text-gray-700 text-sm">Integrated pest management and organic practices that protect beneficial insects and soil health.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Consistent, Reliable Service</h4>
                    <p className="text-gray-700 text-sm">Regular schedules you can count on, with advance notice of any changes or weather delays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/services/lawn-care-services"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Lawn Care Services</h3>
              <p className="text-gray-600">Specialized lawn care for healthy, green grass year-round</p>
            </Link>
            <Link 
              href="/services/landscape-installation"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Landscape Installation</h3>
              <p className="text-gray-600">Professional installation that sets up your landscape for success</p>
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
    </ServicesLayout>
  );
}