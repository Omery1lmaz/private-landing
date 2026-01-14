'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, ShieldCheck, Clock, Layers, CheckCircle2, ArrowRight, Timer, Zap, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FastDeliveryProofOutcome() {
    const sectionRef = useRef<HTMLElement>(null)

    const outcomes = [
        {
            label: "Hız Rekoru",
            title: "14 Günde Yayına Alım",
            desc: "Fikirden canlıya geçiş süresini aylar yerine günlerle ifade ediyoruz. Pazar fırsatlarını kaçırmayın.",
            results: ["Hızlı Time-to-Market", "Rekabet Avantajı", "Sıfır Bekleme"],
            visual: "flow",
            icon: Timer,
            color: "cyan"
        },
        {
            label: "Verimlilik",
            title: "Maksimum Kaynak Kullanımı",
            desc: "Hantal ekipler yerine laser-focused bir yaklaşımla, her saatin değerini en üst düzeye çıkarıyoruz.",
            results: ["Düşük Geliştirme Maliyeti", "Yüksek ROI", "Net Odak"],
            visual: "scale",
            icon: Zap,
            color: "blue"
        },
        {
            label: "Kalite Güvencesi",
            title: "Hızlı Ama Hatasız",
            desc: "Sürat, kaliteden ödün vermek değildir. Otomatize testler ve sağlam mimari ile her zaman en iyisi.",
            results: ["Production Ready", "Yüksek Performans", "Güvenilir Altyapı"],
            visual: "focus",
            icon: ShieldCheck,
            color: "teal"
        },
        {
            label: "Çeviklik",
            title: "Kusursuz Geri Bildirim",
            desc: "Piyasa tepkilerine göre anında şekil alabilen, hızı esneklikle birleştiren ürün döngüsü.",
            results: ["Dinamik Pivot Kabiliyeti", "Kullanıcı Odaklı Evrim", "Agile Altyapı"],
            visual: "structure",
            icon: Target,
            color: "indigo"
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

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-24 md:mb-32 space-y-6">
                    <div className="inline-block">
                        <span className="text-[10px] md:text-xs font-sans font-bold text-cyan-400 tracking-[0.5em] uppercase border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 rounded-full">
                            Somut Sonuçlar
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
                        Hızın Getirdiği <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            Piyasa Gücü
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Sadece hızlı değil, <span className="text-white/80">stratejik bir hızdan bahsediyoruz.</span> <br />
                        Doğru zamanda, doğru yerde, doğru ürünle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
                    {outcomes.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <div key={i} className="outcome-card group relative rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden backdrop-blur-3xl hover:bg-white/[0.04] transition-all duration-700 h-[520px] lg:h-[560px] flex flex-col p-8">

                                {/* Label & Icon */}
                                <div className="flex items-center justify-between mb-8 relative z-20">
                                    <div className={`p-3 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                        <Icon size={20} className={`text-${item.color}-400`} />
                                    </div>
                                    <div className={`group-hover:text-${item.color}-400 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest uppercase text-white/40 transition-colors`}>
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
                                            Kazanım
                                        </div>
                                        {item.results.map((result, j) => (
                                            <div key={j} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all">
                                                <CheckCircle2 size={12} className={`text-${item.color}-400 shrink-0`} />
                                                <span className="text-[11px] md:text-xs text-white/60 font-medium tracking-tight leading-none">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Background Glow Layer */}
                                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-${item.color}-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                            </div>
                        )
                    })}
                </div>

                <div className="mt-32 md:mt-40 border-t border-white/5 pt-20">
                    <p className="text-xl md:text-3xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed italic">
                        "Hız her şey değildir ama <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 not-italic">
                            her şeyi hız başlatır."
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
