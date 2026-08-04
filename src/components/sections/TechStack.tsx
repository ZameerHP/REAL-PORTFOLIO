'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechStackTile } from '@/components/ui/TechStackTile';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const TECHNOLOGIES = [
  { name: 'React', icon: 'Re' },
  { name: 'Next.js', icon: 'Nx' },
  { name: 'TypeScript', icon: 'Ts' },
  { name: 'Tailwind CSS', icon: 'Tw' },
  { name: 'Node.js', icon: 'No' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'Git', icon: 'Gt' },
  { name: 'Vercel', icon: 'Vc' },
];

export function TechStack() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-ink text-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <SectionHeader label="TECH STACK" watermark="TECH STACK" dark={true} />

        <div className="mt-12 mb-16 relative marquee-container flex w-full">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-8 md:gap-16 whitespace-nowrap items-center w-max animate-marquee">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                <span className="font-display font-bold text-2xl">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={tech.name}
              className={cn(
                'transition-all duration-700 ease-out',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: isInView ? `${index * 80}ms` : '0ms' }}
            >
              <div className="h-full rounded-2xl transition-all duration-400 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.08)] bg-ink">
                <TechStackTile
                  name={tech.name}
                  icon={
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-lg font-display font-bold text-xl transition-colors duration-300">
                      {tech.icon}
                    </div>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
