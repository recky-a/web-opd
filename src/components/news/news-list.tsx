import {
  NewsCard,
  NewsCardCompact,
  NewsCardFeatured,
  NewsCardHorizontal,
  NewsCardList,
  NewsCardMinimal,
  NewsCardOverlay,
} from '@/components/news/news-card';
import { News } from '@/types/news';

interface NewsListProps {
  news: News[];
  variant?:
    | 'default'
    | 'horizontal'
    | 'minimal'
    | 'featured'
    | 'compact'
    | 'overlay'
    | 'list'
    | 'mixed';
}

export function NewsList({ news, variant = 'default' }: NewsListProps) {
  const renderCard = (item: News, index: number) => {
    const props = {
      news: item,
      priority: index === 0, // First image gets priority loading
    };

    switch (variant) {
      case 'horizontal':
        return <NewsCardHorizontal {...props} key={item.id} />;
      case 'minimal':
        return <NewsCardMinimal {...props} key={item.id} />;
      case 'featured':
        return <NewsCardFeatured {...props} key={item.id} headingLevel="h2" />;
      case 'compact':
        return <NewsCardCompact {...props} key={item.id} />;
      case 'overlay':
        return <NewsCardOverlay {...props} key={item.id} />;
      case 'list':
        return <NewsCardList {...props} key={item.id} />;
      case 'mixed':
        // Mixed layout: featured for first, horizontal for next 3, default for rest
        if (index === 0) return <NewsCardFeatured {...props} key={item.id} />;
        if (index <= 3) return <NewsCardHorizontal {...props} key={item.id} />;
        return <NewsCard {...props} key={item.id} />;
      default:
        return <NewsCard {...props} key={item.id} />;
    }
  };

  const getGridClasses = () => {
    switch (variant) {
      case 'horizontal':
      case 'compact':
      case 'list':
        return 'space-y-4';
      case 'featured':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8';
      case 'overlay':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'mixed':
        return 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <section
      className={getGridClasses()}
      role="feed"
      aria-label="News articles"
    >
      {news.map(renderCard)}
    </section>
  );
}
