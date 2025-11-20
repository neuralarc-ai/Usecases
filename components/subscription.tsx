"use client"

import React, { useRef } from 'react'
import Image from 'next/image'

export default function Subscription() {
  const leftVideoRef = useRef<HTMLVideoElement>(null)
  const rightVideoRef = useRef<HTMLVideoElement>(null)

  const handleHover = async (videoRef: React.RefObject<HTMLVideoElement | null>, play: boolean) => {
    if (!videoRef.current) return
    
    const video = videoRef.current
    
    if (play) {
      // Check if video is already playing to avoid duplicate play() calls
      if (video.paused) {
        video.currentTime = 0
        try {
          await video.play()
        } catch (error) {
          // Silently handle autoplay restrictions or other play errors
          // This prevents the error from breaking the UI
          console.debug('Video play prevented:', error)
        }
      }
    } else {
      // Only pause if video is actually playing
      if (!video.paused) {
        video.pause()
      }
    }
  }

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-start bg-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Image blocks */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-6 mt-6 sm:mt-8 md:mt-18 w-full px-4 sm:px-6">
        {/* LEFT BLOCK */}
        <div
          className="relative group overflow-hidden w-full max-w-[600px] aspect-[3/2] sm:h-[300px] md:w-[600px] md:h-[400px] rounded-[24px] bg-[#1a1a1a]"
          onMouseEnter={() => handleHover(leftVideoRef, true)}
          onMouseLeave={() => handleHover(leftVideoRef, false)}
        >
          {/* Static Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-edge.png"
              alt="Hero Edge"
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-[24px]"
            />
          </div>

          {/* Hover Video */}
          <video
            ref={leftVideoRef}
            src="/edge.mp4"
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Text overlay */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-col text-white">
            <h2 
              className="text-[clamp(18px,3vw,24px)] font-bold mb-1 font-sora"
            >
              Helium Edge
            </h2>
            <p className="text-[clamp(14px,2.5vw,20px)] font-normal font-sans">
              Your Personal Intelligence Layer
            </p>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div
          className="relative group overflow-hidden w-full max-w-[600px] aspect-[3/2] sm:h-[300px] md:w-[600px] md:h-[400px] rounded-[24px]"
          onMouseEnter={() => handleHover(rightVideoRef, true)}
          onMouseLeave={() => handleHover(rightVideoRef, false)}
        >
          <div className="absolute inset-0">
            <Image
              src="/hero-quantum.png"
              alt="Hero Quantum"
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-[24px]"
            />
          </div>

          <video
            ref={rightVideoRef}
            src="/quantum.mp4"
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col text-white text-right">
            <h2 
              className="text-[clamp(18px,3vw,24px)] font-bold mb-1 font-sora"
            >
              Helium Quantum
            </h2>
            <p className="text-[clamp(14px,2.5vw,20px)] font-normal font-sans">
              Business Intelligence in motion
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

