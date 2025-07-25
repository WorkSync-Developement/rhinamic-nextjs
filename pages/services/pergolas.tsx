import React from "react";
import { Shield, Home, Wrench } from "lucide-react";
import ServicesLayout from "../../components/layout/ServicesLayout";

const Pergolas = () => {
  const serviceFeatures = [
    {
      title: "Custom Design",
      description: "Tailored pergola designs that complement your home's architecture and create the perfect outdoor living space."
    },
    {
      title: "Quality Materials",
      description: "Premium wood, vinyl, and aluminum materials selected for durability and beauty in San Antonio's climate."
    },
    {
      title: "Shade & Comfort",
      description: "Create comfortable outdoor spaces with adjustable shade solutions that protect from intense Texas sun."
    },
    {
      title: "Increased Home Value",
      description: "Add architectural interest and functional outdoor space that enhances your property value and curb appeal."
    },
    {
      title: "Low Maintenance Options",
      description: "Choose from maintenance-free vinyl or aluminum options, or traditional wood with protective finishes."
    },
    {
      title: "Versatile Functionality",
      description: "Perfect for outdoor dining, entertaining, or creating a peaceful retreat in your backyard."
    }
  ];

  const plans = [
    {
      name: "Classic Pergola",
      icon: <Home className="text-rhinamic-primary" size={24} />,
      features: [
        "Standard 10x10 size",
        "Pressure-treated wood",
        "Traditional design",
        "Basic installation"
      ],
      description: "Traditional wood pergola perfect for creating defined outdoor spaces.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Premium Pergola",
      icon: <Shield className="text-rhinamic-primary" size={24} />,
      features: [
        "Custom sizing available",
        "Cedar or vinyl construction",
        "Enhanced design details",
        "Professional installation"
      ],
      description: "Upgraded materials and design for lasting beauty and durability.",
      highlight: true,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    },
    {
      name: "Custom Pergola",
      icon: <Wrench className="text-rhinamic-primary" size={24} />,
      features: [
        "Any size or configuration",
        "Premium materials",
        "Custom features",
        "Full design service"
      ],
      description: "Fully customized pergola with premium materials and unique design elements.",
      highlight: false,
      buttonClass: "bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
    }
  ];

  const seasonalCare = [
    {
      season: "Spring",
      items: [
        "Inspect structure for winter damage",
        "Clean thoroughly with mild detergent",
        "Check hardware and connections",
        "Apply fresh stain/sealer if needed"
      ]
    },
    {
      season: "Summer",
      items: [
        "Regular cleaning and maintenance",
        "Check for UV damage on finishes",
        "Inspect climbing plants",
        "Clean outdoor furniture"
      ]
    },
    {
      season: "Fall",
      items: [
        "Remove leaves and debris",
        "Deep clean before winter",
        "Check structural integrity",
        "Prepare for winter weather"
      ]
    },
    {
      season: "Winter",
      items: [
        "Remove heavy snow loads",
        "Check for ice damage",
        "Inspect for weathering",
        "Plan spring maintenance"
      ]
    }
  ];

  const faq = [
    {
      question: "Do I need a permit for a pergola in San Antonio?",
      answer: "Most pergolas under 200 square feet don't require permits, but we verify requirements based on your specific location and HOA rules. We handle permit acquisition when needed."
    },
    {
      question: "What's the best material for a pergola in Texas?",
      answer: "Cedar offers natural beauty and weather resistance. Vinyl provides maintenance-free durability. Aluminum combines strength with modern aesthetics. We help you choose based on your preferences and budget."
    },
    {
      question: "How long does pergola installation take?",
      answer: "Standard pergola installations typically take 1-3 days. Custom designs or larger structures may require additional time. Weather conditions can also affect the timeline."
    },
    {
      question: "Can a pergola provide complete shade?",
answer: "Traditional pergolas provide partial shade with an open-slat roof. For complete shade, we can add retractable canopies, shade cloth, or solid roof panels to your pergola design."
    },
    {
      question: "How much does a pergola cost in San Antonio?",
      answer: "Pergola costs range from $3,000-15,000+ depending on size, materials, and design complexity. We provide detailed quotes after understanding your specific needs and preferences."
    }
  ];

  return (
    <ServicesLayout
      title="Pergola Installation"
      description="Professional pergola installation in San Antonio, TX. Custom wood, vinyl, and aluminum pergolas designed and built by expert craftsmen. Create your perfect outdoor space."
      heroTitle="Custom Pergola Installation"
      heroDescription="Transform your outdoor space with custom pergola installation. Expert craftsmanship, quality materials, and professional design for beautiful, functional outdoor living in San Antonio."
      serviceFeatures={serviceFeatures}
      plans={plans}
      seasonalCare={seasonalCare}
      faq={faq}
      ctaTitle="Ready to Create Your Perfect Outdoor Space?"
      ctaDescription="Get a free quote for your custom pergola installation in San Antonio. Our expert team will design and build the perfect outdoor structure for your home."
    />
  );
};

export default Pergolas;
