'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Search, Layout, Cog, BarChart3 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationProcess() {
  const t = useTranslations('automation.process')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      // Timeline line animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    { icon: Search, key: 'step1', number: '01' },
    { icon: Layout, key: 'step2', number: '02' },
    { icon: Cog, key: 'step3', number: '03' },
    { icon: BarChart3, key: 'step4', number: '04' },
  ]

  return (
    <section ref={sectionRef} className="py-24 relative bg-gradient-to-b from-[#030308] to-[#050510]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6">
              {t('badge')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 timeline-line origin-top" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="process-step relative flex items-start gap-8">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-cyan-400 font-bold text-lg">{step.number}</span>
                      <h3 className="text-2xl font-semibold text-white">
                        {t(`${step.key}_title`)}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
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


