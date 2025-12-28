'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Zap, Search, Smartphone, Target, TrendingUp, Sparkles, Plus, Bot, Cpu, Layers } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevWhatYouGet() {
  const t = useTranslations('web_dev.what_you_get')
  const sectionRef = useRef<HTMLElement>(null)

  // Store line paths in state
  const [lines, setLines] = useState<{ id: string, d: string }[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const benefits = [
    { icon: Zap, text: t('benefit1'), stat: '99%', label: 'Performance', color: 'text-yellow-400', progress: 99 },
    { icon: Search, text: t('benefit2'), stat: '+45%', label: 'Traffic Inc.', color: 'text-green-400', progress: 85 },
    { icon: Smartphone, text: t('benefit3'), stat: '100%', label: 'Mobile Score', color: 'text-blue-400', progress: 100 },
    { icon: Target, text: t('benefit4'), stat: '3.5x', label: 'Conversion', color: 'text-red-400', progress: 75 },
    { icon: TrendingUp, text: t('benefit5'), stat: '24/7', label: 'Uptime', color: 'text-purple-400', progress: 95 },
    { icon: Layers, text: t('benefit2'), stat: 'Modern', label: 'Stack', color: 'text-cyan-400', progress: 90 },
    { icon: Bot, text: t('benefit3'), stat: 'Auto', label: 'Scaling', color: 'text-pink-400', progress: 80 },
    { icon: Cpu, text: t('benefit4'), stat: '<50ms', label: 'Latency', color: 'text-orange-400', progress: 92 },
  ]

  const mid = Math.ceil(benefits.length / 2)
  const leftItems = benefits.slice(0, mid)
  const rightItems = benefits.slice(mid)

  const updateLines = useCallback(() => {
    if (!containerRef.current || !hubRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const hubRect = hubRef.current.getBoundingClientRect()

    // Hub Center relative to container
    const hubCenterX = hubRect.left + hubRect.width / 2 - containerRect.left
    const hubCenterY = hubRect.top + hubRect.height / 2 - containerRect.top

    const newLines: { id: string, d: string }[] = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const cardRect = card.getBoundingClientRect()

      // Determine side based on index
      // We know existing logic: left items are 0..mid-1
      const isLeft = index < mid

      let startX, startY, endX, endY, cp1X, cp1Y, cp2X, cp2Y

      // The connection point should be EXACTLY at the center of the "+" button.
      // Based on our CSS:
      // Left cards: Button is -mr-8 (approx 32px right of normal content edge). 
      // Right cards: Button is -ml-8.
      // We can estimate the button center relative to the card edge.

      if (isLeft) {
        // Start: Card's right edge + 8px (for -mr-8) + 12px (half of w-6 button) -> total +20px from right edge?
        // Actually -mr-8 pulls it OUTSIDE.
        // Let's assume the button is fully visible.
        // We target the visual center.
        startX = cardRect.right - containerRect.left + 20
        startY = cardRect.top + cardRect.height / 2 - containerRect.top

        // Hub Connection Point: Left side of the spinning ring (hub is w-48, so radius ~96px visual, but connection point is closer)
        // Hub container is w-48 (192px). Center is 96.
        // We want to connect to the ring at approx 80px radius?
        endX = hubCenterX - 80
        endY = hubCenterY

        // Control points for an S-curve
        cp1X = startX + 50
        cp1Y = startY
        cp2X = endX - 50
        cp2Y = endY
      } else {
        // Start: Card's left edge
        startX = cardRect.left - containerRect.left - 20
        startY = cardRect.top + cardRect.height / 2 - containerRect.top

        // Hub Connection Point: Right side
        endX = hubCenterX + 80
        endY = hubCenterY

        // Control points for an S-curve
        cp1X = startX - 50
        cp1Y = startY
        cp2X = endX + 50
        cp2Y = endY
      }

      const pathData = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`
      newLines.push({ id: `line-${index}`, d: pathData })
    })

    setLines(newLines)
  }, [mid])

  useEffect(() => {
    // Immediate update
    updateLines()

    // Robust loop to catch layout shifts
    const interval = setInterval(updateLines, 200)

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      updateLines()
    })
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      clearInterval(interval)
      resizeObserver.disconnect()
    }
  }, [updateLines])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elements Animation (Header and Cards)
      gsap.fromTo('.section-animate',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )

      // Hub
      gsap.fromTo('.main-hub',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#050510] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050510] to-[#050510]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="section-animate section-header text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Visualization Component */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto min-h-[500px] hidden md:flex items-center justify-between px-4">

          {/* SVG Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible', zIndex: 0 }}>
            <defs>
              <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
              <filter id="glow-line">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <style>{`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
              .dynamic-line {
                stroke-dasharray: 10 10;
                animation: dash 1s linear infinite;
              }
              /* Soft glow animation */
              @keyframes pulse-glow {
                0%, 100% { opacity: 0.5; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.05); }
              }
            `}</style>
            {lines.map((line) => (
              <path
                key={line.id}
                d={line.d}
                className="dynamic-line opacity-50"
                fill="none"
                stroke="url(#gradLine)"
                strokeWidth="1.5"
                filter="url(#glow-line)"
                strokeLinecap="round"
                style={{ transition: 'd 0.5s ease-out' }}
              />
            ))}
          </svg>

          {/* Left Cards - Compact */}
          <div className="flex flex-col gap-5 z-10 w-[300px]">
            {leftItems.map((item, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el }}
                className="section-animate card-item relative group"
              >
                {/* Minimal Glass Strip */}
                <div className="relative h-16 flex items-center justify-between px-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 backdrop-blur-md group-hover:scale-105 group-hover:shadow-lg hover:shadow-indigo-500/10 cursor-default">

                  {/* Icon & Text */}
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg bg-white/5 ${item.color.replace('text-', 'bg-').replace('400', '500')}/20`}>
                      <item.icon size={16} className={item.color} />
                    </div>
                    <span className="text-sm font-medium text-white/90">{item.text}</span>
                  </div>

                  {/* Compact Stat Badge */}
                  <div className={`text-xs font-bold px-2 py-1 rounded-md bg-black/20 ${item.color} border border-white/5`}>
                    {item.stat}
                  </div>

                  {/* Connection Dot */}
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-[0_0_10px_white] transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Central Hub - Compact */}
          <div ref={hubRef} className="main-hub absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="relative w-48 h-48 flex items-center justify-center">

              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-white/5 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Glow */}
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl animate-pulse" />

              {/* Core */}
              <div className="relative w-20 h-20 rounded-full bg-[#050510] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] z-10 pointer-events-auto transition-transform hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full" />
                <Cpu size={28} className="text-white/80" />
              </div>
            </div>
          </div>

          {/* Right Cards - Compact */}
          <div className="flex flex-col gap-5 z-10 w-[300px]">
            {rightItems.map((item, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i + mid] = el }}
                className="section-animate card-item relative group"
              >
                {/* Minimal Glass Strip (Right) */}
                <div className="relative h-16 flex flex-row-reverse items-center justify-between px-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 backdrop-blur-md group-hover:scale-105 group-hover:shadow-lg hover:shadow-indigo-500/10 cursor-default">

                  {/* Icon & Text */}
                  <div className="flex flex-row-reverse items-center gap-3">
                    <div className={`p-1.5 rounded-lg bg-white/5 ${item.color.replace('text-', 'bg-').replace('400', '500')}/20`}>
                      <item.icon size={16} className={item.color} />
                    </div>
                    <span className="text-sm font-medium text-white/90 text-right">{item.text}</span>
                  </div>

                  {/* Compact Stat Badge */}
                  <div className={`text-xs font-bold px-2 py-1 rounded-md bg-black/20 ${item.color} border border-white/5`}>
                    {item.stat}
                  </div>

                  {/* Connection Dot Left */}
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-[0_0_10px_white] transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile View (Simple Stack) */}
        <div className="flex flex-col gap-4 md:hidden max-w-sm mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border border-blue-500/30 flex items-center justify-center bg-[#0a0a1a] shadow-lg relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
              <Cpu size={32} className="text-blue-400" />
            </div>
          </div>

          {benefits.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-[#0a0a1a] border border-blue-500/20 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-400">
                <item.icon size={20} />
              </div>
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
