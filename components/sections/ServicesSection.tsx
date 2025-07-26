import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Tractor, Flower, Grid2X2, Sprout, Droplets, Trees, Check, Clock, Wrench, ChevronRight, Settings } from "lucide-react";
import { getSupabaseClient } from "../../lib/supabase";

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  details: string[];
  display_order: number;
  is_visible: boolean;
}

const serviceIcons = {
  tractor: <Tractor className="w-7 h-7" />,
  flower: <Flower className="w-7 h-7" />,
  grid: <Grid2X2 className="w-7 h-7" />,
  sprout: <Sprout className="w-7 h-7" />,
  droplets: <Droplets className="w-7 h-7" />,
  trees: <Trees className="w-7 h-7" />
};

// Default fallback services
const defaultServices: ServiceItem[] = [
  {
    id: "lawn-care",
    icon: "tractor",
    title: "Lawn Care Services",
    slug: "lawn-care-services",
    description: "Comprehensive lawn care including soil analysis, aeration, precision mowing, and seasonal fertilization programs for sustainable, drought-resistant turf systems.",
    details: [
      "Seasonal soil analysis and pH balancing",
      "Core aeration and thatch management",
      "Custom fertilization programs (typically 4-6 annual visits)",
      "Drought-resistant grass varieties suited to Texas climate"
    ],
    display_order: 1,
    is_visible: true
  },
  {
    id: "landscape-design",
    icon: "flower",
    title: "Landscape Design",
    slug: "landscape-design",
    description: "Expert landscape design featuring native plant selection, seasonal color planning, and sustainable perennial gardens tailored to your property's microclimate.",
    details: [
      "Custom 3D landscape renderings and planning",
      "Native and adaptive plant selection for sustainability",
      "Phased implementation plans for large projects",
      "Seasonal color rotation management"
    ],
    display_order: 2,
    is_visible: true
  },
  {
    id: "paver-patio",
    icon: "grid",
    title: "Paver Patio Installation",
    slug: "paver-patio-installation",
    description: "Premium hardscape elements including permeable pavers, natural stone installations, retaining walls, and custom outdoor living structures with drainage integration.",
    details: [
      "Natural stone and premium paver installations",
      "Custom outdoor kitchens and living spaces",
      "Retaining walls and terraced landscapes",
      "Drainage solutions for water management"
    ],
    display_order: 3,
    is_visible: true
  },
  {
    id: "drip-irrigation",
    icon: "sprout",
    title: "Drip Irrigation Systems",
    slug: "drip-irrigation-systems",
    description: "Water-efficient drip irrigation, smart controller technology, and zoned sprinkler systems designed for conservation and optimal plant health maintenance.",
    details: [
      "Smart controller systems with weather adaptation",
      "Water-saving drip irrigation installation",
      "Seasonal system audits and maintenance",
      "Rain/moisture sensor integration"
    ],
    display_order: 4,
    is_visible: true
  },
  {
    id: "landscape-lighting",
    icon: "droplets",
    title: "Landscape Lighting Installation",
    slug: "landscape-lighting-installation",
    description: "Energy-efficient LED landscape lighting with layered illumination techniques for security, accent features, and enhanced outdoor aesthetics.",
    details: [
      "Energy-efficient LED lighting systems",
      "Security and pathway illumination",
      "Accent lighting for landscape features",
      "Holiday lighting setup and removal"
    ],
    display_order: 5,
    is_visible: true
  },
  {
    id: "tree-trimming",
    icon: "trees",
    title: "Tree Trimming",
    slug: "tree-trimming",
    description: "Certified arborist-led tree care including structural pruning, disease management, and preservation techniques for mature tree specimens.",
    details: [
      "ISA Certified arborist consultations",
      "Structural pruning and crown maintenance",
      "Disease treatment and prevention protocols",
      "Root system management and protection"
    ],
    display_order: 6,
    is_visible: true
  }
];

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const supabase = getSupabaseClient();
      
      // Try to fetch services from database
      const { data, error } = await supabase
        .from('homepage_services')
        .select('*')
        .eq('is_visible', true)
        .order('display_order', { ascending: true });

      if (error && error.code === '42P01') {
        // Table doesn't exist, use default services
        console.log('Homepage services table not found, using defaults');
        setServices(defaultServices.filter(s => s.is_visible));
        return;
      }

      if (error) {
        console.error('Error loading services:', error);
        setServices(defaultServices.filter(s => s.is_visible));
        return;
      }

      // If no data found, use defaults
      if (!data || data.length === 0) {
        setServices(defaultServices.filter(s => s.is_visible));
      } else {
        // Parse details if they're stored as JSON strings
        const parsedServices = data.map(service => ({
          ...service,
          details: typeof service.details === 'string' ? JSON.parse(service.details) : service.details
        }));
        setServices(parsedServices);
      }
    } catch (error) {
      console.error('Failed to load services:', error);
      setServices(defaultServices.filter(s => s.is_visible));
    } finally {
      setIsLoading(false);
    }
  };

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
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-rhinamic-primary border-r-transparent"></div>
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-rhinamic-lavender/20 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="bg-rhinamic-primary p-5 rounded-xl w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white shadow-md group-hover:shadow-lg group-hover:shadow-rhinamic-lavender/30 group-hover:scale-105 transition-all">
                  {serviceIcons[service.icon as keyof typeof serviceIcons] || serviceIcons.tractor}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-rhinamic-dark group-hover:text-rhinamic-purple transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                
                <div className="mt-auto bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-rhinamic-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/services/${service.slug}`}
                    className="w-full bg-rhinamic-primary text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-rhinamic-dark flex items-center justify-center gap-2 mb-4"
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </Link>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
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
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">
              <Settings size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No services are currently visible</p>
              <p className="text-sm">Services can be configured by an administrator.</p>
            </div>
          </div>
        )}
        
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
