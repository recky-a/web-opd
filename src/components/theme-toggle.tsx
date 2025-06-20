'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { JSX } from 'react';

/**
 * @description Props for the ThemeToggle component.
 * @property {string} [buttonClassName] - Additional classes for the Button component.
 * @property {string} [sunIconClassName] - Additional classes for the Sun icon.
 * @property {string} [moonIconClassName] - Additional classes for the Moon icon.
 */
interface ThemeToggleProps {
  buttonClassName?: string;
  sunIconClassName?: string;
  moonIconClassName?: string;
}

/**
 * @description A theme toggle component that allows users to switch between light, dark, and system themes.
 * It uses Shadcn UI components and is customizable via props for styling.
 *
 * @param {ThemeToggleProps} props - The props for the ThemeToggle component.
 * @returns {JSX.Element} The rendered theme toggle component.
 */
export function ThemeToggle({
  buttonClassName,
  sunIconClassName,
  moonIconClassName,
}: ThemeToggleProps): JSX.Element {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'max-[350px]:w-6.5',
          buttonClassName // Apply the passed buttonClassName here
        )}
      >
        <Sun
          className={cn(
            'size-5 scale-100 rotate-0 transition-all max-[350px]:size-4 dark:scale-0 dark:-rotate-90',
            sunIconClassName
          )}
        />
        <Moon
          className={cn(
            'absolute size-5 scale-0 rotate-90 transition-all max-[350px]:size-4 dark:scale-100 dark:rotate-0',
            moonIconClassName
          )}
        />
        <span className="sr-only">Ganti tema (gelap atau terang)</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Terang
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Gelap
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          Sistem
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
