'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { News } from '@/types/news';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

interface NewsCarouselProps {
  newsItems: News[];
  className?: string;
}

export default function NewsCarousel({
  className,
  newsItems,
}: NewsCarouselProps) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const aspectRatio = isLargeScreen ? 16 / 9 : 1;

  const onThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
    },
    [mainApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbnailApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbnailApi.scrollTo(index);
  }, [mainApi, thumbnailApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on('select', onSelect);
    mainApi.on('reInit', onSelect);
    return () => {
      mainApi.off('select', onSelect);
      mainApi.off('reInit', onSelect);
    };
  }, [mainApi, onSelect]);

  return (
    <div className={cn('w-full', className)}>
      <Carousel
        setApi={setMainApi}
        plugins={[Fade(), Autoplay({ delay: 6000, stopOnInteraction: true })]}
        opts={{ loop: true }}
        className="group relative w-full"
      >
        <CarouselContent className="-ml-0">
          {newsItems.map((news) => (
            <CarouselItem key={news.id} className="pl-0">
              <article className="relative overflow-hidden rounded-lg border shadow-md">
                <AspectRatio ratio={aspectRatio}>
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </AspectRatio>

                <div className="absolute inset-0 flex flex-col justify-between p-1.5">
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <time
                      dateTime={news.publishedAt}
                      className="bg-secondary/40 text-secondary-foreground/90 flex items-center gap-1.5 rounded-full px-2 py-1 backdrop-blur-md"
                    >
                      <Clock className="size-3.5" />
                      <span className="font-medium">
                        {formatDistanceToNow(new Date(news.publishedAt), {
                          addSuffix: true,
                          locale: id,
                        })}
                      </span>
                    </time>
                    {news.category && (
                      <span className="bg-muted-foreground/40 text-muted flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 backdrop-blur-md">
                        <Tag className="size-3.5" />
                        <span className="font-medium capitalize">
                          {news.category}
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Info: Title & Excerpt */}
                  <div className="space-y-2 text-white">
                    <h3 className="text-lg leading-tight font-bold md:text-xl">
                      <Link
                        href={news.slug}
                        className="stretched-link hover:underline focus:outline-none"
                        aria-label={`Baca berita: ${news.title}`}
                      >
                        {news.title}
                      </Link>
                    </h3>
                    <p className="hidden text-sm text-white/80 md:line-clamp-2">
                      {news.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        setApi={setThumbnailApi}
        className="mt-3 w-full md:mt-3"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-2">
          {newsItems.map((item, index) => (
            <CarouselItem
              key={`thumb-${item.id}`}
              onClick={() => onThumbClick(index)}
              className="basis-1/3 cursor-pointer py-2 pl-4 sm:basis-1/4 md:basis-1/5"
              aria-label={`Pilih berita: ${item.title}`}
            >
              <div
                className={cn(
                  'group ring-offset-background relative overflow-hidden rounded-md transition-all duration-300',
                  selectedIndex === index
                    ? 'ring-primary ring-2 ring-offset-2'
                    : 'opacity-70 hover:opacity-100'
                )}
              >
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <Image
                    src={item.imageUrl}
                    alt={`Thumbnail ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 10vw, 30vw"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
