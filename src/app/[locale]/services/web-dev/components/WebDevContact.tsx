'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import { Send, Mail, Phone, MapPin, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

export default function WebDevContact() {
    const locale = useLocale()
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const content = {
        tr: {
            badge: "Bizimle İletişime Geçin",
            title: "Projenizi Hayata",
            titleHighlight: "Geçirelim",
            subtitle: "Web siteniz veya uygulamanız hakkında sorularınız mı var? Size en kısa sürede dönüş yapalım.",
            namePlaceholder: "Adınız",
            emailPlaceholder: "E-posta adresiniz",
            phonePlaceholder: "Telefon numaranız",
            messagePlaceholder: "Projeniz hakkında bize biraz bilgi verin...",
            submitButton: "Mesaj Gönder",
            submitting: "Gönderiliyor...",
            successTitle: "Mesajınız Alındı!",
            successMessage: "En kısa sürede size dönüş yapacağız.",
            contactInfo: "İletişim Bilgileri",
            emailLabel: "E-posta",
            phoneLabel: "Telefon",
            addressLabel: "Adres",
            emailValue: "info@elitecode.dev",
            phoneValue: "+90 555 123 4567",
            addressValue: "İstanbul, Türkiye",
        },
        en: {
            badge: "Get In Touch",
            title: "Let's Bring Your",
            titleHighlight: "Project to Life",
            subtitle: "Have questions about your website or application? We'll get back to you as soon as possible.",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email address",
            phonePlaceholder: "Your phone number",
            messagePlaceholder: "Tell us a bit about your project...",
            submitButton: "Send Message",
            submitting: "Sending...",
            successTitle: "Message Received!",
            successMessage: "We'll get back to you shortly.",
            contactInfo: "Contact Information",
            emailLabel: "Email",
            phoneLabel: "Phone",
            addressLabel: "Address",
            emailValue: "info@elitecode.dev",
            phoneValue: "+90 555 123 4567",
            addressValue: "Istanbul, Turkey",
        }
    }

    const text = content[locale as keyof typeof content] || content.en

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <section id="contact" className="relative py-24 bg-[#030810] overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                        <Sparkles size={14} className="text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-300">{text.badge}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {text.title}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                            {text.titleHighlight}
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        {text.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Form */}
                    <div className="bg-[#0a0f18]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle size={32} className="text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{text.successTitle}</h3>
                                <p className="text-gray-400">{text.successMessage}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        placeholder={text.namePlaceholder}
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <input
                                        type="email"
                                        placeholder={text.emailPlaceholder}
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder={text.phonePlaceholder}
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        placeholder={text.messagePlaceholder}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            {text.submitting}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            {text.submitButton}
                                            <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white mb-6">{text.contactInfo}</h3>

                        {[
                            { icon: Mail, label: text.emailLabel, value: text.emailValue, color: 'cyan' },
                            { icon: Phone, label: text.phoneLabel, value: text.phoneValue, color: 'teal' },
                            { icon: MapPin, label: text.addressLabel, value: text.addressValue, color: 'blue' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-5 p-5 bg-[#0a0f18]/60 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-${item.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon size={24} className={`text-${item.color}-400`} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                                    <div className="text-lg font-semibold text-white">{item.value}</div>
                                </div>
                            </div>
                        ))}

                        {/* Decorative Card */}
                        <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-sm text-green-400 font-medium">Online</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                {locale === 'tr'
                                    ? 'Genellikle 24 saat içinde yanıt veriyoruz. Acil durumlar için bizi arayabilirsiniz.'
                                    : 'We usually respond within 24 hours. For urgent matters, feel free to call us.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
