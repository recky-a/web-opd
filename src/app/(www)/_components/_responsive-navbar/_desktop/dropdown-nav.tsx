'use client';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { navigation } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navIconComponents } from '..';

interface NavItemProps {
  navItem: (typeof navigation.main)[0];
}

export default function DropdownNavItem({ navItem }: NavItemProps) {
  const childItems = navItem.children || [];
  const pathname = usePathname();
  const isParentActive = pathname === navItem.href;
  const hasActiveChild = childItems.some((child) => pathname === child.href);
  const isActive = isParentActive || hasActiveChild;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        aria-current={isActive ? 'page' : undefined}
        className={cn(buttonVariants({ variant: 'link' }))}
      >
        {navIconComponents[navItem.icon]}
        {navItem.name}
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">Components</div>
                <div className="text-muted-foreground">
                  Browse all components in the library.
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">Documentation</div>
                <div className="text-muted-foreground">
                  Learn how to use the library.
                </div>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#">
                <div className="font-medium">Blog</div>
                <div className="text-muted-foreground">
                  Read our latest blog posts.
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
