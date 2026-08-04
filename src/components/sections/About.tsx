'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { CountUp } from '@/components/effects/CountUp';

export function About() {
  const stats = [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Projects Delivered' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
    { value: 15, suffix: '+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader label="ABOUT" watermark="ABOUT" />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal delay={100}>
            <div className="text-[17px] leading-relaxed text-muted">
              <p>
                I'm Zameer Panhwer, a website developer who builds digital experiences that drive real business growth. I combine clean, modern design with high-performance development to create websites that don't just look great — they convert visitors into customers. My approach is rooted in understanding your business goals first, then crafting solutions with the latest technologies to achieve measurable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={200 + index * 100}>
                <div className="border border-black/5 rounded-xl p-6 bg-white/50 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-ink">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
