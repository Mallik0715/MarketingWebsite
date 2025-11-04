

// 'use client'

// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import {
//   Check,
//   Star,
//   ArrowRight,
//   Smartphone,
//   Building2,
//   Calendar,
//   Clock,
// } from 'lucide-react'
// import { useState } from 'react'

// // Types
// interface Plan {
//   name: string
//   price: string // monthly price as string, e.g., "₹2,999"
//   period: string
//   description: string
//   icon: React.ReactNode
//   popular: boolean
//   features: string[]
// }

// export default function Pricing() {
//   const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

//   // Helper: Extract numeric value from price string like "₹2,999"
//   const parsePrice = (priceStr: string): number => {
//     return parseFloat(priceStr.replace(/[₹,]/g, ''))
//   }

//   // Helper: Format number back to price string
//   const formatPrice = (num: number): string => {
//     return `₹${num.toLocaleString('en-IN')}`
//   }

//   // Get displayed price based on billing cycle
//   const getDisplayedPrice = (plan: Plan) => {
//     if (plan.price === 'Custom') return 'Custom'

//     const monthlyValue = parsePrice(plan.price)
//     if (billingCycle === 'monthly') {
//       return plan.price
//     } else {
//       const yearly = Math.round(monthlyValue * 12 * 0.8) // 20% off
//       return formatPrice(yearly)
//     }
//   }

//   const plans: Plan[] = [
//     {
//       name: 'Starter',
//       price: '₹2,999',
//       period: 'month',
//       description: 'Perfect for small restaurants',
//       icon: <Smartphone className="w-6 h-6" />,
//       popular: false,
//       features: [
//         '1 Restaurant Location',
//         'Digital QR Menu',
//         'Basic POS System',
//         'Table Management',
//         'Kitchen Display',
//         'Email Support',
//         '100 Orders/month'
//       ]
//     },
//     {
//       name: 'Professional',
//       price: '₹7,999',
//       period: 'month',
//       description: 'Most popular choice',
//       icon: <Star className="w-6 h-6 fill-current" />,
//       popular: true,
//       features: [
//         'Up to 5 Locations',
//         'Advanced POS System',
//         'Delivery Management',
//         'Analytics Dashboard',
//         'Custom Branding',
//         'Priority Support',
//         'Unlimited Orders',
//         'API Access'
//       ]
//     },
//     {
//       name: 'Enterprise',
//       price: 'Custom',
//       period: '',
//       description: 'For large restaurant chains',
//       icon: <Building2 className="w-6 h-6" />,
//       popular: false,
//       features: [
//         'Unlimited Locations',
//         'White Label Solution',
//         'Dedicated Account Manager',
//         '24/7 Phone Support',
//         'Custom Integrations',
//         'Advanced Analytics',
//         'Training & Onboarding',
//         'SLA Guarantee'
//       ]
//     }
//   ]

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   }

//   return (
//     <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={container}
//           className="text-center mb-12"
//         >
//           <motion.div variants={item} className="inline-block mb-4">
//             <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
//               💰 Transparent Pricing
//             </span>
//           </motion.div>
//           <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Choose Your Perfect Plan
//           </motion.h1>
//           <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
//             No hidden fees. Cancel anytime. Start with a 14-day free trial.
//           </motion.p>
//         </motion.div>

//         {/* === BILLING TOGGLE === */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={item}
//           className="flex justify-center mb-16"
//         >
//           <div className="relative inline-flex items-center p-1 bg-gray-200 rounded-full w-48">
//             <button
//               onClick={() => setBillingCycle('monthly')}
//               className={`flex items-center justify-center w-1/2 py-2 text-sm font-medium rounded-full transition-colors ${
//                 billingCycle === 'monthly'
//                   ? 'text-gray-900'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               <Calendar className="w-4 h-4 mr-1" />
//               Monthly
//             </button>
//             <button
//               onClick={() => setBillingCycle('yearly')}
//               className={`flex items-center justify-center w-1/2 py-2 text-sm font-medium rounded-full transition-colors ${
//                 billingCycle === 'yearly'
//                   ? 'text-green-600 font-semibold'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               <Clock className="w-4 h-4 mr-1" />
//               Yearly
//             </button>
//             <motion.div
//               className="absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded-full shadow-sm z-0"
//               animate={{
//                 x: billingCycle === 'yearly' ? '100%' : '0%',
//                 backgroundColor: billingCycle === 'yearly' ? '#ecfdf5' : '#fff',
//               }}
//               transition={{ type: 'spring', stiffness: 400, damping: 30 }}
//             />
//           </div>
//         </motion.div>

//         {/* Pricing Cards */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={container}
//           className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         >
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className={`relative p-8 rounded-2xl border transition-all duration-300 ${
//                 plan.popular
//                   ? 'border-green-500 bg-white shadow-xl scale-105 z-10'
//                   : 'border-gray-200 bg-white hover:border-green-400 hover:shadow-lg'
//               }`}
//             >
//               {plan.popular && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="absolute -top-4 left-1/2 transform -translate-x-1/2"
//                 >
//                   <span className="bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
//                     Most Popular
//                   </span>
//                 </motion.div>
//               )}

//               <div className="text-center mb-8">
//                 <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-green-100 text-green-600">
//                   {plan.icon}
//                 </div>
//                 <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-green-600' : 'text-gray-900'}`}>
//                   {plan.name}
//                 </h3>
//                 <p className={`text-sm mb-6 ${plan.popular ? 'text-green-600' : 'text-gray-600'}`}>
//                   {plan.description}
//                 </p>
//                 <div className="mt-4">
//                   <span className={`text-4xl font-bold ${plan.popular ? 'text-green-600' : 'text-gray-900'}`}>
//                     {getDisplayedPrice(plan)}
//                   </span>
//                   {plan.price !== 'Custom' && (
//                     <span className={`ml-1 text-lg ${plan.popular ? 'text-green-600' : 'text-gray-600'}`}>
//                       {billingCycle === 'monthly' ? `/${plan.period}` : '/year'}
//                     </span>
//                   )}
//                 </div>
//                 {billingCycle === 'yearly' && plan.price !== 'Custom' && (
//                   <div className="mt-2 text-xs text-green-600 font-medium">
//                     Save 20% annually
//                   </div>
//                 )}
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start space-x-3">
//                     <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full"
//               >
//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
//                     plan.popular
//                       ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
//                       : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 hover:shadow-md'
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Final CTA */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={container}
//           className="text-center mt-24"
//         >
//           <motion.p variants={item} className="text-gray-600 mb-4">
//             Still unsure?
//           </motion.p>
//           <motion.h3 variants={item} className="text-2xl font-bold text-gray-900 mb-6">
//             Start your 14-day free trial — no credit card needed.
//           </motion.h3>
//           <motion.div variants={item}>
//             <Link
//               href="/demo"
//               className="inline-flex items-center px-8 py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200 shadow-md"
//             >
//               Try for Free
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }




// 'use client'

// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   Check,
//   Star,
//   Smartphone,
//   Building2,
// } from 'lucide-react'
// import { useState } from 'react'

// // Types
// interface Plan {
//   name: string
//   price: string // monthly price as string, e.g., "₹2,999"
//   period: string
//   description: string
//   icon: React.ReactNode
//   popular: boolean
//   features: string[]
// }

// export default function Pricing() {
//   const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

//   // Helper: Extract numeric value from price string like "₹2,999"
//   const parsePrice = (priceStr: string): number => {
//     return parseFloat(priceStr.replace(/[₹,]/g, ''))
//   }

//   // Helper: Format number back to price string
//   const formatPrice = (num: number): string => {
//     return `₹${num.toLocaleString('en-IN')}`
//   }

//   // Get displayed price based on billing cycle
//   const getDisplayedPrice = (plan: Plan) => {
//     if (plan.price === 'Custom') return 'Custom'

//     const monthlyValue = parsePrice(plan.price)
//     if (billingCycle === 'monthly') {
//       return plan.price
//     } else {
//       const yearly = Math.round(monthlyValue * 12 * 0.8) // 20% off
//       return formatPrice(yearly)
//     }
//   }

//   const plans: Plan[] = [
//     {
//       name: 'Starter',
//       price: '₹2,999',
//       period: 'month',
//       description: 'Perfect for small restaurants',
//       icon: <Smartphone className="w-6 h-6" />,
//       popular: false,
//       features: [
//         '1 Restaurant Location',
//         'Digital QR Menu',
//         'Basic POS System',
//         'Table Management',
//         'Kitchen Display',
//         'Email Support',
//         '100 Orders/month'
//       ]
//     },
//     {
//       name: 'Professional',
//       price: '₹7,999',
//       period: 'month',
//       description: 'Most popular choice',
//       icon: <Star className="w-6 h-6 fill-current" />,
//       popular: true,
//       features: [
//         'Up to 5 Locations',
//         'Advanced POS System',
//         'Delivery Management',
//         'Analytics Dashboard',
//         'Custom Branding',
//         'Priority Support',
//         'Unlimited Orders',
//         'API Access'
//       ]
//     },
//     {
//       name: 'Enterprise',
//       price: 'Custom',
//       period: '',
//       description: 'For large restaurant chains',
//       icon: <Building2 className="w-6 h-6" />,
//       popular: false,
//       features: [
//         'Unlimited Locations',
//         'White Label Solution',
//         'Dedicated Account Manager',
//         '24/7 Phone Support',
//         'Custom Integrations',
//         'Advanced Analytics',
//         'Training & Onboarding',
//         'SLA Guarantee'
//       ]
//     }
//   ]

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={container}
//           className="text-center mb-12"
//         >
//           <motion.div variants={item} className="inline-block mb-4">
//             <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
//               💰 Transparent Pricing
//             </span>
//           </motion.div>
//           <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Choose Your Perfect Plan
//           </motion.h1>
//           <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
//             No hidden fees. Cancel anytime. Start with a 14-day free trial.
//           </motion.p>
//         </motion.div>

//         {/* === BILLING TOGGLE === */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={item}
//           className="flex justify-center mb-16"
//         >
//           <div className="relative inline-flex items-center bg-white rounded-full shadow-sm border border-gray-200 p-1">
//             <button
//               onClick={() => setBillingCycle('monthly')}
//               className={`relative z-10 px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
//                 billingCycle === 'monthly'
//                   ? 'text-white'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setBillingCycle('yearly')}
//               className={`relative z-10 px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
//                 billingCycle === 'yearly'
//                   ? 'text-white'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               Yearly
//             </button>
//             <motion.div
//               className="absolute top-1 h-[calc(100%-8px)] bg-green-600 rounded-full shadow-md z-0"
//               animate={{
//                 left: billingCycle === 'monthly' ? '4px' : 'calc(50%)',
//                 width: billingCycle === 'monthly' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
//               }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             />
//           </div>
//         </motion.div>

//         {/* Pricing Cards */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={container}
//           className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
//         >
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover={{ y: -4, transition: { duration: 0.2 } }}
//               className={`relative p-8 rounded-xl border bg-white transition-all duration-300 ${
//                 plan.popular
//                   ? 'border-green-500 shadow-lg'
//                   : 'border-gray-200 hover:border-green-300 hover:shadow-md'
//               }`}
//             >
//               {plan.popular && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="absolute -top-3 right-6"
//                 >
//                   <div className="relative">
//                     <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
//                       Most Popular
//                     </div>
//                     <div className="absolute -bottom-1 right-4 w-2 h-2 bg-green-600 transform rotate-45"></div>
//                   </div>
//                 </motion.div>
//               )}

//               <div className="text-center mb-8">
//                 <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-green-100 text-green-600">
//                   {plan.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   {plan.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-6">
//                   {plan.description}
//                 </p>
//                 <div className="mt-4">
//                   <span className="text-4xl font-bold text-gray-900">
//                     {getDisplayedPrice(plan)}
//                   </span>
//                   {plan.price !== 'Custom' && (
//                     <span className="ml-1 text-lg text-gray-600">
//                       {billingCycle === 'monthly' ? `/${plan.period}` : '/year'}
//                     </span>
//                   )}
//                 </div>
//                 {billingCycle === 'yearly' && plan.price !== 'Custom' && (
//                   <div className="mt-2 text-xs text-green-600 font-medium">
//                     Save 20% annually
//                   </div>
//                 )}
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start space-x-3">
//                     <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <div className="w-4 h-4 rounded-sm bg-gray-900 flex items-center justify-center">
//                         <Check className="w-3 h-3 text-white stroke-[3]" />
//                       </div>
//                     </div>
//                     <span className="text-sm text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full"
//               >
//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
//                     plan.popular
//                       ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
//                       : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 hover:shadow-md'
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

      
//       </div>
//     </div>
//   )
// }











'use client'

import { motion } from 'framer-motion'
import { Check, Star, Smartphone, Building2 } from 'lucide-react'
import { useState } from 'react'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  icon: React.ReactNode
  popular: boolean
  features: string[]
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const parsePrice = (priceStr: string): number =>
    parseFloat(priceStr.replace(/[₹,]/g, ''))

  const formatPrice = (num: number): string =>
    `₹${num.toLocaleString('en-IN')}`

  const getDisplayedPrice = (plan: Plan) => {
    if (plan.price === 'Custom') return 'Custom'
    const monthlyValue = parsePrice(plan.price)
    if (billingCycle === 'monthly') return plan.price
    const yearly = Math.round(monthlyValue * 12 * 0.8)
    return formatPrice(yearly)
  }

  const plans: Plan[] = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: 'month',
      description: 'Perfect for small restaurants',
      icon: <Smartphone className="w-6 h-6" />,
      popular: false,
      features: [
        '1 Restaurant Location',
        'Digital QR Menu',
        'Basic POS System',
        'Table Management',
        'Kitchen Display',
        'Email Support',
        '100 Orders/month'
      ]
    },
    {
      name: 'Professional',
      price: '₹7,999',
      period: 'month',
      description: 'Most popular choice',
      icon: <Star className="w-6 h-6 fill-current" />,
      popular: true,
      features: [
        'Up to 5 Locations',
        'Advanced POS System',
        'Delivery Management',
        'Analytics Dashboard',
        'Custom Branding',
        'Priority Support',
        'Unlimited Orders',
        'API Access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large restaurant chains',
      icon: <Building2 className="w-6 h-6" />,
      popular: false,
      features: [
        'Unlimited Locations',
        'White Label Solution',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Custom Integrations',
        'Advanced Analytics',
        'Training & Onboarding',
        'SLA Guarantee'
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.div variants={item} className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              💰 Transparent Pricing
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Choose Your Perfect Plan
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            No hidden fees. Cancel anytime. Start with a 14-day free trial.
          </motion.p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="flex justify-center mb-16"
        >
          <div className="relative inline-flex items-center bg-white rounded-full shadow-sm border border-gray-200 p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative z-10 px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
            <motion.div
              className="absolute top-1 h-[calc(100%-8px)] bg-blue-600 rounded-full shadow-md z-0"
              animate={{
                left: billingCycle === 'monthly' ? '4px' : 'calc(50%)',
                width:
                  billingCycle === 'monthly'
                    ? 'calc(50% - 4px)'
                    : 'calc(50% - 4px)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative p-8 rounded-xl border bg-white transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-3 right-6"
                >
                  <div className="relative">
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                      Most Popular
                    </div>
                    <div className="absolute -bottom-1 right-4 w-2 h-2 bg-blue-600 transform rotate-45"></div>
                  </div>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-blue-100 text-blue-600">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {getDisplayedPrice(plan)}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="ml-1 text-lg text-gray-600">
                      {billingCycle === 'monthly'
                        ? `/${plan.period}`
                        : '/year'}
                    </span>
                  )}
                </div>
                {billingCycle === 'yearly' && plan.price !== 'Custom' && (
                  <div className="mt-2 text-xs text-blue-600 font-medium">
                    Save 20% annually
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-4 h-4 rounded-sm bg-blue-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <button
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:shadow-md'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
