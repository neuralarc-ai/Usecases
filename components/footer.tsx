"use client"

import React from 'react'
import Link from 'next/link'
import { Sora, Manrope } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
})

export default function Footer() {
  return (
    <footer 
      className={`bg-white border-t border-gray-200 ${sora.variable} ${manrope.variable}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          {/* Copyright */}
          <p 
            className="text-sm text-gray-600"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            © 2025 Helium AI. All rights reserved.
          </p>

          {/* Product by NeuralArc */}
          <p 
            className="text-sm text-gray-600"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            Product by{' '}
            <Link 
              href="https://www.neuralarc.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 underline transition-colors"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              NeuralArc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

