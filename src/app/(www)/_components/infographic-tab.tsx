'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// ## 1. Type Definition & Data Outside Component
// Moved outside for better code organization and reusability.
// Added width, height, and date for more dynamic and accurate rendering.
type Infographic = {
  id: string;
  title: string;
  imageUrl: string;
  downloadUrl: string;
  date: string; // ISO 8601 format (YYYY-MM-DD) for the <time> element
  width: number;
  height: number;
  orientation?: 'potret' | 'lanskap' | 'persegi';
};

const infographicsData: Infographic[] = [
  {
    id: '5',
    title: 'Statistik Penduduk Kabupaten Bangka 2025',
    imageUrl:
      'https://images.pexels.com/photos/669966/pexels-photo-669966.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    downloadUrl: '/downloads/infografis/statistik-penduduk.pdf',
    date: '2025-07-21',
    width: 800,
    height: 1200,
    orientation: 'potret',
  },
  {
    id: '6',
    title: 'Peta Infrastruktur Jalan 2025',
    imageUrl:
      'https://images.pexels.com/photos/256312/pexels-photo-256312.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    downloadUrl: '/downloads/infografis/infrastruktur-jalan.pdf',
    date: '2025-07-18',
    width: 1200,
    height: 800,
    orientation: 'lanskap',
  },
  {
    id: '7',
    title: 'Distribusi Bantuan Sosial 2025',
    imageUrl:
      'https://images.pexels.com/photos/6646939/pexels-photo-6646939.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    downloadUrl: '/downloads/infografis/bansos-2025.pdf',
    date: '2025-07-12',
    width: 800,
    height: 800,
    orientation: 'persegi',
  },
  {
    id: '8',
    title: 'Program Pemberdayaan UMKM',
    imageUrl:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    downloadUrl: '/downloads/infografis/umkm.pdf',
    date: '2025-07-08',
    width: 800,
    height: 1200,
    orientation: 'potret',
  },
  {
    id: '9',
    title: 'Grafik Pertumbuhan Ekonomi',
    imageUrl:
      'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    downloadUrl: '/downloads/infografis/pertumbuhan-ekonomi.pdf',
    date: '2025-07-04',
    width: 1200,
    height: 800,
    orientation: 'lanskap',
  },
  {
    id: '10',
    title: 'Peta Sebaran Sekolah Dasar',
    imageUrl:
      'https://images.pexels.com/photos/861331/pexels-photo-861331.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    downloadUrl: '/downloads/infografis/sekolah-dasar.pdf',
    date: '2025-06-28',
    width: 800,
    height: 800,
    orientation: 'persegi',
  },
  {
    id: '11',
    title: 'Rencana Tata Ruang Wilayah 2025',
    imageUrl:
      'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    downloadUrl: '/downloads/infografis/rtrw.pdf',
    date: '2025-06-21',
    width: 800,
    height: 1200,
    orientation: 'potret',
  },
  {
    id: '12',
    title: 'Perkembangan Pariwisata Bangka',
    imageUrl:
      'https://images.pexels.com/photos/3185488/pexels-photo-3185488.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    downloadUrl: '/downloads/infografis/pariwisata.pdf',
    date: '2025-06-14',
    width: 1200,
    height: 800,
    orientation: 'lanskap',
  },
  {
    id: '13',
    title: 'Data Ketahanan Pangan',
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
    downloadUrl: '/downloads/infografis/ketahanan-pangan.pdf',
    date: '2025-06-07',
    width: 800,
    height: 1200,
    orientation: 'potret',
  },
  {
    id: '14',
    title: 'Tingkat Partisipasi Pendidikan',
    imageUrl:
      'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    downloadUrl: '/downloads/infografis/pendidikan.pdf',
    date: '2025-06-01',
    width: 800,
    height: 800,
    orientation: 'persegi',
  },
];

export default function InfographicTab() {
  const [selected, setSelected] = useState<Infographic | null>(null);

  // ## 2. Handler Function
  // A single handler function improves performance by avoiding inline arrow function creation on each render.
  const handleOpenDialog = (infographic: Infographic) => {
    setSelected(infographic);
  };

  const handleCloseDialog = () => {
    setSelected(null);
  };

  // ## 3. Dynamic Grid Layout
  // Helper to determine the grid span based on orientation for a dynamic masonry effect.
  const getGridSpan = (orientation?: 'potret' | 'lanskap' | 'persegi') => {
    switch (orientation) {
      case 'potret':
        return 'md:row-span-[2]'; // Taller images take up more vertical space
      case 'lanskap':
        return 'md:col-span-2'; // Wider images take up more horizontal space
      default:
        return '';
    }
  };

  return (
    <section className="bg-background rounded-lg p-4 md:p-6">
      <h2 className="text-foreground mb-6 flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
        <ImageIcon className="text-primary size-7" />
        Infografis Publik
      </h2>

      {/* ## 4. Responsive CSS Grid */}
      {/* Replaced 'columns' with CSS Grid for more control over the layout. */}
      {/* 'grid-auto-flow: dense' packs items efficiently. */}
      <div className="md:grid-auto-flow-dense grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {infographicsData.map((item) => (
          // ## 5. SEO & Accessibility Improvement
          // Using a <button> is more semantic and accessible than a clickable <div>.
          <button
            key={item.id}
            onClick={() => handleOpenDialog(item)}
            className={cn(
              'group hover:ring-primary focus-visible:ring-primary focus-visible:ring-offset-background relative block cursor-pointer break-inside-avoid overflow-hidden rounded-lg shadow-md transition-all outline-none hover:shadow-xl hover:ring-2 focus-visible:ring-2 focus-visible:ring-offset-2',
              getGridSpan(item.orientation)
            )}
            aria-label={`Perbesar infografis: ${item.title}`}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEyMDAiIHZpZXdCb3g9IjAgMCA4MDAgMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTFhMGFkIi8+PC9zdmc+" // A simple, solid color blur placeholder
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-4 text-left">
              <h3 className="font-bold text-white drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                Klik untuk perbesar
              </p>
            </div>
            <time
              dateTime={item.date}
              className="bg-background/80 text-foreground absolute top-2 right-2 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm"
            >
              {format(parseISO(item.date), 'd MMM yyyy', { locale: id })}
            </time>
          </button>
        ))}
      </div>

      {/* ## 6. Improved Dialog */}
      {/* Dialog is controlled by `selected` state, making the open/close logic cleaner. */}
      <Dialog
        open={!!selected}
        onOpenChange={(isOpen) => !isOpen && handleCloseDialog()}
      >
        <DialogContent
          showCloseButton={false}
          className={cn(
            'border-border bg-background max-w-[95vw] rounded-2xl border p-0 shadow-xl sm:max-w-4xl',
            'animate-in fade-in zoom-in-90 duration-300'
          )}
          aria-describedby={undefined}
        >
          {selected && (
            <div className="flex max-h-[90vh] flex-col overflow-hidden">
              {/* Header */}
              <DialogHeader className="border-border bg-muted/30 border-b px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4">
                <DialogTitle className="text-foreground text-lg font-semibold tracking-tight">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              {/* Scrollable Image Area */}
              <div className="bg-background flex-1 overflow-auto px-4 py-5 sm:px-6 sm:py-6">
                <figure className="relative mx-auto w-full max-w-full">
                  <Image
                    src={selected.imageUrl}
                    alt={selected.title}
                    width={selected.width}
                    height={selected.height}
                    priority
                    className="mx-auto max-h-[65vh] w-auto rounded-md object-contain shadow-md transition duration-300"
                  />
                  <figcaption className="text-muted-foreground mt-4 text-center text-sm">
                    Tanggal:{' '}
                    <time dateTime={selected.date}>
                      {format(parseISO(selected.date), 'd MMMM yyyy', {
                        locale: id,
                      })}
                    </time>
                  </figcaption>
                </figure>
              </div>

              {/* Footer */}
              <DialogFooter className="border-border bg-muted/30 flex flex-col-reverse items-stretch gap-3 border-t px-4 py-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
                <Button
                  variant="outline"
                  onClick={handleCloseDialog}
                  className="w-full cursor-pointer sm:w-auto"
                >
                  Tutup
                </Button>
                <Link
                  href={selected.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  aria-label={`Unduh PDF ${selected.title}`}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'w-full text-sm font-semibold sm:w-auto'
                  )}
                >
                  Unduh PDF
                </Link>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
