import React from "react";
import { Tractor, Flower, Grid2X2, Sprout, Droplets, Trees } from "lucide-react";

const services = [
  {
    icon: <Tractor className="w-7 h-7" />,
    title: "Lawn Maintenance",
    description: "Expert lawn care, revitalization and maintenance services",
  },
  {
    icon: <Flower className="w-7 h-7" />,
    title: "Garden Design",
    description: "Custom garden designs with expertise and creativity",
  },
  {
    icon: <Grid2X2 className="w-7 h-7" />,
    title: "Hardscaping",
    description: "Custom patios, walkways and structural landscaping",
  },
  {
    icon: <Sprout className="w-7 h-7" />,
    title: "Irrigation",
    description: "Smart watering systems for optimal growth",
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: "Landscape Lighting",
    description: "Accent lighting to showcase your property",
  },
  {
    icon: <Trees className="w-7 h-7" />,
    title: "Tree Services",
    description: "Professional tree care and maintenance",
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
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full opacity-70 -translate-y-1/4 translate-x-1/3"></div>
      <div className="absolute bottom-20 left-0 w-40 h-40 bg-purple-100 rounded-full opacity-50 -translate-x-1/3"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-purple-900">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive landscaping solutions tailored to transform your outdoor space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-5 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-purple-900">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">Ready to enhance your outdoor living space?</p>
          <button 
            onClick={scrollToContact}
            className="bg-purple-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-purple-900 transform hover:-translate-y-1"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
