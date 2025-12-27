'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Gauge, Search, Zap, Server, TrendingUp, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface MetricCardProps {
  icon: React.ElementType
  label: string
  value: string | number
  suffix?: string
  color: string
  iconColor: string
  progress?: number
}

function MetricCard({ icon: Icon, label, value, suffix = '', color, iconColor, progress = 100 }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (typeof value === 'number' && !hasAnimated.current) {
      const ctx = gsap.context(() => {
        gsap.to(
          {},
          {
            duration: 2.5,
            ease: 'power2.out',
            onUpdate: function () {
              const progress = this.progress()
              setDisplayValue(Math.floor(value * progress))
            },
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              onEnter: () => {
                if (!hasAnimated.current) {
                  hasAnimated.current = true
                }
              },
            },
          }
        )
      }, cardRef)

      return () => ctx.revert()
    } else if (typeof value === 'string') {
      setDisplayValue(value as any)
    }
  }, [value])

  return (
    <div
      ref={cardRef}
      className="metric-item group relative"
    >
      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(6,182,212,0.1) 0%, transparent 50%)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg shadow-cyan-500/20">
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
            {typeof value === 'number' && (
              <div className="text-4xl font-bold text-cyan-400">
                {displayValue}{suffix}
              </div>
            )}
          </div>

          {/* Value or Status */}
          <div className="mb-4">
            {typeof value === 'string' ? (
              <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30">
                <span className="text-2xl font-bold text-cyan-400">{value}</span>
              </div>
            ) : (
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                {displayValue}{suffix}
              </div>
            )}
          </div>

          {/* Label */}
          <p className="text-gray-300 text-base font-medium leading-relaxed group-hover:text-white transition-colors">
            {label}
          </p>

          {/* Progress indicator */}
          {typeof value === 'number' && (
            <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Corner accent */}
        <div className="absolute top-6 right-6 text-3xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none text-cyan-400">
          {typeof value === 'number' ? displayValue : '✓'}
        </div>
      </div>
    </div>
  )
}

export default function WebDevPerformance() {
  const t = useTranslations('web_dev.performance')
  const sectionRef = useRef<HTMLElement>(null)

  const metrics = [
    {
      icon: Gauge,
      label: t('pagespeed'),
      value: 90,
      suffix: '+',
      progress: 95,
      color: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Search,
      label: t('seo_first'),
      value: 'SEO-first',
      color: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400',
    },
    {
      icon: Zap,
      label: t('core_web_vitals'),
      value: 'Optimized',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Server,
      label: t('ssr_caching'),
      value: 'Enabled',
      color: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.performance-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Cards fade-in animation
      gsap.fromTo(
        '.metric-item',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-32">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 performance-title">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Performance Metrics</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
