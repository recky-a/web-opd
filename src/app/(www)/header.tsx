'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { GlobalSearch } from '@/components/global-search';
import { ThemeToggle } from '@/components/theme-toggle';
import Navbar from './navbar';
import WebLogo from './web-logo';

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      const header = headerRef.current;
      const hero = document.querySelector('[aria-labelledby="hero-heading"]');

      if (!header || !hero) return;

      const headerBottom =
        header.getBoundingClientRect().bottom + window.scrollY;
      const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;

      setIsScrolledPastHero(headerBottom > heroBottom);
    };

    handleScroll(); // initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomepage]);

  const headerClass = isHomepage
    ? isScrolledPastHero
      ? 'bg-primary '
      : 'bg-transparent  hover:bg-primary/10 backdrop-blur-xs'
    : 'bg-primary ';

  return (
    <header
      ref={headerRef}
      className={`fixed z-50 flex w-full items-center-safe gap-2 px-2.5 py-3 transition-all duration-300 max-[350px]:gap-1 max-[350px]:px-1.5 md:flex-wrap ${headerClass}`}
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
