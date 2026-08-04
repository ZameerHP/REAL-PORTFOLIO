'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroScrollTransitionProps {
  hero: React.ReactNode;
  content: React.ReactNode;
}

export function HeroScrollTransition({ hero, content }: HeroScrollTransitionProps) {
  const [heroActive, setHeroActive] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check initial scroll position to prevent flash on refresh
    if (window.scrollY > 0) {
      setHeroActive(false);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion) return;

    // We use a mutable state object for the event listeners 
    // to avoid constantly removing/adding listeners on state change.
    const state = { heroActive, isTransitioning };

    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (state.isTransitioning) {
        e.preventDefault();
        return;
      }

      if (state.heroActive) {
        // If on hero and scrolling down
        if (e.deltaY > 10) {
          e.preventDefault();
          setIsTransitioning(true);
          setHeroActive(false);
        }
      } else {
        // If not on hero, only intercept if we are at the very top and scrolling up
        if (window.scrollY <= 0 && e.deltaY < -10) {
          e.preventDefault();
          setIsTransitioning(true);
          setHeroActive(true);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (state.isTransitioning) {
        if (e.cancelable) e.preventDefault();
        return;
      }

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY; // positive = swipe up (scroll down)

      if (state.heroActive) {
        if (deltaY > 10) {
          if (e.cancelable) e.preventDefault();
          setIsTransitioning(true);
          setHeroActive(false);
        }
      } else {
        if (window.scrollY <= 0 && deltaY < -10) {
          if (e.cancelable) e.preventDefault();
          setIsTransitioning(true);
          setHeroActive(true);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (state.isTransitioning) {
        if (['ArrowDown', 'PageDown', ' ', 'ArrowUp', 'PageUp'].includes(e.key)) {
          e.preventDefault();
        }
        return;
      }

      if (state.heroActive) {
        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
          e.preventDefault();
          setIsTransitioning(true);
          setHeroActive(false);
        }
      } else {
        if (window.scrollY <= 0 && ['ArrowUp', 'PageUp'].includes(e.key)) {
          e.preventDefault();
          setIsTransitioning(true);
          setHeroActive(true);
        }
      }
    };

    // passive: false allows us to use preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMounted, prefersReducedMotion, heroActive, isTransitioning]);

  if (prefersReducedMotion) {
    return (
      <main>
        {hero}
        {content}
      </main>
    );
  }

  // To prevent hydration mismatch with `heroActive` changing on mount
  if (!isMounted) {
    // Render initial state (assuming top of page)
    return (
      <main className="h-[100dvh] overflow-hidden">
        <div className="fixed inset-0 z-0 flex flex-col justify-center bg-transparent">
          {hero}
        </div>
      </main>
    );
  }

  return (
    <main className={heroActive || isTransitioning ? "h-[100dvh] overflow-hidden" : "relative"}>
      {/* Pinned Hero */}
      <div className="fixed inset-0 z-0 flex flex-col justify-center bg-transparent">
        {hero}
      </div>

      {/* Sliding Content */}
      <motion.div
        className="relative z-10 bg-base rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5 min-h-screen"
        initial={false}
        animate={{ y: heroActive ? '100vh' : '0vh' }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        onAnimationComplete={() => setIsTransitioning(false)}
      >
        {content}
      </motion.div>
    </main>
  );
}
