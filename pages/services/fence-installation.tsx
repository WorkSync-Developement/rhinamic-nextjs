import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const FenceInstallation = () => {
  const serviceFeatures = [
    {
      title: "Privacy & Security",
      description: "Create secure boundaries and private outdoor spaces with professionally installed fencing solutions."
    },
    {
      title: "Curb Appeal Enhancement",
      description: "Beautiful fence designs that complement your home's architecture and increase property value."
    },
    {
      title: "Quality Materials",
      description: "Premium wood, vinyl, aluminum, and wrought iron materials selected for durability and beauty in Texas weather."
    },
    {
      title: "Professional Installation",
      description: "Expert installation with proper techniques for long-lasting, straight, and secure fence construction."
    },
    {
      title: "Permit & HOA Compliance",
      description: "Complete permit acquisition and HOA approval assistance for hassle-free fence installation."
    },
    {
      title: "Custom Design Options",
      description: "Tailored fence designs to match your specific needs, style preferences, and property requirements."
    }
  ];

  const plans = [
    {
      name: "Basic Fence",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Up to 100 linear feet",
        "Pressure-treated wood",
        "Standard 6-foot height",
        "Basic installation"
      ],
      description: "Affordable privacy fencing with quality materials and professional installation.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Fence",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "100-300 linear feet",
        "Cedar or vinyl construction",
        "Custom height options",
        "Enhanced design"
      ],
      description: "Upgraded materials and design for lasting beauty and enhanced property value.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Fence",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "300+ linear feet",
        "Premium materials",
        "Custom design & height",
        "Full customization"
      ],
      description: "Fully customized fencing solutions with premium materials and unique design elements.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Inspect for winter damage",
        "Clean fence thoroughly",
        "Check for loose boards/posts",
        "Apply stain/sealer if needed"
      ]
    },
    {
      season: "Summer",
      items: [
        "Monitor for UV damage",
        "Clean regularly",
        "Check gate hardware",
        "Trim vegetation away"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove leaves and debris",
        "Check for rot or damage",
        "Secure loose components",
        "Prepare for winter"
      ]
    },
    {
      season: "Winter",
      items: [
        "Inspect after storms",
        "Check for ice damage",
        "Plan spring maintenance",
        "Address any issues"
      ]
    }
  ];

  const faq = [
    {
      question: "Do I need a permit for fence installation in San Antonio?",
      answer: "Most fence installations require permits in San Antonio. We handle the entire permit process including applications, drawings, and inspections to ensure compliance with local codes."
    },
    {
      question: "What's the best fence material for Texas weather?",
      answer: "Cedar offers natural beauty and weather resistance. Vinyl provides maintenance-free durability. Metal options like aluminum or wrought iron offer security and longevity. We help you choose based on your needs."
    },
    {
      question: "How tall can my fence be in San Antonio?",
      answer: "Typically 6 feet for backyard fences and 4 feet for front yard fences, but this varies by neighborhood and HOA rules. We verify all restrictions during our consultation."
    },
    {
      question: "How long does fence installation take?",
      answer: "Most residential fence installations take 1-3 days depending on size and complexity. Permit approval may add 1-2 weeks to the timeline."
    },
    {
      question: "How much does fence installation cost?",
      answer: "Fence costs range from $15-45 per linear foot depending on material, height, and site conditions. We provide detailed quotes after site evaluation and material selection."
    }
  ];

  return (
    <ServicesLayout
      title="Fence Installation"
      description="Professional fence installation in San Antonio, TX. Custom wood, vinyl, and metal fences for privacy, security, and beauty. Expert craftsmanship and quality materials."
      heroTitle="Professional Fence Installation"
      heroDescription="Secure and beautify your property with expert fence installation. Custom designs, quality materials, and professional craftsmanship for beautiful, durable fences in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Secure and Beautify Your Property?"
      ctaDescription="Get professional fence installation services in San Antonio. Contact us for a free quote and transform your property with a custom fence solution."
    />
  );
};

export default FenceInstallation;
