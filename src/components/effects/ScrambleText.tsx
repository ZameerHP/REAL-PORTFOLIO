'use client';

import { useEffect, useState, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrambleTextProps {
  text: string;
  trigger?: boolean;
  duration?: number;
  className?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

export function ScrambleText({
  text,
  trigger = true,
  duration = 600,
  className = '',
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const scramble = useCallback(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsComplete(true);
      return;
    }

    const totalFrames = Math.floor(duration / 16);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const result = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          const charProgress = index / text.length;
          if (progress > charProgress + 0.3) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(result);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
        setIsComplete(true);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [text, duration, prefersReducedMotion]);

  useEffect(() => {
    if (trigger && !isComplete) {
      const cleanup = scramble();
      return cleanup;
    }
  }, [trigger, scramble, isComplete]);

  return <span className={className}>{displayText}</span>;
}
