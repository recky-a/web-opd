import { siteConfig } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import logoKab from '../../../public/logo-kab.png';

/**
 * @description A semantic, SEO-friendly, and accessible website logo component with dark mode support.
 * It uses semantic HTML tags (abbr, small) for its text content to improve structural meaning.
 *
 * @returns {JSX.Element} The rendered web logo component.
 */
export default function WebLogo(): JSX.Element {
  return (
    <Link
      href={siteConfig.url}
      aria-label={`${siteConfig.name} Homepage`}
      className="group inline-flex items-center gap-3"
    >
      <figure className="group-hover:ring-primary/50 flex size-12 shrink-0 items-center justify-center rounded-md bg-white/90 p-1 shadow-md ring-2 ring-transparent transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg dark:bg-gray-800 dark:group-hover:ring-blue-400">
        <Image
          src={logoKab}
          alt="Logo Pemerintah Kabupaten Bangka"
          width={711}
          height={955}
          priority
          className="h-full w-auto"
        />
      </figure>
      <div className="flex flex-col" aria-hidden="true">
        <abbr className="font-bold text-slate-800 uppercase transition-colors duration-300 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">
          {siteConfig.shortName}
        </abbr>

        <small className="text-tiny md:text-md text-slate-600 capitalize transition-colors duration-300 group-hover:text-blue-600 sm:text-sm dark:text-slate-400 dark:group-hover:text-blue-400">
          {siteConfig.name}
        </small>
      </div>
    </Link>
  );
}
