'use client'

import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function FastDeliveryPage() {
  const t = useTranslations('services_section')
  const locale = useLocale()

  return (
    <main className="container mx-auto px-6 py-20">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">{t('fast_delivery_page_title')}</h1>
        <p className="text-gray-300 mt-4">{t('fast_delivery_page_subtitle')}</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl text-white mb-3">{t('fast_delivery_problem_title')}</h2>
          <p className="text-gray-300 mb-6">{t('fast_delivery_problem')}</p>

          <h3 className="text-xl text-white mb-2">{t('fast_delivery_solution_title')}</h3>
          <p className="text-gray-300 mb-6">{t('fast_delivery_solution')}</p>

          <h3 className="text-xl text-white mb-2">{t('fast_delivery_results_title')}</h3>
          <p className="text-gray-300">{t('fast_delivery_results')}</p>
        </div>

        <aside className="bg-[#061018] p-6 rounded-xl border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-2">{t('cta_badge') || 'Hızlı Başlangıç'}</h3>
          <p className="text-gray-300 mb-4">MVP ve hızlı test döngüleriyle pazara erken çıkın.</p>
          <Link href={`/${locale}/#contact`} className="inline-block px-5 py-2 rounded-lg bg-cyan-600 text-white">
            Hemen Başvur
          </Link>
        </aside>
      </section>
    </main>
  )
}


