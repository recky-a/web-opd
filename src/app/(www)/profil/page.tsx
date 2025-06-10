import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { navigation } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProfilPage() {
  const profilNav = navigation.main.find((item) => item.name === 'Profil');

  return (
    <main className="container py-8">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Profil Organisasi</h1>
        <p className="text-muted-foreground text-lg">
          Kenali lebih dekat Dinas Komunikasi, Informatika, dan Statistik
          Kabupaten Bangka. Jelajahi visi dan misi, struktur organisasi, serta
          tugas dan fungsi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {profilNav?.children?.map((item) => (
          <Link href={item.href} key={item.name} className="group">
            <Card className="group-hover:border-primary h-full transition-all group-hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {item.description}
                    </CardDescription>
                  </div>
                  <ChevronRight className="text-muted-foreground size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
