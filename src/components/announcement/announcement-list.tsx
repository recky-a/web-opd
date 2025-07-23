import { Badge } from '@/components/ui/badge';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { id as localeID } from 'date-fns/locale';
import { AlarmClock, Info, Megaphone, Star } from 'lucide-react';
import Link from 'next/link';

export interface AnnouncementItem {
  id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  slug: string;
  category?: string;
  isImportant?: boolean;
}

interface AnnouncementListProps {
  items: AnnouncementItem[];
}

export default function AnnouncementList({ items }: AnnouncementListProps) {
  if (!items || items.length === 0) {
    return (
      <div className="text-muted-foreground text-center text-sm">
        Belum ada pengumuman.
      </div>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const date = parseISO(item.publishedAt);
        const formattedDate = format(date, 'dd MMM yyyy', { locale: localeID });
        const timeAgo = formatDistanceToNow(date, {
          addSuffix: true,
          locale: localeID,
        });

        return (
          <li key={item.id}>
            <Link
              href={item.slug}
              className="group border-border bg-background/70 focus-visible:ring-primary relative block h-full rounded-xl border shadow-md backdrop-blur-md transition-all hover:scale-[1.01] hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              {/* Important ribbon */}
              {item.isImportant && (
                <div className="absolute top-0 right-0 z-10 flex items-center gap-1 rounded-bl-md bg-yellow-400 px-2 py-0.5 text-xs font-semibold text-white shadow-sm">
                  <Star className="size-3.5" />
                  Penting
                </div>
              )}

              <div
                className={`flex h-full flex-col justify-between space-y-3 px-4 py-7 md:py-8`}
              >
                {/* Header Info */}
                <div className="text-muted-foreground flex items-center justify-between text-xs">
                  <time className="flex items-center gap-1">
                    <AlarmClock className="size-3.5" />
                    {formattedDate}
                  </time>
                  {item.category && (
                    <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                      {item.category}
                    </Badge>
                  )}
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-1">
                  <h4 className="text-foreground group-hover:text-primary line-clamp-2 text-base font-semibold transition">
                    {item.title}
                  </h4>
                  {item.excerpt && (
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {item.excerpt}
                    </p>
                  )}
                </div>

                {/* Footer Info */}
                <div className="text-muted-foreground mt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <Info className="size-3.5 text-blue-500" />
                    <span className="italic">{timeAgo}</span>
                  </div>

                  <span className="text-primary flex items-center gap-1 hover:underline">
                    <Megaphone className="size-3.5" />
                    Lihat
                  </span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
