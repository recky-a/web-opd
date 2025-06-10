import { GlobalSearch } from '@/components/global-search';
import { ModeToggle } from '@/components/mode-toggle';
import { JSX } from 'react';
import ResponsiveNavbar from './_components/_responsive-navbar';
import WebLogo from './web-logo';

/**
 * @description A responsive, accessible, and SEO-friendly header component.
 * It features the website logo, a global search button, a theme toggler, and a navigation menu.
 * The navigation menu is displayed in a sheet component on smaller screens for a better mobile experience.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-between gap-2 p-2 shadow lg:grid lg:grid-cols-2 lg:justify-items-end-safe lg:p-6">
      <div className="flex-1 lg:flex-auto lg:justify-self-start">
        <WebLogo />
      </div>

      <ModeToggle />
      <div className="flex justify-between gap-2 py-2 lg:col-span-2 lg:justify-self-stretch">
        <ResponsiveNavbar />
        <GlobalSearch />
      </div>
    </header>
  );
}
