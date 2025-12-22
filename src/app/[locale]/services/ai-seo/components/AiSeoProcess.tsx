'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Workflow, Search, Settings, BarChart3, Rocket, Clock, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  color?: string
}

function StatCard({ icon, label, value, color = 'orange' }: StatCardProps) {
  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/30 text-cyan-400',
    red: 'border-red-500/20 hover:border-red-500/30 text-red-400',
    green: 'border-green-500/20 hover:border-green-500/30 text-green-400',
    violet: 'border-violet-500/20 hover:border-violet-500/30 text-violet-400',
    orange: 'border-orange-500/20 hover:border-orange-500/30 text-orange-400'
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

export default function AiSeoProcess() {
  const t = useTranslations('ai_seo')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.fromTo(
        '.process-section',
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

  const processSteps = [
    {
      icon: <Search className="w-6 h-6 text-orange-400" />,
      step: '01',
      title: t('process.step1'),
      description: 'Arama motoru algoritmaları ve pazar analizi'
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      step: '02',
      title: t('process.step2'),
      description: 'AI destekli teknik altyapı ve mimari tasarım'
    },
    {
      icon: <Workflow className="w-6 h-6 text-orange-400" />,
      step: '03',
      title: t('process.step3'),
      description: 'İçerik üretimi ve optimizasyon uygulaması'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      step: '04',
      title: t('process.step4'),
      description: 'Büyüme ve dönüşüm odaklı entegrasyon'
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      step: '05',
      title: t('process.step5'),
      description: 'Sürekli optimizasyon ve performans iyileştirme'
    }
  ]

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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="process-section grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400">
              <Workflow className="w-4 h-4" />
              <span>{t('process.badge')}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('process.title')}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('process.subtitle')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard icon={<Clock className="w-5 h-5" />} label={t('process.stat1_label')} value={t('process.stat1_value')} color="orange" />
              <StatCard icon={<Rocket className="w-5 h-5" />} label={t('process.stat2_label')} value={t('process.stat2_value')} color="orange" />
              <StatCard icon={<CheckCircle className="w-5 h-5" />} label={t('process.stat3_label')} value={t('process.stat3_value')} color="orange" />
            </div>

            {/* Process indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm text-gray-400">{t('process.indicator1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <span className="text-sm text-gray-400">{t('process.indicator2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <span className="text-sm text-gray-400">{t('process.indicator3')}</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect behind content */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-amber-500/10 rounded-full blur-[80px]" />

            {/* Content card */}
            <div className="relative rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-amber-500/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">SEO Süreç Adımları</h3>
                    <p className="text-gray-400 text-sm">Sistematik yaklaşım</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-orange-500/10">
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <span className="text-xs font-bold text-orange-400">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="p-4 rounded-lg bg-black/20 border border-orange-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Proje Timeline</span>
                    <Clock className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-orange-500/20 rounded-full">
                      <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                    </div>
                    <span className="text-xs text-gray-400">75%</span>
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


