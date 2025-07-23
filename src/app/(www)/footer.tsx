// src/app/(www)/footer.tsx
import { SocialLinks } from '@/components/social-links';
import { navigation, siteConfig } from '@/lib/config';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import WebLogo from './web-logo';

// Footer link wrapper
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group text-primary-foreground/80 animate-in fade-in slide-in-from-bottom hover:text-secondary relative inline-block w-fit text-sm transition-colors duration-300"
    >
      {children}
      <span className="bg-secondary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Column Renderer
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-base font-semibold text-white">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <FooterLink href={item.href}>{item.name}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Footer Component
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-primary text-primary-foreground border-primary-foreground/10 border-t-2"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Top grid: Logo + Navigation */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <WebLogo />
            <p className="text-primary-foreground/70 mt-4 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLinks
                variant="outlined"
                iconSize="md"
                spacing="tight"
                className="justify-center"
              />
            </div>
          </div>

          {/* Navigation Columns */}
          <FooterColumn title="Layanan" items={navigation.footer.layanan} />
          <FooterColumn title="Informasi" items={navigation.footer.informasi} />
          <FooterColumn title="Legal" items={navigation.footer.legal} />
        </div>

        {/* Contact & Google Map (side-by-side on large screens) */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 xl:col-span-4">
            <h4 className="mb-4 text-base font-semibold text-white">
              Informasi & Kontak
            </h4>
            <ul className="text-primary-foreground/80 space-y-5 text-sm">
              <li className="flex gap-3">
                <div className="pt-0.5">
                  <MapPin className="text-secondary size-5 shrink-0" />
                </div>
                <span className="leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary size-5 shrink-0" />
                <FooterLink href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </FooterLink>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary size-5 shrink-0" />
                <FooterLink href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h4 className="mb-4 text-base font-semibold text-white">
              Lokasi Kantor
            </h4>
            <div className="ring-primary-foreground/10 overflow-hidden rounded-xl shadow-lg ring-1">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="240"
                className="w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Lokasi ${siteConfig.name}`}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-primary-foreground/50 mt-10 text-center text-xs">
          © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
