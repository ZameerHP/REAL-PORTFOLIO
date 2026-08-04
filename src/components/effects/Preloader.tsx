'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Faster animation if reduced motion is preferred
    const duration = shouldReduceMotion ? 300 : 1800;
    const intervalTime = duration / 100;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, shouldReduceMotion ? 300 : 600);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* SVG Name Animation */}
            {!shouldReduceMotion && (
              <div className="mb-8 w-full max-w-[300px] md:max-w-[400px]">
                <svg
                  viewBox="0 0 400 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full text-white"
                >
                  <motion.text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="font-body text-3xl font-bold tracking-[0.2em]"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                    animate={{ strokeDashoffset: 1000 - (progress / 100) * 1000 }}
                    transition={{ duration: 0.1 }}
                  >
                    ZAMEER PANHWER
                  </motion.text>
                </svg>
              </div>
            )}

            {shouldReduceMotion && (
              <div className="mb-8 text-3xl font-bold tracking-[0.2em] text-white">
                ZAMEER PANHWER
              </div>
            )}

            {/* Counter */}
            <div className="mb-4 text-4xl font-light text-white md:text-5xl">
              {progress}%
            </div>

            {/* Progress Bar */}
            <div className="h-[2px] w-[200px] overflow-hidden rounded-full bg-white/20 md:w-[300px]">
              <motion.div
                className="relative h-full bg-white"
                style={{ width: `${progress}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
              >
                {/* Glow effect at leading edge */}
                <div className="absolute right-0 top-1/2 h-[10px] w-[20px] -translate-y-1/2 rounded-full bg-white blur-[8px]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
