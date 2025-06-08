# 🌐 Website Dinas Kabupaten Bangka

Repositori ini adalah proyek pengembangan **website resmi untuk Organisasi Perangkat Daerah (OPD)** di lingkungan Pemerintah Kabupaten Bangka. Proyek ini bertujuan menyediakan **media informasi digital yang modern, responsif, dan ramah SEO**, sehingga masyarakat dapat dengan mudah mengakses informasi yang tersedia.

Website dibangun menggunakan teknologi modern seperti **Next.js (App Router) dan TypeScript**, sehingga:

- 💡 **Mudah dikembangkan dan dirawat** oleh tim teknis.
- ⚙️ **Terintegrasi** dengan server milik Pemkab Bangka.
- 🔍 **Ramah mesin pencari (SEO-friendly)**.
- ⚡ **Responsif dan cepat diakses** dari berbagai perangkat.

---

## 🚀 Teknologi yang Digunakan

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN/UI](https://ui.shadcn.com/) – komponen UI modern berbasis Radix
- [Zod](https://zod.dev/) – validasi schema untuk form dan API
- [Lucide Icons](https://lucide.dev/) – ikon modern berbasis SVG
- [Prettier + ESLint] – format & linter kode
- [Vercel](https://vercel.com/) _(opsional)_ – platform hosting modern

---

## 📁 Struktur Proyek

```text
src/
├── app/
│   ├── (www)/                     # Halaman publik untuk pengunjung
│   │   ├── page.tsx               # Beranda (Homepage)
│   │   ├── layout.tsx             # Layout umum (Header, Footer)
│   │   ├── berita/                # Daftar & detail berita
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── pengumuman/page.tsx    # Halaman pengumuman
│   │   ├── galeri/page.tsx        # Halaman galeri
│   │   ├── layanan/page.tsx       # Halaman layanan
│   │   └── profil/                # Profil dinas (sub-halaman)
│   │       ├── visi-dan-misi/page.tsx
│   │       ├── sambutan-kepala-dinas/page.tsx
│   │       ├── struktur-organisasi/page.tsx
│   │       └── tugas-pokok-dan-fungsi/page.tsx
│   │
│   ├── (auth)/                    # Halaman otentikasi
│   │   ├── layout.tsx
│   │   └── login/page.tsx
│   │
│   └── administrasi/              # Halaman dashboard admin
│       ├── layout.tsx             # Layout admin (Sidebar, Topbar)
│       ├── pengaturan/            # Konfigurasi data OPD
│       └── manajemen-konten/      # Pengelolaan berita, galeri, dst.
│
├── components/
│   ├── ui/                        # Komponen dasar dari ShadCN/UI
│   ├── layouts/                   # Header, Footer, Sidebar
│   └── shared/                    # Komponen lintas halaman
│
├── lib/                           # Fungsi utilitas (db, auth, dsb)
├── types/                         # Definisi tipe global
├── styles/                        # CSS global
└── public/                        # Aset publik (favicon, gambar, dsb)

File penting lainnya:
- `next.config.ts` – Konfigurasi Next.js
- `postcss.config.mjs` – Konfigurasi PostCSS
- `eslint.config.mjs` – Konfigurasi ESLint
- `tsconfig.json` – Konfigurasi TypeScript
```

---

## 📦 Cara Menjalankan Proyek

```bash
# 1. Clone repositori
git clone https://github.com/namauser/nama-repo.git
cd nama-repo

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
http://localhost:3000
```

---

## 🚧 Status Proyek

> Status: 🔧 **Tahap awal pengembangan**

✅ Fitur yang sudah tersedia:

- Halaman publik (beranda, profil, berita, layanan, galeri, pengumuman)
- Halaman login
- Layout dasar dashboard admin

🛠️ Fitur yang sedang dikembangkan:

- Manajemen konten (berita, galeri, layanan, pengumuman)
- Pengaturan informasi OPD
- Autentikasi & otorisasi admin
- Modularisasi komponen agar bisa digunakan ulang

📋 Fitur yang direncanakan:

- Multi-level user role (admin super, penulis konten)
- Preview konten sebelum publikasi
- Dashboard statistik pengunjung (integrasi Google Analytics)
- Pencarian konten (berita, pengumuman, layanan)
- Galeri video & dokumentasi publik

---

## 📌 Catatan Penting

- Proyek ini **bukan multi-tenant**: satu repositori hanya untuk satu OPD.
- File `todo.md` **tidak disertakan dalam repositori** karena hanya digunakan untuk catatan lokal (`.gitignore`).
- Semua komponen dan halaman didesain **semantik, responsif, dan mudah diakses** (accessibility-aware).
- Layout admin dan publik dipisahkan untuk menjaga keamanan dan struktur yang rapi.

---

## 👥 Kontributor

Proyek ini dikelola dan dikembangkan oleh tim internal dari **Dinas Komunikasi dan Informatika Kabupaten Bangka**.

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi **[MIT License](./LICENSE)** – Anda bebas menggunakan dan memodifikasi dengan tetap menyertakan atribusi kepada pengembang asli.
