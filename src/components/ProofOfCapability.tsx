'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Zap, Code2, BarChart3, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

const pillars = [
  { icon: Code2, key: 'pillar1' },
  { icon: Zap, key: 'pillar2' },
  { icon: CheckCircle2, key: 'pillar3' },
  { icon: BarChart3, key: 'pillar4' },
  { icon: Rocket, key: 'pillar5' },
]

export default function ProofOfCapability() {
  const t = useTranslations('proof_of_capability_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const pillars = gsap.utils.toArray('.pillar-card')
      gsap.fromTo(
        pillars,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-sm text-teal-400 mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Pillars Grid */}
          <div ref={pillarsRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              const isCyan = index % 2 === 0

              return (
                <div key={index} className="pillar-card group relative">
                  <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          linear-gradient(${isCyan ? 'rgba(6,182,212,0.05)' : 'rgba(20,184,166,0.05)'} 1px, transparent 1px),
                          linear-gradient(90deg, ${isCyan ? 'rgba(6,182,212,0.05)' : 'rgba(20,184,166,0.05)'} 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Animated border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(20,184,166,0.1)'} 0%, transparent 50%)`,
                      }}
                    />

                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-6 right-6 h-[2px] ${isCyan ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500' : 'bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                        isCyan
                          ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400'
                          : 'bg-teal-500/20 border border-teal-500/30 text-teal-400'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-50 transition-colors">
                        {t(`${pillar.key}_title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed flex-grow">
                        {t(`${pillar.key}_description`)}
                      </p>

                      {/* Bottom accent */}
                      <div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`text-xs font-medium ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                          ✓ Standart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-teal-500/25">
              {t('cta_button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
