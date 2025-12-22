'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  Brain,
  TrendingUp,
  Target,
  ArrowRight,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function AISEOPerformance() {
  const t = useTranslations('aiseo_performance_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const highlights = [
    {
      title: t('highlight1_title'),
      description: t('highlight1_description'),
      icon: Brain,
      color: 'cyan',
    },
    {
      title: t('highlight2_title'),
      description: t('highlight2_description'),
      icon: TrendingUp,
      color: 'teal',
    },
    {
      title: t('highlight3_title'),
      description: t('highlight3_description'),
      icon: Target,
      color: 'cyan',
    },
    {
      title: t('highlight4_title'),
      description: t('highlight4_description'),
      icon: Sparkles,
      color: 'teal',
    },
  ]

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

      const cards = gsap.utils.toArray('.highlight-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="ai-seo-performance" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>{' '}
              {t('title_part3')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Cards Grid */}
          <div ref={contentRef} className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              const isCyan = highlight.color === 'cyan'

              return (
                <div
                  key={index}
                  className="highlight-card group relative"
                >
                  <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
                    {/* Inner grid pattern */}
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
                      style={{
                        animation: 'shimmer 2s infinite',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 ${
                          isCyan
                            ? 'bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40'
                            : 'bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/40'
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-cyan-50 transition-colors leading-tight">
                        {highlight.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {highlight.description}
                      </p>

                      {/* Bottom link */}
                     
                    </div>

                    {/* Corner number */}
                    <div
                      className={`absolute top-4 right-4 text-4xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none ${
                        isCyan ? 'text-cyan-400' : 'text-teal-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <Target className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">{t('cta_text')}</span>
              <button
                onClick={() => {
                  const contact = document.getElementById('contact')
                  contact?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-teal-400 transition-all"
              >
                {t('cta_button')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  )
}