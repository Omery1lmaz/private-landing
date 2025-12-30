'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Zap, Search, Smartphone, Target, TrendingUp, Layers, Bot, Cpu, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevWhatYouGet() {
    const t = useTranslations('web_dev.what_you_get')
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const hubRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const [lines, setLines] = useState<{ id: string, d: string }[]>([])

    const benefits = [
        { icon: Zap, text: t('benefit1'), stat: '99%', label: 'Performance', color: 'text-amber-400', glow: 'shadow-amber-500/20' },
        { icon: Search, text: t('benefit2'), stat: '+45%', label: 'Traffic', color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
        { icon: Smartphone, text: t('benefit3'), stat: '100%', label: 'Mobile', color: 'text-indigo-400', glow: 'shadow-indigo-500/20' },
        { icon: Target, text: t('benefit4'), stat: '3.5x', label: 'Conv.', color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
        { icon: TrendingUp, text: t('benefit5'), stat: '24/7', label: 'Uptime', color: 'text-teal-400', glow: 'shadow-teal-500/20' },
        { icon: Layers, text: t('benefit2'), stat: 'Modern', label: 'Stack', color: 'text-violet-400', glow: 'shadow-violet-500/20' },
        { icon: Bot, text: t('benefit3'), stat: 'Auto', label: 'Scale', color: 'text-pink-400', glow: 'shadow-pink-500/20' },
        { icon: Cpu, text: t('benefit4'), stat: '<50ms', label: 'Fast', color: 'text-blue-400', glow: 'shadow-blue-500/20' },
    ]

    const mid = Math.ceil(benefits.length / 2)
    const leftItems = benefits.slice(0, mid)
    const rightItems = benefits.slice(mid)

    const updateLines = useCallback(() => {
        if (!containerRef.current || !hubRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const hubRect = hubRef.current.getBoundingClientRect()
        const hubCenterX = hubRect.left + hubRect.width / 2 - containerRect.left
        const hubCenterY = hubRect.top + hubRect.height / 2 - containerRect.top

        const newLines: { id: string; d: string }[] = []

        cardRefs.current.forEach((card, index) => {
            if (!card) return
            const cardRect = card.getBoundingClientRect()
            const isLeft = index < mid

            let startX, startY, endX, endY, cp1X, cp1Y, cp2X, cp2Y

            // Calculate connection points
            if (isLeft) {
                startX = cardRect.right - containerRect.left
                startY = cardRect.top + cardRect.height / 2 - containerRect.top
                endX = hubCenterX - 50 // Connect to hub radius
                endY = hubCenterY
                cp1X = startX + 60
                cp1Y = startY
                cp2X = endX - 60
                cp2Y = endY
            } else {
                startX = cardRect.left - containerRect.left
                startY = cardRect.top + cardRect.height / 2 - containerRect.top
                endX = hubCenterX + 50
                endY = hubCenterY
                cp1X = startX - 60
                cp1Y = startY
                cp2X = endX + 60
                cp2Y = endY
            }

            const pathData = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`
            newLines.push({ id: `line-${index}`, d: pathData })
        })

        setLines(newLines)
    }, [mid])

    useEffect(() => {
        updateLines()
        window.addEventListener('resize', updateLines)
        return () => window.removeEventListener('resize', updateLines)
    }, [updateLines])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.fromTo('.header-animate',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
            )

            // Animate Cards
            gsap.fromTo('.card-animate',
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6, stagger: { amount: 0.5, from: "center" }, scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
            )

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#030308] overflow-hidden">
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

                {/* Modern Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
                    <div className="header-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-sm font-medium text-gray-300">Core Value Proposition</span>
                    </div>
                    <h2 className="header-animate text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="header-animate text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* System Visualization */}
                <div ref={containerRef} className="relative max-w-7xl mx-auto min-h-[600px] hidden md:flex items-center justify-between px-8">

                    {/* Animated Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
                                <stop offset="50%" stopColor="rgba(6,182,212,0.5)" />
                                <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
                            </linearGradient>
                        </defs>
                        {lines.map((line) => (
                            <g key={line.id}>
                                {/* Base Line */}
                                <path d={line.d} stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="opacity-30" />
                                {/* Animated Pulse */}
                                <path d={line.d} stroke="#22d3ee" strokeWidth="2" fill="none" strokeDasharray="10 100" className="animate-[dash_3s_linear_infinite]" strokeLinecap="round" />
                            </g>
                        ))}
                    </svg>

                    {/* Left Column Cards */}
                    <div className="flex flex-col gap-5 z-10 w-[300px]">
                        {leftItems.map((item, i) => (
                            <div key={i} ref={(el) => { cardRefs.current[i] = el }} className="card-animate group relative pl-4 transition-all duration-300 hover:-translate-x-2">
                                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-cyan-500/50 rounded-full" />
                                <div className={`p-4 rounded-xl bg-[#111] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-between shadow-lg ${item.glow}`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-200">{item.text}</span>
                                    </div>
                                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded bg-white/5 ${item.color}`}>{item.stat}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Central Reactor Core */}
                    <div ref={hubRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative flex items-center justify-center">
                            {/* Outer Glow */}
                            <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px] animate-pulse" />

                            {/* Spinning Rings */}
                            <div className="absolute w-48 h-48 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-40 h-40 border border-teal-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute w-32 h-32 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />

                            {/* Core Sphere */}
                            <div className="relative w-24 h-24 bg-gradient-to-br from-gray-900 to-black rounded-full border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center backdrop-blur-xl z-20">
                                <div className="absolute inset-0 rounded-full bg-cyan-500/5 animate-pulse" />
                                <div className="flex flex-col items-center gap-1">
                                    <Cpu className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">System</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Cards */}
                    <div className="flex flex-col gap-5 z-10 w-[300px]">
                        {rightItems.map((item, i) => (
                            <div key={i} ref={(el) => { cardRefs.current[mid + i] = el }} className="card-animate group relative pr-4 transition-all duration-300 hover:translate-x-2">
                                <div className="absolute top-1/2 -left-2 w-2 h-2 bg-cyan-500/50 rounded-full" />
                                <div className={`p-4 rounded-xl bg-[#111] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-row-reverse items-center justify-between shadow-lg ${item.glow}`}>
                                    <div className="flex flex-row-reverse items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-200">{item.text}</span>
                                    </div>
                                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded bg-white/5 ${item.color}`}>{item.stat}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Mobile Grid */}
                <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((item, i) => (
                        <div key={i} className="p-4 bg-[#111] border border-white/5 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                    <item.icon size={18} />
                                </div>
                                <span className="text-sm font-medium text-gray-200">{item.text}</span>
                            </div>
                            <span className={`text-xs font-bold ${item.color}`}>{item.stat}</span>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        @keyframes dash {
           to { stroke-dashoffset: 0; }
        }
      `}</style>
        </section>
    )
}
