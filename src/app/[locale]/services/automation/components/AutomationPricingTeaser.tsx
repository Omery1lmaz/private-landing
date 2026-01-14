'use client'

import React, { useEffect, useRef } from 'react'
import { Check, ArrowRight, Layers, Cpu, Infinity as InfinityIcon, HelpCircle, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationPricingTeaser() {
    const sectionRef = useRef<HTMLElement>(null)

    const tiers = [
        {
            name: "Foundation",
            subtitle: "Task Automation",
            desc: "Tekil ve tekrarlayan görevlerin otomasyonu. Belirli işleri otonom hale getirerek zaman kazanın.",
            icon: Layers,
            color: "indigo",
            features: [
                "Tekil iş akışı otomasyonu",
                "Temel API entegrasyonları",
                "Veri formatlama ve taşıma",
                "E-posta ve bildirim tetikleyicileri"
            ],
            forWhom: "Belirli bir operasyonel yükü hızlıca hafifletmek isteyen işletmeler.",
            highlight: false
        },
        {
            name: "Growth",
            subtitle: "Smart Ecosystem",
            badge: "En Popüler",
            desc: "Uçtan uca otonom süreçler. Birbirini tetikleyen akıllı akışlar ve tam entegrasyon.",
            icon: Cpu,
            color: "cyan",
            features: [
                "Çoklu adım otonom akışlar",
                "AI destekli karar mekanizmaları",
                "Gelişmiş API köprüleri",
                "Hata yakalama ve düzeltme"
            ],
            forWhom: "Tüm departman süreçlerini birbiriyle konuşturan otonom bir yapı kurmak isteyenler.",
            highlight: true
        },
        {
            name: "Scale",
            subtitle: "Agentic Enterprise",
            desc: "Kendi başına karar verebilen AI ajan ordusu. Karmaşık problemler için tam otonomi.",
            icon: InfinityIcon,
            color: "purple",
            features: [
                "Agentic AI Swarms",
                "Self-healing otonom mimari",
                "Enterprise entegrasyon havuzu",
                "Özel AI model eğitimleri"
            ],
            forWhom: "İşletmesini tamamen otonom bir sistem builder üzerine inşa etmek isteyen vizyoner ekipler.",
            highlight: false
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".pricing-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%"
                    }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="pricing" className="relative py-32 md:py-48 bg-[#020406] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] md:text-xs font-bold text-cyan-400 tracking-[0.4em] uppercase">
                        Otonom Yatırım Seviyeleri
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                        Otomasyon Bir Gider Değil, <br />
                        Yatırımdır
                    </h2>
                    <div className="space-y-2">
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Projenizin karmaşıklığına ve otonomi ihtiyacına göre şekillenen,
                        </p>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            size en yüksek ROI'yi sağlayacak seviyeyi belirliyoruz.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, i) => (
                        <div key={i} className={`pricing-card group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 ${tier.highlight ? `bg-white/[0.03] border-${tier.color}-500/30 shadow-2xl shadow-${tier.color}-900/10 scale-105 z-20` : 'bg-transparent border-white/5 hover:border-white/10 z-10'}`}>

                            {tier.highlight && (
                                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-${tier.color}-500 rounded-full text-[10px] font-bold uppercase text-black tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.4)]`}>
                                    {tier.badge}
                                </div>
                            )}

                            <div className="mb-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${tier.highlight ? `bg-${tier.color}-500/10 text-${tier.color}-400 border border-${tier.color}-500/20` : `bg-${tier.color}-500/5 text-${tier.color}-400 border border-${tier.color}-500/10`}`}>
                                    <tier.icon size={28} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{tier.name}</h3>
                                    <div className={`text-sm md:text-base font-medium text-${tier.color}-400`}>{tier.subtitle}</div>
                                </div>
                                <p className="mt-6 text-sm md:text-base text-gray-400 leading-relaxed font-light">{tier.desc}</p>
                            </div>

                            <div className="flex-1 flex flex-col space-y-10">
                                {/* Features */}
                                <div>
                                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-5">
                                        <HelpCircle size={12} className={`text-${tier.color}-500/50`} />
                                        Bu seviyede
                                    </div>
                                    <ul className="space-y-4">
                                        {tier.features.map((feat, k) => (
                                            <li key={k} className="flex items-center gap-3 text-sm md:text-base text-gray-300 font-light">
                                                <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center border bg-${tier.color}-500/10 border-${tier.color}-500/30`}>
                                                    <Check size={12} className={`text-${tier.color}-400`} />
                                                </div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Who for */}
                                <div className={`p-5 rounded-2xl bg-${tier.color}-500/5 border border-${tier.color}-500/10`}>
                                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-3">
                                        <Users size={12} className={`text-${tier.color}-500/50`} />
                                        Kim için?
                                    </div>
                                    <p className="text-[13px] md:text-sm text-gray-400 leading-snug">
                                        {tier.forWhom}
                                    </p>
                                </div>

                                {/* Card CTA */}
                                <a href="#contact" className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${tier.highlight ? `bg-${tier.color}-500 text-black hover:bg-${tier.color}-400 shadow-lg shadow-${tier.color}-500/20` : `bg-white/5 text-white hover:bg-white/10 border border-white/10 group-hover:border-${tier.color}-500/30 group-hover:text-${tier.color}-400 transition-colors`}`}>
                                    Sistem Mimarisini Konuşalım <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto border-t border-white/5 pt-16">
                    <div className="space-y-2 mb-10">
                        <p className="text-lg md:text-2xl text-white font-medium">Otonom geleceği birlikte inşa edelim.</p>
                        <p className="text-gray-400 md:text-lg font-light">Ücretsiz süreç analizi için ilk adımı atın.</p>
                    </div>

                    <div className="space-y-4">
                        <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-cyan-500 text-black font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/10">
                            Analiz İste <ArrowRight size={20} />
                        </a>
                        <p className="text-[11px] md:text-xs text-white/30 uppercase tracking-[0.2em] font-bold">
                            Size en uygun otomasyon seviyesini birlikte netleştirelim.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
