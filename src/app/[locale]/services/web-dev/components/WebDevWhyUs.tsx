'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Sparkles, Zap, Layers, Code, Search, Handshake, CheckCircle, Sparkles as SparklesIcon } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevWhyUs() {
  const t = useTranslations('web_dev.why_us')
  const sectionRef = useRef<HTMLElement>(null)

  const reasons = [
    {
      icon: Sparkles,
      title: t('reason1'),
      description: t('reason1_desc'),
      color: 'cyan',
    },
    {
      icon: Zap,
      title: t('reason2'),
      description: t('reason2_desc'),
      color: 'teal',
    },
    {
      icon: Layers,
      title: t('reason3'),
      description: t('reason3_desc'),
      color: 'cyan',
    },
    {
      icon: Code,
      title: t('reason4'),
      description: t('reason4_desc'),
      color: 'teal',
    },
    {
      icon: Search,
      title: t('reason5'),
      description: t('reason5_desc'),
      color: 'cyan',
    },
    {
      icon: Handshake,
      title: t('reason6'),
      description: t('reason6_desc'),
      color: 'teal',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.why-us-title',
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

      // Cards staggered reveal
      gsap.fromTo(
        '.why-us-item',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.2)',
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
          <div className="text-center mb-20 why-us-title">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 backdrop-blur-sm">
              <SparklesIcon className="w-4 h-4" />
              <span>Why Choose Us</span>
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

          {/* Reasons Grid - Ana sayfa tarzı (WhyWorkWithMe gibi) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              const isCyan = reason.color === 'cyan'
              
              return (
                <div
                  key={index}
                  className="why-us-item group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          linear-gradient(${isCyan ? 'rgba(6,182,212,0.05)' : 'rgba(20,184,166,0.05)'} 1px, transparent 1px),
                          linear-gradient(90deg, ${isCyan ? 'rgba(6,182,212,0.05)' : 'rgba(20,184,166,0.05)'} 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Animated border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(ellipse at top left, ${isCyan ? 'rgba(6, 182, 212, 0.06)' : 'rgba(20, 184, 166, 0.06)'} 0%, transparent 60%)`
                      }}
                    />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden rounded-t-2xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent ${isCyan ? 'via-cyan-400' : 'via-teal-400'} to-transparent animate-shimmer`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                          style={{
                            background: `linear-gradient(135deg, ${isCyan ? 'rgba(6, 182, 212, 0.15)' : 'rgba(20, 184, 166, 0.15)'} 0%, ${isCyan ? 'rgba(6, 182, 212, 0.05)' : 'rgba(20, 184, 166, 0.05)'} 100%)`,
                            border: `1px solid ${isCyan ? 'rgba(6, 182, 212, 0.2)' : 'rgba(20, 184, 166, 0.2)'}`,
                          }}
                        >
                          <IconComponent className={`w-8 h-8 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors leading-tight">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 text-[15px] leading-relaxed">
                        {reason.description}
                      </p>

                      {/* Subtle divider */}
                      <div className="mt-6">
                        <div className="h-[1px] bg-white/[0.04] rounded-full" />
                      </div>
                    </div>

                    {/* Corner number */}
                    <div className={`absolute top-6 right-6 text-base font-semibold opacity-20 transition-opacity duration-300 select-none ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
