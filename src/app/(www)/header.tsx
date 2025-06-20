'use client';

import { GlobalSearch } from '@/components/global-search';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import WebLogo from './web-logo';

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <header
      className={`fixed z-50 flex w-full items-center-safe gap-2 px-2.5 py-3 transition-all duration-300 max-[350px]:gap-1 max-[350px]:px-1.5 md:flex-wrap ${
        isHomepage
          ? 'hover:bg-primary text-primary bg-transparent backdrop-blur-xs'
          : 'bg-primary'
      }`}
    >
      <WebLogo
        fullNameClassName="text-tiny"
        className="text-primary-foreground order-first grow"
      />
      <GlobalSearch className="order-1 min-[1305px]:order-2 md:order-2" />
      <ThemeToggle buttonClassName="order-2 min-[1305px]:order-3" />
      <Navbar
        className="order-3 min-[1305px]:order-1"
        mobileTriggerClassName="order-3"
      />
    </header>
  );
}
