'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Briefcase,
  Brain,
  TrendingUp,
  Settings,
  Smartphone,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const t = useTranslations('portfolio_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: t('project1_title'),
      description: t('project1_description'),
      result: t('project1_result'),
      icon: Brain,
      category: t('project1_category'),
      color: 'cyan',
    },
    {
      title: t('project2_title'),
      description: t('project2_description'),
      result: t('project2_result'),
      icon: TrendingUp,
      category: t('project2_category'),
      color: 'teal',
    },
    {
      title: t('project3_title'),
      description: t('project3_description'),
      result: t('project3_result'),
      icon: Settings,
      category: t('project3_category'),
      color: 'cyan',
    },
    {
      title: t('project4_title'),
      description: t('project4_description'),
      result: t('project4_result'),
      icon: Smartphone,
      category: t('project4_category'),
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

      const cards = gsap.utils.toArray('.portfolio-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
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
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
              <Briefcase className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              const isCyan = project.color === 'cyan'

              return (
                <div
                  key={index}
                  className="portfolio-card group relative cursor-pointer"
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
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                            isCyan
                              ? 'bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40'
                              : 'bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 group-hover:border-teal-500/40'
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isCyan
                            ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                            : 'bg-teal-500/10 border border-teal-500/20 text-teal-400'
                        }`}>
                          {project.category}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-50 transition-colors leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors mb-4">
                        {project.description}
                      </p>

                      {/* Result Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm ${
                        isCyan
                          ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                          : 'bg-teal-500/10 border border-teal-500/20 text-teal-400'
                      }`}>
                        <TrendingUp className={`w-4 h-4 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                        {project.result}
                      </div>

                      {/* Bottom link */}
                      <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className={`text-sm font-medium ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                          {t('project_details_button')}
                        </span>
                        <ArrowRight className={`w-4 h-4 ${isCyan ? 'text-cyan-400' : 'text-teal-400'} group-hover:translate-x-1 transition-transform`} />
                      </div>
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
            <div className="inline-flex items-center gap-6 px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">{t('cta_text')}</span>
              <button
                onClick={() => {
                  const contact = document.getElementById('contact')
                  contact?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-cyan-500/25"
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