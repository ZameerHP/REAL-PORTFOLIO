'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  watermark: string;
  dark?: boolean;
}

export function SectionHeader({ label, watermark, dark = false }: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={containerRef} className="relative mb-12 md:mb-16 text-center md:text-left">
      <motion.div 
        className={`watermark ${dark ? 'watermark-dark' : 'watermark-light'}`}
        style={{ y: prefersReducedMotion ? 0 : y, x: '-50%' }}
      >
        {watermark}
      </motion.div>
      <span className={`section-label ${dark ? 'text-white/60' : 'text-muted'}`}>
        /{label}
      </span>
    </div>
  );
}
