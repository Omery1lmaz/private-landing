'use client'

import { CheckSquare, Filter, Layout, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ProjectManagementShowcase() {
  const t = useTranslations('project_management_showcase')
  return (
    <section className="relative py-24 px-6 bg-[#030308] overflow-hidden">
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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Monitor Progress */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400">
              <Layout className="w-4 h-4" />
              <span>{t('project_management')}</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t('monitor_progress')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  {t('faster_than_ever')}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                {t('description')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-colors group">
                <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">100%</div>
                <div className="text-gray-400 text-sm">{t('increase_progress_tracking')}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-colors group">
                <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">10X</div>
                <div className="text-gray-400 text-sm">{t('increase_productivity')}</div>
              </div>
            </div>

            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-2">
              {t('start_trial')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Project Timeline & Content */}
          <div className="space-y-8">
            {/* Project Timeline */}
            <div className="w-full rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {t('project_timeline')}
              </h3>

              {/* Timeline months */}
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'].map((month) => (
                  <div key={month} className="flex-shrink-0 text-gray-500 text-xs font-medium min-w-[60px] text-center">{month}</div>
                ))}
              </div>

              {/* Timeline bars */}
              <div className="space-y-5">
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-gradient-to-r from-white/5 to-white/10 rounded-lg flex items-center px-4 border border-white/5">
                      <span className="text-gray-300 text-sm font-medium">{t('design_system')}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-gradient-to-r from-cyan-500/10 to-cyan-500/20 rounded-lg flex items-center px-4 border border-cyan-500/20">
                      <span className="text-cyan-100 text-sm font-medium">{t('frontend_dev')}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-gradient-to-r from-white/5 to-white/10 rounded-lg flex items-center px-4 border border-white/5">
                      <span className="text-gray-300 text-sm font-medium">{t('backend_integration')}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Organization */}
            <div className="w-full rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
              {/* Navigation Panel */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="hidden md:block w-48 space-y-1">
                  <div className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">{t('all_projects')}</div>
                  <div className="px-4 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5 cursor-pointer transition-colors">{t('active')}</div>
                  <div className="px-4 py-2 rounded-lg text-gray-400 text-sm hover:bg-white/5 cursor-pointer transition-colors">{t('completed')}</div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="space-y-3">
                    {[
                      { status: 'Active', assignee: 'Alex M.', project: 'Dashboard', priority: 'High' },
                      { status: 'Review', assignee: 'Sarah K.', project: 'Landing', priority: 'Medium' },
                      { status: 'Done', assignee: 'Mike R.', project: 'Mobile App', priority: 'Low' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${item.status === 'Active' ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' :
                            item.status === 'Review' ? 'bg-teal-500' :
                              'bg-gray-500'
                            }`} />
                          <span className="text-sm text-gray-300 font-medium">{item.project}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500 hidden sm:block">{item.assignee}</span>
                          <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-medium ${item.priority === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            item.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                              'bg-green-500/10 text-green-400 border border-green-500/20'
                            }`}>{item.priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "smart_priority",
                "custom_labeling",
                "advanced_filtering",
                "visual_categorization"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckSquare className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-300">{t(feature)}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
