




// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import {
//   Mail,
//   Tag,
//   MessageSquare,
//   User,
//   Menu,
//   X,
//   ChevronRight,
//   Phone,
//   Clock
// } from 'lucide-react'

// const navItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'Services', id: 'services' },
//   { name: 'Features', id: 'features' },
//   { name: 'Pricing', id: 'pricing' },
//   { name: 'Testimonials', id: 'testimonials' },
//   { name: 'About', id: 'about' }
// ]

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeSection, setActiveSection] = useState('home')

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//       const sections = navItems.map(item => document.getElementById(item.id))
//       const scrollPosition = window.scrollY + 100

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i]
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(navItems[i].id)
//           break
//         }
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [mobileMenuOpen])

//   const handleNavClick = (id: string) => {
//     setMobileMenuOpen(false)
//     setTimeout(() => {
//       const element = document.getElementById(id)
//       if (element) {
//         const offset = 80
//         const elementPosition = element.getBoundingClientRect().top
//         const offsetPosition = elementPosition + window.pageYOffset - offset
//         window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
//       }
//     }, 300)
//   }

//   return (
//     <header className="fixed top-[-2px] left-0 right-0 z-50">
//       {/* Top Bar */}
//       <div
//         className={`hidden sm:block bg-[#0B1444] text-white text-xs border-b border-gray-700 transition-all duration-500 ease-in-out overflow-hidden ${
//           isScrolled
//             ? 'max-h-0 opacity-0 -translate-y-full'
//             : 'max-h-20 opacity-100 translate-y-0'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2 hover:text-amber-400 transition cursor-pointer">
//               <Mail size={14} />
//               <span>support@marinate360.com</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Tag size={14} className="text-amber-400" />
//               <span className="text-amber-300">
//                 Special Offer: Get 20% off on annual plans
//               </span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-1 cursor-pointer hover:text-amber-400 transition">
//               <Phone size={14} />
//               <span>+1 (555) 123-4567</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="w-full mx-auto transition-all duration-500">
//         <nav
//           className={`transition-all duration-500 ease-in-out mx-auto ${
//             isScrolled
//               ? 'bg-white border-b border-gray-200 shadow-sm px-4'
//               : 'bg-white border-b border-gray-100 sm:max-w-[95%] my-1 sm:my-3 rounded-none sm:rounded-md'
//           }`}
//         >
//           <div
//             className={`flex justify-between items-center px-4 sm:px-6 ${
//               isScrolled ? 'h-14 sm:h-16' : 'h-14 sm:h-20'
//             }`}
//           >
//             {/* Logo */}
//             <div className="flex items-center">
//               <Image
//                 src="/logo/marinate2.png"
//                 alt="Marinate360"
//                 width={isScrolled ? 110 : 130}
//                 height={0}
//                 className="object-contain h-auto w-auto transition-all duration-500"
//                 priority
//               />
//             </div>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center space-x-2">
//               {navItems.map(item => (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
//                     activeSection === item.id
//                       ? '  '
//                       : 'text-gray-700 hover:text-amber-600'
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className={`lg:hidden p-2.5 rounded-md transition-all duration-300 ${
//                 mobileMenuOpen
//                   ? 'bg-amber-500 text-white rotate-90'
//                   : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//               }`}
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
//           mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={() => setMobileMenuOpen(false)}
//       />

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl transform transition-all duration-500 ease-out z-50 overflow-y-auto ${
//           mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {/* Mobile Menu Header */}
//         <div className="sticky top-0 bg-amber-500 text-white p-6 shadow">
//           <div className="flex justify-between items-center mb-4">
//             <Image
//               src="/logo/marinate2.png"
//               alt="Marinate360"
//               width={120}
//               height={0}
//               className="object-contain h-auto"
//             />
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="p-2 hover:bg-amber-400 rounded-lg transition-all"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//           <p className="text-xs text-white/90">
//             Transform Your Restaurant Today
//           </p>
//         </div>

//         {/* Navigation Items */}
//         <div className="p-4 space-y-1">
//           {navItems.map((item, index) => (
//             <button
//               key={item.id}
//               onClick={() => handleNavClick(item.id)}
//               className={`w-full group flex items-center justify-between py-4 px-5 rounded-md text-left font-medium transition-all duration-300 ${
//                 activeSection === item.id
//                   ? 'bg-amber-100 text-amber-700'
//                   : 'text-gray-700 hover:bg-gray-100'
//               }`}
//               style={{
//                 animationDelay: `${index * 50}ms`,
//                 animation: mobileMenuOpen
//                   ? 'slideInRight 0.4s ease-out forwards'
//                   : 'none'
//               }}
//             >
//               <span className="text-base">{item.name}</span>
//               <ChevronRight
//                 className={`w-5 h-5 transition-transform duration-300 ${
//                   activeSection === item.id
//                     ? 'translate-x-1'
//                     : 'group-hover:translate-x-1'
//                 }`}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Mobile Menu Footer */}
//         <div className="p-6 space-y-3 border-t border-gray-200 mt-4">
//           <button className="w-full flex items-center justify-center py-3.5 px-5 bg-amber-500 text-white hover:bg-amber-600 transition-all font-semibold rounded-md">
//             <User className="w-4 h-4 mr-2" />
//             Sign in
//           </button>
//           <button className="w-full px-6 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition-all">
//             Get Started Free
//           </button>

//           {/* Contact Info */}
//           <div className="pt-4 space-y-2 text-sm text-gray-600">
//             <div className="flex items-center gap-2">
//               <Mail size={14} className="text-amber-500" />
//               <span>support@marinate360.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone size={14} className="text-amber-500" />
//               <span>+1 (555) 123-4567</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Clock size={14} className="text-amber-500" />
//               <span>24/7 Support Available</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </header>
//   )
// }

// export default Header









'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Mail,
  Tag,
  User,
  Menu,
  X,
  ChevronRight,
  Phone,
  Clock
} from 'lucide-react'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Features', id: 'features' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'About', id: 'about' }
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <header className="fixed top-[-2px] left-0 right-0 z-50">
      {/* Top Bar */}
      <div
        className={`hidden sm:block bg-[#0B1444] text-white text-xs border-b border-gray-700 transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled
            ? 'max-h-0 opacity-0 -translate-y-full'
            : 'max-h-20 opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-amber-400 transition cursor-pointer">
              <Mail size={14} />
              <span>support@marinate360.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={14} className="text-amber-400" />
              <span className="text-amber-300">
                Special Offer: Get 20% off on annual plans
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-amber-400 transition">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full mx-auto transition-all duration-500">
        <nav
          className={`transition-all duration-500 ease-in-out mx-auto ${
            isScrolled
              ? 'bg-white border-b border-gray-200 shadow-sm px-4'
              : 'bg-white border-b border-gray-100 sm:max-w-[95%] my-1 sm:my-3 rounded-none sm:rounded-md'
          }`}
        >
          <div
            className={`flex justify-between items-center px-4 sm:px-6 ${
              isScrolled ? 'h-14 sm:h-16' : 'h-14 sm:h-20'
            }`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo/marinate2.png"
                alt="Marinate360"
                width={isScrolled ? 110 : 130}
                height={0}
                className="object-contain h-auto w-auto transition-all duration-500"
                priority
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-md transition-all duration-300 ${
                mobileMenuOpen
                  ? 'bg-blue-600 text-white rotate-90'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl transform transition-all duration-500 ease-out z-50 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="sticky top-0 bg-blue-300 text-white p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <Image
              src="/logo/marinate2.png"
              alt="Marinate360"
              width={120}
              height={0}
              className="object-contain h-auto rounded-lg"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-blue-500 rounded-lg transition-all"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
          <p className="text-xs text-black font-bold">
            Transform Your Restaurant Today
          </p>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full group flex items-center justify-between py-4 px-5 rounded-md text-left font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen
                  ? 'slideInRight 0.4s ease-out forwards'
                  : 'none'
              }}
            >
              <span className="text-base">{item.name}</span>
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeSection === item.id
                    ? 'translate-x-1'
                    : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-6 space-y-3 border-t border-gray-200 mt-4">
          <button className="w-full flex items-center justify-center py-3.5 px-5 bg-blue-600 text-white hover:bg-blue-700 transition-all font-semibold rounded-md">
            <User className="w-4 h-4 mr-2" />
            Sign in
          </button>
          <button className="w-full px-6 py-3.5 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition-all">
            Get Started Free
          </button>

          {/* Contact Info */}
          <div className="pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-blue-600" />
              <span>support@marinate360.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-blue-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-blue-600" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}

export default Header
