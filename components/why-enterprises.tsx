"use client"

import React from 'react'
import { Sora } from 'next/font/google'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
})

interface EnterpriseCard {
  number: string
  title: string
  description: string
}

const enterpriseCards: EnterpriseCard[] = [
  {
    number: "01",
    title: "Eliminate Tool Sprawl",
    description: "Replace ChatGPT, Jasper, Perplexity, GenSpark, Abacus, and dozens of other specialized tools with one comprehensive platform. Reduce costs, complexity, and training overhead."
  },
  {
    number: "02",
    title: "Context That Learns",
    description: "Unlike generic AI tools, Helium's AIM system builds a master context model specific to your business, ensuring every interaction is informed by your data, rules, and preferences."
  },
  {
    number: "03",
    title: "Intelligent Orchestration",
    description: "Helix automatically selects the right LLMs and compute resources for each task, optimizing for quality, speed, and cost without manual configuration."
  },
  {
    number: "04",
    title: "Real Business Results",
    description: "Move beyond demos and pilots. Helium integrates deeply into workflows, adapts over time, and delivers measurable ROI — not just impressive demos."
  }
]

export default function WhyEnterprises() {
  return (
    <section className={`relative flex flex-col items-center justify-center bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${sora.variable}`}>
      {/* Title */}
      <h2 
        className={`${sora.variable} text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-12 text-center`}
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        Why Enterprises Choose Helium
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl">
        {enterpriseCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 sm:p-5 shadow-md border border-transparent hover:border-black hover:shadow-lg transition-all duration-200"
          >
            {/* Number */}
            <div className="mb-2">
              <span className="text-4xl sm:text-5xl font-light text-gray-300 leading-none">
                {card.number}
              </span>
            </div>

            {/* Title */}
            <h3 
              className={`${sora.variable} text-lg sm:text-xl font-bold text-black mb-2`}
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Why Helium Button */}
      <div className="mt-12">
        <Link
          href="/why-helium"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black rounded-lg font-medium text-black hover:bg-black hover:text-white transition-colors duration-200 group"
        >
          Explore Helium
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

