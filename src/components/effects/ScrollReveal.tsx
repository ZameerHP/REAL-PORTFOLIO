'use client';

import { useRef, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
  threshold?: number;
  type?: 'fade' | 'mask';
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 500,
  className = '',
  threshold = 0.1,
  type = 'fade',
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  const getTransform = () => {
    if (isInView) return 'translate(0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate(0, 20px) scale(0.97)';
      case 'down':
        return 'translate(0, -20px) scale(0.97)';
      case 'left':
        return 'translate(20px, 0) scale(0.97)';
      case 'right':
        return 'translate(-20px, 0) scale(0.97)';
      default:
        return 'translate(0, 20px) scale(0.97)';
    }
  };

  if (type === 'mask') {
    return (
      <div ref={ref} className={cn("overflow-hidden", className)}>
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)', y: 20 }}
          animate={isInView ? { clipPath: 'inset(0% 0 0 0)', y: 0 } : { clipPath: 'inset(100% 0 0 0)', y: 20 }}
          transition={{
            duration: prefersReducedMotion ? 0 : duration / 1000,
            delay: prefersReducedMotion ? 0 : delay / 1000,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  const transitionStr = prefersReducedMotion 
    ? 'opacity 0ms'
    : `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: prefersReducedMotion ? 'translate(0,0) scale(1)' : getTransform(),
        transition: transitionStr,
      }}
    >
      {children}
    </div>
  );
}
