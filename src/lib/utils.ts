import { clsx, type ClassValue } from 'clsx';
import { isFuture, isToday, parseISO } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines the relative position of a given date compared to today.
 *
 * Accepts a `Date` object or an ISO-formatted string and returns whether
 * the date is in the past, present (today), or future.
 *
 * @param {Date | string} date - The date to evaluate. Can be a `Date` instance or an ISO 8601 string.
 * @returns {'past' | 'now' | 'future'} - The relative position of the date.
 *
 * @throws {Error} If the provided date is invalid or cannot be parsed.
 *
 * @example
 * checkDatePos(new Date()); // 'now'
 * checkDatePos('2030-01-01'); // 'future'
 * checkDatePos('2000-01-01'); // 'past'
 */
export function checkDatePos(date: Date | string): 'past' | 'now' | 'future' {
  const parsedDate = date instanceof Date ? date : parseISO(date);

  if (isNaN(parsedDate.getTime())) {
    throw new Error('Data tanggal invalid.');
  }

  if (isToday(parsedDate)) {
    return 'now';
  }
  if (isFuture(parsedDate)) {
    return 'future';
  }

  return 'past';
}
