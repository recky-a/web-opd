// lib/get-opd.ts
// import { opdSchema, type OPD } from '@/schemas/opd';
// import { env } from '@/env'; // T3-env style
// import { db } from '@/db';   // Your drizzle ORM instance
// import { opdTable } from '@/db/schema';

// let cachedOpd: OPD | null = null;

// export async function getOPD(): Promise<OPD> {
// 1. Return cached value if available
//   if (cachedOpd) return cachedOpd;

// 2. Attempt to read from DB
// try {
//   const result = await db.query.opdTable.findFirst({ where: /*...*/ });
//   if (result) {
//     cachedOpd = opdSchema.parse(result);
//     return cachedOpd;
//   }
// } catch (e) {
//   console.warn('[OPD] Failed to fetch from DB:', e);
// }

// 3. Attempt to read from ENV (e.g., JSON stringified)
// try {
//   const parsedFromEnv = opdSchema.parse(JSON.parse(env.OPD_JSON));
//   cachedOpd = parsedFromEnv;
//   return parsedFromEnv;
// } catch (e) {
//   console.warn('[OPD] Failed to parse from env:', e);
// }

// 4. Fallback to local mock
//   const rawConfig = {
//     name: 'Dinas Komunikasi dan Informatika Kabupaten Bangka',
//     head: {
//       name: 'Drs. Ahmad Syahril',
//       title: 'Kepala Dinas',
//       photoUrl: 'https://bangka.go.id/uploads/kepala-kominfo.jpg',
//       bio: 'Drs. Ahmad Syahril telah menjabat sebagai Kepala Dinas Komunikasi dan Informatika Kabupaten Bangka sejak 2020. Beliau memiliki latar belakang panjang di bidang teknologi informasi dan komunikasi.',
//       quote: 'Transparansi, Inovasi, dan Pelayanan adalah kunci pemerintahan digital.',
//     },
//     divisions: [
//       {
//         name: 'E-Government',
//         abbreviation: 'E-Gov',
//         description: 'Bertanggung jawab atas pengembangan dan pengelolaan sistem pemerintahan berbasis elektronik.',
//         employeeCount: 12,
//       },
//       {
//         name: 'Persandian',
//         abbreviation: 'Persandian',
//         description: 'Menangani keamanan informasi dan sandi di lingkungan pemerintah daerah.',
//         employeeCount: 8,
//       },
//       {
//         name: 'Statistik',
//         abbreviation: 'Statistik',
//         description: 'Mengelola data dan statistik sektoral daerah untuk mendukung kebijakan publik.',
//         employeeCount: 7,
//       },
//       {
//         name: 'Informasi dan Komunikasi Publik',
//         abbreviation: 'IKP',
//         description: 'Mengelola publikasi, media sosial, dan layanan informasi kepada masyarakat.',
//         employeeCount: 10,
//       },
//     ],
//     workingHours: [
//       { day: 1, open: '08:00', close: '16:00' },
//       { day: 2, open: '08:00', close: '16:00' },
//       { day: 3, open: '08:00', close: '16:00' },
//       { day: 4, open: '08:00', close: '16:00' },
//       { day: 5, open: '08:00', close: '16:00' },
//     ],
//     contact: {
//       phone: '(0718) 123456',
//       fax: '(0718) 654321',
//       email: 'kominfo@bangkakab.go.id',
//       address: 'Jl. Jenderal Sudirman No. 23, Sungailiat, Bangka',
//       postalCode: '33215',
//       coordinates: {
//         lat: -1.8897,
//         lng: 106.1226,
//       },
//     },
//   };

//   cachedOpd = opdSchema.parse(rawConfig);
//   return cachedOpd;
// }

import { opdSchema, type OPD } from '@/schemas/opd';

const rawConfig = {
  name: 'Dinas Komunikasi dan Informatika Kabupaten Bangka',
  head: {
    name: 'Drs. Ahmad Syahril',
    title: 'Kepala Dinas',
    photoUrl:
      'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=600&q=80',
    bio: 'Drs. Ahmad Syahril telah menjabat sebagai Kepala Dinas Komunikasi dan Informatika Kabupaten Bangka sejak 2020. Beliau memiliki latar belakang panjang di bidang teknologi informasi dan komunikasi.',
    quote:
      'Transparansi, Inovasi, dan Pelayanan adalah kunci pemerintahan digital.',
  },
  divisions: [
    {
      name: 'E-Government',
      abbreviation: 'E-Gov',
      description:
        'Bertanggung jawab atas pengembangan dan pengelolaan sistem pemerintahan berbasis elektronik.',
      employeeCount: 12,
    },
    {
      name: 'Persandian',
      abbreviation: 'Persandian',
      description:
        'Menangani keamanan informasi dan sandi di lingkungan pemerintah daerah.',
      employeeCount: 8,
    },
    {
      name: 'Statistik',
      abbreviation: 'Statistik',
      description:
        'Mengelola data dan statistik sektoral daerah untuk mendukung kebijakan publik.',
      employeeCount: 7,
    },
    {
      name: 'Informasi dan Komunikasi Publik',
      abbreviation: 'IKP',
      description:
        'Mengelola publikasi, media sosial, dan layanan informasi kepada masyarakat.',
      employeeCount: 10,
    },
  ],
  workingHours: [
    { day: 1, open: '08:00', close: '16:00' },
    { day: 2, open: '08:00', close: '16:00' },
    { day: 3, open: '08:00', close: '16:00' },
    { day: 4, open: '08:00', close: '16:00' },
    { day: 5, open: '08:00', close: '16:00' },
  ],
  contact: {
    phone: '(0718) 123456',
    fax: '(0718) 654321',
    email: 'kominfo@bangkakab.go.id',
    address: 'Jl. Jenderal Sudirman No. 23, Sungailiat, Bangka',
    postalCode: '33215',
    coordinates: {
      lat: -1.8897,
      lng: 106.1226,
    },
  },
};

export const opd: OPD = opdSchema.parse(rawConfig);
