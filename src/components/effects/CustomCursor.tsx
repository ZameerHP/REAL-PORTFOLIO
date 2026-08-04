'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('a, button, .project-card, [data-hoverable="true"]');
      
      if (hoverable) {
        setIsHovering(true);
        const thumb = hoverable.getAttribute('data-thumbnail');
        if (thumb) {
          setThumbnail(thumb);
        } else {
          setThumbnail(null);
        }
      } else {
        setIsHovering(false);
        setThumbnail(null);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white mix-blend-difference transition-colors duration-300"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: isHovering ? '#22C55E' : 'white',
          backgroundColor: isHovering ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Floating Thumbnail */}
        {thumbnail && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute left-full top-full ml-2 mt-2 h-24 w-32 overflow-hidden rounded-lg border border-white/20 shadow-xl"
            style={{ mixBlendMode: 'normal' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={thumbnail} 
              alt="Project thumbnail" 
              className="h-full w-full object-cover" 
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
