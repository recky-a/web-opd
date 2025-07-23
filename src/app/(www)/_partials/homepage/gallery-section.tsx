import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GallerySectionProps } from '@/schemas/gallery';
import { PhotoItem } from '@/schemas/photo';
import { Camera, Video } from 'lucide-react';
import { PhotoGallery } from '../../_components/photo-gallery';
import { VideoGallery } from '../../_components/video-gallery';

const videoData = [
  {
    id: '1',
    title: 'Journey of Digital Transformation',
    videoId: 'ScMzIvxBSi4',
    thumbnailUrl: 'https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg',
    description:
      'Perjalanan inspiratif transformasi digital Kabupaten Bangka dari visi hingga implementasi yang mengubah paradigma pelayanan publik.',
    duration: '8:45',
    date: '12 Januari 2024',
    views: '12.5K',
    category: 'Documentary',
    tags: ['transformation', 'digital', 'journey', 'inspiration'],
  },
  {
    id: '2',
    title: 'Smart City Vision 2030',
    videoId: 'tgbNymZ7vqY',
    thumbnailUrl: 'https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg',
    description:
      'Visualisasi masa depan Bangka sebagai smart city dengan teknologi terintegrasi yang mengutamakan keberlanjutan dan kualitas hidup.',
    duration: '12:30',
    date: '25 Februari 2024',
    views: '8.7K',
    category: 'Vision',
    tags: ['smart city', 'future', 'sustainability', 'technology'],
  },
  {
    id: '3',
    title: 'Innovative Public Services',
    videoId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    description:
      'Pengenalan layanan publik inovatif dengan pendekatan digital-first yang memudahkan warga Bangka.',
    duration: '6:10',
    date: '3 Maret 2024',
    views: '5.2K',
    category: 'Public Service',
    tags: ['public service', 'digital', 'innovation'],
  },
  {
    id: '4',
    title: 'Green Tech for Sustainable Future',
    videoId: 'YbJOTdZBX1g',
    thumbnailUrl: 'https://img.youtube.com/vi/YbJOTdZBX1g/hqdefault.jpg',
    description:
      'Teknologi hijau untuk keberlanjutan masa depan daerah, dipaparkan dalam forum lingkungan daerah.',
    duration: '9:20',
    date: '10 April 2024',
    views: '6.1K',
    category: 'Environment',
    tags: ['green tech', 'eco', 'sustainability'],
  },
  {
    id: '5',
    title: 'AI in Government Services',
    videoId: 'J---aiyznGQ',
    thumbnailUrl: 'https://img.youtube.com/vi/J---aiyznGQ/hqdefault.jpg',
    description:
      'Implementasi kecerdasan buatan untuk mendukung efisiensi dan transparansi layanan pemerintahan.',
    duration: '7:35',
    date: '27 April 2024',
    views: '9.9K',
    category: 'Technology',
    tags: ['AI', 'government', 'efficiency'],
  },
];
const photoData: PhotoItem[] = [
  {
    id: '1',
    title: 'Upacara Hari Jadi Bangka',
    url: 'https://images.pexels.com/photos/21038419/pexels-photo-21038419.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Kemegahan upacara peringatan hari jadi Bangka dengan barisan ceremonial di halaman kantor bupati',
    date: '15 Januari 2024',
    location: 'Halaman Kantor Bupati Bangka',
    category: 'Ceremonial',
    description:
      'Momentum bersejarah peringatan hari jadi Kabupaten Bangka ke-74 yang menampilkan kemegahan upacara dengan tata ceremonial yang sempurna.',
    photographer: 'Ahmad Ridwan',
    tags: ['upacara', 'ceremonial', 'tradisi', 'pemerintahan'],
    featured: true,
    orientation: 'landscape',
  },
  {
    id: '2',
    title: 'Digital Learning Experience',
    url: 'https://images.pexels.com/photos/20853361/pexels-photo-20853361.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Atmosphere dinamis pelatihan digital dengan teknologi modern dan interaksi kolaboratif',
    date: '8 Maret 2024',
    location: 'Innovation Hub Kominfo',
    category: 'Technology',
    description:
      'Transformasi pembelajaran digital yang menggabungkan teknologi mutakhir dengan pendekatan human-centered design.',
    photographer: 'Sari Melati',
    tags: ['digital', 'training', 'innovation', 'technology'],
    featured: false,
    orientation: 'landscape',
  },
  {
    id: '3',
    title: 'Public Service Excellence',
    url: 'https://images.pexels.com/photos/16763523/pexels-photo-16763523.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pelayanan prima di mall pelayanan publik dengan desain interior modern dan user-friendly',
    date: '22 Februari 2024',
    location: 'Mall Pelayanan Publik Bangka',
    category: 'Service',
    description:
      'Wujud nyata pelayanan publik terdepan dengan desain ruang yang memadukan efisiensi dan kenyamanan.',
    photographer: 'Indra Wijaya',
    tags: ['service', 'public', 'excellence', 'modern'],
    featured: true,
    orientation: 'landscape',
  },
  {
    id: '4',
    title: 'Strategic Collaboration',
    url: 'https://images.pexels.com/photos/11154192/pexels-photo-11154192.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sinergi strategis dalam rapat koordinasi lintas departemen dengan setting profesional',
    date: '5 April 2024',
    location: 'Executive Meeting Room',
    category: 'Corporate',
    description:
      'Kolaborasi strategis lintas departemen yang menghasilkan sinergi optimal dalam pencapaian target organisasi.',
    photographer: 'Maya Kusuma',
    tags: ['collaboration', 'strategy', 'meeting', 'teamwork'],
    featured: false,
    orientation: 'portrait',
  },
  {
    id: '5',
    title: 'Cybersecurity Awareness',
    url: 'https://images.pexels.com/photos/18928743/pexels-photo-18928743.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Presentasi cybersecurity dengan visual data yang menarik dan audience yang antusias',
    date: '18 Mei 2024',
    location: 'Bangka Convention Center',
    category: 'Security',
    description:
      'Edukasi komprehensif tentang keamanan siber yang dikemas dengan pendekatan visual storytelling yang menarik.',
    photographer: 'Eko Prasetyo',
    tags: ['security', 'education', 'cyber', 'awareness'],
    featured: false,
    orientation: 'portrait',
  },
  {
    id: '6',
    title: 'Tech Innovation Showcase',
    url: 'https://images.pexels.com/photos/21038730/pexels-photo-21038730.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Festival teknologi dengan display inovasi digital yang futuristik dan interactive',
    date: '10 Juni 2024',
    location: 'Taman Teknologi Bangka',
    category: 'Innovation',
    description:
      'Pameran inovasi teknologi yang memamerkan pencapaian digital terdepan dan visi futuristik pembangunan daerah.',
    photographer: 'Devi Anggraeni',
    tags: ['innovation', 'technology', 'future', 'digital'],
    featured: true,
    orientation: 'landscape',
  },
];

export function GallerySection({
  title = 'Gallery Showcase',
  subtitle = 'Dokumentasi visual berbagai program, kegiatan, dan layanan dari Organisasi Perangkat Daerah (OPD) di Kabupaten Bangka.',
}: GallerySectionProps) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-center">
          {subtitle}
        </p>

        <Tabs defaultValue="photos" className="mx-auto mt-12 w-full">
          <TabsList className="grid h-12 w-full grid-cols-2">
            <TabsTrigger
              value="photos"
              className="h-full text-sm font-semibold"
            >
              <Camera className="mr-2 size-4" />
              Galeri Foto
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="h-full text-sm font-semibold"
            >
              <Video className="mr-2 size-4" />
              Galeri Video
            </TabsTrigger>
          </TabsList>
          <TabsContent value="photos" className="mt-8">
            <PhotoGallery photoData={photoData} />
          </TabsContent>
          <TabsContent value="videos" className="mt-8">
            <VideoGallery videoData={videoData} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
