// // src/components/sections/TestimonialsSection.tsx
// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Rajesh Kumar',
//     role: 'Owner, Spice Garden',
//     content: 'Marinate360 transformed our restaurant operations. Orders are faster, kitchen is more efficient, and customers love the digital experience!',
//     rating: 5,
//     image: '👨‍🍳'
//   },
//   {
//     name: 'Priya Sharma',
//     role: 'Manager, Urban Bites',
//     content: 'The multi-tenant feature is perfect for our 3 locations. We can manage everything from one dashboard. Highly recommended!',
//     rating: 5,
//     image: '👩‍💼'
//   },
//   {
//     name: 'Ahmed Ali',
//     role: 'Chef, The Royal Kitchen',
//     content: 'Kitchen display system is a game-changer. No more missed orders or confusion. Everything is organized and efficient.',
//     rating: 5,
//     image: '👨‍🍳'
//   }
// ];

// const Testimonials = () => {
//   return (
//     <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-emerald-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fadeInUp">
//           <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
//             ⭐ Customer Love
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             What Our Customers Say
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Join hundreds of satisfied restaurant owners who transformed their business
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="flex items-center mb-6">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 leading-relaxed italic">
//                 &quot;{testimonial.content}&quot;
//               </p>
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
//                   {testimonial.image}
//                 </div>
//                 <div>
//                   <div className="font-bold text-gray-900">{testimonial.name}</div>
//                   <div className="text-sm text-gray-600">{testimonial.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <style jsx>{`
//           .animate-fadeInUp {
//             animation: fadeInUp 0.6s ease-out forwards;
//           }
//           @keyframes fadeInUp {
//             from { opacity: 0; transform: translateY(30px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



// src/components/sections/TestimonialsSection.tsx
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Spice Garden',
    content:
      'Marinate360 transformed our restaurant operations. Orders are faster, kitchen is more efficient, and customers love the digital experience!',
    rating: 5,
    image: '👨‍🍳'
  },
  {
    name: 'Priya Sharma',
    role: 'Manager, Urban Bites',
    content:
      'The multi-tenant feature is perfect for our 3 locations. We can manage everything from one dashboard. Highly recommended!',
    rating: 5,
    image: '👩‍💼'
  },
  {
    name: 'Ahmed Ali',
    role: 'Chef, The Royal Kitchen',
    content:
      'Kitchen display system is a game-changer. No more missed orders or confusion. Everything is organized and efficient.',
    rating: 5,
    image: '👨‍🍳'
  }
]

const Testimonials = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            ⭐ Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied restaurant owners who transformed their business
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Star Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Testimonials
