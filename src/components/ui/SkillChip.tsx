'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillChipProps {
  label: string;
  delay?: number;
  isVisible?: boolean;
}

export function SkillChip({ label, delay = 0, isVisible = true }: SkillChipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn(
        'inline-flex items-center px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all duration-200 cursor-default select-none',
        isHovered
          ? 'bg-ink text-base border-ink'
          : 'bg-transparent text-ink border-[#d0d0d0]',
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-95'
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionProperty: 'all',
        transitionDuration: '400ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </span>
  );
}
