import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_SITE_NAME: z.string().min(1),
    NEXT_PUBLIC_SITE_SHORTNAME: z.string().min(1),
    NEXT_PUBLIC_DEV_NAME: z.string().min(1),
    NEXT_PUBLIC_DEV_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_SHORTNAME: process.env.NEXT_PUBLIC_SITE_SHORTNAME,
    NEXT_PUBLIC_DEV_NAME: process.env.NEXT_PUBLIC_DEV_NAME,
    NEXT_PUBLIC_DEV_URL: process.env.NEXT_PUBLIC_DEV_URL,
  },
});
