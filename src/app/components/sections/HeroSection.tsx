










'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight,  TrendingUp } from 'lucide-react'

const appScreens = [
  '/images/image.png',
  '/images/image1.png',
  '/images/image3.png',
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appScreens.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isHovered])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appScreens.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900">
      {/* Soft green gradient accent in the background */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-green-200 via-emerald-100 to-transparent rounded-full blur-[100px] opacity-60"
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-t from-green-300/40 to-transparent rounded-full blur-[100px] opacity-70"
        animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative  px-10 sm:px-10 lg:px-20 py-19  grid lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Section */}
        <motion.div
          className="space-y-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
        

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-20 tracking-tight ">
            <motion.span
              className="block text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Restaurant Empire
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-lg text-gray-600 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A complete POS ecosystem with QR ordering, kitchen tracking, analytics dashboard, and AI insights
            designed to scale effortlessly across your restaurant network.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '500+', label: 'Restaurants' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-5 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {/* Primary Button */}
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-400/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdLEzxL13bfFbTOOkZhFn4imfAbXkcwMU5XHydakMlSMuGpww/viewform", "_blank")}
              className="px-8 py-4 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section – App Preview Carousel */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Subtle glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-tr from-green-200/30 to-emerald-100/30 rounded-3xl blur-3xl opacity-70"
            />

            {/* Card */}
            <motion.div
              className="relative bg-white backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Browser Bar */}
              <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-3 text-sm text-gray-500 font-mono">marinate360-pos.app</div>
              </div>

              {/* Carousel */}
              <div className="relative bg-white ">
                <AnimatePresence mode="wait">
                  <motion.div key={currentSlide} className="relative w-full  pt-[47%]">
                    <motion.img
                      src={appScreens[currentSlide]}
                      alt={`App screen ${currentSlide + 1}`}
                      className="absolute inset-0  object-cover hover:scale-105  overflow-hidden"
                      style={{
                        transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 3}deg) rotateY(${(mousePosition.x - 0.5) * 3}deg)`,
                      }}
                      animate={{ y: isHovered ? [0, -5, 0] : 0 }}
                      transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-green-100 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                    key={currentSlide}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </motion.div>
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-2.5 rounded-full shadow-md hover:bg-green-500 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-2.5 rounded-full shadow-md hover:bg-green-500 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-3">
              {appScreens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide
                    ? 'w-8 bg-green-500'
                    : 'w-2.5 bg-gray-300 hover:bg-green-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



















