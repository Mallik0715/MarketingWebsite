// 'use client'

// import React from 'react'
// import { Target, Users, TrendingUp, Award } from 'lucide-react'

// const values = [
//   {
//     icon: Target,
//     title: 'Our Mission',
//     description: 'Empowering restaurants with innovative technology to deliver exceptional dining experiences'
//   },
//   {
//     icon: Users,
//     title: 'Customer First',
//     description: 'We prioritize customer success and build solutions that truly solve real problems'
//   },
//   {
//     icon: TrendingUp,
//     title: 'Continuous Growth',
//     description: 'Always evolving and improving our platform based on user feedback'
//   },
//   {
//     icon: Award,
//     title: 'Quality Service',
//     description: 'Committed to providing reliable, high-quality solutions and support'
//   }
// ]

// export default function About() {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fadeInUp">
//           <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
//             🏢 About Us
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Revolutionizing Restaurant Management
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We &apos; re on a mission to help restaurants thrive in the digital age with powerful, easy-to-use technology
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {values.map((value, index) => (
//             <div
//               key={index}
//               className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//                 <value.icon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{value.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-center text-white">
//           <h3 className="text-3xl font-bold mb-4">Join the Digital Revolution</h3>
//           <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
//             Trusted by 500+ restaurants across India. Be part of the future of restaurant management.
//           </p>
//           <button className="px-10 py-4 bg-white text-green-600 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
//             Get Started Today
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }






'use client'

import React from 'react'
import { Target, Users, TrendingUp, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'Empowering restaurants with innovative technology to deliver exceptional dining experiences'
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'We prioritize customer success and build solutions that truly solve real problems'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description:
      'Always evolving and improving our platform based on user feedback'
  },
  {
    icon: Award,
    title: 'Quality Service',
    description:
      'Committed to providing reliable, high-quality solutions and support'
  }
]

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🏢 About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Restaurant Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re on a mission to help restaurants thrive in the digital age with
            powerful, easy-to-use technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join the Digital Revolution
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Trusted by 500+ restaurants across India. Be part of the future of
            restaurant management.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}
