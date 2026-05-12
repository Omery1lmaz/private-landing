import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ArvexaLabs',
    short_name: 'Arvexa',
    description: 'AI-powered websites, mobile applications, and SEO solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
