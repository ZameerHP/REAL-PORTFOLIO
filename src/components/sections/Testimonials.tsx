'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { useInView } from '@/hooks/useInView';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-base">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader label="TESTIMONIALS" watermark="TESTIMONIALS" />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
              className={cn(
                'transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 rounded-2xl',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                isVisible={isInView}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
