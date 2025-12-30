'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import { ArrowRight, Building2, Layers, ShoppingBag, Settings, Rocket, Globe, Users, Star, Shield } from 'lucide-react'

export default function WebDevHero() {
    const locale = useLocale()

    const content = {
        tr: {
            badge: "✨ Yeni Nesil Web Çözümleri",
            titlePart1: "Dijital Dünyada",
            titleHighlight: "Rakiplerinizi Geride Bırakın",
            subtitle: "İşinize özel, stratejik web çözümleri. Markanızın dijital yüzünü birlikte tasarlayalım.",
            ctaButton: "Ücretsiz Danışmanlık",
            ctaSecondary: "Projelerimi Gör",
            stat1Value: "500+",
            stat1Label: "Mutlu Müşteri",
            stat2Value: "99%",
            stat2Label: "Memnuniyet",
            stat3Value: "24/7",
            stat3Label: "Destek",
            cards: [
                { title: "Corporate Websites", icon: Building2 },
                { title: "SaaS & Product", icon: Layers },
                { title: "E-Commerce", icon: ShoppingBag },
                { title: "Custom Solutions", icon: Settings }
            ]
        },
        en: {
            badge: "✨ Next Gen Web Solutions",
            titlePart1: "Leave Your Competitors",
            titleHighlight: "Behind in the Digital World",
            subtitle: "Strategic web solutions tailored to your business. Let's design your brand's digital presence together.",
            ctaButton: "Free Consultation",
            ctaSecondary: "View Projects",
            stat1Value: "500+",
            stat1Label: "Happy Clients",
            stat2Value: "99%",
            stat2Label: "Satisfaction",
            stat3Value: "24/7",
            stat3Label: "Support",
            cards: [
                { title: "Corporate Websites", icon: Building2 },
                { title: "SaaS & Product", icon: Layers },
                { title: "E-Commerce", icon: ShoppingBag },
                { title: "Custom Solutions", icon: Settings }
            ]
        }
    }

    const text = content[locale as keyof typeof content] || content.en

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="relative bg-[#030810] min-h-screen flex items-center justify-center overflow-hidden">

            {/* Premium Background Effects */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] opacity-60" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] opacity-60" />
                <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] opacity-50" />

                {/* Gradient Mesh */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            radial-gradient(at 20% 30%, rgba(6, 182, 212, 0.15) 0px, transparent 50%),
                            radial-gradient(at 80% 70%, rgba(20, 184, 166, 0.12) 0px, transparent 50%),
                            radial-gradient(at 50% 50%, rgba(59, 130, 246, 0.08) 0px, transparent 50%)
                        `
                    }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8 hover:border-cyan-500/40 transition-all cursor-default">
                        <span className="text-sm font-medium text-cyan-300 tracking-wide">{text.badge}</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                        <span className="block mb-2">{text.titlePart1}</span>
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-[length:200%_auto]">
                                {text.titleHighlight}
                            </span>
                            {/* Underline decoration */}
                            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                                <path
                                    d="M2 10C50 4 100 4 150 7C200 10 250 6 298 3"
                                    stroke="url(#underlineGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                                <defs>
                                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop offset="50%" stopColor="#14b8a6" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
                        {text.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button
                            onClick={scrollToContact}
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold text-base rounded-full flex items-center gap-3 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                        >
                            <Rocket size={20} />
                            {text.ctaButton}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium text-base rounded-full flex items-center gap-3 transition-all backdrop-blur-sm">
                            <Globe size={18} />
                            {text.ctaSecondary}
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                        {[
                            { value: text.stat1Value, label: text.stat1Label, icon: Users },
                            { value: text.stat2Value, label: text.stat2Label, icon: Star },
                            { value: text.stat3Value, label: text.stat3Label, icon: Shield },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20 flex items-center justify-center">
                                    <stat.icon size={20} className="text-cyan-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* --- FLOATING SERVICE CARDS (Sides) --- */}

            {/* Left Side Cards */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 xl:left-16 hidden xl:flex flex-col gap-6">
                {text.cards.slice(0, 2).map((card, i) => {
                    const Icon = card.icon
                    return (
                        <div key={i} className="group flex items-center gap-4 bg-[#0c1119]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[200px] shadow-2xl hover:border-cyan-500/30 transition-all hover:-translate-y-1 cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon size={20} className="text-white" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-semibold text-white tracking-wide">{card.title}</span>
                        </div>
                    )
                })}
            </div>

            {/* Right Side Cards */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 xl:right-16 hidden xl:flex flex-col gap-6">
                {text.cards.slice(2, 4).map((card, i) => {
                    const Icon = card.icon
                    return (
                        <div key={i} className="group flex items-center gap-4 bg-[#0c1119]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[200px] shadow-2xl hover:border-cyan-500/30 transition-all hover:-translate-y-1 cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon size={20} className="text-white" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-semibold text-white tracking-wide">{card.title}</span>
                        </div>
                    )
                })}
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030810] to-transparent pointer-events-none" />

        </header>
    )
}
