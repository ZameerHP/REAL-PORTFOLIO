'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@zameerpanhwer.com', label: 'Email' },
];

const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Back to Top', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] py-8 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-[13px] text-muted-light">
          © {new Date().getFullYear()} Zameer Panhwer. All rights reserved.
        </p>

        {/* Right: Links + Social */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-muted-light hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-0 sm:ml-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-light hover:text-ink transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
