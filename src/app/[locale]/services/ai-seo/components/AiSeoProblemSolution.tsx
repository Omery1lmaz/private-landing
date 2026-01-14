'use client'

import React, { useEffect, useRef } from 'react'
import { AlertCircle, CheckCircle2, Zap, Shield, TrendingUp, BarChart3, Search } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoProblemSolution() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animate-split", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            })

            // Parallax effect for cards
            gsap.to(".parallax-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -50,
                ease: "none"
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden bg-[#030308]">

            {/* --- BACKGROUND: Data Stream & Deep Grid --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Rolling Grid */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: 'perspective(1000px) rotateX(60deg) scale(3)',
                        transformOrigin: 'top center',
                        maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)'
                    }}
                />

                {/* Digital Rain / Data Stream */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-[rain_3s_infinite_linear]"
                            style={{
                                left: `${Math.random() * 100}%`,
                                height: `${Math.random() * 50 + 20}%`,
                                animationDuration: `${Math.random() * 2 + 2}s`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Modern Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
                    <div className="animate-split inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-cyan-500/30 transition-all cursor-default">
                        <TrendingUp size={14} className="text-cyan-400" />
                        <span className="text-[10px] font-black text-cyan-300/60 tracking-[0.3em] uppercase">Revenue-First SEO</span>
                    </div>
                    <div className="space-y-4">
                        <h2 className="animate-split text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]">
                            <span className="opacity-50 blur-[1px]">Sıralama Değil,</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                Gelir Odaklı Bir SEO Altyapısı
                            </span>
                        </h2>
                        <p className="animate-split text-white/50 text-lg md:text-xl font-medium">
                            Birçok ajans rapor sunar. Azı gerçekten işinizin büyümesine katkı sağlar.
                        </p>
                    </div>
                </div>

                {/* --- HOLOGRAPHIC OVERLAY LAYOUT --- */}
                <div className="relative max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">

                    {/* Layer 1: THE OLD REALITY (Background, Recessed, Tilted) */}
                    <div className="absolute top-0 left-4 lg:left-10 w-full lg:w-[60%] opacity-80 scale-95 origin-bottom-left rotate-[-2deg] transition-all duration-700 hover:opacity-100 hover:rotate-0 hover:scale-100 z-10 group/legacy">
                        <div className="relative bg-[#0f0505] border border-red-900/30 rounded-[30px] p-10 overflow-hidden">
                            <div className="absolute inset-0 bg-red-900/10" />
                            <div className="absolute -right-20 -top-20 w-60 h-60 bg-red-500/10 rounded-full blur-[80px]" />

                            <div className="relative flex flex-col gap-6">
                                <div className="flex items-center gap-3 text-red-500/80">
                                    <AlertCircle size={24} />
                                    <div>
                                        <h3 className="text-2xl font-bold uppercase tracking-widest line-through decoration-red-500/50 decoration-2 leading-none">Klasik SEO Yaklaşımları</h3>
                                        <p className="text-[10px] text-red-500/40 font-mono mt-1">(Geleneksel, Kelime Odaklı)</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 font-mono">
                                    {[
                                        "Sadece anahtar kelime sıralamasına odaklanan raporlar",
                                        "Dönüşümle ilişkisi olmayan trafik artışları",
                                        "Marka kimliğini yansıtmayan, AI tarafından şişirilmiş içerikler",
                                        "Teknik olarak hantal ve yavaş web altyapıları",
                                        "Gelir üretmeyen, sadece 'yeşil' görünen metrikler"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-red-300/60 transition-colors group-hover/legacy:text-red-300">
                                            <span className="flex-shrink-0 text-red-500 font-bold animate-pulse">[ERROR]</span>
                                            <span className="relative text-sm">
                                                {item}
                                                <span className="absolute inset-0 bg-red-500/20 blur opacity-0 group-hover/legacy:animate-[glitch_2s_infinite]"></span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 pt-4 border-t border-red-900/20 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                    <span className="text-[10px] font-mono text-red-500/60 uppercase tracking-widest">Status: Düşük ROI</span>
                                </div>
                            </div>
                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
                        </div>
                    </div>

                    {/* Layer 2: THE NEW REALITY (Foreground, Glass, Vibrant) */}
                    <div className="relative z-20 w-full lg:w-[65%] ml-auto mt-20 lg:mt-0 lg:translate-x-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group/modern">
                        <div className="relative bg-[#080c14]/90 backdrop-blur-3xl border border-cyan-500/30 rounded-[30px] p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]">

                            {/* Inner Glows */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                            <div className="relative flex flex-col gap-8">
                                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                            <Zap className="text-white" size={24} fill="currentColor" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white leading-none">Yeni Nesil SEO Mimarisi</h3>
                                            <p className="text-[10px] text-cyan-400 font-mono mt-2 tracking-widest uppercase">(Veri Odaklı, Gelir Odaklı)</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                        Status: Büyüme Odaklı
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { text: "Revenue-First", icon: BarChart3, desc: "Görünürlüğü doğrudan pipeline ve satışla ilişkilendiren yapı." },
                                        { text: "AI Arama Uyumu", icon: Zap, desc: "ChatGPT, Perplexity ve Google SGE için optimize edilmiş içerik." },
                                        { text: "Teknik Mükemmellik", icon: Search, desc: "Hız ve yapısal veriyle güçlendirilmiş, hatasız teknik altyapı." },
                                        { text: "Semantik Otorite", icon: TrendingUp, desc: "Sektörünüzde otorite olduğunuzu tescilleyen içerik ağı." },
                                        { text: "Sürekli Ölçüm", icon: CheckCircle2, desc: "Anlık verilerle strateji değiştiren, yaşayan bir büyüme sistemi." }
                                    ].map((item, i) => (
                                        <div key={i} className={`group/item flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all cursor-default ${i === 4 ? 'sm:col-span-2' : ''}`}>
                                            <div className="flex items-center gap-3 text-white font-bold">
                                                <item.icon size={18} className="text-cyan-400" />
                                                {item.text}
                                            </div>
                                            <p className="text-sm text-gray-400 pl-8 opacity-60 group-hover/item:opacity-100 transition-opacity">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connecting "Upgrade" Beam */}
                    <div className="absolute hidden lg:block left-[40%] top-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-15 rotate-[-15deg] animate-pulse" />

                </div>

                {/* Bottom Message */}
                <div className="mt-20 text-center animate-split">
                    <p className="text-xl md:text-2xl text-white/40 font-light italic">
                        "Sadece sıralama almak sizi gösterir. <span className="text-white opacity-100 font-medium not-italic">Doğru SEO altyapısı işinizi büyütür.</span>"
                    </p>
                </div>

            </div>

            <style jsx>{`
                @keyframes rain {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                @keyframes glitch {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) }
                    40% { transform: translate(-2px, -2px) }
                    60% { transform: translate(2px, 2px) }
                    80% { transform: translate(2px, -2px) }
                    100% { transform: translate(0) }
                }
            `}</style>
        </section>
    )
}
