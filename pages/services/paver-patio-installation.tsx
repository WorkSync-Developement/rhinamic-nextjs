import React from "react";
import { Home, Shield, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";
import ServiceProjects from "../../components/services/ServiceProjects";

const PaverPatioInstallation = () => {
  const serviceFeatures = [
    {
      title: "Durability & Longevity",
      description: "Quality pavers withstand Texas heat, freeze-thaw cycles, and heavy use for decades without cracking like concrete."
    },
    {
      title: "Design Flexibility",
      description: "Unlimited design possibilities with various colors, textures, sizes, and patterns to match your home's architecture."
    },
    {
      title: "Low Maintenance",
      description: "Easy to clean and maintain with minimal upkeep compared to wood decks or concrete slabs."
    },
    {
      title: "Increased Home Value",
      description: "Boost your property value with a beautiful, professionally installed patio that potential buyers will love."
    },
    {
      title: "Environmentally Friendly",
      description: "Permeable paver options allow water to drain naturally, reducing runoff and helping the environment."
    },
    {
      title: "Easy Repairs",
      description: "Individual pavers can be replaced if damaged without tearing out the entire patio, unlike concrete slabs."
    },
    {
      title: "Non-Slip Surface",
      description: "Textured pavers provide better traction when wet compared to concrete or tile, increasing safety around pools."
    },
    {
      title: "Year-Round Enjoyment",
      description: "Extend your living space outdoors and enjoy your patio throughout San Antonio's mild climate."
    }
  ];

  const plans = [
    {
      name: "Basic Patio",
      icon: <Home className="text-blue-500" size={24} />,
      features: [
        "Up to 200 sq. ft. installation",
        "Standard paver selection",
        "Basic pattern layout",
        "Essential drainage"
      ],
      description: "Perfect for creating simple, functional outdoor spaces.",
      highlight: false
    },
    {
      name: "Premium Patio",
      icon: <Shield className="text-green-500" size={24} />,
      features: [
        "200-500 sq. ft. installation",
        "Premium paver selection",
        "Custom pattern design",
        "Enhanced drainage system"
      ],
      description: "Upgrade to a more elaborate design with premium materials and features.",
      highlight: true
    },
    {
      name: "Custom Design",
      icon: <Wrench className="text-purple-500" size={24} />,
      features: [
        "500+ sq. ft. installation",
        "Luxury paver selection",
        "Complex custom design",
        "Integrated features"
      ],
      description: "The ultimate patio experience with high-end materials and custom features.",
      highlight: false
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Clean with pressure washer",
        "Check for winter damage",
        "Replace damaged pavers",
        "Apply new sand in joints"
      ]
    },
    {
      season: "Summer",
      items: [
        "Remove stains promptly",
        "Weed between pavers",
        "Check for settling",
        "Rinse patio regularly"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove leaves/debris",
        "Clean gutters above patio",
        "Seal pavers (if needed)",
        "Check drainage"
      ]
    },
    {
      season: "Winter",
      items: [
        "Remove snow carefully",
        "Avoid harsh de-icers",
        "Cover furniture",
        "Plan spring upgrades"
      ]
    }
  ];

  const faq = [
    {
      question: "How long does a paver patio installation take?",
      answer: "Most residential paver patio installations take 3-7 days depending on the size, design complexity, and site conditions."
    },
    {
      question: "Do paver patios require a lot of maintenance?",
      answer: "No, paver patios are relatively low-maintenance. Regular sweeping, occasional rinsing, and reapplying joint sand every few years is typically all that's needed."
    },
    {
      question: "How much do paver patios cost in San Antonio?",
      answer: "Paver patio costs range from $15-30 per square foot installed, depending on materials, design complexity, and site conditions."
    },
    {
      question: "Are pavers better than concrete for a patio?",
      answer: "In most cases, yes. Pavers offer greater durability, easier repairs, better drainage, more design options, and higher resale value than poured concrete."
    },
    {
      question: "How long will a properly installed paver patio last?",
      answer: "A professionally installed paver patio can last 25-50 years or more with proper maintenance, significantly longer than concrete alternatives."
    }
  ];
  
  return (
    <ServicesLayout
      title="Paver Patio Installation"
      description="Expert paver patio installation in San Antonio, TX. Custom outdoor living spaces with quality materials and professional craftsmanship. Transform your backyard."
      heroTitle="Professional Paver Patio Installation"
      heroDescription="Create the perfect outdoor living space with custom paver patios. Expert installation in San Antonio with quality materials and craftsmanship that withstands Texas weather and enhances your property value."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Transform Your Outdoor Space?"
      ctaDescription="Get a free quote for your custom paver patio installation in San Antonio. Our expert team will design and build the perfect outdoor living space for your home."
    >
      {/* Related Projects */}
      <ServiceProjects serviceName="Paver Patio Installation" />
    </ServicesLayout>
  );
};

export default PaverPatioInstallation;
