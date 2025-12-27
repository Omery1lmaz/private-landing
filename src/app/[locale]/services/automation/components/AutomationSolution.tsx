'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationSolution() {
  const t = useTranslations('automation.solution')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.solution-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      // Animate workflow comparison
      gsap.fromTo(
        '.workflow-before',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      gsap.fromTo(
        '.workflow-after',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative bg-gradient-to-b from-[#050510] to-[#030308]">
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

          {/* Before/After Workflow Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Before - Manual */}
            <div className="workflow-before relative p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-900/10 border border-red-500/20">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <h3 className="text-lg font-semibold text-red-400">{t('before_title')}</h3>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-semibold">
                      {i}
                  </div>
                    <span className="text-gray-300">{t(`before_step${i}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After - Automated */}
            <div className="workflow-after relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-900/10 border border-cyan-500/20">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <h3 className="text-lg font-semibold text-cyan-400">{t('after_title')}</h3>
              </div>
              <div className="space-y-4">
                <div className="relative p-6 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-semibold">{t('after_automated')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('after_benefit')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="solution-item group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(`solution${i}_title`)}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t(`solution${i}_desc`)}
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


