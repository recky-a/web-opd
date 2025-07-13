'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Division {
  title: string;
  description: string;
}

interface GreetingSectionProps {
  opdName: string;
  welcomeMessage?: string;
  description?: string;
  headTitle?: string;
  headName: string;
  headPhotoUrl: string;
  headBio: string;
  headQuote?: string;
  divisions: Division[];
  className?: string;
}

export default function GreetingSection({
  opdName,
  welcomeMessage = 'Selamat datang di website resmi kami.',
  description = 'Kami berkomitmen untuk pemerintahan transparan dan efisien melalui transformasi digital.',
  headTitle = 'Kepala Dinas',
  headName,
  headPhotoUrl,
  headBio,
  headQuote,
  divisions,
  className,
}: GreetingSectionProps) {
  return (
    <section
      className={cn(
        'bg-card text-card-foreground animate-in fade-in slide-in-from-bottom py-8 duration-700 ease-out sm:py-10',
        className
      )}
      aria-labelledby="greeting-heading"
    >
      {/* Header section with name + desc */}
      <header className="container mx-auto mb-10 flex max-w-screen-xl flex-col gap-3 px-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1
            id="greeting-heading"
            className="text-primary text-xl leading-tight font-bold tracking-tight sm:text-4xl"
          >
            <span className="text-muted-foreground mb-1 block text-xs md:text-sm lg:text-base">
              {welcomeMessage}
            </span>
            {opdName}
          </h1>
        </div>

        <p className="text-muted-foreground max-w-xl text-xs leading-snug md:text-right md:text-sm">
          {description}
        </p>
      </header>

      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        {/* Head section */}
        <article
          aria-labelledby="head-of-department"
          className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2"
        >
          {/* Head photo */}
          <figure className="ring-border relative overflow-hidden rounded-xl shadow-xl ring-1">
            <AspectRatio ratio={4 / 5}>
              <Image
                src={headPhotoUrl}
                alt={`Foto ${headName}`}
                fill
                className="object-cover grayscale-[15%] transition duration-300 ease-in-out hover:scale-105 hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </AspectRatio>
            <figcaption className="sr-only">{headName}</figcaption>
          </figure>

          {/* Head content */}
          <div className="space-y-5">
            <header className="space-y-1">
              <span className="bg-primary/10 text-primary inline-block rounded px-2 py-1 text-[10px] font-medium tracking-wide uppercase sm:text-xs">
                {headTitle}
              </span>
              <h2
                id="head-of-department"
                className="text-primary text-lg leading-tight font-semibold sm:text-xl"
              >
                {headName}
              </h2>
            </header>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {headBio}
            </p>

            {headQuote && (
              <blockquote className="border-primary/30 bg-muted/30 text-muted-foreground flex items-start gap-2 rounded-md border-l-4 p-3 text-sm italic">
                <Quote className="text-primary mt-1 h-4 w-4" aria-hidden />
                <p className="leading-relaxed">“{headQuote}”</p>
              </blockquote>
            )}
          </div>
        </article>

        {/* Division structure */}
        <article
          aria-labelledby="division-structure"
          className="flex flex-col justify-center space-y-6"
        >
          <header>
            <h2
              id="division-structure"
              className="text-primary mb-2 text-base font-bold"
            >
              Struktur Bidang
            </h2>
            <p className="text-muted-foreground text-sm leading-snug">
              Masing-masing bidang berikut memiliki peran strategis dalam
              transformasi digital dan pelayanan masyarakat.
            </p>
          </header>

          {divisions.length > 0 ? (
            <Accordion
              type="single"
              collapsible
              className="border-border divide-border w-full divide-y overflow-hidden rounded-xl border shadow-sm"
            >
              {divisions.map((div, index) => (
                <AccordionItem key={index} value={`item-${index}`} asChild>
                  <article
                    className={cn(
                      'group bg-background transition-all',
                      'data-[state=open]:border-primary data-[state=open]:border-l-4'
                    )}
                  >
                    <AccordionTrigger
                      className={cn(
                        'flex items-center justify-between px-4 py-3 text-left font-semibold transition-colors',
                        'hover:text-primary text-foreground'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="bg-primary/30 group-data-[state=open]:bg-primary h-2 w-2 rounded-full transition-colors"
                          aria-hidden
                        />
                        <span className="group-hover:text-primary transition-all">
                          {div.title}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-4 pt-1 pb-4 text-sm leading-relaxed">
                      {div.description}
                    </AccordionContent>
                  </article>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-muted-foreground text-sm italic">
              Struktur bidang belum tersedia untuk saat ini.
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
