// web-logo.tsx
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import logoKab from '../../../public/logo-kab.png';

/**
 * @description Props for the WebLogo component.
 * @property {string} [className] - Additional classes for the Link component.
 * @property {string} [imageClassName] - Additional classes for the Image component.
 * @property {string} [shortNameClassName] - Additional classes for the short name text.
 * @property {string} [fullNameClassName] - Additional classes for the full name text.
 * @property {boolean} [hideFullName] - Whether to hide the full name text.
 * @property {boolean} [hideShortName] - Whether to hide the short name text.
 */
interface WebLogoProps {
  className?: string;
  imageClassName?: string;
  shortNameClassName?: string;
  fullNameClassName?: string;
  hideFullName?: boolean;
  hideShortName?: boolean;
}

/**
 * @description A semantic, SEO-friendly, and accessible website logo component with dark mode support.
 * It uses semantic HTML tags (abbr, small) for its text content to improve structural meaning.
 * This component is reusable and customizable via props for Tailwind CSS classes and content visibility.
 *
 * @param {WebLogoProps} props - The props for the WebLogo component.
 * @returns {JSX.Element} The rendered web logo component.
 */
export default function WebLogo({
  className,
  imageClassName,
  shortNameClassName,
  fullNameClassName,
  hideFullName = false,
  hideShortName = false,
}: WebLogoProps): JSX.Element {
  return (
    <Link
      href={siteConfig.url}
      aria-label={`${siteConfig.name} Homepage`}
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <figure
        className={cn(
          'group-hover:ring-primary/50 flex size-12 shrink-0 items-center justify-center rounded-md bg-white/90 p-1 shadow-md ring-2 ring-transparent transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg dark:bg-gray-800 dark:group-hover:ring-blue-400',
          imageClassName
        )}
      >
        <Image
          src={logoKab}
          alt="Logo Pemerintah Kabupaten Bangka"
          width={711}
          height={955}
          priority
          className="h-full w-auto"
        />
      </figure>{' '}
      <div className="flex flex-col" aria-hidden="true">
        {!hideShortName && (
          <abbr
            className={cn(
              'font-bold uppercase transition-colors duration-300 group-hover:text-blue-600', // Removed text-slate-800 and dark:text-slate-200
              'text-primary-foreground', // Added to ensure contrast against primary background
              shortNameClassName
            )}
          >
            {siteConfig.shortName}
          </abbr>
        )}
        {!hideFullName && (
          <small
            className={cn(
              'text-tiny md:text-md capitalize transition-colors duration-300 group-hover:text-blue-600 sm:text-sm', // Removed text-slate-600 and dark:text-slate-400
              'text-primary-foreground/80', // Added for slightly subdued but still contrasting text
              fullNameClassName
            )}
          >
            {siteConfig.name}
          </small>
        )}
      </div>
    </Link>
  );
}
