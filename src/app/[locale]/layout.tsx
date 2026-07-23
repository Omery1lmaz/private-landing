import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { locales, type Locale } from '../../../i18n/routing';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = 'https://arvexalabs.com';

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: locales.reduce((acc, l) => {
        acc[l] = `${baseUrl}/${l}`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'ArvexaLabs',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

// import AIAssistant from '@/components/AIAssistant';

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-[100] font-medium"
      >
        İçeriğe Atla / Skip to Content
      </a>
      <div id="main-content">
        {children}
      </div>
      {/* <AIAssistant /> */}
    </NextIntlClientProvider>
  );
}

