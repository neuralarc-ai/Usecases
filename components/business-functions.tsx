"use client"

import React from 'react'
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Megaphone, 
  Calculator, 
  Settings, 
  Scale, 
  Headphones, 
  Code 
} from 'lucide-react'
import { Sora } from 'next/font/google'
import Link from 'next/link'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
})

interface BusinessFunctionCard {
  icon: React.ReactNode
  title: string
  description: string
}

const businessFunctions: BusinessFunctionCard[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "HR & Talent",
    description: "Recruitment automation, candidate screening, onboarding workflows"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Sales",
    description: "Lead research, proposal generation, CRM automation"
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Marketing",
    description: "Content creation, campaign automation, analytics"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Finance",
    description: "Report generation, data analysis, forecasting"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Operations",
    description: "Process automation, workflow optimization, documentation"
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Legal",
    description: "Contract analysis, compliance checks, document generation"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Customer Success",
    description: "Support automation, knowledge base creation, response generation"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "IT & Development",
    description: "App development, system integration, technical documentation"
  }
]

export default function BusinessFunctions() {
  return (
    <section className={`relative flex flex-col items-center justify-center bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${sora.variable}`}>
      {/* Briefcase Icon */}
      <div className="mb-6">
        <Briefcase className="w-8 h-8 text-black stroke-2" />
      </div>

      {/* Title */}
      <h2 
        className={`${sora.variable} text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center`}
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        Built for Every Business Function
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 text-center max-w-3xl">
        From HR to Finance, Marketing to Operations — Helium adapts to your needs
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mb-12">
        {businessFunctions.map((func, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-transparent hover:border-black hover:shadow-md transition-all duration-200"
          >
            {/* Icon */}
            <div className="mb-4 text-black">
              {func.icon}
            </div>

            {/* Title */}
            <h3 
              className={`${sora.variable} text-lg font-semibold text-gray-900 mb-2`}
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {func.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {func.description}
            </p>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <Link
        href="/usecases"
        className="inline-flex items-center justify-center px-6 py-3 border-2 border-black rounded-lg font-medium text-black hover:bg-black hover:text-white transition-colors duration-200"
      >
        Explore All Use Cases
      </Link>
    </section>
  )
}

