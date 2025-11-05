
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
// import Image from 'next/image'

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">

//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/logo/marinate2.png"
//                 alt="Marinate360"
//                 width={160}
//                 height={60}
//                 className="object-contain bg-white rounded-lg"
//               />
//             </div>
//             <p className="text-sm leading-relaxed">
//               Empowering restaurants with digital innovation. Complete POS solution for modern food service.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.instagram.com/marinate_360"
//                 className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Product */}
//           <div>
//             <h4 className="text-white font-bold mb-4">Product</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#features" className="hover:text-blue-400 transition-colors">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#pricing" className="hover:text-blue-400 transition-colors">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#how-it-works" className="hover:text-blue-400 transition-colors">
//                   How It Works
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Demo
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   API Docs
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="text-white font-bold mb-4">Company</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Press Kit
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Partners
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h4 className="text-white font-bold mb-4">Support</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-blue-400 transition-colors">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   System Status
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400 transition-colors">
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm">© 2025 Marinate360. All rights reserved.</p>
//           <div className="flex items-center space-x-2 text-sm mt-2 md:mt-0">
//             <span>Made with</span>
//             <span className="text-red-500">❤️</span>
//             <span>in India</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer






import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-gray-400 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
      
        {/* Main Footer Content */}
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
                <a href="mailto:support@marinate360.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">support@marinate360.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm">+1 (555) 123-4567</span>
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
                <a
                  href="#"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/marinate_360"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-orange-600 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Product
                {/* <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></span> */}
              </h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'How It Works', 'Demo', 'API Docs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Company
                {/* <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span> */}
              </h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Press Kit', 'Partners'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-orange-400 transition-colors"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Support
                {/* <span className="absolute bottom-0 left-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></span> */}
              </h4>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'System Status', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                      {item}
                    </a>
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
              <span className="text-white font-semibold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">India</span>
              <span className="text-xl">🇮🇳</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500"></div>
    </footer>
  )
}

export default Footer