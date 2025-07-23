import {
  SemanticCard,
  SemanticCardContent,
  SemanticCardDescription,
  SemanticCardFooter,
  SemanticCardHeader,
  SemanticCardImage,
  SemanticCardTitle,
} from '@/components/semantic-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { News } from '@/types/news';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BaseNewsCardProps {
  news: News;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  priority?: boolean;
}

// Default vertical card
function NewsCard({
  news,
  headingLevel = 'h2',
  priority = false,
}: BaseNewsCardProps) {
  return (
    <SemanticCard variant="default">
      <Link
        href={`/news/${news.slug}`}
        aria-label={`Baca selengkapnya tentang ${news.title}`}
        tabIndex={-1}
      >
        <SemanticCardImage variant="default">
          <Image
            src={news.imageUrl}
            alt={`Cover image for ${news.title}`}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority={priority}
          />
          {news.isFeatured && (
            <Badge className="bg-primary absolute top-3 right-3">
              Unggulan
            </Badge>
          )}
        </SemanticCardImage>
      </Link>

      <SemanticCardHeader variant="default">
        <SemanticCardTitle as={headingLevel} variant="default">
          <Link
            href={`/news/${news.slug}`}
            className="hover:text-primary transition-colors"
          >
            {news.title}
          </Link>
        </SemanticCardTitle>
        <SemanticCardDescription variant="default">
          {news.excerpt}
        </SemanticCardDescription>
      </SemanticCardHeader>

      {news.tags && news.tags.length > 0 && (
        <SemanticCardContent variant="default">
          <div className="flex flex-wrap gap-2">
            {news.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </SemanticCardContent>
      )}

      <SemanticCardFooter variant="default" className="justify-between">
        <div className="text-muted-foreground flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={news.publishedAt}>
              {new Date(news.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
          {news.category && (
            <Badge variant="outline" className="text-xs font-medium">
              {news.category}
            </Badge>
          )}
        </div>
        <Button asChild size="sm" variant="ghost">
          <Link href={`/news/${news.slug}`}>Baca Selengkapnya</Link>
        </Button>
      </SemanticCardFooter>
    </SemanticCard>
  );
}

// Horizontal card - image and content side by side
function NewsCardHorizontal({
  news,
  headingLevel = 'h3',
  priority = false,
}: BaseNewsCardProps) {
  return (
    <SemanticCard variant="horizontal">
      <Link
        href={`/news/${news.slug}`}
        aria-label={`Baca selengkapnya tentang ${news.title}`}
        tabIndex={-1}
        className="block sm:contents"
      >
        <SemanticCardImage variant="horizontal">
          <Image
            src={news.imageUrl}
            alt={`Cover image for ${news.title}`}
            fill
            className="object-cover"
            priority={priority}
          />
          {news.isFeatured && (
            <Badge className="bg-primary absolute top-2 right-2 text-xs">
              Unggulan
            </Badge>
          )}
        </SemanticCardImage>
      </Link>

      <div className="flex flex-1 flex-col">
        <SemanticCardHeader variant="horizontal">
          <div className="mb-2 flex items-start justify-between gap-2">
            <SemanticCardTitle as={headingLevel} variant="horizontal">
              <Link
                href={`/news/${news.slug}`}
                className="hover:text-primary transition-colors"
              >
                {news.title}
              </Link>
            </SemanticCardTitle>
            {news.category && (
              <Badge variant="secondary" className="shrink-0 text-xs">
                {news.category}
              </Badge>
            )}
          </div>
          <SemanticCardDescription variant="horizontal">
            {news.excerpt}
          </SemanticCardDescription>
        </SemanticCardHeader>

        <SemanticCardFooter
          variant="horizontal"
          className="mt-auto justify-between"
        >
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <Clock className="h-3 w-3" />
            <time dateTime={news.publishedAt}>
              {new Date(news.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
          <Button asChild size="sm" variant="ghost">
            <Link href={`/news/${news.slug}`}>Baca Selengkapnya</Link>
          </Button>
        </SemanticCardFooter>
      </div>
    </SemanticCard>
  );
}

// Minimal card - clean and simple
function NewsCardMinimal({
  news,
  headingLevel = 'h3',
  priority = false,
}: BaseNewsCardProps) {
  return (
    <SemanticCard variant="minimal">
      <Link
        href={`/news/${news.slug}`}
        aria-label={`Baca selengkapnya tentang ${news.title}`}
        tabIndex={-1}
      >
        <SemanticCardImage variant="minimal">
          <Image
            src={news.imageUrl}
            alt={`Cover image for ${news.title}`}
            fill
            className="object-cover"
            priority={priority}
          />
        </SemanticCardImage>
      </Link>

      <SemanticCardHeader variant="minimal">
        <SemanticCardTitle as={headingLevel} variant="minimal">
          <Link
            href={`/news/${news.slug}`}
            className="hover:text-primary transition-colors"
          >
            {news.title}
          </Link>
        </SemanticCardTitle>
        <div className="mt-2 flex items-center justify-between">
          <time
            className="text-muted-foreground text-xs"
            dateTime={news.publishedAt}
          >
            {new Date(news.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </time>
          {news.category && (
            <Badge variant="outline" className="text-xs">
              {news.category}
            </Badge>
          )}
        </div>
      </SemanticCardHeader>
    </SemanticCard>
  );
}

// Featured card - larger and more prominent
function NewsCardFeatured({
  news,
  headingLevel = 'h1',
  priority = true,
}: BaseNewsCardProps) {
  return (
    <SemanticCard variant="featured" className="relative">
      <Link
        href={`/news/${news.slug}`}
        aria-label={`Baca selengkapnya tentang ${news.title}`}
        tabIndex={-1}
      >
        <SemanticCardImage variant="featured">
          <Image
            src={news.imageUrl}
            alt={`Cover image for ${news.title}`}
            fill
            className="object-cover"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {news.isFeatured && (
            <Badge className="bg-primary absolute top-4 left-4">
              Berita Unggulan
            </Badge>
          )}
        </SemanticCardImage>
      </Link>

      <SemanticCardHeader variant="featured">
        <div className="mb-3 flex items-center gap-2">
          {news.category && (
            <Badge className="bg-primary text-primary-foreground">
              {news.category}
            </Badge>
          )}
          <time
            className="text-muted-foreground text-sm"
            dateTime={news.publishedAt}
          >
            {new Date(news.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
        <SemanticCardTitle as={headingLevel} variant="featured">
          <Link
            href={`/news/${news.slug}`}
            className="hover:text-primary transition-colors"
          >
            {news.title}
          </Link>
        </SemanticCardTitle>
        <SemanticCardDescription variant="featured">
          {news.excerpt}
        </SemanticCardDescription>
      </SemanticCardHeader>

      {news.tags && news.tags.length > 0 && (
        <SemanticCardContent variant="featured">
          <div className="flex flex-wrap gap-2">
            {news.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </SemanticCardContent>
      )}

      <SemanticCardFooter variant="featured" className="justify-end">
        <Button asChild>
          <Link href={`/news/${news.slug}`}>Baca Cerita Lengkap</Link>
        </Button>
      </SemanticCardFooter>
    </SemanticCard>
  );
}

// Compact card - for dense layouts like sidebars
function NewsCardCompact({
  news,
  headingLevel = 'h4',
  priority = false,
}: BaseNewsCardProps) {
  return (
    <SemanticCard
      variant="compact"
      className="hover:bg-muted/50 transition-colors"
    >
      <div className="flex gap-3">
        <Link
          href={`/news/${news.slug}`}
          aria-label={`Baca selengkapnya tentang ${news.title}`}
          tabIndex={-1}
        >
          <SemanticCardImage variant="compact" className="h-16 w-20 shrink-0">
            <Image
              src={news.imageUrl}
              alt={`Cover image for ${news.title}`}
              fill
              className="object-cover"
              priority={priority}
            />
          </SemanticCardImage>
        </Link>

        <div className="min-w-0 flex-1">
          <SemanticCardHeader variant="compact">
            <SemanticCardTitle
              as={headingLevel}
              variant="compact"
              className="line-clamp-2"
            >
              <Link
                href={`/news/${news.slug}`}
                className="hover:text-primary transition-colors"
              >
                {news.title}
              </Link>
            </SemanticCardTitle>
          </SemanticCardHeader>

          <SemanticCardFooter variant="compact" className="justify-between">
            <time
              className="text-muted-foreground text-xs"
              dateTime={news.publishedAt}
            >
              {new Date(news.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </time>
            {news.category && (
              <Badge variant="outline" className="text-xs">
                {news.category}
              </Badge>
            )}
          </SemanticCardFooter>
        </div>
      </div>
    </SemanticCard>
  );
}

// Overlay card - text overlaid on image
function NewsCardOverlay({
  news,
  headingLevel = 'h2',
  priority = false,
}: BaseNewsCardProps) {
  return (
    <SemanticCard variant="overlay" className="relative min-h-[300px]">
      <Link
        href={`/news/${news.slug}`}
        aria-label={`Baca selengkapnya tentang ${news.title}`}
        tabIndex={-1}
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">Baca selengkapnya tentang {news.title}</span>
      </Link>

      <SemanticCardImage variant="overlay" className="absolute inset-0">
        <Image
          src={news.imageUrl}
          alt={`Cover image for ${news.title}`}
          fill
          className="object-cover"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </SemanticCardImage>

      {news.isFeatured && (
        <Badge className="bg-primary absolute top-4 right-4 z-20">
          Unggulan
        </Badge>
      )}

      <SemanticCardHeader variant="overlay">
        <div className="mb-2 flex items-center gap-2">
          {news.category && (
            <Badge className="border-white/30 bg-white/20 text-white">
              {news.category}
            </Badge>
          )}
          <time className="text-sm text-white/80" dateTime={news.publishedAt}>
            {new Date(news.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
        <SemanticCardTitle as={headingLevel} variant="overlay">
          {news.title}
        </SemanticCardTitle>
        <SemanticCardDescription variant="overlay">
          {news.excerpt}
        </SemanticCardDescription>
      </SemanticCardHeader>

      <SemanticCardFooter
        variant="overlay"
        className="relative z-20 justify-end"
      >
        <Button
          asChild
          variant="secondary"
          className="border-white/20 bg-white/10 text-white hover:bg-white/20"
        >
          <Link href={`/news/${news.slug}`}>Baca Selengkapnya</Link>
        </Button>
      </SemanticCardFooter>
    </SemanticCard>
  );
}

// List/Feed card - compact horizontal layout for news feeds and article lists
function NewsCardList({
  news,
  headingLevel = 'h3',
  priority = false,
}: BaseNewsCardProps) {
  return (
    <Link href={`/news/${news.slug}`} className="group block">
      <SemanticCard
        className="bg-secondary group-hover:ring-primary flex flex-col overflow-hidden rounded-md border transition-all duration-300 group-hover:shadow-lg group-hover:ring-1 sm:flex-row"
        itemScope
        itemType="https://schema.org/NewsArticle"
      >
        {/* Image Section */}
        <div className="relative h-24 w-full shrink-0 overflow-hidden sm:h-auto sm:w-40">
          <Image
            src={news.imageUrl}
            alt={`Cover image for ${news.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
            itemProp="image"
          />
          {/* Gradient overlay */}
          <div className="from-primary/40 via-primary/10 absolute inset-0 bg-gradient-to-b to-transparent transition-opacity group-hover:opacity-80" />

          {/* Category Badge */}
          {news.category && (
            <Badge
              className="bg-primary/10 text-primary-foreground ring-primary/30 absolute top-0 left-0 z-10 rounded px-2 py-0.5 text-[11px] font-semibold ring-1 backdrop-blur-sm transition-all duration-300 ring-inset group-hover:scale-105 group-hover:shadow"
              aria-label={`Category: ${news.category}`}
            >
              {news.category}
            </Badge>
          )}

          {/* Featured indicator */}
          {news.isFeatured && (
            <div className="border-t-primary absolute top-0 right-0 h-0 w-0 border-t-[20px] border-l-[20px] border-l-transparent">
              <div className="text-primary-foreground absolute -top-[18px] -left-[15px] text-[8px] font-bold">
                ★
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between gap-1 px-3 py-2 sm:py-1.5">
          {/* Title */}
          <SemanticCardTitle
            as={headingLevel}
            className="group-hover:text-primary line-clamp-2 text-sm leading-tight font-semibold transition-colors"
            itemProp="headline"
          >
            {news.title}
          </SemanticCardTitle>

          {/* Time */}
          <div className="text-muted-foreground group-hover:text-foreground/80 mt-0.5 flex items-center gap-1 text-[10px] transition-colors">
            <Clock className="h-3 w-3 shrink-0" />
            <time
              dateTime={news.publishedAt}
              itemProp="datePublished"
              className="truncate"
            >
              {new Date(news.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <meta itemProp="dateModified" content={news.publishedAt} />
          </div>

          {/* Excerpt */}
          <SemanticCardDescription
            itemProp="description"
            className="text-muted-foreground group-hover:text-foreground/70 line-clamp-1 text-[11px] transition-colors"
          >
            {news.excerpt}
          </SemanticCardDescription>

          {/* Tags */}
          {news.tags && news.tags.length > 0 && (
            <div className="hidden flex-wrap gap-1 pt-1 md:flex">
              {news.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-muted/50 border-muted-foreground/20 group-hover:border-primary/30 gap-0.5 px-1.5 py-0.5 text-[10px] transition-all"
                >
                  <span className="text-[8px]">#</span>
                  {tag}
                </Badge>
              ))}
              {news.tags.length > 3 && (
                <Badge
                  variant="outline"
                  className="bg-muted/50 border-muted-foreground/20 group-hover:border-primary/30 px-1.5 py-0.5 text-[10px] transition-all"
                >
                  +{news.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
      </SemanticCard>
    </Link>
  );
}

// Export all variants
export {
  NewsCard,
  NewsCardCompact,
  NewsCardFeatured,
  NewsCardHorizontal,
  NewsCardList,
  NewsCardMinimal,
  NewsCardOverlay,
};
