import { HorizontalTabsList } from '@/components/horizontal-tabs-list';
import NewsTabs from '@/components/news-tabs';
import NewsCarousel from '@/components/news/news-carousel';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Agenda } from '@/types/agenda';
import { Announcement } from '@/types/announcement';
import { News } from '@/types/news';
import { TabItem } from '@/types/tabs';
import { CalendarDays, Newspaper } from 'lucide-react';
import AgendaCard from '../../../../components/agenda/agenda-card';
import AnnouncementTab from '../../_components/announcement-tabs';
import InfographicTab from '../../_components/infographic-tab';

interface InformationSectionConfig {
  news: {
    enableDefaultTabs: boolean;
    maxItems?: number; // default: all
    maxFeatured?: number; // default: all
    categories?: string[]; // optional category filters
  };
}
export default function InformationSection() {
  /**
   * TODO: implement this fetch for information-section data
   * const [newsData, agendaData, announcementData] = await Promise.all([
    fetchNews(),
    fetchAgenda(),
    fetchAnnouncements(),
  ]);
   */
  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Seleksi Terbuka Jabatan Pimpinan Tinggi Pratama',
      description:
        'Pemerintah Kabupaten Bangka membuka seleksi terbuka untuk Jabatan Pimpinan Tinggi Pratama.',
      publishedAt: new Date('2025-07-21T08:00:00Z').toISOString(),
      link: '/pengumuman/seleksi-jpt-pratama-2025',
      category: 'Kepegawaian',
      isPinned: true,
      views: 1250,
    },
    {
      id: '2',
      title: 'Jadwal Pemeliharaan Jaringan Listrik PLN',
      description:
        'Pemadaman listrik terjadwal di wilayah Sungailiat pada 25 Juli 2025.',
      publishedAt: new Date('2025-07-14T09:30:00Z').toISOString(),
      category: 'Layanan Publik',
      views: 890,
    },
    {
      id: '3',
      title: 'Penerimaan Peserta Didik Baru (PPDB) Online 2025',
      description:
        'Panduan dan jadwal pendaftaran siswa baru SD dan SMP tahun ajaran 2025/2026.',
      publishedAt: new Date('2025-07-11T12:00:00Z').toISOString(),
      link: '/pengumuman/ppdb-2025',
      category: 'Pendidikan',
      isPopular: true,
      views: 2100,
    },
    {
      id: '4',
      title: 'Lomba Esai dan Fotografi HUT Kabupaten Bangka',
      description:
        'Ikuti lomba esai dan fotografi, menangkan hadiah jutaan rupiah!',
      publishedAt: new Date('2025-07-09T15:00:00Z').toISOString(),
      category: 'Lomba',
      views: 567,
    },
    {
      id: '5',
      title: 'Program Bantuan Modal Usaha UMKM Tahap II',
      description:
        'Pendaftaran bantuan modal usaha untuk UMKM di seluruh Kabupaten Bangka.',
      publishedAt: new Date('2025-07-08T10:15:00Z').toISOString(),
      link: '/pengumuman/bantuan-umkm-2025',
      category: 'Ekonomi',
      views: 1350,
    },
    {
      id: '6',
      title: 'Pemeliharaan Sistem Informasi Desa (SID)',
      description:
        'Sistem akan mengalami gangguan sementara pada 20-21 Juli 2025.',
      publishedAt: new Date('2025-07-07T07:45:00Z').toISOString(),
      category: 'Teknologi',
      views: 445,
      isPinned: true,
    },
    {
      id: '7',
      title: 'Sosialisasi Program Bangka Digital',
      description:
        'Dinas Kominfo mengadakan sosialisasi percepatan transformasi digital desa.',
      publishedAt: new Date('2025-07-05T09:00:00Z').toISOString(),
      category: 'Teknologi',
      views: 320,
    },
    {
      id: '8',
      title: 'Pelatihan Keterampilan Bagi Pencari Kerja',
      description:
        'Dinas Tenaga Kerja membuka pendaftaran pelatihan keterampilan gratis.',
      publishedAt: new Date('2025-07-03T13:00:00Z').toISOString(),
      category: 'Ketenagakerjaan',
      views: 975,
      link: '/pengumuman/pelatihan-kerja-2025',
    },
    {
      id: '9',
      title: 'Peringatan Hari Anak Nasional 2025',
      description:
        'Akan diadakan berbagai kegiatan edukatif dan hiburan untuk anak-anak.',
      publishedAt: new Date('2025-07-22T10:00:00Z').toISOString(),
      category: 'Sosial',
      views: 780,
    },
    {
      id: '10',
      title: 'Pengumuman Libur Nasional dan Cuti Bersama',
      description:
        'Detail jadwal libur nasional dan cuti bersama bulan Agustus 2025.',
      publishedAt: new Date('2025-06-28T16:00:00Z').toISOString(),
      category: 'Pemerintahan',
      views: 1150,
      isPopular: true,
    },
    {
      id: '11',
      title: 'Gerakan Tanam Pohon Serentak',
      description:
        'Aksi penghijauan di seluruh kecamatan Bangka dengan partisipasi masyarakat.',
      publishedAt: new Date('2025-06-26T07:30:00Z').toISOString(),
      category: 'Lingkungan',
      views: 460,
    },
    {
      id: '12',
      title: 'Laporan Capaian Kinerja Semester I 2025',
      description:
        'Publikasi kinerja OPD Kabupaten Bangka selama semester pertama tahun 2025.',
      publishedAt: new Date('2025-06-24T11:45:00Z').toISOString(),
      category: 'Pemerintahan',
      views: 1320,
      link: '/pengumuman/laporan-kinerja-semester1-2025',
    },
    {
      id: '13',
      title: 'Workshop Peningkatan Kualitas Pendidikan',
      description:
        'Workshop untuk guru-guru SD dan SMP dalam rangka meningkatkan mutu pembelajaran.',
      publishedAt: new Date('2025-07-19T08:30:00Z').toISOString(),
      category: 'Pendidikan',
      views: 680,
    },
    {
      id: '14',
      title: 'Sosialisasi Protokol Kesehatan COVID-19',
      description:
        'Dinas Kesehatan mengingatkan kembali pentingnya penerapan protokol kesehatan.',
      publishedAt: new Date('2025-06-30T14:00:00Z').toISOString(),
      category: 'Kesehatan',
      views: 910,
      isPopular: true,
    },
    {
      id: '15',
      title: 'Pengumuman Pendaftaran Vaksinasi Massal',
      description:
        'Dinas Kesehatan membuka pendaftaran vaksinasi massal untuk masyarakat umum.',
      publishedAt: new Date('2025-06-27T09:00:00Z').toISOString(),
      category: 'Kesehatan',
      views: 1230,
      link: '/pengumuman/vaksinasi-massal-2025',
    },
    {
      id: '16',
      title: 'Bazar UMKM Bulanan',
      description:
        'Dukungan pemerintah untuk pengembangan UMKM dengan menggelar bazar tiap bulan.',
      publishedAt: new Date('2025-06-25T10:15:00Z').toISOString(),
      category: 'Ekonomi',
      views: 450,
    },
    {
      id: '17',
      title: 'Penerapan Smart City di Kabupaten Bangka',
      description:
        'Inovasi teknologi untuk meningkatkan pelayanan publik secara digital.',
      publishedAt: new Date('2025-07-17T11:30:00Z').toISOString(),
      category: 'Teknologi',
      views: 1340,
      isPinned: true,
    },
    {
      id: '18',
      title: 'Pelatihan Bahasa Inggris Gratis',
      description:
        'Dinas Pendidikan membuka kelas pelatihan bahasa Inggris gratis untuk pelajar.',
      publishedAt: new Date('2025-07-15T13:45:00Z').toISOString(),
      category: 'Pendidikan',
      views: 790,
    },
    {
      id: '19',
      title: 'Evaluasi Program Pemberdayaan Masyarakat',
      description:
        'Laporan hasil evaluasi program pemberdayaan masyarakat desa pada semester ini.',
      publishedAt: new Date('2025-06-29T12:00:00Z').toISOString(),
      category: 'Sosial',
      views: 510,
    },
    {
      id: '20',
      title: 'Penerimaan Tenaga Kontrak Dinas Kesehatan',
      description:
        'Pengumuman lowongan tenaga kontrak untuk berbagai posisi di Dinas Kesehatan.',
      publishedAt: new Date('2025-06-23T09:30:00Z').toISOString(),
      category: 'Kepegawaian',
      views: 620,
    },
    {
      id: '21',
      title: 'Pelayanan Publik Berbasis Online',
      description:
        'Peluncuran layanan publik online untuk mempercepat proses administrasi.',
      publishedAt: new Date('2025-07-04T08:00:00Z').toISOString(),
      category: 'Layanan Publik',
      views: 1020,
      link: '/pengumuman/pelayanan-online-2025',
    },
    {
      id: '22',
      title: 'Festival Kuliner Tradisional',
      description:
        'Acara tahunan yang menampilkan beragam kuliner khas Kabupaten Bangka.',
      publishedAt: new Date('2025-06-22T15:30:00Z').toISOString(),
      category: 'Pariwisata',
      views: 870,
    },
  ];

  const config: InformationSectionConfig = {
    news: {
      enableDefaultTabs: true,
      maxItems: 10,
      maxFeatured: 3,
      // categories: ['Infrastruktur', 'Lingkungan', 'Digitalisasi'], // optional
    },
  };

  // TODO: Use BankData later when data management system ready to be integrated
  const tabs: TabItem[] = [
    { id: 'news', label: 'Berita' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'announcement', label: 'Pengumuman' },
    { id: 'infographic', label: 'Infografis' },
    // { id: 'bankData', label: 'Bank Data' },
  ];
  type TabId = (typeof tabs)[number]['id'];
  const defaultTab: TabId = tabs[0].id;

  const tabContentMap: Record<TabId, React.ReactNode> = {
    news: <NewsTab {...config.news} />,
    agenda: <AgendaTab />,
    announcement: <AnnouncementTab announcements={announcements} />,
    infographic: <InfographicTab />,
    // bankData: <BankDataTab />,
  };

  return (
    <section className="bg-muted/25" aria-labelledby="info-section">
      <Tabs asChild defaultValue={defaultTab}>
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <header className="bg-primary text-primary-foreground flex flex-wrap items-end-safe justify-between gap-3 rounded-lg p-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Informasi Terkini
              <small className="block text-xs font-light md:text-sm">
                Ikuti perkembangan terbaru seputar kegiatan dan informasi
                penting di Kabupaten Bangka.
              </small>
            </h2>

            <HorizontalTabsList tabs={tabs} />
          </header>

          {tabs.map((tab) => (
            <TabsContent asChild key={tab.id} value={tab.id}>
              {tabContentMap[tab.id]}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
}

interface NewsTabsData extends TabItem {
  data: News[];
}

function NewsTab({
  enableDefaultTabs = true,
  maxItems = 10,
  maxFeatured = 3,
  categories,
}: InformationSectionConfig['news']) {
  const allNewsItems: News[] = [
    {
      id: '1',
      title: 'Pembangunan Jalan Baru Selesai Lebih Cepat',
      excerpt: 'Akses transportasi antar wilayah kini semakin lancar.',
      imageUrl:
        'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=600&q=80',
      publishedAt: '2025-07-12',
      slug: '/berita/pembangunan-jalan',
      isFeatured: Math.random() < 0.55,
      category: 'Infrastruktur',
      tags: ['jalan', 'transportasi', 'pembangunan', 'kendaraan'],
    },
    {
      id: '2',
      title: 'Lomba Kebersihan Antar Kecamatan Berlangsung Meriah',
      excerpt:
        'Masyarakat antusias mengikuti lomba kebersihan demi lingkungan sehat.',
      imageUrl:
        'https://images.pexels.com/photos/20853361/pexels-photo-20853361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      publishedAt: '2025-07-10',
      slug: '/berita/lomba-kebersihan',
      isFeatured: Math.random() < 0.55,
      isPopular: true,
      category: 'Lingkungan',
      tags: ['kebersihan', 'lomba', 'wilayah'],
    },
    {
      id: '5',
      title: 'Kabupaten Bangka Raih Penghargaan Wilayah Terbaik',
      excerpt:
        'Prestasi ini diraih atas kerja keras dan partisipasi aktif masyarakat Kabupaten Bangka.',
      imageUrl:
        'https://images.pexels.com/photos/18928743/pexels-photo-18928743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      publishedAt: '2025-07-04',
      slug: '/berita/kabupaten-terbaik',
      isFeatured: Math.random() < 0.55,
      category: 'Prestasi',
      tags: ['penghargaan', 'kabupaten', 'bangka'],
    },
    {
      id: '6',
      title: 'Pemuda Bangka Inisiasi Kegiatan Literasi Digital',
      excerpt:
        'Anak muda Kabupaten Bangka mengadakan pelatihan literasi digital untuk pelajar.',
      imageUrl:
        'https://images.pexels.com/photos/16763523/pexels-photo-16763523.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      publishedAt: '2025-07-03',
      slug: '/berita/literasi-digital',
      isPopular: Math.random() < 0.5,
      category: 'Edukasi',
      tags: ['literasi', 'digital', 'pelatihan'],
    },
    {
      id: '14',
      title: 'Kabupaten Bangka Luncurkan Portal Resmi untuk Layanan Online',
      excerpt:
        'Kini masyarakat dapat mengakses informasi dan layanan publik secara online.',
      imageUrl:
        'https://images.pexels.com/photos/11154192/pexels-photo-11154192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      publishedAt: '2025-06-25',
      slug: '/berita/portal-resmi',
      isPopular: Math.random() < 0.5,
      category: 'Digitalisasi',
      tags: ['website', 'layanan online', 'kabupaten digital'],
    },
  ];

  const filteredItems = categories?.length
    ? allNewsItems.filter((item) => categories.includes(item.category))
    : allNewsItems;

  const newsItems = filteredItems.slice(0, maxItems);
  const featuredNews = newsItems
    .filter((n) => n.isFeatured)
    .slice(0, maxFeatured);

  const defaultTabsData: NewsTabsData[] = [
    { label: 'Terbaru', id: 'latest', data: newsItems },
    {
      label: 'Populer',
      id: 'popular',
      data: newsItems.filter((n) => n.isPopular),
    },
  ];

  const dummyAdditionalNewsTabs = [
    { label: 'Kesehatan', id: 'kesehatan', data: [] },
    { label: 'Infrastruktur', id: 'infrastruktur', data: [] },
    { label: 'Edukasi', id: 'edukasi', data: [] },
    { label: 'Ekonomi', id: 'ekonomi', data: [] },
  ];

  const newsTabs: NewsTabsData[] = enableDefaultTabs
    ? defaultTabsData.concat(dummyAdditionalNewsTabs)
    : dummyAdditionalNewsTabs;

  return (
    <div className="bg-muted text-primary animate-in fade-in slide-in-from-left grid grid-cols-12 gap-4 rounded-lg p-4 transition-all duration-300 ease-in-out">
      <section role="region" className="col-span-full lg:col-span-7">
        <h3 className="relative mb-1.5 flex items-center text-2xl font-semibold tracking-tight">
          <Newspaper className="mr-2 inline-block size-5" />
          Berita Terkini
        </h3>
        <NewsCarousel newsItems={featuredNews} />
      </section>
      <section className="col-span-full rounded-lg lg:col-span-5">
        <NewsTabs tabsData={newsTabs} />
      </section>
    </div>
  );
}

function AgendaTab() {
  const agendaItems: Agenda[] = [
    // 1. 🔁 Different Month, Same Year (main case in your screenshot)
    {
      id: '1',
      title: 'Rapat Koordinasi Program Antar OPD',
      startDate: '2025-07-14T09:00:00',
      endDate: '2025-08-14T11:00:00',
      location: 'Aula Kantor Bupati Bangka',
      description:
        'Koordinasi lintas dinas untuk evaluasi program triwulan berjalan.',
      category: 'Pemerintahan',
    },

    // 2. ⏱ Same Day with Start/End Time
    {
      id: '2',
      title: 'Pemeriksaan Kesehatan Massal',
      startDate: '2025-07-15T08:00:00',
      endDate: '2025-07-15T12:00:00',
      location: 'Alun-Alun Taman Kota Sungailiat',
      description: 'Pemeriksaan kesehatan gratis bagi masyarakat umum.',
      category: 'Kesehatan',
    },

    // 3. 🔘 No End Date, but with Time
    {
      id: '3',
      title: 'Pelatihan UMKM dan Digitalisasi',
      startDate: '2025-07-16T13:00:00',
      location: 'Ruang Pelatihan Dinas Koperasi',
      description:
        'Pelatihan digital marketing bagi pelaku UMKM se-Kabupaten Bangka.',
      category: 'Ekonomi',
    },

    // 4. 🔁 Different Day, Same Month
    {
      id: '4',
      title: 'Pelatihan Administrasi untuk Staf Kecamatan',
      startDate: '2025-07-18T14:00:00',
      endDate: '2025-07-19T16:00:00',
      location: 'Aula Dinas PMD',
      description:
        'Peningkatan kapasitas staf administrasi di tingkat kecamatan.',
      category: 'Pelatihan',
    },

    // 5. 🔁 Different Year
    {
      id: '5',
      title: 'Pergantian Tahun Baru dan Doa Bersama',
      startDate: '2025-12-31T22:00:00',
      endDate: '2026-01-01T01:00:00',
      location: 'Masjid Agung Sungailiat',
      description: 'Doa bersama akhir tahun dan menyambut tahun baru.',
      category: 'Keagamaan',
    },

    // 6. 🔘 No Time (00:00), showTime: 'auto' will hide time
    {
      id: '6',
      title: 'Hari Kemerdekaan RI',
      startDate: '2025-08-17T00:00:00',
      endDate: '2025-08-17T00:00:00',
      location: 'Seluruh Indonesia',
      description: 'Peringatan HUT Kemerdekaan Republik Indonesia ke-80.',
      category: 'Nasional',

      showTime: 'auto',
    },

    // 7. ✅ Same Month + Hour only
    {
      id: '7',
      title: 'Sosialisasi Pencegahan DBD',
      startDate: '2025-07-20T10:00:00',
      endDate: '2025-07-20T12:00:00',
      location: 'Gedung Serbaguna Bangka',
      description: 'Edukasi mengenai pencegahan demam berdarah.',
      category: 'Kesehatan',
    },
    // 8. One day event with no time (defaults to 00:00)
    {
      id: '8',
      title: 'Upacara Hari Sumpah Pemuda',
      startDate: '2025-10-28T00:00:00',
      location: 'Lapangan Merdeka',
      description: 'Peringatan Hari Sumpah Pemuda.',
      category: 'Nasional',

      showTime: false,
    },

    // 9. Multi-day, cross-month event
    {
      id: '9',
      title: 'Festival Budaya Bangka',
      startDate: '2025-09-29T09:00:00',
      endDate: '2025-10-02T22:00:00',
      location: 'Taman Budaya Sungailiat',
      description: 'Pameran, pentas seni, dan bazar UMKM lokal.',
      category: 'Budaya',
    },

    // 10. Start and End are the same hour
    {
      id: '10',
      title: 'Pemadaman Listrik Terjadwal',
      startDate: '2025-08-10T02:00:00',
      endDate: '2025-08-10T02:00:00',
      location: 'Wilayah Kota Sungailiat',
      description: 'PLN akan melakukan pemeliharaan jaringan listrik.',
      category: 'Pemberitahuan',
    },

    // 11. Half-day morning session
    {
      id: '11',
      title: 'Senam Bersama ASN',
      startDate: '2025-08-03T06:30:00',
      endDate: '2025-08-03T09:00:00',
      location: 'Lapangan Upacara Pemkab',
      description: 'Senam rutin ASN setiap awal bulan.',
      category: 'Olahraga',
    },

    // 12. Short session in the evening
    {
      id: '12',
      title: 'Forum Konsultasi Publik',
      startDate: '2025-09-20T18:00:00',
      endDate: '2025-09-20T20:00:00',
      location: 'Ruang Rapat Utama',
      description: 'Diskusi antara pemerintah dan masyarakat.',
      category: 'Partisipasi Publik',
    },

    // 13. Multi-month academic program
    {
      id: '13',
      title: 'Pelatihan Coding Bootcamp',
      startDate: '2025-09-01T08:00:00',
      endDate: '2025-11-30T17:00:00',
      location: 'Smart Classroom Kominfo',
      description: 'Pelatihan intensif pemrograman selama 3 bulan.',
      category: 'Teknologi',
    },

    // 14. End date with time, no start time
    {
      id: '14',
      title: 'Pendaftaran Beasiswa Daerah',
      startDate: '2025-08-01T00:00:00',
      endDate: '2025-08-31T23:59:00',
      location: 'Online',
      description: 'Pengajuan beasiswa untuk pelajar dan mahasiswa.',
      category: 'Pendidikan',
    },

    // 15. Only start time, no end
    {
      id: '15',
      title: 'Sidang Paripurna DPRD',
      startDate: '2025-08-22T10:00:00',
      location: 'Gedung DPRD Kabupaten Bangka',
      description: 'Sidang agenda tahunan DPRD.',
      category: 'Pemerintahan',
    },

    // 16. Same month, same day, same time (edge case)
    {
      id: '16',
      title: 'Simulasi Bencana Gempa',
      startDate: '2025-10-10T09:00:00',
      endDate: '2025-10-10T09:00:00',
      location: 'Kantor BPBD',
      description: 'Latihan tanggap darurat untuk OPD.',
      category: 'Kesiapsiagaan',
    },

    // 17. Edge case: exact same date-time
    {
      id: '17',
      title: 'Batas Akhir Pengumpulan Proposal',
      startDate: '2025-08-10T23:59:00',
      endDate: '2025-08-10T23:59:00',
      location: 'Online Submission',
      description: 'Proposal hibah harus dikirim sebelum deadline.',
      category: 'Pemberitahuan',
    },
  ];

  return (
    <section
      role="region"
      className="bg-muted text-primary animate-in fade-in slide-in-from-bottom rounded-lg p-4 transition-all duration-300 ease-in-out"
    >
      <h3 className="mb-1.5 scroll-m-20 text-2xl font-semibold tracking-tight">
        <CalendarDays className="mr-2 inline-block size-5" />
        Agenda Kabupaten
      </h3>
      <div className="grid max-h-72 gap-4 overflow-y-auto sm:grid-cols-2 md:max-h-full lg:grid-cols-3">
        {agendaItems.map((agenda) => (
          <AgendaCard key={agenda.id} {...agenda} />
        ))}
      </div>
    </section>
  );
}
