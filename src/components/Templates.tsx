'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Layout } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Templates() {
  const t = useTranslations('templates_section')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const templates = [
    {
      id: 1,
      name: t('template1_name'),
      category: t('category_agency'),
      content: (
        <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[120px]"></div>
          
          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="text-white font-bold text-xl tracking-tight">LUXE<span className="text-cyan-400">.</span></div>
            <div className="hidden md:flex gap-8 text-white/60 text-sm">
              <span className="hover:text-white cursor-pointer transition-colors">{t('nav_work')}</span>
              <span className="hover:text-white cursor-pointer transition-colors">{t('nav_services')}</span>
              <span className="hover:text-white cursor-pointer transition-colors">{t('nav_about')}</span>
              <span className="hover:text-white cursor-pointer transition-colors">{t('nav_contact')}</span>
            </div>
            <div className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full">{t('nav_get_started')}</div>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white/70">{t('template1_badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
              {t('template1_title_1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                {t('template1_title_2')}
              </span>
              <br />
              {t('template1_title_3')}
            </h1>
            <p className="text-lg text-white/50 max-w-xl mb-10">
              {t('template1_desc')}
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
                {t('template1_cta1')}
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors">
                {t('template1_cta2')}
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-10 left-10 text-white/30 text-sm">
            <div>{t('template1_stat1')}</div>
            <div>{t('template1_stat2')}</div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: t('template2_name'),
      category: t('category_saas'),
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px]"></div>

          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg"></div>
              <span className="text-white font-semibold text-lg">Flowbase</span>
            </div>
            <div className="hidden md:flex gap-8 text-white/60 text-sm">
              <span>{t('nav_features')}</span>
              <span>{t('nav_pricing')}</span>
              <span>{t('nav_docs')}</span>
              <span>{t('nav_changelog')}</span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white/70 text-sm">{t('nav_sign_in')}</button>
              <button className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-lg">{t('nav_start_free')}</button>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs text-cyan-400 font-medium">{t('template2_badge_new')}</span>
              <span className="text-sm text-white/70">{t('template2_badge_text')}</span>
              <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('template2_title_1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                {t('template2_title_2')}
              </span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mb-10">
              {t('template2_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow">
                {t('template2_cta1')}
              </button>
              <button className="flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                {t('template2_cta2')}
              </button>
            </div>
            <div className="flex items-center gap-6 mt-12 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('template2_feature1')}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('template2_feature2')}
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between text-white/30 text-sm">
            <span>{t('template2_stat1')}</span>
            <span>{t('template2_stat2')}</span>
            <span>{t('template2_stat3')}</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: t('template3_name'),
      category: t('category_creative'),
      content: (
        <div className="relative w-full h-full bg-[#f5f0e8] overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-20 right-20 w-64 h-64 border border-black/10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-500 rounded-full opacity-80"></div>
          
          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="text-black font-bold text-xl">STUDIO</div>
            <div className="hidden md:flex gap-8 text-black/50 text-sm font-medium">
              <span className="hover:text-black cursor-pointer">{t('nav_projects')}</span>
              <span className="hover:text-black cursor-pointer">{t('nav_about')}</span>
              <span className="hover:text-black cursor-pointer">{t('nav_services')}</span>
              <span className="hover:text-black cursor-pointer">{t('nav_contact')}</span>
            </div>
            <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center">
              <div className="w-5 h-0.5 bg-black"></div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-3xl">
              <div className="text-black/40 text-sm font-medium tracking-widest mb-4">{t('template3_tagline')}</div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.95] mb-8">
                {t('template3_title_1')}
                <br />
                <em className="font-serif not-italic">{t('template3_title_2')}</em>
                <br />
                {t('template3_title_3')}
              </h1>
              <p className="text-lg text-black/50 max-w-lg mb-10">
                {t('template3_desc')}
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-black/80 transition-colors">
                  {t('template3_cta1')}
                </button>
                <button className="px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all">
                  {t('template3_cta2')}
                </button>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="absolute bottom-0 left-0 right-0 py-4 bg-black text-white overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              <span className="text-sm font-medium">{t('template3_service1')}</span>
              <span className="text-teal-400">★</span>
              <span className="text-sm font-medium">{t('template3_service2')}</span>
              <span className="text-teal-400">★</span>
              <span className="text-sm font-medium">{t('template3_service3')}</span>
              <span className="text-teal-400">★</span>
              <span className="text-sm font-medium">{t('template3_service4')}</span>
              <span className="text-teal-400">★</span>
              <span className="text-sm font-medium">{t('template3_service5')}</span>
              <span className="text-teal-400">★</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      name: t('template4_name'),
      category: t('category_fintech'),
      content: (
        <div className="relative w-full h-full bg-[#0d0d0d] overflow-hidden">
          {/* Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent"></div>
          
          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">₿</span>
              </div>
              <span className="text-white font-semibold">Nexus</span>
            </div>
            <div className="hidden md:flex gap-8 text-white/50 text-sm">
              <span>{t('nav_products')}</span>
              <span>{t('nav_solutions')}</span>
              <span>{t('nav_pricing')}</span>
              <span>{t('nav_resources')}</span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white/70 text-sm">{t('nav_log_in')}</button>
              <button className="px-4 py-2 bg-emerald-400 text-black text-sm font-semibold rounded-lg">{t('nav_get_started')}</button>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 px-6 md:px-20">
              <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-emerald-400 text-sm">{t('template4_badge')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                {t('template4_title_1')}
                <br />
                <span className="text-emerald-400">{t('template4_title_2')}</span>
              </h1>
              <p className="text-lg text-white/40 mb-8">
                {t('template4_desc')}
              </p>
              <div className="flex gap-4 mb-10">
                <button className="px-8 py-4 bg-emerald-400 text-black font-semibold rounded-xl hover:bg-emerald-300 transition-colors">
                  {t('template4_cta1')}
                </button>
                <button className="px-8 py-4 border border-white/10 text-white rounded-xl hover:bg-white/5 transition-colors">
                  {t('template4_cta2')}
                </button>
              </div>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">{t('template4_stat1_value')}</div>
                  <div className="text-sm text-white/40">{t('template4_stat1_label')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{t('template4_stat2_value')}</div>
                  <div className="text-sm text-white/40">{t('template4_stat2_label')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{t('template4_stat3_value')}</div>
                  <div className="text-sm text-white/40">{t('template4_stat3_label')}</div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2">
              <div className="w-72 h-[500px] bg-gradient-to-b from-white/10 to-white/5 rounded-[40px] border border-white/10 p-3">
                <div className="w-full h-full bg-gradient-to-b from-emerald-950 to-black rounded-[32px] p-6 flex flex-col">
                  <div className="text-center mb-8">
                    <div className="text-white/50 text-sm">{t('template4_phone_label')}</div>
                    <div className="text-4xl font-bold text-white mt-2">$84,230.00</div>
                    <div className="text-emerald-400 text-sm mt-1">{t('template4_phone_change')}</div>
                  </div>
                  <div className="flex justify-between mb-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">↑</span>
                    </div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">↓</span>
                    </div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">⇄</span>
                    </div>
                    <div className="w-14 h-14 bg-emerald-400 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl text-black">+</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="bg-white/5 rounded-xl p-3 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                        <div>
                          <div className="text-white text-sm">Bitcoin</div>
                          <div className="text-white/40 text-xs">BTC</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-sm">$42,150</div>
                        <div className="text-emerald-400 text-xs">+2.4%</div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                        <div>
                          <div className="text-white text-sm">Ethereum</div>
                          <div className="text-white/40 text-xs">ETH</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-sm">$28,430</div>
                        <div className="text-emerald-400 text-xs">+5.1%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      name: t('template5_name'),
      category: t('category_ecommerce'),
      content: (
        <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-cyan-900/30 to-transparent"></div>
          
          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div className="text-white font-bold text-xl tracking-widest">NOIR</div>
            <div className="hidden md:flex gap-8 text-white/60 text-sm uppercase tracking-wider">
              <span>{t('template5_nav1')}</span>
              <span>{t('template5_nav2')}</span>
              <span>{t('template5_nav3')}</span>
              <span>{t('nav_about')}</span>
            </div>
            <div className="flex gap-4 text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-xl">
              <div className="text-cyan-400 text-sm font-medium tracking-widest mb-4">{t('template5_tagline')}</div>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6">
                {t('template5_title_1')}
                <br />
                <span className="font-bold italic">{t('template5_title_2')}</span>
                <br />
                {t('template5_title_3')}
              </h1>
              <p className="text-lg text-white/40 mb-10">
                {t('template5_desc')}
              </p>
              <div className="flex gap-4">
                <button className="px-10 py-4 bg-white text-black font-medium tracking-wide hover:bg-white/90 transition-colors">
                  {t('template5_cta1')}
                </button>
                <button className="px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/5 transition-colors">
                  {t('template5_cta2')}
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards Gallery */}
          <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 gap-4">
            {/* Main Product Card */}
            <div className="w-72 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop&q=80" 
                  alt="Wool Coat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                {/* Wishlist button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                {/* New badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">NEW</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-white font-medium">{t('template5_product_name')}</div>
                    <div className="text-white/40 text-sm">{t('template5_product_collection')}</div>
                  </div>
                  <div className="text-white font-semibold">$890</div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-neutral-800 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="w-6 h-6 bg-amber-800 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                  <div className="w-6 h-6 bg-stone-400 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
              </div>
            </div>

            {/* Secondary Product Cards Stack */}
            <div className="flex flex-col gap-3 w-36">
              {/* Card 1 */}
              <div className="relative h-36 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop&q=80" 
                  alt="Jacket"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-white text-xs font-medium">Leather Jacket</div>
                  <div className="text-white/60 text-xs">$1,290</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative h-36 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop&q=80" 
                  alt="Sweater"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-white text-xs font-medium">Cashmere Knit</div>
                  <div className="text-white/60 text-xs">$450</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative h-36 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop&q=80" 
                  alt="Blazer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-white text-xs font-medium">Tailored Blazer</div>
                  <div className="text-white/60 text-xs">$680</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white/30 text-sm">
            <span>{t('template5_footer1')}</span>
            <span>{t('template5_footer2')}</span>
          </div>
        </div>
      )
    },
    {
      id: 6,
      name: t('template6_name'),
      category: t('category_ai'),
      content: (
        <div className="relative w-full h-full bg-black overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-cyan-500 via-teal-500 via-emerald-500 via-cyan-500 to-cyan-500 rounded-full blur-[100px] opacity-30 animate-spin-slow"></div>
          </div>
          
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg"></div>
              <span className="text-white font-semibold">Synth AI</span>
            </div>
            <div className="hidden md:flex gap-8 text-white/50 text-sm">
              <span>{t('nav_features')}</span>
              <span>{t('nav_use_cases')}</span>
              <span>{t('nav_pricing')}</span>
              <span>{t('nav_api')}</span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white/70 text-sm">{t('nav_sign_in')}</button>
              <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg">{t('nav_try_free')}</button>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full border-2 border-black"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full border-2 border-black"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full border-2 border-black"></div>
              </div>
              <span className="text-sm text-white/70">{t('template6_badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('template6_title_1')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 animate-gradient-x">
                {t('template6_title_2')}
              </span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mb-10">
              {t('template6_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all">
                {t('template6_cta1')}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-4 border border-white/10 text-white rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {t('template6_cta2')}
              </button>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-12 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{t('template6_stat1_value')}</div>
              <div className="text-white/40">{t('template6_stat1_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{t('template6_stat2_value')}</div>
              <div className="text-white/40">{t('template6_stat2_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{t('template6_stat3_value')}</div>
              <div className="text-white/40">{t('template6_stat3_label')}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      name: t('template7_name'),
      category: t('category_health'),
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
          {/* Organic shapes */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl"></div>

          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✦</span>
              </div>
              <span className="text-teal-900 font-semibold text-lg">Vitality</span>
            </div>
            <div className="hidden md:flex gap-8 text-teal-900/60 text-sm">
              <span>{t('nav_programs')}</span>
              <span>{t('nav_nutrition')}</span>
              <span>{t('nav_coaching')}</span>
              <span>{t('nav_community')}</span>
            </div>
            <button className="px-6 py-2.5 bg-teal-500 text-white text-sm font-medium rounded-full">{t('template7_nav_cta')}</button>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 rounded-full px-4 py-2 mb-6">
                <span className="text-teal-600 text-sm font-medium">🌱 {t('template7_badge')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-teal-900 leading-[1.1] mb-6">
                {t('template7_title_1')}
                <br />
                {t('template7_title_2')}
                <br />
                <span className="text-teal-500">{t('template7_title_3')}</span>
              </h1>
              <p className="text-lg text-teal-700/60 mb-10 max-w-lg">
                {t('template7_desc')}
              </p>
              <div className="flex gap-4 mb-12">
                <button className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-colors">
                  {t('template7_cta1')}
                </button>
                <button className="px-8 py-4 border-2 border-teal-500/30 text-teal-700 font-semibold rounded-full hover:border-teal-500 transition-colors">
                  {t('template7_cta2')}
                </button>
              </div>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-2xl">🧘</div>
                  <div className="text-sm text-teal-900/60">{t('template7_feature1')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-2xl">🥗</div>
                  <div className="text-sm text-teal-900/60">{t('template7_feature2')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-2xl">💪</div>
                  <div className="text-sm text-teal-900/60">{t('template7_feature3')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating testimonial */}
          <div className="hidden lg:block absolute right-20 bottom-20 w-80 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">★</span>)}
            </div>
            <p className="text-teal-900/70 text-sm mb-4">{t('template7_testimonial')}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-200 rounded-full"></div>
              <div>
                <div className="text-teal-900 font-medium text-sm">{t('template7_testimonial_author')}</div>
                <div className="text-teal-900/40 text-xs">{t('template7_testimonial_info')}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      name: t('template8_name'),
      category: t('category_devtools'),
      content: (
        <div className="relative w-full h-full bg-[#0f0f0f] overflow-hidden">
          {/* Code grid background */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
          {/* Gradient */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
                <span className="text-black font-mono text-sm font-bold">&lt;/&gt;</span>
              </div>
              <span className="text-white font-semibold">DevKit</span>
            </div>
            <div className="hidden md:flex gap-8 text-white/50 text-sm font-mono">
              <span>{t('nav_docs')}</span>
              <span>{t('nav_api')}</span>
              <span>{t('nav_blog')}</span>
              <span>{t('nav_changelog')}</span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white/70 text-sm font-mono">npm i devkit</button>
              <button className="px-4 py-2 bg-cyan-400 text-black text-sm font-semibold rounded">{t('nav_get_started')}</button>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-8 font-mono text-sm">
              <span className="text-cyan-400">{t('template8_badge_version')}</span>
              <span className="text-white/50">{t('template8_badge_text')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-mono">
              {t('template8_title_1')}{' '}
              <span className="text-cyan-400">{t('template8_title_2')}</span>
              <br />
              {t('template8_title_3')}{' '}
              <span className="text-cyan-400">{t('template8_title_4')}</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mb-10">
              {t('template8_desc')}
            </p>
            
            {/* Code snippet */}
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-left mb-10 max-w-xl w-full">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-cyan-400">
                <span className="text-purple-400">import</span> {'{'} devkit {'}'} <span className="text-purple-400">from</span> <span className="text-yellow-400">'@devkit/core'</span>
                {'\n\n'}
                <span className="text-purple-400">const</span> app = devkit.<span className="text-blue-400">create</span>({'{'}
                {'\n'}  <span className="text-white">ai:</span> <span className="text-orange-400">true</span>,
                {'\n'}  <span className="text-white">realtime:</span> <span className="text-orange-400">true</span>
                {'\n'}{'}'})
              </pre>
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors">
                {t('template8_cta1')}
              </button>
              <button className="px-8 py-4 border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {t('template8_cta2')}
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      name: t('template9_name'),
      category: t('category_realestate'),
      content: (
        <div className="relative w-full h-full bg-[#f8f6f3] overflow-hidden">
          {/* Background gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-teal-100/50 to-transparent"></div>
          
          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div className="text-stone-900 font-serif text-2xl">Estāte</div>
            <div className="hidden md:flex gap-8 text-stone-600 text-sm">
              <span>{t('nav_properties')}</span>
              <span>{t('nav_neighborhoods')}</span>
              <span>{t('nav_about')}</span>
              <span>{t('nav_contact')}</span>
            </div>
            <button className="px-6 py-2.5 bg-stone-900 text-white text-sm rounded-full">{t('template9_nav_cta')}</button>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-xl">
              <div className="text-teal-600 text-sm font-medium mb-4">{t('template9_tagline')}</div>
              <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-6">
                {t('template9_title_1')}
                <br />
                {t('template9_title_2')}
                <br />
                <em>{t('template9_title_3')}</em>
              </h1>
              <p className="text-lg text-stone-600 mb-10 max-w-lg">
                {t('template9_desc')}
              </p>
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="text-stone-400 text-xs mb-1 block">{t('template9_search_location')}</label>
                    <select className="w-full text-stone-900 bg-transparent border-b border-stone-200 pb-2 focus:outline-none">
                      <option>New York</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-stone-400 text-xs mb-1 block">{t('template9_search_type')}</label>
                    <select className="w-full text-stone-900 bg-transparent border-b border-stone-200 pb-2 focus:outline-none">
                      <option>Penthouse</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-stone-400 text-xs mb-1 block">{t('template9_search_price')}</label>
                    <select className="w-full text-stone-900 bg-transparent border-b border-stone-200 pb-2 focus:outline-none">
                      <option>$5M - $10M</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors">
                  {t('template9_search_button')}
                </button>
              </div>
            </div>
          </div>

          {/* Property Card */}
          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
            <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 overflow-hidden">
                {/* Building silhouette */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-4">
                  <div className="w-8 h-24 bg-stone-500/30 rounded-t"></div>
                  <div className="w-12 h-36 bg-stone-600/40 rounded-t">
                    <div className="grid grid-cols-3 gap-0.5 p-1 mt-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-full h-2 bg-yellow-200/50 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  <div className="w-16 h-44 bg-stone-700/50 rounded-t">
                    <div className="grid grid-cols-4 gap-0.5 p-1.5 mt-2">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-full h-2 bg-cyan-200/40 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-32 bg-stone-500/30 rounded-t"></div>
                </div>
                {/* Sky gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-teal-200/30 via-transparent to-transparent"></div>
                {/* Featured badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-teal-500 text-white text-xs font-medium rounded-full">
                  {t('template9_featured')}
                </div>
                {/* Image count */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-lg flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  12
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-stone-900 font-serif text-xl mb-2">{t('template9_property_name')}</h3>
                <p className="text-stone-500 text-sm mb-4 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    5 bed
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    4 bath
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    4,500 sqft
                  </span>
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                  <div className="text-stone-900 font-semibold text-xl">$8.5M</div>
                  <button className="flex items-center gap-1 text-teal-600 text-sm font-medium hover:gap-2 transition-all">
                    {t('template9_view')} 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-stone-400 text-sm">
            <span>{t('template9_stat1')}</span>
            <span>{t('template9_stat2')}</span>
            <span>{t('template9_stat3')}</span>
          </div>
        </div>
      )
    },
    {
      id: 10,
      name: t('template10_name'),
      category: t('category_events'),
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/5 rounded-full"></div>
          <div className="absolute top-20 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          
          {/* Gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[150px]"></div>

          {/* Nav */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg"></div>
              <span className="text-white font-semibold">Eventify</span>
            </div>
            <div className="hidden md:flex gap-8 text-white/50 text-sm">
              <span>{t('nav_browse')}</span>
              <span>{t('nav_create')}</span>
              <span>{t('nav_pricing')}</span>
              <span>{t('nav_resources')}</span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white/70 text-sm">{t('nav_log_in')}</button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-lg">{t('template10_nav_cta')}</button>
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="text-cyan-400 text-sm">🎉</span>
              <span className="text-white/70 text-sm">{t('template10_badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('template10_title_1')}
              <br />
              {t('template10_title_2')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                {t('template10_title_3')}
              </span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mb-10">
              {t('template10_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all">
                {t('template10_cta1')}
              </button>
              <button className="px-8 py-4 border border-white/10 text-white rounded-xl hover:bg-white/5 transition-colors">
                {t('template10_cta2')}
              </button>
            </div>
            
            {/* Event cards preview */}
            <div className="flex gap-4 mt-16">
              {/* Tech Summit Card */}
              <div className="hidden md:block w-52 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <div className="relative h-28 bg-gradient-to-br from-cyan-600 to-teal-700 p-4">
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-[10px] text-white font-medium">TECH</div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-400 border border-white/30"></div>
                      <div className="w-5 h-5 rounded-full bg-teal-400 border border-white/30"></div>
                      <div className="w-5 h-5 rounded-full bg-emerald-400 border border-white/30"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-white font-medium text-sm mb-1">{t('template10_event1_name')}</div>
                  <div className="flex justify-between text-white/40 text-xs">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {t('template10_event1_date')}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {t('template10_event1_attendees')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Music Festival Card */}
              <div className="hidden md:block w-52 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <div className="relative h-28 bg-gradient-to-br from-teal-600 to-emerald-700 p-4">
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-[10px] text-white font-medium">MUSIC</div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {/* Music visualization bars */}
                  <div className="absolute bottom-3 left-3 flex items-end gap-1 h-8">
                    {[60, 80, 45, 90, 70, 55, 85, 40].map((h, idx) => (
                      <div key={idx} className="w-1.5 bg-white/60 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${idx * 0.1}s` }}></div>
                    ))}
                  </div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-white font-medium text-sm mb-1">{t('template10_event2_name')}</div>
                  <div className="flex justify-between text-white/40 text-xs">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {t('template10_event2_date')}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {t('template10_event2_attendees')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Design Week Card */}
              <div className="hidden md:block w-52 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <div className="relative h-28 bg-gradient-to-br from-emerald-600 to-cyan-700 p-4">
                  <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-[10px] text-white font-medium">DESIGN</div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {/* Design elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                    <div className="w-6 h-6 border-2 border-white/40 rounded-lg rotate-12"></div>
                    <div className="w-6 h-6 bg-white/20 rounded-full -mt-2"></div>
                    <div className="w-6 h-6 border-2 border-white/40 rounded -rotate-12"></div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="px-2 py-1 bg-white/20 rounded text-[10px] text-white">UI/UX</div>
                    <div className="px-2 py-1 bg-white/20 rounded text-[10px] text-white">Brand</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-white font-medium text-sm mb-1">{t('template10_event3_name')}</div>
                  <div className="flex justify-between text-white/40 text-xs">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {t('template10_event3_date')}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {t('template10_event3_attendees')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % templates.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, templates.length])

  const scrollToIndex = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const handlePrev = () => {
    scrollToIndex((activeIndex - 1 + templates.length) % templates.length)
  }

  const handleNext = () => {
    scrollToIndex((activeIndex + 1) % templates.length)
  }

  return (
    <section id="templates" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-sm text-cyan-400 mb-4">
            <Layout className="w-4 h-4" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title_part1')}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {t('title_part2')}
            </span>
          </h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Template Showcase */}
        <div className="relative">
          {/* Main Template Display */}
          <div className="relative mx-auto max-w-6xl">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              {templates[activeIndex].content}
            </div>

            {/* Template Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-black/60 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/10">
                <div className="text-white font-semibold text-lg">{templates[activeIndex].name}</div>
                <div className="text-cyan-400 text-sm">{templates[activeIndex].category}</div>
              </div>
              <div className="text-white/30 text-sm">
                {activeIndex + 1} / {templates.length}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 z-30 backdrop-blur-xl"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 z-30 backdrop-blur-xl"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {templates.map((template, index) => (
            <button
              key={template.id}
              onClick={() => scrollToIndex(index)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeIndex === index 
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white scale-105' 
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
                }
              `}
            >
              {template.name}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center gap-2 mt-8">
          {templates.map((_, index) => (
            <div
              key={index}
              className="h-1 rounded-full bg-white/10 overflow-hidden transition-all duration-300"
              style={{ width: activeIndex === index ? '48px' : '12px' }}
            >
              {activeIndex === index && (
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-progress"
                  style={{ animationDuration: '5s' }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            {t('cta_button')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear;
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
