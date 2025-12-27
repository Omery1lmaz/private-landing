'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { CheckCircle2, Zap, Shield, Sparkles, ArrowRight, XCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileSolution() {
  const t = useTranslations('mobile_app.solution')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.solution-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      gsap.from('.comparison-card', {
        opacity: 0,
        scale: 0.95,
        x: (index) => index === 0 ? -50 : 50,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.solution-card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const solutions = [
    { icon: Zap, key: 'solution1' },
    { icon: Shield, key: 'solution2' },
    { icon: Sparkles, key: 'solution3' },
    { icon: CheckCircle2, key: 'solution4' },
  ]

  return (
    <section ref={sectionRef} className="py-32 relative bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-teal-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="solution-header text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 border border-cyan-500/30 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-100 mb-8">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid lg:grid-cols-2 gap-10 mb-24">
            {/* Before */}
            <div className="comparison-card group relative p-10 rounded-3xl bg-gradient-to-br from-red-500/10 via-red-900/5 to-black/50 border-2 border-red-500/30 backdrop-blur-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse" />
                <h3 className="text-xl font-bold text-red-400">{t('before_title')}</h3>
              </div>
              <div className="h-[350px] bg-gradient-to-br from-red-900/30 via-red-900/10 to-black rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-red-500/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(239,68,68,0.1)_100%)]" />
                <div className="relative z-10 text-center">
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4 drop-shadow-2xl" />
                  <p className="text-red-400 text-xl font-semibold">{t('before_state')}</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="comparison-card group relative p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-black/50 border-2 border-cyan-500/30 backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse" />
                <h3 className="text-xl font-bold text-cyan-400">{t('after_title')}</h3>
              </div>
              <div className="h-[350px] bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-cyan-500/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(6,182,212,0.1)_100%)]" />
                <div className="relative z-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-cyan-500 mx-auto mb-4 drop-shadow-2xl" />
                  <p className="text-cyan-400 text-xl font-semibold">{t('after_state')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Points */}
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="solution-card group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-xl hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10 blur-xl" />
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <solution.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                      {t(`${solution.key}_title`)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(`${solution.key}_desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
