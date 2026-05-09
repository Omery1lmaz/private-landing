'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Check, ArrowRight, Zap, Rocket, Timer, HelpCircle, Users, Flame, CreditCard } from 'lucide-react'
import PaymentModal from '@/components/PaymentModal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FastDeliveryPricingTeaser() {
    const sectionRef = useRef<HTMLElement>(null)

    const [currency, setCurrency] = useState<'TRY' | 'USD'>('TRY')
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; currency: string } | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const tiers = [
        {
            name: "Flash Sprint",
            subtitle: "One-Time Delivery",
            price: currency === 'TRY' ? "49.000" : "1.500",
            currencySymbol: currency === 'TRY' ? "₺" : "$",
            desc: "Tek bir ana sorunu veya özelliği (MVP) rekor sürede çözmek için tasarlandı.",
            icon: Timer,
            color: "indigo",
            features: [
                "14 gün içinde anahtar teslim",
                "Temel UI/UX tasarımı",
                "MVP seviyesi geliştirme",
                "Cloud deployment & Launch"
            ],
            forWhom: "Fikrini hızlıca doğrulamak ve pazara girmek isteyen girişimciler.",
            highlight: false
        },
        {
            name: "Momentum",
            subtitle: "Agile Scalability",
            badge: "En Verimli",
            price: currency === 'TRY' ? "89.000" : "3.000",
            currencySymbol: currency === 'TRY' ? "₺" : "$",
            desc: "Sürekli gelişim ve hızlı iterasyonlar. Ürününüzün her hafta yeni yetenekler kazanması.",
            icon: Flame,
            color: "cyan",
            features: [
                "Haftalık release döngüleri",
                "Gelişmiş teknik altyapı",
                "Kullanıcı geri bildirim odaklılık",
                "Kesintisiz destek & Scale"
            ],
            forWhom: "Büyümek için hıza ihtiyaç duyan ve sürekli gelişim hedefleyen ölçekli projeler.",
            highlight: true
        },
        {
            name: "Ultimate Velocity",
            subtitle: "Enterprise Turbo",
            price: currency === 'TRY' ? "Özel" : "Custom",
            currencySymbol: "",
            desc: "Karmaşık sistemlerin hiper-hızla dönüştürülmesi. Kurumsal projeler için tam kapasite.",
            icon: Zap,
            color: "purple",
            features: [
                "Tamamen özelleştirilmiş ekip",
                "Karmaşık sistem entegrasyonları",
                "Day 1 production güvencesi",
                "Stratejik teknoloji danışmanlığı"
            ],
            forWhom: "Hantallıktan kurtulup kurumsal projelerini saniyeler seviyesinde çevikliğe taşımak isteyenler.",
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

    const handlePlanClick = (tier: any) => {
        const numericPrice = parseInt(tier.price.replace(/[^0-9]/g, ''))
        if (isNaN(numericPrice)) {
            const contactSection = document.getElementById('contact')
            contactSection?.scrollIntoView({ behavior: 'smooth' })
            return
        }
        setSelectedPlan({
            name: tier.name,
            price: numericPrice,
            currency: tier.currencySymbol || (currency === 'TRY' ? '₺' : '$')
        })
        setIsModalOpen(true)
    }

    return (
        <section ref={sectionRef} id="pricing" className="relative py-32 md:py-48 bg-[#020406] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-950/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] md:text-xs font-bold text-cyan-400 tracking-[0.4em] uppercase animate-pulse">
                        Yatırım Karşılığı Hız
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                        Geç Kalmak <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-cyan-400">En Büyük Giderdir</span>
                    </h2>
                    <div className="space-y-2">
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Projenizin aciliyetine ve hedeflerinize göre belirlenen,
                        </p>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            en yüksek çevikliği sağlayan yatırım modelleri.
                        </p>

                        {/* Currency Toggle */}
                        <div className="inline-flex items-center p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8">
                            <button
                                onClick={() => setCurrency('TRY')}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currency === 'TRY'
                                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                ₺ TRY
                            </button>
                            <button
                                onClick={() => setCurrency('USD')}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${currency === 'USD'
                                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                $ USD
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {tiers.map((tier, i) => (
                        <div key={i} className={`pricing-card group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 ${tier.highlight ? `bg-white/[0.04] border-${tier.color}-500/30 shadow-2xl shadow-${tier.color}-900/10 scale-105 z-20` : 'bg-transparent border-white/5 hover:border-white/10 z-10'}`}>

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
                                    <div className={`text-sm md:text-base font-medium text-${tier.color}-400 mb-4`}>{tier.subtitle}</div>
                                    <div className="flex items-baseline gap-1 text-white">
                                        <span className="text-2xl font-normal text-gray-400">{tier.currencySymbol}</span>
                                        <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                                    </div>
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
                                            <li key={k} className="flex items-center gap-3 text-sm md:text-base text-gray-300 font-light group/feat">
                                                <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center border bg-${tier.color}-500/10 border-${tier.color}-500/30 group-hover/feat:scale-110 transition-transform`}>
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
                                <button 
                                    onClick={() => handlePlanClick(tier)}
                                    className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${tier.highlight ? `bg-${tier.color}-500 text-black hover:bg-${tier.color}-400 shadow-lg shadow-${tier.color}-500/20` : `bg-white/5 text-white hover:bg-white/10 border border-white/10 group-hover:border-${tier.color}-500/30 group-hover:text-${tier.color}-400 transition-colors`}`}
                                >
                                    {isNaN(parseInt(tier.price.replace(/[^0-9]/g, ''))) ? 'Zaman Kaybetmeden Başlayalım' : 'Hemen Başla'} <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto border-t border-white/5 pt-16">
                    <div className="space-y-2 mb-10">
                        <p className="text-lg md:text-2xl text-white font-medium">Başarıya en hızlı yoldan ulaşın.</p>
                        <p className="text-gray-400 md:text-lg font-light">Ücretsiz 14 gün analiz toplantısı için yerinizi ayırtın.</p>
                    </div>

                    <div className="space-y-4">
                        <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-cyan-500 text-black font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/10">
                            Hemen Başlat <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

            </div>

            <PaymentModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                plan={selectedPlan} 
            />
        </section>
    )
}
