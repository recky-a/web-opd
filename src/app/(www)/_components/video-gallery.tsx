'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useState } from 'react';

import { VideoItem } from '@/schemas/video';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export function VideoGallery({ videoData }: { videoData: VideoItem[] }) {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof videoData)[0] | null
  >(null);

  const handleOpen = (video: (typeof videoData)[0]) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  return (
    <>
      <section
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Galeri Video Digital Kabupaten Bangka"
      >
        {videoData.map((video) => (
          <article
            key={video.id}
            onClick={() => handleOpen(video)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-white shadow transition-all hover:scale-[1.01] hover:shadow-xl"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={video.thumbnailUrl}
                alt={`Thumbnail untuk ${video.title}`}
                fill
                className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </AspectRatio>

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <PlayCircle className="h-16 w-16 text-white/90 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="line-clamp-2 text-sm font-semibold">
                {video.title}
              </h3>
              <p className="text-xs text-white/70">
                {video.duration} • {video.views} views
              </p>
            </div>
          </article>
        ))}
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-0 bg-black p-0 sm:max-w-[960px]">
          {selectedVideo && (
            <>
              <VisuallyHidden>
                <DialogTitle>{selectedVideo.title}</DialogTitle>
              </VisuallyHidden>

              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </AspectRatio>

              <div className="space-y-3 p-4 text-white">
                <h2 className="text-lg font-bold">{selectedVideo.title}</h2>
                <p className="text-sm text-white/80">
                  {selectedVideo.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
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
