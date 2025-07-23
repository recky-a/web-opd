'use client';

// TODO: we can refactor this and make it more optimize or performance by using RSC first in mind

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Announcement } from '@/types/announcement';
import {
  format,
  formatDistanceToNowStrict,
  isToday,
  isYesterday,
  parseISO,
} from 'date-fns';
import { id } from 'date-fns/locale';
import {
  Bell,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  Pin,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

interface AnnouncementTabProps {
  className?: string;
  maxItems?: number;
  showViewAll?: boolean;
  announcements: Announcement[];
  viewAllLink?: string;
  emptyStateMessage?: string;
}

export default function AnnouncementTab({
  className,
  maxItems = 20,
  showViewAll = true,
  announcements = [],
  viewAllLink = '/pengumuman',
  emptyStateMessage = 'Belum ada pengumuman saat ini.',
}: AnnouncementTabProps) {
  const sortedAnnouncements = useMemo(() => {
    return [...announcements]
      .sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      })
      .slice(0, maxItems);
  }, [announcements, maxItems]);

  const getCategoryColor = (category: string) => {
    if (!category) {
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/30 dark:text-gray-300 dark:border-gray-600';
    }

    const hash = category
      .split('')
      .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const colorPalettes = [
      'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
      'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
      'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
      'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
      'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
      'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700',
      'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700',
      'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
      'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700',
      'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700',
    ];

    const colorIndex = Math.abs(hash) % colorPalettes.length;
    return colorPalettes[colorIndex];
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = parseISO(dateString);

      if (isToday(date)) return 'Hari ini';
      if (isYesterday(date)) return 'Kemarin';

      const diffText = formatDistanceToNowStrict(date, {
        locale: id,
        addSuffix: true,
      });
      const diffDays = Math.floor(
        (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays <= 7) return diffText; // "3 hari yang lalu", etc

      return format(date, 'd MMMM yyyy', { locale: id }); // "16 Juli 2025"
    } catch {
      return dateString;
    }
  };

  const formatViews = (views: number): string => {
    if (!views) return '0';

    if (views >= 1_000_000) {
      return `${(views / 1_000_000).toFixed(1).replace('.', ',')} juta`;
    }

    if (views >= 1_000) {
      return `${(views / 1_000).toFixed(1).replace('.', ',')} ribu`;
    }

    return views.toString();
  };

  const PriorityBadge = ({ item }: { item: Announcement }) =>
    item.isPinned ? (
      <span className="flex items-center gap-1 rounded-bl-lg bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-1 text-xs font-medium text-white shadow-md sm:px-3">
        <Pin className="size-3" />
        <span className="hidden sm:inline">Disematkan</span>
      </span>
    ) : null;

  return (
    <section
      className={cn(
        'rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4 shadow-sm transition-colors duration-300',
        'dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:shadow-slate-900/20',
        'sm:p-6',
        className
      )}
      aria-labelledby="announcement-heading"
      role="region"
    >
      <header className="mb-4 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-3">
          <span className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-2 shadow-lg dark:shadow-slate-900/50">
            <Bell className="size-5 text-white sm:size-6" />
          </span>
          <span className="min-w-0 flex-1">
            <h3
              id="announcement-heading"
              className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl dark:text-slate-200"
            >
              Pengumuman Terbaru
            </h3>
            <p className="mt-1 text-sm text-slate-600 sm:text-base dark:text-slate-400">
              <span className="hidden sm:inline">
                Tetap update dengan informasi penting dari Kabupaten Bangka
              </span>
              <span className="sm:hidden">
                Informasi penting Kabupaten Bangka
              </span>
            </p>
          </span>
        </span>

        {showViewAll && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden border-slate-300 hover:bg-slate-100 sm:inline-flex dark:border-slate-600 dark:hover:bg-slate-800"
          >
            <Link href={viewAllLink} prefetch={false}>
              Lihat Semua
              <ExternalLink className="ml-1 size-4" />
            </Link>
          </Button>
        )}
      </header>

      {sortedAnnouncements.length === 0 ? (
        <p className="py-8 text-center text-slate-500 sm:py-12 dark:text-slate-400">
          <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-slate-200 sm:size-16 dark:bg-slate-700">
            <Bell className="size-6 text-slate-400 sm:size-8 dark:text-slate-500" />
          </span>
          <br />
          <span className="text-sm">{emptyStateMessage}</span>
        </p>
      ) : (
        <ul className="space-y-3 sm:space-y-4">
          {sortedAnnouncements.map((item) => (
            <li key={item.id}>
              <article
                className={cn(
                  'group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg',
                  'focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-slate-900',
                  item.isPinned
                    ? 'border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 hover:border-amber-300 dark:border-amber-700 dark:from-amber-950/20 dark:to-orange-950/20 dark:hover:border-amber-600'
                    : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600',
                  'hover:-translate-y-1 hover:scale-[1.02] sm:rounded-2xl'
                )}
                aria-label={`Pengumuman: ${item.title}`}
              >
                <span className="absolute top-0 right-0 z-10">
                  <PriorityBadge item={item} />
                </span>

                <Link
                  href={item.link || '#'}
                  className="block space-y-3 p-4 focus:outline-none sm:p-6"
                  prefetch={false}
                >
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="flex flex-wrap items-center gap-2">
                      {item.category && (
                        <Badge
                          variant="outline"
                          className={cn(
                            'text-xs font-medium',
                            getCategoryColor(item.category)
                          )}
                        >
                          {item.category}
                        </Badge>
                      )}
                      {item.isPopular && (
                        <Badge
                          variant="outline"
                          className="border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        >
                          <TrendingUp className="mr-1 size-3" />
                          <span className="hidden sm:inline">Populer</span>
                        </Badge>
                      )}
                    </span>
                    <span className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <time dateTime={item.publishedAt}>
                          {formatDate(item.publishedAt)}
                        </time>
                      </span>
                      {!!item.views && (
                        <span className="flex items-center gap-1">
                          <Eye className="size-3" />
                          {formatViews(item.views)}
                        </span>
                      )}
                    </span>
                  </header>

                  <h3 className="line-clamp-2 text-base leading-tight font-semibold text-slate-800 transition-colors group-hover:text-blue-600 sm:text-lg dark:text-slate-200 dark:group-hover:text-blue-400">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="line-clamp-2 text-sm text-slate-600 sm:line-clamp-3 dark:text-slate-400">
                      {item.description}
                    </p>
                  )}

                  {item.link && (
                    <footer className="flex items-center justify-between pt-1 sm:pt-2">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline-offset-4 group-hover:underline dark:text-blue-400">
                        Selengkapnya
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <ExternalLink className="size-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-500" />
                    </footer>
                  )}
                </Link>

                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400/5 dark:to-purple-400/5" />
              </article>
            </li>
          ))}
        </ul>
      )}

      {showViewAll && (
        <span className="mt-4 flex justify-center sm:mt-6 sm:hidden">
          <Button
            variant="outline"
            className="w-full border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
            asChild
          >
            <Link href={viewAllLink} prefetch={false}>
              Lihat Semua Pengumuman
              <ExternalLink className="ml-1 size-4" />
            </Link>
          </Button>
        </span>
      )}
    </section>
  );
}
