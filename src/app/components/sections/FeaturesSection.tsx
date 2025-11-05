





// 'use client'

// import Image from 'next/image'
// import {
//   QrCode,
//   UtensilsCrossed,
//   Bike,
//   ShoppingBag,
//   Utensils,
//   Bell,
//   BarChart3,
//   Shield,
//   Sparkles,
//   ArrowRight,
//   Check
// } from 'lucide-react'
// import { useState, useEffect, useRef } from 'react'

// const features = [
//   {
//     icon: QrCode,
//     title: 'QR Code Ordering',
//     description:
//       'Enable contactless dining with instant digital menus at every table. Customers scan, browse, and order in seconds.',
//     gradient: 'from-blue-500 to-sky-500',
//     image: '/images/image1.png',
//     benefits: ['Instant menu access', 'Contactless ordering', 'Real-time updates']
//   },
//   {
//     icon: UtensilsCrossed,
//     title: 'Kitchen Display System',
//     description:
//       'Streamline order flow with real-time kitchen tickets and prep tracking. Eliminate paper tickets and reduce errors.',
//     gradient: 'from-sky-500 to-blue-500',
//     image: '/images/img9.png',
//     benefits: ['Real-time order sync', 'Prep time tracking', 'Order prioritization']
//   },
//   {
//     icon: Bike,
//     title: 'Delivery Management',
//     description:
//       'Assign riders, track deliveries, and keep customers informed in real time. Optimize routes and reduce delivery times.',
//     gradient: 'from-blue-400 to-sky-500',
//     image: '/images/img8.png',
//     benefits: ['Live delivery tracking', 'Auto rider assignment', 'Customer notifications']
//   },
//   {
//     icon: ShoppingBag,
//     title: 'Takeaway Orders',
//     description:
//       'Manage pickup orders with automated ready-time alerts and notifications. Keep customers informed every step of the way.',
//     gradient: 'from-sky-500 to-blue-500',
//     image: '/images/img7.png',
//     benefits: ['Ready-time estimates', 'SMS notifications', 'Queue management']
//   },
//   {
//     icon: Utensils,
//     title: 'Dine-In Management',
//     description:
//       'Optimize table turnover with live occupancy tracking and reservations. Maximize revenue per square foot.',
//     gradient: 'from-blue-500 to-sky-600',
//     image: '/images/img6.png',
//     benefits: ['Table status tracking', 'Reservation system', 'Waitlist management']
//   },
//   {
//     icon: Bell,
//     title: 'Waiter Call System',
//     description:
//       'Let guests request service instantly—no more waving across the room. Improve response times and customer satisfaction.',
//     gradient: 'from-sky-600 to-blue-500',
//     image: ['/images/img99.jpg', '/images/img12.png'], // two images
//     benefits: ['Instant notifications', 'Request tracking', 'Priority alerts']
//   },
//   {
//     icon: BarChart3,
//     title: 'Analytics Dashboard',
//     description:
//       'Gain actionable insights on sales trends, peak hours, and top items. Make data-driven decisions that boost profits.',
//     gradient: 'from-blue-500 to-sky-600',
//     image: '/images/image.png',
//     benefits: ['Sales analytics', 'Peak hour insights', 'Menu performance']
//   },
// ]

// // ✅ Updated ImageCard: two images side-by-side even on mobile
// const ImageCard = ({
//   feature,
//   imageHovered,
//   setImageHovered
// }: {
//   feature: typeof features[0]
//   imageHovered: boolean
//   setImageHovered: (hovered: boolean) => void
// }) => {
//   const images = Array.isArray(feature.image) ? feature.image : [feature.image]

//   return (
//     <div
//       className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out group"
//       style={{
//         transform: imageHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
//         boxShadow: imageHovered
//           ? '0 20px 40px -10px rgba(0,0,0,0.2)'
//           : '0 8px 30px -10px rgba(0,0,0,0.12)'
//       }}
//       onMouseEnter={() => setImageHovered(true)}
//       onMouseLeave={() => setImageHovered(false)}
//     >
//       {/* Gradient Overlay */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//       />

//       {/* ✅ Fixed Grid Layout */}
//       <div
//         className={`grid ${
//           images.length > 1 ? 'grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4' : 'grid-cols-1'
//         } items-center justify-center`}
//       >
//         {images.map((src, idx) => (
//           <div
//             key={idx}
//             className="flex items-center justify-center bg-white rounded-xl overflow-hidden"
//           >
//             <Image
//               src={src}
//               alt={`${feature.title} view ${idx + 1}`}
//               width={450}
//               height={350}
//               className="object-contain w-full h-full max-h-[420px] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Floating Glows */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-all duration-700"></div>
//       <div className="absolute bottom-0 right-0 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-all duration-700"></div>
//     </div>
//   )
// }

// // ✅ FeatureCard — same logic, just blue colors
// const FeatureCard = ({
//   feature,
//   index,
//   isLeftAligned
// }: {
//   feature: typeof features[0]
//   index: number
//   isLeftAligned: boolean
// }) => {
//   const [imageHovered, setImageHovered] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.15 }
//     )
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div
//       ref={ref}
//       className={`flex flex-col ${
//         isLeftAligned ? 'lg:flex-row' : 'lg:flex-row-reverse'
//       } items-center gap-10 lg:gap-16`}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
//         transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
//         transitionDelay: `${index * 0.1}s`
//       }}
//     >
//       {/* Text Section */}
//       <div className="w-full p-2 lg:w-1/2 space-y-6">
//         <div className="flex items-start gap-4">
//           <div
//             className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transition-transform duration-300`}
//             style={{
//               transform: imageHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)'
//             }}
//           >
//             <feature.icon className="w-7 h-7 text-white" />
//           </div>
//           <div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
//               {feature.title}
//             </h3>
//             <p className="text-gray-600 text-base sm:text-lg mt-1">
//               {feature.description}
//             </p>
//           </div>
//         </div>

//         {/* Benefits */}
//         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
//           {feature.benefits.map((b, i) => (
//             <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
//               <div
//                 className={`w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient}`}
//               >
//                 <Check className="w-3 h-3 text-white" />
//               </div>
//               {b}
//             </li>
//           ))}
//         </ul>

//         <div className="block lg:hidden mt-5">
//           <ImageCard
//             feature={feature}
//             imageHovered={imageHovered}
//             setImageHovered={setImageHovered}
//           />
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="hidden lg:block w-full lg:w-1/2 max-w-[520px]">
//         <ImageCard
//           feature={feature}
//           imageHovered={imageHovered}
//           setImageHovered={setImageHovered}
//         />
//       </div>
//     </div>
//   )
// }

// // ✅ Main Section
// const FeaturesSection = () => (
//   <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden">
//     {/* Soft background */}
//     <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

//     <div className="relative max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-24">
//         <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 rounded-full text-sm font-semibold shadow-sm">
//           <Sparkles className="w-4 h-4 text-blue-600" />
//           <span className="bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent">
//             Powerful Features
//           </span>
//         </div>

//         <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 leading-tight">
//           Everything You Need to{' '}
//           <span className="block bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">
//             Run Your Restaurant
//           </span>
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
//           Built for modern hospitality — stunning, fast, and designed to elevate every dining experience.
//         </p>
//       </div>

//       {/* Feature Cards */}
//       <div className="space-y-24 sm:space-y-28 lg:space-y-32">
//         {features.map((f, i) => (
//           <FeatureCard key={i} feature={f} index={i} isLeftAligned={i % 2 === 0} />
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-28">
//         <div className="inline-flex flex-col items-center gap-5 bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-3xl p-10 shadow-xl backdrop-blur-sm max-w-2xl mx-auto">
//           <h3 className="text-3xl font-bold text-gray-900">
//             Ready to Transform Your Restaurant?
//           </h3>
//           <p className="text-gray-600 text-lg">
//             Join 500+ restaurants already using our platform
//           </p>
//           <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
//             Start Free Trial
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <p className="text-gray-500 text-sm">
//             No credit card required • 14-day free trial
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// )

// export default FeaturesSection


'use client'

import Image from 'next/image'
import {
  QrCode,
  UtensilsCrossed,
  Bike,
  ShoppingBag,
  Utensils,
  Bell,
  BarChart3,
  Shield,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const features = [
  {
    icon: QrCode,
    title: 'QR Code Ordering',
    description:
      'Enable contactless dining with instant digital menus at every table. Customers scan, browse, and order in seconds.',
    gradient: 'from-blue-500 to-sky-500',
    image: '/images/image88.png',
    benefits: ['Instant menu access', 'Contactless ordering', 'Real-time updates']
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Display System',
    description:
      'Streamline order flow with real-time kitchen tickets and prep tracking. Eliminate paper tickets and reduce errors.',
    gradient: 'from-orange-500 to-amber-500',
    image: '/images/img9.png',
    benefits: ['Real-time order sync', 'Prep time tracking', 'Order prioritization']
  },
  {
    icon: Bike,
    title: 'Delivery Management',
    description:
      'Assign riders, track deliveries, and keep customers informed in real time. Optimize routes and reduce delivery times.',
    gradient: 'from-blue-400 to-sky-500',
    image: '/images/img8.png',
    benefits: ['Live delivery tracking', 'Auto rider assignment', 'Customer notifications']
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway Orders',
    description:
      'Manage pickup orders with automated ready-time alerts and notifications. Keep customers informed every step of the way.',
    gradient: 'from-orange-400 to-amber-500',
    image: '/images/img7.png',
    benefits: ['Ready-time estimates', 'SMS notifications', 'Queue management']
  },
  {
    icon: Utensils,
    title: 'Dine-In Management',
    description:
      'Optimize table turnover with live occupancy tracking and reservations. Maximize revenue per square foot.',
    gradient: 'from-blue-500 to-sky-600',
    image: '/images/img6.png',
    benefits: ['Table status tracking', 'Reservation system', 'Waitlist management']
  },
  {
    icon: Bell,
    title: 'Waiter Call System',
    description:
      'Let guests request service instantly—no more waving across the room. Improve response times and customer satisfaction.',
    gradient: 'from-orange-500 to-amber-600',
    image: ['/images/img99.jpg', '/images/img12.png'], // two images
    benefits: ['Instant notifications', 'Request tracking', 'Priority alerts']
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'Gain actionable insights on sales trends, peak hours, and top items. Make data-driven decisions that boost profits.',
    gradient: 'from-blue-500 to-sky-600',
    image: '/images/image99.png',
    benefits: ['Sales analytics', 'Peak hour insights', 'Menu performance']
  },
]

// ✅ Updated ImageCard: two images side-by-side even on mobile
const ImageCard = ({
  feature,
  imageHovered,
  setImageHovered
}: {
  feature: typeof features[0]
  imageHovered: boolean
  setImageHovered: (hovered: boolean) => void
}) => {
  const images = Array.isArray(feature.image) ? feature.image : [feature.image]

  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out group"
      style={{
        transform: imageHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: imageHovered
          ? '0 20px 40px -10px rgba(0,0,0,0.2)'
          : '0 8px 30px -10px rgba(0,0,0,0.12)'
      }}
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* ✅ Fixed Grid Layout */}
      <div
        className={`grid ${
          images.length > 1 ? 'grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4' : 'grid-cols-1'
        } items-center justify-center`}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`${feature.title} view ${idx + 1}`}
              width={450}
              height={350}
              className="object-contain w-full h-full max-h-[420px] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      {/* Floating Glows */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-all duration-700"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-all duration-700"></div>
    </div>
  )
}

// ✅ FeatureCard — same logic, just blue colors
const FeatureCard = ({
  feature,
  index,
  isLeftAligned
}: {
  feature: typeof features[0]
  index: number
  isLeftAligned: boolean
}) => {
  const [imageHovered, setImageHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isLeftAligned ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center gap-10 lg:gap-16`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${index * 0.1}s`
      }}
    >
      {/* Text Section */}
      <div className="w-full p-2 lg:w-1/2 space-y-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transition-transform duration-300`}
            style={{
              transform: imageHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)'
            }}
          >
            <feature.icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mt-1">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Benefits */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          {feature.benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient}`}
              >
                <Check className="w-3 h-3 text-white" />
              </div>
              {b}
            </li>
          ))}
        </ul>

        <div className="block lg:hidden mt-5">
          <ImageCard
            feature={feature}
            imageHovered={imageHovered}
            setImageHovered={setImageHovered}
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block w-full lg:w-1/2 max-w-[520px]">
        <ImageCard
          feature={feature}
          imageHovered={imageHovered}
          setImageHovered={setImageHovered}
        />
      </div>
    </div>
  )
}

// ✅ Main Section
const FeaturesSection = () => (
  <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden">
    {/* Enhanced gradient background with blue and orange */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
    
    {/* Animated gradient blobs */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-[100px]"></div>

    <div className="relative max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-50 via-orange-50 to-blue-50 border border-blue-200 rounded-full text-sm font-semibold shadow-sm">
          {/* <Sparkles className="w-4 h-4 text-orange-500" /> */}
          <span className=" text-2xl -clip-text text-blue-700">
            Powerful Features
          </span>
        </div>

        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 leading-tight">
          Everything You Need to{' '}
          <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent">
            Run Your Restaurant
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
          Built for modern hospitality — stunning, fast, and designed to elevate every dining experience.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="space-y-24 sm:space-y-28 lg:space-y-32">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} isLeftAligned={i % 2 === 0} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-28">
        <div className="inline-flex flex-col items-center gap-5 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 border-2 border-blue-200/50 rounded-3xl p-10 shadow-xl backdrop-blur-sm max-w-2xl mx-auto relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-orange-100/30 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900">
              Ready to Transform Your Restaurant?
            </h3>
            <p className="text-gray-600 text-lg mt-2">
              Join 500+ restaurants already using our platform
            </p>
          </div>
          
          <button className="relative z-10 group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 text-sm relative z-10">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturesSection