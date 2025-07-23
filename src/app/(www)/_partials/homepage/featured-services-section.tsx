'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  href?: string;
  type?: 'online' | 'offline' | 'hybrid';
  featured?: boolean;
  category?: string;
  duration?: string;
  price?: string;
}

export interface FeaturedServicesSectionProps {
  title?: string;
  subtitle?: string;
  items: ServiceItem[];
  className?: string;
  maxItems?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
}

const typeConfig = {
  online: {
    label: 'Layanan Daring',
    className: 'bg-primary/10 text-primary',
    dot: 'bg-primary',
  },
  offline: {
    label: 'Layanan Tatap Muka',
    className: 'bg-secondary text-secondary-foreground',
    dot: 'bg-secondary-foreground',
  },
  hybrid: {
    label: 'Layanan Terpadu',
    className: 'bg-accent text-accent-foreground',
    dot: 'bg-accent-foreground',
  },
};

export default function FeaturedServicesSection({
  title = 'Layanan Unggulan',
  subtitle = 'Berbagai layanan publik yang dirancang untuk kemudahan, efisiensi, dan transparansi.',
  items,
  className,
  maxItems = 6,
  showViewAll = true,
  viewAllHref = '/layanan',
}: FeaturedServicesSectionProps) {
  const displayItems = items.slice(0, maxItems);

  return (
    <section
      className={cn('bg-background relative z-10 py-20 sm:py-24', className)}
      aria-labelledby="featured-services-heading"
    >
      {/* Decorative glow */}
      <div className="from-primary/10 to-accent/10 pointer-events-none absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-br blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2
              id="featured-services-heading"
              className="text-foreground mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              {title}
            </h2>
            <p
              className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg"
              aria-describedby="featured-services-heading"
            >
              {subtitle}
            </p>
          </div>
          {showViewAll && (
            <Button
              asChild
              size="lg"
              className="bg-primary text-white shadow-md hover:brightness-110"
            >
              <Link href={viewAllHref}>
                Lihat Semua Layanan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((item, index) => (
            <ServiceCard key={index} item={item} priority={index < 3} />
          ))}
        </div>
      </div>

      {/* Structured Data */}
      <Script
        id="homepage-services-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: title,
            description: subtitle,
            numberOfItems: displayItems.length,
            itemListElement: displayItems
              .map((item, index) => ({
                '@type': 'Service',
                position: index + 1,
                name: item.title,
                description: item.description,
                url: item.href,
                category: item.category || item.type,
                serviceType: typeConfig[item.type || 'online'].label,
              }))
              .filter((i) => i.url),
          }),
        }}
      />
    </section>
  );
}

const ServiceCard = React.memo(function ServiceCard({
  item,
  priority,
}: {
  item: ServiceItem;
  priority?: boolean;
}) {
  const type = typeConfig[item.type || 'online'];

  return (
    <article
      itemScope
      itemType="https://schema.org/Service"
      className="group border-border bg-card text-card-foreground relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {item.imageUrl && (
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item.imageUrl}
              alt={`Gambar layanan ${item.title}`}
              fill
              priority={priority}
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Overlay glow on hover */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden rounded-2xl bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:block group-hover:opacity-100" />
          </AspectRatio>
        </div>
      )}

      <CardContent className="group-hover:bg-muted/5 flex flex-1 flex-col space-y-4 p-5 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <Badge
            className={cn(
              'text-xs font-medium transition-all duration-300 group-hover:scale-105 group-hover:opacity-90',
              type.className
            )}
          >
            <div className={cn('mr-1.5 h-1.5 w-1.5 rounded-full', type.dot)} />
            {type.label}
          </Badge>
          {item.featured && (
            <Badge variant="secondary" className="text-xs">
              Unggulan
            </Badge>
          )}
        </div>

        <div className="flex items-start gap-4">
          {item.icon && (
            <div className="bg-muted text-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <div className="h-6 w-6">{item.icon}</div>
            </div>
          )}

          <div className="space-y-1">
            <h3
              itemProp="name"
              className="text-foreground group-hover:text-primary text-lg leading-snug font-semibold transition-colors duration-300"
            >
              {item.title}
            </h3>
            <p
              itemProp="description"
              className="text-muted-foreground line-clamp-3 text-sm"
            >
              {item.description}
            </p>
          </div>
        </div>

        {(item.duration || item.price) && (
          <div className="text-muted-foreground flex flex-wrap gap-2 text-xs">
            {item.duration && (
              <span className="bg-muted rounded px-2 py-1">
                ⏱️ {item.duration}
              </span>
            )}
            {item.price && (
              <span className="bg-accent/10 text-accent rounded px-2 py-1">
                💰 {item.price}
              </span>
            )}
          </div>
        )}

        {item.href && (
          <div className="border-border border-t pt-4 text-sm">
            <Link
              href={item.href}
              itemProp="url"
              className="text-primary hover:text-primary/80 inline-flex items-center transition-colors duration-300 hover:underline"
            >
              Pelajari lebih lanjut
              <ExternalLink className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        )}
      </CardContent>
    </article>
  );
});
