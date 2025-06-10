'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { navigation } from '@/lib/constants';
import { cn } from '@/lib/utils';

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React, { useState } from 'react';
import { navIconComponents } from '.';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Navigasi Utama Mobile/Smartphone" className="lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Buka navigasi">
            {isOpen ? (
              <XIcon className="animate-in spin-in size-5 duration-300" />
            ) : (
              <MenuIcon className="animate-in spin-in size-5 duration-300" />
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-screen max-w-sm rounded-lg p-0"
          sideOffset={14}
          align="end"
        >
          <ScrollArea className="h-[75dvh]">
            <div className="p-4">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {navigation.main.map((item) => (
                  <React.Fragment key={item.name}>
                    {item.children ? (
                      <AccordionItem value={item.name} className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            'hover:bg-accent flex w-full items-center rounded-md px-3 py-2 text-base font-medium hover:no-underline',
                            { 'bg-accent': pathname.startsWith(item.href) }
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {navIconComponents[item.icon]}
                            <span>{item.name}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col space-y-1 pt-2 pl-8">
                            {item.children.map((child) => (
                              <li key={child.name}>
                                <Link
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    'text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm',
                                    {
                                      'bg-accent text-accent-foreground':
                                        pathname === child.href,
                                    }
                                  )}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'hover:bg-accent flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium',
                          { 'bg-accent': pathname === item.href }
                        )}
                      >
                        {navIconComponents[item.icon]}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Accordion>
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
