import { simpleIconsMap, type SocialKey } from '@/lib/config';
import { cn } from '@/lib/utils';

type BrandIconProps = {
  name: SocialKey;
  size?: number | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  title?: string;
  variant?: 'default' | 'monochrome';
  'aria-hidden'?: boolean;
};

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  '2xl': 32,
} as const;

export function BrandIcon({
  name,
  size = 'lg',
  className = '',
  title,
  variant = 'default',
  'aria-hidden': ariaHidden,
}: BrandIconProps) {
  const icon = simpleIconsMap[name];
  if (!icon) return null;

  const iconSize = typeof size === 'number' ? size : sizeMap[size];
  const iconColor = variant === 'monochrome' ? 'currentColor' : `#${icon.hex}`;

  return (
    <svg
      role={ariaHidden ? 'presentation' : 'img'}
      viewBox="0 0 24 24"
      width={iconSize}
      height={iconSize}
      fill={iconColor}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block shrink-0', className)}
      aria-hidden={ariaHidden}
    >
      {title && !ariaHidden && <title>{title}</title>}
      <path d={icon.path} />
    </svg>
  );
}
