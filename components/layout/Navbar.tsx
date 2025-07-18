import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

/**
 * ServicePage type for dropdown
 */
type ServicePage = {
  slug: string;
  title: string;
};

/**
 * List of all service pages (update this list if new pages are added)
 * This is auto-generated from file names for now.
 */
const servicePages: ServicePage[] = [
  { slug: "artificial-turf-installation", title: "Artificial Turf Installation" },
  { slug: "drip-irrigation-systems", title: "Drip Irrigation Systems" },
  { slug: "fire-pit-installation", title: "Fire Pit Installation" },
  { slug: "grass-seeding-overseeding", title: "Grass Seeding Overseeding" },
  { slug: "irrigation-system-installation-repair", title: "Irrigation System Installation & Repair" },
  { slug: "landscape-design", title: "Landscape Design" },
  { slug: "landscape-installation", title: "Landscape Installation" },
  { slug: "landscape-lighting-installation", title: "Landscape Lighting Installation" },
  { slug: "landscape-maintenance", title: "Landscape Maintenance" },
  { slug: "lawn-aeration", title: "Lawn Aeration" },
  { slug: "lawn-care-services", title: "Lawn Care Services" },
  { slug: "lawn-edging", title: "Lawn Edging" },
  { slug: "lawn-fertilization", title: "Lawn Fertilization" },
  { slug: "lawn-mowing", title: "Lawn Mowing" },
  { slug: "native-plant-landscaping", title: "Native Plant Landscaping" },
  { slug: "outdoor-kitchens", title: "Outdoor Kitchens" },
  { slug: "palm-tree-trimming", title: "Palm Tree Trimming" },
  { slug: "paver-patio-installation", title: "Paver Patio Installation" },
  { slug: "retaining-wall-construction", title: "Retaining Wall Construction" },
  { slug: "shrub-pruning", title: "Shrub Pruning" },
  { slug: "sod-installation", title: "Sod Installation" },
  { slug: "sprinkler-system-installation", title: "Sprinkler System Installation" },
  { slug: "stonework-rock-features", title: "Stonework & Rock Features" },
  { slug: "tree-planting", title: "Tree Planting" },
  { slug: "tree-removal", title: "Tree Removal" },
  { slug: "tree-trimming", title: "Tree Trimming" },
  { slug: "walkways-pathways", title: "Walkways & Pathways" },
  { slug: "weed-control", title: "Weed Control" },
  { slug: "xeriscaping", title: "Xeriscaping" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState<boolean>(false);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent backdrop-blur-sm py-4"}`}>
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
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className={`font-medium hover:text-rhinamic-purple transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Home
              </a>
            </li>
            {/* Services Dropdown (Desktop) */}
            <li className="relative group">
              <button
                type="button"
                className={`font-medium hover:text-rhinamic-purple transition-colors ${scrolled ? 'text-gray-800' : 'text-white'} flex items-center gap-1 focus:outline-none`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                {servicePages.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block px-5 py-2 text-gray-800 hover:bg-rhinamic-lavender/30 hover:text-rhinamic-purple transition-colors rounded"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a 
                href="#why-choose-us" 
                onClick={(e) => scrollToSection(e, 'why-choose-us')}
                className={`font-medium hover:text-rhinamic-purple transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Why Us
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                onClick={(e) => scrollToSection(e, 'gallery')}
                className={`font-medium hover:text-rhinamic-purple transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`font-medium hover:text-rhinamic-purple transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="tel:2012544911" 
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg ${
              scrolled 
                ? "text-gray-700 border border-gray-300 hover:border-rhinamic-lavender hover:text-rhinamic-purple transition-colors" 
                : "text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all"
            }`}
          >
            <Phone size={18} />
            201-254-4911
          </Link>
          
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1 border-b-2 border-rhinamic-lavender/50"
          >
            Get a Quote
            <ChevronRight size={16} />
          </a>
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
