'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { TiltCard } from '@/components/effects/TiltCard';

const FILTER_MAP: Record<string, string | null> = {
  'All': null,
  'Web Design': 'web-design',
  'Development': 'development',
  'E-commerce': 'ecommerce',
};

const FILTERS = Object.keys(FILTER_MAP);

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'All' ? true : project.category === FILTER_MAP[activeFilter]
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-base">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader label="SELECTED WORK" watermark="PORTFOLIO" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 mt-16 gap-6">
          <div className="flex flex-wrap items-center gap-6">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 pb-1 border-b-2 cursor-pointer',
                  activeFilter === filter
                    ? 'border-ink text-ink font-bold'
                    : 'border-transparent text-muted hover:text-ink'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="text-sm font-medium text-ink hover:text-muted transition-colors flex items-center gap-2 self-start sm:self-auto cursor-pointer">
            View All Work →
          </span>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <TiltCard key={project.slug}>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group flex flex-col gap-5 transition-all duration-700 ease-out',
                  isInView
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                )}
                style={{ transitionDelay: isInView ? `${index * 80}ms` : '0ms' }}
              >
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-[#e5e5e5] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-400">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[20px] font-bold text-ink mb-1 group-hover:text-muted transition-colors">
                      {project.title}
                    </h3>
                    <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:translate-x-0.5 transition-transform">
                      Visit Live <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                <p className="text-[14px] text-muted line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full bg-[#f0f0f0] text-ink text-[12px] px-3 py-1 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  </div>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
