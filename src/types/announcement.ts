export interface Announcement {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  link?: string;
  category: string;
  isPinned?: boolean;
  isPopular?: boolean;
  views: number;
}
