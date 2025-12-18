'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

const reasons = [
  { key: 'not_for1', type: 'not' },
  { key: 'not_for2', type: 'not' },
  { key: 'not_for3', type: 'not' },
]

export default function WhoIsNotFor() {
  const t = useTranslations('who_is_not_for_section')
  const sectionRef = useRef<HTMLSection>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const reasonsRef = useRef<HTMLDivElement>(null)

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

      const reasonCards = gsap.utils.toArray('.reason-card')
      gsap.fromTo(
        reasonCards,
        { opacity: 0, x: -20, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reasonsRef.current,
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-400 mb-6">
              <X className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Reasons */}
          <div ref={reasonsRef} className="space-y-4 mb-12">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card group relative">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-red-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
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
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors">
                        {t(`${reason.key}`)}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {t(`${reason.key}_detail`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-gray-500 text-sm">Ancak</span>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Closing Message */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white text-lg font-semibold mb-2">
                  {t('closing')}
                </p>
                <p className="text-gray-300 text-sm">
                  Özü itibariyle; işinizi uzun vadeli bir varlık olarak görmek, dijital sistemlerinize yatırım yapmak ve büyümeyi ölçmek istiyorsanız, başlamaya hazırız.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-green-500/25">
              {t('cta_button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
