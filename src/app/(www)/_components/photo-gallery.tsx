'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { PhotoItem } from '@/schemas/photo';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function PhotoGallery({ photoData }: { photoData: PhotoItem[] }) {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof photoData)[0] | null
  >(null);

  const handleOpen = (photo: (typeof photoData)[0]) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  return (
    <>
      {/* 🧱 Modern Masonry Layout using columns */}
      <section
        className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4"
        aria-label="Galeri Foto Publik Kabupaten Bangka"
      >
        {photoData.map((photo) => (
          <article
            key={photo.id}
            onClick={() => handleOpen(photo)}
            className="group relative w-full cursor-pointer break-inside-avoid overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              width={600}
              height={800}
              className="w-full rounded-3xl object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h2 className="line-clamp-2 text-sm font-semibold text-white drop-shadow-sm">
                {photo.title}
              </h2>
            </div>
          </article>
        ))}
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[calc(97dvh)] space-y-2 overflow-y-auto rounded-3xl border border-gray-100 bg-white p-0 shadow-2xl"
        >
          {selectedPhoto && (
            <>
              <VisuallyHidden>
                <DialogTitle>{selectedPhoto.title}</DialogTitle>
              </VisuallyHidden>

              {/* Tombol Close Custom */}
              <DialogClose asChild>
                <button
                  className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 text-gray-700 backdrop-blur transition hover:bg-white hover:text-black"
                  aria-label="Tutup"
                >
                  <X className="h-5 w-5" />
                </button>
              </DialogClose>

              <div
                className={`relative w-full ${
                  selectedPhoto.orientation === 'landscape'
                    ? 'aspect-video max-h-[80vh]'
                    : 'aspect-[3/4]'
                }`}
              >
                <Image
                  src={selectedPhoto.url}
                  alt={selectedPhoto.alt}
                  fill
                  className={`rounded-xl object-center ${
                    selectedPhoto.orientation === 'landscape'
                      ? 'max-h-[80vh] object-fill'
                      : 'object-cover'
                  }`}
                  loading="eager"
                  priority
                />
              </div>

              <div className="space-y-5 p-4 text-left">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {selectedPhoto.date} • {selectedPhoto.location}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-gray-700">
                  {selectedPhoto.description}
                </p>
                <p className="text-sm text-gray-500">
                  📸 {selectedPhoto.photographer}
                </p>

                <div className="flex flex-wrap gap-2 pt-3">
                  {selectedPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 text-xs font-medium transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
