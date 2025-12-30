'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { TrendingUp, Zap, Target, BarChart3, Star, ShieldCheck, Activity } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevProofOutcome() {
    const t = useTranslations('web_dev.proof_outcome')
    const sectionRef = useRef<HTMLElement>(null)

    // Refs for animation targets
    const gaugeRef = useRef<SVGCircleElement>(null)
    const numbersRef = useRef<(HTMLDivElement | null)[]>([])

    const outcomes = [
        {
            id: 0,
            icon: TrendingUp,
            metric: "100", // We'll count to this
            suffix: "",
            label: t('outcome1_label'),
            desc: "Optimize conversion rates with data-driven UX patterns and high-performance rendering.",
            color: 'text-amber-400',
            accent: 'amber',
            bg: 'bg-amber-500/10'
        },
        {
            id: 1,
            icon: Zap,
            metric: "0",
            suffix: "ms",
            label: t('outcome2_label'),
            desc: "Achieve near-instant load times with Next.js static generation and edge computing.",
            color: 'text-cyan-400',
            accent: 'cyan',
            bg: 'bg-cyan-500/10'
        },
        {
            id: 2,
            icon: Target,
            metric: "1",
            suffix: "#",
            prefix: true,
            label: t('outcome3_label'),
            desc: "Dominate search rankings with semantic HTML5, automated schema markup, and Core Web Vitals optimization.",
            color: 'text-emerald-400',
            accent: 'emerald',
            bg: 'bg-emerald-500/10'
        },
        {
            id: 3,
            icon: BarChart3,
            metric: "99.9",
            suffix: "%",
            label: t('outcome4_label'),
            desc: "Scale infrastructure automatically to handle millions of requests without manual intervention.",
            color: 'text-indigo-400',
            accent: 'indigo',
            bg: 'bg-indigo-500/10'
        },
    ]

    const renderVisual = (id: number) => {
        switch (id) {
            case 0:
                return (
                    // Performance Visual - Cyber Gauge
                    <div className="w-full h-full flex items-center justify-center p-8 relative">
                        <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full" />
                        <div className="relative w-48 h-48">
                            {/* Outer Ring */}
                            <svg className="w-full h-full -rotate-90 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                                <circle cx="96" cy="96" r="88" stroke="#1e293b" strokeWidth="12" fill="none" className="opacity-50" />
                                {/* Animated Dash */}
                                <circle
                                    ref={gaugeRef}
                                    cx="96" cy="96" r="88"
                                    stroke="#f59e0b" strokeWidth="12" fill="none"
                                    strokeDasharray="552"
                                    strokeDashoffset="552" // Start empty
                                    strokeLinecap="round"
                                />
                            </svg>
                            {/* Inner Data */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="text-5xl font-bold text-white tracking-tighter drop-shadow-lg flex items-center">
                                    <span className="counter-0">0</span>
                                </div>
                                <div className="text-xs text-amber-500 font-mono uppercase tracking-widest mt-2 px-2 py-1 bg-amber-500/10 rounded border border-amber-500/20">Score</div>
                            </div>
                            {/* Orbiting Dot */}
                            <div className="absolute inset-0 animate-spin transition-all duration-[3s]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                            </div>
                        </div>
                    </div>
                )
            case 1:
                return (
                    // Speed Visual - Animated Histogram
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
                        <div className="w-full h-40 flex items-end justify-between gap-1.5 relative border-b border-white/10 pb-4">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                <div className="w-full h-[1px] bg-cyan-500" />
                                <div className="w-full h-[1px] bg-cyan-500" />
                                <div className="w-full h-[1px] bg-cyan-500" />
                            </div>

                            {[30, 50, 45, 70, 60, 90, 55, 80, 65, 95, 75, 100].map((h, i) => (
                                <div key={i} className="hist-bar flex-1 bg-cyan-500/20 rounded-sm relative group overflow-hidden opacity-0 translate-y-full" style={{ height: `${h}%` }}>
                                    <div className="absolute bottom-0 left-0 w-full bg-cyan-400/80 transition-all duration-1000" style={{ height: '100%' }} />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-white/20" />
                                </div>
                            ))}

                            {/* Scanning Line */}
                            <div className="absolute top-0 bottom-4 w-[2px] bg-white/50 shadow-[0_0_10px_white] animate-[scan_2s_ease-in-out_infinite]" />
                        </div>
                        <div className="flex justify-between w-full mt-2 text-[10px] text-cyan-500 font-mono">
                            <span>0ms</span>
                            <span>50ms</span>
                            <span>100ms</span>
                        </div>
                    </div>
                )
            case 2:
                return (
                    // SEO Visual - Holographic Rank Card
                    <div className="w-full h-full flex items-center justify-center p-8 perspective-1000">
                        <div className="rank-card relative w-full bg-[#111] p-5 rounded-xl border border-white/10 shadow-2xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 transform rotate-y-12 rotate-x-6 hover:rotate-0 opacity-0 scale-90">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-[50px]" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Target size={18} />
                                </div>
                                <div className="h-2 w-24 bg-white/10 rounded-full" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-blue-500/20 rounded animate-pulse" />
                                <div className="h-2 w-full bg-white/5 rounded" />
                                <div className="h-2 w-5/6 bg-white/5 rounded" />
                            </div>
                            <div className="absolute top-4 right-4 bg-emerald-500 text-black font-bold px-3 py-1 rounded shadow-[0_0_15px_rgba(16,185,129,0.5)] transform translate-x-2 -translate-y-2">
                                #1
                            </div>
                        </div>
                    </div>
                )
            case 3:
                return (
                    // Scale Visual - Node Network
                    <div className="w-full h-full flex items-center justify-center p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1),_transparent)]" />
                        <div className="grid grid-cols-4 gap-4 relative z-10">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="scale-node w-3 h-3 bg-indigo-500/20 rounded-full relative flex items-center justify-center opacity-0 scale-0">
                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-75" style={{ animationDelay: `${Math.random() * 2}s` }} />
                                    {i % 3 === 0 && <div className="absolute w-12 h-[1px] bg-indigo-500/30 -right-8 top-1/2" />}
                                    {i < 8 && <div className="absolute h-12 w-[1px] bg-indigo-500/30 left-1/2 -bottom-8" />}
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-6 px-4 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-[10px] text-indigo-300 font-mono tracking-wider flex items-center gap-2">
                            <Activity size={10} className="animate-pulse" />
                            AUTO_SCALING: ACTIVE
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Row Entrance
            gsap.fromTo('.proof-row',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
                }
            )

            // 2. Metric Counters
            outcomes.forEach((item, i) => {
                const targetVal = parseFloat(item.metric)
                const obj = { val: 0 }

                const suffix = item.suffix || ""
                const isPrefix = item.prefix

                gsap.to(obj, {
                    val: targetVal,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: { trigger: numbersRef.current[i], start: "top 85%" },
                    onUpdate: () => {
                        if (numbersRef.current[i]) {
                            const num = obj.val.toFixed(targetVal % 1 === 0 ? 0 : 1)
                            numbersRef.current[i].textContent = isPrefix ? `${suffix}${num}` : `${num}${suffix}`
                        }
                        // Also update local counter inside gauge if exists
                        const gaugeCounter = document.querySelector(`.counter-${i}`)
                        if (gaugeCounter) gaugeCounter.textContent = obj.val.toFixed(0)
                    }
                })
            })

            // 3. Visual Animations
            // Gauge Fill
            if (gaugeRef.current) {
                gsap.to(gaugeRef.current, {
                    strokeDashoffset: 0, // Full circle
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: { trigger: gaugeRef.current, start: "top 80%" }
                })
            }

            // Histogram Bars
            gsap.to('.hist-bar', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "back.out(1.7)",
                scrollTrigger: { trigger: '.hist-bar', start: "top 85%" }
            })

            // Hologram Card
            gsap.to('.rank-card', {
                opacity: 1,
                scale: 1,
                rotationY: 12, // End at tilted state
                rotationX: 6,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: '.rank-card', start: "top 80%" }
            })

            // Scale Nodes
            gsap.to('.scale-node', {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: "back.out(2)",
                scrollTrigger: { trigger: '.scale-node', start: "top 80%" }
            })

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-[#030308] text-white py-32 overflow-hidden">
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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Title area */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
                        <ShieldCheck size={16} className="text-emerald-400" />
                        <span className="text-sm text-gray-300 font-medium tracking-wide">{t('badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                            {t('title')}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="space-y-32">
                    {outcomes.map((item, i) => (
                        <div key={item.id} className={`proof-row flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Text Side */}
                            <div className="flex-1 space-y-8">
                                <div className={`w-fit px-4 py-1.5 rounded-md bg-[#111] border border-white/10 text-xs font-bold uppercase tracking-[0.2em] shadow-lg ${item.color} flex items-center gap-2`}>
                                    <div className={`w-2 h-2 rounded-full ${item.bg.replace('/10', '')} animate-pulse`} />
                                    {item.label}
                                </div>

                                <div className="relative">
                                    <div
                                        ref={el => numbersRef.current[i] = el}
                                        className={`text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 opacity-90`}
                                    >
                                        0
                                    </div>
                                    {/* Decorative Stroke Text behind (static for now/hidden to prevent sync issues) */}
                                </div>

                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-white/10 pl-6">
                                    {item.desc}
                                </p>

                                <div className={`h-1 w-20 rounded-full bg-gradient-to-r from-${item.accent}-500 to-transparent`} />
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full max-w-lg perspective-1000">
                                <div className="aspect-[4/3] bg-[#0c0c12]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-all duration-500">
                                    {/* Tech Corners */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-xl" />
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-xl" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-xl" />
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-xl" />

                                    {/* Browser Bar */}
                                    <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 border-b border-white/5 flex items-center justify-between px-4 z-10">
                                        <div className="flex gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                                            SYS_MONITOR_V2.0
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 pt-10">
                                        {renderVisual(item.id)}
                                    </div>

                                    {/* Scanline Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
        </section>
    )
}
