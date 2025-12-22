'use client'

import dynamic from 'next/dynamic'
import { Globe, Zap, Shield, Clock, Users, Activity, Server } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Globe3D = dynamic(() => import('./Globe3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent animate-pulse flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
    </div>
  )
})

export default function GlobeSection() {
  const t = useTranslations('globe_section')

  return (
    <section className="relative overflow-hidden bg-[#030308] py-24">
      {/* Grid background - like header */}
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
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400">
              <Server className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('title')}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('subtitle')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard icon={<Activity className="w-5 h-5" />} label={t('uptime_label')} value="99.8%" />
              <StatCard icon={<Clock className="w-5 h-5" />} label={t('latency_label')} value="<2s" />
              <StatCard icon={<Globe className="w-5 h-5" />} label={t('regions_label')} value="14+" />
              <StatCard icon={<Users className="w-5 h-5" />} label={t('users_label')} value="50+" />
              <StatCard icon={<Zap className="w-5 h-5" />} label={t('api_calls_label')} value="500+" />
              <StatCard icon={<Shield className="w-5 h-5" />} label={t('security_label')} value="%30+" />
            </div>

            {/* Data center indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-sm text-gray-400">{t('america')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <span className="text-sm text-gray-400">{t('europe')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                <span className="text-sm text-gray-400">{t('asia')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.9s' }} />
                <span className="text-sm text-gray-400">{t('turkey')}</span>
              </div>
            </div>
          </div>

          {/* Right - 3D Globe */}
          <div className="relative">
            {/* Glow effect behind globe */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-500/10 rounded-full blur-[80px]" />
            
            {/* Globe container */}
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px]">
              <Globe3D />
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/10 pointer-events-none" style={{ margin: '10%' }} />
              <div className="absolute inset-0 rounded-full border border-cyan-500/5 pointer-events-none" style={{ margin: '5%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all">
      <div className="flex items-center gap-2 mb-1 text-cyan-400">
        {icon}
        <span className="text-xs uppercase tracking-wide text-gray-500">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  )
}
