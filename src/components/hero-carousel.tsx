'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';

export interface CarouselItem {
  title: string;
  imageSrc: string;
}

interface HeroCarouselProps {
  carouselItems: CarouselItem[];
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
  imageClassName?: string;
  priorityFirstImage?: boolean;
}

export default function HeroCarousel({
  carouselItems,
  autoplayDelay = 5000,
  loop = true,
  className,
  imageClassName,
  priorityFirstImage = true,
}: HeroCarouselProps) {
  return (
    <Carousel
      className={cn('size-full', className)}
      plugins={[Autoplay({ delay: autoplayDelay }), Fade()]}
      opts={{ loop }}
    >
      <CarouselContent className="m-0 size-full" containerClassName="size-full">
        {carouselItems.map((carouselItem, index) => (
          <CarouselItem
            key={`${carouselItem.title}-${index}`}
            className="relative size-full p-0"
          >
            <Image
              src={carouselItem.imageSrc}
              alt={carouselItem.title}
              fill
              priority={priorityFirstImage && index === 0}
              className={cn('object-cover', imageClassName)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
