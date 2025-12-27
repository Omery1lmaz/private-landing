'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { AlertTriangle, Clock, TrendingDown, XCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileProblem() {
  const t = useTranslations('mobile_app.problem')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      gsap.from('.problem-card', {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotationX: -15,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    { 
      icon: AlertTriangle, 
      key: 'problem1', 
      gradient: 'from-red-500/20 to-orange-500/20',
      iconGradient: 'from-red-400 to-orange-400',
      borderColor: 'border-red-500/30'
    },
    { 
      icon: Clock, 
      key: 'problem2', 
      gradient: 'from-orange-500/20 to-yellow-500/20',
      iconGradient: 'from-orange-400 to-yellow-400',
      borderColor: 'border-orange-500/30'
    },
    { 
      icon: TrendingDown, 
      key: 'problem3', 
      gradient: 'from-yellow-500/20 to-red-500/20',
      iconGradient: 'from-yellow-400 to-red-400',
      borderColor: 'border-yellow-500/30'
    },
    { 
      icon: XCircle, 
      key: 'problem4', 
      gradient: 'from-red-500/20 to-pink-500/20',
      iconGradient: 'from-red-400 to-pink-400',
      borderColor: 'border-red-500/30'
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-red-500/10 via-orange-500/5 to-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="problem-header text-center mb-20">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-sm font-medium text-red-300 mb-8 backdrop-blur-xl shadow-lg shadow-red-500/20">
              <AlertTriangle className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-orange-100 mb-8">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="problem-card group relative p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 hover:border-opacity-50 transition-all duration-500 backdrop-blur-xl hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10 blur-xl`} />
                
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <problem.icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${problem.iconGradient}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                      {t(`${problem.key}_title`)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {t(`${problem.key}_desc`)}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
