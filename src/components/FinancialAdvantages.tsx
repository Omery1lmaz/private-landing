'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { ArrowRight, RefreshCw, FileText, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FinancialAdvantages() {
  const t = useTranslations('financial_advantages')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.advantage-card', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          stagger: 0.15,
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
      {/* Background teal glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ADVANTAGE / 01 - Top Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 advantage-card">
          {/* Left: Growth, Not Books */}
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                {t('advantage1_title')}
              </h3>
              <p className="text-white/80 mb-8 text-lg">
                {t('advantage1_desc')}
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                {t('advantage1_cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Seamless Sync */}
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            {/* Abstract glowing lines */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  {t('advantage1_sync_title')}
                </h3>
              </div>
              <p className="text-white/80 mb-6 text-lg">
                {t('advantage1_sync_desc')}
              </p>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-white/70 text-sm">
                  {t('advantage1_sync_detail')}
                </p>
              </div>
              {/* Small icons */}
              <div className="flex gap-2 mt-6">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADVANTAGE / 02 & 03 - Bottom Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* ADVANTAGE / 02 - Bottom Left */}
          <div className="advantage-card relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            {/* Abstract S shape */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="text-teal-400 text-sm mb-2">ADVANTAGE / 02</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {t('advantage2_title')}
              </h3>
              <p className="text-white/80 mb-8 text-lg">
                {t('advantage2_desc')}
              </p>

              {/* Monthly Financial Summary Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-teal-400" />
                  <h4 className="text-white font-semibold">
                    {t('advantage2_summary_title')}
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <p>{t('advantage2_period')}</p>
                  <p>{t('advantage2_business')}</p>
                  <p className="mt-4 leading-relaxed">
                    {t('advantage2_summary_text')}
                  </p>
                </div>
                <button className="mt-4 bg-teal-500/20 text-teal-400 px-4 py-2 rounded text-sm hover:bg-teal-500/30 transition-colors">
                  {t('advantage2_ai_button')}
                </button>
              </div>

              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                {t('advantage1_cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ADVANTAGE / 03 - Bottom Right */}
          <div className="advantage-card relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 overflow-hidden">
            {/* Abstract graphics */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-400/30 rounded-full blur-xl" />
            </div>

            {/* 3D Device representation */}
            <div className="absolute left-8 top-20 w-20 h-32 bg-slate-800 rounded-lg border border-teal-500/30 shadow-lg">
              <div className="w-full h-6 bg-green-500/50 rounded-t-lg" />
            </div>

            <div className="relative z-10">
              <div className="text-teal-400 text-sm mb-2">ADVANTAGE / 03</div>
              <h3 className="text-4xl font-bold text-white mb-4">
                {t('advantage3_title')}
              </h3>
              <p className="text-white/80 mb-8 text-lg">
                {t('advantage3_desc')}
              </p>

              {/* Quarterly Tax Overview Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 ml-24 relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-teal-400" />
                <h4 className="text-white font-semibold mb-4">
                  {t('advantage3_overview_title')}
                </h4>
                <div className="space-y-2 text-sm text-white/70">
                  <p>{t('advantage3_period')}</p>
                  <p>{t('advantage3_business')}</p>
                </div>
              </div>

              <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                {t('advantage1_cta')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

