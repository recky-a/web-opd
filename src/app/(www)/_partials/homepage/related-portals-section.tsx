import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const portals = [
  {
    title: 'Portal PPID',
    description: 'Layanan permohonan informasi publik.',
    href: 'https://ppid.bangka.go.id',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    title: 'Satu Data Bangka',
    description: 'Portal integrasi data sektoral Kabupaten Bangka.',
    href: 'https://satudata.bangka.go.id',
    logo: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
  },
  {
    title: 'Website Resmi Pemkab',
    description: 'Informasi umum Kabupaten Bangka.',
    href: 'https://bangkakab.go.id',
    logo: 'https://images.pexels.com/photos/15862873/pexels-photo-15862873.jpeg',
  },
  {
    title: 'Keamanan Siber',
    description: 'Sistem pengawasan dan perlindungan data digital.',
    href: '/layanan/keamanan-informasi',
    logo: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg',
  },
  {
    title: 'Layanan Kominfo',
    description: 'Beragam layanan digital dan sistem internal.',
    href: '/layanan',
    logo: 'https://images.pexels.com/photos/340146/pexels-photo-340146.jpeg',
  },
  {
    title: 'Open Data Bangka',
    description: 'Dataset terbuka untuk publik dari seluruh OPD.',
    href: 'https://data.bangka.go.id',
    logo: 'https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg',
  },
  {
    title: 'Pusat Aduan Masyarakat',
    description: 'Laporkan masalah dan aspirasi secara online.',
    href: 'https://lapor.bangka.go.id',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  },
  {
    title: 'Peta Digital Bangka',
    description: 'Akses peta dan informasi geospasial daerah.',
    href: 'https://gis.bangka.go.id',
    logo: 'https://images.pexels.com/photos/196464/pexels-photo-196464.jpeg',
  },
  {
    title: 'e-Arsip Bangka',
    description: 'Sistem pengelolaan arsip digital OPD.',
    href: 'https://earsip.bangka.go.id',
    logo: 'https://images.pexels.com/photos/7766560/pexels-photo-7766560.jpeg',
  },
  {
    title: 'Bangka Command Center',
    description: 'Pusat kendali dan monitoring layanan digital.',
    href: '/command-center',
    logo: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
  },
  {
    title: 'Pemantauan Infrastruktur IT',
    description: 'Pantau server, jaringan, dan sistem secara real-time.',
    href: '/monitoring-it',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  },
  {
    title: 'Portal ASN & Pegawai',
    description: 'Akses internal khusus ASN dan pegawai Pemkab.',
    href: '/asn-portal',
    logo: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
  },
];

interface RelatedPortalsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function RelatedPortalsSection({
  title = 'Portal Lainnya',
  subtitle = 'Akses cepat ke berbagai sistem informasi dan layanan publik yang dikelola oleh Dinas Kominfo maupun OPD lainnya di lingkungan Pemerintah Kabupaten Bangka.',
}: RelatedPortalsSectionProps) {
  const useCarousel = portals.length > 4;

  return (
    <section className="from-muted/10 to-background bg-gradient-to-b py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <header className="mb-16 text-center">
          <h2 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            {subtitle}
          </p>
        </header>

        {useCarousel ? (
          <div className="relative">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent className="gap-6 p-2">
                {portals.map((portal) => (
                  <CarouselItem
                    key={portal.href}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <Card {...portal} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows fixed for all screen sizes */}
              <CarouselPrevious
                className="bg-background hover:bg-muted absolute top-1/2 left-[-1rem] z-10 -translate-y-1/2 rounded-full p-2 shadow-lg transition sm:left-[-1.5rem]"
                aria-label="Sebelumnya"
              />
              <CarouselNext
                className="bg-background hover:bg-muted absolute top-1/2 right-[-1rem] z-10 -translate-y-1/2 rounded-full p-2 shadow-lg transition sm:right-[-1.5rem]"
                aria-label="Berikutnya"
              />
            </Carousel>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portals.map((portal) => (
              <Card key={portal.href} {...portal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Card({
  href,
  title,
  description,
  logo,
}: {
  href: string;
  title: string;
  description: string;
  logo?: string;
}) {
  return (
    <article className="group border-border bg-background hover:border-primary/40 hover:bg-primary/5 relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all hover:shadow-lg">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col justify-between space-y-5 text-center"
      >
        <div className="bg-muted relative aspect-[3/2] w-full overflow-hidden rounded-xl">
          {logo ? (
            <Image
              src={logo}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          ) : (
            <div className="bg-muted/30 flex h-full w-full items-center justify-center backdrop-blur-sm">
              <Info className="text-muted-foreground size-10" />
            </div>
          )}
        </div>
        <div className="space-y-1 px-2">
          <h3 className="text-foreground group-hover:text-primary text-lg leading-tight font-semibold sm:text-xl">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Link>
    </article>
  );
}
