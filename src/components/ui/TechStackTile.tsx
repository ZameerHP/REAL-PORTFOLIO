'use client';

import { cn } from '@/lib/utils';

interface TechStackTileProps {
  name: string;
  icon: React.ReactNode;
  delay?: number;
  isVisible?: boolean;
}

export function TechStackTile({ name, icon, delay = 0, isVisible = true }: TechStackTileProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 p-6 aspect-square rounded-xl border border-border-dark bg-[#1a1a1a] transition-all duration-250 cursor-default hover:-translate-y-1 hover:bg-[#222] hover:border-[#444] hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)]',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      <div className="text-white/70 transition-colors duration-200 group-hover:text-white">
        {icon}
      </div>
      <span className="text-[13px] font-medium text-white/50">
        {name}
      </span>
    </div>
  );
}
