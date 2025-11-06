


// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
// import Image from 'next/image'

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
//       {/* Animated gradient orbs with enhanced effects */}
//       <div className="absolute -top-24 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-600/20 via-sky-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-24 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-tl from-orange-600/20 via-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-orange-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="py-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
//             {/* Brand Section - Spans 2 columns on large screens */}
//             <div className="lg:col-span-2 space-y-6">
//               <div className="flex items-center space-x-2 group">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-orange-600/50 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <Image
//                     src="/logo/marinate2.png"
//                     alt="Marinate360"
//                     width={180}
//                     height={60}
//                     className="relative object-contain bg-white rounded-xl p-2 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//               </div>
//               <p className="text-white text-base leading-relaxed max-w-sm font-light tracking-wide">
//                 Empowering restaurants with digital innovation. Complete POS solution for modern food service businesses worldwide.
//               </p>

//               {/* Contact Info */}
//               <div className="space-y-3">
//                 <a href="mailto:support@marinate360.com" className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group">
//                   <div className="relative w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110">
//                     <Mail className="w-5 h-5 relative z-10 text-white" />
//                   </div>
//                   <span className="text-sm font-medium">support@marinate360.com</span>
//                 </a>
//                 <a href="tel:+15551234567" className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group">
//                   <div className="relative w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110">
//                     <Phone className="w-5 h-5 relative z-10 text-white" />
//                   </div>
//                   <span className="text-sm font-medium">+1 (555) 123-4567</span>
//                 </a>
//                 <div className="flex items-center gap-3 text-white">
//                   <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-lg">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-sm font-medium">Hyderabad, India</span>
//                 </div>
//               </div>

//               {/* Social Media */}
//               <div className="flex space-x-3">
//                 <a
//                   href="#"
//                   className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
//                 >
//                   <Facebook className="w-5 h-5 text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
//                 >
//                   <Twitter className="w-5 h-5 text-white" />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/marinate_360"
//                   className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-orange-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
//                 >
//                   <Instagram className="w-5 h-5 text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
//                 >
//                   <Linkedin className="w-5 h-5 text-white" />
//                 </a>
//               </div>
//             </div>

//             {/* Product Links */}
//             <div className="group">
//               <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
//                 Product
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full group-hover:w-full transition-all duration-500"></span>
//               </h4>
//               <ul className="space-y-3">
//                 {['Features', 'Pricing', 'How It Works', 'Demo', 'API Docs'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-white hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group/item text-sm hover:translate-x-1">
//                       <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover/item:bg-blue-400 transition-all duration-300 group-hover/item:scale-150"></span>
//                       <span className="font-medium">{item}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company Links */}
//             <div className="group">
//               <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
//                 Company
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:w-full transition-all duration-500"></span>
//               </h4>
//               <ul className="space-y-3">
//                 {['About Us', 'Careers', 'Blog', 'Press Kit', 'Partners'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-white hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group/item text-sm hover:translate-x-1">
//                       <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover/item:bg-orange-400 transition-all duration-300 group-hover/item:scale-150"></span>
//                       <span className="font-medium">{item}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support Links */}
//             <div className="group">
//               <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
//                 Support
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-500"></span>
//               </h4>
//               <ul className="space-y-3">
//                 {['Help Center', 'Contact Us', 'System Status', 'Privacy Policy', 'Terms of Service'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-white hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group/item text-sm hover:translate-x-1">
//                       <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover/item:bg-blue-400 transition-all duration-300 group-hover/item:scale-150"></span>
//                       <span className="font-medium">{item}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="py-8 border-t border-gray-800/50 backdrop-blur-sm">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-white font-light tracking-wide">
//               © 2025 <span className="text-white font-semibold bg-linear-to-r from-blue-400 via-sky-400 to-orange-400 bg-clip-text">Marinate360</span>. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-2 text-sm">
//               <span className="text-white font-light">Crafted with</span>
//               <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
//               <span className="text-white font-light">in</span>
//               <span className="text-white font-semibold bg-linear-to-r from-orange-500 via-white to-green-500 bg-clip-text">India</span>
//               <span className="text-xl animate-pulse">🇮🇳</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom gradient line */}
//       <div className="h-1 bg-linear-to-r from-blue-600 via-sky-500 to-orange-500"></div>
//     </footer>
//   )
// }

// export default Footer


'use client'

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      aria-label="Footer"
    >
      {/* Animated gradient orbs */}
      <div className="absolute -top-24 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-600/20 via-sky-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-24 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-tl from-orange-600/20 via-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-orange-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <a
                href="/"
                aria-label="Marinate360 Home"
                className="flex items-center space-x-2 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-orange-600/50 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src="/logo/marinate2.png"
                    alt="Marinate360 restaurant POS software logo"
                    width={180}
                    height={60}
                    className="relative object-contain bg-white rounded-xl p-2 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>

              <p className="text-white text-base leading-relaxed max-w-sm font-light tracking-wide">
                Empowering restaurants with digital innovation. Complete POS
                solution for modern food service businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:support@marinate360.com"
                  aria-label="Email Marinate360 support"
                  className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="relative w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110">
                    <Mail className="w-5 h-5 relative z-10 text-white" />
                  </div>
                  <span className="text-sm font-medium">
                    support@marinate360.com
                  </span>
                </a>

                <a
                  href="tel:+15551234567"
                  aria-label="Call Marinate360"
                  className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="relative w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110">
                    <Phone className="w-5 h-5 relative z-10 text-white" />
                  </div>
                  <span className="text-sm font-medium">
                    +1 (555) 123-4567
                  </span>
                </a>

                <div
                  className="flex items-center gap-3 text-white"
                  aria-label="Marinate360 office location Hyderabad, India"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">Hyderabad, India</span>
                </div>
              </div>

              {/* Social Media */}
              <div
                className="flex space-x-3"
                aria-label="Marinate360 social media links"
              >
                <a
                  href="https://facebook.com/marinate360"
                  aria-label="Marinate360 Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://twitter.com/marinate360"
                  aria-label="Marinate360 Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.instagram.com/marinate_360"
                  aria-label="Marinate360 Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-orange-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://linkedin.com/company/marinate360"
                  aria-label="Marinate360 LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <nav aria-label="Product links" className="group">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full group-hover:w-full transition-all duration-500"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Features', href: '/#features' },
                  { name: 'Pricing', href: '/#pricing' },
                  { name: 'How It Works', href: '/#how-it-works' },
                  { name: 'Demo', href: '/#demo' },
                  { name: 'API Docs', href: '/docs' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-all duration-300 flex items-center gap-2 text-sm hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-all duration-300"></span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company Links */}
            <nav aria-label="Company links" className="group">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:w-full transition-all duration-500"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Press Kit', href: '/press' },
                  { name: 'Partners', href: '/partners' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white hover:text-orange-400 transition-all duration-300 flex items-center gap-2 text-sm hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-orange-400 transition-all duration-300"></span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Support Links */}
            <nav aria-label="Support links" className="group">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Support
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-500"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Help Center', href: '/help' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'System Status', href: '/status' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-400 transition-all duration-300 flex items-center gap-2 text-sm hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-all duration-300"></span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white font-light tracking-wide">
              © 2025{' '}
              <span className="text-white font-semibold bg-linear-to-r from-blue-400 via-sky-400 to-orange-400 bg-clip-text">
                Marinate360
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-white font-light">Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-white font-light">in</span>
              <span className="text-white font-semibold bg-linear-to-r from-orange-500 via-white to-green-500 bg-clip-text">
                India
              </span>
              <span className="text-xl animate-pulse">🇮🇳</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-sky-500 to-orange-500"></div>
    </footer>
  )
}

export default Footer
