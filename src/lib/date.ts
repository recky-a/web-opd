import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

export function timeAgo(dateString: string): string {
  return formatDistanceToNow(new Date(dateString), {
    addSuffix: true,
    locale: id,
  });
}
