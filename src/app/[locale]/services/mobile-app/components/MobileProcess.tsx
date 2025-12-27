'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Search, Palette, Code2, TestTube, Rocket, ArrowDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileProcess() {
  const t = useTranslations('mobile_app.process')
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      if (timelineRef.current) {
        gsap.from(timelineRef.current, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }

      gsap.from('.process-step', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.process-icon', {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.9,
        stagger: 0.2,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    { icon: Search, key: 'step1', number: '01', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Palette, key: 'step2', number: '02', gradient: 'from-teal-500 to-cyan-500' },
    { icon: Code2, key: 'step3', number: '03', gradient: 'from-blue-500 to-indigo-500' },
    { icon: TestTube, key: 'step4', number: '04', gradient: 'from-purple-500 to-pink-500' },
    { icon: Rocket, key: 'step5', number: '05', gradient: 'from-cyan-500 via-teal-500 to-cyan-500' },
  ]

  return (
    <section ref={sectionRef} className="py-32 relative bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="process-header text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 border border-cyan-500/30 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
              <Rocket className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-100 mb-8">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div 
              ref={timelineRef}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-teal-500 via-blue-500 via-purple-500 to-cyan-500 rounded-full shadow-lg"
            />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, idx) => (
                <div key={idx} className="process-step relative flex items-start gap-8 group">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`process-icon w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Glow ring */}
                    <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-300 -z-10`} />
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-24 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/50" />
                    
                    {/* Arrow (except last) */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-28">
                        <ArrowDown className="w-6 h-6 text-cyan-500/50" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-cyan-400 font-black text-2xl">{step.number}</span>
                      <h3 className="text-3xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                        {t(`${step.key}_title`)}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                      {t(`${step.key}_desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
