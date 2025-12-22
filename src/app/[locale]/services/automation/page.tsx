'use client'

import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function AutomationPage() {
  const t = useTranslations('services_section')
  const locale = useLocale()

  return (
    <main className="container mx-auto px-6 py-20">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">{t('automation_page_title')}</h1>
        <p className="text-gray-300 mt-4">{t('automation_page_subtitle')}</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl text-white mb-3">{t('automation_problem_title')}</h2>
          <p className="text-gray-300 mb-6">{t('automation_problem')}</p>

          <h3 className="text-xl text-white mb-2">{t('automation_solution_title')}</h3>
          <p className="text-gray-300 mb-6">{t('automation_solution')}</p>

          <h3 className="text-xl text-white mb-2">{t('automation_results_title')}</h3>
          <p className="text-gray-300">{t('automation_results')}</p>

          <div className="mt-6">
            <h4 className="text-lg text-white mb-2">Çözümler</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
              <li className="p-4 bg-[#061018] rounded-md border border-white/5">{t('automation_feature1')}</li>
              <li className="p-4 bg-[#061018] rounded-md border border-white/5">{t('automation_feature2')}</li>
              <li className="p-4 bg-[#061018] rounded-md border border-white/5">{t('automation_feature3')}</li>
              <li className="p-4 bg-[#061018] rounded-md border border-white/5">{t('automation_feature4')}</li>
              <li className="p-4 bg-[#061018] rounded-md border border-white/5">{t('automation_feature5')}</li>
            </ul>
          </div>
        </div>

        <aside className="bg-[#061018] p-6 rounded-xl border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-2">{t('cta_badge') || 'Operasyon'}</h3>
          <p className="text-gray-300 mb-4">Operasyonel verimlilik ve otomasyon stratejisi için görüşelim.</p>
          <Link href={`/${locale}/#contact`} className="inline-block px-5 py-2 rounded-lg bg-cyan-600 text-white">
            Operasyon Görüşmesi Talep Et
          </Link>
        </aside>
      </section>
    </main>
  )
}


