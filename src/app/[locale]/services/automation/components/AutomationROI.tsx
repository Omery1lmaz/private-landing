'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { DollarSign, Clock, TrendingUp, Calculator } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationROI() {
  const t = useTranslations('automation.roi')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.roi-card',
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

      // Animate counters
      const counters = document.querySelectorAll('.counter')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0

        const updateCounter = () => {
          current += increment
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString()
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target.toLocaleString()
          }
        }

        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          onEnter: () => updateCounter(),
          once: true,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const metrics = [
    { icon: DollarSign, key: 'metric1', value: '75', suffix: '%', className: 'bg-cyan-500/10 group-hover:bg-cyan-500/20', iconColor: 'text-cyan-400' },
    { icon: Clock, key: 'metric2', value: '40', suffix: 'hrs', className: 'bg-teal-500/10 group-hover:bg-teal-500/20', iconColor: 'text-teal-400' },
    { icon: TrendingUp, key: 'metric3', value: '300', suffix: '%', className: 'bg-blue-500/10 group-hover:bg-blue-500/20', iconColor: 'text-blue-400' },
    { icon: Calculator, key: 'metric4', value: '50', suffix: 'k', className: 'bg-purple-500/10 group-hover:bg-purple-500/20', iconColor: 'text-purple-400' },
  ]

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

          {/* ROI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="roi-card group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${metric.className} flex items-center justify-center mb-4 transition-colors`}>
                    <metric.icon className={`w-8 h-8 ${metric.iconColor}`} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <span className="counter" data-target={metric.value}>
                      0
                    </span>
                    {metric.suffix}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {t(`${metric.key}_label`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Savings Calculator */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t('calculator_title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('calculator_desc')}
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-400">
                <Calculator className="w-6 h-6" />
                <span className="text-lg font-medium">{t('calculator_cta')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

