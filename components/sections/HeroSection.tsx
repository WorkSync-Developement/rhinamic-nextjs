import { useRouter } from 'next/router';
import Link from 'next/link';
import { Phone, Award, CheckCircle } from 'lucide-react';

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
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-4 border border-white/20">
            <p className="text-white font-medium flex items-center">
              <Award size={18} className="text-rhinamic-lavender mr-2" />
              <span>San Antonio's Premier Landscape Design & Maintenance Since 2010</span>
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-md">
            Expert<br />
            Landscaping<br />
            Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md max-w-lg">
            Transform your outdoor space with our award-winning design and sustainable landscaping practices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-b-2 border-rhinamic-lavender/50"
              onClick={scrollToContact}
            >
              Request a Professional Consultation
            </button>
            <a 
              href="tel:2012544911"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 border border-white/40 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>201-254-4911</span>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-rhinamic-lavender mr-2 flex-shrink-0" size={18} />
                <span className="text-white text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-rhinamic-lavender mr-2 flex-shrink-0" size={18} />
                <span className="text-white text-sm">Certified Landscape Professionals</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-rhinamic-lavender mr-2 flex-shrink-0" size={18} />
                <span className="text-white text-sm">Eco-Friendly Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
