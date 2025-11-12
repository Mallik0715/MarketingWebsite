

'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full mb-6 shadow-lg shadow-blue-200 transform hover:scale-105 transition-transform duration-300">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">FAQ</span>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Got Questions?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Find quick answers to common questions about our restaurant management platform
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 transition-all duration-300 transform ${
                openIndex === index
                  ? 'border-blue-500  scale-[1.02]'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-[1.01]'
              }`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg' 
                      : 'bg-gray-100 group-hover:bg-blue-100'
                  }`}>
                    <span className={`text-sm font-bold transition-colors ${
                      openIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <span className={`font-bold text-lg transition-colors ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-blue-100 rotate-180' 
                    : 'bg-gray-50 group-hover:bg-blue-50'
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-colors ${
                      openIndex === index 
                        ? 'text-blue-600' 
                        : 'text-gray-400 group-hover:text-blue-600'
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  id={`faq-content-${index}`}
                  className="px-8 pb-6 text-gray-700 leading-relaxed"
                >
                  <div className="pl-12 pt-2 p-2 border-l-4 bg-gray-100/50 border-blue-200">
                    <p className="text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center shadow-2xl shadow-blue-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
              Our team is here to help you get started with the perfect solution for your restaurant
            </p>
          <a
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSfUprklcJQhsZ2yDWW2fo0BclVDimmnL6wdVaNkQ5xdH55sBQ/viewform?usp=publish-editor',
                '_blank',
                'noopener,noreferrer' 
            )
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
               >
              <MessageCircle className="w-5 h-5" />
                Contact Our Team
          </a>
            <p className="text-blue-200 text-sm mt-4">
              ⚡ Average response time: 2 hours • Free consultation included
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection