 'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Clock, CheckCircle, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoCTA() {
  const t = useTranslations('ai_seo')
  const locale = useLocale()
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.cta-features',
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  const benefits = [
    {
      icon: <Clock className="w-4 h-4 text-cyan-400" />,
      text: t('cta.benefit1') || '7 gün içinde detaylı analiz'
    },
    {
      icon: <CheckCircle className="w-4 h-4 text-green-400" />,
      text: t('cta.benefit2') || 'Özelleştirilmiş strateji planı'
    },
    {
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
      text: t('cta.benefit3') || 'Hemen uygulanabilir öneriler'
    }
  ]

  return (
    <div ref={ctaRef} className="relative">
      {/* Sticky container for desktop */}
      <div className="sticky top-8">
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-xl overflow-hidden group">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="cta-content">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t('cta.title') || 'AI-SEO Danışmanlığı'}
                  </h3>
                  <p className="text-sm text-violet-300">
                    {t('cta.subtitle') || 'Ücretsiz Strateji Görüşmesi'}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('cta.description') || 'İş hedeflerinize göre hazırlanmış bir AI-SEO stratejisi ve uygulama planı alabilirsiniz. Web sitenizi analiz edip, büyüme fırsatlarını belirleyelim.'}
              </p>

              {/* Benefits */}
              <div className="cta-features space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-black/30 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-sm text-gray-300">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={`/${locale}/#contact`}
                className="group relative w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <span>{t('cta.button') || 'Ücretsiz Görüşme Başlat'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Note */}
              <div className="mt-6 p-4 rounded-xl bg-black/20 border border-white/5">
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t('cta.note') || 'Hızlı değerlendirme için web sitenizin URL\'sini ve mevcut SEO durumunuz hakkında bilgi paylaşabilirsiniz.'}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-violet-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  )
}


