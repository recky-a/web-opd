// lib/metadata.ts
import { Metadata } from 'next';
import { getCurrentDepartment, siteAuthors, siteConfig } from './constants';

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
  const department = getCurrentDepartment();
  const baseTitle = `${department.name} Kabupaten Bangka`;

  const title = options.title ? `${options.title} | ${baseTitle}` : baseTitle;
  const description = options.description || department.description;

  const keywords = [
    ...siteConfig.keywords,
    ...department.keywords,
    ...(options.keywords || []),
  ].join(', ');

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
  const department = getCurrentDepartment();

  return {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: department.name + ' Kabupaten Bangka',
    description: department.description,
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
      telephone: department.phone || siteConfig.contact.phone,
      email: department.email || siteConfig.contact.email,
      contactType: 'customer service',
    },

    governmentType: 'Municipal',
    jurisdiction: 'Kabupaten Bangka',
  };
}
