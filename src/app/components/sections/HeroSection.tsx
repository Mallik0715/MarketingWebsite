
// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowRight, ChevronRight, TrendingUp } from 'lucide-react'

// const appScreens = [
//   '/images/image.png',
//   '/images/image1.png',
//   '/images/image3.png',
// ]

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)
//   const touchStartX = useRef<number | null>(null)

//   // ✅ Move these up before useEffect
//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appScreens.length)
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length)

//   // Auto slide every 5s
//   useEffect(() => {
//     if (isHovered) return
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [isHovered, nextSlide])

//   // Swipe for mobile
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX
//   }

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current === null) return
//     const diff = e.changedTouches[0].clientX - touchStartX.current
//     if (diff > 50) prevSlide()
//     if (diff < -50) nextSlide()
//     touchStartX.current = null
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2f5c] to-[#2d4a8f] text-white px-4 sm:px-6 md:px-10 lg:px-20 pt-20 sm:pt-24 md:pt-0"
//     >
//       {/* Background gradient effects */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"
//         animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-600/20 rounded-full blur-[120px] opacity-50"
//         animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
//         transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//       />
      
//       {/* Dot pattern overlay */}
//       <div className="absolute inset-0 opacity-10" style={{
//         backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
//         backgroundSize: '20px 20px'
//       }}></div>

//       {/* Content container */}
//       <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 py-16 sm:py-20 w-full max-w-7xl">
//         {/* Left Section */}
//         <motion.div
//           className="space-y-6 text-center lg:text-left px-2 sm:px-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl sm:text-5xl align-left lg:text-6xl font-extrabold leading-tight tracking-tight">
//             <motion.span
//               className="block text-white align-right pt-5"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Transform Your
//             </motion.span>
//             <motion.span
//               className="block bg-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Restaurant Empire
//             </motion.span>
//           </h1>

//           <motion.p
//             className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             A complete POS ecosystem with QR ordering, kitchen tracking, analytics dashboard, and AI insights
//             designed to scale effortlessly across your restaurant network.
//           </motion.p>

//           {/* Stats */}
//           <motion.div
//             className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             {[
//               { value: '500+', label: 'Restaurants' },
//               { value: '99.9%', label: 'Uptime' },
//               { value: '24/7', label: 'Support' },
//             ].map((stat, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <TrendingUp className="w-5 h-5 text-orange-400" />
//                 <div>
//                   <div className="text-xl sm:text-2xl font-semibold text-white">{stat.value}</div>
//                   <div className="text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//           >
//             <motion.button
//               className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="flex items-center text-white justify-center gap-2">
//                 Start Free Trial
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </motion.button>

//             <motion.button
//               onClick={() =>
//                 window.open(
//                   'https://docs.google.com/forms/d/e/1FAIpQLSdLEzxL13bfFbTOOkZhFn4imfAbXkcwMU5XHydakMlSMuGpww/viewform',
//                   '_blank'
//                 )
//               }
//               className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-white border-white/30 font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book a Demo
//               <ChevronRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Right Section - Carousel */}
//         <motion.div
//           className="relative w-full mt-10 lg:mt-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="relative max-w-sm sm:max-w-md md:max-w-lg mx-auto">
//             <motion.div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-60" />
//             <motion.div
//               className="relative bg-white backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Browser bar */}
//               {/* <div className="bg-gray-50 px-4 py-2 flex items-center gap-2 border-b border-gray-200 text-xs sm:text-sm">
//                 <div className="flex gap-2">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
//                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
//                 </div>
//                 <div className="ml-2 text-gray-500 font-mono truncate">marinate360-pos.app</div>
//               </div> */}
//               {/* Image Carousel */}
//               <div className="relative bg-white">
//                 <AnimatePresence mode="wait">
//                   <motion.div key={currentSlide} className="relative w-full pt-[75%] sm:pt-[80%]">
//                     <motion.img
//                       src={appScreens[currentSlide]}
//                       alt={`App screen ${currentSlide + 1}`}
//                       className="absolute inset-0 w-full h-full object-contain rounded-2xl"
//                       animate={{ opacity: [0, 1], scale: [1.02, 1] }}
//                       transition={{ duration: 0.8 }}
//                     />
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Progress bar */}
//                 <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100 overflow-hidden">
//                   <motion.div
//                     className="h-full bg-primary"
//                     key={currentSlide}
//                     initial={{ width: '0%' }}
//                     animate={{ width: '100%' }}
//                     transition={{ duration: 5, ease: 'linear' }}
//                   />
//                 </motion.div>
//               </div>

//               {/* Navigation Controls */}
//               {/* <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-6">
//                 <button
//                   onClick={prevSlide}
//                   className="bg-white/80 text-gray-700 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors"
//                 >
//                   <ChevronRight className="w-5 h-5 rotate-180" />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="bg-white/80 text-gray-700 p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div> */}
//             </motion.div>

//             {/* Dots */}
//             <div className="mt-5 flex justify-center gap-2 sm:gap-3">
//               {appScreens.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentSlide(idx)}
//                   className={`h-8 sm:h-2.5 rounded-full transition-all duration-300 ${
//                     idx === currentSlide
//                       ? 'w-6 sm:w-8 bg-blue-600'
//                       : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-blue-400'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowRight, ChevronRight, TrendingUp } from 'lucide-react'

// const appScreens = [
//   '/images/image.png',
//   '/images/image1.png',
//   '/images/image3.png',
// ]

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)
//   const touchStartX = useRef<number | null>(null)

//   // ✅ Move these up before useEffect
//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appScreens.length)
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length)

//   // Auto slide every 5s
//   useEffect(() => {
//     if (isHovered) return
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [isHovered, nextSlide])

//   // Swipe for mobile
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX
//   }

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current === null) return
//     const diff = e.changedTouches[0].clientX - touchStartX.current
//     if (diff > 50) prevSlide()
//     if (diff < -50) nextSlide()
//     touchStartX.current = null
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2f5c] to-[#2d4a8f] text-white px-4 sm:px-6 md:px-10 lg:px-20 pt-20 sm:pt-24 md:pt-0"
//     >
//       {/* Background gradient effects */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"
//         animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-600/20 rounded-full blur-[120px] opacity-50"
//         animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
//         transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//       />
      
//       {/* Dot pattern overlay */}
//       <div className="absolute inset-0 opacity-10" style={{
//         backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
//         backgroundSize: '20px 20px'
//       }}></div>

//       {/* Content container */}
//       <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 py-12 sm:py-16 lg:py-20 w-full max-w-7xl">
//         {/* Left Section */}
//         <motion.div
//           className="space-y-5 sm:space-y-6 text-center lg:text-left px-2 sm:px-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
//             <motion.span
//               className="block text-white pt-3 sm:pt-5"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Transform Your
//             </motion.span>
//             <motion.span
//               className="block bg-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Restaurant Empire
//             </motion.span>
//           </h1>

//           <motion.p
//             className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             A complete POS ecosystem with QR ordering, kitchen tracking, analytics dashboard, and AI insights
//             designed to scale effortlessly across your restaurant network.
//           </motion.p>

//           {/* Stats */}
//           <motion.div
//             className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-3 sm:pt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             {[
//               { value: '500+', label: 'Restaurants' },
//               { value: '99.9%', label: 'Uptime' },
//               { value: '24/7', label: 'Support' },
//             ].map((stat, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
//                 <div>
//                   <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{stat.value}</div>
//                   <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//           >
//             <motion.button
//               className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="flex items-center text-white justify-center gap-2">
//                 Start Free Trial
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </motion.button>

//             <motion.button
//               onClick={() =>
//                 window.open(
//                   'https://docs.google.com/forms/d/e/1FAIpQLSdLEzxL13bfFbTOOkZhFn4imfAbXkcwMU5XHydakMlSMuGpww/viewform',
//                   '_blank'
//                 )
//               }
//               className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 text-white border-white/30 text-sm sm:text-base font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book a Demo
//               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Right Section - Carousel */}
//         <motion.div
//           className="relative w-full lg:mt-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
//             <motion.div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-60" />
//             <motion.div
//               className="relative bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Image Carousel */}
//               <div className="relative bg-white">
//                 <AnimatePresence mode="wait">
//                   <motion.div key={currentSlide} className="relative w-full pt-[100%] sm:pt-[110%] md:pt-[120%] lg:pt-[100%]">
//                     <motion.img
//                       src={appScreens[currentSlide]}
//                       alt={`App screen ${currentSlide + 1}`}
//                       className="absolute inset-0 w-full h-full object-contain rounded-xl sm:rounded-2xl p-2 sm:p-3"
//                       animate={{ opacity: [0, 1], scale: [1.02, 1] }}
//                       transition={{ duration: 0.8 }}
//                     />
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Progress bar */}
//                 <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100 overflow-hidden">
//                   <motion.div
//                     className="h-full bg-blue-600"
//                     key={currentSlide}
//                     initial={{ width: '0%' }}
//                     animate={{ width: '100%' }}
//                     transition={{ duration: 5, ease: 'linear' }}
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Dots */}
//             <div className="mt-4 sm:mt-5 flex justify-center gap-2 sm:gap-3">
//               {appScreens.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentSlide(idx)}
//                   className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
//                     idx === currentSlide
//                       ? 'w-6 sm:w-8 bg-blue-600'
//                       : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-blue-400'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ArrowRight, ChevronRight, TrendingUp } from 'lucide-react'

// const appScreens = [
//   '/images/image.png',
//   '/images/image1.png',
//   '/images/image3.png',
//   '/images/image4.jpg',
//   '/images/image5.jpg'
// ]

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)
//   const touchStartX = useRef<number | null>(null)

//   // ✅ Move these up before useEffect
//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appScreens.length)
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length)

//   // Auto slide every 5s
//   useEffect(() => {
//     if (isHovered) return
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [isHovered, nextSlide])

//   // Swipe for mobile
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX
//   }

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current === null) return
//     const diff = e.changedTouches[0].clientX - touchStartX.current
//     if (diff > 50) prevSlide()
//     if (diff < -50) nextSlide()
//     touchStartX.current = null
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2f5c] to-[#2d4a8f] text-white px-4 sm:px-6 md:px-10 lg:px-20 pt-20 sm:pt-24 md:pt-0"
//     >
//       {/* Background gradient effects */}
//       <motion.div
//         className="absolute top-[-10%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"
//         animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-600/20 rounded-full blur-[120px] opacity-50"
//         animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
//         transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//       />
      
//       {/* Dot pattern overlay */}
//       <div className="absolute inset-0 opacity-10" style={{
//         backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
//         backgroundSize: '20px 20px'
//       }}></div>

//       {/* Content container */}
//       <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 py-12 sm:py-16 lg:py-20 w-full max-w-7xl">
//         {/* Left Section */}
//         <motion.div
//           className="space-y-5 sm:space-y-6 text-center lg:text-left px-2 sm:px-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight  tracking-tight">
//             <motion.span
//               className="block text-white pt-3 sm:pt-5"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Transform Your
//             </motion.span>
//             <motion.span
//               className="block bg-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Restaurant Empire
//             </motion.span>
//           </h1>

//           <motion.p
//             className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             A complete POS ecosystem with QR ordering, kitchen tracking, analytics dashboard, and AI insights
//             designed to scale effortlessly across your restaurant network.
//           </motion.p>

//           {/* Stats */}
//           <motion.div
//             className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-3 sm:pt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//           >
//             {[
//               { value: '500+', label: 'Restaurants' },
//               { value: '99.9%', label: 'Uptime' },
//               { value: '24/7', label: 'Support' },
//             ].map((stat, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
//                 <div>
//                   <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{stat.value}</div>
//                   <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//           >
//             <motion.button
//               className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="flex items-center text-white justify-center gap-2">
//                 Start Free Trial
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </motion.button>

//             <motion.button
//               onClick={() =>
//                 window.open(
//                   'https://docs.google.com/forms/d/e/1FAIpQLSdLEzxL13bfFbTOOkZhFn4imfAbXkcwMU5XHydakMlSMuGpww/viewform',
//                   '_blank'
//                 )
//               }
//               className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 text-white border-white/30 text-sm sm:text-base font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book a Demo
//               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Right Section - Carousel */}
//         <motion.div
//           className="relative w-full mt-6 lg:mt-0"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
//             <motion.div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-60" />
//             <motion.div
//               className="relative bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Image Carousel */}
//               <div className="relative bg-white">
//                 <AnimatePresence mode="wait">
//                   <motion.div key={currentSlide} className="relative w-full h-[300px] sm:h-[250px] md:h-[200px] lg:h-[340px]">
//                     <motion.img
//                       src={appScreens[currentSlide]}
//                       alt={`App screen ${currentSlide + 1}`}
//                       className="absolute inset-0 w-full h-full object-contain rounded-xl sm:rounded-2xl p-2 sm:p-3"
//                       animate={{ opacity: [0, 1], scale: [1.02, 1] }}
//                       transition={{ duration: 0.8 }}
//                     />
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Progress bar */}
//                 <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100 overflow-hidden">
//                   <motion.div
//                     className="h-full bg-blue-600"
//                     key={currentSlide}
//                     initial={{ width: '0%' }}
//                     animate={{ width: '100%' }}
//                     transition={{ duration: 5, ease: 'linear' }}
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Dots */}
//             <div className="mt-4 sm:mt-5 flex justify-center gap-2 sm:gap-3">
//               {appScreens.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentSlide(idx)}
//                   className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
//                     idx === currentSlide
//                       ? 'w-6 sm:w-8 bg-blue-600'
//                       : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-blue-400'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, TrendingUp } from 'lucide-react'

const appScreens = [
  '/images/image.png',
  '/images/image1.png',
  '/images/image3.png',
  '/images/image4.jpg',
  '/images/image5.jpg'
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appScreens.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => nextSlide(), 5000)
    return () => clearInterval(interval)
  }, [isHovered])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 50) prevSlide()
    if (diff < -50) nextSlide()
    touchStartX.current = null
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-[#0a1628] via-[#1a2f5c] to-[#2d4a8f] text-white 
                 px-4 sm:px-6 md:px-10 lg:px-20 pt-1 sm:pt-12 md:pt-0"
    >
      {/* Background glow effects */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-600/20 rounded-full blur-[120px] opacity-50"
        animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dot overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Main content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 py-10 sm:py-14 lg:py-20 w-full max-w-7xl">
        {/* Left side text */}
        <motion.div
          className="space-y-5 sm:space-y-6 text-center lg:text-left px-2 sm:px-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl mt-12 md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <motion.span
              className="block text-white pt-1 sm:pt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Restaurant Empire
            </motion.span>
          </h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A complete POS ecosystem with QR ordering, kitchen tracking, analytics dashboard, and AI insights
            designed to scale effortlessly across your restaurant network.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '500+', label: 'Restaurants' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                        hover:from-blue-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold 
                        rounded-xl shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdLEzxL13bfFbTOOkZhFn4imfAbXkcwMU5XHydakMlSMuGpww/viewform',
                  '_blank'
                )
              }
              className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 text-white border-white/30 text-sm sm:text-base font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side carousel */}
        <motion.div
          className="relative w-full mt-4 sm:mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <motion.div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-60" />
            <motion.div
              className="relative bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div key={currentSlide} className="relative w-full h-[300px] sm:h-[250px] md:h-[200px] lg:h-[340px]">
                  <motion.img
                    src={appScreens[currentSlide]}
                    alt={`App screen ${currentSlide + 1}`}
                    className="absolute inset-0 w-full h-full object-contain rounded-xl sm:rounded-2xl p-2 sm:p-3"
                    animate={{ opacity: [0, 1], scale: [1.02, 1] }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </AnimatePresence>
              <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100 overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  key={currentSlide}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>

            {/* Dots */}
            <div className="mt-3 sm:mt-5 flex justify-center gap-2 sm:gap-3">
              {appScreens.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'w-6 sm:w-8 bg-blue-600'
                      : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-blue-400'
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
