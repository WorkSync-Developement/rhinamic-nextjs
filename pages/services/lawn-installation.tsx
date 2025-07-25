import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const LawnInstallation = () => {
  const serviceFeatures = [
    {
      title: "Professional Soil Preparation",
      description: "Complete soil analysis and preparation including grading, amendment, and compaction for optimal grass growth."
    },
    {
      title: "Premium Grass Selection",
      description: "Choose from St. Augustine, Bermuda, Zoysia, or Buffalo grass varieties selected for San Antonio's climate and your specific needs."
    },
    {
      title: "Expert Installation",
      description: "Professional sod installation with proper techniques for immediate beauty and long-term establishment."
    },
    {
      title: "Irrigation Integration",
      description: "Complete irrigation system installation or modification to ensure your new lawn receives proper watering from day one."
    },
    {
      title: "Starter Fertilization",
      description: "Professional-grade starter fertilizer application to promote rapid root development and healthy establishment."
    },
    {
      title: "Maintenance Guidance",
      description: "Detailed care instructions and follow-up support to ensure your new lawn thrives in its first critical months."
    }
  ];

  const plans = [
    {
      name: "Basic Lawn",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Up to 2,000 sq. ft.",
        "Standard sod installation",
        "Basic soil prep",
        "Starter fertilizer"
      ],
      description: "Perfect for small yards and budget-conscious homeowners.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Lawn",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "2,000-5,000 sq. ft.",
        "Premium sod varieties",
        "Complete soil prep",
        "Irrigation setup"
      ],
      description: "Enhanced installation with premium grass and complete preparation.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Lawn",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "5,000+ sq. ft.",
        "Custom grass selection",
        "Full landscape prep",
        "Complete irrigation"
      ],
      description: "Ultimate lawn installation with custom solutions and premium features.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Begin regular mowing",
        "Apply spring fertilizer",
        "Monitor for weeds",
        "Adjust irrigation schedule"
      ]
    },
    {
      season: "Summer",
      items: [
        "Increase watering frequency",
        "Mow at proper height",
        "Watch for heat stress",
        "Apply summer fertilizer"
      ]
    },
    {
      season: "Fall",
      items: [
        "Reduce watering frequency",
        "Apply winter fertilizer",
        "Continue mowing as needed",
        "Prepare for winter dormancy"
      ]
    },
    {
      season: "Winter",
      items: [
        "Minimal watering needed",
        "Plan spring maintenance",
        "Monitor for winter damage",
        "Schedule spring services"
      ]
    }
  ];

  const faq = [
    {
      question: "When is the best time to install a new lawn in San Antonio?",
      answer: "The best time for lawn installation in San Antonio is spring (March-May) or fall (September-November) when temperatures are moderate and rainfall is more consistent."
    },
    {
      question: "How long does it take for new sod to establish?",
      answer: "New sod typically takes 2-3 weeks to establish initial roots and 4-6 weeks for complete establishment. During this time, proper watering is critical."
    },
    {
      question: "What's the best grass type for San Antonio?",
      answer: "St. Augustine is popular for shade tolerance, Bermuda for high traffic areas, Zoysia for premium appearance, and Buffalo for low water needs. We'll recommend the best for your conditions."
    },
    {
      question: "How much does lawn installation cost?",
      answer: "Lawn installation costs range from $1.50-3.50 per square foot including sod, soil prep, and starter fertilizer. Final cost depends on grass type and site conditions."
    },
    {
      question: "Do I need to water new sod daily?",
      answer: "Yes, new sod requires daily watering for the first 2 weeks, then gradually reducing frequency. We'll provide a detailed watering schedule for your specific grass type."
    }
  ];

  return (
    <ServicesLayout
      title="Lawn Installation"
      description="Professional lawn installation in San Antonio, TX. Expert sod installation with premium grass varieties, soil preparation, and irrigation setup for beautiful, healthy lawns."
      heroTitle="Professional Lawn Installation"
      heroDescription="Transform your property with expert lawn installation services. Professional sod installation, premium grass varieties, complete soil preparation, and irrigation setup for beautiful, healthy lawns in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready for a Beautiful New Lawn?"
      ctaDescription="Get professional lawn installation services in San Antonio. Contact us for a free quote and transform your property with a lush, healthy lawn."
    />
  );
};

export default LawnInstallation;
