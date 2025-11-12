
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
  yearlyPrice?: string // Added optional yearly price
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  // 🔹 Updated plans with fixed yearly pricing
  const plans: Plan[] = [
    {
      name: 'Marinate Menu',
      price: '₹799',
      yearlyPrice: '₹6,999',
      period: 'month',
      description: 'Ideal for restaurants starting digital menus',
      icon: <Smartphone className="w-6 h-6" />,
      popular: false,
      features: [
        'Unlimited QR Code Menu Generation',
        'Unlimited Tables & Floors Creation',
        'Easy Menu Management with Bulk Upload Feature',
        'CDN-Powered Menu with Real-Time Updates',
        'Customer Self-Service Digital Menu',
        'Call Waiter Feature',
        'Mobile-Responsive Design',
        'Email Support',
        'Subdomain with Restaurant Branding'
      ]
    },
    {
      name: 'Marinate Dine',
      price: '₹1,499',
      yearlyPrice: '₹14,999',
      period: 'month',
      description: 'Perfect for dine-in restaurants looking for automation',
      icon: <Star className="w-6 h-6 fill-current" />,
      popular: true,
      features: [
        'All Features from Marinate Menu',
        'Advanced Table Management',
        'Shared Order Access',
        'KOT (Kitchen Order Ticket) Printing',
        'Order Modification & Add-On Items',
        'Order Prioritization System',
        'Automated Bill Generation',
        'Multi-Mode Payment (Cash, UPI, Card)',
        'Bill Split Among Guests (Equal or Custom %)',
        'Payment Gateway Integration',
        'Visual Insights & Analytics Dashboard',
        'Detailed Business Reports',
        'Priority Customer Support'
      ]
    },
    {
      name: 'Marinate 360',
      price: 'Custom',
      period: '',
      description: 'The complete restaurant business management suite',
      icon: <Building2 className="w-6 h-6" />,
      popular: false,
      features: [
        'All Features from Marinate Menu + Marinate Dine',
        'Digital KOT (Kitchen Display System)',
        'Takeaway Order Management',
        'Home Delivery Management',
        'Catering Menu & Enquiry System',
        'Online Table Reservation',
        'Custom Responsive Website',
        'Free Domain & Hosting (1 Year)',
        'Dedicated Account Manager'
      ]
    }
  ]

  const getDisplayedPrice = (plan: Plan) => {
    if (plan.price === 'Custom') return 'Custom'
    if (billingCycle === 'yearly' && plan.yearlyPrice) {
      return plan.yearlyPrice
    }
    return plan.price
  }

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
            <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-blue-50 text-blue-700 text-2xl font-semibold border border-blue-200">
              Marinate 360 – Restaurant Software Packages
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Choose the Perfect Plan for Your Restaurant
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From QR menus to full restaurant management — scale effortlessly with Marinate 360.
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
                  ? 'text-white bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative z-10 px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'text-white bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
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
                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {getDisplayedPrice(plan)}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="ml-1 text-lg text-gray-600">
                      {billingCycle === 'monthly' ? `/${plan.period}` : '/year'}
                    </span>
                  )}
                </div>
                {billingCycle === 'yearly' && plan.price !== 'Custom' && (
                  <div className="mt-2 text-xs text-blue-600 font-medium">
                    Save with annual billing
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