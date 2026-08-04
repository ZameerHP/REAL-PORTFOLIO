'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Magnetic } from '@/components/effects/Magnetic';
import { motion } from 'framer-motion';

interface PillButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  arrow?: 'right' | 'upright';
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'sm';
}

export function PillButton({
  children,
  variant = 'primary',
  arrow,
  href,
  onClick,
  className,
  size = 'default',
}: PillButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 ease-out group cursor-pointer relative',
    size === 'default' ? 'px-7 py-3.5 text-[15px]' : 'px-5 py-2.5 text-[13px]',
    variant === 'primary' && 'bg-ink text-base hover:bg-[#2a2a2a] hover:shadow-lg',
    variant === 'secondary' && 'bg-transparent text-ink border border-[#d0d0d0] hover:bg-ink hover:text-base hover:border-ink',
    className
  );

  const ArrowIcon = arrow === 'upright' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowIcon
            className={cn(
              'transition-transform duration-200',
              arrow === 'right' && 'group-hover:translate-x-0.5',
              arrow === 'upright' && 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
              size === 'default' ? 'w-4 h-4' : 'w-3.5 h-3.5'
            )}
          />
        )}
      </span>
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(20,20,20,0.3)] pointer-events-none"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Magnetic>
        <a href={href} className={baseStyles}>
          {content}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button onClick={onClick} className={baseStyles}>
        {content}
      </button>
    </Magnetic>
  );
}
