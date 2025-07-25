import React from "react";
import { Shield, Home, Leaf } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const MulchingServices = () => {
  const serviceFeatures = [
    {
      title: "Moisture Retention",
      description: "Mulch helps soil retain moisture, reducing watering needs and keeping plants hydrated during hot Texas summers."
    },
    {
      title: "Weed Suppression",
      description: "A proper layer of mulch blocks sunlight from reaching weed seeds, significantly reducing weed growth in your landscape beds."
    },
    {
      title: "Soil Temperature Regulation",
      description: "Mulch acts as insulation, keeping soil cooler in summer and warmer in winter, protecting plant roots from extreme temperatures."
    },
    {
      title: "Soil Health Improvement",
      description: "Organic mulches decompose over time, adding nutrients and improving soil structure for healthier plant growth."
    },
    {
      title: "Erosion Prevention",
      description: "Mulch protects soil from wind and water erosion, keeping your landscape beds intact and preventing soil loss."
    },
    {
      title: "Enhanced Curb Appeal",
      description: "Fresh mulch gives your landscape a polished, well-maintained appearance that increases your property's visual appeal."
    }
  ];

  const plans = [
    {
      name: "Basic Mulching",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Up to 500 sq. ft. coverage",
        "Standard hardwood mulch",
        "Basic bed preparation",
        "Edge definition"
      ],
      description: "Perfect for refreshing existing landscape beds with quality mulch.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Mulching",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "500-1500 sq. ft. coverage",
        "Premium mulch selection",
        "Complete bed preparation",
        "Professional edging"
      ],
      description: "Comprehensive mulching service with premium materials and detailed preparation.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Mulching",
      icon: <Leaf className="text-rhinamic-primary" size={24} />,
      features: [
        "1500+ sq. ft. coverage",
        "Specialty mulch options",
        "Full landscape preparation",
        "Design consultation"
      ],
      description: "Custom mulching solutions for large properties with specific aesthetic requirements.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Apply fresh mulch layer",
        "Remove winter debris",
        "Check mulch depth (2-3 inches)",
        "Refresh landscape beds"
      ]
    },
    {
      season: "Summer",
      items: [
        "Monitor mulch moisture retention",
        "Add mulch as needed",
        "Check for pest issues",
        "Maintain proper mulch depth"
      ]
    },
    {
      season: "Fall",
      items: [
        "Refresh mulch before winter",
        "Remove fallen leaves",
        "Check mulch condition",
        "Prepare beds for winter"
      ]
    },
    {
      season: "Winter",
      items: [
        "Inspect mulch for settling",
        "Plan spring mulching",
        "Check for winter damage",
        "Schedule spring service"
      ]
    }
  ];

  const faq = [
    {
      question: "How often should I replace my mulch?",
      answer: "Organic mulches should be refreshed annually, typically in spring. The existing mulch doesn't need complete replacement - just add a fresh layer to maintain 2-3 inch depth."
    },
    {
      question: "What's the best type of mulch for San Antonio?",
      answer: "Hardwood mulch works well in our climate. Cedar mulch is excellent for natural pest resistance, while cypress provides good moisture retention. We can recommend the best option for your specific landscape."
    },
    {
      question: "How much mulch do I need?",
      answer: "One cubic yard of mulch covers approximately 100 square feet at 3 inches deep. We'll calculate your exact needs during our consultation based on your bed sizes and desired depth."
    },
    {
      question: "Does mulch attract termites?",
      answer: "Properly installed mulch doesn't attract termites when kept away from your home's foundation. We maintain a 6-inch gap between mulch and structures to prevent pest issues."
    },
    {
      question: "Can I mulch around trees?",
      answer: "Yes, but it's important to avoid 'volcano mulching' around tree trunks. We apply mulch in a donut shape, keeping it 2-3 inches away from the trunk to prevent rot and pest problems."
    }
  ];

  return (
    <ServicesLayout
      title="Mulching Services"
      description="Professional mulching services in San Antonio, TX. Enhance your landscape with quality mulch installation for moisture retention, weed control, and improved curb appeal."
      heroTitle="Professional Mulching Services"
      heroDescription="Transform your landscape with expert mulching services. Our professional team installs quality mulch that protects your plants, suppresses weeds, and enhances your property's beauty throughout San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Refresh Your Landscape?"
      ctaDescription="Get professional mulching services for your San Antonio property. Contact us for a free quote and transform your landscape beds with quality mulch installation."
    />
  );
};

export default MulchingServices;
