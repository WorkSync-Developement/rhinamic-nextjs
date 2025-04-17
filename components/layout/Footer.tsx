import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

console.log('[DEBUG] Loading components/layout/Footer.tsx');

const Footer = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  useEffect(() => { setShowAdmin(true); }, []);
  console.log('[DEBUG] Rendering Footer component');
  return (
    <footer className="bg-purple-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">RHINAMIC</h3>
            <p className="text-gray-200 mb-4">
              Professional landscaping services in San Antonio, Texas. Transform your outdoor space into something extraordinary.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {["Lawn Maintenance", "Garden Design", "Hardscaping", "Irrigation", "Landscape Lighting", "Tree Services"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#services" 
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-purple-300 mt-1" />
                <span className="text-gray-200">San Antonio, TX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-purple-300" />
                <a href="tel:2012544911" className="text-gray-200 hover:text-white">201-254-4911</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-purple-300" />
                <a href="mailto:rhinamic@gmail.com" className="text-gray-200 hover:text-white">rhinamic@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-10 pt-6 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Rhinamic Landscaping. All rights reserved. Proudly serving San Antonio, TX.</p>
          <p className="mt-2">
            <Link href="/blog" className="text-purple-300 underline hover:text-white">Blog</Link>
            <span className="mx-2">|</span>
            {showAdmin && (
              <Link href="/admin" className="text-purple-300 underline hover:text-white">Admin</Link>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
