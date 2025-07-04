import LucideIcon, { IconName } from '@/components/lucide-icon';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Briefcase, Clock, ExternalLink, MoveRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  category: string;
  estimatedTime: string;
  href: string;
  isOnline: boolean;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  services?: Service[];
  showServices?: boolean;
}

const defaultServices: Service[] = [
  {
    id: 'ktp-online',
    title: 'Pembuatan e-KTP',
    description:
      'Layanan pembuatan dan perpanjangan Kartu Tanda Penduduk elektronik',
    icon: 'FileText',
    category: 'Kependudukan',
    estimatedTime: '3-5 hari',
    href: '/layanan/e-ktp',
    isOnline: true,
  },
  {
    id: 'izin-usaha',
    title: 'Izin Usaha Mikro Kecil',
    description:
      'Pengurusan izin usaha untuk UMKM dengan proses mudah dan cepat',
    icon: 'Building',
    category: 'Perizinan',
    estimatedTime: '1-2 hari',
    href: '/layanan/izin-usaha',
    isOnline: true,
  },
  {
    id: 'surat-nikah',
    title: 'Pendaftaran Nikah',
    description: 'Layanan pendaftaran pernikahan dan penerbitan akta nikah',
    icon: 'Heart',
    category: 'Catatan Sipil',
    estimatedTime: '1 hari',
    href: '/layanan/nikah',
    isOnline: false,
  },
  {
    id: 'bantuan-sosial',
    title: 'Bantuan Sosial',
    description: 'Program bantuan sosial untuk masyarakat kurang mampu',
    icon: 'Users',
    category: 'Sosial',
    estimatedTime: '7-14 hari',
    href: '/layanan/bantuan-sosial',
    isOnline: true,
  },
  {
    id: 'sim-online',
    title: 'Perpanjangan SIM',
    description: 'Layanan perpanjangan Surat Izin Mengemudi online',
    icon: 'Car',
    category: 'Perhubungan',
    estimatedTime: '2-3 hari',
    href: '/layanan/sim',
    isOnline: true,
  },
  {
    id: 'beasiswa',
    title: 'Beasiswa Pelajar',
    description: 'Program beasiswa untuk pelajar berprestasi dan kurang mampu',
    icon: 'GraduationCap',
    category: 'Pendidikan',
    estimatedTime: '14-21 hari',
    href: '/layanan/beasiswa',
    isOnline: true,
  },
  {
    id: 'imb-online',
    title: 'Izin Mendirikan Bangunan',
    description:
      'Pengurusan izin mendirikan bangunan untuk rumah dan komersial',
    icon: 'Building',
    category: 'Perizinan',
    estimatedTime: '7-10 hari',
    href: '/layanan/imb',
    isOnline: true,
  },
  {
    id: 'kesehatan',
    title: 'Layanan Kesehatan Gratis',
    description: 'Akses layanan kesehatan gratis untuk masyarakat',
    icon: 'Heart',
    category: 'Kesehatan',
    estimatedTime: 'Langsung',
    href: '/layanan/kesehatan',
    isOnline: false,
  },
];

export default function ServicesSection({
  title = 'Layanan Terpopuler',
  subtitle = 'Akses layanan digital yang paling diminati masyarakat',
  ctaText = 'Semua Layanan',
  ctaHref = '/layanan',
  className,
  services = defaultServices,
  showServices = true,
}: ServicesSectionProps) {
  return (
    <section
      className={cn(
        'bg-card text-card-foreground border-border/50 shadow-primary/5 relative mx-auto w-full max-w-2xl rounded-2xl border p-6 py-16 shadow-xl backdrop-blur-sm sm:py-20 md:max-w-4xl lg:my-8 lg:max-w-6xl lg:p-8 xl:max-w-7xl xl:p-12',
        className
      )}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-5 rounded-2xl p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-xl p-3">
                <Briefcase className="text-primary h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div>
                <h2
                  id="services-heading"
                  className="text-foreground mb-2 text-2xl font-bold lg:text-4xl"
                >
                  {title}
                </h2>
                <p className="text-muted-foreground hidden">{subtitle}</p>
              </div>
            </div>

            {/* Separator */}
            <Separator
              orientation="horizontal"
              className="bg-border hidden flex-1 sm:block"
              aria-hidden="true"
            />

            {/* CTA Button */}
            <Link
              href={ctaHref}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'group border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground',
                'transition-colors duration-200'
              )}
              aria-label={`${ctaText} - Lihat semua layanan yang tersedia`}
            >
              {ctaText}
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </header>

        {/* Services Grid */}
        {showServices && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.slice(0, 8).map((service) => {
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group block"
                  aria-label={`${service.title} - ${service.description}`}
                >
                  <div className="hover:border-primary/30 border-border bg-background h-full rounded-xl border p-6 transition-all duration-200 hover:shadow-lg">
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <LucideIcon
                          name={service.icon}
                          className="text-primary h-6 w-6"
                        />
                      </div>
                      <div
                        className={cn(
                          'h-2 w-2 rounded-full',
                          service.isOnline ? 'bg-success' : 'bg-secondary'
                        )}
                      />
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="group-hover:text-primary text-foreground mb-2 text-lg font-semibold transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="mb-4 space-y-2">
                      <span className="bg-muted text-muted-foreground inline-block rounded px-2 py-1 text-xs font-medium">
                        {service.category}
                      </span>
                      <div className="text-muted-foreground flex items-center gap-1 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>{service.estimatedTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="border-border flex items-center justify-between border-t pt-2">
                      <span className="text-primary text-sm font-medium">
                        {service.isOnline ? 'Akses Online' : 'Kunjungi Kantor'}
                      </span>
                      <MoveRight className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors duration-200 group-hover:animate-pulse" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
