'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('common')

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#030308] flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t('error_title')}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base mb-8">
          {t('error_description')} Lütfen sayfayı yenileyin veya ana sayfaya dönün.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
            <summary className="text-cyan-400 cursor-pointer mb-2">
              Hata Detayları (Geliştirme)
            </summary>
            <pre className="text-red-400 text-sm whitespace-pre-wrap break-words">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            {t('retry')}
          </button>

          <a
            href="/tr"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            {t('go_home')}
          </a>
        </div>
      </div>
    </div>
  )
}
