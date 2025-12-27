'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Bell, WifiOff, CreditCard, BarChart3, Shield, Zap, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileFeatures() {
  const t = useTranslations('mobile_app.features')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.features-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      gsap.from('.feature-card', {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotationY: -15,
        duration: 1,
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

  const features = [
    { 
      icon: Bell, 
      key: 'feature1', 
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconGradient: 'from-cyan-400 to-blue-400'
    },
    { 
      icon: WifiOff, 
      key: 'feature2', 
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconGradient: 'from-teal-400 to-cyan-400'
    },
    { 
      icon: CreditCard, 
      key: 'feature3', 
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconGradient: 'from-blue-400 to-indigo-400'
    },
    { 
      icon: BarChart3, 
      key: 'feature4', 
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconGradient: 'from-purple-400 to-pink-400'
    },
    { 
      icon: Shield, 
      key: 'feature5', 
      gradient: 'from-cyan-500/20 to-teal-500/20',
      iconGradient: 'from-cyan-400 to-teal-400'
    },
    { 
      icon: Zap, 
      key: 'feature6', 
      gradient: 'from-teal-500/20 to-green-500/20',
      iconGradient: 'from-teal-400 to-green-400'
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="features-header text-center mb-20">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 border border-cyan-500/30 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-100 mb-8">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card group relative p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10 blur-xl`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${feature.iconGradient}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                  {t(`${feature.key}_title`)}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t(`${feature.key}_desc`)}
                </p>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
