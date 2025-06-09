import { ThemeProvider } from '@/components/theme-provider';
import { generateMetadata } from '@/lib/metadata';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './footer';
import Header from './header';
import './index.css';

// Optimized font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  preload: true,
});

// Clean, essential metadata
export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Accessibility Skip Links */}
          <div className="sr-only focus-within:not-sr-only">
            <a
              href="#main-content"
              className="bg-primary text-primary-foreground focus:ring-ring fixed top-4 left-4 z-50 rounded-md px-4 py-2 focus:ring-2 focus:ring-offset-2"
            >
              Lewati ke konten utama
            </a>
          </div>

          <Header />

          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
