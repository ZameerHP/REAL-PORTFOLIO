'use client';

import { useRef, useState, useEffect } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { useMousePosition } from '@/hooks/useMousePosition';
import { experience } from '@/data/experience';
import { cn } from '@/lib/utils';
import { CountUp } from '@/components/effects/CountUp';

const previewImages = [
  '/images/project-purple.jpg',
  '/images/project-gold.jpg',
  '/images/project-blue.jpg',
];

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);
  const { position, isHovering } = useMousePosition(containerRef);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex-1">
            <SectionHeader label="EXPERIENCE" watermark="EXPERIENCE" dark />
          </div>
          <div className="text-sm text-white/50 border border-white/10 rounded-full px-4 py-2 self-start md:self-auto">
            <CountUp to={3} suffix="+" /> Years of Experience
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative border-t border-white/10"
        >
          <div ref={ref}>
            {experience.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'group py-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-700 ease-out',
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{item.company}</h3>
                  <p className="text-white/60 text-sm">{item.role}</p>
                </div>
                <div className="text-sm text-white/40 shrink-0 font-medium">
                  {item.period}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Cursor-Follow Preview (Desktop Only) */}
          {!isTouchDevice && hoveredIndex !== null && (
            <div
              className="absolute pointer-events-none z-50 transition-opacity duration-300 ease-in-out"
              style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -110%)',
                opacity: 1,
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="relative w-[120px] h-[80px] rounded-lg overflow-hidden shadow-xl transform -rotate-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewImages[hoveredIndex % previewImages.length]}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute w-[120px] h-[80px] rounded-lg overflow-hidden shadow-xl transform rotate-6 translate-x-4 translate-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewImages[(hoveredIndex + 1) % previewImages.length]}
                    alt="Project preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
