import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import type { HeroSectionProps, SlideData } from '@/types/section/hero';
import Link from 'next/link';
import HeroCarousel from '../_components/carousel';

export default function HeroSection({
  slides,
  title,
  subtitle,
  description,
  buttons = [
    {
      text: 'Jelajahi Layanan',
      href: '/layanan',
      variant: 'secondary',
      ariaLabel: `Jelajahi layanan ${siteConfig.shortName || siteConfig.name}`,
    },
    {
      text: 'Tentang Kami',
      href: '/tentang',
      variant: 'outline',
      ariaLabel: `Pelajari tentang ${siteConfig.shortName || siteConfig.name}`,
    },
  ],
  showScrollIndicator = true,
  overlayIntensity = 'light',
  textAlignment = 'center',
  height = 'large',
  className = '',
}: HeroSectionProps) {
  const defaultSlides: SlideData[] = [
    {
      id: 1,
      image: '/hero-1.jpg',
      alt: `Selamat Datang di ${siteConfig.shortName || siteConfig.name}`,
      title: 'Selamat Datang di Portal Resmi',
      description: siteConfig.description,
    },
    {
      id: 2,
      image: '/hero-2.jpg',
      alt: 'Transformasi Digital Layanan Publik',
      title: 'Transformasi Digital untuk Pelayanan Terbaik',
      description:
        'Kami mendukung pemerintahan terbuka dan pelayanan publik yang efisien melalui sistem digital yang terintegrasi.',
      primaryButton: { text: 'Lihat Layanan' },
      secondaryButton: { text: 'Ajukan Permohonan' },
    },
    {
      id: 3,
      image: '/hero-3.jpg',
      alt: 'Inovasi dan Kolaborasi',
      title: 'Inovasi dan Kolaborasi Berkelanjutan',
      description:
        'Bersama masyarakat, kami membangun ekosistem digital yang inklusif, adaptif, dan berkelanjutan.',
      primaryButton: { text: 'Proyek Unggulan' },
      secondaryButton: { text: 'Galeri Kegiatan' },
    },
  ];

  const heightVariants = {
    small: 'h-[60vh] sm:h-[65vh] lg:h-[70vh]',
    medium: 'h-[75vh] sm:h-[80vh] lg:h-[85vh]',
    large: 'h-[85vh] sm:h-[90vh] lg:h-[100vh]',
    full: 'h-screen',
  };

  const alignmentVariants = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const getButtonVariant = (variant: string) => {
    switch (variant) {
      case 'primary':
        return buttonVariants({ variant: 'default', size: 'lg' });
      case 'secondary':
        return buttonVariants({ variant: 'secondary', size: 'lg' });
      case 'outline':
        return buttonVariants({ variant: 'outline', size: 'lg' });
      case 'ghost':
        return buttonVariants({ variant: 'ghost', size: 'lg' });
      default:
        return buttonVariants({ variant: 'secondary', size: 'lg' });
    }
  };

  return (
    <section
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
      className={cn(
        'relative isolate w-full overflow-hidden',
        heightVariants[height],
        className
      )}
      role="banner"
    >
      <HeroCarousel
        slides={slides || defaultSlides}
        overlayIntensity={overlayIntensity}
      />
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'container mx-auto max-w-6xl',
            alignmentVariants[textAlignment]
          )}
        >
          {subtitle && (
            <p className="text-muted-foreground mb-2 text-sm font-medium tracking-wider uppercase sm:text-base">
              {subtitle}
            </p>
          )}

          <h1
            id="hero-heading"
            className="text-primary-foreground mb-4 text-2xl leading-tight font-bold tracking-tight drop-shadow-md sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {title || siteConfig.name}
          </h1>

          <p
            id="hero-description"
            className="text-primary-foreground mx-auto mb-6 max-w-4xl text-sm leading-relaxed font-light drop-shadow-sm sm:text-base md:mb-8 md:text-lg lg:mb-10 lg:text-xl xl:text-2xl"
          >
            {description || siteConfig.description}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:gap-6">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={cn(
                    getButtonVariant(button.variant || 'secondary'),
                    'h-12 w-full min-w-[200px] text-base font-semibold sm:h-14 sm:w-auto sm:text-lg',
                    'transition-all duration-300 hover:scale-105 focus:scale-105',
                    'shadow-md hover:shadow-lg focus:shadow-lg',
                    button.variant === 'outline' && [
                      'border-border text-primary-foreground dark:text-primary dark:hover:text-primary/80 border',
                      'hover:bg-muted focus:bg-muted bg-transparent backdrop-blur-sm',
                    ]
                  )}
                  aria-label={button.ariaLabel || button.text}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          )}

          <div className="sr-only">
            <h2>{siteConfig.name}</h2>
            <p>
              Portal resmi {siteConfig.region || 'pemerintah'} untuk layanan
              digital, informasi publik, dan transformasi digital.
            </p>
            {siteConfig.keywords && (
              <ul>
                {siteConfig.keywords.slice(0, 5).map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 transform md:block">
          <div className="animate-bounce">
            <svg
              className="text-muted-foreground size-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              role="img"
              aria-label="Scroll down indicator"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
