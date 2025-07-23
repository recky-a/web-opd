import { News } from '@/types/news';
import { TabItem } from '@/types/tabs';
import { HorizontalTabsList } from './horizontal-tabs-list';
import { Tabs, TabsContent } from './ui/tabs';

import { FileText } from 'lucide-react';
import { NewsList } from './news/news-list';

interface NewsTabsData extends TabItem {
  data: News[];
}
interface NewsTabsProps {
  tabsData: NewsTabsData[];
}

export default function NewsTabs({ tabsData }: NewsTabsProps) {
  const defaultTab = tabsData[0];

  return (
    <Tabs defaultValue={defaultTab.id}>
      <HorizontalTabsList
        listClassName="*:capitalize bg-secondary *:text-xs"
        tabs={tabsData}
      />
      {tabsData.map((tab) => {
        if (tab.data.length == 0 || !tab.data)
          return (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="flex h-60 flex-col items-center justify-center space-y-4 text-center">
                <div className="from-muted/60 to-muted/40 rounded-2xl bg-gradient-to-br p-4">
                  <FileText className="text-muted-foreground mx-auto h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground/90 text-lg font-semibold">
                    Belum ada berita
                  </h3>
                  <p className="text-muted-foreground/80 max-w-sm text-sm">
                    Tidak ada berita untuk kategori <strong>{tab.label}</strong>{' '}
                    saat ini. Silakan coba kategori lain.
                  </p>
                </div>
              </div>
            </TabsContent>
          );

        return (
          <TabsContent key={tab.id} value={tab.id}>
            <NewsList news={tab.data} variant="list" />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
