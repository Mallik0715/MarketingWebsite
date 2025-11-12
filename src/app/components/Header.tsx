import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Mail,
  Tag,
  User,
  Menu,
  X,
  Phone,
  Clock,
  ChevronRight
} from 'lucide-react'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Features', id: 'features' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'footer' }
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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 🔸 Top Header Section */}
      <div
        className={`relative text-white text-xs overflow-hidden transition-all duration-500 ease-in-out ${isScrolled
            ? 'max-h-0 opacity-0 -translate-y-full'
            : 'max-h-20 opacity-100 translate-y-0'
          }`}
      >
        {/* Translucent linear background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a1628]/80 via-[#0f2040]/70 to-transparent backdrop-blur-md" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-b from-[#0f2040]/50 to-transparent blur-lg opacity-60" />

        {/* Floating glows */}
        <div className="absolute top-[-40%] left-[-40%] w-[250px] h-[250px] bg-blue-500/15 rounded-full blur-[90px] animate-[float1_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-40%] right-[-40%] w-[250px] h-[250px] bg-purple-600/15 rounded-full blur-[100px] animate-[float2_12s_ease-in-out_infinite]" />

        {/* Dotted overlay pattern (Tailwind arbitrary value) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />

        {/* 🔹 Top Info Bar Content */}
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-3 py-2 z-10">
          {/* Left group */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] sm:text-xs">
            <div className="hidden md:flex items-center space-x-1 hover:text-blue-300 transition cursor-pointer">
              <Mail size={13} />
              <span>hello@marinate360.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Tag size={13} className="text-orange-400" />
              <span className="text-orange-200">Special Offer: 20% off annual plans</span>
            </div>
            <div className="hidden md:flex items-center space-x-1 hover:text-blue-300 transition cursor-pointer">
              <Clock size={13} />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Right group */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-1 text-[11px] sm:text-xs mt-1 sm:mt-0">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-300 transition">
              <Phone size={13} />
              <span>+91 9703772797</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Main Navigation */}
      <div className="mx-auto w-full transition-all duration-500">
        <nav
          className={`transition-all duration-500 ease-in-out mx-auto ${isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/80 my-0'
              : 'bg-white/85 backdrop-blur-md shadow-md max-w-[95%] my-3 rounded-xl'
            }`}
        >
          <div
            className={`flex justify-between items-center transition-all duration-1000 px-6 ${isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
              } text-[15px]`}
          >
            {/* Logo */}
            <div className="flex items-center cursor-pointer group">
              <Image
                src="/logo/marinate2.png"
                alt="Marinate360"
                width={isScrolled ? 160 : 200}
                height={0}
                className={`object-contain transition-all duration-500 group-hover:scale-105`}
                priority
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 rounded-lg ${activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
               
                <button
               onClick={() =>
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfUprklcJQhsZ2yDWW2fo0BclVDimmnL6wdVaNkQ5xdH55sBQ/viewform?usp=publish-editor',
      '_blank',
      'noopener,noreferrer'
    )
  }
                  className={`relative px-6 bg-linear-to-r from-blue-600 via-blue-500 to-sky-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-500 overflow-hidden group ${isScrolled ? 'py-2' : 'py-2.5'
                    }`}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0  opacity-0 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${mobileMenuOpen
                  ? 'bg-blue-600 text-white rotate-90'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <Image
              src="/logo/marinate2.png"
              alt="Marinate360"
              width={150}
              height={0}
              className="h-auto object-contain"
            />
            <button
            aria-label="mobile"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between text-left text-gray-700 font-medium py-2 px-2 rounded-md hover:bg-blue-50 transition ${activeSection === item.id ? 'text-blue-600' : ''
                  }`}
              >
                {item.name}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <button className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <style global jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 15px); }
        }
      `}</style>
    </header>
  )
}

export default Header







