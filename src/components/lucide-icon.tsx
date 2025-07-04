import type { LucideProps } from 'lucide-react';
import { icons } from 'lucide-react';
import type { FC } from 'react';

export type IconName = keyof typeof icons;
export type LucideIconType = FC<LucideProps>;

interface LucideIconProps extends LucideProps {
  name?: IconName;
  icon?: LucideIconType;
}

/**
 * Usage:
 * <LucideIcon name="FileText" />
 * <LucideIcon icon={FileText} />
 */
export default function LucideIcon({
  name,
  icon: IconOverride,
  ...props
}: LucideIconProps) {
  const IconComponent = IconOverride ?? (name ? icons[name] : null);

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
