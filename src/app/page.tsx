'use client';
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/sections/HeroSection'
import Features from './components/sections/FeaturesSection'
import About from './components/sections/About'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonals'
import Demo from './components/sections/Demo'
import ServicesSection from './components/sections/Services';
import { useEffect, useState } from 'react';
import FAQSection from './components/sections/Faqs'


export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollPercent = (scrollTop / docHeight) * 100;

          setScrollProgress(scrollPercent);
          setIsVisible(scrollTop > 300);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Reset animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  };
  const radius = 20;
  const circumference = 2 * Math.PI * radius; 
  const offset = circumference - (circumference * scrollProgress) / 100;

  return (
    <div className="min-h-screen overflow-hidden  bg-white">
      <Header />

      <section id="hero" className="scroll-mt-20 mt-5">
        <HeroSection />
      </section>
      <section id='services' className="scroll-mt-16">
        <ServicesSection />
      </section>
     
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>  

      <section id="how-it-works" className="scroll-mt-16">
        <Demo />
      </section>

      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>

      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <section id="testimonials" className="scroll-mt-16">
        <Testimonials />
      </section>

   
      <section id="faqs" className="scroll-mt-16">
        <FAQSection />
      </section>

      <Footer />

      

      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <svg
            className="absolute inset-0 w-11 h-11 -ml-1 -mt-1"
            viewBox="0 0 44 44"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.1s linear',
              }}
            />
          </svg>

        
          <button
            onClick={scrollToTop}
            className="relative w-9 h-9 rounded-full bg-transparent border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center cursor-pointer "
            aria-label="Go to top"
          >
            <div className="relative hover:animate-bounce ">
              <div
                className={`transition-all duration-500 ease-out ${isClicked ? '-translate-y-3 opacity-0 scale-75' : 'translate-y-0 opacity-100 scale-100'}`}
              >
                <svg
                  className="w-6 h-6 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C12 2 6 6 6 12C6 12 6 14 7 15L9 17L11 19C12 20 12 20 12 20C12 20 12 20 13 19L15 17L17 15C18 14 18 12 18 12C18 6 12 2 12 2Z" />
                  <path d="M9 15L7 17L5 15L7 13L9 15Z" opacity="0.7" />
                  <path d="M17 15L19 13L17 11L15 13L17 15Z" opacity="0.7" />
                  <circle cx="12" cy="9" r="1.5" fill="white" />
                </svg>
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isClicked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                style={{ top: '20px' }}
              >
                <svg
                  className="w-4 h-6 text-orange-500"
                  viewBox="0 0 16 24"
                  fill="currentColor"
                >
                  <path d="M8 0C8 0 6 8 6 12C6 14 7 16 8 16C9 16 10 14 10 12C10 8 8 0 8 0Z" opacity="0.8" />
                  <path d="M8 4C8 4 7 10 7 13C7 14.5 7.5 15.5 8 15.5C8.5 15.5 9 14.5 9 13C9 10 8 4 8 4Z" fill="#fbbf24" opacity="0.6" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

