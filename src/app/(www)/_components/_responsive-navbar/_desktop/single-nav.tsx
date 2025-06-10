'use client';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navigation } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navIconComponents } from '..';

interface NavItemProps {
  navItem: (typeof navigation.main)[0];
}

export default function SingleNavItem({ navItem }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === navItem.href;
  const iconElement = navIconComponents[navItem.icon];

  if (!iconElement) {
    return null;
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={navItem.href}
          aria-current={isActive ? 'page' : undefined}
          className={cn(
            navigationMenuTriggerStyle(),
            buttonVariants({ variant: 'link' }),
            'flex-row'
          )}
        >
          {iconElement}
          {navItem.name}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
