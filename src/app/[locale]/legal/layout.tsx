import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#030308] selection:bg-cyan-500/30 relative">
      <Navbar />
      
      {/* Global Scroll Progress */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left scale-x-0 animate-[scrollProgress_1s_linear_initial] [animation-timeline:scroll()]"
      />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
