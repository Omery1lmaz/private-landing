 'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Database, Zap, Rocket, ShieldCheck, Globe, Bot, Settings, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function AiSeoHero() {
  const t = useTranslations('ai_seo')
  const locale = useLocale()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const visualRef = useRef<HTMLDivElement | null>(null)
  const centralRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const [displayText, setDisplayText] = React.useState('')
  const [textIndex, setTextIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const typewriterTexts = React.useMemo(
    () => [t('typewriter_primary'), t('typewriter_secondary')].filter(Boolean),
    [t]
  )

  // Robust recursive timeout-based typewriter that handles variable delays
  useEffect(() => {
    if (!typewriterTexts.length) return

    const wordIndexRef = { current: 0 }
    const charIndexRef = { current: 0 }
    const deletingRef = { current: false }
    const timerRef: { id: number | null } = { id: null }

    const tick = () => {
      const current = typewriterTexts[wordIndexRef.current]

      if (!deletingRef.current) {
        // typing
        if (charIndexRef.current < current.length) {
          charIndexRef.current += 1
          setDisplayText(current.slice(0, charIndexRef.current))
          timerRef.id = window.setTimeout(tick, 80)
          return
        }

        // finished typing, pause then start deleting
        deletingRef.current = true
        timerRef.id = window.setTimeout(tick, 1500)
        return
      }

      // deleting
      if (charIndexRef.current > 0) {
        charIndexRef.current -= 1
        setDisplayText(current.slice(0, charIndexRef.current))
        timerRef.id = window.setTimeout(tick, 40)
        return
      }

      // finished deleting, move to next word
      deletingRef.current = false
      wordIndexRef.current = (wordIndexRef.current + 1) % typewriterTexts.length
      timerRef.id = window.setTimeout(tick, 400)
    }

    // start
    timerRef.id = window.setTimeout(tick, 400)

    return () => {
      if (timerRef.id) clearTimeout(timerRef.id)
    }
  }, [typewriterTexts])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance timeline (left column)
      const tl = gsap.timeline()
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.45'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.35'
        )

      // visual entrance (right)
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
        )
      }

      // idle float for central box
      gsap.to(centralRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: 'sine.inOut',
      })

      // staggered entrance for icons
      gsap.fromTo(
        '.floating-icon',
        { opacity: 0, y: 18, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <header className="bg-gradient-to-b min-h-screen from-[#071422] to-[#031017] py-20">
      {/* Ambient glow effects (copied from Hero) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div ref={rootRef} className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Content (copied from Hero) */}
            <div className="space-y-6 pt-8 max-w-3xl">
              {/* Announcement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium">
                {t('hero.announcement_badge')}
              </div>

              {/* Main Title */}
              <div>
                <h1
                  ref={titleRef}
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white"
                >
                  {t('hero.title')}
                </h1>
              </div>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8"
              >
                {t('hero.subtitle')}
              </p>

              {/* Proof Strip */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-10">
                <div className="flex items-center gap-2 text-cyan-400 font-medium">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>{t('hero.feature1')}</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400 font-medium">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <span>{t('hero.feature2')}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>{t('hero.feature3')}</span>
                </div>
              </div>

              {/* Single CTA */}
              <div ref={ctaRef} className="mb-8">
                <button
                  onClick={scrollToContact}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-10 py-5 rounded-xl text-lg md:text-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
                >
                  {t('hero.cta')}
                  <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Visual (orbital rings + central AI icon + glow) */}
            <div className="relative w-full flex items-center justify-center py-8">
            <div ref={visualRef} className="relative w-full max-w-md aspect-square">
                {/* Orbital Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute w-full h-full rounded-full border border-white/5 animate-spin"
                    style={{ animationDuration: '30s' }}
                  />
                  <div
                    className="absolute w-4/5 h-4/5 rounded-full border border-white/10 animate-spin"
                    style={{ animationDuration: '20s', animationDirection: 'reverse' }}
                  />
                  <div
                    className="absolute w-3/5 h-3/5 rounded-full border border-white/15 animate-spin"
                    style={{ animationDuration: '15s' }}
                  />
                </div>

                {/* Central Gradient Box */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    ref={centralRef}
                    className="relative central-box w-40 h-40 md:w-48 md:h-48 rounded-3xl transition-all duration-700 bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 p-0.5"
                  >
                    <div className="w-full h-full rounded-3xl bg-black/90 flex items-center justify-center p-6">
                      <div className="w-full h-full">
                        <AIIcon />
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full blur-3xl opacity-30 transition-all duration-700"
                    style={{ backgroundColor: '#a855f7' }}
                  />
                </div>
 
                {/* Floating meaningful icons around central visual */}
                {[
                  { id: 'data', Icon: Database, angle: -Math.PI / 6, radius: 145, label: t('icons.data'), color: 'text-cyan-400' },
                  { id: 'automation', Icon: Zap, angle: Math.PI / 3, radius: 170, label: t('icons.automation'), color: 'text-amber-400' },
                  { id: 'speed', Icon: Rocket, angle: - (2 * Math.PI) / 3, radius: 180, label: t('icons.speed'), color: 'text-rose-400' },
                  { id: 'security', Icon: ShieldCheck, angle: (2 * Math.PI) / 3, radius: 220, label: t('icons.security'), color: 'text-violet-400' },
                ].map((item) => {
                  const x = Math.cos(item.angle) * item.radius
                  const y = Math.sin(item.angle) * item.radius

                  return (
                    <div
                      key={item.id}
                      className={`absolute left-1/2 top-1/2 transition-all duration-300 cursor-default`}
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      title={item.label}
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border border-white/10 bg-black/50 hover:scale-110 transition-transform duration-300 shadow-lg floating-icon">
                        <item.Icon className={`${item.color} w-5 h-5`} strokeWidth={1.5} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const AIIcon = () => {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="aiGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="30" stroke="url(#aiGradHero)" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="40" cy="40" r="20" stroke="url(#aiGradHero)" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="40" cy="40" r="10" fill="url(#aiGradHero)" opacity="0.8" />
      <path d="M40 15 L40 25 M40 55 L40 65 M15 40 L25 40 M55 40 L65 40" stroke="url(#aiGradHero)" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 22 L30 30 M50 50 L58 58 M22 58 L30 50 M50 30 L58 22" stroke="url(#aiGradHero)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="40" cy="25" r="3" fill="#a855f7" />
      <circle cx="40" cy="55" r="3" fill="#a855f7" />
      <circle cx="25" cy="40" r="3" fill="#a855f7" />
      <circle cx="55" cy="40" r="3" fill="#a855f7" />
    </svg>
  )
}


