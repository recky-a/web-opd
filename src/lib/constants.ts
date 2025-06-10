import { Author } from 'next/dist/lib/metadata/types/metadata-types';

/**
 * Base type for any navigation link.
 */
type NavLink = {
  name: string;
  href: string;
  description: string;
};
/**
 * Type for a nested/child navigation item.
 * The icon is optional, but it can have its own children.
 */
export type ChildNavItem = NavLink & {
  icon?: string; // Icon is optional for children
  children?: ChildNavItem[];
};

/**
 * Type for a top-level main navigation item.
 * The icon is REQUIRED, and its children are of type ChildNavItem.
 */
export type MainNavItem = NavLink & {
  icon: string;
  children?: ChildNavItem[];
};

/**
 * Type for footer navigation, which does not require an icon.
 */
export type FooterNavItem = NavLink;

function removeTrailingSlash(str: string) {
  return str.replace(/\/+$/, '');
}
// Environment-based configuration with enhanced security
const isDevelopment = process.env.NODE_ENV === 'development';
// Better URL handling for development vs production
const getBaseUrl = (): string => {
  if (isDevelopment) {
    return 'http://localhost:3000';
    // return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  }
  return (
    process.env.NEXT_PUBLIC_BASE_URL || 'https://dinkominfotik.bangka.go.id'
  );
};

const baseUrl = getBaseUrl();

// Validate URL format for security
const validateUrl = (url: string): string => {
  try {
    const validUrl = new URL(url);
    return removeTrailingSlash(validUrl.toString());
  } catch {
    throw new Error(`Invalid URL: ${url}`);
  }
};

// Department configuration type with enhanced fields
export interface DepartmentConfig {
  id: string;
  name: string;
  shortName: string;
  description: string;
  domain: string;
  phone?: string;
  email?: string;
  address?: string;
  head?: string;
  keywords: string[];
  // Enhanced government-specific fields
  establishedYear?: number;
  category: 'primary' | 'supporting' | 'technical';
  services: string[];
  operatingHours: {
    weekdays: string;
    friday: string;
    weekend?: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

// Main site configuration with enhanced security and compliance
export const siteConfig = {
  name: 'Dinas Komunikasi, Informatika, dan Statistik Kabupaten Bangka',
  shortName: 'Dinkominfotik',
  description:
    'Website Resmi Dinas Komunikasi, Informatika, dan Statistik Kabupaten Bangka - Melayani masyarakat dengan transparansi, akuntabilitas, dan inovasi teknologi informasi.',
  url: validateUrl(baseUrl),
  ogImage: `${baseUrl}/og-image.png`,
  twitterImage: `${baseUrl}/twitter-image.png`,
  locale: 'id_ID',
  region: 'Kabupaten Bangka',
  province: 'Kepulauan Bangka Belitung',
  country: 'Indonesia',
  timezone: 'Asia/Jakarta',

  // Government compliance information
  compliance: {
    wcagLevel: 'AA',
    lastAuditDate: '2024-12-01',
    accessibilityContact: 'aksesibilitas@dinkominfotik.bangka.go.id',
    privacyOfficer: 'privacy@dinkominfotik.bangka.go.id',
  },

  // Enhanced contact information
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
    // Service hours
    serviceHours: {
      weekdays: '08:00 - 16:00 WIB',
      friday: '08:00 - 16:30 WIB',
      weekend: 'Tutup',
    },
  },

  // Enhanced social media with validation
  social: {
    facebook: 'https://facebook.com/dinkominfotikbangka',
    twitter: 'https://twitter.com/dinkominfotikbangka',
    instagram: 'https://instagram.com/dinkominfotikbangka',
    youtube: 'https://youtube.com/@dinkominfotikbangka',
    linkedin: 'https://linkedin.com/company/dinkominfotikbangka',
  },

  // Enhanced SEO Keywords with regional focus
  keywords: [
    // Primary keywords
    'Dinas Komunikasi Bangka',
    'Informatika Kabupaten Bangka',
    'Statistik Bangka',
    'Pemerintah Kabupaten Bangka',
    'Layanan Publik Bangka',
    'E-Government Bangka',
    'Dinkominfotik',

    // Regional keywords
    'Bangka Belitung',
    'Kepulauan Bangka Belitung',
    'Babel',
    'Sungailiat',
    'Pangkalpinang',

    // Service keywords
    'Pelayanan Digital',
    'Smart City Bangka',
    'Open Data Bangka',
    'Transparansi Pemerintah',
    'Akuntabilitas Publik',

    // Technical keywords
    'Website Pemerintah',
    'Portal Resmi',
    'Sistem Informasi',
    'Data Analytics',
    'Digitalisasi',
  ],

  // Performance and monitoring
  monitoring: {
    analyticsId: process.env.NEXT_PUBLIC_GA_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  // Feature flags
  features: {
    darkMode: true,
    multiLanguage: false,
    chatBot: process.env.NEXT_PUBLIC_ENABLE_CHATBOT === 'true',
    onlineServices: true,
    guestBook: true,
    survey: true,
  },
};

// Enhanced department configurations
export const departments: Record<string, DepartmentConfig> = {
  dinkominfotik: {
    id: 'dinkominfotik',
    name: 'Dinas Komunikasi, Informatika, dan Statistik',
    shortName: 'Dinkominfotik',
    description:
      'Mengelola komunikasi publik, teknologi informasi, dan data statistik Kabupaten Bangka untuk mendukung transformasi digital pemerintahan.',
    domain: 'dinkominfotik.bangka.go.id',
    phone: '+62-717-421234',
    email: 'info@dinkominfotik.bangka.go.id',
    head: 'Kepala Dinas Dinkominfotik',
    establishedYear: 2016,
    category: 'technical',
    services: [
      'Layanan E-Government',
      'Pengelolaan Data Statistik',
      'Komunikasi Publik',
      'Infrastruktur TIK',
      'Keamanan Siber',
      'Open Data',
    ],
    operatingHours: {
      weekdays: '08:00 - 16:00 WIB',
      friday: '08:00 - 16:30 WIB',
    },
    keywords: [
      'komunikasi',
      'informatika',
      'statistik',
      'e-government',
      'data',
      'teknologi',
      'digital transformation',
      'smart city',
    ],
    socialMedia: {
      facebook: 'https://facebook.com/dinkominfotikbangka',
      instagram: 'https://instagram.com/dinkominfotikbangka',
      youtube: 'https://youtube.com/@dinkominfotikbangka',
    },
  },

  pendidikan: {
    id: 'pendidikan',
    name: 'Dinas Pendidikan',
    shortName: 'Disdik',
    description:
      'Mengelola pendidikan dasar, menengah, dan non-formal untuk meningkatkan kualitas pendidikan di Kabupaten Bangka.',
    domain: 'pendidikan.bangka.go.id',
    phone: '+62-717-421235',
    email: 'info@pendidikan.bangka.go.id',
    head: 'Kepala Dinas Pendidikan',
    establishedYear: 2001,
    category: 'primary',
    services: [
      'Manajemen Sekolah',
      'Pembinaan Guru',
      'Kurikulum dan Pembelajaran',
      'Sarana Prasarana',
      'Beasiswa Pendidikan',
      'Pendidikan Non-Formal',
    ],
    operatingHours: {
      weekdays: '07:30 - 16:00 WIB',
      friday: '07:30 - 16:30 WIB',
    },
    keywords: [
      'pendidikan',
      'sekolah',
      'guru',
      'siswa',
      'kurikulum',
      'pembelajaran',
      'beasiswa',
      'pendidikan non-formal',
    ],
  },

  kesehatan: {
    id: 'kesehatan',
    name: 'Dinas Kesehatan',
    shortName: 'Dinkes',
    description:
      'Menyelenggarakan urusan pemerintahan di bidang kesehatan untuk meningkatkan derajat kesehatan masyarakat Kabupaten Bangka.',
    domain: 'kesehatan.bangka.go.id',
    phone: '+62-717-421236',
    email: 'info@kesehatan.bangka.go.id',
    head: 'Kepala Dinas Kesehatan',
    establishedYear: 2001,
    category: 'primary',
    services: [
      'Pelayanan Kesehatan Dasar',
      'Promosi Kesehatan',
      'Pencegahan dan Pengendalian Penyakit',
      'Kesehatan Ibu dan Anak',
      'Gizi Masyarakat',
      'Farmasi dan Alat Kesehatan',
    ],
    operatingHours: {
      weekdays: '24 Jam (Emergency)',
      friday: '24 Jam (Emergency)',
    },
    keywords: [
      'kesehatan',
      'puskesmas',
      'rumah sakit',
      'vaksinasi',
      'kesehatan masyarakat',
      'promkes',
      'gizi',
      'sanitasi',
    ],
  },

  sosial: {
    id: 'sosial',
    name: 'Dinas Sosial',
    shortName: 'Dinsos',
    description:
      'Menyelenggarakan urusan pemerintahan di bidang sosial untuk meningkatkan kesejahteraan masyarakat Kabupaten Bangka.',
    domain: 'sosial.bangka.go.id',
    phone: '+62-717-421237',
    email: 'info@sosial.bangka.go.id',
    head: 'Kepala Dinas Sosial',
    establishedYear: 2001,
    category: 'primary',
    services: [
      'Bantuan Sosial',
      'Rehabilitasi Sosial',
      'Pemberdayaan Sosial',
      'Perlindungan Sosial',
      'Penanggulangan Kemiskinan',
      'Kesejahteraan Sosial',
    ],
    operatingHours: {
      weekdays: '08:00 - 16:00 WIB',
      friday: '08:00 - 16:30 WIB',
    },
    keywords: [
      'sosial',
      'bantuan sosial',
      'kesejahteraan',
      'penyandang disabilitas',
      'lansia',
      'rehabilitasi',
      'pemberdayaan',
      'kemiskinan',
    ],
  },

  pertanian: {
    id: 'pertanian',
    name: 'Dinas Pertanian dan Ketahanan Pangan',
    shortName: 'Dinpertan',
    description:
      'Menyelenggarakan urusan pemerintahan di bidang pertanian dan ketahanan pangan untuk mendukung kedaulatan pangan Kabupaten Bangka.',
    domain: 'pertanian.bangka.go.id',
    phone: '+62-717-421238',
    email: 'info@pertanian.bangka.go.id',
    head: 'Kepala Dinas Pertanian dan Ketahanan Pangan',
    establishedYear: 2001,
    category: 'primary',
    services: [
      'Penyuluhan Pertanian',
      'Sarana Produksi Pertanian',
      'Pengolahan dan Pemasaran',
      'Ketahanan Pangan',
      'Perlindungan Tanaman',
      'Pemberdayaan Petani',
    ],
    operatingHours: {
      weekdays: '08:00 - 16:00 WIB',
      friday: '08:00 - 16:30 WIB',
    },
    keywords: [
      'pertanian',
      'ketahanan pangan',
      'petani',
      'pupuk',
      'irigasi',
      'pangan',
      'penyuluhan',
      'sarana produksi',
      'pemasaran',
    ],
  },
};

// Enhanced authors information
export const siteAuthors: Author[] = [
  {
    name: 'Tim Pengembang Dinkominfotik Bangka',
    url: siteConfig.url,
  },
  {
    name: 'Ricky Anderson',
    url: 'https://linkedin.com/in/ricky-anderson-367644188',
  },
];

// Utility functions
export const getCurrentDepartment = (): DepartmentConfig => {
  const departmentId = process.env.NEXT_PUBLIC_DEPARTMENT_ID || 'dinkominfotik';
  const department = departments[departmentId];

  if (!department) {
    console.warn(`Department ${departmentId} not found, using default`);
    return departments.dinkominfotik;
  }

  return department;
};

// Enhanced navigation with accessibility and SEO
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
      description: 'Informasi profil organisasi',
      icon: 'building',
      children: [
        {
          name: 'Sambutan Kepala Dinas',
          href: '/profil/sambutan-kepala-dinas',
          description: 'Kata sambutan dari kepala dinas.',
        },
        {
          name: 'Visi dan Misi',
          href: '/profil/visi-dan-misi',
          description: 'Tujuan dan cita-cita organisasi.',
        },
        {
          name: 'Struktur Organisasi',
          href: '/profil/struktur-organisasi',
          description: 'Bagan struktur organisasi.',
        },
        {
          name: 'Tugas Pokok dan Fungsi',
          href: '/profil/tugas-pokok-dan-fungsi',
          description: 'Rincian tugas dan fungsi (Tupoksi).',
        },
      ],
    },
    {
      name: 'Layanan',
      href: '/layanan',
      description: 'Layanan publik yang tersedia',
      icon: 'service',
    },
    {
      name: 'Berita',
      href: '/berita',
      description: 'Berita dan informasi terkini',
      icon: 'news',
    },
    {
      name: 'Pengumuman',
      href: '/pengumuman',
      description: 'Pengumuman resmi',
      icon: 'megaphone',
    },
    {
      name: 'Galeri',
      href: '/galeri',
      description: 'Galeri foto dan video',
      icon: 'gallery',
    },
    {
      name: 'Kontak',
      href: '/kontak',
      description: 'Informasi kontak dan lokasi',
      icon: 'contact',
    },
  ],

  footer: {
    layanan: [
      {
        name: 'Layanan Online',
        href: '/layanan',
        description: 'Akses layanan digital',
      },
      {
        name: 'Pengaduan Masyarakat',
        href: '/pengaduan',
        description: 'Sampaikan keluhan dan saran',
      },
      {
        name: 'Permohonan Informasi',
        href: '/informasi',
        description: 'Ajukan permohonan informasi publik',
      },
      {
        name: 'Survei Kepuasan',
        href: '/survei',
        description: 'Berikan penilaian layanan',
      },
    ],

    informasi: [
      {
        name: 'Struktur Organisasi',
        href: '/profil/struktur-organisasi', // Corrected path
        description: 'Bagan organisasi',
      },
      {
        name: 'Visi & Misi',
        href: '/profil/visi-dan-misi', // Corrected path
        description: 'Visi misi organisasi',
      },
      {
        name: 'Tugas & Fungsi',
        href: '/profil/tugas-pokok-dan-fungsi', // Corrected path
        description: 'Tupoksi organisasi',
      },
      {
        name: 'Maklumat Pelayanan',
        href: '/profil/maklumat',
        description: 'Komitmen pelayanan publik',
      },
    ],

    legal: [
      {
        name: 'Kebijakan Privasi',
        href: '/kebijakan-privasi',
        description: 'Perlindungan data pribadi',
      },
      {
        name: 'Syarat & Ketentuan',
        href: '/syarat-ketentuan',
        description: 'Aturan penggunaan website',
      },
      {
        name: 'Disclaimer',
        href: '/disclaimer',
        description: 'Batasan tanggung jawab',
      },
      {
        name: 'Aksesibilitas',
        href: '/aksesibilitas',
        description: 'Panduan aksesibilitas website',
      },
    ],
  },
};

// Export computed values
export const siteName = getCurrentDepartment().name + ' Kabupaten Bangka';
export const isDev = isDevelopment;
export const isProduction = !isDevelopment;

// Security utilities
export const sanitizeUserInput = (input: string): string => {
  return input.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ''
  );
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Environment validation
if (isProduction && !process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error('NEXT_PUBLIC_BASE_URL is required in production');
}
