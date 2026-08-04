'use client';

import { StatusBadge } from '@/components/ui/StatusBadge';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-base">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center">
              <StatusBadge />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-8 text-ink">
              Let's Build Something Great
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted text-[17px] mt-6 max-w-lg mx-auto">
              Have a project in mind? I'm currently available for freelance work and always open to discussing new opportunities and creative ideas.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-8 flex justify-center">
              <PillButton 
                href="mailto:hello@zameerpanhwer.com" 
                variant="primary" 
                arrow="right"
              >
                Hire Me
              </PillButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink text-base flex items-center justify-center font-bold text-white">
                  Z
                </div>
                <span className="text-ink font-medium">Zameer Panhwer</span>
              </div>

              <div className="flex items-center gap-4">
                <a href="#" className="text-muted hover:text-ink transition-colors" aria-label="Github">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted hover:text-ink transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted hover:text-ink transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:hello@zameerpanhwer.com" className="text-muted hover:text-ink transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
