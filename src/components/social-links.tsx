import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BrandIcon } from './brand-icon';

type SocialLinksProps = {
  as?: 'div' | 'ul' | 'nav';
  className?: string;
  linkClassName?: string;
  iconSize?: number | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'minimal' | 'filled' | 'outlined';
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'tight' | 'normal' | 'loose';
  showLabels?: boolean;
  ariaLabel?: string;
};

const variantStyles = {
  default: {
    base: 'group relative inline-flex items-center justify-center transition-all duration-300 ease-out',
    hover: 'hover:scale-110 hover:-translate-y-1 hover:shadow-lg',
    focus:
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
    active: 'active:scale-95',
  },
  minimal: {
    base: 'group relative inline-flex items-center justify-center p-1 rounded-md transition-all duration-200',
    hover: 'hover:bg-muted/50 hover:scale-105',
    focus:
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    active: 'active:scale-95',
  },
  filled: {
    base: 'group relative inline-flex items-center justify-center p-2 rounded-full bg-muted/20 backdrop-blur-sm transition-all duration-300',
    hover:
      'hover:bg-muted/40 hover:scale-110 hover:shadow-md hover:-translate-y-0.5',
    focus:
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    active: 'active:scale-95',
  },
  outlined: {
    base: 'group relative inline-flex items-center justify-center p-2 rounded-full border border-border/40 backdrop-blur-sm transition-all duration-300',
    hover:
      'hover:border-border hover:bg-muted/20 hover:scale-105 hover:shadow-sm',
    focus:
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    active: 'active:scale-95',
  },
};

const spacingMap = {
  tight: 'gap-1 sm:gap-2',
  normal: 'gap-2 sm:gap-3 md:gap-4',
  loose: 'gap-3 sm:gap-4 md:gap-6',
};

const orientationMap = {
  horizontal: 'flex-row flex-wrap',
  vertical: 'flex-col',
};

export function SocialLinks({
  as = 'div',
  className,
  linkClassName,
  iconSize = 'lg',
  variant = 'default',
  orientation = 'horizontal',
  spacing = 'normal',
  showLabels = false,
  ariaLabel = 'Tautan Media Sosial',
}: SocialLinksProps) {
  const Wrapper = as;
  const styles = variantStyles[variant];

  const baseClasses = cn(
    'flex items-center',
    orientationMap[orientation],
    spacingMap[spacing],
    className
  );

  const linkClasses = cn(
    styles.base,
    styles.hover,
    styles.focus,
    styles.active,
    showLabels && 'gap-2',
    linkClassName
  );

  const wrapperProps = {
    className: baseClasses,
    ...(as === 'nav' && {
      'aria-label': ariaLabel,
      role: 'navigation',
    }),
  };

  return (
    <Wrapper {...wrapperProps}>
      {siteConfig.socials.map((social) => {
        const LinkContent = (
          <>
            <BrandIcon
              name={social.name}
              size={iconSize}
              title={`Kunjungi ${social.name}`}
              className="transition-colors duration-200"
              aria-hidden={showLabels}
            />
            {showLabels && (
              <span className="text-sm font-medium capitalize">
                {social.name}
              </span>
            )}

            {/* Hover effect overlay for filled/outlined variants */}
            {(variant === 'filled' || variant === 'outlined') && (
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}

            {/* Ripple effect */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-150 group-active:opacity-20" />
          </>
        );

        return as === 'ul' ? (
          <li key={social.name} className="list-none">
            <Link
              href={social.url}
              className={linkClasses}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                showLabels ? undefined : `Kunjungi ${social.name} kami`
              }
              title={`Kunjungi ${social.name} kami`}
            >
              {LinkContent}
            </Link>
          </li>
        ) : (
          <Link
            key={social.name}
            href={social.url}
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={showLabels ? undefined : `Kunjungi ${social.name} kami`}
            title={`Kunjungi ${social.name} kami`}
          >
            {LinkContent}
          </Link>
        );
      })}
    </Wrapper>
  );
}
