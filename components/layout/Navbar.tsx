import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

console.log('[DEBUG] Loading components/layout/Navbar.tsx');

const Navbar = () => {
  console.log('[DEBUG] Rendering Navbar component');
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-rhinamic-dark">
            RHINAMIC
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <Link 
          href="tel:2012544911" 
          className={`hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${scrolled ? "text-white bg-rhinamic-primary" : "text-white bg-rhinamic-primary"}`}
        >
          <Phone size={18} />
          201-254-4911
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
