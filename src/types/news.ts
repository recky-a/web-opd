export interface News {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  slug: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  category: string;
  tags?: string[];
}
