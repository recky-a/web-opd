import { icons } from 'lucide-react';
import { z } from 'zod';

export const iconNames = z.enum([
  ...(Object.keys(icons) as [keyof typeof icons]),
]);

export const statisticItemSchema = z.object({
  label: z.string(),
  value: z.union([z.string(), z.number()]),
  unit: z.string().optional(),
  iconName: iconNames.optional(), // 👈 serialized icon name
  description: z.string().optional(),
});

export const statisticSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  backgroundImageUrl: z.string().url().optional(),
  items: z.array(statisticItemSchema),
});

export type StatisticItem = z.infer<typeof statisticItemSchema>;
export type StatisticSectionData = z.infer<typeof statisticSectionSchema>;
