'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { TrendingUp, Target, DollarSign, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoGrowth() {
  const t = useTranslations('ai_seo.growth')
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: ArrowRight,
      title: 'Search Intent',
      description: t('logic1')
    },
    {
      icon: Target,
      title: 'Long-tail Queries',
      description: t('logic2')
    },
    {
      icon: TrendingUp,
      title: 'Niche Growth',
      description: t('logic3')
    }
  ]

  const metrics = [
    { label: t('metric1'), icon: TrendingUp },
    { label: t('metric2'), icon: Target },
    { label: t('metric3'), icon: DollarSign }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        '.growth-left-content',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Feature items stagger
      gsap.fromTo(
        '.growth-feature-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Right visual animation
      gsap.fromTo(
        '.growth-visual',
        { opacity: 0, x: 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Chart bars animation
      gsap.fromTo(
        '.chart-bar',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.growth-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#030308] via-[#050510] to-[#030308] py-32">
      {/* Diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
      }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="growth-left-content space-y-8">
              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t('title')}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                {t('subtitle')}
              </p>

              {/* Features List */}
              <div className="space-y-6 mt-10">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="growth-feature-item flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Closing Statement */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xl italic text-gray-300 leading-relaxed">
                  "{t('lead')}"
                </p>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="growth-visual relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Modern Metric Cards Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {metrics.map((metric, index) => {
                    const IconComponent = metric.icon
                    const values = [300, 250, 180]
                    const percentages = ['+45%', '+32%', '+28%']
                    return (
                      <div
                        key={index}
                        className="chart-bar group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-7 h-7 text-green-400" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-white mb-1">{values[index]}</div>
                            <div className="text-xs text-green-400 font-medium">{percentages[index]}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                        {/* Progress indicator */}
                        <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000"
                            style={{ width: `${75 + index * 10}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                  
                  {/* Large Center Card */}
                  <div className="col-span-2 chart-bar p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-2 border-emerald-500/30 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                          <TrendingUp className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-white mb-1">500%</div>
                          <div className="text-sm text-emerald-400 font-medium">Pipeline Growth</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {['Q1', 'Q2', 'Q3'].map((quarter, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-semibold text-white">{quarter}</div>
                          <div className="text-xs text-gray-400 mt-1">+{25 + idx * 15}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
