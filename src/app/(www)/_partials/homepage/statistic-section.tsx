import LucideIcon from '@/components/lucide-icon';
import { cn } from '@/lib/utils';
import type { StatisticItem, StatisticSectionData } from '@/schemas/statistic';

export interface StatisticSectionProps
  extends Omit<StatisticSectionData, 'items'> {
  items: StatisticItem[];
  className?: string;
}

export default function StatisticSection({
  title = 'Statistik Pelayanan',
  subtitle = '',
  items,
  className,
  backgroundImageUrl = '/hero-1.jpg',
}: StatisticSectionProps) {
  return (
    <section
      className={cn('relative overflow-hidden py-10 sm:py-12', className)}
      aria-labelledby="statistic-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundAttachment: 'fixed',
          opacity: 0.55,
        }}
      />
      <div className="from-primary/55 via-primary/50 to-primary/55 absolute inset-0 z-10 bg-gradient-to-b" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto max-w-7xl px-4">
        {/* Header */}
        <header className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h2
            id="statistic-heading"
            className="text-primary-foreground text-xl font-bold tracking-tight sm:text-2xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted w-fit text-sm sm:text-right">{subtitle}</p>
          )}
        </header>

        {/* Statistic List */}
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => {
            const hasDescription = !!item.description;

            return (
              <div
                key={index}
                className={cn(
                  'group border-muted bg-muted/70 hover:border-secondary/40 hover:bg-muted/90 relative flex h-fit flex-col rounded-xl border p-4 shadow-sm transition-all hover:shadow-md'
                )}
              >
                <div
                  className={cn(
                    'flex items-center gap-4',
                    hasDescription && 'mb-2'
                  )}
                >
                  {item.iconName && (
                    <LucideIcon
                      name={item.iconName}
                      className="bg-primary text-secondary size-12 rounded-md p-3 transition-transform duration-200 group-hover:scale-105"
                    />
                  )}

                  <dt className="text-foreground flex items-baseline gap-1 text-xl leading-tight font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                    {item.value}
                    {item.unit && (
                      <span className="text-muted-foreground text-sm font-normal sm:text-base">
                        {item.unit}
                      </span>
                    )}
                  </dt>
                </div>

                <dd className="text-secondary-foreground mt-2 text-sm leading-snug font-medium">
                  {item.label}
                </dd>

                {hasDescription && (
                  <p className="text-primary mt-1 text-xs leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
