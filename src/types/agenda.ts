/**
 * Represents an agenda or event item.
 */
export interface Agenda {
  id: string;
  title: string;
  /** Start date and time in ISO 8601 format (e.g., "2025-07-16T13:00:00") */
  startDate: string;
  /** Optional end date and time in ISO 8601 format. */
  endDate?: string;
  location?: string;
  description?: string;
  category?: string;
  /** Optional URL for linking to a details page. */
  href?: string;
  /**
   * Controls time visibility.
   * - `true`: Always show the time.
   * - `false`: Never show the time.
   * - `'auto'`: (Default) Show time only if it's not midnight (00:00).
   */
  showTime?: boolean | 'auto';
}
