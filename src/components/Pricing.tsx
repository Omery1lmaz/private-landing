'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Check,
  Star,
  Zap,
  Crown,
  ArrowRight,
  Sparkles,
  MessageSquare, // Added for badge icon
} from 'lucide-react'
import { useTranslations } from 'next-intl' // Added for i18n

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const t = useTranslations('pricing_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const plans = [
    {
      name: t('plan1_name'),
      subtitle: t('plan1_subtitle'),
      price: t('plan1_price'),
      period: t('plan_period'),
      description: t('plan1_description'),
      icon: Star,
      color: 'cyan',
      popular: false,
      features: [
        t('plan1_feature1'),
        t('plan1_feature2'),
        t('plan1_feature3'),
        t('plan1_feature4'),
        t('plan1_feature5'),
        t('plan1_feature6'),
      ],
      cta: t('plan1_cta'),
    },
    {
      name: t('plan2_name'),
      subtitle: t('plan2_subtitle'),
      price: t('plan2_price'),
      period: t('plan_period'),
      description: t('plan2_description'),
      icon: Zap,
      color: 'teal',
      popular: true,
      features: [
        t('plan2_feature1'),
        t('plan2_feature2'),
        t('plan2_feature3'),
        t('plan2_feature4'),
        t('plan2_feature5'),
        t('plan2_feature6'),
        t('plan2_feature7'),
        t('plan2_feature8'),
      ],
      cta: t('plan2_cta'),
    },
    {
      name: t('plan3_name'),
      subtitle: t('plan3_subtitle'),
      price: t('plan3_price'),
      period: t('plan_period'),
      description: t('plan3_description'),
      icon: Crown,
      color: 'cyan',
      popular: false,
      features: [
        t('plan3_feature1'),
        t('plan3_feature2'),
        t('plan3_feature3'),
        t('plan3_feature4'),
        t('plan3_feature5'),
        t('plan3_feature6'),
        t('plan3_feature7'),
        t('plan3_feature8'),
        t('plan3_feature9'),
      ],
      cta: t('plan3_cta'),
    },
  ]

  const faqs = [
    {
      question: t('faq1_question'),
      answer: t('faq1_answer'),
    },
    {
      question: t('faq2_question'),
      answer: t('faq2_answer'),
    },
    {
      question: t('faq3_question'),
      answer: t('faq3_answer'),
    },
    {
      question: t('faq4_question'),
      answer: t('faq4_answer'),
    },
  ]

  const contactCta = {
    badge: t('contact_cta_badge'),
    title: t('contact_cta_title'),
    button: t('contact_cta_button'),
  }

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

      const cards = gsap.utils.toArray('.pricing-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        faqRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
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
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title_part1')}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t('title_part2')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Pricing Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-20">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              const isCyan = plan.color === 'cyan'

              return (
                <div
                  key={index}
                  className={`pricing-card group relative ${plan.popular ? 'scale-105 z-10' : ''}`}
                >
                    <div className={`relative h-full p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border ${plan.popular ? 'border-cyan-500/30' : 'border-white/[0.08]'} transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:scale-[1.02] hover:shadow-2xl overflow-visible`}>
                    {/* Animated Top Border */}
                    <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden rounded-t-2xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-${plan.color}-400 to-transparent animate-shimmer`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    </div>

                    {/* Gradient Glow on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `radial-gradient(ellipse at top left, ${isCyan ? 'rgba(6, 182, 212, 0.1)' : 'rgba(20, 184, 166, 0.1)'} 0%, transparent 50%)`
                      }}
                    />

                    {plan.popular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                        {t('popular_badge')}
                      </div>
                    )}

                    <div className="relative z-10 text-center">
                      <div className="mb-4">
                        <div
                          className={`w-16 h-16 md:w-18 md:h-18 mx-auto rounded-2xl p-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                          style={{
                            background: `linear-gradient(135deg, ${isCyan ? 'rgba(6, 182, 212, 0.15)' : 'rgba(20, 184, 166, 0.15)'} 0%, ${isCyan ? 'rgba(6, 182, 212, 0.05)' : 'rgba(20, 184, 166, 0.05)'} 100%)`,
                            border: `1px solid ${isCyan ? 'rgba(6, 182, 212, 0.2)' : 'rgba(20, 184, 166, 0.2)'}`, // Changed to 'rgba(20, 184, 166, 0.2)' for consistency
                            boxShadow: `0 0 0 0 ${isCyan ? 'rgba(6, 182, 212, 0)' : 'rgba(20, 184, 166, 0)'}`, // Changed to 'rgba(20, 184, 166, 0)' for consistency
                          }}
                        >
                          <Icon className={`w-full h-full text-${plan.color}-400`} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>

                      <div className="flex flex-col items-center mb-6">
                        <span className="text-5xl font-bold text-white"><sup className="text-2xl font-normal">$</sup>{plan.price}</span>
                        <span className="text-sm text-gray-400 mt-1">{plan.period}</span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-[280px] mx-auto">
                        {plan.description}
                      </p>

                      <ul className="text-left space-y-3 mb-10">
                        {plan.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-center gap-3 text-gray-300">
                            <Check className={`w-5 h-5 text-${plan.color}-400 flex-shrink-0`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={scrollToContact}
                        className={`group relative w-full bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 hover:from-${plan.color}-400 hover:to-${plan.color}-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-${plan.color}-500/25 hover:shadow-${plan.color}-500/40 hover:-translate-y-0.5`}
                      >
                        <span className="relative z-10">{plan.cta}</span>
                        <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-20 md:mt-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 backdrop-blur-sm mb-4">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>{contactCta.badge}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {contactCta.title}
              </span>
            </h3>
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <span className="relative z-10">{contactCta.button}</span>
              <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* FAQ Section */}
          <div ref={faqRef} className="max-w-4xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-10">{t('faq_title')}</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                  <p className="text-gray-400 text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
