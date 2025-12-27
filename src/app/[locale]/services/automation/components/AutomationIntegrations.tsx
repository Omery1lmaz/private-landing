'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link2, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationIntegrations() {
  const t = useTranslations('automation.integrations')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.integration-logo',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      // Animate connection lines
      gsap.fromTo(
        '.connection-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.1,
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

  const integrations = [
    { name: 'Zapier', key: 'zapier' },
    { name: 'Make', key: 'make' },
    { name: 'n8n', key: 'n8n' },
    { name: 'Custom APIs', key: 'custom' },
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

          {/* Integration Grid with Connection Lines */}
          <div className="relative">
            {/* Central Hub */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Link2 className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Integration Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((integration, idx) => {
                const angle = (idx * 2 * Math.PI) / integrations.length
                const radius = 200
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Connection Line */}
                    <div
                      className="connection-line w-1 h-24 bg-gradient-to-b from-cyan-500 to-purple-500 mb-4 origin-top"
                      style={{ transform: `rotate(${(angle * 180) / Math.PI}deg)` }}
                    />
                    
                    {/* Logo Card */}
                    <div className="integration-logo group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm hover:scale-110">
                      <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-cyan-500/10 transition-colors">
                        <Zap className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-center text-white font-semibold">
                        {integration.name}
                      </h3>
                    </div>
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


