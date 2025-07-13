'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { CarouselItem as ICarouselItem } from '../_partials/homepage/hero-section';

export default function HeroCarousel({
  carouselItems,
}: {
  carouselItems: ICarouselItem[];
}) {
  return (
    <Carousel
      className="size-full"
      plugins={[Autoplay({ delay: 5000 }), Fade()]}
      opts={{ loop: true }}
    >
      <CarouselContent
        className="m-0 size-full"
        containerClassName=" size-full"
      >
        {carouselItems.map((carouselItem, index) => {
          return (
            <CarouselItem
              key={`${carouselItem.title}-${index}`}
              className="relative size-full p-0"
            >
              <Image
                src={carouselItem.imageSrc}
                alt={carouselItem.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
