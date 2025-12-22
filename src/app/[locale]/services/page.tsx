'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

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
    <main className="container mx-auto px-6 py-20">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h1>
        <p className="text-lg text-gray-300 mb-8">{t('subtitle')}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(s => (
          <Link
            key={s.slug}
            href={`${base}/${s.slug}`}
            className="block p-6 rounded-xl bg-[#071017]/60 border border-white/5 hover:shadow-lg hover:translate-y-[-4px] transition-transform"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-sm text-gray-300">{s.subtitle}</p>
            <div className="mt-4 text-cyan-400 font-medium">Detayları Gör →</div>
          </Link>
        ))}
      </section>
    </main>
  )
}


