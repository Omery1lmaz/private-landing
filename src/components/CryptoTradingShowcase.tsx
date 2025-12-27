'use client'

import { CreditCard, Wallet, TrendingUp, Globe, Smartphone, Zap, Code, BarChart } from 'lucide-react'

export default function CryptoTradingShowcase() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0d2818] via-[#1a4d3a] to-[#0d2818] overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(34, 197, 94, 0.15) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(34, 197, 94, 0.15) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(34, 197, 94, 0.15) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(34, 197, 94, 0.15) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Text Block */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-green-400/20 border border-green-400/30 text-green-300 text-sm font-medium mb-4">
              DIGITAL SOLUTIONS HUB
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Build Your Digital Presence with EliteCode
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Create powerful digital solutions with EliteCode, your gateway to online success. With a wide range of web development, mobile app, and SEO services, EliteCode offers a seamless and secure platform for businesses worldwide to build, optimize, and manage their digital assets.
            </p>
          </div>

          {/* Right: Platform Interface */}
          <div className="flex items-start justify-end">
            <div className="w-full max-w-2xl rounded-2xl bg-[#0a1f14] backdrop-blur-xl border border-green-500/20 p-6 shadow-2xl">
              {/* Navigation Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-green-500/20">
                <div className="text-green-400 font-bold text-xl">EliteCode</div>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="hover:text-green-400 cursor-pointer transition-colors">Web Dev</span>
                  <span className="hover:text-green-400 cursor-pointer transition-colors">Mobile</span>
                  <span className="hover:text-green-400 cursor-pointer transition-colors">SEO</span>
                  <span className="hover:text-green-400 cursor-pointer transition-colors">Automation</span>
                  <span className="hover:text-green-400 cursor-pointer transition-colors">Analytics</span>
                  <span className="hover:text-green-400 cursor-pointer transition-colors">Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400/30" />
                  <button className="px-4 py-1.5 rounded text-sm text-gray-300 hover:text-white transition-colors">Log In</button>
                  <button className="px-4 py-1.5 rounded bg-green-500 text-white text-sm hover:bg-green-600 transition-colors">Get Started</button>
                </div>
              </div>

              {/* Project Dashboard */}
              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-4">Project Dashboard</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Total Projects</div>
                    <div className="text-2xl font-bold text-white">24 Active</div>
                    <div className="text-gray-400 text-sm">$125,000 Revenue</div>
                  </div>
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                    <BarChart className="w-12 h-12 text-green-400" />
                  </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-xs mb-1">Web Dev</div>
                    <div className="text-white font-semibold">12 Projects</div>
                    <div className="text-gray-400 text-xs">$85,000</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-xs mb-1">Mobile</div>
                    <div className="text-white font-semibold">8 Projects</div>
                    <div className="text-gray-400 text-xs">$30,000</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-xs mb-1">SEO</div>
                    <div className="text-white font-semibold">4 Projects</div>
                    <div className="text-gray-400 text-xs">$10,000</div>
                  </div>
                </div>

                {/* Project List */}
                <div className="space-y-2">
                  {[
                    { name: 'Corporate Website', type: 'Web Dev', status: 'Active', revenue: '$15,000' },
                    { name: 'E-commerce Platform', type: 'Web Dev', status: 'Active', revenue: '$25,000' },
                    { name: 'Mobile App iOS', type: 'Mobile', status: 'In Progress', revenue: '$12,000' },
                    { name: 'SEO Optimization', type: 'SEO', status: 'Active', revenue: '$5,000' },
                    { name: 'SaaS Dashboard', type: 'Web Dev', status: 'Completed', revenue: '$20,000' },
                    { name: 'Android App', type: 'Mobile', status: 'Active', revenue: '$18,000' },
                    { name: 'Content Strategy', type: 'SEO', status: 'Planning', revenue: '$3,000' },
                  ].map((project, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center text-xs text-green-300 font-semibold">
                          {project.type[0]}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{project.name}</div>
                          <div className="text-gray-400 text-xs">{project.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-white text-sm font-medium ${
                          project.status === 'Active' ? 'text-green-400' :
                          project.status === 'In Progress' ? 'text-yellow-400' :
                          project.status === 'Completed' ? 'text-blue-400' :
                          'text-gray-400'
                        }`}>{project.status}</div>
                        <div className="text-gray-400 text-xs">{project.revenue}</div>
                      </div>
                      <div className="flex gap-1">
                        <button className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-colors">View</button>
                        <button className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-colors">Edit</button>
                        <button className="px-2 py-1 text-xs rounded bg-green-500 text-white hover:bg-green-600 transition-colors">Manage</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Four Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Web Development Services</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              EliteCode lets you build modern, high-performance websites using cutting-edge technologies. Select your preferred framework, define your requirements, and watch your digital presence come to life.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
              <Smartphone className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Mobile App Development</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              EliteCode also supports native and cross-platform mobile development, allowing you to conveniently build iOS and Android apps. Use our mobile development services to reach your customers on all devices.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Expand Your Digital Portfolio</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Don't just build websites on EliteCode, optimize them too. EliteCode empowers you to generate organic traffic through SEO, content strategy, and more with our comprehensive digital marketing services.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-green-500/20 backdrop-blur-sm hover:border-green-400/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Automation & Integration Services</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Head to our automation services to streamline your business processes. Integrate your systems with APIs, webhooks, and automation tools via our platform for maximum efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
