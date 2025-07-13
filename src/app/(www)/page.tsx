import GreetingSection from './_partials/homepage/greeting-section';
import HeroSection from './_partials/homepage/hero-section';

const greetingData = {
  opdName: 'Dinas Komunikasi dan Informatika Kabupaten Bangka',
  welcomeMessage: 'Selamat datang di portal resmi',
  description:
    'Kami berkomitmen untuk menghadirkan layanan komunikasi, informasi, dan teknologi terbaik bagi masyarakat serta mendukung transformasi digital di lingkungan Pemerintah Kabupaten Bangka.',
  headTitle: 'Kepala Dinas',
  headName: 'M. Fadillah, S.T., M.M.',
  headPhotoUrl: '/hero-1.jpg',
  headBio:
    'Sebagai Kepala Dinas Kominfo Kabupaten Bangka, saya berkomitmen untuk memperkuat infrastruktur TIK, mengembangkan sistem informasi publik yang terbuka, serta mendukung inovasi digital demi kemajuan pelayanan publik dan keterbukaan informasi.',
  headQuote:
    'Infrastruktur digital yang kokoh adalah fondasi dari pelayanan publik yang cepat, transparan, dan akuntabel.',
  divisions: [
    {
      title: 'Bidang Pengelolaan Informasi dan Komunikasi Publik',
      description:
        'Bertanggung jawab atas penyebaran informasi pembangunan daerah, pengelolaan media sosial pemerintah, serta layanan kehumasan yang efektif.',
    },
    {
      title: 'Bidang Aplikasi dan Informatika (APTIKA)',
      description:
        'Mengembangkan sistem informasi pemerintahan, mengelola layanan email dinas, hosting website OPD, dan mendukung keamanan siber internal pemerintah.',
    },
    {
      title: 'Bidang Statistik dan Persandian',
      description:
        'Mengelola data statistik sektoral, integrasi dengan BPS, dan menjamin keamanan informasi melalui sistem persandian pemerintah daerah.',
    },
    {
      title: 'Sekretariat',
      description:
        'Mengelola administrasi umum, kepegawaian, perencanaan program, dan keuangan untuk memastikan kelancaran operasional dinas.',
    },
  ],
};

export default function Homepage() {
  return (
    <main id="main-content" className="space-y-4">
      {/* Hero Section With Carousel */}
      <HeroSection />
      {/* Greeting Section */}
      <GreetingSection {...greetingData} />
    </main>
  );
}
