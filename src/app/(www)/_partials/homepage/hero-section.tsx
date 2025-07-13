import HeroCarousel from '../../_components/hero-carousel';

export interface CarouselItem {
  imageSrc: string;
  title: string;
}

export default function HeroSection() {
  const carouselData: CarouselItem[] = [
    {
      imageSrc: '/hero-1.jpg',
      title: 'Gambar Slide Ke 1',
    },
    {
      imageSrc: '/hero-2.jpg',
      title: 'Gambar Slide Ke 2',
    },
    {
      imageSrc: '/hero-3.jpg',
      title: 'Gambar Slide Ke 3',
    },
  ];
  return (
    <section className="aspect-square md:aspect-video">
      <HeroCarousel carouselItems={carouselData} />
    </section>
  );
}
