export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Freelance',
    role: 'Independent Web Developer',
    period: '2022 — Present',
    description: 'Building premium websites and web applications for startups, agencies, and established businesses worldwide.',
  },
  {
    company: 'PixelForge Studio',
    role: 'Frontend Developer',
    period: '2021 — 2022',
    description: 'Developed responsive, animated web experiences for a boutique digital agency serving clients in e-commerce and SaaS.',
  },
  {
    company: 'BrightPath Digital',
    role: 'Junior Web Developer',
    period: '2020 — 2021',
    description: 'Built and maintained client websites, implemented CMS solutions, and contributed to internal design systems.',
  },
];
