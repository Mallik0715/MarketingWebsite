// import { Utensils, ShoppingBag, Zap, Star } from 'lucide-react';

// const stats = [
//   { number: '500+', label: 'Restaurants', icon: Utensils },
//   { number: '50K+', label: 'Daily Orders', icon: ShoppingBag },
//   { number: '99.9%', label: 'Uptime', icon: Zap },
//   { number: '4.9/5', label: 'Rating', icon: Star }
// ];

// const StatSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
//         {stats.map((stat, index) => (
//           <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4">
//               <stat.icon className="w-6 h-6 text-white" />
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
//             <div className="text-gray-600">{stat.label}</div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StatSection;

'use client'

import { motion } from 'framer-motion'
import { Utensils, ShoppingBag, Zap, Star } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Restaurants', icon: Utensils },
  { number: '50K+', label: 'Daily Orders', icon: ShoppingBag },
  { number: '99.9%', label: 'Uptime', icon: Zap },
  { number: '4.9/5', label: 'Rating', icon: Star }
]

const StatSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    hover: { y: -8, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover="hover"
            className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 mx-auto">
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default StatSection