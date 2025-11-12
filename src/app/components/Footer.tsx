

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleFooterNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer
        id="footer"
        className="relative bg-linear-to-b from-black via-gray-900 to-black text-gray-400 overflow-hidden"
      >
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
              
              {/* Brand Section - Spans 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/logo/marinate2.png"
                    alt="Marinate360"
                    width={180}
                    height={60}
                    className="object-contain bg-white rounded-xl p-2"
                  />
                </div>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                  Empowering restaurants with digital innovation. Complete POS solution for modern food service businesses worldwide.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="mailto:hello@marinate360.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm">hello@marinate360.com</span>
                  </a>
                  <a
                    href="tel:+919703772797"
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm">+91 9703772797</span>
                  </a>
                  <a
                    href="https://wa.me/9703772797"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-sm">Chat on WhatsApp</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm">Hyderabad, India</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-3">
                  <Link
                    href="https://www.facebook.com"
                    className="w-11 h-11 bg-gray-800 hover:bg-linear-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://www.x.com"
                    className="w-11 h-11 bg-gray-800 hover:bg-linear-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/marinate_360"
                    className="w-11 h-11 bg-gray-800 hover:bg-linear-to-br hover:from-orange-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com"
                    className="w-11 h-11 bg-gray-800 hover:bg-linear-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Product</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Features', id: 'features' },
                    { name: 'Pricing', id: 'pricing' },
                    { name: 'How It Works', id: 'how-it-works' },
                    { name: 'Demo', id: 'demo' },
                    { name: 'API Docs', id: 'api-docs' },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleFooterNavClick(item.id)}
                        className="text-left text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm bg-transparent border-none cursor-pointer w-full"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'About Us', id: 'about' },
                    { name: 'Careers', id: 'careers' },
                    { name: 'Blog', id: 'blog' },
                    { name: 'Press Kit', id: 'press' },
                    { name: 'Partners', id: 'partners' },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleFooterNavClick(item.id)}
                        className="text-left text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm bg-transparent border-none cursor-pointer w-full"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Help Center', id: 'help' },
                    { name: 'Contact Us', id: 'contact' },
                    { name: 'System Status', id: 'status' },
                    { name: 'Privacy Policy', id: 'privacy' },
                    { name: 'Terms of Service', id: 'terms' },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleFooterNavClick(item.id)}
                        className="text-left text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm bg-transparent border-none cursor-pointer w-full"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="py-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 <span className="text-white font-semibold">Marinate360</span>. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500">Crafted with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                <span className="text-gray-500">in</span>
                <span className="font-semibold bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                  India
                </span>
                <span className="text-xl">🇮🇳</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="h-1 bg-linear-to-r from-blue-600 via-sky-500 to-orange-500"></div>
      </footer>
    </>
  );
};

export default Footer;