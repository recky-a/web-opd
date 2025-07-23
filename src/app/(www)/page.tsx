import { CarouselItem } from '@/components/hero-carousel';
import FeaturedServiceSection from '@/components/sections/featured-services';
import GreetingSection from '@/components/sections/greeting';
import HeroSection from '@/components/sections/hero';
import { opd } from '@/config/opd';
import { OPDService } from '@/schemas/opd';
import { StatisticSectionData } from '@/schemas/statistic';
import { GallerySection } from './_partials/homepage/gallery-section';
import InformationSection from './_partials/homepage/information-section';
import RelatedPortalsSection from './_partials/homepage/related-portals-section';
import StatisticSection from './_partials/homepage/statistic-section';

const statisticData: StatisticSectionData = {
  title: 'Statistik Pelayanan',
  subtitle:
    'Ikhtisar kontribusi dan layanan digital yang telah dijalankan oleh Dinas Kominfo Kabupaten Bangka.',
  backgroundImageUrl: '/hero-1.jpg',
  items: [
    {
      label: 'Website OPD Dikelola',
      value: 42,
      unit: 'website',
      iconName: 'MonitorSmartphone',
      description:
        'Aktif dikelola dan dipantau oleh tim APTIKA untuk memastikan keterbaruan informasi.',
    },
    {
      label: 'Sistem Informasi Berjalan',
      value: 18,
      iconName: 'ServerCog',
      description:
        'Digunakan oleh berbagai OPD untuk mendukung administrasi & layanan publik.',
    },
    {
      label: 'Pengguna Email Dinas',
      value: '1.250+',
      iconName: 'MailCheck',
      description:
        'ASN dan pegawai aktif yang menggunakan email resmi instansi.',
    },
    {
      label: 'Data Statistik Terintegrasi',
      value: '54.000+',
      iconName: 'ChartLine',
    },
    {
      label: 'Jumlah Pengunjung',
      value: 2145,
      unit: 'orang',
      iconName: 'Users',
      description: 'Pengunjung layanan publik pada bulan ini.',
    },
    {
      label: 'Permintaan Informasi Publik',
      value: 327,
      unit: 'permintaan',
      iconName: 'FileSearch',
      description: 'Permintaan melalui PPID yang diproses tahun ini.',
    },
    {
      label: 'Dokumen Terpublikasi',
      value: 894,
      unit: 'dokumen',
      iconName: 'FileText',
      description: 'Dokumen resmi yang telah dipublikasikan di situs OPD.',
    },
    {
      label: 'Aplikasi Mobile Aktif',
      value: 9,
      unit: 'aplikasi',
      iconName: 'Smartphone',
      description: 'Aplikasi berbasis Android/iOS untuk pelayanan masyarakat.',
    },
    {
      label: 'Berita Resmi Dipublikasikan',
      value: 176,
      unit: 'artikel',
      iconName: 'Newspaper',
      description: 'Jumlah artikel berita dan siaran pers sepanjang tahun ini.',
    },
    {
      label: 'Integrasi API Publik',
      value: 15,
      unit: 'API',
      iconName: 'Code',
      description: 'Jumlah API terbuka yang dapat diakses publik.',
    },
    {
      label: 'Sertifikat Keamanan Siber',
      value: 7,
      unit: 'sertifikat',
      iconName: 'ShieldCheck',
      description:
        'Sistem yang telah tersertifikasi oleh BSSN atau lembaga terkait.',
    },
    {
      label: 'Event Sosialisasi & Literasi Digital',
      value: 23,
      unit: 'event',
      iconName: 'Megaphone',
      description: 'Acara tatap muka maupun daring dalam setahun terakhir.',
    },
  ],
};

const carouselData: CarouselItem[] = [
  {
    imageSrc: '/hero-1.jpg',
    title: 'Gambar Slide Ke 1',
  },
  {
    imageSrc: '/hero-2.jpg',
    title: 'Gambar Slide Ke 2',
  },
  {
    imageSrc: '/hero-3.jpg',
    title: 'Gambar Slide Ke 3',
  },
];

const services: OPDService[] = [
  {
    id: 'permohonan-informasi-publik',
    title: 'Permohonan Informasi Publik',
    type: 'online',
    category: 'Informasi Publik',
    description:
      'Layanan pengajuan permintaan informasi publik sesuai UU KIP untuk transparansi dan akuntabilitas pemerintah daerah.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    requirements: ['Formulir permohonan', 'Identitas diri'],
    procedure:
      'Isi formulir, tunggu konfirmasi, informasi diberikan dalam 2 hari kerja.',
    estimatedTime: '2 Hari Kerja',
    fee: 'Gratis',
    contactPerson: 'Admin PPID',
    contactEmail: 'ppid@bangkakab.go.id',
    link: 'https://ppid.bangkakab.go.id/permohonan',
  },
  {
    id: 'laporan-hoaks-konten-negatif',
    title: 'Laporan Hoaks dan Konten Negatif',
    type: 'online',
    category: 'Keamanan Informasi',
    description:
      'Platform pelaporan untuk konten hoaks, ujaran kebencian, dan informasi menyesatkan demi menjaga ekosistem digital yang sehat.',
    isFeatured: true,
    // imageUrl:
    //   'https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg',
    contactEmail: 'hoaks@bangkakab.go.id',
    contactPhone: '0812-3456-7890',
    fee: 'Gratis',
    link: 'https://kominfo.bangkakab.go.id/hoaks',
  },
  {
    id: 'domain-bangkakab',
    title: 'Permintaan Domain *.bangkakab.go.id',
    type: 'online',
    category: 'Tata Kelola Digital',
    description:
      'Layanan pendaftaran subdomain resmi untuk OPD di lingkungan Kabupaten Bangka dengan standar keamanan tinggi.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    requirements: ['Surat permohonan', 'Nama domain dan tujuan penggunaan'],
    estimatedTime: '3 Hari Kerja',
    contactEmail: 'domain@bangkakab.go.id',
    fee: 'Gratis',
  },
  {
    id: 'sistem-elektronik-pemerintah',
    title: 'Pendaftaran Sistem Elektronik Pemerintah',
    type: 'online',
    category: 'E-Government',
    description:
      'Registrasi dan validasi aplikasi atau sistem elektronik untuk OPD/Instansi Pemerintah Daerah sesuai regulasi.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    estimatedTime: '5 Hari Kerja',
    procedure: 'Upload proposal sistem dan izin kepala OPD.',
    fee: 'Gratis',
    link: 'https://egov.bangkakab.go.id/daftar',
  },
  {
    id: 'bimbingan-teknis-tik',
    title: 'Bimbingan Teknis TIK (On-Demand)',
    type: 'offline',
    category: 'Pelatihan & Edukasi',
    description:
      'Pelatihan teknologi informasi dan komunikasi yang disesuaikan dengan kebutuhan spesifik perangkat daerah dan institusi pendidikan.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    contactEmail: 'bimtek@bangkakab.go.id',
    contactPhone: '0718-112233',
    location: 'Gedung Kominfo Lt.2, Sungailiat',
    estimatedTime: '7 Hari Kerja (pengajuan)',
    fee: 'Gratis',
  },
  {
    id: 'pelatihan-literasi-digital',
    title: 'Pendaftaran Pelatihan Literasi Digital',
    type: 'hybrid',
    category: 'Edukasi Masyarakat',
    description:
      'Program komprehensif untuk meningkatkan kemampuan masyarakat dalam menggunakan teknologi digital secara bijak dan produktif.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/4144221/pexels-photo-4144221.jpeg',
    requirements: ['Formulir Online', 'Foto KTP'],
    estimatedTime: '1 Hari Kerja',
    contactEmail: 'litdig@bangkakab.go.id',
    link: 'https://kominfo.bangkakab.go.id/literasi',
  },
  {
    id: 'pengaduan-internet-desa',
    title: 'Pengaduan Jaringan Internet Desa',
    type: 'online',
    category: 'Infrastruktur Digital',
    description:
      'Sistem pelaporan gangguan dan pemeliharaan jaringan internet desa yang dikelola pemerintah untuk konektivitas optimal.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg',
    contactPhone: '0812-3333-8888',
    fee: 'Gratis',
  },
  {
    id: 'sertifikasi-keamanan-informasi',
    title: 'Sertifikasi Keamanan Informasi (OPD)',
    type: 'offline',
    category: 'Keamanan Informasi',
    description:
      'Audit menyeluruh dan penilaian keamanan sistem informasi OPD sesuai standar nasional dan internasional.',
    isFeatured: true,
    imageUrl:
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg',
    requirements: ['Surat tugas', 'Dokumen sistem yang digunakan'],
    estimatedTime: '10 Hari Kerja',
    contactEmail: 'infosec@bangkakab.go.id',
    location: 'Kantor Kominfo Kab. Bangka',
    fee: 'Gratis',
  },
];

export default function Homepage() {
  /**
   * const getHomepageData = () => {
   * sections: {hero,greeting}
   * }
   */
  return (
    <main id="main-content" className="space-y-0">
      <HeroSection carouselItems={carouselData} />
      <GreetingSection
        opd={opd}
        welcomeMessage="Kami berkomitmen untuk pemerintahan transparan dan efisien melalui transformasi digital."
        className=""
      />
      <InformationSection />
      <FeaturedServiceSection services={services} />
      <StatisticSection
        title={statisticData.title}
        subtitle={statisticData.subtitle}
        items={statisticData.items}
        backgroundImageUrl="/hero-1.jpg"
      />
      <GallerySection />
      <RelatedPortalsSection />
    </main>
  );
}
