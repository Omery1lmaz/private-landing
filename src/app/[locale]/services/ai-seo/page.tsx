import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AiSeoHero from './components/AiSeoHero'
import AiSeoProblemSolution from './components/AiSeoProblemSolution'
import AiSeoWhatYouGet from './components/AiSeoWhatYouGet'
import AiSeoProcess from './components/AiSeoProcess'
import AiSeoProofOutcome from './components/AiSeoProofOutcome'
import AiSeoPricingTeaser from './components/AiSeoPricingTeaser'
import AiSeoContact from './components/AiSeoContact'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services_section' });

  return {
    title: t('ai_seo_title'),
    description: t('ai_seo_description'),
    alternates: {
      canonical: `https://arvexalabs.com/${locale}/services/ai-seo`,
    },
    openGraph: {
      title: t('ai_seo_title'),
      description: t('ai_seo_description'),
      type: 'article',
    },
  };
}

export default function AISeoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#020408]">
      {/* Global Scroll Progress or similar theme styles can be added here if needed */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: #fff;
        }
      `}</style>

      <div className="relative z-10">
        <Navbar />

        {/* 1. Hero Section - The "Hook" */}
        <AiSeoHero />

        {/* 2. Problem & Solution - The "Why" */}
        <AiSeoProblemSolution />

        {/* 3. What You Get - The "What" (Interactive) */}
        <AiSeoWhatYouGet />

        {/* 4. Process - The "How" */}
        <AiSeoProcess />

        {/* 5. Proof & Outcomes - The "Proof" */}
        <AiSeoProofOutcome />

        {/* 6. Pricing Teaser - The "Investment" */}
        <AiSeoPricingTeaser />

        {/* 7. Final Contact - The "Next Step" */}
        <AiSeoContact />

        <Footer />
      </div>
    </main>
  )
}
