'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Search, TrendingUp, BarChart3 } from 'lucide-react'

export default function AiSeoBuild() {
  const t = useTranslations('ai_seo.build')
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Small Title */}
          <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">
            {t('small_title')}
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {t('description')}
          </p>

          {/* Graph Visualization */}
          <div className="relative mt-16 h-[400px] w-full">
            {/* Background Grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* SVG Graph */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
            >
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="yellowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Shaded Area (Area Chart) */}
              <path
                d="M 0,400 Q 100,350 200,300 T 400,200 T 600,150 T 800,100 L 800,400 L 0,400 Z"
                fill="url(#areaGradient)"
              />

              {/* Yellow Wavy Line */}
              <path
                d="M 0,350 Q 100,300 200,250 T 400,150 T 600,100 T 800,50"
                fill="none"
                stroke="url(#yellowLine)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Gray Wavy Line */}
              <path
                d="M 0,380 Q 100,330 200,280 T 400,180 T 600,130 T 800,80"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="5,5"
                opacity="0.6"
              />

              {/* Data Points */}
              <circle cx="200" cy="300" r="4" fill="#fbbf24" />
              <circle cx="400" cy="200" r="4" fill="#fbbf24" />
              <circle cx="600" cy="150" r="4" fill="#fbbf24" />
              <circle cx="800" cy="100" r="4" fill="#fbbf24" />
            </svg>
          </div>

          {/* Bottom Label */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Search className="w-3 h-3 text-purple-400" />
            </div>
            <span className="text-sm text-gray-400">{t('label')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

