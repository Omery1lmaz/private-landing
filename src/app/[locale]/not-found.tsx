'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  const t = useTranslations('common')

  return (
    <div className="min-h-screen bg-[#030308] flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 Number */}
        <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-8">
          404
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('page_not_found')}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          {t('page_not_found_description')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('go_back')}
          </button>

          <a
            href="/tr"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            {t('go_home')}
          </a>
        </div>
      </div>
    </div>
  )
}
