'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience, and market through in-depth research and strategic planning sessions.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting wireframes and high-fidelity mockups that balance aesthetics with usability and conversion goals.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building with clean, performant code using modern frameworks. Every feature is tested across devices and browsers.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deploying to production with monitoring, analytics, and ongoing optimization to ensure continued growth.',
  },
];

export function Process() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" className="py-24 md:py-32 bg-base">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader label="PROCESS" watermark="PROCESS" />

        <div ref={ref} className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[1px] bg-ink/10 -translate-y-1/2 z-0" />
          
          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 left-[50%] w-[1px] h-full bg-ink/10 -translate-x-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  'bg-base border border-[#e5e5e5] rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-700 ease-out',
                  isInView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                )}
                style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
              >
                <div className="font-display text-[48px] text-ink/10 font-bold leading-none mb-6">
                  {step.number}
                </div>
                <h3 className="font-display text-[18px] font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
