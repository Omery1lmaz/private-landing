'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  Heart,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const t = useTranslations('footer')
  const socialLinks = [
    { key: 'linkedin', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { key: 'github', icon: Github, href: '#', color: 'hover:text-gray-300' },
    { key: 'twitter', icon: Twitter, href: '#', color: 'hover:text-blue-300' },
    { key: 'email', icon: Mail, href: 'mailto:hello@elitecodestudio.com', color: 'hover:text-cyan-400' },
  ]
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={footerRef} className="relative bg-[#030308] border-t border-white/5">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-12">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          {/* Main Section */}
          <div className="text-center mb-8">
            {/* Brand */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  EliteCode
                </span>
                {' '}{t('studio_name')}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                {t('description')}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/[0.08] hover:border-white/10 hover:scale-110`}
                    aria-label={t(`social_${social.key}`)}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>hello@elitecodestudio.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{t('location')}</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/5 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>{t('copyright_prefix')} {new Date().getFullYear()} EliteCode Studio.</span>
                <span>{t('made_with')}</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>{t('for_innovation')}</span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-cyan-400 transition-colors">{t('privacy_policy')}</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">{t('terms_of_service')}</a>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/[0.08] hover:border-cyan-500/20 transition-all duration-300"
                aria-label={t('back_to_top')}
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}