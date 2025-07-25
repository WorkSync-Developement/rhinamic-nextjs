import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const Cactus = () => {
  const serviceFeatures = [
    {
      title: "Drought Tolerance",
      description: "Cacti require minimal water, making them perfect for San Antonio's climate and water conservation efforts."
    },
    {
      title: "Low Maintenance",
      description: "Minimal care requirements including occasional watering and pruning, ideal for busy homeowners."
    },
    {
      title: "Unique Beauty",
      description: "Striking architectural forms and seasonal blooms that create stunning focal points in your landscape."
    },
    {
      title: "Year-Round Interest",
      description: "Evergreen structure provides visual interest throughout all seasons with minimal seasonal changes."
    },
    {
      title: "Pest Resistant",
      description: "Natural pest resistance reduces the need for chemical treatments and maintenance concerns."
    },
    {
      title: "Wildlife Support",
      description: "Provides habitat and food for native birds and beneficial insects while being deer-resistant."
    }
  ];

  const plans = [
    {
      name: "Basic Cactus Garden",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Up to 100 sq. ft. design",
        "5-7 cactus varieties",
        "Basic soil preparation",
        "Gravel mulch installation"
      ],
      description: "Perfect for small spaces and introducing cactus gardening.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Cactus Garden",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "100-300 sq. ft. design",
        "10-15 cactus varieties",
        "Complete soil preparation",
        "Decorative rock features"
      ],
      description: "Enhanced design with variety of sizes and complementary elements.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Cactus Landscape",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "300+ sq. ft. design",
        "20+ cactus varieties",
        "Full landscape integration",
        "Custom hardscaping"
      ],
      description: "Complete cactus landscape with premium specimens and custom features.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Begin light watering",
        "Check for winter damage",
        "Remove dead growth",
        "Apply light fertilizer"
      ]
    },
    {
      season: "Summer",
      items: [
        "Deep watering monthly",
        "Monitor for pests",
        "Provide afternoon shade",
        "Check soil drainage"
      ]
    },
    {
      season: "Fall",
      items: [
        "Reduce watering frequency",
        "Remove fallen debris",
        "Check plant health",
        "Prepare for winter"
      ]
    },
    {
      season: "Winter",
      items: [
        "Minimal watering needed",
        "Protect from hard freeze",
        "Monitor for damage",
        "Plan spring additions"
      ]
    }
  ];

  const faq = [
    {
      question: "Are cacti suitable for San Antonio's climate?",
      answer: "Absolutely! Many cactus varieties thrive in San Antonio's hot, dry summers and mild winters. We select varieties specifically adapted to our local climate conditions."
    },
    {
      question: "How often should I water my cactus garden?",
      answer: "Established cacti typically need watering every 2-4 weeks in summer and monthly or less in winter. We provide specific watering schedules based on your selected varieties."
    },
    {
      question: "Do cactus gardens require special soil?",
      answer: "Yes, cacti need well-draining soil. We prepare specialized cactus soil mixes and ensure proper drainage to prevent root rot and promote healthy growth."
    },
    {
      question: "Can cacti survive San Antonio winters?",
      answer: "Most cactus varieties we install are cold-hardy to 20°F or below. We select appropriate varieties and provide winter protection guidance for any sensitive species."
    },
    {
      question: "How much does a cactus garden cost?",
      answer: "Cactus garden costs range from $5-25 per square foot depending on plant selection, size, and design complexity. We provide detailed quotes after consultation."
    }
  ];

  return (
    <ServicesLayout
      title="Cactus Landscaping"
      description="Professional cactus landscaping services in San Antonio, TX. Create stunning drought-tolerant gardens with expert design and installation of native cacti and succulents."
      heroTitle="Cactus Landscaping Services"
      heroDescription="Transform your landscape with beautiful, drought-tolerant cactus gardens. Expert design, native plant selection, and professional installation for stunning, low-maintenance landscapes in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Create Your Desert Oasis?"
      ctaDescription="Get professional cactus landscaping services in San Antonio. Contact us for a free quote and transform your landscape with beautiful, drought-tolerant cactus gardens."
    />
  );
};

export default Cactus;
