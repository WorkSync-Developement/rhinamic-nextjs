import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

console.log('[DEBUG] Loading components/layout/Footer.tsx');

const Footer = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  useEffect(() => { setShowAdmin(true); }, []);
  console.log('[DEBUG] Rendering Footer component');
  return (
    <footer className="bg-rhinamic-dark text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rhinamic-lavender">RHINAMIC</h3>
            <p className="text-gray-200 mb-4">
              Transforming outdoor spaces with expertise, creativity, and sustainable practices since 2010.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-rhinamic-lavender" />
                <a href="tel:2012544911" className="hover:text-rhinamic-lavender transition-colors">201-254-4911</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-rhinamic-lavender" />
                <a href="mailto:info@rhinamic.com" className="hover:text-rhinamic-lavender transition-colors">info@rhinamic.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-rhinamic-lavender" />
                <span>San Antonio, TX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-rhinamic-lavender/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-rhinamic-lavender transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rhinamic-lavender transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-rhinamic-lavender transition-colors">Project Gallery</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rhinamic-lavender transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rhinamic-lavender transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-rhinamic-lavender/30 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/landscape-design" className="hover:text-rhinamic-lavender transition-colors">Landscape Design</Link>
              </li>
              <li>
                <Link href="/services/garden-maintenance" className="hover:text-rhinamic-lavender transition-colors">Garden Maintenance</Link>
              </li>
              <li>
                <Link href="/services/irrigation" className="hover:text-rhinamic-lavender transition-colors">Irrigation Systems</Link>
              </li>
              <li>
                <Link href="/services/hardscaping" className="hover:text-rhinamic-lavender transition-colors">Hardscaping</Link>
              </li>
              <li>
                <Link href="/services/outdoor-lighting" className="hover:text-rhinamic-lavender transition-colors">Outdoor Lighting</Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-rhinamic-lavender/30 pb-2">Business Hours</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rhinamic-primary/30 mt-10 pt-6 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Rhinamic Landscaping. All rights reserved. Proudly serving San Antonio, TX.</p>
          <p className="mt-2">
            <Link href="/blog" className="text-rhinamic-lavender underline hover:text-white">Blog</Link>
            <span className="mx-2">|</span>
            {showAdmin && (
              <Link href="/admin" className="text-rhinamic-lavender underline hover:text-white">Admin</Link>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
