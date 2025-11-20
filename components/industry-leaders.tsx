"use client"

import React from 'react'
import Link from 'next/link'
import { RiBankLine, RiShieldLine, RiShoppingCartLine, RiTeamLine } from 'react-icons/ri'
import { ArrowRight } from 'lucide-react'

// Custom Manufacturing Icon Component
const ManufacturingIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
    <path d="M2 13.5v5.5l5 3" />
    <path d="M7 16.545l5 -3.03" />
    <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
    <path d="M12 19l5 3" />
    <path d="M17 16.5l5 -3" />
    <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
    <path d="M7 5.03v5.455" />
    <path d="M12 8l5 -3" />
  </svg>
)

interface IndustryCard {
  icon: React.ComponentType<{ className?: string }>
  iconBgColor: string
  title: string
  description: string
  linkColor: string
  href: string
}

const industries: IndustryCard[] = [
  {
    icon: RiBankLine,
    iconBgColor: '#E0693D',
    title: "Banking & Finance",
    description: "Fraud detection, loan processing, compliance automation, and customer analytics.",
    linkColor: '#E0693D',
    href: "/use-cases?industry=banking"
  },
  {
    icon: RiShieldLine,
    iconBgColor: '#A6C8D5',
    title: "Insurance",
    description: "Claims processing, underwriting automation, fraud detection, and policy management.",
    linkColor: '#A6C8D5',
    href: "/use-cases?industry=insurance"
  },
  {
    icon: RiShoppingCartLine,
    iconBgColor: '#D0EF5E',
    title: "Retail & E-commerce",
    description: "Inventory optimization, demand forecasting, personalization, and supply chain.",
    linkColor: '#D0EF5E',
    href: "/use-cases?industry=retail"
  },
  {
    icon: RiTeamLine,
    iconBgColor: '#A69CBE',
    title: "Consulting",
    description: "Project management, client delivery, knowledge management, and proposal automation.",
    linkColor: '#A69CBE',
    href: "/use-cases?industry=consulting"
  },
  {
    icon: ManufacturingIcon,
    iconBgColor: '#27584F',
    title: "Manufacturing",
    description: "Production optimization, quality control, maintenance, and supply chain management.",
    linkColor: '#27584F',
    href: "/use-cases?industry=manufacturing"
  }
]

export default function IndustryLeaders() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center font-sora"
        >
          Trusted by Industry Leaders
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
          From banking to retail, Helium powers AI transformation across every major industry.
        </p>

        {/* Cards Grid - 3 cards top row, 2 cards centered below */}
        <div className="w-full">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {industries.slice(0, 3).map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border-2 border-transparent hover:border-[#E0693D] transition-all duration-200 h-full hover:shadow-md p-8"
                >
                  {/* Icon and Title in Flex */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: industry.iconBgColor }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 
                      className="font-bold text-gray-900 font-sora text-2xl"
                    >
                      {industry.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {industry.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Bottom Row - 2 Cards Centered (same size as top row) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full md:w-2/3">
              {industries.slice(3, 5).map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border-2 border-transparent transition-all duration-200 h-full hover:shadow-md"
                  style={{ padding: '2rem' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E0693D'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent'
                  }}
                >
                  {/* Icon and Title in Flex */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: industry.iconBgColor }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 
                      className="font-bold text-gray-900 font-sora text-2xl"
                    >
                      {industry.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '18px' }}>
                    {industry.description}
                  </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* View All Use Cases Button */}
          <div className="flex justify-center mt-12 sm:mt-16">
            <Link
              href="/use-cases"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg border-2 border-black hover:border-black font-sora"
            >
              View All Use Cases
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

