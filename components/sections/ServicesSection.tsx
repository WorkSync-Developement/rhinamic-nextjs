import React from "react";
import { Tractor, Flower, Grid2X2, Sprout, Droplets, Trees, Check, Clock, Wrench } from "lucide-react";

const services = [
  {
    icon: <Tractor className="w-7 h-7" />,
    title: "Turf Management",
    description: "Comprehensive lawn care including soil analysis, aeration, precision mowing, and seasonal fertilization programs for sustainable, drought-resistant turf systems.",
    details: [
      "Seasonal soil analysis and pH balancing",
      "Core aeration and thatch management",
      "Custom fertilization programs (typically 4-6 annual visits)",
      "Drought-resistant grass varieties suited to Texas climate"
    ]
  },
  {
    icon: <Flower className="w-7 h-7" />,
    title: "Landscape Architecture",
    description: "Expert landscape design featuring native plant selection, seasonal color planning, and sustainable perennial gardens tailored to your property's microclimate.",
    details: [
      "Custom 3D landscape renderings and planning",
      "Native and adaptive plant selection for sustainability",
      "Phased implementation plans for large projects",
      "Seasonal color rotation management"
    ]
  },
  {
    icon: <Grid2X2 className="w-7 h-7" />,
    title: "Hardscape Installation",
    description: "Premium hardscape elements including permeable pavers, natural stone installations, retaining walls, and custom outdoor living structures with drainage integration.",
    details: [
      "Natural stone and premium paver installations",
      "Custom outdoor kitchens and living spaces",
      "Retaining walls and terraced landscapes",
      "Drainage solutions for water management"
    ]
  },
  {
    icon: <Sprout className="w-7 h-7" />,
    title: "Irrigation Systems",
    description: "Water-efficient drip irrigation, smart controller technology, and zoned sprinkler systems designed for conservation and optimal plant health maintenance.",
    details: [
      "Smart controller systems with weather adaptation",
      "Water-saving drip irrigation installation",
      "Seasonal system audits and maintenance",
      "Rain/moisture sensor integration"
    ]
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Architectural Lighting",
    description: "Energy-efficient LED landscape lighting with layered illumination techniques for security, accent features, and enhanced outdoor aesthetics.",
    details: [
      "Energy-efficient LED lighting systems",
      "Security and pathway illumination",
      "Accent lighting for landscape features",
      "Holiday lighting setup and removal"
    ]
  },
  {
    icon: <Trees className="w-7 h-7" />,
    title: "Arboriculture Services",
    description: "Certified arborist-led tree care including structural pruning, disease management, and preservation techniques for mature tree specimens.",
    details: [
      "ISA Certified arborist consultations",
      "Structural pruning and crown maintenance",
      "Disease treatment and prevention protocols",
      "Root system management and protection"
    ]
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white relative" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rhinamic-lavender/10 rounded-full opacity-70 -translate-y-1/4 translate-x-1/3"></div>
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-rhinamic-secondary/50 rounded-full opacity-50 -translate-x-1/3"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-rhinamic-dark">Professional Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive landscaping solutions with sustainable practices and attention to detail, tailored to transform your outdoor environment into a harmonious extension of your property
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-rhinamic-lavender/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="bg-rhinamic-primary p-5 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white shadow-md group-hover:shadow-lg group-hover:shadow-rhinamic-lavender/30 group-hover:scale-105 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-rhinamic-dark group-hover:text-rhinamic-purple transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              
              <div className="mt-auto bg-gray-50 p-4 rounded-lg border border-gray-100">
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-rhinamic-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span>Typical timeframe: {index % 2 === 0 ? '2-4 weeks' : '1-3 weeks'}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Wrench size={14} className="mr-1" />
                    <span>Pro-grade equipment</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">Ready to elevate your outdoor living environment?</p>
          <button 
            onClick={scrollToContact}
            className="bg-rhinamic-primary text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-rhinamic-lavender/40 hover:bg-rhinamic-dark border-b-2 border-rhinamic-lavender/50 transform hover:-translate-y-1"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
