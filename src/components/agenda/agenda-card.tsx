'use client';

import { Badge } from '@/components/ui/badge';
import type { Agenda } from '@/types/agenda';
import { format, isSameDay, isSameMonth, isSameYear, parseISO } from 'date-fns';
import { Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react';

interface AgendaCardProps extends Agenda {
  id: string;
  href?: string;
}

function useAgendaDate(startDateStr: string, endDateStr?: string) {
  const start = useMemo(() => parseISO(startDateStr), [startDateStr]);
  const end = useMemo(
    () => (endDateStr ? parseISO(endDateStr) : undefined),
    [endDateStr]
  );

  return useMemo(() => {
    const isSingleDay = !end || isSameDay(start, end);
    const formatTime = (date: Date) =>
      format(date, 'HH:mm') !== '00:00' ? format(date, 'p') : '';
    const startTime = formatTime(start);
    const endTime = end ? formatTime(end) : '';

    let timeRange = '';
    if (startTime && endTime && startTime !== endTime) {
      timeRange = `${startTime} - ${endTime}`;
    } else if (startTime) {
      timeRange = startTime;
    }

    let fullDateDisplay = '';
    if (isSingleDay) {
      fullDateDisplay = format(start, 'eeee, MMMM d, yyyy');
    } else if (end) {
      if (!isSameYear(start, end)) {
        fullDateDisplay = `${format(start, 'MMM d, yyyy')} - ${format(end, 'MMM d, yyyy')}`;
      } else if (!isSameMonth(start, end)) {
        fullDateDisplay = `${format(start, 'MMM d')} - ${format(end, 'MMM d, yyyy')}`;
      } else {
        fullDateDisplay = `${format(start, 'MMMM d')} - ${format(end, 'd, yyyy')}`;
      }
    }

    return {
      isSingleDay,
      isSameYear: !end || isSameYear(start, end),
      start: {
        day: format(start, 'dd'),
        month: format(start, 'MMM'),
        year: format(start, 'yyyy'),
        iso: start.toISOString(),
      },
      ...(end && {
        end: {
          day: format(end, 'dd'),
          month: format(end, 'MMM'),
          year: format(end, 'yyyy'),
          iso: end.toISOString(),
        },
      }),
      display: {
        timeRange,
        fullDate: fullDateDisplay,
      },
    };
  }, [start, end]);
}

const YearDisplay = ({
  startYear,
  endYear,
  isSameYear,
}: {
  startYear: string;
  endYear?: string;
  isSameYear: boolean;
}) => (
  <div className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide sm:text-sm md:text-base">
    {isSameYear ? startYear : `${startYear} - ${endYear}`}
  </div>
);

const DateDisplay = ({ day, month }: { day: string; month: string }) => (
  <div className="flex flex-col text-center font-bold">
    <span className="text-primary text-3xl leading-none transition-transform duration-300 group-hover:scale-110 sm:text-4xl md:text-5xl">
      {day}
    </span>
    <span className="text-muted-foreground mt-1 text-xs tracking-wider uppercase sm:text-sm md:text-base">
      {month}
    </span>
  </div>
);

const DateSeparator = () => (
  <div
    className="bg-primary/70 h-6 w-1 shrink-0 rounded-lg md:my-2 md:h-1 md:w-8"
    aria-hidden="true"
  />
);

const AgendaCard = React.memo(
  ({
    href,
    title,
    startDate,
    endDate,
    description,
    location,
    category,
  }: AgendaCardProps) => {
    const { isSingleDay, isSameYear, start, end, display } = useAgendaDate(
      startDate,
      endDate
    );
    const cardId = `agenda-${title}`;

    const CardContent = () => (
      <article
        className="group border-border bg-card text-card-foreground relative flex h-full w-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl md:flex-row"
        aria-labelledby={cardId}
        aria-label={`Event: ${title}, Date: ${display.fullDate}`}
        itemScope
        itemType="https://schema.org/Event"
      >
        <div className="from-secondary/40 to-secondary/20 text-secondary-foreground border-border flex w-full shrink-0 flex-col items-center justify-center border-b bg-gradient-to-br p-4 transition-transform duration-300 ease-in-out group-hover:scale-105 md:w-32 md:border-r md:border-b-0">
          <YearDisplay
            startYear={start.year}
            endYear={end?.year}
            isSameYear={isSameYear}
          />
          <div
            className="flex flex-row items-center gap-4 md:flex-col"
            title={display.fullDate}
          >
            {isSingleDay || !end ? (
              <time dateTime={start.iso}>
                <DateDisplay day={start.day} month={start.month} />
              </time>
            ) : (
              <>
                <time dateTime={start.iso}>
                  <DateDisplay day={start.day} month={start.month} />
                </time>
                <DateSeparator />
                <time dateTime={end.iso}>
                  <DateDisplay day={end.day} month={end.month} />
                </time>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-grow flex-col p-4">
          {category && (
            <Badge
              variant="secondary"
              className="group-hover:bg-primary/10 mb-3 w-fit text-[0.65rem] transition-all duration-300 ease-in-out group-hover:scale-105 sm:text-xs"
              itemProp="keywords"
            >
              {category}
            </Badge>
          )}

          <h3
            id={cardId}
            className="text-card-foreground group-hover:text-primary mb-2 text-base leading-tight font-semibold transition-colors duration-300 sm:text-lg md:text-xl"
            itemProp="name"
          >
            {title}
          </h3>

          {description && (
            <p
              className="text-muted-foreground mb-4 line-clamp-2 text-xs transition-opacity duration-300 group-hover:opacity-90 sm:text-sm"
              itemProp="description"
            >
              {description}
            </p>
          )}

          <meta itemProp="startDate" content={start.iso} />
          {end && <meta itemProp="endDate" content={end.iso} />}

          <div className="mt-auto flex flex-col gap-3 pt-2 text-xs sm:text-sm">
            {display.timeRange && (
              <div className="text-muted-foreground flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{display.timeRange}</span>
              </div>
            )}
            {location && (
              <div
                className="text-muted-foreground flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5"
                itemProp="location"
                itemScope
                itemType="https://schema.org/Place"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                <span itemProp="name" className="not-italic">
                  {location}
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    );

    if (href) {
      return (
        <Link
          href={href}
          aria-label={`Lihat detail untuk ${title}`}
          className="group focus-visible:ring-ring block h-full rounded-xl transition-transform duration-300 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <CardContent />
        </Link>
      );
    }

    return <CardContent />;
  }
);

AgendaCard.displayName = 'AgendaCard';
export default AgendaCard;
