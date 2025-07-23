// components/ui/semantic-card.tsx
import { cn } from '@/lib/utils';
import * as React from 'react';

// --- Root Component ---
// An <article> for self-contained, distributable content.
const SemanticCard = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    variant?:
      | 'default'
      | 'horizontal'
      | 'minimal'
      | 'featured'
      | 'compact'
      | 'overlay';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      'bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md',
      {
        'flex flex-col':
          variant === 'default' ||
          variant === 'minimal' ||
          variant === 'featured' ||
          variant === 'overlay',
        'flex flex-col sm:flex-row': variant === 'horizontal',
        'flex flex-col border-none shadow-none': variant === 'compact',
      },
      className
    )}
    {...props}
  />
));
SemanticCard.displayName = 'SemanticCard';

// --- Header ---
// A <header> for introductory content.
const SemanticCardHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    variant?:
      | 'default'
      | 'horizontal'
      | 'minimal'
      | 'featured'
      | 'compact'
      | 'overlay';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      {
        'p-6': variant === 'default' || variant === 'featured',
        'flex-1 p-4 sm:p-6': variant === 'horizontal',
        'p-4': variant === 'minimal' || variant === 'compact',
        'absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white':
          variant === 'overlay',
      },
      className
    )}
    {...props}
  />
));
SemanticCardHeader.displayName = 'SemanticCardHeader';

// --- Title ---
// A dynamic heading tag for semantic document structure. Defaults to <h2>.
type SemanticCardTitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?:
    | 'default'
    | 'horizontal'
    | 'minimal'
    | 'featured'
    | 'compact'
    | 'overlay';
} & React.HTMLAttributes<HTMLHeadingElement>;

const SemanticCardTitle = React.forwardRef<
  HTMLHeadingElement,
  SemanticCardTitleProps
>(({ className, as: Tag = 'h2', variant = 'default', ...props }, ref) => (
  <Tag
    ref={ref}
    className={cn(
      'leading-tight font-semibold tracking-tight',
      {
        'text-xl': variant === 'default' || variant === 'horizontal',
        'text-lg': variant === 'minimal' || variant === 'compact',
        'text-2xl': variant === 'featured',
        'text-xl text-white drop-shadow-lg': variant === 'overlay',
      },
      className
    )}
    {...props}
  />
));
SemanticCardTitle.displayName = 'SemanticCardTitle';

// --- Description / Excerpt ---
// A <p> tag for descriptions or paragraphs.
const SemanticCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    variant?:
      | 'default'
      | 'horizontal'
      | 'minimal'
      | 'featured'
      | 'compact'
      | 'overlay';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'mt-1 line-clamp-3 text-sm',
      {
        'text-muted-foreground': variant !== 'overlay',
        'text-white/90 drop-shadow': variant === 'overlay',
        'line-clamp-2': variant === 'compact' || variant === 'horizontal',
        'text-base': variant === 'featured',
      },
      className
    )}
    {...props}
  />
));
SemanticCardDescription.displayName = 'SemanticCardDescription';

// --- Content ---
// A generic <div> for the main body. The children should be semantic.
const SemanticCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?:
      | 'default'
      | 'horizontal'
      | 'minimal'
      | 'featured'
      | 'compact'
      | 'overlay';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'pt-0',
      {
        'p-6': variant === 'default' || variant === 'featured',
        'p-4 sm:p-6': variant === 'horizontal',
        'p-4': variant === 'minimal' || variant === 'compact',
        'p-6 pb-24': variant === 'overlay', // Extra padding for overlay text
      },
      className
    )}
    {...props}
  />
));
SemanticCardContent.displayName = 'SemanticCardContent';

// --- Footer ---
// A <footer> for metadata, actions, or closing content.
const SemanticCardFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    variant?:
      | 'default'
      | 'horizontal'
      | 'minimal'
      | 'featured'
      | 'compact'
      | 'overlay';
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <footer
    ref={ref}
    className={cn(
      'mt-auto flex items-center pt-0',
      {
        'p-6': variant === 'default' || variant === 'featured',
        'p-4 sm:p-6': variant === 'horizontal',
        'p-4': variant === 'minimal',
        'p-2': variant === 'compact',
        'bg-gradient-to-t from-black/60 to-transparent p-6':
          variant === 'overlay',
      },
      className
    )}
    {...props}
  />
));
SemanticCardFooter.displayName = 'SemanticCardFooter';

// --- Image Container ---
// A specialized container for images with different aspect ratios per variant
const SemanticCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?:
      | 'default'
      | 'horizontal'
      | 'minimal'
      | 'featured'
      | 'compact'
      | 'overlay';
    priority?: boolean;
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative overflow-hidden',
      {
        'aspect-video': variant === 'default' || variant === 'minimal',
        'aspect-video sm:aspect-[4/5] sm:w-48 sm:flex-shrink-0':
          variant === 'horizontal',
        'aspect-[21/9]': variant === 'featured',
        'aspect-[16/10] rounded-lg': variant === 'compact',
        'aspect-[4/3]': variant === 'overlay',
      },
      className
    )}
    {...props}
  />
));
SemanticCardImage.displayName = 'SemanticCardImage';

export {
  SemanticCard,
  SemanticCardContent,
  SemanticCardDescription,
  SemanticCardFooter,
  SemanticCardHeader,
  SemanticCardImage,
  SemanticCardTitle,
};
