'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, MousePointer, LayoutGrid, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevProofOutcome() {
    const sectionRef = useRef<HTMLElement>(null)

    const outcomes = [
        {
            label: "Operasyonel Yük",
            title: "Daha Az Manuel İş",
            desc: "Tekrarlayan işlemler otomatikleşir. Formlar, talepler ve veri akışı sistem tarafından yönetilir.",
            results: ["Zaman kaybı azalir", "İnsan hatası düşer", "Ekip daha verimli çalışır"],
            visual: "flow",
            icon: Zap,
            color: "cyan"
        },
        {
            label: "Kullanıcı Netliği",
            title: "Daha Net Müşteri Akışı",
            desc: "Ziyaretçi ne yapacağını düşünmez. Nereye bakacağı, neye tıklayacağı ve nasıl ilerleyeceği netleşir.",
            results: ["Daha bilinçli kullanıcı hareketleri", "Daha yüksek etkileşim", "Daha az terk edilen sayfa"],
            visual: "focus",
            icon: MousePointer,
            color: "purple"
        },
        {
            label: "Operasyonel Düzen",
            title: "Daha Düzenli Operasyon",
            desc: "Dağınık tablolar, karmaşık dosyalar ve kontrolsüz veriler ortadan kalkar. Tüm süreçler tek bir panelden izlenir.",
            results: ["Bilgiye hızlı erişim", "Daha düzenli iş akışı", "Daha net karar alma"],
            visual: "structure",
            icon: LayoutGrid,
            color: "blue"
        },
        {
            label: "Stratejik Büyüme",
            title: "Daha Kontrollü Ölçeklenme",
            desc: "Trafik veya kullanıcı sayısı arttığında sistem zorlanmaz. Altyapı büyümeye kendiliğinden uyum sağlar.",
            results: ["Kesintisiz deneyim", "Güvenli büyüme", "Uzun vadeli sürdürülebilirlik"],
            visual: "scale",
            icon: TrendingUp,
            color: "emerald"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.outcome-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%"
                    }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-[#020204] text-white py-32 md:py-48 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 md:mb-32 space-y-6">
                    <div className="inline-block">
                        <span className="text-[10px] md:text-xs font-sans font-bold text-cyan-400 tracking-[0.5em] uppercase border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 rounded-full">
                            Bento Grid — Outcome Cards
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
                        Gerçek Projelerden <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            Gerçek Kazanımlar
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        İyi tasarlanmış bir sistem sadece bugün çalışmaz, <br className="hidden md:block" />
                        <span className="text-white/80">yarınki büyümeyi de taşır.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <div key={i} className="outcome-card group relative rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-700 h-[520px] lg:h-[560px] flex flex-col p-8">

                                {/* Label & Icon */}
                                <div className="flex items-center justify-between mb-8 relative z-20">
                                    <div className={`p-3 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 transition-transform duration-500 group-hover:scale-110`}>
                                        <Icon size={20} className={`text-${item.color}-400`} />
                                    </div>
                                    <div className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest uppercase text-white/40`}>
                                        {item.label}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-20 flex-1">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light mb-8">
                                        {item.desc}
                                    </p>

                                    {/* Result Pills */}
                                    <div className="space-y-3 mt-auto">
                                        <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                                            <ArrowRight size={12} className="text-cyan-500/50" />
                                            Sonuç
                                        </div>
                                        {item.results.map((result, j) => (
                                            <div key={j} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                                                <CheckCircle2 size={12} className={`text-${item.color}-400 shrink-0`} />
                                                <span className="text-[11px] md:text-xs text-white/60 font-medium tracking-tight leading-none">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Background Elements */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                                    {item.visual === 'flow' && (
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                                <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500 animate-[width-flow_4s_linear_infinite]" />
                                                <path d="M10,60 Q30,30 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500 animate-[width-flow_5s_linear_infinite]" />
                                                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-cyan-500/30 animate-spin-slow" />
                                            </svg>
                                        </div>
                                    )}
                                    {item.visual === 'focus' && (
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-48 h-48 rounded-full border border-purple-500/20 animate-ping shadow-[0_0_50px_rgba(168,85,247,0.1)]" />
                                                <div className="w-32 h-32 rounded-full border border-purple-500/30 absolute" />
                                                <div className="w-16 h-16 rounded-full border border-purple-500/40 absolute animate-pulse" />
                                            </div>
                                        </div>
                                    )}
                                    {item.visual === 'structure' && (
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                                            <div className="grid grid-cols-4 gap-2 absolute inset-0 p-8 rotate-12">
                                                {[...Array(16)].map((_, j) => (
                                                    <div
                                                        key={j}
                                                        className="aspect-square bg-blue-500/20 rounded-lg animate-pulse"
                                                        style={{ animationDelay: `${j * 0.2}s` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {item.visual === 'scale' && (
                                        <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                                            <div className="absolute bottom-12 right-12 flex items-end gap-2 h-48">
                                                {[30, 45, 60, 85, 100].map((h, k) => (
                                                    <div
                                                        key={k}
                                                        className="w-4 bg-gradient-to-t from-emerald-500/40 to-transparent rounded-full transition-all duration-1000 group-hover:h-full"
                                                        style={{ height: `${h}%`, transitionDelay: `${k * 100}ms` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-32 md:mt-40 text-center border-t border-white/5 pt-20">
                    <p className="text-xl md:text-3xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed italic">
                        "İyi tasarlanmış bir sistem sadece bugün çalışmaz. <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 not-italic">
                            Yarınki büyümeyi de taşır."
                        </span>
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes width-flow {
                    0% { stroke-dashoffset: 200; stroke-dasharray: 0 200; opacity: 0; }
                    50% { stroke-dashoffset: 100; stroke-dasharray: 100 100; opacity: 1; }
                    100% { stroke-dashoffset: 0; stroke-dasharray: 200 200; opacity: 0; }
                }
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    )
}
