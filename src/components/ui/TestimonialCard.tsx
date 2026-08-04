'use client';

import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  delay?: number;
  isVisible?: boolean;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  delay = 0,
  isVisible = true,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between p-8 rounded-2xl border border-[#e5e5e5] bg-white transition-all duration-500',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      <div className="mb-8">
        <svg className="w-8 h-8 text-[#d0d0d0] mb-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.3 2.5C6.4 5 3.5 9 3.5 14c0 3 2 5.5 4.5 5.5 2.3 0 4-1.7 4-4s-1.7-4-4-4c-.5 0-1 .1-1.5.3C7.3 8 9.2 5.5 12.5 3.7L11.3 2.5zm10 0C16.4 5 13.5 9 13.5 14c0 3 2 5.5 4.5 5.5 2.3 0 4-1.7 4-4s-1.7-4-4-4c-.5 0-1 .1-1.5.3C17.3 8 19.2 5.5 22.5 3.7L21.3 2.5z" />
        </svg>
        <p className="text-[15px] leading-relaxed text-muted">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[14px] font-semibold text-ink">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-ink">{name}</p>
          <p className="text-[13px] text-muted-light">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
