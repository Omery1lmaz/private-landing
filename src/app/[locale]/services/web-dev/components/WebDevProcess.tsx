'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Search, Palette, Code, Rocket } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevProcess() {
  const t = useTranslations('web_dev.process')
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      icon: Search,
      step: '01',
      title: t('step1'),
      description: t('step1_desc'),
    },
    {
      icon: Palette,
      step: '02',
      title: t('step2'),
      description: t('step2_desc'),
    },
    {
      icon: Code,
      step: '03',
      title: t('step3'),
      description: t('step3_desc'),
    },
    {
      icon: Rocket,
      step: '04',
      title: t('step4'),
      description: t('step4_desc'),
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.process-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Timeline line drawing animation
      if (timelineRef.current) {
        gsap.fromTo(
          '.timeline-line',
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Step cards stagger animation
      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Step highlights on scroll
      steps.forEach((_, index) => {
        gsap.fromTo(
          `.step-${index}`,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: `.step-${index}`,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-32 web-dev-process">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 process-title">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Process Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-cyan-500 timeline-line transform -translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`process-step step-${index} relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#030308] transform -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50" />

                    {/* Step Content Card */}
                    <div
                      className={`flex-1 ${
                        isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                      }`}
                    >
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-sm group">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 rounded-2xl" />

                        <div className="relative z-10">
                          <div
                            className={`flex items-center gap-4 mb-4 ${
                              isEven ? 'md:justify-end' : 'md:justify-start'
                            }`}
                          >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <IconComponent className="w-6 h-6 text-cyan-400" />
                            </div>
                            <span className="text-sm font-bold text-cyan-400">{step.step}</span>
                          </div>

                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


