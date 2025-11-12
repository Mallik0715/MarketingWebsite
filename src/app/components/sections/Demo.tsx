'use client'

import {
  QrCode,
  Smartphone,
  ShoppingBag,
  UtensilsCrossed,
  Clock,
  Star,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react'
import { useState, useEffect } from 'react'

const howItWorks = [
  {
    step: '01',
    title: 'QR Code Scan',
    description: 'Customers scan the QR code to instantly access your digital menu',
    icon: QrCode,
    stats: '< 2 sec'
  },
  {
    step: '02',
    title: 'Browse Menu',
    description: 'Interactive menu with images and real-time availability',
    icon: Smartphone,
    stats: '100+ items'
  },
  {
    step: '03',
    title: 'Order Placement',
    description: 'Seamless ordering with customization and instant confirmation',
    icon: ShoppingBag,
    stats: '3-tap process'
  },
  {
    step: '04',
    title: 'Kitchen Integration',
    description: 'Orders route directly to kitchen with priority management',
    icon: UtensilsCrossed,
    stats: 'Instant delivery'
  },
  {
    step: '05',
    title: 'Live Tracking',
    description: 'Real-time status updates keep customers informed',
    icon: Clock,
    stats: 'Live updates'
  },
  {
    step: '06',
    title: 'Feedback Loop',
    description: 'Capture valuable insights through ratings and reviews',
    icon: Star,
    stats: '5-star system'
  }
]

const Demo = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % howItWorks.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleStepClick = (index: number) => {
    if (Math.abs(index - activeStep) <= 2) {
      setActiveStep(index)
      setIsAutoPlay(false)
    }
  }

  const handlePrevious = () => {
    setActiveStep((prev) => (prev - 1 + howItWorks.length) % howItWorks.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % howItWorks.length)
    setIsAutoPlay(false)
  }

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return
    setIsDragging(false)

    const diff = startX - clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrevious()
    }
  }

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 lg:py-16  bg-linear-to-br from-[#0a1628] via-[#1a2f5c] to-[#2d4a8f] text-white overflow-hidden">
      <div className="absolute inset-0  bg-size-[32px_32px]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xl font-semibold mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Six Simple <span className="text-blue-600">Steps</span>
          </h2>
          <p className="text-base text-gray-100 max-w-xl mx-auto">
            From scan to satisfaction in seconds
          </p>
        </div>
        <div
          className="relative h-[420px] flex items-center justify-center perspective-1000 touch-pan-y mb-1"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX)}
          onMouseLeave={(e) => isDragging && handleDragEnd(e.clientX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        >
          <div className="relative w-full max-w-5xl h-full">
            {howItWorks.map((item, index) => {
              const offset = index - activeStep
              const absOffset = Math.abs(offset)
              const isActive = index === activeStep

              const translateX = offset * 320
              const translateZ = isActive ? 0 : -150 - absOffset * 80
              const rotateY = offset * -12
              const scale = isActive ? 1 : Math.max(0.75 - absOffset * 0.08, 0.6)
              const opacity = absOffset > 2 ? 0 : Math.max(1 - absOffset * 0.35, 0.2)

              return (
                <div
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`absolute left-1/2 top-1/2 w-full max-w-sm transition-all duration-700 ease-out ${
                    absOffset <= 2 ? 'cursor-pointer' : 'pointer-events-none'
                  }`}
                  style={{
                    transform: `
                      translateX(calc(-50% + ${translateX}px))
                      translateY(-50%)
                      translateZ(${translateZ}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                    opacity: opacity,
                    zIndex: 20 - absOffset,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    className={`relative p-6 rounded-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-white border-2 border-blue-500 shadow-2xl shadow-blue-500/20'
                        : 'bg-white border border-gray-200 shadow-xl'
                    }`}
                  >
                    <div className="relative z-10">
                      {/* Icon & Step */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl transition-all duration-500 ${
                            isActive
                              ? 'bg-blue-500 shadow-lg shadow-blue-500/30'
                              : 'bg-gray-100'
                          }`}
                        >
                          <item.icon
                            className={`w-6 h-6 ${
                              isActive ? 'text-white' : 'text-gray-600'
                            }`}
                            strokeWidth={2}
                          />
                        </div>
                        <div
                          className={`text-sm font-bold ${
                            isActive ? 'text-blue-600' : 'text-gray-400'
                          }`}
                        >
                          {item.step}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
                          isActive ? 'text-gray-600' : 'text-gray-500'
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Stats */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-gray-50 text-gray-600'
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        {item.stats}
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute top-6 right-6">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>

                    {/* Glow effect */}
                    {isActive && (
                      <div className="absolute -inset-1 bg-blue-500/10 rounded-2xl blur-xl -z-10"></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col items-center gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            {howItWorks.map((_, index) => (
              <button
              aria-label='button'
                key={index}
                onClick={() => handleStepClick(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeStep
                    ? 'w-8 bg-blue-500'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Compact Control Row */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              className="px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm"
            >
              Previous
            </button>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlay
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Next Step
            </button>
          </div>

          {/* CTA */}
          <button className="group mt-2 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            View Live Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1500px;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  )
}

export default Demo
