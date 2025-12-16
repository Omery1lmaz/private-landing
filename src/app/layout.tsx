import type {Metadata} from 'next';
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Phishy - From awareness to action - Secure Every Click',
    template: '%s | Phishy',
  },
  description:
    'Ekiplerde siber güvenlik farkındalığını artıran, gelişmiş phishing saldırılarına karşı savunmayı güçlendiren eğitim ve simülasyon araçları',
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
