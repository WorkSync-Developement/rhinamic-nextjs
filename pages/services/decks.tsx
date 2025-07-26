import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const Decks = () => {
  const serviceFeatures = [
    {
      title: "Custom Design",
      description: "Tailored deck designs that complement your home's architecture and maximize your outdoor living space potential."
    },
    {
      title: "Quality Materials",
      description: "Premium wood and composite materials selected for durability, beauty, and low maintenance in San Antonio's climate."
    },
    {
      title: "Expert Craftsmanship",
      description: "Professional installation with attention to detail, ensuring structural integrity and beautiful finishing touches."
    },
    {
      title: "Permit Handling",
      description: "Complete permit acquisition and compliance with local building codes and HOA requirements for hassle-free construction."
    },
    {
      title: "Warranty Protection",
      description: "Comprehensive warranties on materials and workmanship, giving you peace of mind for years to come."
    },
    {
      title: "Increased Home Value",
      description: "Boost your property value with a professionally designed and installed deck that expands your living space."
    }
  ];

  const plans = [
    {
      name: "Basic Deck",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Up to 200 sq. ft. deck",
        "Pressure-treated lumber",
        "Standard railing",
        "Basic design"
      ],
      description: "Perfect for creating simple, functional outdoor spaces on a budget.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Deck",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "200-500 sq. ft. deck",
        "Composite or hardwood",
        "Custom railing design",
        "Built-in features"
      ],
      description: "Enhanced materials and design for a beautiful, low-maintenance deck.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Deck",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "500+ sq. ft. deck",
        "Premium composite materials",
        "Multi-level design",
        "Custom features"
      ],
      description: "Ultimate outdoor living with premium materials and custom design elements.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Inspect deck for winter damage",
        "Clean thoroughly with deck cleaner",
        "Check for loose boards or nails",
        "Apply stain/sealer if needed"
      ]
    },
    {
      season: "Summer",
      items: [
        "Regular sweeping and cleaning",
        "Check for UV damage",
        "Clean outdoor furniture",
        "Inspect railings and stairs"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove leaves and debris",
        "Deep clean before winter",
        "Check drainage around deck",
        "Store or cover furniture"
      ]
    },
    {
      season: "Winter",
      items: [
        "Remove snow carefully",
        "Check for ice damage",
        "Inspect for structural issues",
        "Plan spring maintenance"
      ]
    }
  ];

  const faq = [
    {
      question: "How long does deck construction take?",
      answer: "Most residential deck projects take 1-3 weeks depending on size, complexity, and weather conditions. Permit approval may add additional time."
    },
    {
      question: "What's the difference between wood and composite decking?",
      answer: "Wood decking offers natural beauty at a lower cost but requires regular maintenance. Composite decking costs more upfront but is low-maintenance and lasts longer."
    },
    {
      question: "Do I need a permit for a deck in San Antonio?",
      answer: "Yes, most deck projects require permits. We handle the entire permit process, including drawings, submissions, and inspections to ensure compliance."
    },
    {
      question: "How much does a deck cost in San Antonio?",
      answer: "Deck costs range from $25-60 per square foot depending on materials, size, design complexity, and site conditions. We provide detailed quotes after consultation."
    },
    {
      question: "What's the best decking material for Texas weather?",
      answer: "Composite decking performs excellently in Texas heat and humidity. If choosing wood, cedar or pressure-treated pine are good options for our climate."
    }
  ];

  return (
    <ServicesLayout
      title="Deck Installation"
      description="Professional deck installation in San Antonio, TX. Custom wood and composite decks designed and built by expert craftsmen. Transform your outdoor living space."
      heroTitle="Custom Deck Installation"
      heroDescription="Create the perfect outdoor living space with custom deck installation. Expert craftsmanship, quality materials, and professional design for beautiful, durable decks in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Build Your Dream Deck?"
      ctaDescription="Get a free quote for your custom deck installation in San Antonio. Our expert team will design and build the perfect outdoor living space for your home."
    />
  );
};

export default Decks;
