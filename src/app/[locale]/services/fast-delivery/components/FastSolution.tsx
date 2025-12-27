'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { CheckCircle2, Zap, Rocket } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FastSolution() {
  const t = useTranslations('fast_delivery.solution')
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

      // Timeline compression animation
      gsap.fromTo(
        '.timeline-before',
        { width: '100%' },
        {
          width: '60%',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      gsap.fromTo(
        '.timeline-after',
        { width: '0%' },
        {
          width: '40%',
          duration: 1,
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

          {/* Timeline Comparison */}
          <div className="mb-16">
            <div className="relative h-32 bg-gray-900/50 rounded-xl p-4 border border-white/5">
              {/* Before Timeline */}
              <div className="timeline-before absolute left-0 top-1/2 -translate-y-1/2 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-red-400 text-sm font-medium">
                {t('before_label')}
              </div>

              {/* After Timeline */}
              <div className="timeline-after absolute right-0 top-1/2 -translate-y-1/2 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-cyan-400 text-sm font-medium">
                {t('after_label')}
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


