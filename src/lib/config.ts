import { IconName } from '@/components/lucide-icon';
import { env } from '@/env';
import { Author } from 'next/dist/lib/metadata/types/metadata-types';
import { siFacebook, siInstagram, siX, siYoutube } from 'simple-icons';

export const simpleIconsMap = {
  facebook: siFacebook,
  x: siX,
  instagram: siInstagram,
  youtube: siYoutube,
};

export type SocialKey = keyof typeof simpleIconsMap;

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
  opdHead: {
    title: 'Kepala Dinas',
    name: 'M. Fadillah, S.T., M.M.',
    photoUrl: '/hero-1.jpg',
    bio: 'Sebagai Kepala Dinas Kominfo Kabupaten Bangka, saya berkomitmen untuk memperkuat infrastruktur TIK, mengembangkan sistem informasi publik yang terbuka, serta mendukung inovasi digital demi kemajuan pelayanan publik dan keterbukaan informasi.',
    quote:
      'Infrastruktur digital yang kokoh adalah fondasi dari pelayanan publik yang cepat, transparan, dan akuntabel.',
  },
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63795.00921486427!2d106.08263507443873!3d-1.854802399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22c2f80f7fcf23%3A0x5030d43c3db63f0!2sKabupaten%20Bangka%2C%20Kepulauan%20Bangka%20Belitung!5e0!3m2!1sid!2sid!4v1721376000000!5m2!1sid!2sid',

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
  socials: [
    { name: 'facebook', url: 'https://facebook.com/pemkabbangka' },
    { name: 'x', url: 'https://x.com/pemkabbangka' },
    { name: 'instagram', url: 'https://instagram.com/pemkabbangka' },
    { name: 'youtube', url: 'http://googleusercontent.com/youtube.com/4' },
  ] as const,
  // For display purposes
  openingHours: [
    { day: 'Senin - Kamis', time: '07:30 - 16:00 WIB' },
    { day: 'Jumat', time: '07:30 - 16:30 WIB' },
    { day: 'Sabtu & Minggu', time: 'Tutup' },
  ],

  // For the dynamic status logic (Day index: 0=Sun, 1=Mon, etc.)
  operationalHours: [
    { dayIndex: 1, open: '07:30', close: '16:00' }, // Monday
    { dayIndex: 2, open: '07:30', close: '16:00' }, // Tuesday
    { dayIndex: 3, open: '07:30', close: '16:00' }, // Wednesday
    { dayIndex: 4, open: '07:30', close: '16:00' }, // Thursday
    { dayIndex: 5, open: '07:30', close: '16:30' }, // Friday
  ],

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
  icon?: IconName;
  children?: ChildNavItem[];
};

export type MainNavItem = NavLink & {
  icon: IconName;
  children?: ChildNavItem[];
};

export type FooterNavItem = NavLink;

export const navigation = {
  main: [
    {
      name: 'Beranda',
      href: '/',
      description: 'Halaman utama website resmi',
      icon: 'House',
    },
    {
      name: 'Profil',
      href: '/profil',
      description: 'Informasi Lengkap Tentang/Profil',
      icon: 'Building',
      children: [
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
          name: 'tugas pokok dan fungsi',
          description: 'Tugas, Pokok, dan Fungsi Dinas',
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
      icon: 'BriefCase',
    },
    {
      name: 'Berita',
      href: '/berita',
      description: 'Berita dan Informasi Terkini ',
      icon: 'Newspaper',
    },
    {
      name: 'Pengumuman',
      href: '/pengumuman',
      description: 'Pengumuman Resmi & Info Penting',
      icon: 'Megaphone',
    },
    {
      name: 'Galeri',
      href: '/galeri',
      description: 'Koleksi Foto dan Video Dokumentasi',
      icon: 'Image',
    },
    {
      name: 'Kontak',
      href: '/kontak',
      description: 'Informasi Kontak dan Lokasi Kantor',
      icon: 'Phone',
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
