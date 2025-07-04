'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { buttonVariants } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselSlideIndicator,
} from '@/components/ui/carousel';
import { timeAgo } from '@/lib/date';
import { cn } from '@/lib/utils';
import { News } from '@/types/news';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BreakingNewsCarousel({
  breakingNews,
  autoplayDelay,
}: {
  breakingNews: News[];
  autoplayDelay?: number;
}) {
  return (
    <Carousel
      plugins={[
        Fade(),
        Autoplay({
          delay: autoplayDelay ?? 5000,
          stopOnMouseEnter: false,
        }),
      ]}
      opts={{
        loop: true,
        align: 'center',
      }}
    >
      <CarouselContent>
        {breakingNews.map((item) => (
          <CarouselItem key={item.id}>
            <AspectRatio ratio={11 / 9}>
              <Image
                alt={item.title}
                fill
                className="object-cover"
                src={item.image}
              />
            </AspectRatio>
            <div className="bg-primary/70 text-primary-foreground absolute bottom-0 w-full space-y-3 px-2 py-3 sm:pb-5 md:space-y-5">
              <h3 className="col-span-2 pr-4 text-sm font-extrabold sm:text-xl">
                {item.title}
              </h3>
              <div className="divide-secondary text-muted text-tiny flex flex-row flex-wrap items-center gap-2 divide-x-2 pr-4 sm:text-lg">
                <time className="m-0 inline-flex items-center gap-x-1.5 pr-3">
                  <Calendar className="size-4 sm:size-6" />
                  {timeAgo(item.createdAt)}
                </time>
                <p className="px-1.5 font-semibold tracking-tight capitalize">
                  {item.category}
                </p>
              </div>
              <div className="z-40 flex items-center justify-between pr-4 md:gap-x-4">
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'max-sm:text-tiny border max-sm:h-7 max-sm:py-1.5'
                  )}
                >
                  Baca Selengkapnya
                </Link>
                <div className="flex items-center justify-center md:w-1/3">
                  <CarouselPrevious
                    variant="ghost"
                    className="static shrink-0 translate-0 sm:[&>svg:first-child]:size-8"
                  />
                  <CarouselSlideIndicator
                    locale="id"
                    className="text-primary-foreground text-tiny grow sm:mx-4 sm:text-lg"
                  />
                  <CarouselNext
                    variant="ghost"
                    className="static shrink-0 translate-0 sm:[&>svg:first-child]:size-8"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
