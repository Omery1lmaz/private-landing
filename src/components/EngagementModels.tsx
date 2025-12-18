'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Zap, TrendingUp, Wrench } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

const models = [
  { icon: Briefcase, key: 'model1', color: 'cyan' },
  { icon: TrendingUp, key: 'model2', color: 'teal' },
  { icon: Zap, key: 'model3', color: 'cyan' },
  { icon: Wrench, key: 'model4', color: 'teal' },
]

export default function EngagementModels() {
  const t = useTranslations('engagement_models_section')
  const sectionRef = useRef<HTMLSection>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const modelsRef = useRef<HTMLDivElement>(null)

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

      const modelCards = gsap.utils.toArray('.model-card')
      gsap.fromTo(
        modelCards,
        { opacity: 0, y: 30, rotationX: -10 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: modelsRef.current,
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
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
              <Briefcase className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              {t('subtitle')}
            </p>
          </div>

          {/* Models Grid */}
          <div ref={modelsRef} className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {models.map((model, index) => {
              const IconComponent = model.icon
              const isCyan = model.color === 'cyan'

              return (
                <div key={index} className="model-card group relative">
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          linear-gradient(${isCyan ? 'rgba(139,92,246,0.05)' : 'rgba(59,130,246,0.05)'} 1px, transparent 1px),
                          linear-gradient(90deg, ${isCyan ? 'rgba(139,92,246,0.05)' : 'rgba(59,130,246,0.05)'} 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Animated border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${isCyan ? 'rgba(139,92,246,0.1)' : 'rgba(59,130,246,0.1)'} 0%, transparent 50%)`,
                      }}
                    />

                    {/* Accent bar */}
                    <div
                      className={`absolute top-0 left-0 w-2 h-12 ${isCyan ? 'bg-gradient-to-b from-purple-500 to-purple-500/0' : 'bg-gradient-to-b from-blue-500 to-blue-500/0'}`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${
                        isCyan
                          ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400'
                          : 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-50 transition-colors">
                        {t(`${model.key}_title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                        {t(`${model.key}_description`)}
                      </p>

                      {/* Timeline */}
                      <div className="flex items-center gap-2 pt-6 border-t border-white/10">
                        <span className={`text-xs font-semibold ${isCyan ? 'text-purple-400' : 'text-blue-400'}`}>
                          ⏱️ Tahmin:
                        </span>
                        <span className="text-sm text-gray-300">{t(`${model.key}_timeline`)}</span>
                      </div>
                    </div>

                    {/* Corner number */}
                    <div className={`absolute top-6 right-6 text-3xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none ${
                      isCyan ? 'text-purple-400' : 'text-blue-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-12 px-6">
            <p className="text-gray-300 italic max-w-3xl mx-auto">
              "{t('disclaimer')}"
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:from-purple-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-purple-500/25">
              {t('cta_button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
