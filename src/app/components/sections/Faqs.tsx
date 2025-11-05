



// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

// const faqs = [
//   {
//     question: 'Why do I need a digital restaurant management system?',
//     answer:
//       'Manual processes lead to errors, delays, and missed opportunities. Our platform automates ordering, kitchen coordination, delivery tracking, and analytics — so you can focus on hospitality, not paperwork.'
//   },
//   {
//     question: 'Can I use this for both dine-in and delivery?',
//     answer:
//       'Absolutely! Our system unifies dine-in (with QR menus & table management), takeaway (with ready-time alerts), and delivery (with real-time rider tracking) in one dashboard.'
//   },
//   {
//     question: 'Is there a waiter call feature?',
//     answer:
//       "Yes! Guests can tap a 'Call Waiter' button on their phone (via QR menu), and your staff receives an instant alert with the table number — no more waving across the room."
//   },
//   {
//     question: 'How long does setup take?',
//     answer:
//       'Most restaurants are fully onboarded in under 48 hours. We handle menu digitization, staff training, and hardware integration — with 24/7 support.'
//   },
//   {
//     question: 'Do you support multi-location management?',
//     answer:
//       'Yes. Manage all your outlets from a single dashboard. View consolidated reports, assign staff across venues, and maintain brand consistency effortlessly.'
//   },
//   {
//     question: 'Is my data secure?',
//     answer:
//       'We use bank-grade encryption, daily backups, and GDPR-compliant practices. Your data never leaves secure cloud servers, and you retain full ownership at all times.'
//   }
// ]

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0)
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index)
//   }

//   return (
//     <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
//       {/* <motion.div
//         className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 via-sky-200/20 to-transparent rounded-full blur-3xl"
//         animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -25, 0] }}
//         transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-sky-200/30 via-blue-200/20 to-transparent rounded-full blur-3xl"
//         animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0], y: [0, 25, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//       /> */}

//       <div className="relative max-w-4xl mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//         >
//           <motion.div
//             className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 backdrop-blur-xl border border-blue-500 text-white rounded-full text-sm font-semibold shadow-xl shadow-blue-600/20 mb-8"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <HelpCircle className="w-4 h-4" />
//             <span>Got Questions?</span>
//             <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
//           </motion.div>

//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
//             Everything You Need{' '}
//             <span className="block bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">
//               To Know
//             </span>
//           </h2>

//           <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Answers to the most common questions from restaurant owners like
//             you.
//           </p>
//         </motion.div>

//         {/* FAQ Accordion */}
//         <div className="space-y-5">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="relative group"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-50px' }}
//               transition={{
//                 delay: index * 0.06,
//                 duration: 0.5,
//                 ease: [0.25, 1, 0.5, 1]
//               }}
//               onHoverStart={() => setHoveredIndex(index)}
//               onHoverEnd={() => setHoveredIndex(null)}
//             >
//               {/* Hover gradient border */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>

//               <div className="relative bg-white rounded-2xl border border-slate-200 shadow-md shadow-slate-200/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-slate-300">
//                 {/* Accordion Header */}
//                 <button
//                   className="relative w-full px-7 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
//                   onClick={() => toggleAccordion(index)}
//                   aria-expanded={openIndex === index}
//                   aria-controls={`faq-${index}`}
//                 >
//                   <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
//                     {faq.question}
//                   </h3>

//                   <motion.div
//                     animate={{ rotate: openIndex === index ? 180 : 0 }}
//                     transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
//                     className="flex-shrink-0"
//                   >
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         openIndex === index
//                           ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
//                           : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
//                       }`}
//                     >
//                       <ChevronDown className="w-5 h-5" />
//                     </div>
//                   </motion.div>
//                 </button>

//                 {/* Accordion Content */}
//                 <AnimatePresence initial={false}>
//                   {openIndex === index && (
//                     <motion.div
//                       key="content"
//                       id={`faq-${index}`}
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{
//                         height: 'auto',
//                         opacity: 1,
//                         transition: {
//                           height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
//                           opacity: { duration: 0.25 }
//                         }
//                       }}
//                       exit={{
//                         height: 0,
//                         opacity: 0,
//                         transition: {
//                           height: { duration: 0.25 },
//                           opacity: { duration: 0.2 }
//                         }
//                       }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-7 pb-7 pt-2">
//                         <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent mb-4 rounded-full"></div>
//                         <p className="text-slate-600 leading-relaxed text-base md:text-lg">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="text-center mt-24"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//         >
//           <p className="text-slate-600 text-lg mb-6 font-medium">
//             Still have questions?
//           </p>
//           <motion.a
//             href="#"
//             className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 relative overflow-hidden group"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             <span className="relative">Talk to Our Team</span>
//             <motion.svg
//               className="w-5 h-5 relative"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 1.4, repeat: Infinity }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </motion.svg>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default FAQSection

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'Why do I need a digital restaurant management system?',
    answer:
      'Manual processes lead to errors, delays, and missed opportunities. Our platform automates ordering, kitchen coordination, delivery tracking, and analytics — so you can focus on hospitality, not paperwork.',
    icon: '🚀'
  },
  {
    question: 'Can I use this for both dine-in and delivery?',
    answer:
      'Absolutely! Our system unifies dine-in (with QR menus & table management), takeaway (with ready-time alerts), and delivery (with real-time rider tracking) in one dashboard.',
    icon: '🍽️'
  },
  {
    question: 'Is there a waiter call feature?',
    answer:
      "Yes! Guests can tap a 'Call Waiter' button on their phone (via QR menu), and your staff receives an instant alert with the table number — no more waving across the room.",
    icon: '🔔'
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most restaurants are fully onboarded in under 48 hours. We handle menu digitization, staff training, and hardware integration — with 24/7 support.',
    icon: '⚡'
  },
  {
    question: 'Do you support multi-location management?',
    answer:
      'Yes. Manage all your outlets from a single dashboard. View consolidated reports, assign staff across venues, and maintain brand consistency effortlessly.',
    icon: '🏢'
  },
  {
    question: 'Is my data secure?',
    answer:
      'We use bank-grade encryption, daily backups, and GDPR-compliant practices. Your data never leaves secure cloud servers, and you retain full ownership at all times.',
    icon: '🔒'
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Subtle animated background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/20 via-sky-200/10 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-200/20 via-amber-200/10 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 backdrop-blur-xl border border-blue-400/50 text-white rounded-full text-sm font-semibold shadow-xl shadow-blue-600/20 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight px-4">
            Everything You Need{' '}
            <span className="block bg-linear-to-r to-orange-600 bg-clip-text text-transparent">
              To Know
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Answers to the most common questions from restaurant owners like you.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1]
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Enhanced hover gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                animate={hoveredIndex === index ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>

              <div className="relative bg-white rounded-2xl border-2 border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Accordion Header */}
                <button
                  className="relative w-full px-5 sm:px-7 py-5 sm:py-6 text-left flex justify-between items-start sm:items-center gap-3 sm:gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Emoji Icon */}
                    {/* <motion.div 
                      className="flex-shrink-0 text-2xl sm:text-3xl"
                      animate={openIndex === index ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {faq.icon}
                    </motion.div> */}

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 pr-2">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/30 scale-110'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-sky-50 group-hover:text-blue-600 group-hover:scale-105'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.25, delay: 0.1 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25 },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0 sm:pt-2">
                        <motion.div 
                          className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-orange-400 mb-4 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '5rem' }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        ></motion.div>
                        <motion.p 
                          className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg pl-0 sm:pl-11"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom accent line on open */}
                {openIndex === index && (
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-orange-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-20 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <p className="text-slate-700 text-base sm:text-lg font-semibold">
                Still have questions?
              </p>
            </div>

            <motion.a
              href="#"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-size-200 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative text-sm sm:text-base">Talk to Our Team</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </div>

          <motion.p 
            className="text-slate-500 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Get a response within 24 hours • Free consultation
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection