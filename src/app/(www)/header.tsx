import { GlobalSearch } from '@/components/global-search';
import { ThemeToggle } from '@/components/theme-toggle';
import Navbar from './navbar';
import WebLogo from './web-logo';

export default function Header() {
  return (
    <header
      className={`bg-primary flex w-full max-w-screen items-center-safe gap-2 px-2.5 py-3 max-[350px]:gap-1 max-[350px]:px-1.5 md:flex-wrap`}
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
