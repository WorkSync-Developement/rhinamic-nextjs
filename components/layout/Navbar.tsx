import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

/**
 * ServicePage type for dropdown
 */
type ServicePage = {
  slug: string;
  title: string;
};

/**
 * Dynamically import all service pages from the services directory
 */
const servicePages: ServicePage[] = [
  { slug: "cactus", title: "Cactus" },
  { slug: "decks", title: "Decks" },
  { slug: "drainage-solutions", title: "Drainage Solutions" },
  { slug: "drip-irrigation-systems", title: "Drip Irrigation Systems" },
  { slug: "fence-installation", title: "Fence Installation" },
  { slug: "fire-pit-installation", title: "Fire Pit Installation" },
  { slug: "garden-maintenance", title: "Garden Maintenance" },
  { slug: "landscape-design", title: "Landscape Design" },
  { slug: "landscape-installation", title: "Landscape Installation" },
  { slug: "landscape-lighting-installation", title: "Landscape Lighting Installation" },
  { slug: "landscape-maintenance", title: "Landscape Maintenance" },
  { slug: "lawn-aeration", title: "Lawn Aeration" },
  { slug: "lawn-care-services", title: "Lawn Care Services" },
  { slug: "lawn-fertilization", title: "Lawn Fertilization" },
  { slug: "lawn-installation", title: "Lawn Installation" },
  { slug: "mulching-services", title: "Mulching Services" },
  { slug: "native-plant-landscaping", title: "Native Plant Landscaping" },
  { slug: "outdoor-kitchens", title: "Outdoor Kitchens" },
  { slug: "palm-tree-trimming", title: "Palm Tree Trimming" },
  { slug: "paver-patio-installation", title: "Paver Patio Installation" },
  { slug: "pergolas", title: "Pergolas" },
  { slug: "retaining-wall-construction", title: "Retaining Wall Construction" },
  { slug: "rusted-iron-walls", title: "Rusted Iron Walls" },
  { slug: "shrub-pruning", title: "Shrub Pruning" },
  { slug: "sod-installation", title: "Sod Installation" },
  { slug: "stonework-rock-features", title: "Stonework & Rock Features" },
  { slug: "tree-planting", title: "Tree Planting" },
  { slug: "tree-trimming", title: "Tree Trimming" },
  { slug: "walkways-pathways", title: "Walkways & Pathways" },
  { slug: "weed-control", title: "Weed Control" },
  { slug: "xeriscaping", title: "Xeriscaping" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState<boolean>(false);
  const [showDesktopServices, setShowDesktopServices] = useState<boolean>(false);
  const router = useRouter();
  
  // Check if we're on the home page
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showDesktopServices && !target.closest('.services-dropdown')) {
        setShowDesktopServices(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDesktopServices]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? (scrolled ? "bg-white shadow-md py-3" : "bg-transparent backdrop-blur-sm py-4")
        : "bg-white shadow-md py-3"
    }`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-rhinamic-purple">
            <span className="flex items-center">
              RHINAMIC
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-1 bg-rhinamic-lavender/20 text-rhinamic-purple rounded font-medium">LANDSCAPING</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              {isHomePage ? (
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className={`font-medium hover:text-rhinamic-purple transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  Home
                </a>
              ) : (
                <Link
                  href="/"
                  className="font-medium hover:text-rhinamic-purple transition-colors text-gray-800"
                >
                  Home
                </Link>
              )}
            </li>
            {/* Services Dropdown (Desktop) */}
            <li className="relative services-dropdown">
              <button
                type="button"
                onClick={() => setShowDesktopServices(!showDesktopServices)}
                className={`font-medium hover:text-rhinamic-purple transition-colors ${
                  isHomePage ? (scrolled ? 'text-gray-800' : 'text-white') : 'text-gray-800'
                } flex items-center gap-1 focus:outline-none`}
                aria-haspopup="true"
                aria-expanded={showDesktopServices}
              >
                Services
                <svg className={`w-4 h-4 ml-1 transition-transform ${showDesktopServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {showDesktopServices && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 z-50 max-h-96 overflow-y-auto">
                  <ul>
                    {servicePages.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block px-5 py-2 text-gray-800 hover:bg-rhinamic-lavender/30 hover:text-rhinamic-purple transition-colors rounded"
                          onClick={() => setShowDesktopServices(false)}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#why-choose-us" 
                  onClick={(e) => scrollToSection(e, 'why-choose-us')}
                  className={`font-medium hover:text-rhinamic-purple transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  Why Us
                </a>
              ) : (
                <Link
                  href="/#why-choose-us"
                  className="font-medium hover:text-rhinamic-purple transition-colors text-gray-800"
                >
                  Why Us
                </Link>
              )}
            </li>
            <li>
              <Link
                href="/gallery"
                className={`font-medium hover:text-rhinamic-purple transition-colors ${
                  isHomePage ? (scrolled ? 'text-gray-800' : 'text-white') : 'text-gray-800'
                }`}
              >
                Gallery
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className={`font-medium hover:text-rhinamic-purple transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  Contact
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="font-medium hover:text-rhinamic-purple transition-colors text-gray-800"
                >
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="tel:2012544911" 
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg ${
              isHomePage
                ? (scrolled 
                    ? "text-gray-700 border border-gray-300 hover:border-rhinamic-lavender hover:text-rhinamic-purple transition-colors" 
                    : "text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all")
                : "text-gray-700 border border-gray-300 hover:border-rhinamic-lavender hover:text-rhinamic-purple transition-colors"
            }`}
          >
            <Phone size={18} />
            201-254-4911
          </Link>
          
          {isHomePage ? (
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1 border-b-2 border-rhinamic-lavender/50"
            >
              Get a Quote
              <ChevronRight size={16} />
            </a>
          ) : (
            <Link
              href="/#contact"
              className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1 border-b-2 border-rhinamic-lavender/50"
            >
              Get a Quote
              <ChevronRight size={16} />
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-rhinamic-primary p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="container-custom py-4">
          <ul className="space-y-4">
            <li>
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className="block py-2 text-gray-800 hover:text-rhinamic-purple transition-colors"
              >
                Home
              </a>
            </li>
            {/* Services Dropdown (Mobile) */}
            <li className="relative">
              <button
                type="button"
                className="py-2 w-full text-left text-gray-800 hover:text-rhinamic-purple transition-colors flex items-center gap-1 focus:outline-none"
                onClick={() => setShowMobileServices(!showMobileServices)}
                aria-haspopup="true"
                aria-expanded={showMobileServices}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {showMobileServices && (
                <ul className="mt-1 mb-2 bg-white rounded-lg shadow-lg border border-gray-100">
                  {servicePages.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block px-5 py-2 text-gray-800 hover:bg-rhinamic-lavender/30 hover:text-rhinamic-purple transition-colors rounded"
                        onClick={() => { setMobileMenuOpen(false); setShowMobileServices(false); }}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a 
                href="#why-choose-us" 
                onClick={(e) => scrollToSection(e, 'why-choose-us')}
                className="block py-2 text-gray-800 hover:text-rhinamic-purple transition-colors"
              >
                Why Us
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                onClick={(e) => scrollToSection(e, 'gallery')}
                className="block py-2 text-gray-800 hover:text-rhinamic-purple transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block py-2 text-gray-800 hover:text-rhinamic-purple transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block py-3 bg-rhinamic-primary text-white rounded-lg text-center font-medium"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
