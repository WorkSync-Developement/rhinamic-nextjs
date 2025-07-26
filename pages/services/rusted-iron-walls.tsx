import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const RustedIronWalls = () => {
  const serviceFeatures = [
    {
      title: "Unique Aesthetic Appeal",
      description: "Create stunning visual impact with naturally rusted iron that develops beautiful patina over time."
    },
    {
      title: "Extreme Durability",
      description: "Weathering steel designed to withstand San Antonio's climate while developing protective rust layer."
    },
    {
      title: "Low Maintenance",
      description: "Minimal upkeep required as the rust layer protects the steel and creates desired aesthetic."
    },
    {
      title: "Custom Design",
      description: "Tailored designs to complement your landscape architecture and create unique focal points."
    },
    {
      title: "Privacy Solutions",
      description: "Effective privacy screening while maintaining artistic appeal and natural light filtration."
    },
    {
      title: "Property Value",
      description: "Distinctive architectural feature that enhances property value and creates memorable landscape design."
    }
  ];

  const plans = [
    {
      name: "Basic Feature Wall",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Up to 50 sq. ft. wall",
        "Standard weathering steel",
        "Simple design",
        "Basic installation"
      ],
      description: "Perfect for creating unique focal points in smaller landscapes.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Feature Wall",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "50-200 sq. ft. wall",
        "Premium weathering steel",
        "Custom design elements",
        "Professional installation"
      ],
      description: "Enhanced design with custom features and premium materials.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Iron Wall",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "200+ sq. ft. wall",
        "Premium materials",
        "Complex custom design",
        "Full installation service"
      ],
      description: "Fully customized rusted iron walls with unique design elements.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Inspect for winter damage",
        "Clean with mild detergent",
        "Check mounting hardware",
        "Monitor rust development"
      ]
    },
    {
      season: "Summer",
      items: [
        "Regular cleaning as needed",
        "Check for heat expansion",
        "Inspect mounting points",
        "Maintain desired appearance"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove debris buildup",
        "Check for weathering issues",
        "Inspect structural integrity",
        "Prepare for winter"
      ]
    },
    {
      season: "Winter",
      items: [
        "Minimal maintenance needed",
        "Check for storm damage",
        "Monitor rust patina",
        "Plan spring touch-ups"
      ]
    }
  ];

  const faq = [
    {
      question: "What is weathering steel?",
      answer: "Weathering steel (Corten steel) is designed to develop a protective rust layer that prevents deeper corrosion while creating beautiful patina. It's specifically engineered for outdoor use."
    },
    {
      question: "Will the rust stain surrounding areas?",
      answer: "Initially, some rust runoff may occur. We use proper installation techniques and can add protective measures to minimize staining on adjacent surfaces during the initial weathering period."
    },
    {
      question: "How long does the rusting process take?",
      answer: "The initial rust patina develops over 6-12 months in San Antonio's climate. The color continues to deepen and stabilize over 2-3 years for the final appearance."
    },
    {
      question: "Is rusted iron safe for residential use?",
      answer: "Yes, once the protective patina forms, weathering steel is stable and safe. The rust layer actually protects the steel underneath while creating the desired aesthetic."
    },
    {
      question: "How much does a rusted iron wall cost?",
      answer: "Rusted iron wall costs range from $25-75 per square foot depending on size, design complexity, and installation requirements. We provide detailed quotes after consultation."
    }
  ];

  return (
    <ServicesLayout
      title="Rusted Iron Walls"
      description="Professional rusted iron wall installation in San Antonio, TX. Create stunning landscape features with weathering steel that develops beautiful patina over time."
      heroTitle="Rusted Iron Wall Installation"
      heroDescription="Transform your landscape with stunning rusted iron walls. Custom weathering steel installations that create unique focal points and develop beautiful patina over time in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Add Unique Architectural Interest?"
      ctaDescription="Get professional rusted iron wall installation in San Antonio. Contact us for a free quote and create stunning landscape features with weathering steel."
    />
  );
};

export default RustedIronWalls;
