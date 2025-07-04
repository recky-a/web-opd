'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import type { CarouselProps } from '@/types/section/hero';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import Image from 'next/image';

export default function HeroCarousel({
  slides,
  autoplayDelay = 5000,
  overlayIntensity = 'light',
}: CarouselProps) {
  const slideData = slides;

  const overlayVariants = {
    light: 'bg-primary/60 dark:bg-primary/80',
    medium: 'bg-background/60 dark:bg-background/60',
    dark: 'bg-background/80 dark:bg-background/80',
  };

  return (
    <Carousel
      plugins={[
        Fade(),
        Autoplay({
          delay: autoplayDelay,
          stopOnMouseEnter: false,
        }),
      ]}
      opts={{
        loop: true,
        align: 'center',
      }}
      className="h-full w-full"
    >
      <CarouselContent
        containerClassName="w-full h-full "
        className="relative m-0 h-full w-full"
      >
        {slideData!.map((slide) => (
          <CarouselItem
            key={`slide-Item-${slide.id}`}
            className="relative h-full w-full"
          >
            <Image
              src={`${slide.image}`}
              fill
              className="object-cover object-top"
              alt={`slideAlt-${slide.id}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 z-20',
          overlayVariants[overlayIntensity]
        )}
      ></div>
    </Carousel>
  );
}
