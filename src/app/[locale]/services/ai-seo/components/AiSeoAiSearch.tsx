'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bot, Mic, MessageCircle, Cpu, Eye, Volume2, MessageSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  color?: string
}

function StatCard({ icon, label, value, color = 'cyan' }: StatCardProps) {
  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/30 text-cyan-400',
    red: 'border-red-500/20 hover:border-red-500/30 text-red-400',
    green: 'border-green-500/20 hover:border-green-500/30 text-green-400',
    violet: 'border-violet-500/20 hover:border-violet-500/30 text-violet-400',
    teal: 'border-teal-500/20 hover:border-teal-500/30 text-teal-400'
  }

  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm hover:bg-white/[0.06] ${colorClasses[color as keyof typeof colorClasses]} transition-all`}>
      <div className="flex items-center gap-2 mb-1 text-gray-400">
        {icon}
        <span className="text-xs uppercase tracking-wide text-gray-500">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  )
}

export default function AiSeoAiSearch() {
  const t = useTranslations('ai_seo')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.fromTo(
        '.ai-search-section',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate stat cards with stagger
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-24">
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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="ai-search-section grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-sm text-teal-400">
              <Bot className="w-4 h-4" />
              <span>{t('ai_search.badge')}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('ai_search.title')}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('ai_search.subtitle')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard icon={<Eye className="w-5 h-5" />} label={t('ai_search.stat1_label')} value={t('ai_search.stat1_value')} color="teal" />
              <StatCard icon={<Mic className="w-5 h-5" />} label={t('ai_search.stat2_label')} value={t('ai_search.stat2_value')} color="teal" />
              <StatCard icon={<MessageSquare className="w-5 h-5" />} label={t('ai_search.stat3_label')} value={t('ai_search.stat3_value')} color="teal" />
            </div>

            {/* AI Search indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-sm text-gray-400">{t('ai_search.indicator1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <span className="text-sm text-gray-400">{t('ai_search.indicator2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <span className="text-sm text-gray-400">{t('ai_search.indicator3')}</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect behind content */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/10 rounded-full blur-[80px]" />

            {/* Content card */}
            <div className="relative rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Arama Optimizasyonu</h3>
                    <p className="text-gray-400 text-sm">Yeni nesil arama sistemleri</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[t('ai_search.item1'), t('ai_search.item2'), t('ai_search.item3'), t('ai_search.item4')].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-teal-500/10">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* AI Features */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-black/20 border border-teal-500/10">
                    <Cpu className="w-4 h-4 text-teal-400" />
                    <span className="text-xs text-gray-400">Yapılandırılmış Veri</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-black/20 border border-teal-500/10">
                    <Volume2 className="w-4 h-4 text-teal-400" />
                    <span className="text-xs text-gray-400">Sesli Arama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


