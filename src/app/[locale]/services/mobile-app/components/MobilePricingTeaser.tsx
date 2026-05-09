'use client'

import React, { useEffect, useRef, useState } from 'react'
import { LayoutTemplate, Crown, Server, Check, ArrowRight, HelpCircle, Users, Sparkles, Smartphone, Zap, Infinity as InfinityIcon, CreditCard } from 'lucide-react'
import PaymentModal from '@/components/PaymentModal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobilePricingTeaser() {
    const sectionRef = useRef<HTMLElement>(null)

    const [currency, setCurrency] = useState<'TRY' | 'USD'>('TRY')
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; currency: string } | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const tiers = [
        {
            name: "Foundation (MVP)",
            subtitle: "Hızlı Pazara Giriş",
            price: currency === 'TRY' ? "120.000" : "4.900",
            currencySymbol: currency === 'TRY' ? "₺" : "$",
            desc: "Temel işlevlere sahip, yüksek performanslı bir MVP ile fikrinizi doğrulayın ve ilk kullanıcılarınızı edinin.",
            icon: Zap,
            color: "indigo",
            features: [
                "Cross-Platform Temel Mimari",
                "UI/UX Tasarım Taslağı",
                "Temel Bulut Entegrasyonu",
                "App Store & Play Store Yayını"
            ],
            forWhom: "Fikrini hızlıca test etmek ve bütçesini kontrollü kullanmak isteyen startup'lar.",
            highlight: false
        },
        {
            name: "Growth (Full Scale)",
            subtitle: "Bağlılık & Performans",
            badge: "En Çok Tercih Edilen",
            price: currency === 'TRY' ? "250.000" : "9.900",
            currencySymbol: currency === 'TRY' ? "₺" : "$",
            desc: "Derinlemesine UX, animasyonlar ve gelişmiş özelliklerle kullanıcı sadakati sağlayan tam kapsamlı ürün.",
            icon: Crown,
            color: "cyan",
            features: [
                "Gelişmiş Animasyonlar & UX",
                "Çevrimdışı Çalışma (Offline-First)",
                "Full-Stack Bulut Altyapısı",
                "Ayrıntılı Analitik & İzleme"
            ],
            forWhom: "Pazarda güçlü bir yer edinmek ve kullanıcı deneyimini zirveye taşımak isteyen işletmeler.",
            highlight: true
        },
        {
            name: "Scale (Enterprise)",
            subtitle: "Sınırsız Ölçeklenebilirlik",
            price: currency === 'TRY' ? "Özel" : "Custom",
            currencySymbol: "",
            desc: "Karmaşık sistemlerle entegre, en yüksek güvenlik standartlarına sahip kurumsal mobil ekosistemler.",
            icon: InfinityIcon,
            color: "purple",
            features: [
                "Kurumsal Sistem Entegrasyonu",
                "Çok Katmanlı Güvenlik Katmanı",
                "Özel Backend & Otomasyon",
                "7/24 Teknik Destek & Bakım"
            ],
            forWhom: "Karmaşık operasyonları olan, yüksek güvenlik ve ölçek beklentisi olan kurumsal yapılar.",
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] md:text-xs font-bold text-cyan-400 tracking-[0.4em] uppercase">
                        Yatırım Seviyeleri
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                        Mobil Başarınızı İnşa Edin
                    </h2>
                    <div className="space-y-2">
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Her ürünün yolu farklı, hedefi birdir: <span className="text-white">Büyümek.</span>
                        </p>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Mevcut etabınıza uygun yaklaşımı birlikte belirleyelim.
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
                                        İçerik
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
                                <button 
                                    onClick={() => handlePlanClick(tier)}
                                    className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${tier.highlight ? `bg-${tier.color}-500 text-black hover:bg-${tier.color}-400 shadow-lg shadow-${tier.color}-500/20` : `bg-white/5 text-white hover:bg-white/10 border border-white/10 group-hover:border-${tier.color}-500/30 group-hover:text-${tier.color}-400 transition-colors`}`}
                                >
                                    {isNaN(parseInt(tier.price.replace(/[^0-9]/g, ''))) ? 'Projeyi Konuşalım' : 'Hemen Başla'} <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center border-t border-white/5 pt-16">
                    <p className="text-sm md:text-base text-gray-400 font-light">
                        Fiyatı değil, değer odaklı mobil stratejinizi konuşuyoruz. <br className="md:hidden" />
                        <span className="text-white/60"> Detayları ürününüzün kapsamına göre birlikte netleştiriyoruz.</span>
                    </p>
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
