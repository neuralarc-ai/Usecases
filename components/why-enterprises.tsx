"use client"

import React from 'react'
import Link from 'next/link'
import { X, Check, ArrowRight } from 'lucide-react'

const multipleToolsPoints = [
  "15+ separate subscriptions to manage",
  "Data silos across platforms",
  "Complex integration nightmares",
  "Training overhead for each tool",
  "$250K+ annual costs"
]

const heliumPlatformPoints = [
  "One platform, unlimited capabilities",
  "Unified data across all operations",
  "Native integrations with everything",
  "Single learning curve for entire team",
  "$50K annual investment"
]

const metrics = [
  { value: "10x", label: "Faster Deployment" },
  { value: "80%", label: "Cost Reduction" },
  { value: "100%", label: "Integration Coverage" },
  { value: "24/7", label: "Autonomous Operation" }
]

export default function WhyEnterprises() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Metrics Section - White Background at Top */}
      <div className="relative flex items-center justify-center bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-sora text-[#E0693d]"
                >
                  {metric.value}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why CXOs Choose Helium Section - Orange Background */}
      <div 
        className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#E0693d]"
      >
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-24">

        {/* Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center font-sora"
        >
          Why CXOs Choose Helium
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
          The difference between fragmented tools and integrated intelligence.
        </p>

        {/* Comparison Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Left Box - Multiple Tools (Disadvantages) */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            {/* Header with Red X Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sora"
              >
                Multiple Tools
              </h3>
            </div>

            {/* Bullet Points - Left aligned */}
            <ul className="space-y-3 sm:space-y-4">
              {multipleToolsPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white text-xl sm:text-2xl mt-0.5 shrink-0">-</span>
                  <span className="text-white text-base sm:text-lg leading-relaxed text-left">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Box - Helium Platform (Advantages) */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-green-400/60 shadow-lg shadow-green-400/20">
            {/* Header with Green Checkmark Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
              </div>
              <h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-sora"
              >
                Helium Platform
              </h3>
            </div>

            {/* Bullet Points - Left aligned */}
            <ul className="space-y-3 sm:space-y-4">
              {heliumPlatformPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-0.5 shrink-0" strokeWidth={3} />
                  <span className="text-white text-base sm:text-lg leading-relaxed text-left">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="/why-helium"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg font-sora"
          >
            Explore Why to Choose Helium
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

