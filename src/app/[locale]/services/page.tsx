'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesIndex() {
  const locale = useLocale()
  const t = useTranslations('services_section')

  const base = `/${locale}/services`

  const services = [
    { slug: 'ai-seo', title: t('ai_seo_title'), subtitle: t('ai_seo_subtitle') },
    { slug: 'web-dev', title: t('web_dev_title'), subtitle: t('web_dev_subtitle') },
    { slug: 'mobile-app', title: t('mobile_dev_title'), subtitle: t('mobile_dev_subtitle') },
    { slug: 'automation', title: t('automation_title'), subtitle: t('automation_subtitle') },
    { slug: 'fast-delivery', title: t('fast_delivery_title'), subtitle: t('fast_delivery_subtitle') },
  ]

  return (
    <main className="min-h-screen bg-[#030406] text-white selection:bg-cyan-500/30 relative">
      <Navbar />
      
      {/* Global Scroll Progress */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left scale-x-0 animate-[scrollProgress_1s_linear_initial] [animation-timeline:scroll()]"
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            {t('subtitle')}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(s => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className="group block p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{s.subtitle}</p>
              <div className="text-cyan-400 font-medium flex items-center gap-2">
                Detayları Gör <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  )
}


