import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigation } from '@/lib/constants';
import DropdownNavItem from './dropdown-nav';
import SingleNavItem from './single-nav';

export default function DesktopNavbar() {
  const navigationItems = navigation.main;

  return (
    <NavigationMenu
      aria-label="Main Desktop Navigation"
      className="hidden lg:block"
    >
      <NavigationMenuList>
        {navigationItems.map((navItem) => {
          const hasChildren = !!navItem.children && navItem.children.length > 0;

          return hasChildren ? (
            <DropdownNavItem key={navItem.name} navItem={navItem} />
          ) : (
            <SingleNavItem key={navItem.name} navItem={navItem} />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
