'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillChip } from '@/components/ui/SkillChip';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const SKILLS = [
  'Responsive Design',
  'UI/UX Implementation',
  'API Integration',
  'Performance Optimization',
  'SEO Fundamentals',
  'CMS Development',
  'E-commerce',
  'Web Animations',
  'Mobile-First Design',
  'Version Control',
];

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 md:py-32 bg-base">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader label="SKILLS" watermark="SKILLS" />

        <div ref={ref} className="mt-16 flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <div
              key={skill}
              className={cn(
                'transition-all duration-500 ease-out',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: isInView ? `${index * 60}ms` : '0ms' }}
            >
              <SkillChip label={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
