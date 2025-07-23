// schemas/relatedPortals.ts
import { z } from 'zod';

export const portalSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.union([
    z.string().url(),
    z.string().regex(/^\/.*/, {
      message: 'href must be a valid URL or start with "/" for internal links',
    }),
  ]),
  logo: z.string().url().optional(),
});

export type Portal = z.infer<typeof portalSchema>;

export const relatedPortalsSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  portals: z.array(portalSchema),
});

export type RelatedPortalsSectionData = z.infer<
  typeof relatedPortalsSectionSchema
>;
