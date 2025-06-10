import {
  Briefcase,
  Building,
  Image as Gallery,
  Home,
  Megaphone,
  Newspaper,
  Phone,
} from 'lucide-react';

import DesktopNavbar from './_desktop';
import MobileNavbar from './mobile';

export const navIconComponents: Record<
  string,
  React.ReactElement<{ className?: string }>
> = {
  home: <Home className="size-4" />,
  building: <Building className="size-4" />,
  service: <Briefcase className="size-4" />,
  news: <Newspaper className="size-4" />,
  megaphone: <Megaphone className="size-4" />,
  gallery: <Gallery className="size-4" />,
  contact: <Phone className="size-4" />,
};

export default function ResponsiveNavbar(): React.ReactElement {
  return (
    <>
      {/* Desktop Navbar: 
        - Hidden on screens smaller than 1024px (the `lg` breakpoint).
        - Becomes a block element on large screens.
        - The `display: none` ensures it's removed from the accessibility tree on mobile.
      */}
      <DesktopNavbar />

      {/* Mobile Navbar:
        - Visible by default.
        - Becomes hidden on large screens (1024px and up).
        - The `lg:hidden` applies `display: none`, removing it from the
          accessibility tree on desktop.
      */}
      <MobileNavbar />
    </>
  );
}
