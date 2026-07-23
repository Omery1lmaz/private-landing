'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Play, Maximize2, Download } from 'lucide-react'
import { GalleryItem } from '@/data/gallery'

interface GalleryLightboxProps {
  item: GalleryItem | null
  items: GalleryItem[]
  locale: string
  onClose: () => void
  onSelect: (item: GalleryItem) => void
}

export default function GalleryLightbox({
  item,
  items,
  locale,
  onClose,
  onSelect,
}: GalleryLightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1])
    } else {
      onSelect(items[items.length - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1])
    } else {
      onSelect(items[0])
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [item, currentIndex, items])

  if (!item) return null

  const isTr = locale === 'tr'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handlePrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous item"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 focus:outline-none"
          aria-label="Next item"
        >
          <ChevronRight size={28} />
        </button>

        {/* Content Box */}
        <div
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={item.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-zinc-950/80 border border-white/10 shadow-2xl"
          >
            {item.type === 'image' ? (
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={isTr ? 'Fotoğraf' : 'Photo'}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={item.src}
                controls
                autoPlay
                suppressHydrationWarning
                className="w-full h-full object-contain"
                preload="metadata"
              />
            )}
          </motion.div>

          {/* Footer Info */}
          <div className="w-full mt-4 flex items-center justify-between px-2 text-white">
            <div>
              <p className="text-sm md:text-base font-medium text-gray-300 capitalize">
                {item.type === 'video'
                  ? isTr
                    ? 'Video'
                    : 'Video'
                  : isTr
                  ? 'Fotoğraf'
                  : 'Photo'}{' '}
                • {currentIndex + 1} / {items.length}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={item.src}
                download
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <Download size={16} />
                <span>{isTr ? 'İndir' : 'Download'}</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
