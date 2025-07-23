import { z } from 'zod';

export const photoItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().url(),
  alt: z.string(),
  date: z.string(), // Consider using z.coerce.date() if using Date
  location: z.string(),
  category: z.string(),
  description: z.string(),
  photographer: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean(),
  orientation: z.enum(['landscape', 'portrait']),
});

export type PhotoItem = z.infer<typeof photoItemSchema>;
