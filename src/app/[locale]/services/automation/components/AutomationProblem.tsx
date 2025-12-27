'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Clock, AlertCircle, TrendingDown, Users } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationProblem() {
  const t = useTranslations('automation.problem')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.problem-item',
        { opacity: 0, y: 40 },
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    { icon: Clock, key: 'problem1', metric: 'metric1' },
    { icon: AlertCircle, key: 'problem2', metric: 'metric2' },
    { icon: TrendingDown, key: 'problem3', metric: 'metric3' },
    { icon: Users, key: 'problem4', metric: 'metric4' },
  ]

  return (
    <section ref={sectionRef} className="py-24 relative bg-gradient-to-b from-[#030308] to-[#050510]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-400 font-medium mb-6">
              {t('badge')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Problem Cards with Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="problem-item group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {t(problem.metric)}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {t(`${problem.key}_title`)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(`${problem.key}_desc`)}
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


