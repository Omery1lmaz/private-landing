'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Code, Smartphone, Zap, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileTechStack() {
  const t = useTranslations('mobile_app.tech_stack')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      gsap.from('.tech-card', {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotationY: -20,
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

  const technologies = [
    { 
      name: 'React Native', 
      icon: Code, 
      key: 'react_native', 
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconGradient: 'from-cyan-400 to-blue-400',
      bgGradient: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20'
    },
    { 
      name: 'Flutter', 
      icon: Smartphone, 
      key: 'flutter', 
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconGradient: 'from-teal-400 to-cyan-400',
      bgGradient: 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20'
    },
    { 
      name: 'Swift', 
      icon: Zap, 
      key: 'swift', 
      gradient: 'from-blue-500/20 to-indigo-500/20',
      iconGradient: 'from-blue-400 to-indigo-400',
      bgGradient: 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20'
    },
    { 
      name: 'Kotlin', 
      icon: Code, 
      key: 'kotlin', 
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconGradient: 'from-purple-400 to-pink-400',
      bgGradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="tech-header text-center mb-20">
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

          {/* Tech Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="tech-card group relative p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 text-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10 blur-xl`} />
                
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${tech.bgGradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <tech.icon className={`w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r ${tech.iconGradient}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t(`${tech.key}_desc`)}
                </p>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${tech.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
