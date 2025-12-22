 'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AlertTriangle, CheckCircle, TrendingUp, Target, Zap, Users, Brain, BarChart3, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  color?: string
}

function StatCard({ icon, label, value, color = 'cyan' }: StatCardProps) {
  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/30 text-cyan-400',
    red: 'border-red-500/20 hover:border-red-500/30 text-red-400',
    green: 'border-green-500/20 hover:border-green-500/30 text-green-400',
    violet: 'border-violet-500/20 hover:border-violet-500/30 text-violet-400'
  }

  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm hover:bg-white/[0.06] ${colorClasses[color as keyof typeof colorClasses]} transition-all`}>
      <div className="flex items-center gap-2 mb-1 text-gray-400">
        {icon}
        <span className="text-xs uppercase tracking-wide text-gray-500">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  )
}

export default function AiSeoDetails() {
  const t = useTranslations('ai_seo')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.fromTo(
        '.details-section',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate stat cards with stagger
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const problemPoints = [
    {
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
      title: t('details.problem1_title') || 'Organik Trafik Düşüşü',
      description: t('details.problem1') || 'Arama algoritmalarındaki değişiklikler nedeniyle organik trafiğin azalması'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-orange-400" />,
      title: t('details.problem2_title') || 'İçerik Ölçeği Yetersizliği',
      description: t('details.problem2') || 'Rakip sitelerin daha fazla ve kaliteli içerik üretmesi'
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      title: t('details.problem3_title') || 'Teknik Borçlar',
      description: t('details.problem3') || 'Eski teknolojiler ve optimizasyon eksiklikleri'
    }
  ]

  const solutionPoints = [
    {
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      title: t('details.solution1_title') || 'AI Destekli İçerik Stratejisi',
      description: t('details.solution1') || 'Veriye dayalı hedef kitle analizi ve içerik optimizasyonu'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      title: t('details.solution2_title') || 'Otomasyon ile Ölçekleme',
      description: t('details.solution2') || 'Tekrarlayan görevleri otomatikleştirerek verimliliği artırma'
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: t('details.solution3_title') || 'Teknik Optimizasyon',
      description: t('details.solution3') || 'Site hızı, mobil uyumluluk ve SEO teknik iyileştirmeler'
    }
  ]

  const results = [
    t('details.result1') || 'Sürdürülebilir organik trafik artışı',
    t('details.result2') || 'Daha iyi dönüşüm sağlayan içerikler',
    t('details.result3') || 'Daha düşük içerik üretim maliyeti',
    t('details.result4') || 'Rakip analizleri ve trend takibi'
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-24">
      {/* Grid background - like GlobeSection */}
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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-green-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 space-y-32">
        {/* Problem Section */}
        <div className="details-section grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <span>{t('details.problem_badge') || 'SEO Zorlukları'}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('details.problem_title') || 'Karşılaşılan Problemler'}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('details.problem_subtitle') || 'Modern SEO zorluklarının üstesinden gelmek için gelişmiş çözümler'}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard icon={<TrendingUp className="w-5 h-5" />} label={t('details.stat1_label') || 'Trafik'} value={t('details.stat1_value') || '-40%'} color="red" />
              <StatCard icon={<Target className="w-5 h-5" />} label={t('details.stat2_label') || 'Konversiyon'} value={t('details.stat2_value') || '-25%'} color="red" />
              <StatCard icon={<Zap className="w-5 h-5" />} label={t('details.stat3_label') || 'Verimlilik'} value={t('details.stat3_value') || '-60%'} color="red" />
            </div>

            {/* Problem indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {problemPoints.map((problem, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span className="text-sm text-gray-400">{problem.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/10 rounded-full blur-[80px]" />

            {/* Content card */}
            <div className="relative rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-orange-500/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">SEO Kriz Noktaları</h3>
                    <p className="text-gray-400 text-sm">Tespit edilen ana sorunlar</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {problemPoints.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-red-500/10">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">{problem.title}</h4>
                        <p className="text-gray-400 text-sm">{problem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="details-section grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400">
              <Brain className="w-4 h-4" />
              <span>{t('details.solution_badge') || 'AI Çözümleri'}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('details.solution_title') || 'Çözümümüz'}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('details.solution_subtitle') || 'AI teknolojisi ve otomasyon ile SEO başarınızı maksimize edin'}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard icon={<Rocket className="w-5 h-5" />} label={t('details.sol_stat1_label') || 'Hız'} value={t('details.sol_stat1_value') || '3x'} color="cyan" />
              <StatCard icon={<BarChart3 className="w-5 h-5" />} label={t('details.sol_stat2_label') || 'Verim'} value={t('details.sol_stat2_value') || '80%'} color="cyan" />
              <StatCard icon={<Target className="w-5 h-5" />} label={t('details.sol_stat3_label') || 'Doğruluk'} value={t('details.sol_stat3_value') || '95%'} color="cyan" />
            </div>

            {/* Solution indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {solutionPoints.map((solution, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span className="text-sm text-gray-400">{solution.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/10 rounded-full blur-[80px]" />

            {/* Content card */}
            <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Güçlendirmesi</h3>
                    <p className="text-gray-400 text-sm">Otomasyon teknolojileri</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {solutionPoints.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-cyan-500/10">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-medium mb-1">{solution.title}</h4>
                        <p className="text-gray-400 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Value proposition */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-1 h-full min-h-[3rem] rounded-full flex-shrink-0 bg-cyan-500" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      {t('details.value_title') || 'STRATEJİK DEĞER'}
                    </p>
                    <p className="text-base font-medium leading-relaxed text-cyan-400">
                      {t('details.value_desc') || 'Otomasyon ve AI teknolojisi ile manuel SEO çalışmalarınızı %80 azaltın'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="details-section grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span>{t('details.results_badge') || 'Sonuç Odaklı'}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('details.results_title') || 'Beklenen Sonuçlar'}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('details.results_subtitle') || 'Stratejik yaklaşımımızla elde edeceğiniz somut faydalar'}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard icon={<TrendingUp className="w-5 h-5" />} label={t('details.res_stat1_label') || 'Trafik'} value={t('details.res_stat1_value') || '+300%'} color="green" />
              <StatCard icon={<Target className="w-5 h-5" />} label={t('details.res_stat2_label') || 'Konversiyon'} value={t('details.res_stat2_value') || '+150%'} color="green" />
              <StatCard icon={<Zap className="w-5 h-5" />} label={t('details.res_stat3_label') || 'ROI'} value={t('details.res_stat3_value') || '+400%'} color="green" />
            </div>

            {/* Results indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-400">{t('details.results_indicator1') || 'Sürdürülebilir Büyüme'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <span className="text-sm text-gray-400">{t('details.results_indicator2') || 'Mali Tasarruf'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <span className="text-sm text-gray-400">{t('details.results_indicator3') || 'Rekabet Avantajı'}</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/10 rounded-full blur-[80px]" />

            {/* Content card */}
            <div className="relative rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Başarı Metrikleri</h3>
                    <p className="text-gray-400 text-sm">Ölçülebilir sonuçlar</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-green-500/10">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 font-medium leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


