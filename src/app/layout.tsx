import type { Metadata } from 'next';
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ArvexaLabs - AI-Powered Digital Solutions',
    template: '%s | ArvexaLabs',
  },
  description: 'AI-powered websites, mobile applications, and SEO solutions. High-performance digital growth strategies for brands.',
  keywords: 'Web Development, SEO, AI Solutions, Mobile Apps, E-commerce, Digital Marketing',
  authors: [{ name: 'ArvexaLabs' }],
  creator: 'ArvexaLabs',
  publisher: 'ArvexaLabs',
  metadataBase: new URL('https://arvexalabs.com'),
  alternates: {
    canonical: 'https://arvexalabs.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arvexalabs.com',
    siteName: 'ArvexaLabs',
    title: 'ArvexaLabs - AI-Powered Digital Solutions',
    description: 'AI-powered websites, mobile applications, and SEO solutions. High-performance digital growth strategies for brands.',
    images: [{
      url: 'https://arvexalabs.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'ArvexaLabs',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elitecodestudio',
    creator: '@elitecodestudio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark antialiased bg-background text-white`}>
      <body suppressHydrationWarning className={`dark antialiased bg-background text-white`}>{children}</body>
    </html>
  );
}
