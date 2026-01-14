'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Bot, Sparkles, Settings, BarChart3, Link2, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AiSeoFeatureVisual from './AiSeoFeatureVisual'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoWhatYouGet() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const features = [
        {
            id: 'ai-search',
            icon: Bot,
            title: "AI Arama Optimizasyonu",
            tagline: "Sadece Google değil, her AI modeli için görünürlük.",
            desc: "Google SGE, ChatGPT, Perplexity ve Gemini gibi yapay zeka destekli arama sistemlerinde markanızın doğru şekilde temsil edilmesini sağlayan semantik optimizasyon.",
            results: ["AI cevaplarında yer alma", "Gelecek odaklı görünürlük", "Otorite tescili"],
            color: 'cyan',
            tech: "LLM Optimization Node"
        },
        {
            id: 'content',
            icon: Sparkles,
            title: "Semantik İçerik Mimari",
            tagline: "Anlamlı içerik, kalıcı otorite.",
            desc: "Sadece anahtar kelime değil, konu derinliği ve kullanıcı niyetini (Search Intent) hedefleyen, otorite kuran profesyonel içerik ağı tasarımı.",
            results: ["Yüksek otorite skoru", "Düşük hemen çıkma oranı", "Tematik hakimiyet"],
            color: 'indigo',
            tech: "Semantic Engine"
        },
        {
            id: 'technical',
            icon: Settings,
            title: "Teknik SEO Mükemmelliği",
            tagline: "Arama motorlarının sevdiği hatasız altyapı.",
            desc: "Web Vitals, sayfa hızı, yapısal veri (Schema.org) ve taranabilirlik odaklı, teknik olarak kusursuz bir web mimarisi.",
            results: ["95+ PageSpeed skoru", "Hızla taranan sayfalar", "Hatasız yapısal veri"],
            color: 'emerald',
            tech: "Infrastructure Core"
        },
        {
            id: 'analytics',
            icon: BarChart3,
            title: "Veri ve Gelir Analitiği",
            tagline: "Sıralama değil, ROI takibi.",
            desc: "Organik trafiği doğrudan satış ve pipeline ile ilişkilendiren, her bir sayfanın ve anahtar kelimenin getirisini ölçen dashboard sistemleri.",
            results: ["Net büyüme verisi", "Dönüşüm odaklı kararlar", "Gerçek ROI ölçümü"],
            color: 'blue',
            tech: "Revenue Analytics"
        },
        {
            id: 'links',
            icon: Link2,
            title: "Stratejik Bağlantı İnşası",
            tagline: "Zor kazanılan, imkansız geçilen otorite.",
            desc: "Manipülasyondan uzak, marka otoritesini gerçekten artıran, doğal ve sürdürülebilir bağlantı (Backlink) stratejileri.",
            results: ["Sürdürülebilir güç", "Domain otorite artışı", "Güçlü marka sinyali"],
            color: 'purple',
            tech: "Authority Bridge"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.feature-list-item',
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
                }
            )

            gsap.fromTo('.visual-panel',
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#020406] overflow-hidden min-h-[900px] flex items-center">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                <div
                    className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 transition-colors duration-1000 ease-in-out
                    ${features[activeIndex].color === 'cyan' ? 'bg-cyan-600' :
                            features[activeIndex].color === 'indigo' ? 'bg-indigo-600' :
                                features[activeIndex].color === 'blue' ? 'bg-blue-600' :
                                    features[activeIndex].color === 'emerald' ? 'bg-emerald-600' : 'bg-purple-600'
                        }`}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16 md:hidden">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Gerçek Kazanım</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Bu Sistem Size Ne Kazandırır?</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Teknik detaylar arka planda kalır. Siz organik görünürlüğün işiniz için nasıl bir büyüme makinesine dönüştüğünü görürsünüz.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* LEFT: Interactive List */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="hidden lg:block mb-10 px-2 space-y-4">
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">Gerçek Kazanım</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white">Bu Sistem Size Ne Kazandırır?</h2>
                            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                                Teknik detaylar arka planda kalır. Siz organik görünürlüğün işiniz için nasıl bir büyüme makinesine dönüştüğünü görürsünüz.
                            </p>
                        </div>

                        {features.map((item, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveIndex(i)}
                                onClick={() => setActiveIndex(i)}
                                className={`feature-list-item group relative p-4 rounded-xl border transition-all duration-500 cursor-pointer overflow-hidden
                                    ${activeIndex === i
                                        ? 'bg-white/[0.12] border-white/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] translate-x-3'
                                        : 'bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/10'
                                    }
                                `}
                            >
                                {activeIndex === i && (
                                    <>
                                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${item.color}-400 shadow-[0_0_20px_${item.color}] z-20`} />
                                        <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/10 to-transparent opacity-40`} />
                                    </>
                                )}

                                <div className="flex items-center justify-between relative z-10 mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`
                                            w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500
                                            ${activeIndex === i ? `bg-${item.color}-500/20 text-${item.color}-400` : 'bg-white/5 text-gray-500'}
                                        `}>
                                            <item.icon size={16} />
                                        </div>
                                        <h3 className={`text-base font-bold transition-colors ${activeIndex === i ? 'text-white' : 'text-gray-400'}`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    {activeIndex === i && (
                                        <ArrowRight size={14} className={`text-${item.color}-400 animate-pulse`} />
                                    )}
                                </div>

                                <div className={`relative z-10 pl-11 space-y-3 overflow-hidden transition-all duration-500 ${activeIndex === i ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm font-medium text-cyan-400/90">{item.tagline}</p>
                                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>

                                    <div className="pt-4 border-t border-white/5 mt-4">
                                        <div className={`
                                            inline-flex items-center gap-2 px-3 py-1 rounded-full
                                            bg-${item.color}-500/10 border border-${item.color}-500/20
                                            animate-pulse-slow
                                        `}>
                                            <Sparkles size={12} className={`text-${item.color}-400`} />
                                            <span className={`text-[10px] font-bold text-${item.color}-300 uppercase tracking-widest`}>
                                                {item.tech}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <AiSeoFeatureVisual feature={features[activeIndex]} />

                </div>

                <div className="mt-24 text-center border-t border-white/5 pt-16">
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                        Sadece trafik değil, <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            İşinizi büyüten sürdürülebilir bir organik motor inşa ediyoruz.
                        </span>
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </section >
    )
}
