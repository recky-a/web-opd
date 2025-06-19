import { GlobalSearch } from '@/components/global-search';
import { ThemeToggle } from '@/components/theme-toggle';
import Navbar from './navbar';
import WebLogo from './web-logo';

export default function Header() {
  return (
    <header className="bg-primary flex items-center-safe gap-2 px-2.5 py-3 max-[350px]:gap-1 max-[350px]:px-1.5 md:flex-wrap">
      <WebLogo
        fullNameClassName="text-tiny"
        className="text-primary-foreground grow"
      />
      <GlobalSearch className="order-1 md:order-2" />
      <ThemeToggle buttonClassName="order-2 md:order-1" />
      <Navbar className="order-3" mobileTriggerClassName="order-3" />
    </header>
  );
}
