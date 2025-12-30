'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { X, Check, Gauge, ShieldAlert, ShieldCheck, Server, AlertTriangle, Zap, Lock } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevComparison() {
    const t = useTranslations('web_dev.comparison')
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                }
            })

            tl.fromTo('.comparison-card-left',
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
            )
                .fromTo('.comparison-card-right',
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo('.vs-badge',
                    { scale: 0, rotate: -180 },
                    { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.5)' },
                    '-=0.4'
                )

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const rows = [
        { label: 'Performance', bad: 'Slow, Bloated (Avg 45)', good: 'Instant, Optimized (99+)', icon: Gauge },
        { label: 'Security', bad: 'Vulnerable Plugins', good: 'Enterprise Grade', icon: Lock },
        { label: 'Scalability', bad: 'Crashes on Spike', good: 'Auto-Scaling Serverless', icon: Server },
        { label: 'Maintenance', bad: 'Manual Updates', good: 'Automated CI/CD', icon: Zap },
    ]

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#030308] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The <span className="text-cyan-400">Elite</span> Standard</h2>
                    <p className="text-gray-400">Why top brands choose us over traditional agencies.</p>
                </div>

                <div className="max-w-5xl mx-auto relative grid md:grid-cols-2 gap-8 md:gap-0">

                    {/* VS Badge (Absolute Center) */}
                    <div className="vs-badge absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex w-20 h-20 bg-black border-4 border-[#030308] rounded-full items-center justify-center shadow-2xl">
                        <span className="font-black text-2xl bg-gradient-to-br from-gray-200 to-gray-500 bg-clip-text text-transparent italic pr-1">VS</span>
                    </div>

                    {/* Left Card: The "Old" Way */}
                    <div className="comparison-card-left relative bg-[#0a0a0f] border border-white/5 rounded-3xl md:rounded-r-none p-8 md:p-12 overflow-hidden group">
                        {/* Grime/Glitch overlay */}
                        <div className="absolute inset-0 bg-red-500/0 pointer-events-none group-hover:bg-red-500/5 transition-colors duration-500" />

                        <div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity text-center md:text-left">
                            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                                <div className="p-2 bg-red-500/10 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-300">Traditional Agency</h3>
                            </div>

                            <div className="space-y-6">
                                {rows.map((row, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-red-500/10 hover:bg-red-500/5 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center flex-shrink-0">
                                            <X className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs text-red-400 uppercase tracking-wider font-bold mb-0.5">{row.label}</p>
                                            <p className="text-gray-400 text-sm font-medium">{row.bad}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Card: The "Elite" Way */}
                    <div className="comparison-card-right relative bg-[#0a0a14] border border-cyan-500/20 rounded-3xl md:rounded-l-none p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] z-10">
                        {/* Glow overlay */}
                        <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">EliteCode System</h3>
                            </div>

                            <div className="space-y-6">
                                {rows.map((row, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-cyan-500/10 bg-cyan-500/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs text-cyan-400 uppercase tracking-wider font-bold mb-0.5">{row.label}</p>
                                            <p className="text-white text-sm font-medium">{row.good}</p>
                                        </div>
                                        {/* Animated Icon on right */}
                                        <div className="ml-auto opacity-0 md:opacity-100">
                                            <row.icon className="w-4 h-4 text-cyan-500/50" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500/50 border border-cyan-500/10 px-2 py-1 rounded">
                                VER 2.0
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
