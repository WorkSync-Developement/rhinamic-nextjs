import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ChooseUsSection from "../components/sections/ChooseUsSection";
import GallerySection from "../components/sections/GallerySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";

console.log('[DEBUG] Loading pages/index.tsx');

export default function Home() {
  console.log('[DEBUG] Rendering Home component (pages/index.tsx)');
  return (
    <>
      <Head>
        <title>Rhinamic Landscape Design | San Antonio's Premier Landscaping Service</title>
        <meta name="description" content="Transform your outdoor space with Rhinamic, San Antonio's premier landscaping service. Professional landscape design, maintenance, and installation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rhinamic.com" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ChooseUsSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
