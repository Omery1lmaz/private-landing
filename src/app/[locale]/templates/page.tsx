'use client'

import { useMemo, useState } from 'react'
import { useLocale } from 'next-intl'
import {
  ArrowRight,
  Crown,
  ExternalLink,
  Filter,
  Search,
  Sparkles,
} from 'lucide-react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

type TemplateSite = {
  title: string
  category: string
  type: string
  url: string
  screenshotUrl: string
  isPremium: boolean
  featured?: boolean
}

const screenshotFor = (url: string) => {
  const subdomain = url.replace('https://', '').replace('/', '').split('.')[0]
  return `/assets/templates/${subdomain}.png`
}

const rawTemplateSites = [
  {
    title: 'Dr Medical Clinic',
    category: 'Healthcare',
    type: 'Services',
    url: 'https://dental-clinic.arvexalabs.com/',
    isPremium: true,
    featured: true,
  },
  {
    title: 'MarketPlace Hub',
    category: 'E-Commerce',
    type: 'Classifieds',
    url: 'https://ecommerce-three.arvexalabs.com/',
    isPremium: true,
    featured: true,
  },
  {
    title: 'WheelRent Pro',
    category: 'Marketplace',
    type: 'Rental Service',
    url: 'https://car.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'CleanPro Services',
    category: 'Services',
    type: 'Cleaning',
    url: 'https://cleaning-four.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'TechFlow Solutions',
    category: 'SaaS',
    type: 'Tech Platform',
    url: 'https://tech.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'DesignStudio Pro',
    category: 'Creative',
    type: 'Architecture',
    url: 'https://architecture-three.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'PropertyManager Dashboard',
    category: 'SaaS',
    type: 'Real Estate',
    url: 'https://dashboard-two.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'DataDash Analytics',
    category: 'SaaS',
    type: 'Dashboard',
    url: 'https://dashboard.arvexalabs.com/',
    isPremium: false,
  },
  {
    title: 'BuildArch Studio',
    category: 'Creative',
    type: 'Architecture',
    url: 'https://architecture-two.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'ArchPortfolio',
    category: 'Creative',
    type: 'Portfolio',
    url: 'https://architecture.arvexalabs.com/',
    isPremium: false,
  },
  {
    title: 'RealEstate Pro',
    category: 'Marketplace',
    type: 'Real Estate',
    url: 'https://real-estate-two.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'PropertyHub',
    category: 'Marketplace',
    type: 'Real Estate',
    url: 'https://real-estate.arvexalabs.com/',
    isPremium: false,
  },
  {
    title: 'ShopHub Commerce',
    category: 'E-Commerce',
    type: 'Commerce',
    url: 'https://ecommerce.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'BeautyHub Salon',
    category: 'Services',
    type: 'Beauty',
    url: 'https://beaty.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'CleanXpert Pro',
    category: 'Services',
    type: 'Cleaning',
    url: 'https://cleaningthree.arvexalabs.com/',
    isPremium: true,
  },
  {
    title: 'CleanFlow Services',
    category: 'Services',
    type: 'Cleaning',
    url: 'https://cleaning-two.arvexalabs.com/',
    isPremium: false,
  },
  {
    title: 'CleanMasters',
    category: 'Services',
    type: 'Cleaning',
    url: 'https://cleaning-one.arvexalabs.com/',
    isPremium: false,
  },
  {
    title: 'PurecleanPro',
    category: 'Services',
    type: 'Cleaning',
    url: 'https://cleaning.arvexalabs.com/',
    isPremium: true,
  },
].map((site) => ({
  ...site,
  screenshotUrl: screenshotFor(site.url),
}))

const copy = {
  tr: {
    badge: 'Canli site ilham panosu',
    eyebrow: 'ArvexaLabs Templates',
    title: 'Gercek sitelerden ilham alan premium web galerisi',
    subtitle:
      'Modern SaaS, fintech, e-ticaret ve kreatif web sitelerinden secilmis ekran goruntuleri. Kendi projeniz icin begeni listenizi buradan olusturabilirsiniz.',
    search: 'Site, kategori veya tip ara...',
    all: 'Tumu',
    featured: 'One cikan',
    premium: 'Premium fikir',
    copy: 'Referans',
    open: 'Canli siteyi ac',
    emptyTitle: 'Sonuc bulunamadi',
    emptyBody: 'Filtreleri temizleyip tekrar deneyin.',
    ctaTitle: 'Bu seviyede bir web deneyimi mi istiyorsunuz?',
    ctaBody:
      'Sectiginiz referanslara gore markaniza ozel, hizli ve donusum odakli bir web sistemi tasarlayalim.',
    ctaButton: 'Stratejik gorusme planla',
  },
  en: {
    badge: 'Live site inspiration board',
    eyebrow: 'ArvexaLabs Templates',
    title: 'A premium web gallery inspired by real websites',
    subtitle:
      'Curated screenshots from modern SaaS, fintech, e-commerce, and creative websites. Use this page to shape the direction of your next project.',
    search: 'Search site, category, or type...',
    all: 'All',
    featured: 'Featured',
    premium: 'Premium idea',
    copy: 'Reference',
    open: 'Open live site',
    emptyTitle: 'No results found',
    emptyBody: 'Clear the filters and try again.',
    ctaTitle: 'Want a web experience at this level?',
    ctaBody:
      'We can turn your selected references into a fast, conversion-focused website system tailored to your brand.',
    ctaButton: 'Book a strategy call',
  },
}

export default function TemplatesPage() {
  const locale = useLocale()
  const t = copy[locale as 'tr' | 'en'] ?? copy.tr
  const [activeCategory, setActiveCategory] = useState(t.all)
  const [searchTerm, setSearchTerm] = useState('')

  const templateSites: TemplateSite[] = rawTemplateSites
  const categories = useMemo(
    () => [t.all, ...Array.from(new Set(templateSites.map((site) => site.category)))],
    [t.all, templateSites]
  )

  const filteredSites = templateSites.filter((site) => {
    const haystack = `${site.title} ${site.category} ${site.type}`.toLowerCase()
    const matchesSearch = haystack.includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === t.all || site.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-[#030406] text-white selection:bg-cyan-500/30 relative overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_58%)]" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.1),transparent_60%)] blur-3xl" />
      </div>

      <section className="relative z-10 pt-36 md:pt-44 pb-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-4 w-4" />
              {t.badge}
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-white/40">
              {t.eyebrow}
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-white md:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-6">
          <div className="sticky top-20 z-20 mx-auto mb-10 max-w-7xl border-y border-white/10 bg-[#030406]/85 py-4 backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={t.search}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/35 focus:border-cyan-400/50 focus:bg-white/[0.07]"
                />
              </div>

              <div className="flex max-w-full items-center gap-2 overflow-x-auto pb-1">
                <div className="mr-1 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/35 md:flex">
                  <Filter className="h-4 w-4" />
                  Filter
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`h-10 shrink-0 rounded-full px-4 text-sm font-semibold transition-all ${
                      activeCategory === category
                        ? 'bg-white text-black shadow-lg shadow-white/10'
                        : 'border border-white/10 bg-white/[0.04] text-white/55 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredSites.length > 0 ? (
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {filteredSites.map((site, index) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    site.featured ? 'md:col-span-2 md:min-h-[500px]' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-white/[0.03] ${site.featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <img
                      src={site.screenshotUrl}
                      alt={`${site.title} website screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030406] via-transparent to-transparent opacity-65" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {site.featured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                          <Sparkles className="h-3.5 w-3.5" />
                          {t.featured}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {site.isPremium ? <Crown className="h-3.5 w-3.5 text-amber-300" /> : null}
                        {site.isPremium ? t.premium : t.copy}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                          {site.category}
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight text-white">
                          {site.title}
                        </h2>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/50">
                        {site.type}
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-sm font-semibold text-white/55">{t.open}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1">
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06] text-white/40">
                <Search className="h-7 w-7" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-white">{t.emptyTitle}</h2>
              <p className="text-white/50">{t.emptyBody}</p>
            </div>
          )}

          <div className="mx-auto mt-24 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              ArvexaLabs
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/55 md:text-lg">
              {t.ctaBody}
            </p>
            <a
              href={`/${locale}/#contact`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-4 text-sm font-bold text-black transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {t.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
