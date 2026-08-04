'use client';

import { useState, useEffect } from 'react';
import { PillButton } from '@/components/ui/PillButton';
import { ScrambleText } from '@/components/effects/ScrambleText';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@zameerpanhwer.com', label: 'Email' },
];

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Preloader takes ~2400ms. Always wait for it on reload.
    const delay = 2400;

    // Orchestrated entrance sequence
    const timers = [
      setTimeout(() => setStep(1), delay + 200),   // Name lockup
      setTimeout(() => setStep(2), delay + 700),   // Role label
      setTimeout(() => setStep(3), delay + 1300),  // Headline
      setTimeout(() => setStep(4), delay + 1800),  // CTA buttons
      setTimeout(() => setStep(5), delay + 2200),  // Hero visual
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden px-6 md:px-8 pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="order-1">
            {/* Name Lockup */}
            <div
              className="mb-6"
              style={{
                opacity: step >= 1 ? 1 : 0,
                transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <h1 className="font-display text-[clamp(48px,8vw,100px)] font-extrabold leading-[0.9] tracking-[-0.03em]">
                <span className="stroke-text block">ZAMEER</span>
                <span className="block text-ink">PANHWER</span>
              </h1>
            </div>

            {/* Role Label with Scramble Effect */}
            <div
              className="mb-6"
              style={{
                opacity: step >= 2 ? 1 : 0,
                transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <p className="text-[15px] font-medium text-muted uppercase tracking-[0.2em]">
                <ScrambleText text="Website Developer" trigger={step >= 2} duration={600} />
              </p>
            </div>

            {/* Headline Paragraph */}
            <div
              style={{
                opacity: step >= 3 ? 1 : 0,
                transform: step >= 3 ? 'translateY(0)' : 'translateY(15px)',
                filter: step >= 3 ? 'blur(0)' : 'blur(4px)',
                transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <p className="text-[18px] md:text-[20px] leading-relaxed text-muted max-w-lg">
                I build modern, fast and premium websites that help businesses grow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 mt-8"
              style={{
                opacity: step >= 4 ? 1 : 0,
                transform: step >= 4 ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <PillButton variant="primary" arrow="right" href="#contact">
                Hire Me
              </PillButton>
              <PillButton variant="secondary" href="#projects">
                View Projects
              </PillButton>
            </div>

            {/* Social Icons */}
            <div
              className="flex items-center gap-4 mt-10"
              style={{
                opacity: step >= 4 ? 1 : 0,
                transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms',
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e0e0e0] text-muted hover:bg-ink hover:text-base hover:border-ink transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="order-2 flex justify-center lg:justify-end w-full mt-12 lg:mt-0 lg:-mt-20">
            <div
              className="relative w-full max-w-[460px] lg:max-w-[520px]"
              style={{
                opacity: step >= 5 ? 1 : 0,
                transform: step >= 5 ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Radial spotlight glow */}
              <div className="absolute -inset-12 bg-gradient-radial from-black/5 via-transparent to-transparent rounded-full blur-3xl" />
              
              {/* Portrait */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-transparent">
                <Image
                  src="/images/zameer-portrait.jpg"
                  alt="Zameer Panhwer"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
