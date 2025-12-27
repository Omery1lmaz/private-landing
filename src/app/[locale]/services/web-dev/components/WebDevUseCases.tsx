'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Cloud, Rocket, LayoutDashboard, ShoppingCart, Wrench, Sparkles, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevUseCases() {
  const t = useTranslations('web_dev.use_cases')
  const sectionRef = useRef<HTMLElement>(null)

  const useCases = [
    {
      icon: Cloud,
      title: t('saas'),
      gradient: 'from-cyan-500 via-blue-500 to-cyan-500',
      accentColor: '#06b6d4',
    },
    {
      icon: Rocket,
      title: t('landing'),
      gradient: 'from-teal-500 via-cyan-500 to-teal-500',
      accentColor: '#14b8a6',
    },
    {
      icon: LayoutDashboard,
      title: t('dashboard'),
      gradient: 'from-blue-500 via-cyan-500 to-blue-500',
      accentColor: '#3b82f6',
    },
    {
      icon: ShoppingCart,
      title: t('ecommerce'),
      gradient: 'from-cyan-500 via-teal-500 to-cyan-500',
      accentColor: '#06b6d4',
    },
    {
      icon: Wrench,
      title: t('tools'),
      gradient: 'from-teal-500 via-cyan-500 to-teal-500',
      accentColor: '#14b8a6',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.use-cases-title',
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

      // Cards slide-in animation
      gsap.fromTo(
        '.use-case-item',
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
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

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
          <div className="text-center mb-20 use-cases-title">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>What We Build</span>
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

          {/* Use Cases Grid - Ana sayfa tarzı */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <div
                  key={index}
                  className="use-case-item group relative cursor-pointer"
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
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg shadow-cyan-500/20">
                          <IconComponent className="w-8 h-8 text-cyan-400" />
                        </div>
                      </div>

                      {/* Title with arrow */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-50 transition-colors">
                          {useCase.title}
                        </h3>
                        <ArrowRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      </div>

                      {/* Bottom accent */}
                      <div className="pt-6 mt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-xs font-medium text-cyan-400">
                          ✓ Custom Built
                        </div>
                      </div>
                    </div>

                    {/* Corner number */}
                    <div className="absolute top-6 right-6 text-3xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none text-cyan-400">
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
