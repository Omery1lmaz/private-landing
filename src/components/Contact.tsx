'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  Building,
  ChevronDown,
  Video,
  Calendar,
  ExternalLink,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

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

export default function Contact() {
  const t = useTranslations('contact_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

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
    'service_web_development',
    'service_seo_optimization',
    'service_ai_solutions',
    'service_mobile_app',
    'service_e_commerce',
    'service_consulting',
    'service_other',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        [formRef.current, infoRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('validation_name_required')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('validation_email_required')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('validation_email_invalid')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('validation_message_required')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('validation_message_min_length')
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

    // Clear error when user starts typing
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
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-sm text-cyan-400 mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>{t('badge')}</span>
              </div>
              <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-2 text-white">
                {t('title_part1')}{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {t('title_part2')}
                </span>
              </h2>
              <p className="text-md text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Calendly CTA */}
              <div className="flex flex-col items-start justify-center bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Takvimden Randevu Al</h3>
                <p className="text-gray-400 mb-6">Takvimimize bağlanıp uygun bir zaman seçin. Görüşme Zoom/Meet üzerinden planlanacaktır.</p>
                <a
                  href="https://calendly.com/your-calendly-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:opacity-95 transition"
                >
                  Takvimden Randevu Al
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Email form */}
              <div ref={formRef} className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{t('form_title')}</h3>

                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 rounded-lg bg-green-500/10 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">{t('submit_success')}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">{t('submit_error')}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-300 mb-1">{t('label_name')}</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/[0.04] rounded-lg text-white placeholder-gray-400"
                      placeholder={t('placeholder_name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-1">{t('label_email')}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/[0.04] rounded-lg text-white placeholder-gray-400"
                      placeholder={t('placeholder_email')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-300 mb-1">{t('label_message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 bg-white/[0.04] rounded-lg text-white placeholder-gray-400"
                      placeholder={t('placeholder_message')}
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold"
                    >
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      {isSubmitting ? t('button_submitting') : t('button_submit')}
                    </button>
                    <a
                      href="mailto:hello@elitecodestudio.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 text-white"
                    >
                      <Mail className="w-4 h-4" />
                      Email Gönder
                    </a>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
