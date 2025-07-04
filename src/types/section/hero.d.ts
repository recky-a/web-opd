export interface SlideData {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface HeroButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  ariaLabel?: string;
}

export interface HeroSectionProps {
  slides?: SlideData[];
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: HeroButton[];
  showScrollIndicator?: boolean;
  overlayIntensity?: 'light' | 'medium' | 'dark';
  textAlignment?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
}

export interface CarouselProps {
  slides?: SlideData[];
  autoplayDelay?: number;
  overlayIntensity?: 'light' | 'medium' | 'dark';
}
