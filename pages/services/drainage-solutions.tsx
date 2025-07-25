import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const DrainageSolutions = () => {
  const serviceFeatures = [
    {
      title: "Flood Prevention",
      description: "Professional drainage systems prevent flooding and water damage to your home and landscape during heavy Texas rains."
    },
    {
      title: "Erosion Control",
      description: "Effective solutions to prevent soil erosion and maintain the integrity of your landscape and property."
    },
    {
      title: "Foundation Protection",
      description: "Proper drainage protects your home's foundation from water damage and costly structural issues."
    },
    {
      title: "Landscape Preservation",
      description: "Maintain healthy plants and prevent waterlogged soil that can damage your landscape investment."
    },
    {
      title: "Mosquito Reduction",
      description: "Eliminate standing water that creates breeding grounds for mosquitoes and other pests."
    },
    {
      title: "Property Value Protection",
      description: "Professional drainage solutions protect your property value and prevent costly water damage repairs."
    }
  ];

  const plans = [
    {
      name: "Basic Drainage",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Simple grading solutions",
        "Basic drainage installation",
        "Problem area assessment",
        "Standard materials"
      ],
      description: "Essential drainage solutions for minor water issues and basic landscape protection.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Comprehensive Drainage",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "Complete property assessment",
        "Multiple drainage systems",
        "French drains and catch basins",
        "Professional installation"
      ],
      description: "Complete drainage solutions for moderate to severe water management issues.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Drainage System",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "Complex water management",
        "Custom engineered solutions",
        "Premium materials",
        "Full system integration"
      ],
      description: "Advanced drainage systems for challenging sites and comprehensive water management.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Inspect after winter rains",
        "Clean all drainage systems",
        "Check for clogs or damage",
        "Test system functionality"
      ]
    },
    {
      season: "Summer",
      items: [
        "Monitor during heavy rains",
        "Clear debris from grates",
        "Check for erosion issues",
        "Maintain drainage channels"
      ]
    },
    {
      season: "Fall",
      items: [
        "Clear leaves from systems",
        "Inspect before winter",
        "Check for settling issues",
        "Prepare for winter rains"
      ]
    },
    {
      season: "Winter",
      items: [
        "Monitor during storms",
        "Check for ice damage",
        "Clear blocked systems",
        "Plan spring maintenance"
      ]
    }
  ];

  const faq = [
    {
      question: "What are the signs I need drainage solutions?",
      answer: "Signs include standing water, soggy soil, foundation water stains, erosion, and water pooling near structures. We provide free assessments to identify drainage issues."
    },
    {
      question: "What types of drainage systems do you install?",
      answer: "We install French drains, surface drains, catch basins, channel drains, dry creek beds, and grading solutions. Each system is customized to your specific drainage needs."
    },
    {
      question: "How long does drainage installation take?",
      answer: "Most residential drainage projects take 1-3 days depending on scope and complexity. Larger or more complex systems may require additional time."
    },
    {
      question: "How much does drainage installation cost?",
      answer: "Drainage costs range from $15-35 per linear foot for basic systems to $50+ per foot for complex solutions. We provide detailed quotes after site assessment."
    },
    {
      question: "Do drainage systems require maintenance?",
      answer: "Yes, annual maintenance includes cleaning grates, checking for clogs, and ensuring proper flow. We offer maintenance services to keep your system working effectively."
    }
  ];

  return (
    <ServicesLayout
      title="Drainage Solutions"
      description="Professional drainage solutions in San Antonio, TX. Prevent flooding, erosion, and water damage with expert drainage system design and installation."
      heroTitle="Professional Drainage Solutions"
      heroDescription="Protect your property with expert drainage solutions. Professional design and installation of French drains, surface drainage, and water management systems to prevent flooding and erosion in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Solve Your Drainage Problems?"
      ctaDescription="Get professional drainage solutions for your San Antonio property. Contact us for a free assessment and custom drainage system design."
    />
  );
};

export default DrainageSolutions;
