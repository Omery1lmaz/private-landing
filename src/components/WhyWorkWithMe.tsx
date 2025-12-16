'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  TrendingUp,
  Target,
  Bot,
  Handshake,
  Award,
  CheckCircle2, // Changed from CheckCircle to CheckCircle2
  ArrowRight,
  Sparkles,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

export default function WhyWorkWithMe() {
  const t = useTranslations('why_us_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const reasons = [
    {
      title: t('reason1_title'),
      description: t('reason1_description'),
      icon: TrendingUp,
      color: 'cyan',
    },
    {
      title: t('reason2_title'),
      description: t('reason2_description'),
      icon: Target,
      color: 'teal',
    },
    {
      title: t('reason3_title'),
      description: t('reason3_description'),
      icon: Bot,
      color: 'cyan',
    },
    {
      title: t('reason4_title'),
      description: t('reason4_description'),
      icon: Handshake,
      color: 'teal',
    },
    {
      title: t('reason5_title'),
      description: t('reason5_description'),
      icon: Award,
      color: 'cyan',
    },
    {
      title: t('reason6_title'),
      description: t('reason6_description'),
      icon: CheckCircle2,
      color: 'teal',
    },
  ]

  const stats = [
    { value: '50+', label: t('stats_project_completed') },
    { value: '98%', label: t('stats_customer_satisfaction') },
    { value: '5+', label: t('stats_years_experience') },
    { value: '24/7', label: t('stats_support_service') },
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

      const cards = gsap.utils.toArray('.reason-card')
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
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{t('badge')}</span>
          </div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {t('title_part1')}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {t('title_part2')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isCyan = reason.color === 'cyan'
            
            return (
              <div
                key={index}
                className="reason-card group relative"
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden rounded-t-2xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-${reason.color}-400 to-transparent animate-shimmer`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${isCyan ? 'rgba(6, 182, 212, 0.1)' : 'rgba(20, 184, 166, 0.1)'} 0%, transparent 50%)`
                    }}
                  />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 md:w-18 md:h-18 rounded-2xl p-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                        style={{
                          background: `linear-gradient(135deg, ${isCyan ? 'rgba(6, 182, 212, 0.15)' : 'rgba(20, 184, 166, 0.15)'} 0%, ${isCyan ? 'rgba(6, 182, 212, 0.05)' : 'rgba(20, 184, 166, 0.05)'} 100%)`,
                          border: `1px solid ${isCyan ? 'rgba(6, 182, 212, 0.2)' : 'rgba(20, 184, 166, 0.2)'}`,
                          boxShadow: `0 0 0 0 ${isCyan ? 'rgba(6, 182, 212, 0)' : 'rgba(20, 184, 166, 0)'}`,
                        }}
                      >
                        <Icon className={`w-full h-full text-${reason.color}-400`} />
                      </div>
                    </div>

                    <h3
                      className="text-xl md:text-[22px] font-bold mb-3 text-white transition-colors duration-300 leading-tight"
                    >
                      {reason.title}
                    </h3>

                    <p className="text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {reason.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div
                        className={`w-8 h-[2px] rounded-full bg-${reason.color}-400`}
                      />
                      <span
                        className={`text-sm font-medium text-${reason.color}-400`}
                      >
                        {t('details_button')}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-${reason.color}-400`}
                      />
                    </div>
                  </div>

                  <div
                    className={`absolute top-4 right-4 text-5xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 select-none text-${reason.color}-400`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats/Trust Section */}
        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 backdrop-blur-sm mb-4">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{t('cta_badge')}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {t('cta_title')}
            </span>
          </h3>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <span className="relative z-10">{t('cta_button')}</span>
            <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
