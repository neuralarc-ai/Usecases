"use client"

import React from 'react'
import { Bot, Globe, Database, PenTool, Code2, Workflow } from 'lucide-react'

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>
  iconBgColor: string
  title: string
  description: string
  borderColor?: string
}

const topFeatures: FeatureCard[] = [
  {
    icon: Bot,
    iconBgColor: '#E0693D',
    title: "Autonomous AI Agents",
    description: "Deploy intelligent agents that work 24/7, handling complex workflows from customer service to data analysis without human intervention. Each agent learns, adapts, and improves over time."
  },
  {
    icon: Globe,
    iconBgColor: '#A6C8D5',
    title: "Web Automation at Scale",
    description: "Automate any web-based task across thousands of sites simultaneously. From data extraction to form filling, Helium handles it all with precision and speed that manual processes cannot match."
  }
]

const bottomFeatures: FeatureCard[] = [
  {
    icon: Database,
    iconBgColor: '#A69CBE',
    title: "Enterprise Data Processing",
    description: "Process millions of records in minutes. Clean, transform, analyze, and visualize data from any source with AI-powered insights that drive strategic decisions across your organization."
  },
  {
    icon: PenTool,
    iconBgColor: '#D0EF5E',
    title: "Content Creation Engine",
    description: "Generate marketing copy, reports, presentations, and documentation at scale. Helium maintains your brand voice while producing content that converts and engages your audience."
  },
  {
    icon: Code2,
    iconBgColor: '#27584F',
    title: "Software Development",
    description: "Build applications, APIs, and integrations with AI assistance. From prototyping to production deployment, Helium accelerates your development cycle while maintaining code quality."
  },
  {
    icon: Workflow,
    iconBgColor: '#E7B31B',
    title: "Workflow Orchestration",
    description: "Connect every system in your tech stack. Helium orchestrates complex workflows across departments, ensuring seamless data flow and process automation throughout your enterprise."
  }
]

export default function BusinessFunctions() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#ececec]"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-center font-sora"
        >
          The AI Platform Built for Enterprise Scale
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 sm:mb-16 text-center max-w-4xl mx-auto">
          Helium replaces your entire AI tool stack with one powerful platform that grows with your business, horizontally and vertically.
        </p>

        {/* Top Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {topFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border-2 border-transparent hover:border-[#E0693D] transition-all duration-200 h-full p-12"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: feature.iconBgColor }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 
                    className="font-bold text-gray-900 font-sora text-2xl"
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Four Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {bottomFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border-2 border-transparent hover:border-[#E0693D] transition-all duration-200 h-full p-12"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: feature.iconBgColor }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 
                    className="font-bold text-gray-900 font-sora text-2xl"
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

