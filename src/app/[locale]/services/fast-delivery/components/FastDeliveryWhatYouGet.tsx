'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Rocket, Zap, Timer, Layout, Cpu, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FastDeliveryFeatureVisual from './FastDeliveryFeatureVisual'

gsap.registerPlugin(ScrollTrigger)

export default function FastDeliveryWhatYouGet() {
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    const features = [
        {
            id: 'sprint',
            icon: Zap,
            title: "Hyper-Sprint Geliştirme",
            tagline: "Minimum sürede maksimum çıktı.",
            desc: "Karmaşık projeleri 14 günlük yoğun sprintlere bölerek, her dönemin sonunda çalışan bir çıktı sunuyoruz.",
            results: ["Hızlı Teslimat", "Sık Geri Bildirim", "Dinamik Kapsam"],
            color: "cyan",
            tech: "Agile Momentum"
        },
        {
            id: 'prototype',
            icon: Layout,
            title: "Hızlı Prototipleme",
            tagline: "Fikirlerinizi anında görün ve test edin.",
            desc: "Fikirlerinizi 24 saat içinde görselleştiriyor, 48 saat içinde etkileşimli wireframe'lere dönüştürüyoruz.",
            results: ["Düşük Risk", "Görsel Onay", "Hızlı Karar"],
            color: "blue",
            tech: "MVP Focus"
        },
        {
            id: 'stack',
            icon: Cpu,
            title: "Modern Tech-Stack",
            tagline: "Hız için optimize edilmiş modern altyapı.",
            desc: "Vakit kaybettirmeyen, en güncel ve performanslı teknolojilerle (Next.js, Tailwind, Bun) altyapınızı kuruyoruz.",
            results: ["Max Performans", "Geleceğe Hazır", "Hızlı Deployment"],
            color: "teal",
            tech: "Cutting Edge"
        },
        {
            id: 'launch',
            icon: Rocket,
            title: "Anında Yayına Alım",
            tagline: "Koddan canlı yayına sıfır bekleme.",
            desc: "CI/CD süreçlerimizle, her kod parçası anında test edilir ve güvenli bir şekilde production ortamına çıkarılır.",
            results: ["Sıfır Bekleme", "Otomatik Test", "Güvenli Release"],
            color: "indigo",
            tech: "DevOps Speed"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-list-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 bg-[#020406] overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-0 right-0 text-[15vw] font-black text-white/[0.01] leading-none select-none pointer-events-none translate-x-1/4">
                SPEED
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* LEFT: Interactive List */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="hidden lg:block mb-10 px-2 space-y-4">
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">Gerçek Kazanım</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white">Neyi, Nasıl Hızlandırıyoruz?</h2>
                            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                                Teknik detaylar arka planda kalır. Siz ürünün her gün nasıl evrildiğini ve piyasaya hazırlandığını görürsünüz.
                            </p>
                        </div>

                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => setActiveIndex(idx)}
                                className={`feature-list-item group relative p-4 rounded-xl border transition-all duration-500 cursor-pointer overflow-hidden
                                    ${activeIndex === idx
                                        ? 'bg-white/[0.12] border-white/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] translate-x-3'
                                        : 'bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/10'
                                    }
                                `}
                            >
                                {activeIndex === idx && (
                                    <>
                                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${item.color}-400 shadow-[0_0_20px_${item.color}] z-20`} />
                                        <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-500/10 to-transparent opacity-40`} />
                                    </>
                                )}

                                <div className="flex items-center justify-between relative z-10 mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`
                                            w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500
                                            ${activeIndex === idx ? `bg-${item.color}-500/20 text-${item.color}-400` : 'bg-white/5 text-gray-500'}
                                        `}>
                                            <item.icon size={16} />
                                        </div>
                                        <h3 className={`text-base font-bold transition-colors ${activeIndex === idx ? 'text-white' : 'text-gray-400'}`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    {activeIndex === idx && (
                                        <ArrowRight size={14} className={`text-${item.color}-400 animate-pulse`} />
                                    )}
                                </div>

                                <div className={`relative z-10 pl-11 space-y-3 overflow-hidden transition-all duration-500 ${activeIndex === idx ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm font-medium text-cyan-400/90">{item.tagline}</p>
                                    <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.results.map((res, rIdx) => (
                                            <span key={rIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/50 border border-white/10">
                                                {res}
                                            </span>
                                        ))}
                                    </div>

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

                    {/* RIGHT: Visual Panel */}
                    <div className="lg:col-span-7">
                        <FastDeliveryFeatureVisual feature={features[activeIndex]} />
                    </div>

                </div>

                <div className="mt-24 text-center border-t border-white/5 pt-16">
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                        Hız, kalitenin düşmanı değil, <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            doğru metodolojinin en büyük kanıtıdır.
                        </span>
                    </p>
                </div>
            </div>

            {/* Background Glows that follow index */}
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 transition-colors duration-1000 ease-in-out
                ${features[activeIndex].color === 'cyan' ? 'bg-cyan-600' :
                    features[activeIndex].color === 'blue' ? 'bg-blue-600' :
                        features[activeIndex].color === 'teal' ? 'bg-teal-600' : 'bg-indigo-600'}
            `} />
        </section>
    )
}
