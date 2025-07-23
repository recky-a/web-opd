import { z } from 'zod';

export const videoItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  videoId: z.string(),
  thumbnailUrl: z.string().url(),
  description: z.string(),
  duration: z.string(), // e.g., "6:10"
  date: z.string(), // or z.coerce.date()
  views: z.string(), // e.g., "12.5K"
  category: z.string(),
  tags: z.array(z.string()),
});

export type VideoItem = z.infer<typeof videoItemSchema>;
