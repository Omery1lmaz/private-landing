'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function SimpleClearUseful() {
  const t = useTranslations('simple_clear_useful')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.feature-card', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.6,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white/70">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Developers Card */}
          <div className="feature-card relative bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 overflow-hidden group hover:border-purple-500/50 transition-all">
            {/* Abstract wave design - purple/blue */}
            <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30">
              <svg
                viewBox="0 0 400 160"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q100,20 200,80 T400,80 L400,160 L0,160 Z"
                  fill="url(#grad1)"
                />
                <path
                  d="M0,100 Q150,40 300,100 T400,100 L400,160 L0,160 Z"
                  fill="url(#grad1)"
                  opacity="0.6"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                {t('developers_title')}
              </h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                {t('developers_desc')}
              </p>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                {t('learn_more')}
              </button>
            </div>
          </div>

          {/* Startup Card */}
          <div className="feature-card relative bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 overflow-hidden group hover:border-purple-500/50 transition-all">
            {/* Abstract wave design - purple/pink */}
            <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30">
              <svg
                viewBox="0 0 400 160"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q100,20 200,80 T400,80 L400,160 L0,160 Z"
                  fill="url(#grad2)"
                />
                <path
                  d="M0,100 Q150,40 300,100 T400,100 L400,160 L0,160 Z"
                  fill="url(#grad2)"
                  opacity="0.6"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                {t('startup_title')}
              </h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                {t('startup_desc')}
              </p>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                {t('learn_more')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

