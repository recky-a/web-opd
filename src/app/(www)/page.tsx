import HeroSection from './_sections/hero';
import NewsSection from './_sections/news';
import ServicesSection from './_sections/services';

export default function Homepage() {
  return (
    <main id="main-content" className="space-y-4">
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <p className="my-20 sm:text-7xl md:text-3xl lg:text-6xl">ABCDE</p>
    </main>
  );
}
