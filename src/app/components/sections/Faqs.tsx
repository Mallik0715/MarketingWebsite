


// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

// const faqs = [
//     {
//         question: "Why do I need a digital restaurant management system?",
//         answer:
//             "Manual processes lead to errors, delays, and missed opportunities. Our platform automates ordering, kitchen coordination, delivery tracking, and analytics — so you can focus on hospitality, not paperwork."
//     },
//     {
//         question: "Can I use this for both dine-in and delivery?",
//         answer:
//             "Absolutely! Our system unifies dine-in (with QR menus & table management), takeaway (with ready-time alerts), and delivery (with real-time rider tracking) in one dashboard."
//     },
//     {
//         question: "Is there a waiter call feature?",
//         answer:
//             "Yes! Guests can tap a 'Call Waiter' button on their phone (via QR menu), and your staff receives an instant alert with the table number — no more waving across the room."
//     },
//     {
//         question: "How long does setup take?",
//         answer:
//             "Most restaurants are fully onboarded in under 48 hours. We handle menu digitization, staff training, and hardware integration — with 24/7 support."
//     },
//     {
//         question: "Do you support multi-location management?",
//         answer:
//             "Yes. Manage all your outlets from a single dashboard. View consolidated reports, assign staff across venues, and maintain brand consistency effortlessly."
//     },
//     {
//         question: "Is my data secure?",
//         answer:
//             "We use bank-grade encryption, daily backups, and GDPR-compliant practices. Your data never leaves secure cloud servers, and you retain full ownership at all times."
//     }
// ]

// const FAQSection = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(0)
//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//     const toggleAccordion = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index)
//     }

//     return (
//         <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
//             {/* Grid pattern background */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px] opacity-20"></div>

//             {/* Floating Gradient Orbs */}
//             <motion.div
//                 className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/30 via-green-200/20 to-transparent rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -25, 0] }}
//                 transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//                 className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-200/30 via-emerald-200/20 to-transparent rounded-full blur-3xl"
//                 animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0], y: [0, 25, 0] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//             />

//             <div className="relative max-w-4xl mx-auto">
//                 {/* Header */}
//                 <motion.div
//                     className="text-center mb-20"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//                 >
//                     <motion.div
//                         className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 backdrop-blur-xl border border-emerald-500 text-white rounded-full text-sm font-semibold shadow-xl shadow-emerald-600/20 mb-8"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.2, duration: 0.6 }}
//                         whileHover={{ scale: 1.05 }}
//                     >
//                         <HelpCircle className="w-4 h-4" />
//                         <span>Got Questions?</span>
//                         <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
//                     </motion.div>

//                     <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
//                         Everything You Need{' '}
//                         <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
//                             To Know
//                         </span>
//                     </h2>

//                     <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//                         Answers to the most common questions from restaurant owners like you.
//                     </p>
//                 </motion.div>

//                 {/* FAQ Accordion */}
//                 <div className="space-y-5">
//                     {faqs.map((faq, index) => (
//                         <motion.div
//                             key={index}
//                             className="relative group"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, margin: "-50px" }}
//                             transition={{ delay: index * 0.06, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
//                             onHoverStart={() => setHoveredIndex(index)}
//                             onHoverEnd={() => setHoveredIndex(null)}
//                         >
//                             {/* Hover gradient border */}
//                             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>

//                             <div className="relative bg-white rounded-2xl border border-slate-200 shadow-md shadow-slate-200/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-300">
//                                 {/* Hover background */}
//                                 <motion.div
//                                     className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent opacity-0"
//                                     animate={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 />

//                                 {/* Accordion Header */}
//                                 <button
//                                     className="relative w-full px-7 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
//                                     onClick={() => toggleAccordion(index)}
//                                     aria-expanded={openIndex === index}
//                                     aria-controls={`faq-${index}`}
//                                 >
//                                     <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
//                                         {faq.question}
//                                     </h3>

//                                     <motion.div
//                                         animate={{ rotate: openIndex === index ? 180 : 0 }}
//                                         transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
//                                         className="flex-shrink-0"
//                                     >
//                                         <div
//                                             className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
//                                                 ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
//                                                 : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600'
//                                                 }`}
//                                         >
//                                             <ChevronDown className="w-5 h-5" />
//                                         </div>
//                                     </motion.div>
//                                 </button>

//                                 {/* Accordion Content */}
//                                 <AnimatePresence initial={false}>
//                                     {openIndex === index && (
//                                         <motion.div
//                                             key="content"
//                                             id={`faq-${index}`}
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{
//                                                 height: 'auto',
//                                                 opacity: 1,
//                                                 transition: {
//                                                     height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
//                                                     opacity: { duration: 0.25 }
//                                                 }
//                                             }}
//                                             exit={{
//                                                 height: 0,
//                                                 opacity: 0,
//                                                 transition: {
//                                                     height: { duration: 0.25 },
//                                                     opacity: { duration: 0.2 }
//                                                 }
//                                             }}
//                                             className="overflow-hidden"
//                                         >
//                                             <div className="px-7 pb-7 pt-2">
//                                                 <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent mb-4 rounded-full"></div>
//                                                 <p className="text-slate-600 leading-relaxed text-base md:text-lg">
//                                                     {faq.answer}
//                                                 </p>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* CTA */}
//                 <motion.div
//                     className="text-center mt-24"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5, duration: 0.7 }}
//                 >
//                     <p className="text-slate-600 text-lg mb-6 font-medium">Still have questions?</p>
//                     <motion.a
//                         href="#"
//                         className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 relative overflow-hidden group"
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.97 }}
//                     >
//                         <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                         <span className="relative">Talk to Our Team</span>
//                         <motion.svg
//                             className="w-5 h-5 relative"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             animate={{ x: [0, 5, 0] }}
//                             transition={{ duration: 1.4, repeat: Infinity }}
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                         </motion.svg>
//                     </motion.a>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// export default FAQSection







'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'Why do I need a digital restaurant management system?',
    answer:
      'Manual processes lead to errors, delays, and missed opportunities. Our platform automates ordering, kitchen coordination, delivery tracking, and analytics — so you can focus on hospitality, not paperwork.'
  },
  {
    question: 'Can I use this for both dine-in and delivery?',
    answer:
      'Absolutely! Our system unifies dine-in (with QR menus & table management), takeaway (with ready-time alerts), and delivery (with real-time rider tracking) in one dashboard.'
  },
  {
    question: 'Is there a waiter call feature?',
    answer:
      "Yes! Guests can tap a 'Call Waiter' button on their phone (via QR menu), and your staff receives an instant alert with the table number — no more waving across the room."
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most restaurants are fully onboarded in under 48 hours. We handle menu digitization, staff training, and hardware integration — with 24/7 support.'
  },
  {
    question: 'Do you support multi-location management?',
    answer:
      'Yes. Manage all your outlets from a single dashboard. View consolidated reports, assign staff across venues, and maintain brand consistency effortlessly.'
  },
  {
    question: 'Is my data secure?',
    answer:
      'We use bank-grade encryption, daily backups, and GDPR-compliant practices. Your data never leaves secure cloud servers, and you retain full ownership at all times.'
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Floating gradient background orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 via-sky-200/20 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-sky-200/30 via-blue-200/20 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 backdrop-blur-xl border border-blue-500 text-white rounded-full text-sm font-semibold shadow-xl shadow-blue-600/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Everything You Need{' '}
            <span className="block bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">
              To Know
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Answers to the most common questions from restaurant owners like
            you.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
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
              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>

              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-md shadow-slate-200/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-slate-300">
                {/* Accordion Header */}
                <button
                  className="relative w-full px-7 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
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
                          opacity: { duration: 0.25 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 pt-2">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent mb-4 rounded-full"></div>
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="text-slate-600 text-lg mb-6 font-medium">
            Still have questions?
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Talk to Our Team</span>
            <motion.svg
              className="w-5 h-5 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection

