import type {Metadata} from 'next';
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'EliteCode Studio - AI-Powered Digital Solutions',
    template: '%s | EliteCode Studio',
  },
  description: 'AI-powered websites, mobile applications, and SEO solutions. High-performance digital growth strategies for brands.',
  keywords: 'Web Development, SEO, AI Solutions, Mobile Apps, E-commerce, Digital Marketing',
  authors: [{name: 'EliteCode Studio'}],
  creator: 'EliteCode Studio',
  publisher: 'EliteCode Studio',
  metadataBase: new URL('https://elitecodestudio.com'),
  alternates: {
    canonical: 'https://elitecodestudio.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elitecodestudio.com',
    siteName: 'EliteCode Studio',
    title: 'EliteCode Studio - AI-Powered Digital Solutions',
    description: 'AI-powered websites, mobile applications, and SEO solutions. High-performance digital growth strategies for brands.',
    images: [{
      url: 'https://elitecodestudio.com/og-image.png',
      width: 1200,
      height: 630,
      alt: 'EliteCode Studio',
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
      <body className={`dark  antialiased bg-background text-white`}>{children}</body>
    </html>
  );
}
