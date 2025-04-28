import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

console.log('[DEBUG] Loading components/layout/Navbar.tsx');

const Navbar = () => {
  console.log('[DEBUG] Rendering Navbar component');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <li>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className={`font-medium hover:text-rhinamic-purple transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Services
              </a>
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
            <li>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className="block py-2 text-gray-800 hover:text-rhinamic-purple transition-colors"
              >
                Services
              </a>
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
