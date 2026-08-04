'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [isPresent, setIsPresent] = useState(true);

  // We can just use a simple entry animation for the wipe.
  // Next.js App Router template creates a new instance on every navigation.

  if (shouldReduceMotion) {
    return (
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      {/* Wipe Panel */}
      <motion.div
        key={`wipe-${pathname}`}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl font-bold tracking-widest text-white"
        >
          ZP
        </motion.div>
      </motion.div>

      {/* Page Content */}
      <motion.div
        key={`page-${pathname}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
