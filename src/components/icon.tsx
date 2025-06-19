import {
  AlbumIcon,
  BellRingIcon,
  BriefcaseIcon,
  BuildingIcon,
  HomeIcon,
  InfoIcon,
  LucideIcon,
  MailIcon,
  MegaphoneIcon,
} from 'lucide-react';

const icons = {
  home: HomeIcon,
  building: BuildingIcon,
  news: BellRingIcon,
  megaphone: MegaphoneIcon,
  gallery: AlbumIcon,
  contact: MailIcon,
  service: BriefcaseIcon,
  default: InfoIcon,
};

export type IconKeys = keyof typeof icons;

interface IconProps extends React.ComponentProps<LucideIcon> {
  iconName: IconKeys;
}

export default function Icon({ iconName, ...props }: IconProps) {
  const IconComponent = icons[iconName] || icons.default;

  return <IconComponent {...props} />;
}
