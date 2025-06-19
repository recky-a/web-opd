'use client';

import { BrandIcon } from '@/components/brand-icon';
import Icon, { IconKeys } from '@/components/icon';
import { buttonVariants } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { navigation, siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ComponentPropsWithoutRef,
  Fragment,
  JSX,
  memo,
  useEffect,
  useId,
  useState,
} from 'react';
import { siFacebook, siInstagram, siX, siYoutube } from 'simple-icons';

// --- TYPE DEFINITIONS ---
interface NavigationItem {
  name: string;
  href: string;
  icon: IconKeys;
  description: string;
  children?: NavigationItem[];
}

// --- MAPPING FOR SOCIAL ICONS ---
const socialIcons = {
  facebook: siFacebook,
  x: siX,
  instagram: siInstagram,
  youtube: siYoutube,
};

// --- SUB-COMPONENTS (Mobile) ---

const NavLinkItem = memo(function NavLinkItem({
  nav,
  pathname,
}: {
  nav: NavigationItem;
  pathname: string;
}) {
  return (
    <li>
      <Link
        href={nav.href}
        className={cn(
          pathname === nav.href
            ? buttonVariants({ variant: 'secondary' })
            : `${buttonVariants({ variant: 'outline' })} text-primary`,
          'flex h-auto items-center justify-start gap-3 rounded-sm py-3 font-bold'
        )}
      >
        <Icon className="size-5 flex-shrink-0" iconName={nav.icon} />
        <span className="flex w-full items-center justify-between text-base">
          {nav.name}
          <small className="text-tiny text-right font-normal whitespace-normal italic">
            {nav.description}
          </small>
        </span>
      </Link>
    </li>
  );
});

function CollapsibleNavItem({
  nav,
  pathname,
}: {
  nav: NavigationItem;
  pathname: string;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const isChildActive = nav.children?.some((child) => pathname === child.href);

  useEffect(() => {
    if (pathname === nav.href || isChildActive) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname, nav.href, isChildActive]);

  return (
    <Collapsible asChild open={isOpen} onOpenChange={setIsOpen}>
      <li className="space-y-0">
        <CollapsibleTrigger
          className={cn(
            pathname === nav.href || isChildActive
              ? buttonVariants({ variant: 'secondary' })
              : buttonVariants({ variant: 'outline' }),
            `text-primary flex h-auto w-full items-center justify-start gap-3 rounded-md px-3 py-3 text-left font-bold transition-colors`
          )}
        >
          <Icon className="size-5 flex-shrink-0" iconName={nav.icon} />
          <span className="flex w-full items-center justify-between text-base">
            {nav.name}
            <small className="text-tiny text-muted-foreground max-w-[80%] text-right font-normal whitespace-normal italic">
              {nav.description}
            </small>
          </span>
          {isOpen ? (
            <ChevronUp className="size-4 flex-shrink-0 transition-transform duration-200" />
          ) : (
            <ChevronDown className="size-4 flex-shrink-0 transition-transform duration-200" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all">
          <div
            className={cn(
              pathname === nav.href || isChildActive
                ? 'bg-secondary text-secondary-foreground'
                : 'bg-muted text-primary',
              'mt-0.5 rounded-md border'
            )}
          >
            <ul className="flex flex-col gap-1.5 p-2">
              {nav.children!.map((navChild) => (
                <li key={`navChild-${navChild.name}`}>
                  <Link
                    href={navChild.href}
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'flex w-full items-center justify-between rounded-md p-1.5 text-left text-xs font-medium capitalize transition-colors',
                      pathname === navChild.href
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-primary/10'
                    )}
                  >
                    {navChild.name}
                    <small
                      className={cn(
                        'text-tiny max-w-[70%] text-right font-normal whitespace-normal italic max-[350px]:text-[0.5rem]',
                        pathname !== navChild.href && 'text-muted-foreground'
                      )}
                    >
                      {navChild.description}
                    </small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </li>
    </Collapsible>
  );
}

function NavigationList(): JSX.Element {
  const pathname = usePathname();
  const navItems = navigation.main as NavigationItem[];

  return (
    <nav aria-label="Main site navigation" className="grow">
      <ul className="flex flex-col gap-2.5 **:whitespace-normal">
        {navItems.map((nav) =>
          nav.children ? (
            <CollapsibleNavItem key={nav.name} nav={nav} pathname={pathname} />
          ) : (
            <NavLinkItem key={nav.name} nav={nav} pathname={pathname} />
          )
        )}
      </ul>
    </nav>
  );
}

function SocialLinks(): JSX.Element {
  const socialEntries = Object.entries(siteConfig.social);

  return (
    <ul className="mb-10 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
      {socialEntries.map((sosmed, index) => (
        <Fragment key={sosmed[1].name}>
          <li>
            <Link
              href={sosmed[1].url}
              className="flex items-center justify-center gap-1.5 text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon
                icon={socialIcons[sosmed[1].icon as keyof typeof socialIcons]}
                className="size-3.5"
              />
              {sosmed[1].name}
            </Link>
          </li>
          {index < socialEntries.length - 1 && (
            <Separator orientation="vertical" className="h-4" />
          )}
        </Fragment>
      ))}
    </ul>
  );
}

/**
 * @description Props for the Navbar component.
 * @property {string} [className] - Additional classes for the main Navbar container.
 * @property {string} [mobileTriggerClassName] - Additional classes for the mobile navigation trigger button.
 */
interface NavbarProps {
  className?: string;
  mobileTriggerClassName?: string;
}

// --- MAIN COMPONENT ---

export default function Navbar({
  className,
  mobileTriggerClassName,
}: NavbarProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const popoverContentId = useId();
  const popoverTriggerId = useId();
  const navItems = navigation.main as NavigationItem[];
  const pathname = usePathname();

  return (
    <>
      {/* --- Mobile Navigation Popover (Completed) --- */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          id={popoverTriggerId}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'max-[350px]:w-6.5 md:hidden',
            mobileTriggerClassName
          )}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={popoverContentId}
          aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          {open ? (
            <X className="animate-in spin-in size-5 max-[350px]:size-4" />
          ) : (
            <Menu className="animate-in spin-out size-5 max-[350px]:size-4" />
          )}
        </PopoverTrigger>
        <PopoverContent
          id={popoverContentId}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation menu"
          className="bg-primary text-primary-foreground mt-2 flex h-[70dvh] min-h-[60dvh] w-svw flex-col gap-8 border-0 p-4"
          align="end"
          sideOffset={8}
          asChild
        >
          <ScrollArea>
            <NavigationList />
            <SocialLinks />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </PopoverContent>
      </Popover>

      {/* --- Desktop Navigation Menu (Now Dynamic) --- */}
      <NavigationMenu
        viewport={false}
        className={cn('mx-auto my-3 hidden w-full grow md:flex', className)}
      >
        <NavigationMenuList className="gap-1 max-[870px]:flex-wrap lg:flex-nowrap lg:gap-4">
          {navItems.map((nav) => {
            const isChildActive = nav.children?.some(
              (child) => pathname === child.href
            );
            return nav.children ? (
              <NavigationMenuItem key={nav.name}>
                <NavigationMenuTrigger
                  className={
                    pathname === nav.href || isChildActive
                      ? buttonVariants({ variant: 'secondary' })
                      : buttonVariants({ variant: 'ghost' })
                  }
                >
                  <Icon className="size-5 flex-shrink-0" iconName={nav.icon} />
                  {nav.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    {nav.children.map((child) => (
                      <ListItem
                        key={child.name}
                        title={child.name}
                        href={child.href}
                      >
                        {child.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={nav.name} asChild>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link
                    className={cn(
                      pathname === nav.href
                        ? buttonVariants({ variant: 'secondary' })
                        : buttonVariants({ variant: 'ghost' }),
                      'flex flex-row'
                    )}
                    href={nav.href}
                  >
                    <Icon className="size-5 shrink-0" iconName={nav.icon} />
                    {nav.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

// --- ListItem Helper for Desktop Navigation ---
const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: ComponentPropsWithoutRef<'li'> & { href: string; title: string }) => {
  const pathname = usePathname();

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
            pathname === href
              ? 'bg-secondary text-secondary-foreground'
              : 'text-primary',
            className
          )}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
