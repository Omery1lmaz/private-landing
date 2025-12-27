'use client'

import { CheckSquare, Filter, Search, Star, TrendingUp, BarChart3, Target, Zap } from 'lucide-react'

export default function ProjectManagementShowcase() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top-Left: Monitor Progress */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Monitor Progress Faster Than Ever.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Instantly access real-time updates to track project progress and make quick adjustments. Our platform provides comprehensive insights into your digital projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <div className="text-6xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-400 text-sm">Increase in Progress Tracking</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <div className="text-6xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10X</div>
                <div className="text-gray-400 text-sm">Increase in Productivity</div>
              </div>
            </div>

            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
              Start your 7 day free trial
            </button>
          </div>

          {/* Top-Right: Project Timeline */}
          <div className="flex items-start justify-end">
            <div className="w-full max-w-2xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
              <h3 className="text-white font-semibold text-lg mb-6">Project Timeline</h3>
              
              {/* Timeline months */}
              <div className="flex gap-3 mb-6 overflow-x-auto pb-3 scrollbar-hide">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'].map((month, idx) => (
                  <div key={month} className="flex-shrink-0 text-gray-400 text-xs font-medium min-w-[70px] text-center">
                    {month}
                  </div>
                ))}
              </div>

              {/* Timeline bars */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg flex items-center px-4 border border-gray-600/50">
                      <span className="text-white text-sm font-medium">Design & Development</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg flex items-center px-4 border border-blue-500/50">
                      <span className="text-white text-sm font-medium">SEO Optimization</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg flex items-center px-4 border border-gray-600/50">
                      <span className="text-white text-sm font-medium">Testing & Launch</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Left: Task Organization */}
          <div className="flex items-start">
            <div className="w-full max-w-2xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
              {/* Navigation Panel */}
              <div className="flex gap-6 mb-6">
                <div className="w-52 space-y-2">
                  <div className="px-4 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/20">Favorites</div>
                  <div className="px-4 py-2.5 rounded-lg text-gray-400 text-sm hover:bg-white/5 cursor-pointer transition-colors">My Projects</div>
                  <div className="px-4 py-2.5 rounded-lg text-gray-400 text-sm hover:bg-white/5 cursor-pointer transition-colors">Personal</div>
                  <div className="px-4 py-2.5 rounded-lg text-gray-400 text-sm hover:bg-white/5 cursor-pointer transition-colors">Templates</div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="grid grid-cols-5 gap-3 text-xs text-gray-400 mb-3 font-medium">
                      <div>Status</div>
                      <div>Assignee</div>
                      <div>Project</div>
                      <div>Priority</div>
                      <div>Category</div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { status: 'Active', assignee: 'John Doe', project: 'Web Dev', priority: 'High', category: 'Frontend' },
                        { status: 'In Progress', assignee: 'Jane Smith', project: 'SEO', priority: 'Medium', category: 'Marketing' },
                        { status: 'Completed', assignee: 'Mike Johnson', project: 'Mobile App', priority: 'Low', category: 'Development' },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-5 gap-3 text-sm text-gray-300 items-center py-2 hover:bg-white/5 rounded px-2 transition-colors">
                          <div className={`px-2 py-1 rounded text-xs font-medium inline-block w-fit ${
                            item.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                            item.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>{item.status}</div>
                          <div className="text-sm">{item.assignee}</div>
                          <div className="text-sm">{item.project}</div>
                          <div className={`px-2 py-1 rounded text-xs font-medium inline-block w-fit ${
                            item.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                            item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>{item.priority}</div>
                          <div className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-medium inline-block w-fit">{item.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {['Status', 'Assignee', 'Project', 'Priority', 'Category', 'Project Status'].map((filter) => (
                  <button
                    key={filter}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Filter className="w-3 h-3" />
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom-Right: Powerful Task Management Tools */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-purple-400 leading-tight">
              Powerful Project Management Tools.
            </h2>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckSquare className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">Easily sort projects by priority and status for better organization.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckSquare className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">Organize tasks with customizable labels for quick reference and filtering.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckSquare className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">Use visual labels to distinguish project categories and types.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckSquare className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">Quickly find projects using the advanced search and filter function.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
