import { useRouter } from 'next/router';
import Link from 'next/link';
import { Phone } from 'lucide-react';

console.log('[DEBUG] Loading components/sections/HeroSection.tsx');

const HeroSection = () => {
  console.log('[DEBUG] Rendering HeroSection component');
  const router = useRouter();

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center">
      <div className="container-custom py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-md">
            Landscaping<br />
            That Moves<br />
            With You
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md max-w-lg">
            Transform your outdoor space with the premier landscaping service in San Antonio
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-rhinamic-primary hover:bg-rhinamic-primary/90 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              onClick={scrollToContact}
            >
              Get a Free Estimate
            </button>
            <a 
              href="tel:240-555-2522"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 border border-white/40 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>240-555-2522</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
