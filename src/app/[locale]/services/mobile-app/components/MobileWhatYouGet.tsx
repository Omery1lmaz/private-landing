'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Smartphone, Zap, Infinity as InfinityIcon, Palette, ArrowRight, Sparkles, Layers, Cloud, WifiOff } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MobileFeatureVisual from './MobileFeatureVisual'

gsap.registerPlugin(ScrollTrigger)

export default function MobileWhatYouGet() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const features = [
        {
            id: 'cross-platform',
            icon: Layers,
            title: "Cross-Platform Mükemmellik",
            tagline: "Tek kod, iki dünya, sıfır ödün.",
            desc: "React Native ile hem iOS hem Android'de yerel (Native) performans ve hissiyat sunan, bakım maliyetini düşüren ve hızı artıran altyapılar.",
            results: ["Düşük maliyetli bakım", "Hızlı pazara çıkış", "Tutarlı deneyim"],
            color: 'cyan',
            tech: "Unified Logic Layer"
        },
        {
            id: 'sync',
            icon: Cloud,
            title: "Gerçek Zamanlı Senkron",
            tagline: "Verileriniz ışık hızında cebinizde.",
            desc: "Cloud entegrasyonu ile cihazlar arası anlık veri transferi ve kesintisiz kullanıcı oturumu yönetimi.",
            results: ["Gerçek zamanlı veri", "Cihazlar arası süreklilik", "Güçlü backend"],
            color: 'blue',
            tech: "Infinite Sync Core"
        },
        {
            id: 'performance',
            icon: Zap,
            title: "Native Performans & Hız",
            tagline: "Takılmayan, akıcı bir uygulama deneyimi.",
            desc: "FPS optimizasyonu ve bellek yönetimi ile en yoğun işlemlerde bile donmayan, pürüzsüz kaydırma ve animasyonlar.",
            results: ["60 FPS stabilite", "Düşük pil tüketimi", "Hızlı açılış"],
            color: 'orange',
            tech: "Performance Engine"
        },
        {
            id: 'offline',
            icon: WifiOff,
            title: "Offline-First Yaklaşım",
            tagline: "İnternet kopsa da uygulama durmaz.",
            desc: "Yerel veritabanı (SQLite/Realm) kullanımı ile internet bağlantısı olmadığında bile tam fonksiyonel kullanım ve otomatik senkron.",
            results: ["Kesintisiz erişim", "Mobil veri tasarrufu", "Güven Veren Yapı"],
            color: 'emerald',
            tech: "Local Persistence"
        },
        {
            id: 'tokens',
            icon: Palette,
            title: "Tasarımsal Standartlar",
            tagline: "Markanızı yansıtan, modern UI/UX.",
            desc: "Tasarım tokenları ve özel bileşen kütüphaneleri ile her pikselde marka kimliğinizi hissettiren premium tasarım dili.",
            results: ["Marka bütünlüğü", "Kolay güncelleme", "Kullanıcı dostu"],
            color: 'purple',
            tech: "Universal Design System"
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
                            features[activeIndex].color === 'blue' ? 'bg-blue-600' :
                                features[activeIndex].color === 'orange' ? 'bg-orange-600' :
                                    features[activeIndex].color === 'emerald' ? 'bg-emerald-600' : 'bg-purple-600'
                        }`}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16 md:hidden">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Mobil Çatımız</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Uygulamanız Neleri Kapsar?</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Kodun ötesinde, kullanıcıyı elinde tutan ve işinizi dijital dünyada bir adım öne çıkaran özellikler.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* LEFT: Interactive List */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="hidden lg:block mb-10 px-2 space-y-4">
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">Mobil Çatımız</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white">Uygulamanız Neleri Kapsar?</h2>
                            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                                Kodun ötesinde, kullanıcıyı elinde tutan ve işinizi dijital dünyada bir adım öne çıkaran özellikler.
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

                    <MobileFeatureVisual feature={features[activeIndex]} />

                </div>

                <div className="mt-24 text-center border-t border-white/5 pt-16">
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                        Sadece bir uygulama teslim etmiyoruz. <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            İşinizin mobil dünyadaki kusursuz temsilcisini inşa ediyoruz.
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
