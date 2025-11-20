"use client"

import React from 'react'
import Image from 'next/image'
import { Zap } from 'lucide-react'

const appIcons = [
  { name: 'Gmail', color: '#EA4335', image: '/icons/Gmail.svg' },
  { name: 'Notion', color: '#000000', image: '/icons/Notion.svg' },
  { name: 'Slack', color: '#4A154B', image: '/icons/Slack.svg' },
  { name: 'Outlook', color: '#0078D4', image: '/icons/Outlook.svg' },
  { name: 'Teams', color: '#6264A7', image: '/icons/Teams.svg' },
  { name: 'Dropbox', color: '#0061FF', image: '/icons/Dropbox.svg' },
  { name: 'Supabase', color: '#3ECF8E', image: '/icons/Supabase.svg' },
  { name: 'Zoho', color: '#C8202B', image: '/icons/Zoho.svg' },
]

export default function UniversalConnectivity() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-700">Universal Connectivity</span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-sora"
            >
              <span className="text-cyan-500">200+ Integrations</span>
              <br />
              <span className="text-black">with Business</span>
              <br />
              <span className="text-black">Apps</span>
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Helium's <span className="text-cyan-500 font-semibold">Unified Intelligence Fabric</span> seamlessly integrates data from diverse enterprise systems into a single adaptive layer.
            </p>

            {/* Key Benefits */}
            <ul className="space-y-3">
              {[
                "Eliminates data silos",
                "Real-time synchronization",
                "No-code integration setup",
                "Enterprise-grade security"
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - App Icons Scattered */}
          <div className="relative h-96 lg:h-[500px]">
            {appIcons.map((app, index) => {
              const positions = [
                { top: '10%', left: '25%', rotate: '-5deg' },  //Gmail
                { top: '32%', right: '35%', rotate: '8deg' },  //Notion
                { top: '12%', left: '45%', rotate: '5deg' },  //Slack
                { top: '45%', left: '25%', rotate: '6deg' },  //Outlook
                { top: '65%', right: '40%', rotate: '-8deg' },  //Teams
                { top: '65%', left: '25%', rotate: '10deg' },  //Dropbox
                { top: '30%', right: '15%', rotate: '-6deg' },  //Supabase
                { top: '50%', right: '15%', rotate: '12deg' },  //Zoho
              ]
              const position = positions[index % positions.length]
              
              return (
                <div
                  key={index}
                  className="absolute w-20 h-20 rounded-xl bg-gray-100 border border-gray-700/50 flex items-center justify-center transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                  style={{
                    top: position.top,
                    left: position.left,
                    right: position.right,
                    transform: `rotate(${position.rotate})`,
                  }}
                >
                  <div 
                    className={`relative opacity-70 group-hover:opacity-100 transition-all duration-300 ${app.name === 'Gmail' ? 'w-14 h-14' : 'w-12 h-12'}`}
                    style={{
                      filter: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = `drop-shadow(0 0 0px ${app.color})`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'none'
                    }}
                  >
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-cyan-500 mb-2 font-sora">
              100+ Integrations
            </h3>
            <p className="text-gray-700">Connected in seconds</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-orange-500 mb-2 font-sora">
              Zero Friction
            </h3>
            <p className="text-gray-700">No-code setup</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-cyan-500 mb-2 font-sora">
              Total Control
            </h3>
            <p className="text-gray-700">Manage permissions easily</p>
          </div>
        </div>
      </div>
    </section>
  )
}

