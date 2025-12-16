'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Globe, ChevronDown, Check } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const pathnameWithoutLocale = pathname.replace(/^\/(tr|en)/, '')

  // ⬇️ dışarı tıklayınca kapat (DOM-safe)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030308]/95 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          EliteCode Studio
        </div>

        <div className="flex items-center gap-6">
          <a href="#services">{t('hizmetler')}</a>
          <a href="#pricing">{t('fiyatlandirma')}</a>
          <a href="#portfolio">{t('portfoy')}</a>
          <a href="#contact">{t('iletisim')}</a>

          {/* Language Switcher */}
          <div ref={ref} className="relative">
            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Globe size={18} />
              <span className="uppercase text-sm">{locale}</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-[#030308] border border-white/10 rounded-lg shadow-xl py-1">
                <Link
                  href={`/tr${pathnameWithoutLocale}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-sm ${
                    locale === 'tr'
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {t('language_tr')} {locale === 'tr' && <Check size={14} />}
                </Link>

                <Link
                  href={`/en${pathnameWithoutLocale}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-sm ${
                    locale === 'en'
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {t('language_en')} {locale === 'en' && <Check size={14} />}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
