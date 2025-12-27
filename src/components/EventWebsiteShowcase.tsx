'use client'

import { Calendar, FileText, Bell, Video, Share2, Users, Zap, CheckSquare2 } from 'lucide-react'

export default function EventWebsiteShowcase() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a1a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Top-Left: Web Development Features */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-2">
              Website Features
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Explore Our Web Development Solutions
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Our modern web solutions allow businesses to easily manage and showcase their services. We offer a user-friendly interface where clients can explore project details, track progress, and access their digital assets.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-purple-500/30">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-base">Project Timeline</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Easily track and manage your project milestones with our interactive timeline.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-blue-500/30">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-base">Real-time Analytics</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Gain access to detailed performance metrics that will elevate your business insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-yellow-500/30">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                  <Bell className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-base">Progress Updates</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Stay informed with real-time project updates and milestone notifications.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-red-500/30">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                  <Video className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-base">Live Support</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Experience seamless communication from anywhere with our live support system.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top-Right: Project Checklist */}
          <div className="flex items-start justify-end">
            <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl shadow-purple-500/20" style={{ boxShadow: '0 20px 60px rgba(139, 92, 246, 0.15)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <CheckSquare2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Checklist</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center border border-purple-500/40">
                      <FileText className="w-4 h-4 text-purple-300" />
                    </div>
                    <span className="text-white font-medium">Business</span>
                  </div>
                  <div className="ml-11 space-y-3">
                    <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-white/5 checked:bg-purple-500 checked:border-purple-500" />
                      <span>SEO optimization completed</span>
                    </label>
                    <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-white/5 checked:bg-purple-500 checked:border-purple-500" />
                      <span>Performance testing passed</span>
                    </label>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center border border-pink-500/40">
                      <div className="w-4 h-4 rounded-full bg-pink-300" />
                    </div>
                    <span className="text-white font-medium">Private</span>
                  </div>
                  <div className="ml-11 space-y-3">
                    <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-white/5 checked:bg-pink-500 checked:border-pink-500" />
                      <span>Mobile responsive design</span>
                    </label>
                    <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-white/5 checked:bg-pink-500 checked:border-pink-500" />
                      <span>Security audit completed</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Left: Create Project Form */}
          <div className="flex items-start">
            <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl shadow-blue-500/20" style={{ boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Start New Project</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Project Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition-all"
                    placeholder="Enter project name"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Project Type</label>
                  <div className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 inline-block">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">Web Development</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Theme Color</label>
                  <div className="flex gap-2.5">
                    {['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'].map((color, idx) => (
                      <div
                        key={idx}
                        className={`w-9 h-9 rounded-full cursor-pointer border-2 transition-all ${
                          idx === 4 ? 'border-white/60 scale-110 ring-2 ring-blue-500/50' : 'border-transparent hover:border-white/30'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Launch Date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value="Friday, 14 Oct 2024"
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white pr-10 cursor-default"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">Start Time</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value="10:00"
                        readOnly
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white pr-8 cursor-default"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">End Time</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value="10:30"
                        readOnly
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white pr-8 cursor-default"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Right: Key Features */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-2">
              Website Features
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Key Features of Our Platform
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Easily manage and track your digital projects with our comprehensive platform. Clients can view project details, monitor progress, access analytics, personalize their dashboard and receive notifications for important milestones.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-green-500/30">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                  <Share2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-base">API Integration</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Connect and integrate with various third-party services and platforms seamlessly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-orange-500/30">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 text-base">Team Collaboration</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">The platform highlights team member profiles, roles, and collaboration tools for efficient project management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
