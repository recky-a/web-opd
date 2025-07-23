import HeroCarousel, { CarouselItem } from '../hero-carousel';

interface HeroSectionProps {
  carouselItems: CarouselItem[];
}

export default function HeroSection({ carouselItems }: HeroSectionProps) {
  return (
    <section className="aspect-square md:aspect-video">
      <HeroCarousel carouselItems={carouselItems} />
    </section>
  );
}
