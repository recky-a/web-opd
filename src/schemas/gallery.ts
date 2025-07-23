import { z } from 'zod';

import { photoItemSchema } from './photo';
import { videoItemSchema } from './video';

export const galleryDataSchema = z.object({
  photos: z.array(photoItemSchema),
  videos: z.array(videoItemSchema),
});

export type GalleryData = z.infer<typeof galleryDataSchema>;

export const gallerySectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
});

export type GallerySectionProps = z.infer<typeof gallerySectionSchema>;
