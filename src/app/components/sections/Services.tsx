

import { Utensils, ShoppingBag, Bike, ChefHat, Truck, Calendar } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Utensils,
    title: 'Dine-In',
    description: 'Seamless table management, digital menus, and real-time order tracking for in-house guests.',
    gradient: 'from-blue-500 to-sky-600',
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway',
    description: 'Effortless pickup order handling with ready-time alerts and customer notifications.',
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    icon: Bike,
    title: 'Delivery',
    description: 'End-to-end delivery tracking, rider assignment, and live status updates for customers.',
    gradient: 'from-blue-400 to-sky-600',
  },
  {
    icon: ChefHat,
    title: 'Catering Services',
    description: 'Delicious, customizable menus for weddings, corporate events, and private gatherings—crafted with care and served with professionalism.',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    icon: Truck,
    title: 'Food Truck',
    description: 'Mobile ordering and payment solutions tailored for food trucks, with location-based promotions and streamlined operations.',
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    icon: Calendar,
    title: 'Reservations',
    description: 'Smart table booking system with waitlist management, deposit handling, and automated reminders for your guests.',
    gradient: 'from-sky-400 to-blue-600',
  }
]

interface Service {
  icon: typeof Utensils
  title: string
  description: string
  gradient: string
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Smooth filling blue gradient overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} pointer-events-none`}
        style={{
          clipPath: isHovered ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          transition: 'clip-path 2.0s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-6 shadow-md"
          style={{
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <service.icon
            className="w-8 h-8 transition-colors hover:text-black duration-800"
            style={{
              color: isHovered ? '#000000' : '#111827'
            }}
          />
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold mb-3 transition-colors duration-300"
          style={{
            color: isHovered ? '#ffffff' : '#111827'
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-base leading-relaxed transition-colors duration-700"
          style={{
            color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#6B7280'
          }}
        >
          {service.description}
        </p>

        {/* Decorative corner accent */}
        <div
          className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${service.gradient} rounded-tl-full opacity-0 transition-opacity duration-10000`}
          style={{
            opacity: isHovered ? 0.15 : 0
          }}
        />
      </div>
    </div>
  )
}

const ServicesSection = () => {
  return (
    <section className="relative py-24 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-200 text-blue-600 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <h2 className='text-xl '>Our Services</h2>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            End-to-End Restaurant
            <span className="block bg-gradient-to-r from-blue-400 via-sky-600 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From table to doorstep — we power every step of your customer&apos;s journey with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA or additional text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Trusted by 500+ restaurants worldwide
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection