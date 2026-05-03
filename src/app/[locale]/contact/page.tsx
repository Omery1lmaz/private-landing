'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
    Mail,
    Send,
    CheckCircle,
    AlertCircle,
    Loader2,
    MessageSquare,
    ArrowLeft,
    Calendar,
    ExternalLink,
    Clock,
    Shield,
    Zap,
} from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface FormData {
    name: string
    email: string
    company: string
    message: string
    service: string
}

interface FormErrors {
    name?: string
    email?: string
    message?: string
}

export default function ContactPage() {
    const t = useTranslations('contact_section')
    const locale = useLocale()
    const sectionRef = useRef<HTMLElement>(null)
    const formRef = useRef<HTMLDivElement>(null)

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const services = [
        { value: 'web_development', label: 'Web Gelistirme' },
        { value: 'seo_optimization', label: 'SEO Optimizasyonu' },
        { value: 'ai_solutions', label: 'AI Cozumleri' },
        { value: 'mobile_app', label: 'Mobil Uygulama' },
        { value: 'e_commerce', label: 'E-Ticaret' },
        { value: 'other', label: 'Diger' },
    ]

    const features = [
        { icon: Clock, title: '24 Saat Icinde Donus', desc: 'Hizli geri bildirim' },
        { icon: Shield, title: 'Guvenli Iletisim', desc: 'Verileriniz korunur' },
        { icon: Zap, title: 'Hizli Baslangic', desc: 'Projeye hemen baslayin' },
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".animate-in",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Isim gerekli'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email gerekli'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Gecerli bir email girin'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mesaj gerekli'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Mesaj en az 10 karakter olmali'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: '',
                    service: ''
                })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#030308]">
            <Navbar />

            <section ref={sectionRef} className="relative pt-32 pb-24 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6">
                    <Link
                        href={`/${locale}`}
                        className="animate-in inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Ana Sayfa</span>
                    </Link>

                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 animate-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
                                <MessageSquare className="w-4 h-4" />
                                <span>Iletisime Gecin</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                                Projenizi{' '}
                                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                    Birlikte Gerceklestirelim
                                </span>
                            </h1>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Fikrinizi dinlemek ve size en uygun cozumu sunmak icin buradayiz. Formu doldurun veya dogrudan randevu alin.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="animate-in p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm hover:border-cyan-500/20 transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="animate-in flex flex-col bg-gradient-to-br from-cyan-500/10 to-teal-500/5 border border-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 lg:p-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                                    <Calendar className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Takvimden Randevu Al</h3>
                                <p className="text-gray-400 mb-8 flex-1">
                                    Takvimimize baglanip uygun bir zaman secin. Gorusme Zoom/Meet uzerinden planlanacaktir. 30 dakikalik ucretsiz danismanlik.
                                </p>
                                <a
                                    href="https://calendly.com/your-calendly-username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Takvimden Randevu Al
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>

                            <div ref={formRef} className="animate-in bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-3xl p-8 lg:p-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Mesaj Gonderin</h3>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        <span className="text-emerald-400">Mesajiniz basariyla gonderildi!</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-400" />
                                        <span className="text-red-400">Bir hata olustu. Lutfen tekrar deneyin.</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm text-gray-300 mb-2 font-medium">Isim *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 bg-white/[0.04] border ${errors.name ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors`}
                                                placeholder="Adiniz"
                                            />
                                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-300 mb-2 font-medium">Email *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 bg-white/[0.04] border ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors`}
                                                placeholder="email@example.com"
                                            />
                                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="company" className="block text-sm text-gray-300 mb-2 font-medium">Sirket</label>
                                            <input
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                                placeholder="Sirket adiniz"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-sm text-gray-300 mb-2 font-medium">Hizmet</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-[#0a0a0a]">Secin...</option>
                                                {services.map((s) => (
                                                    <option key={s.value} value={s.value} className="bg-[#0a0a0a]">{s.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm text-gray-300 mb-2 font-medium">Mesaj *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 bg-white/[0.04] border ${errors.message ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none`}
                                            placeholder="Projeniz hakkinda bilgi verin..."
                                        />
                                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                            {isSubmitting ? 'Gonderiliyor...' : 'Mesaji Gonder'}
                                        </button>
                                        <a
                                            href="mailto:hello@arvexalabs.com"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.08] transition-all"
                                        >
                                            <Mail className="w-5 h-5" />
                                            Email Gonder
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
