'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Calendar,
  Database,
  Download,
  Eye,
  FileText,
  Folder,
  Grid3X3,
  List,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface BankData {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory?: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
  previewUrl?: string;
  publishedDate: string;
  updatedDate?: string;
  downloads: number;
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

// Dummy data (same as before)
const bankDataItems: BankData[] = [
  {
    id: '1',
    title: 'Laporan Keuangan Pemerintah Daerah (LKPD) 2024',
    description:
      'Laporan keuangan lengkap pemerintah daerah untuk tahun anggaran 2024 yang telah diaudit.',
    category: 'keuangan',
    subCategory: 'Laporan Keuangan',
    fileSize: '5.2 MB',
    fileType: 'PDF',
    downloadUrl: '/bank-data/lkpd-2024.pdf',
    previewUrl: '/preview/lkpd-2024',
    publishedDate: '2024-12-15',
    updatedDate: '2024-12-20',
    downloads: 1247,
    tags: ['keuangan', 'laporan', 'audit', '2024'],
    isPopular: true,
    isNew: true,
  },
  {
    id: '2',
    title: 'Data Kependudukan Semester II 2024',
    description:
      'Data demografi dan kependudukan Kabupaten Bangka periode Juli-Desember 2024.',
    category: 'kependudukan',
    subCategory: 'Data Demografi',
    fileSize: '1.8 MB',
    fileType: 'XLSX',
    downloadUrl: '/bank-data/data-kependudukan-2024-2.xlsx',
    publishedDate: '2024-12-01',
    downloads: 823,
    tags: ['kependudukan', 'demografi', 'statistik', '2024'],
    isPopular: true,
  },
  {
    id: '3',
    title: 'Rencana Pembangunan Jangka Menengah Daerah (RPJMD) 2021-2026',
    description:
      'Dokumen perencanaan pembangunan daerah untuk periode 2021-2026.',
    category: 'perencanaan',
    subCategory: 'Dokumen Perencanaan',
    fileSize: '12.4 MB',
    fileType: 'PDF',
    downloadUrl: '/bank-data/rpjmd-2021-2026.pdf',
    previewUrl: '/preview/rpjmd-2021-2026',
    publishedDate: '2021-03-15',
    updatedDate: '2023-06-10',
    downloads: 2156,
    tags: ['rpjmd', 'perencanaan', 'pembangunan', 'jangka menengah'],
    isPopular: true,
  },
  {
    id: '4',
    title: 'Data Indeks Pembangunan Manusia (IPM) 2024',
    description:
      'Indikator IPM Kabupaten Bangka tahun 2024 berdasarkan data BPS.',
    category: 'sosial',
    subCategory: 'Indikator Sosial',
    fileSize: '750 KB',
    fileType: 'CSV',
    downloadUrl: '/bank-data/data-ipm-2024.csv',
    publishedDate: '2024-09-20',
    downloads: 456,
    tags: ['ipm', 'pembangunan manusia', 'sosial', 'bps'],
  },
  {
    id: '5',
    title: 'Peta Wilayah Administratif Kabupaten Bangka',
    description:
      'Peta digital wilayah administratif lengkap dengan batas kecamatan dan desa.',
    category: 'geografis',
    subCategory: 'Peta Wilayah',
    fileSize: '8.7 MB',
    fileType: 'PDF',
    downloadUrl: '/bank-data/peta-wilayah-administratif.pdf',
    previewUrl: '/preview/peta-wilayah',
    publishedDate: '2024-08-05',
    downloads: 1089,
    tags: ['peta', 'wilayah', 'administratif', 'geografis'],
    isPopular: true,
  },
  {
    id: '6',
    title: 'Laporan Pelaksanaan APBD Semester I 2024',
    description:
      'Laporan realisasi anggaran pendapatan dan belanja daerah semester pertama 2024.',
    category: 'keuangan',
    subCategory: 'Laporan APBD',
    fileSize: '3.4 MB',
    fileType: 'PDF',
    downloadUrl: '/bank-data/laporan-apbd-sem1-2024.pdf',
    publishedDate: '2024-07-31',
    downloads: 678,
    tags: ['apbd', 'anggaran', 'realisasi', 'semester'],
  },
];

const getFileIcon = (fileType: string) => {
  const base = 'size-5 md:size-6';
  const map: Record<string, string> = {
    pdf: 'text-red-500',
    xlsx: 'text-green-600',
    xls: 'text-green-600',
    csv: 'text-blue-500',
  };
  const color = map[fileType.toLowerCase()] ?? 'text-gray-500';
  return <FileText className={`${base} ${color}`} />;
};

const getCategoryFolders = (items: BankData[]) => {
  const categories = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = { count: 0, items: [] };
      }
      acc[item.category].count++;
      acc[item.category].items.push(item);
      return acc;
    },
    {} as Record<string, { count: number; items: BankData[] }>
  );

  return Object.entries(categories).map(([name, data]) => ({
    name,
    displayName: name.charAt(0).toUpperCase() + name.slice(1),
    count: data.count,
    items: data.items,
  }));
};

export default function BankDataTab() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayItems = selectedCategory
    ? bankDataItems.filter((item) => item.category === selectedCategory)
    : bankDataItems.slice(0, 6);

  const totalDownloads = bankDataItems.reduce(
    (sum, item) => sum + item.downloads,
    0
  );
  const newItems = bankDataItems.filter((item) => item.isNew).length;
  const categoryFolders = getCategoryFolders(bankDataItems);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });

  return (
    <section
      className="rounded-2xl border border-slate-200/40 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 shadow dark:border-slate-800/50 dark:from-slate-950 dark:to-blue-950/10"
      aria-labelledby="bank-data-heading"
    >
      {/* Section Header */}
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2 dark:bg-blue-900/20">
            <Database className="size-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2
              id="bank-data-heading"
              className="text-xl font-bold text-slate-900 dark:text-slate-100"
            >
              Bank Data Publik
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Akses data dan informasi publik terkini
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-2 text-xs">
            <Badge variant="outline">{bankDataItems.length} Berkas</Badge>
            <Badge variant="outline">
              {totalDownloads.toLocaleString()} Unduhan
            </Badge>
            {newItems > 0 && (
              <Badge variant="secondary" className="text-xs font-medium">
                {newItems} Baru
              </Badge>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
            asChild
          >
            <Link href="/bank-data">
              <Database className="mr-1 size-3.5" />
              Lihat Semua Data
              <ArrowRight className="ml-1 size-3.5" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Breadcrumb */}
      {selectedCategory && (
        <nav
          aria-label="breadcrumb"
          className="mb-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Data Publik
          </button>
          <ArrowRight className="size-3" />
          <span className="font-medium capitalize">{selectedCategory}</span>
        </nav>
      )}

      {/* Category Grid */}
      {!selectedCategory && (
        <>
          <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Kategori Data
          </h3>
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categoryFolders.map((folder) => (
              <button
                key={folder.name}
                onClick={() => setSelectedCategory(folder.name)}
                className="group flex flex-col items-center rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-800"
              >
                <Folder className="size-6 text-blue-500 group-hover:text-blue-600" />
                <div className="mt-1 text-xs font-medium text-slate-800 dark:text-white">
                  {folder.displayName}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {folder.count} file
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Toolbar */}
      {selectedCategory && (
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-700 capitalize dark:text-slate-300">
            {selectedCategory} ({displayItems.length} file)
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="size-7 p-0"
          >
            {viewMode === 'grid' ? (
              <List className="h-4 w-4" />
            ) : (
              <Grid3X3 className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}

      {/* Files Display */}
      <div
        className={`grid gap-3 ${
          viewMode === 'list'
            ? 'grid-cols-1'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {displayItems.map((item) => (
          <Card
            key={item.id}
            className="group border bg-white/80 backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900/60"
          >
            <CardContent className="space-y-2 p-4">
              <div className="flex items-start gap-3">
                {getFileIcon(item.fileType)}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between">
                    <h4 className="line-clamp-2 text-sm font-medium text-slate-900 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                      {item.title}
                    </h4>
                    <div className="flex gap-1">
                      {item.isNew && (
                        <Badge className="bg-green-100 text-[10px] text-green-700 dark:bg-green-800/40 dark:text-green-400">
                          Baru
                        </Badge>
                      )}
                      {item.isPopular && (
                        <Badge className="bg-orange-100 text-[10px] text-orange-700 dark:bg-orange-800/40 dark:text-orange-400">
                          Populer
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="line-clamp-2 text-xs text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <div className="flex gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />{' '}
                    {formatDate(item.publishedDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-3 w-3" /> {item.downloads}
                  </span>
                </div>
                <span className="font-medium">
                  {item.fileType} • {item.fileSize}
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="px-1.5 py-0.5 text-[10px]"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                {item.previewUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 flex-1 text-xs"
                    asChild
                  >
                    <Link href={item.previewUrl} target="_blank">
                      <Eye className="mr-1 h-3.5 w-3.5" />
                      Preview
                    </Link>
                  </Button>
                )}
                <Button size="sm" className="h-7 flex-1 text-xs" asChild>
                  <Link href={item.downloadUrl} download>
                    <Download className="mr-1 h-3.5 w-3.5" />
                    Unduh
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
