'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useSpring, useMotionValue } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUp({
  to,
  from = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [displayValue, setDisplayValue] = useState(`${prefix}${from.toFixed(decimals)}${suffix}`);
  
  const motionValue = useMotionValue(from);
  
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(`${prefix}${latest.toFixed(decimals)}${suffix}`);
    });
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref}>{displayValue}</span>;
}
