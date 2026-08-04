'use client';

import { useState, useEffect } from 'react';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { PillButton } from '@/components/ui/PillButton';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Staggered nav entrance
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300 rounded-t-[24px]',
          isScrolled
            ? 'bg-base/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left: Status Badge */}
            <div
              className="transition-all duration-500"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
              }}
            >
              <StatusBadge />
            </div>

            {/* Center: Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wide"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 400ms cubic-bezier(0.16, 1, 0.3, 1) ${400 + index * 80}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Hire Me + Mobile Menu */}
            <div className="flex items-center gap-3">
              <div
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `all 400ms cubic-bezier(0.16, 1, 0.3, 1) ${400 + navLinks.length * 80}ms`,
                }}
              >
                <PillButton
                  variant="primary"
                  arrow="right"
                  size="sm"
                  href="#contact"
                >
                  Hire Me
                </PillButton>
              </div>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 text-ink hover:bg-ink/5 rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-base/95 backdrop-blur-xl transition-all duration-300 lg:hidden',
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-semibold text-ink hover:text-muted transition-colors"
              style={{
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <StatusBadge className="sm:hidden mt-4" />
        </div>
      </div>
    </>
  );
}
