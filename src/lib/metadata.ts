// lib/metadata.ts
import { env } from '@/env';
import { Metadata } from 'next';
import { siteAuthors, siteConfig } from './config';

interface PageMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

/**
 * Generate clean, minimal metadata optimized for Next.js 15
 */
export function generateMetadata(options: PageMetadataOptions = {}): Metadata {
  const baseTitle = env.NEXT_PUBLIC_SITE_NAME;

  const title = options.title ? `${options.title} | ${baseTitle}` : baseTitle;
  const description = options.description || siteConfig.description;

  const keywords = [...siteConfig.keywords, ...(options.keywords || [])].join(
    ', '
  );

  return {
    title,
    description,
    keywords,
    authors: siteAuthors,

    // Open Graph essentials
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: options.canonicalUrl || siteConfig.url,
      title,
      description,
      siteName: baseTitle,
      images: [
        {
          url: options.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter Card essentials
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [options.image || siteConfig.twitterImage],
    },

    // Robots (simplified)
    robots: options.noIndex ? 'noindex,nofollow' : 'index,follow',

    // Canonical URL
    alternates: {
      canonical: options.canonicalUrl || siteConfig.url,
    },

    // Category for government sites
    category: 'Government',
  };
}

/**
 * Generate minimal JSON-LD for government organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangka',
      addressRegion: 'Kepulauan Bangka Belitung',
      addressCountry: 'ID',
    },

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'customer service',
    },

    governmentType: 'Municipal',
    jurisdiction: 'Kabupaten Bangka',
  };
}
