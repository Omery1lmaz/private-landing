'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image as ImageIcon, Video, Filter, Sparkles, Plus, Maximize2 } from 'lucide-react'
import { galleryItems, galleryCategories, GalleryItem } from '@/data/gallery'
import GalleryLightbox from './GalleryLightbox'

interface GalleryGridProps {
  locale: string
}

const ITEMS_PER_PAGE = 12

export default function GalleryGrid({ locale }: GalleryGridProps) {
  const isTr = locale === 'tr'
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE)

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    setVisibleCount(ITEMS_PER_PAGE) // Reset pagination on filter change
    if (activeCategory === 'all') return galleryItems
    if (activeCategory === 'image') return galleryItems.filter((item) => item.type === 'image')
    if (activeCategory === 'video') return galleryItems.filter((item) => item.type === 'video')
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount)
  }, [filteredItems, visibleCount])

  const hasMore = visibleCount < filteredItems.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
  }

  return (
    <section className="w-full py-8">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-[#09151e]/80 border border-white/10 backdrop-blur-xl">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterGlow"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/80 to-blue-600/80 -z-10 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat.id === 'video' && <Video size={15} />}
                  {cat.id === 'image' && <ImageIcon size={15} />}
                  {isTr ? cat.labelTr : cat.labelEn}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {visibleItems.map((item, idx) => {
            const displayTitle = isTr ? item.title : item.titleEn
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.4) }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#061218] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Media Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={displayTitle}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-cyan-950/40 to-zinc-950">
                      {/* Video Poster Preview / Static element */}
                      <video
                        src={`${item.src}#t=0.5`}
                        preload="metadata"
                        muted
                        playsInline
                        suppressHydrationWarning
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] group-hover:bg-black/10 transition-all">
                        <div className="w-14 h-14 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:scale-115 transition-transform duration-300">
                          <Play size={24} className="ml-1 fill-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-md">
                      {item.type === 'video' ? (
                        <>
                          <Video size={12} /> Video
                        </>
                      ) : (
                        <>
                          <ImageIcon size={12} /> {isTr ? 'Fotoğraf' : 'Photo'}
                        </>
                      )}
                    </span>
                  </div>

                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Maximize2 size={20} className="text-cyan-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {visibleItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            {isTr ? 'Bu kategoride içerik bulunamadı.' : 'No items found in this category.'}
          </p>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-14 flex items-center justify-center">
          <button
            onClick={handleLoadMore}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <Plus size={18} className="transition-transform group-hover:rotate-90 duration-300" />
            <span>
              {isTr
                ? `Daha Fazla Göster (${filteredItems.length - visibleCount} kaldı)`
                : `Load More (${filteredItems.length - visibleCount} left)`}
            </span>
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        locale={locale}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  )
}
