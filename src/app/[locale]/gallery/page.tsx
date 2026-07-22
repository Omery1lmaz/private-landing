import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import CTABanner from '@/components/CTABanner'
import { Sparkles, Camera, Film } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isTr = locale === 'tr'
  return {
    title: isTr
      ? 'Galeri - Fotoğraf ve Video Koleksiyonu | ArvexaLabs'
      : 'Gallery - Photo & Video Collection | ArvexaLabs',
    description: isTr
      ? 'ArvexaLabs dijital medya, ürün çekimleri, modern arayüz ve video tasarımlarından oluşan interaktif galeri koleksiyonu.'
      : 'Interactive gallery collection featuring ArvexaLabs digital media, product shots, modern interfaces, and video designs.',
  }
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isTr = locale === 'tr'

  return (
    <main className="min-h-screen bg-[#030308] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>{isTr ? 'Medya & Tasarım Vitrini' : 'Media & Design Showcase'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400 mb-6">
            {isTr ? (
              <>
                Fotoğraf & Video <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Galerisi</span>
              </>
            ) : (
              <>
                Photo & Video <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Gallery</span>
              </>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed mb-8">
            {isTr
              ? 'Yaratıcı vizyonumuzu, modern arayüz konseptlerimizi ve yüksek kaliteli medya içeriklerimizi keşfedin. Tüm görseller ve videolar hızlı yüklenme için optimize edilmiştir.'
              : 'Explore our creative vision, modern interface concepts, and high-quality media content. All images and videos are optimized for ultra-fast performance.'}
          </p>

          <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Camera size={18} className="text-cyan-400" />
              <span>28 {isTr ? 'Özel Fotoğraf' : 'Curated Photos'}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            <div className="flex items-center gap-2">
              <Film size={18} className="text-blue-400" />
              <span>4 {isTr ? 'HD Video' : 'HD Videos'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid Section */}
      <section className="container mx-auto px-6 pb-24">
        <GalleryGrid locale={locale} />
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
