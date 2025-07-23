import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { TabItem } from '@/types/tabs';
import * as React from 'react';

export interface HorizontalTabsListProps
  extends React.ComponentProps<typeof ScrollArea> {
  tabs: TabItem[];
  listClassName?: string;
}

export function HorizontalTabsList({
  tabs,
  className,
  listClassName,
  ...props
}: HorizontalTabsListProps) {
  return (
    <ScrollArea className={cn('w-full lg:w-auto', className)} {...props}>
      <TabsList
        className={cn(
          'mb-0.5 flex w-max min-w-full gap-1 px-2 lg:min-w-auto',
          listClassName
        )}
      >
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
