import { cn } from '@/lib/utils';
import { OPDService } from '@/schemas/opd';
import {
  ArrowUpRight,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import serialize from 'serialize-javascript';
import {
  SemanticCard,
  SemanticCardDescription,
  SemanticCardFooter,
  SemanticCardHeader,
  SemanticCardImage,
  SemanticCardTitle,
} from '../semantic-card';
import { Badge } from '../ui/badge';
import { Button, buttonVariants } from '../ui/button';

const serviceTypeIcons = {
  online: Globe,
  offline: MapPin,
  hybrid: Users,
};

const getServiceTypeColor = (type: OPDService['type']) => {
  return {
    online: 'bg-emerald-100 text-emerald-700',
    offline: 'bg-blue-100 text-blue-700',
    hybrid: 'bg-purple-100 text-purple-700',
  }[type];
};

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();

const generateStructuredData = (services: OPDService[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Layanan Unggulan Kominfo Kabupaten Bangka',
  description:
    'Daftar layanan digital unggulan yang disediakan oleh Dinas Kominfo Kabupaten Bangka',
  numberOfItems: services.filter((s) => s.isFeatured).length,
  itemListElement: services
    .filter((s) => s.isFeatured)
    .map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'GovernmentOrganization',
        name: 'Dinas Komunikasi dan Informatika Kabupaten Bangka',
      },
      serviceType: service.category,
    })),
});

export default function FeaturedServiceSection({
  services,
}: {
  services: OPDService[];
}) {
  const featuredServices = services.filter((s) => s.isFeatured);

  return (
    <section
      className="px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="featured-services-heading"
    >
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serialize(generateStructuredData(services)),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <span className="block text-center text-sm font-medium text-blue-600 sm:text-left dark:text-blue-400">
            Layanan Terdepan
          </span>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2
              id="featured-services-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              Layanan Unggulan
            </h2>
            <Button asChild size="sm" className="mt-2 sm:mt-0">
              <Link href="/layanan">Lihat Semua Layanan</Link>
            </Button>
          </div>
          <p className="mt-3 text-center text-gray-600 sm:text-left dark:text-gray-300">
            Akses layanan publik digital untuk masyarakat Kabupaten Bangka.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredServices.map((service) => {
            const Icon = serviceTypeIcons[service.type];
            const slug = service.id || generateSlug(service.title);

            return (
              <SemanticCard
                key={slug}
                className="group flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {service.imageUrl && (
                  <SemanticCardImage className="aspect-[16/9] overflow-hidden rounded-t-xl">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />
                  </SemanticCardImage>
                )}

                <SemanticCardHeader className="space-y-3 p-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getServiceTypeColor(service.type)}>
                      <Icon className="mr-1 h-4 w-4" />
                      {service.type}
                    </Badge>
                    {service.fee === 'Gratis' && (
                      <Badge className="bg-emerald-100 text-emerald-700">
                        Gratis
                      </Badge>
                    )}
                    {service.estimatedTime && (
                      <Badge className="bg-blue-100 text-blue-700">
                        <Clock className="mr-1 h-4 w-4" />
                        {service.estimatedTime}
                      </Badge>
                    )}
                  </div>

                  <SemanticCardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">
                    <Link href={`/layanan/${slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </SemanticCardTitle>

                  <SemanticCardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </SemanticCardDescription>

                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    {service.requirements?.length && (
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-blue-500" />
                        {service.requirements[0]}
                      </li>
                    )}
                    {service.location && (
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-rose-500" />
                        {service.location}
                      </li>
                    )}
                    {service.contactPhone && (
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-emerald-500" />
                        {service.contactPhone}
                      </li>
                    )}
                    {service.contactEmail && (
                      <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-purple-500" />
                        {service.contactEmail}
                      </li>
                    )}
                  </ul>
                </SemanticCardHeader>

                <SemanticCardFooter className="mt-auto justify-between p-4">
                  <Link
                    className={cn(
                      buttonVariants(),
                      service.link ? 'w-1/2' : 'w-full'
                    )}
                    href={`/layanan/${slug}`}
                  >
                    Detail <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                  {service.link && (
                    <Link
                      className={cn(
                        buttonVariants({ variant: 'outline', size: 'icon' })
                      )}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Kunjungi layanan ${service.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </SemanticCardFooter>
              </SemanticCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
