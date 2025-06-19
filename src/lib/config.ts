// config.ts
import { env } from '@/env';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';

export const siteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  shortName: env.NEXT_PUBLIC_SITE_SHORTNAME,
  description:
    'Website Resmi Dinas Komunikasi, Informatika, dan Statistik Kabupaten Bangka - Melayani masyarakat dengan transparansi, akuntabilitas, dan inovasi teknologi informasi.',
  url: env.NEXT_PUBLIC_BASE_URL,
  ogImage: `${env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
  twitterImage: `${env.NEXT_PUBLIC_BASE_URL}/twitter-image.png`,
  locale: 'id_ID',
  region: 'Kabupaten Bangka',
  province: 'Kepulauan Bangka Belitung',
  country: 'Indonesia',
  timezone: 'Asia/Jakarta',

  compliance: {
    wcagLevel: 'AA',
    lastAuditDate: '2024-12-01',
    accessibilityContact: 'aksesibilitas@dinkominfotik.bangka.go.id',
    privacyOfficer: 'privacy@dinkominfotik.bangka.go.id',
  },

  contact: {
    phone: '+62-717-421234',
    fax: '+62-717-421235',
    email: 'info@dinkominfotik.bangka.go.id',
    address:
      'Jl. Raya Pangkalpinang - Sungailiat, Kabupaten Bangka, Kepulauan Bangka Belitung',
    postalCode: '33684',
    coordinates: {
      lat: -2.1187,
      lng: 106.114,
    },
    serviceHours: {
      weekdays: '08:00 - 16:00 WIB',
      friday: '08:00 - 16:30 WIB',
      weekend: 'Tutup',
    },
  },

  social: {
    facebook: {
      name: 'Facebook',
      url: 'https://facebook.com/dinkominfotikbangka',
      icon: 'facebook',
    },
    twitter: {
      name: 'Twitter',
      url: 'https://twitter.com/dinkominfotikbangka',
      icon: 'x',
    },
    instagram: {
      name: 'Instagram',
      url: 'https://instagram.com/dinkominfotikbangka',
      icon: 'instagram',
    },
    youtube: {
      name: 'YouTube',
      url: 'https://youtube.com/@dinkominfotikbangka',
      icon: 'youtube',
    },
  },

  keywords: [
    'Dinas Komunikasi Bangka',
    'Informatika Kabupaten Bangka',
    'Statistik Bangka',
    'Pemerintah Kabupaten Bangka',
    'Layanan Publik Bangka',
    'E-Government Bangka',
    'Dinkominfotik',
    'Bangka Belitung',
    'Kepulauan Bangka Belitung',
    'Babel',
    'Sungailiat',
    'Pangkalpinang',
    'Pelayanan Digital',
    'Smart City Bangka',
    'Open Data Bangka',
    'Transparansi Pemerintah',
    'Akuntabilitas Publik',
    'Website Pemerintah',
    'Portal Resmi',
    'Sistem Informasi',
    'Data Analytics',
    'Digitalisasi',
  ],

  monitoring: {
    analyticsId: process.env.NEXT_PUBLIC_GA_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  features: {
    darkMode: true,
    multiLanguage: false,
    chatBot: process.env.NEXT_PUBLIC_ENABLE_CHATBOT === 'true',
    onlineServices: true,
    guestBook: true,
    survey: true,
  },
};

export const siteAuthors: Author[] = [
  {
    name: env.NEXT_PUBLIC_DEV_NAME,
    url: env.NEXT_PUBLIC_DEV_URL,
  },
  {
    name: 'Ricky Anderson',
    url: 'https://linkedin.com/in/ricky-anderson-367644188',
  },
];

type NavLink = {
  name: string;
  href: string;
  description: string;
};

export type ChildNavItem = NavLink & {
  icon?: string;
  children?: ChildNavItem[];
};

export type MainNavItem = NavLink & {
  icon: string;
  children?: ChildNavItem[];
};

export type FooterNavItem = NavLink;

export const navigation: {
  main: MainNavItem[];
  footer: {
    layanan: FooterNavItem[];
    informasi: FooterNavItem[];
    legal: FooterNavItem[];
  };
} = {
  main: [
    {
      name: 'Beranda',
      href: '/',
      description: 'Halaman utama website resmi',
      icon: 'home',
    },
    {
      name: 'Profil',
      href: '/profil',
      description: 'Informasi Lengkap Tentang/Profil',
      icon: 'building',
      children: [
        {
          name: 'Sambutan Kepala Dinas',
          description: 'Sambutan dan Pesan Kepala Dinas',
          href: '/profil/sambutan-kepala-dinas',
        },
        {
          name: 'Struktur Organisasi',
          description: 'Bagan dan Susunan Kepengurusan',
          href: '/profil/struktur-organisasi',
        },
        {
          name: 'Sejarah',
          description: 'Sejarah Singkat Mengenai Pembentukan Dinas',
          href: '/profil/sejarah',
        },
        {
          name: 'Visi dan Misi',
          description: 'Visi, Misi, dan Tujuan Dinas',
          href: '/profil/visi-dan-misi',
        },
        {
          name: 'tugas pokok dan fungsi',
          description: '	Tugas, Pokok, dan Fungsi Dinas',
          href: '/profil/tugas-pokok-dan-fungsi',
        },
        {
          name: 'Maklumat Pelayanan',
          description: 'Komitmen dan Maklumat Pelayanan Publik',
          href: '/profil/maklumat-pelayanan',
        },
      ],
    },
    {
      name: 'Layanan',
      href: '/layanan',
      description: 'Layanan Publik dan Pelayanan Digital ',
      icon: 'service',
    },
    {
      name: 'Berita',
      href: '/berita',
      description: 'Berita dan Informasi Terkini ',
      icon: 'news',
    },
    {
      name: 'Pengumuman',
      href: '/pengumuman',
      description: 'Pengumuman Resmi & Info Penting',
      icon: 'megaphone',
    },
    {
      name: 'Galeri',
      href: '/galeri',
      description: 'Koleksi Foto dan Video Dokumentasi',
      icon: 'gallery',
    },
    {
      name: 'Kontak',
      href: '/kontak',
      description: 'Informasi Kontak dan Lokasi Kantor',
      icon: 'contact',
    },
  ],

  footer: {
    layanan: [
      {
        name: 'Layanan Online',
        href: '/layanan',
        description: 'Akses Layanan Digital dan Informasi Publik',
      },
      {
        name: 'Pengaduan Masyarakat',
        href: '/pengaduan',
        description: 'Salurkan Keluhan dan Saran Masyarakat',
      },
      {
        name: 'Permohonan Informasi',
        href: '/informasi',
        description: 'Ajukan Permohonan Informasi Publik',
      },
      {
        name: 'Survei Kepuasan',
        href: '/survei',
        description: 'Berikan Penilaian dan Masukan atas Layanan',
      },
    ],

    informasi: [
      {
        name: 'Struktur Organisasi',
        href: '/profil/struktur-organisasi',
        description: 'Informasi Lengkap Struktur Organisasi',
      },
      {
        name: 'Visi & Misi',
        href: '/profil/visi-dan-misi',
        description: 'Visi dan Misi Sebagai Pedoman Kerja Dinas',
      },
      {
        name: 'Tugas & Fungsi',
        href: '/profil/tugas-pokok-dan-fungsi',
        description: 'Rincian Tugas Pokok dan Fungsi Dinas',
      },
      {
        name: 'Maklumat Pelayanan',
        href: '/profil/maklumat',
        description: 'Pernyataan Komitmen Pelayanan kepada Publik',
      },
    ],

    legal: [
      {
        name: 'Kebijakan Privasi',
        href: '/kebijakan-privasi',
        description: 'Perlindungan Data Pribadi dan Privasi Pengguna',
      },
      {
        name: 'Syarat & Ketentuan',
        href: '/syarat-ketentuan',
        description: 'Ketentuan dan Aturan Penggunaan Website',
      },
      {
        name: 'Disclaimer',
        href: '/disclaimer',
        description: 'Penafian dan Batasan Tanggung Jawab Dinas',
      },
      {
        name: 'Aksesibilitas',
        href: '/aksesibilitas',
        description: 'Panduan Aksesibilitas dan Kemudahan Penggunaan Website',
      },
    ],
  },
};
