'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Globe, Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

// shadcn / ui components (assumes you have shadcn components under src/components/ui)
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu'

export default function Navbar() {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const pathname = usePathname()
  const s = useTranslations('services_section')
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const pathnameWithoutLocale = pathname ? pathname.replace(/^\/(tr|en)/, '') : ''
  const isHomePage = pathnameWithoutLocale === '' || pathnameWithoutLocale === '/'
  const homeAnchor = (id: string) => (isHomePage ? `#${id}` : `/${locale}/#${id}`)

  useEffect(() => {
    if (mobileOpen && navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [mobileOpen])

  const navLinks = [
    { key: 'ready-to-go', label: 'Hazır Paketler', href: `/${locale}/ready-to-go` },
    { key: 'templates', label: t('templates'), href: `/${locale}/templates` },
    { key: 'pricing', label: t('fiyatlandirma'), href: homeAnchor('pricing') },
    { key: 'portfolio', label: t('portfoy'), href: homeAnchor('portfolio') },
    { key: 'contact', label: t('iletisim'), href: homeAnchor('contact') },
  ]

  const services = [
    { slug: 'web-dev', label: s('web_dev_title') },
    { slug: 'mobile-app', label: s('mobile_dev_title') },
    { slug: 'automation', label: s('automation_title') },
    { slug: '../../ready-to-go', label: 'Hazır Web Siteleri' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#030308]/80 backdrop-blur-xl border-b border-white/10" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center group cursor-pointer" aria-label="Go to homepage">
          <div className="relative h-10 w-40 group-hover:shadow-lg transition-all duration-300">
            <Image 
              src="/logo/logo.svg" 
              alt="ArvexaLabs Logo" 
              fill
              priority
              className="object-contain" 
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/40 group">
                {t('hizmetler')}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#061218]/95 border border-white/6 rounded-xl shadow-2xl backdrop-blur-xl py-2">
              {services.map((svc) => (
                <DropdownMenuItem key={svc.slug} asChild>
                  <Link href={`/${locale}/services/${svc.slug}`} className="block px-4 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/5">
                    {svc.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300">
                <Globe size={18} />
                <span className="text-xs font-semibold uppercase">{locale}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-[#030308]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl py-2">
              <DropdownMenuItem asChild>
                <Link
                  href={`/tr${pathnameWithoutLocale}`}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${locale === 'tr' ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-teal-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <span>Türkçe</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={`/en${pathnameWithoutLocale}`}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${locale === 'en' ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-teal-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <span>English</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href={homeAnchor('contact')}
            className="relative group px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2 ring-0 focus:ring-2 focus:ring-cyan-500/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('ucretsiz_danismanlik')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div ref={navRef} className="lg:hidden absolute top-20 left-0 right-0 bg-[#030308]/95 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks
              .filter(link => link.key !== 'ready-to-go')
              .map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

            <div className="pt-2">
              <div className="text-sm text-gray-400 px-4 py-2">{t('hizmetler')}</div>
              {services
                .filter(svc => !svc.slug.includes('ready-to-go'))
                .map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/${locale}/services/${svc.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    {svc.label}
                  </Link>
                ))}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300">
                      <span className="flex items-center gap-2">
                        <Globe size={18} />
                        <span className="text-sm font-semibold uppercase">{locale}</span>
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="left-0 right-0 mt-2 bg-[#030308]/95 border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl py-2">
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/tr${pathnameWithoutLocale}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${locale === 'tr' ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-teal-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                      >
                        <span>Türkçe</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/en${pathnameWithoutLocale}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${locale === 'en' ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-teal-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                      >
                        <span>English</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <a
                href={homeAnchor('contact')}
                onClick={() => setMobileOpen(false)}
                className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                {t('ucretsiz_danismanlik')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
