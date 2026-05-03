import React from 'react'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#030308] pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  )
}
