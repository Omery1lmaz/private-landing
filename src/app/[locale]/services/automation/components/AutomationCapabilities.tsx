'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Database, Mail, FileText, Package, BarChart3, Settings } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationCapabilities() {
  const t = useTranslations('automation.capabilities')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.capability-card',
        { opacity: 0, y: 40, rotateY: -15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.1,
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

  const capabilities = [
    { icon: Database, key: 'capability1', className: 'bg-cyan-500/10 group-hover:bg-cyan-500/20', iconColor: 'text-cyan-400' },
    { icon: Mail, key: 'capability2', className: 'bg-teal-500/10 group-hover:bg-teal-500/20', iconColor: 'text-teal-400' },
    { icon: FileText, key: 'capability3', className: 'bg-blue-500/10 group-hover:bg-blue-500/20', iconColor: 'text-blue-400' },
    { icon: Package, key: 'capability4', className: 'bg-purple-500/10 group-hover:bg-purple-500/20', iconColor: 'text-purple-400' },
    { icon: BarChart3, key: 'capability5', className: 'bg-cyan-500/10 group-hover:bg-cyan-500/20', iconColor: 'text-cyan-400' },
    { icon: Settings, key: 'capability6', className: 'bg-teal-500/10 group-hover:bg-teal-500/20', iconColor: 'text-teal-400' },
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

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="capability-card group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <div className="flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl ${capability.className} flex items-center justify-center mb-4 transition-colors`}>
                    <capability.icon className={`w-8 h-8 ${capability.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(`${capability.key}_title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`${capability.key}_desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

