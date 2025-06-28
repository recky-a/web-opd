import HeroSection from './_sections/hero';
import NewsSection from './_sections/news';

export default function Homepage() {
  return (
    <main id="main-content">
      <HeroSection />
      <NewsSection />
      <p className="mb-10 sm:text-7xl md:text-3xl lg:text-6xl">ABCDE</p>
    </main>
  );
}
