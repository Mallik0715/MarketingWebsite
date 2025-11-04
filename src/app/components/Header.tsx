'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  {name: 'Services', id: 'services' },
  { name: 'Features', id: 'features' },
  // { name: 'How It Works', id: 'how-it-works' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.id);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-sm ">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
           
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              <Image
                src={"/logo/marinate2.png"}
                alt="Marinate360"
                width={140}
                height={50}
              />
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  activeSection === item.id ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                  activeSection === item.id ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;









