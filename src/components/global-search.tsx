'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from 'lucide-react';
import { JSX, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * @description Props for the GlobalSearch component.
 * @property {string} [className] - Additional classes for the main Button component.
 */
interface GlobalSearchProps {
  className?: string;
}

/**
 * @description A global search component that provides a quick search functionality
 * accessible via a button or a keyboard shortcut (Ctrl+K or Cmd+K).
 * It uses a command menu to display search results in a dialog.
 *
 * @param {GlobalSearchProps} props - The props for the GlobalSearch component.
 * @returns {JSX.Element} The rendered global search component.
 */
export function GlobalSearch({ className }: GlobalSearchProps): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Button Command Dialog Trigger */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Buka Dialog/Window Pencarian Website"
        onClick={() => setOpen(!open)}
        className={cn('max-[350px]:w-6.5', className)}
      >
        <Search aria-hidden="true" />
        <span className="hidden">Pencarian...</span>
        <kbd className="hidden">
          <span>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <search title="website">
          <form action="">
            <CommandInput placeholder="Ketik perintah atau cari..." />
          </form>
        </search>
        <CommandList>
          <CommandEmpty>Hasil tidak ditemukan.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
