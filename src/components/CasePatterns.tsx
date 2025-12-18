'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, Target, BarChart3, ChevronDown, ChevronUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

const cases = [
  {
    icon: TrendingUp,
    key: 'case1',
    color: 'emerald',
    steps: 4,
    results: 3,
  },
  {
    icon: BarChart3,
    key: 'case2',
    color: 'blue',
    steps: 4,
    results: 3,
  },
  {
    icon: Target,
    key: 'case3',
    color: 'amber',
    steps: 4,
    results: 3,
  },
]

export default function CasePatterns() {
  const t = useTranslations('case_patterns_section')
  const sectionRef = useRef<HTMLSection>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const casesRef = useRef<HTMLDivElement>(null)
  const [expandedCase, setExpandedCase] = useState<number | null>(0)

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

      const caseCards = gsap.utils.toArray('.case-card')
      gsap.fromTo(
        caseCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: casesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; accent: string }> = {
      emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        text: 'text-emerald-400',
        accent: 'from-emerald-500 to-emerald-400',
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        accent: 'from-blue-500 to-blue-400',
      },
      amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        text: 'text-amber-400',
        accent: 'from-amber-500 to-amber-400',
      },
    }
    return colors[color]
  }

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
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400 mb-6">
              <Target className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Case Studies */}
          <div ref={casesRef} className="space-y-6 md:space-y-8 mb-16">
            {cases.map((caseItem, index) => {
              const colors = getColorClasses(caseItem.color)
              const IconComponent = caseItem.icon
              const isExpanded = expandedCase === index

              return (
                <div key={index} className="case-card group relative">
                  <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 overflow-hidden">
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${caseItem.color === 'emerald' ? 'rgba(16,185,129,0.1)' : caseItem.color === 'blue' ? 'rgba(59,130,246,0.1)' : 'rgba(217,119,6,0.1)'} 0%, transparent 50%)`,
                      }}
                    />

                    {/* Header */}
                    <button
                      onClick={() => setExpandedCase(isExpanded ? null : index)}
                      className="relative z-10 w-full p-6 md:p-8 flex items-start gap-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.bg} border ${colors.border}`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                          {t(`${caseItem.key}_title`)}
                        </h3>
                        <p className={`text-sm md:text-base ${colors.text} font-semibold`}>
                          {t(`${caseItem.key}_problem`)}
                        </p>
                      </div>

                      {/* Toggle button */}
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${colors.bg} border ${colors.border} text-center`}>
                        {isExpanded ? (
                          <ChevronUp className={`w-4 h-4 ${colors.text}`} />
                        ) : (
                          <ChevronDown className={`w-4 h-4 ${colors.text}`} />
                        )}
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="relative z-10 px-6 md:px-8 pb-8 border-t border-white/10 space-y-6 animate-in fade-in slide-in-from-top-4">
                        {/* Solution */}
                        <div>
                          <h4 className={`text-sm font-bold mb-4 ${colors.text} uppercase tracking-wide`}>
                            {t(`${caseItem.key}_solution`)}
                          </h4>
                          <div className="space-y-3">
                            {[1, 2, 3, 4].map((step) => (
                              <div key={step} className="flex items-start gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${colors.bg} border ${colors.border} text-xs font-bold ${colors.text}`}>
                                  {step}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed pt-0.5">
                                  {t(`${caseItem.key}_step${step}`)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
                          <h4 className={`text-sm font-bold mb-3 ${colors.text} uppercase tracking-wide`}>
                            📊 Sonuçlar
                          </h4>
                          <div className="space-y-2">
                            {[1, 2, 3].map((result) => (
                              <div key={result} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} border ${colors.border}`} />
                                <p className="text-gray-300 text-sm">
                                  {t(`${caseItem.key}_result${result}`)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-emerald-500/25">
              {t('cta_button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
