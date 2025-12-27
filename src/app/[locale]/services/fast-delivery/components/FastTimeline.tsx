'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Calendar, CheckCircle2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FastTimeline() {
  const t = useTranslations('fast_delivery.timeline')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-milestone',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      // Progress bar animation
      gsap.fromTo(
        '.progress-bar',
        { scaleX: 0 },
        {
          scaleX: 1,
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

  const milestones = [
    { day: 'Day 1-3', key: 'milestone1' },
    { day: 'Day 4-7', key: 'milestone2' },
    { day: 'Day 8-11', key: 'milestone3' },
    { day: 'Day 12-14', key: 'milestone4' },
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
            {/* Progress Bar */}
            <div className="absolute top-8 left-0 right-0 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="progress-bar h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 origin-left" />
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="timeline-milestone relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Day Badge */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Day Label */}
                    <div className="text-cyan-400 font-bold text-lg mb-2">
                      {milestone.day}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(`${milestone.key}_title`)}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {t(`${milestone.key}_desc`)}
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


