import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { timeAgo } from '@/lib/date';
import { cn } from '@/lib/utils';
import { News } from '@/types/news';
import { Clock, ExternalLink, Newspaper, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import BreakingNewsCarousel from '../_components/breaking-news-carousel';

// TODO: extract the component into smaller (news card,news carousel, news item)

export default function NewsSection() {
  const dummyNews: News[] = [
    {
      id: '1',
      title:
        'Pemerintah Desa Sempan Luncurkan Aplikasi Pelayanan Digital Terpadu',
      image: '/hero-1.jpg',
      createdAt: '2025-06-20T18:00:00Z',
      category: 'Aplikasi',
      href: '/berita/1',
    },
    {
      id: '2',
      title: 'Karang Taruna Gelar Pelatihan Kewirausahaan untuk Remaja Desa',
      image: '/hero-2.jpg',
      createdAt: '2025-06-20T14:30:00Z',
      category: 'Kegiatan',
      href: '/berita/2',
    },
    {
      id: '3',
      title:
        'Bumdes Sempan Berhasil Kembangkan Usaha Air Bersih di Wilayah Timur ',
      image: '/hero-3.jpg',
      createdAt: '2025-06-19T09:15:00Z',
      category: 'Bumdes',
      href: '/berita/3',
    },
  ];

  return (
    // News Section
    <section
      className="bg-card text-card-foreground border-border/50 shadow-primary/5 relative mx-auto w-full max-w-2xl rounded-2xl border p-6 shadow-xl backdrop-blur-sm md:max-w-4xl lg:my-8 lg:max-w-6xl lg:p-8 xl:max-w-7xl xl:p-12"
      aria-labelledby="news-heading"
    >
      {/* Header */}
      <header className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-xl p-3">
            <Newspaper className="text-primary h-6 w-6 md:h-8 md:w-8" />
          </div>
          <div>
            <h2
              id="news-heading"
              className="text-primary text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Berita Terkini
            </h2>
          </div>
        </div>
        <Separator
          orientation="horizontal"
          className="hidden flex-1 max-[326px]:flex-2/12 md:block"
          aria-hidden="true"
        />
        <Link
          href="/berita"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'group border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transform shadow-lg transition-all duration-300 hover:scale-105',
            'text-xs sm:text-sm md:text-base lg:text-lg'
          )}
          aria-label="Lihat semua berita"
        >
          Semua Berita
          <ExternalLink className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:ml-2" />
        </Link>
      </header>

      <div className="flex flex-col gap-3 gap-y-8 lg:grid lg:grid-cols-[1fr_350px] lg:gap-x-10 xl:grid-cols-[1fr_450px]">
        {/* Breaking News */}
        <section aria-labelledby="breaking-news-heading">
          <h3 id="breaking-news-heading" className="sr-only">
            Berita Utama
          </h3>
          <BreakingNewsCarousel autoplayDelay={6000} breakingNews={dummyNews} />
        </section>

        {/* News Tabs */}
        <section aria-labelledby="news-tabs-heading" className="relative">
          <h2 id="news-tabs-heading" className="sr-only">
            Kategori Berita
          </h2>

          <Tabs defaultValue="latest-news" className="w-full">
            <TabsList className="bg-muted/30 border-border/50 grid h-auto w-full grid-cols-2 gap-2 rounded-xl border p-2 shadow-lg backdrop-blur-sm">
              <TabsTrigger
                className="group data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-primary/20 data-[state=inactive]:hover:bg-muted/70 relative overflow-hidden rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 data-[state=active]:shadow-lg"
                value="latest-news"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Terbaru</span>
                </div>
                <div className="from-primary/20 to-accent/20 absolute inset-0 -z-10 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </TabsTrigger>

              <TabsTrigger
                className="group data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-primary/20 data-[state=inactive]:hover:bg-muted/70 relative overflow-hidden rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 data-[state=active]:shadow-lg"
                value="popular-news"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Terpopuler</span>
                </div>
                <div className="from-primary/20 to-accent/20 absolute inset-0 -z-10 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="latest-news"
              className="animate-in fade-in-50 slide-in-from-bottom-2 mt-6 duration-300"
            >
              <NewsList newsData={dummyNews} listType="latest" />
            </TabsContent>

            <TabsContent
              value="popular-news"
              className="animate-in fade-in-50 slide-in-from-bottom-2 mt-6 duration-300"
            >
              <NewsList newsData={dummyNews} listType="popular" />
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </section>
  );
}

function NewsList({
  newsData,
  listType,
}: {
  newsData: News[];
  listType: 'latest' | 'popular';
}) {
  const listLabel =
    listType === 'latest' ? 'Berita terbaru' : 'Berita terpopuler';

  return (
    <div role="list" aria-label={listLabel} className="space-y-4">
      {newsData.map((news, index) => (
        <article
          key={news.id}
          role="listitem"
          className="group border-border/50 bg-card/60 hover:border-primary/20 hover:bg-card/80 hover:shadow-primary/5 focus-within:ring-primary relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Gradient overlay effect */}
          <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Shimmer effect */}
          <div className="via-primary/10 absolute -inset-x-40 -top-40 h-40 rotate-12 bg-gradient-to-r from-transparent to-transparent opacity-0 blur-xl transition-all duration-700 group-hover:inset-x-0 group-hover:top-0 group-hover:opacity-100" />

          <div className="relative space-y-3 p-4">
            {/* Main headline link */}
            <h4>
              <Link
                href={news.href}
                className="text-foreground group-hover:text-primary focus:text-primary line-clamp-2 block origin-left text-base font-semibold transition-all duration-200 group-hover:scale-[1.02] focus:outline-none md:text-lg"
              >
                {news.title}
              </Link>
            </h4>

            {/* Article metadata */}
            <div className="flex items-center gap-3">
              <Badge
                variant="secondary"
                className="bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 px-2.5 py-1 text-xs font-medium transition-colors duration-200 md:text-sm"
                aria-label={`Kategori: ${news.category}`}
              >
                {news.category}
              </Badge>

              <div
                className="bg-muted-foreground/40 h-1 w-1 rounded-full"
                aria-hidden="true"
              />

              <time
                dateTime={news.createdAt}
                className="text-muted-foreground group-hover:text-foreground/80 text-sm transition-colors duration-200 md:text-base"
                title={new Date(news.createdAt).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              >
                {timeAgo(news.createdAt)}
              </time>
            </div>

            {/* Reading indicator */}
            <div className="text-muted-foreground flex items-center gap-2 text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              <div className="from-primary to-accent h-0.5 w-4 rounded-full bg-gradient-to-r" />
              <span className="font-medium">Baca selengkapnya</span>
              <svg
                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Invisible overlay for larger click area */}
          <Link
            href={news.href}
            className="absolute inset-0 z-10"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span className="sr-only">Baca selengkapnya: {news.title}</span>
          </Link>

          {/* Corner accent */}
          <div className="from-primary/10 absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </article>
      ))}
    </div>
  );
}
