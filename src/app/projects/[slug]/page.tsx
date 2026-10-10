'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { PillButton } from '@/components/ui/PillButton';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
            <Link href="/" className="text-muted hover:text-ink transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Top Bar */}
          <ScrollReveal delay={0}>
            <div className="flex items-center justify-between py-8 border-b border-[#e5e5e5]">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back
              </Link>
              <StatusBadge />
            </div>
          </ScrollReveal>

          {/* Project Header */}
          <div className="py-16 md:py-24">
            {/* Breadcrumb Tags */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium px-3 py-1 rounded-full bg-[#f0f0f0] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Title + Description */}
            <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
              <div>
                <ScrollReveal delay={200}>
                  <h1 className="font-display text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.02em] mb-6">
                    {project.title}
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-[17px] leading-relaxed text-muted max-w-xl">
                    {project.longDescription}
                  </p>
                </ScrollReveal>

                {/* Buttons */}
                <ScrollReveal delay={400}>
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink text-base px-7 py-3.5 text-[15px] font-medium hover:bg-[#2a2a2a] hover:shadow-lg transition-all"
                    >
                      Visit Live Website <span aria-hidden="true">↗</span>
                    </a>
                    <PillButton variant="secondary" href="#contact">
                      Contact Me
                    </PillButton>
                  </div>
                </ScrollReveal>
              </div>

              {/* Meta Spec Sheet */}
              <ScrollReveal delay={300}>
                <div className="space-y-6 lg:pt-4">
                  <div className="border-b border-[#e5e5e5] pb-4">
                    <p className="text-[12px] font-medium text-muted-light uppercase tracking-wider mb-1">
                      Service
                    </p>
                    <p className="text-[15px] font-medium text-ink">{project.service}</p>
                  </div>
                  <div className="border-b border-[#e5e5e5] pb-4">
                    <p className="text-[12px] font-medium text-muted-light uppercase tracking-wider mb-1">
                      Timeline
                    </p>
                    <p className="text-[15px] font-medium text-ink">{project.timeline}</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-muted-light uppercase tracking-wider mb-2">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#e0e0e0] text-ink"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Full-Width Preview Image */}
          <ScrollReveal delay={200}>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-24">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Case Study Content Sections */}
          <div className="space-y-24 pb-24">
            {/* Challenge */}
            <section className="relative">
              <SectionHeader label="CHALLENGE" watermark="CHALLENGE" />
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">The Challenge</h3>
                    <p className="text-[16px] leading-relaxed text-muted">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src={project.image}
                      alt="Challenge visualization"
                      fill
                      className="object-cover opacity-70"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Solution */}
            <section className="relative">
              <SectionHeader label="SOLUTION" watermark="SOLUTION" />
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="order-2 md:order-1 relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src={project.image}
                      alt="Solution visualization"
                      fill
                      className="object-cover opacity-70"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="font-display text-2xl font-bold mb-4">The Solution</h3>
                    <p className="text-[16px] leading-relaxed text-muted">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Outcome */}
            <section className="relative">
              <SectionHeader label="OUTCOME" watermark="RESULTS" />
              <ScrollReveal>
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl font-bold mb-4">The Outcome</h3>
                  <p className="text-[16px] leading-relaxed text-muted">
                    {project.outcome}
                  </p>
                </div>
              </ScrollReveal>
            </section>
          </div>

          {/* More Work Grid */}
          {otherProjects.length > 0 && (
            <section className="relative pb-24">
              <SectionHeader label="MORE WORK" watermark="EXPLORE" />
              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((p, index) => (
                  <ScrollReveal key={p.slug} delay={index * 100}>
                    <Link href={`/projects/${p.slug}`} className="group block">
                      <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-4 border border-[#e5e5e5]">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <h3 className="font-display text-xl font-bold mb-1 group-hover:text-muted transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[14px] text-muted line-clamp-1">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f0f0f0] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
