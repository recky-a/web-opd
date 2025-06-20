// app/manifest.ts
import { siteConfig } from '@/lib/config';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  // Use relative URL for start_url to avoid origin mismatch in development
  const startUrl =
    process.env.NODE_ENV === 'development' ? '/' : siteConfig.url;

  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: startUrl,
    display: 'standalone',
    theme_color: '#0f172a',
    background_color: '#ffffff',
    scope: '/',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['government', 'utilities', 'productivity'],
    lang: 'id',
  };
}
