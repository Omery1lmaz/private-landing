 'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Globe,
  Bot,
  Settings,
  Zap,
  ArrowRight,
  Play,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )

      if (diagramRef.current) {
        gsap.fromTo(
          diagramRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.3 }
        )
      }

      gsap.to(heroRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-[#030308]"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-4 items-start max-w-[1400px] mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-6 pt-8">
            {/* Announcement badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{t('announcement_badge')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

            <div>
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] mb-6 text-white"
              >
                {t('title_part1')}{' '}
                <br className="hidden sm:block" />
                {t('title_part2')}{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">{t('title_part3')}</span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              {t('subtitle')}
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 items-start pt-2"
            >
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                {t('cta_project_start')}
                <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  pricingSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 font-medium px-5 py-3 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                {t('cta_strategy_call')}
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-12">
              <div className="flex items-center gap-3 text-gray-300 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm">{t('feature_seo')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-sm">{t('feature_web_apps')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Settings className="w-4 h-4 text-gray-400" />
                </div>
                <span className="text-sm">{t('feature_automation')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Architecture Diagram */}
          <div ref={diagramRef} className="relative lg:-mr-20 xl:-mr-32">
            <svg
              viewBox="0 0 800 750"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
              style={{
                transform: 'perspective(1200px) rotateX(8deg) rotateY(-5deg)',
                transformOrigin: 'center center',
              }}
            >
                <defs>
                {/* Card grid patterns */}
                <pattern id="cardGridCyan" width="12" height="12" patternUnits="userSpaceOnUse">
                  <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="0.5" />
                </pattern>
                <pattern id="cardGridTeal" width="12" height="12" patternUnits="userSpaceOnUse">
                  <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(20, 184, 166, 0.12)" strokeWidth="0.5" />
                </pattern>
                <pattern id="cardGridWhite" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.5" />
                </pattern>
                <pattern id="cardGridGreen" width="12" height="12" patternUnits="userSpaceOnUse">
                  <path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(34, 197, 94, 0.12)" strokeWidth="0.5" />
                  </pattern>

                {/* Glow filters */}
                <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feFlood floodColor="#06b6d4" floodOpacity="0.6" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <filter id="glowTeal" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feFlood floodColor="#14b8a6" floodOpacity="0.6" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feFlood floodColor="#22c55e" floodOpacity="0.5" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="glowOrange" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feFlood floodColor="#f97316" floodOpacity="0.5" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                {/* Gradients */}
                <linearGradient id="cardGradientCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.12)" />
                  <stop offset="100%" stopColor="rgba(6, 182, 212, 0.02)" />
                </linearGradient>

                <linearGradient id="cardGradientTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(20, 184, 166, 0.12)" />
                  <stop offset="100%" stopColor="rgba(20, 184, 166, 0.02)" />
                </linearGradient>

                {/* Animated border gradients */}
                <linearGradient id="borderAnimatedCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8">
                    <animate attributeName="stopOpacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#0891b2" stopOpacity="0.3">
                    <animate attributeName="stopOpacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8">
                    <animate attributeName="stopOpacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                <linearGradient id="borderAnimatedTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8">
                    <animate attributeName="stopOpacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#0d9488" stopOpacity="0.3">
                    <animate attributeName="stopOpacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8">
                    <animate attributeName="stopOpacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                <linearGradient id="borderAnimatedGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7">
                    <animate attributeName="stopOpacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#16a34a" stopOpacity="0.2">
                    <animate attributeName="stopOpacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.7">
                    <animate attributeName="stopOpacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                {/* Animated flow gradients */}
                <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0">
                    <animate attributeName="offset" values="-1;1" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1">
                    <animate attributeName="offset" values="-0.5;1.5" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0">
                    <animate attributeName="offset" values="0;2" dur="2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0">
                    <animate attributeName="offset" values="-1;1" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="1">
                    <animate attributeName="offset" values="-0.5;1.5" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="0">
                    <animate attributeName="offset" values="0;2" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0">
                    <animate attributeName="offset" values="-1;1" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1">
                    <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0">
                    <animate attributeName="offset" values="0;2" dur="3s" repeatCount="indefinite" />
                  </stop>
                  </linearGradient>

                {/* Pulse filter */}
                <filter id="pulse">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                </defs>

              {/* Grid background */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* ===== BAĞLANTI ÇİZGİLERİ ===== */}
              <g id="connections">
                <line x1="80" y1="145" x2="80" y2="168" stroke="url(#flowGradient2)" strokeWidth="2" filter="url(#softGlow)" />
                <line x1="80" y1="225" x2="80" y2="248" stroke="url(#flowGradient2)" strokeWidth="2" filter="url(#softGlow)" />
                <path d="M 130 275 L 155 275 L 155 140 L 180 90" fill="none" stroke="url(#flowGradient3)" strokeWidth="2" filter="url(#softGlow)" />
                <line x1="360" y1="70" x2="398" y2="65" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" />
                <line x1="360" y1="100" x2="398" y2="135" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="2" />

                <path d="M 540 137 L 560 137 L 560 175 L 578 180" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.3" />
                <path d="M 540 137 L 560 137 L 560 175 L 578 180" fill="none" stroke="url(#flowGradient1)" strokeWidth="3" filter="url(#softGlow)" />

                <path d="M 540 165 L 600 165 L 600 320 L 580 340" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.2" />
                <path d="M 540 165 L 600 165 L 600 320 L 580 340" fill="none" stroke="url(#flowGradient1)" strokeWidth="3" filter="url(#softGlow)" />
                
                <circle r="6" fill="#06b6d4" filter="url(#glowCyan)">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M 540 165 L 600 165 L 600 320 L 580 340" />
                </circle>

                <path d="M 700 220 L 720 220 L 720 100 L 540 67" fill="none" stroke="url(#flowGradient1)" strokeWidth="2" filter="url(#softGlow)" />

                <path d="M 150 680 L 150 700 L 360 700 L 360 480 L 378 450" fill="none" stroke="url(#flowGradient3)" strokeWidth="2" filter="url(#softGlow)" />
                <circle r="6" fill="#14b8a6" filter="url(#glowTeal)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 150 680 L 150 700 L 360 700 L 360 480 L 378 450" />
                </circle>

                <path d="M 580 410 L 610 410 L 610 420 L 620 425" fill="none" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="2" />
                <line x1="685" y1="475" x2="685" y2="498" stroke="url(#flowGradient2)" strokeWidth="2" filter="url(#softGlow)" />
              </g>

              {/* ===== KARTLAR ===== */}
              
              {/* LEFT COLUMN - Müşteri Akışı */}
              <g transform="translate(30, 100)">
                {/* Müşteri icon with glow */}
                <g transform="translate(20, 0)">
                  <circle cx="30" cy="25" r="18" fill="rgba(6, 182, 212, 0.1)" />
                  <circle cx="30" cy="25" r="14" fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" filter="url(#softGlow)" />
                  <circle cx="30" cy="20" r="6" fill="rgba(6, 182, 212, 0.5)" />
                  <path d="M 18 38 Q 18 30 30 30 Q 42 30 42 38" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2" fill="none" />
                </g>

                {/* Talep Formu */}
                <g transform="translate(0, 70)">
                  <rect x="0" y="0" width="100" height="55" rx="12" fill="url(#cardGradientCyan)" />
                  <rect x="0" y="0" width="100" height="55" rx="12" fill="url(#cardGridCyan)" />
                  <rect x="0" y="0" width="100" height="55" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                  <text x="50" y="24" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">{t('svg_ihtiyac_analizi')}</text>
                  <text x="50" y="42" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">{t('svg_ihtiyac_analizi_subtitle')}</text>
                </g>

                {/* İletişim */}
                <g transform="translate(0, 150)">
                  <rect x="0" y="0" width="100" height="50" rx="12" fill="url(#cardGradientCyan)" />
                  <rect x="0" y="0" width="100" height="50" rx="12" fill="url(#cardGridCyan)" />
                  <rect x="0" y="0" width="100" height="50" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                  <text x="50" y="30" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">{t('svg_gorusme')}</text>
                </g>
              </g>

              {/* TOP CENTER - EliteCode Bulut */}
              <g transform="translate(180, 50)">
                <rect x="0" y="0" width="180" height="80" rx="16" fill="url(#cardGradientCyan)" />
                <rect x="0" y="0" width="180" height="80" rx="16" fill="url(#cardGridCyan)" />
                <rect x="0" y="0" width="180" height="80" rx="16" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="2" />
                {/* Inner glow */}
                <rect x="2" y="2" width="176" height="76" rx="14" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="8" />
                {/* Cloud icon */}
                <g transform="translate(18, 22)" filter="url(#softGlow)">
                  <path d="M10 32 Q0 32 0 20 Q0 8 12 8 Q16 0 28 0 Q40 0 44 8 Q56 8 56 20 Q56 32 44 32 Z" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" strokeWidth="2" />
                </g>
                <text x="95" y="38" fill="#06b6d4" fontSize="15" fontWeight="700">{t('svg_elitecode')}</text>
                <text x="95" y="58" fill="rgba(255,255,255,0.6)" fontSize="11">{t('svg_altyapi')}</text>
              </g>

              {/* Web Geliştirme */}
              <g transform="translate(400, 40)">
                <rect x="0" y="0" width="140" height="55" rx="12" fill="url(#cardGradientCyan)" />
                <rect x="0" y="0" width="140" height="55" rx="12" fill="url(#cardGridCyan)" />
                <rect x="0" y="0" width="140" height="55" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                {/* Globe icon */}
                <g transform="translate(15, 12)" filter="url(#softGlow)">
                  <circle cx="15" cy="15" r="13" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  <ellipse cx="15" cy="15" rx="5" ry="13" fill="none" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" />
                  <line x1="2" y1="15" x2="28" y2="15" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5" />
                </g>
                <text x="55" y="24" fill="#06b6d4" fontSize="11" fontWeight="600">{t('svg_web_gelistirme')}</text>
                <text x="55" y="42" fill="rgba(255,255,255,0.5)" fontSize="9">{t('svg_site_uygulama')}</text>
              </g>

              {/* SEO Hizmetleri */}
              <g transform="translate(400, 110)">
                <rect x="0" y="0" width="140" height="55" rx="12" fill="url(#cardGradientTeal)" />
                <rect x="0" y="0" width="140" height="55" rx="12" fill="url(#cardGridTeal)" />
                <rect x="0" y="0" width="140" height="55" rx="12" fill="none" stroke="url(#borderAnimatedTeal)" strokeWidth="1.5" />
                {/* Bot/AI icon */}
                <g transform="translate(15, 12)" filter="url(#softGlow)">
                  <rect x="3" y="3" width="20" height="18" rx="4" fill="none" stroke="#14b8a6" strokeWidth="2" />
                  <circle cx="10" cy="12" r="3" fill="#14b8a6" />
                  <circle cx="16" cy="12" r="3" fill="#14b8a6" />
                  <line x1="0" y1="10" x2="3" y2="10" stroke="#14b8a6" strokeWidth="2" />
                  <line x1="23" y1="10" x2="26" y2="10" stroke="#14b8a6" strokeWidth="2" />
                </g>
                <text x="55" y="24" fill="#14b8a6" fontSize="11" fontWeight="600">{t('svg_ai_seo')}</text>
                <text x="55" y="42" fill="rgba(255,255,255,0.5)" fontSize="9">{t('svg_arama_optimizasyonu')}</text>
              </g>

              {/* Sonuç Analizi / Raporlama */}
              <g transform="translate(580, 180)">
                <rect x="0" y="0" width="120" height="80" rx="14" fill="url(#cardGradientCyan)" />
                <rect x="0" y="0" width="120" height="80" rx="14" fill="url(#cardGridCyan)" />
                <rect x="0" y="0" width="120" height="80" rx="14" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                {/* Chart icon with animation */}
                <g transform="translate(20, 15)">
                  <rect x="0" y="18" width="12" height="16" rx="2" fill="#06b6d4" opacity="0.6" filter="url(#softGlow)">
                    <animate attributeName="height" values="16;24;16" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y" values="18;10;18" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="18" y="10" width="12" height="24" rx="2" fill="#06b6d4" opacity="0.8" filter="url(#softGlow)">
                    <animate attributeName="height" values="24;18;24" dur="2s" repeatCount="indefinite" begin="0.3s" />
                    <animate attributeName="y" values="10;16;10" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </rect>
                  <rect x="36" y="4" width="12" height="30" rx="2" fill="#06b6d4" filter="url(#softGlow)">
                    <animate attributeName="height" values="30;20;30" dur="2s" repeatCount="indefinite" begin="0.6s" />
                    <animate attributeName="y" values="4;14;4" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </rect>
                </g>
                <text x="60" y="60" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="600">{t('svg_raporlama')}</text>
                <text x="60" y="74" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">{t('svg_anlik_metrikler')}</text>
              </g>

              {/* ===== ÇÖZÜM PAKETLERİ ===== */}
              <g transform="translate(40, 350)">
                {/* Framework container with glow */}
                <rect x="-5" y="-5" width="310" height="350" rx="18" fill="rgba(20, 184, 166, 0.03)" />
                <rect x="0" y="0" width="300" height="340" rx="16" fill="url(#cardGridTeal)" />
                <rect x="0" y="0" width="300" height="340" rx="16" fill="none" stroke="url(#borderAnimatedTeal)" strokeWidth="2" strokeDasharray="12 6" />
                
                {/* Title */}
                <rect x="50" y="10" width="200" height="50" rx="10" fill="rgba(20, 184, 166, 0.12)" />
                <rect x="50" y="10" width="200" height="50" rx="10" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" />
                <text x="150" y="35" textAnchor="middle" fill="#14b8a6" fontSize="14" fontWeight="700" filter="url(#softGlow)">{t('svg_cozum_paketleri')}</text>
                <text x="150" y="52" textAnchor="middle" fill="rgba(20, 184, 166, 0.7)" fontSize="9">{t('svg_ozellestirilmis')}</text>

                {/* Kurumsal Site */}
                <g transform="translate(25, 80)">
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="url(#cardGradientCyan)" />
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="url(#cardGridCyan)" />
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                  {/* Building icon */}
                  <g transform="translate(12, 12)" filter="url(#softGlow)">
                    <rect x="4" y="8" width="18" height="16" rx="2" fill="none" stroke="#06b6d4" strokeWidth="2" />
                    <rect x="8" y="14" width="4" height="5" fill="rgba(6, 182, 212, 0.5)" />
                    <rect x="14" y="14" width="4" height="5" fill="rgba(6, 182, 212, 0.5)" />
                    <path d="M 2 8 L 13 0 L 24 8" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  </g>
                  <text x="75" y="24" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">{t('svg_kurumsal_web_sitesi')}</text>
                  <text x="75" y="40" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">{t('svg_kurumsal_web_sitesi_subtitle')}</text>
                  <text x="75" y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">{t('svg_modern_hizli')}</text>
                </g>

                {/* Connection */}
                <line x1="88" y1="150" x2="88" y2="168" stroke="url(#flowGradient2)" strokeWidth="2" filter="url(#softGlow)" />

                {/* E-Ticaret */}
                <g transform="translate(25, 168)">
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="url(#cardGradientCyan)" />
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="url(#cardGridCyan)" />
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                  {/* Cart icon */}
                  <g transform="translate(12, 10)" filter="url(#softGlow)">
                    <path d="M 2 4 L 6 4 L 10 18 L 22 18" fill="none" stroke="#06b6d4" strokeWidth="2" />
                    <circle cx="12" cy="24" r="3" fill="#06b6d4" />
                    <circle cx="20" cy="24" r="3" fill="#06b6d4" />
                    <path d="M 7 8 L 22 8 L 20 16 L 9 16 Z" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" strokeWidth="1.5" />
                  </g>
                  <text x="75" y="24" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">{t('svg_e_ticaret')}</text>
                  <text x="75" y="40" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">{t('svg_online_magaza')}</text>
                  <text x="75" y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">{t('svg_satis_odeme')}</text>
                </g>

                {/* Connection */}
                <line x1="88" y1="238" x2="88" y2="256" stroke="url(#flowGradient2)" strokeWidth="2" filter="url(#softGlow)" />

                {/* Mobil Uygulama */}
                <g transform="translate(25, 256)">
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="url(#cardGradientCyan)" />
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="url(#cardGridCyan)" />
                  <rect x="0" y="0" width="125" height="70" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                  {/* Smartphone icon */}
                  <g transform="translate(12, 8)" filter="url(#softGlow)">
                    <rect x="4" y="0" width="18" height="28" rx="3" fill="none" stroke="#06b6d4" strokeWidth="2" />
                    <line x1="10" y1="22" x2="16" y2="22" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="13" cy="4" r="1.5" fill="#06b6d4" />
                  </g>
                  <text x="75" y="22" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">{t('svg_mobil')}</text>
                  <text x="75" y="38" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">{t('svg_ios_android')}</text>
                  <text x="75" y="54" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8">{t('svg_uygulama')}</text>
                </g>

                {/* Side box - SaaS */}
                <g transform="translate(160, 100)">
                  <rect x="0" y="0" width="125" height="55" rx="10" fill="url(#cardGradientTeal)" />
                  <rect x="0" y="0" width="125" height="55" rx="10" fill="url(#cardGridTeal)" />
                  <rect x="0" y="0" width="125" height="55" rx="10" fill="none" stroke="url(#borderAnimatedTeal)" strokeWidth="1.5" />
                  {/* Cloud icon */}
                  <g transform="translate(12, 14)" filter="url(#softGlow)">
                    <path d="M8 22 Q0 22 0 14 Q0 6 10 6 Q14 0 22 0 Q30 0 33 6 Q42 6 42 14 Q42 22 33 22 Z" fill="rgba(20, 184, 166, 0.25)" stroke="#14b8a6" strokeWidth="1.5" transform="scale(0.6)" />
                  </g>
                  <text x="72" y="26" textAnchor="middle" fill="#14b8a6" fontSize="10" fontWeight="600">{t('svg_saas_platformu')}</text>
                  <text x="72" y="42" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">{t('svg_bulut_yazilim')}</text>
                </g>

                {/* Side box - Dashboard */}
                <g transform="translate(160, 170)">
                  <rect x="0" y="0" width="125" height="55" rx="10" fill="url(#cardGradientTeal)" />
                  <rect x="0" y="0" width="125" height="55" rx="10" fill="url(#cardGridTeal)" />
                  <rect x="0" y="0" width="125" height="55" rx="10" fill="none" stroke="url(#borderAnimatedTeal)" strokeWidth="1.5" />
                  {/* Dashboard icon */}
                  <g transform="translate(12, 14)" filter="url(#softGlow)">
                    <rect x="0" y="0" width="12" height="12" rx="2" fill="rgba(20, 184, 166, 0.35)" stroke="#14b8a6" strokeWidth="1.5" />
                    <rect x="16" y="0" width="12" height="7" rx="2" fill="rgba(20, 184, 166, 0.35)" stroke="#14b8a6" strokeWidth="1.5" />
                    <rect x="0" y="16" width="12" height="7" rx="2" fill="rgba(20, 184, 166, 0.35)" stroke="#14b8a6" strokeWidth="1.5" />
                    <rect x="16" y="11" width="12" height="12" rx="2" fill="rgba(20, 184, 166, 0.35)" stroke="#14b8a6" strokeWidth="1.5" />
                  </g>
                  <text x="72" y="26" textAnchor="middle" fill="#14b8a6" fontSize="10" fontWeight="600">{t('svg_dashboard')}</text>
                  <text x="72" y="42" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9">{t('svg_yonetim_paneli')}</text>
                </g>
              </g>

              {/* ===== OTOMASYON MERKEZİ ===== */}
              <g transform="translate(380, 340)">
                <rect x="-3" y="-3" width="206" height="146" rx="16" fill="rgba(20, 184, 166, 0.05)" />
                <rect x="0" y="0" width="200" height="140" rx="14" fill="url(#cardGradientTeal)" />
                <rect x="0" y="0" width="200" height="140" rx="14" fill="url(#cardGridTeal)" />
                <rect x="0" y="0" width="200" height="140" rx="14" fill="none" stroke="url(#borderAnimatedTeal)" strokeWidth="2" />
                
                {/* Header */}
                <rect x="0" y="0" width="200" height="38" rx="14" fill="rgba(20, 184, 166, 0.15)" />
                {/* Settings icon */}
                <g transform="translate(15, 8)" filter="url(#softGlow)">
                  <circle cx="12" cy="12" r="8" fill="none" stroke="#14b8a6" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="#14b8a6" />
                  <g stroke="#14b8a6" strokeWidth="2">
                    <line x1="12" y1="0" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="24" />
                    <line x1="0" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="24" y2="12" />
                  </g>
                </g>
                <text x="55" y="26" fill="#14b8a6" fontSize="13" fontWeight="700" filter="url(#softGlow)">{t('svg_otomasyon_merkezi')}</text>
                
                {/* Features with glowing dots */}
                <g transform="translate(15, 52)">
                  <circle cx="8" cy="6" r="5" fill="#06b6d4" opacity="0.3" />
                  <circle cx="8" cy="6" r="4" fill="#06b6d4" filter="url(#glowCyan)">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="22" y="10" fill="rgba(255,255,255,0.7)" fontSize="11">{t('svg_otomatik_seo')}</text>
                </g>
                <g transform="translate(15, 74)">
                  <circle cx="8" cy="6" r="5" fill="#14b8a6" opacity="0.3" />
                  <circle cx="8" cy="6" r="4" fill="#14b8a6" filter="url(#glowTeal)">
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="22" y="10" fill="rgba(255,255,255,0.7)" fontSize="11">{t('svg_crm_entegrasyonu')}</text>
                </g>
                <g transform="translate(15, 96)">
                  <circle cx="8" cy="6" r="5" fill="#22c55e" opacity="0.3" />
                  <circle cx="8" cy="6" r="4" fill="#22c55e" filter="url(#glowGreen)">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <text x="22" y="10" fill="rgba(255,255,255,0.7)" fontSize="11">{t('svg_raporlama_sistemi')}</text>
                </g>
                <g transform="translate(15, 118)">
                  <circle cx="8" cy="6" r="5" fill="#f97316" opacity="0.3" />
                  <circle cx="8" cy="6" r="4" fill="#f97316" filter="url(#glowOrange)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  <text x="22" y="10" fill="rgba(255,255,255,0.7)" fontSize="11">{t('svg_bildirim_yonetimi')}</text>
                </g>
              </g>

              {/* Entegrasyon */}
              <g transform="translate(620, 425)">
                <rect x="0" y="0" width="130" height="50" rx="12" fill="url(#cardGradientCyan)" />
                <rect x="0" y="0" width="130" height="50" rx="12" fill="url(#cardGridWhite)" />
                <rect x="0" y="0" width="130" height="50" rx="12" fill="none" stroke="url(#borderAnimatedCyan)" strokeWidth="1.5" />
                {/* Link icon */}
                <g transform="translate(15, 12)" filter="url(#softGlow)">
                  <path d="M10 16 L16 10" stroke="#06b6d4" strokeWidth="3" fill="none" />
                  <circle cx="7" cy="19" r="5" fill="none" stroke="#06b6d4" strokeWidth="2" />
                  <circle cx="19" cy="7" r="5" fill="none" stroke="#06b6d4" strokeWidth="2" />
                </g>
                <text x="55" y="24" fill="#06b6d4" fontSize="11" fontWeight="600">{t('svg_entegrasyon')}</text>
                <text x="55" y="40" fill="rgba(255,255,255,0.5)" fontSize="9">{t('svg_api_webhook')}</text>
              </g>

              {/* Güvenli Veri */}
              <g transform="translate(645, 500)">
                <ellipse cx="40" cy="12" rx="38" ry="12" fill="rgba(34, 197, 94, 0.1)" />
                <ellipse cx="40" cy="12" rx="35" ry="10" fill="none" stroke="url(#borderAnimatedGreen)" strokeWidth="2" />
                <rect x="5" y="12" width="70" height="42" fill="rgba(34, 197, 94, 0.08)" />
                <rect x="5" y="12" width="70" height="42" fill="url(#cardGridGreen)" />
                <rect x="5" y="12" width="70" height="42" fill="none" stroke="url(#borderAnimatedGreen)" strokeWidth="2" />
                <ellipse cx="40" cy="54" rx="35" ry="10" fill="rgba(34, 197, 94, 0.1)" stroke="url(#borderAnimatedGreen)" strokeWidth="2" />
                {/* Shield icon */}
                <g transform="translate(25, 18)" filter="url(#glowGreen)">
                  <path d="M15 2 L28 7 L28 17 Q28 27 15 32 Q2 27 2 17 L2 7 Z" fill="rgba(34, 197, 94, 0.25)" stroke="#22c55e" strokeWidth="2" transform="scale(0.8)" />
                  <path d="M9 16 L13 20 L21 12" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>

              </svg>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #030308, transparent)',
          zIndex: 5,
        }}
      />
    </section>
  )
}
