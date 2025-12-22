'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { BarChart3, Activity, Monitor, Search, Database, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoMeasurement() {
  const t = useTranslations('ai_seo.measurement')
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: BarChart3,
      title: 'Organic Revenue',
      description: t('metric1')
    },
    {
      icon: Activity,
      title: 'AI Visibility',
      description: t('metric2')
    },
    {
      icon: TrendingUp,
      title: 'Conversion Rate',
      description: t('metric3')
    },
    {
      icon: Database,
      title: 'Revenue per Page',
      description: t('metric4')
    }
  ]

  const tools = [
    { name: t('tool1'), icon: Monitor },
    { name: t('tool2'), icon: Search },
    { name: t('tool3'), icon: Activity },
    { name: t('tool4'), icon: BarChart3 }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        '.measurement-left-content',
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
        '.measurement-feature-item',
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
        '.measurement-visual',
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

      // Dashboard elements animation
      gsap.fromTo(
        '.dashboard-element',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.measurement-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-28">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-cyan-600/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/5 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="measurement-left-content space-y-8">
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
                    <div key={index} className="measurement-feature-item flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
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
            <div className="measurement-visual relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Modern Analytics Grid */}
                <div className="space-y-6">
                  {/* Top Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="dashboard-element p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">1.2s</div>
                          <div className="text-xs text-gray-400">Avg Load</div>
                        </div>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>

                    <div className="dashboard-element p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">95%</div>
                          <div className="text-xs text-gray-400">Ranking ↑</div>
                        </div>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Tools Grid */}
                  <div className="dashboard-element grid grid-cols-2 gap-3">
                    {tools.map((tool, index) => {
                      const IconComponent = tool.icon
                      return (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <IconComponent className="w-5 h-5 text-cyan-400" />
                            </div>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tool.name}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Large Metric Card */}
                  <div className="dashboard-element p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border-2 border-cyan-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">Real-time</div>
                          <div className="text-sm text-gray-400">Data Tracking</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {['Live', '24/7', 'Sync'].map((label, idx) => (
                        <div key={idx} className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs font-medium text-cyan-400">{label}</div>
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


