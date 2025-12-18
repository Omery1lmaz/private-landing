'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

const risks = [
  { key: 'risk1' },
  { key: 'risk2' },
  { key: 'risk3' },
  { key: 'risk4' },
]

export default function HowWeReduceRisk() {
  const t = useTranslations('how_we_reduce_risk_section')
  const sectionRef = useRef<HTMLSection>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const risksRef = useRef<HTMLDivElement>(null)

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

      const riskCards = gsap.utils.toArray('.risk-card')
      gsap.fromTo(
        riskCards,
        { opacity: 0, x: -30, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: risksRef.current,
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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-400 mb-6">
              <AlertCircle className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Risk Cards */}
          <div ref={risksRef} className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {risks.map((risk, index) => {
              const isEven = index % 2 === 0

              return (
                <div key={index} className="risk-card group relative">
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-red-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(239,68,68,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(239,68,68,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                      style={{
                        background: 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, transparent 50%)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Problem Section */}
                      <div className="mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                            <AlertCircle className="w-4 h-4 text-red-400" />
                          </div>
                          <span className="text-sm font-semibold text-red-400">{t(`${risk.key}_problem`)}</span>
                        </div>
                        <p className="text-gray-300 text-sm ml-11 leading-relaxed">
                          Varsayılan sorun açıklaması
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center mb-6">
                        <div className="text-amber-400 text-2xl font-bold group-hover:scale-125 transition-transform">↓</div>
                      </div>

                      {/* Solution Section */}
                      <div className="mb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          </div>
                          <span className="text-sm font-semibold text-green-400">{t(`${risk.key}_solution`)}</span>
                        </div>
                        <p className="text-gray-300 text-sm ml-11 leading-relaxed">
                          {t(`${risk.key}_description`)}
                        </p>
                      </div>

                      {/* Bottom accent */}
                      <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-green-400 text-xs font-medium">
                          <ArrowRight className="w-3 h-3" />
                          Kanıtlanmış Çözüm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              <span className="text-white font-semibold">Risk, teknoloji değildir. Risk, proses ve stratejidir.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-amber-500/25">
              {t('cta_button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
