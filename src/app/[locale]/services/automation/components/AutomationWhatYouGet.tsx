'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Brain, Link as LinkIcon, GitBranch, Infinity as InfinityIcon, Activity, Sparkles, ArrowRight, PlayCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AutomationFeatureVisual from './AutomationFeatureVisual'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationWhatYouGet() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const features = [
        {
            id: 'agentic',
            icon: Brain,
            title: "Agentic AI Swarms",
            tagline: "Karar veren, işlem yapan dijital çalışanlar.",
            desc: "Sadece veriyi işlemekle kalmayan, karmaşık hedefleri analiz edip otonom adımlar atan çoklu ajan sistemleri.",
            results: ["Stratejik Karar Alma", "7/24 Kesintisiz İşlem", "Otonom Problem Çözme"],
            color: 'cyan',
            tech: "LLM-Powered Autonomy"
        },
        {
            id: 'integration',
            icon: LinkIcon,
            title: "Universal API Bridging",
            tagline: "Tüm sistemleriniz tek bir dilde konuşsun.",
            desc: "Farklı platformlar, ERP'ler ve SaaS araçları arasında kusursuz ve gecikmesiz veri köprüleri kuruyoruz.",
            results: ["Sıfır Manuel Giriş", "Instant Data Sync", "Unified Ecosystem"],
            color: 'blue',
            tech: "Omnichannel Connector"
        },
        {
            id: 'logic',
            icon: GitBranch,
            title: "Error-Free Logic Flows",
            tagline: "Hata payını matematiksel olarak sıfırlayın.",
            desc: "Karmaşık iş mantıklarını (conditional logic) hatasız ve hızlı bir şekilde dijital iş akışlarına dönüştürüyoruz.",
            results: ["Reliable Operations", "Conditional Triggers", "Compliance Ready"],
            color: 'indigo',
            tech: "State-Machine Architecture"
        },
        {
            id: 'mapping',
            icon: Activity,
            title: "Process Insight Mapping",
            tagline: "Görünmeyen tıkanıklıkları anında tespit edin.",
            desc: "İş süreçlerinizi dijital ikizleriyle haritalandırarak verimlilik kayıplarını ve optimizasyon fırsatlarını belirleyin.",
            results: ["Bottleneck Detection", "Visual Workflow Edit", "Real-time Metrics"],
            color: 'cyan',
            tech: "Digital Twin Mapping"
        },
        {
            id: 'scaling',
            icon: InfinityIcon,
            title: "Enterprise Scaling Engine",
            tagline: "İş yükünüz artsa da sisteminiz yorulmaz.",
            desc: "Milyonlarca işlemi aynı anda yürütebilen, bulut tabanlı ve otomatik olarak ölçeklenen işlem motorları.",
            results: ["Elastic Performance", "High Availability", "Cost Optimization"],
            color: 'purple',
            tech: "Cloud-Native Scaling"
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
                                features[activeIndex].color === 'indigo' ? 'bg-indigo-600' :
                                    features[activeIndex].color === 'purple' ? 'bg-purple-600' : 'bg-cyan-600'
                        }`}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16 md:hidden">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Otonom Yetenekler</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Sisteminize Kazandırdıklarımız</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Karmaşık operasyonları basitleştiren, insana olan ihtiyacı yaratıcılık düzeyine çeyen akıllı otonom modüller.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* LEFT: Interactive List */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="hidden lg:block mb-10 px-2 space-y-4">
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase">Otonom Yetenekler</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white">Sisteminize Kazandırdıklarımız</h2>
                            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                                Karmaşık operasyonları basitleştiren, insana olan ihtiyacı yaratıcılık düzeyine çeken akıllı otonom modüller.
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

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.results.map((res, index) => (
                                            <span key={index} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/50 border border-white/10">
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
                                            <PlayCircle size={12} className={`text-${item.color}-400`} />
                                            <span className={`text-[10px] font-bold text-${item.color}-300 uppercase tracking-widest`}>
                                                {item.tech}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <AutomationFeatureVisual feature={features[activeIndex]} />

                </div>

                <div className="mt-24 text-center border-t border-white/5 pt-16">
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                        Manuel karmaşaya son verin. <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Yalnızca gelişen bir iş dünyasının mimarı olun.
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
