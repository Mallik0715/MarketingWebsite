// src/components/Footer.tsx
import { Utensils, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div> */}
              {/* <span className="text-xl font-bold text-white">Marinate360</span> */}
              <Image
                              src={"/logo/marinate2.png"}
                              alt="Marinate360"
                              width={140}
                              height={50}
                            />
            </div>
            <p className="text-sm leading-relaxed">
              Empowering restaurants with digital innovation. Complete POS solution for modern food service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-green-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Marinate360. All rights reserved.</p>
          <div className="flex items-center space-x-2 text-sm mt-2 md:mt-0">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;