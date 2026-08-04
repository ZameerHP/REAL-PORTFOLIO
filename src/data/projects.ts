export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'web-design' | 'development' | 'ecommerce';
  tags: string[];
  image: string;
  color: string;
  service: string;
  timeline: string;
  tools: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: 'velora-ecommerce',
    title: 'Velora Fashion Store',
    description: 'A high-converting e-commerce platform built for a premium fashion brand with seamless checkout and dynamic product filtering.',
    longDescription: 'Velora needed a digital storefront that matched the sophistication of their physical boutiques. I designed and developed a fully custom e-commerce experience with advanced product filtering, wishlist functionality, and a streamlined three-step checkout process that reduced cart abandonment by 35%.',
    category: 'ecommerce',
    tags: ['E-commerce', 'Next.js', 'Stripe'],
    image: '/images/project-purple.jpg',
    color: '#7C3AED',
    service: 'E-commerce Development',
    timeline: '6 Weeks',
    tools: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    challenge: 'The client needed a platform that could handle high traffic during seasonal sales while maintaining sub-second load times and a premium feel that reflected their brand identity.',
    solution: 'I built a headless e-commerce architecture using Next.js with server-side rendering for product pages, integrated Stripe for seamless payments, and implemented aggressive image optimization with lazy loading for the product catalog.',
    outcome: 'The new platform saw a 45% increase in online revenue within the first quarter, with page load times averaging 1.2 seconds and a 35% reduction in cart abandonment rates.',
  },
  {
    slug: 'aureum-finance',
    title: 'Aureum Capital',
    description: 'A sophisticated landing page for a fintech startup, featuring real-time data visualizations and conversion-optimized lead capture.',
    longDescription: 'Aureum Capital required a web presence that communicated trust, innovation, and financial expertise. I crafted a conversion-focused landing page with animated data visualizations, social proof sections, and a multi-step lead qualification form.',
    category: 'web-design',
    tags: ['Landing Page', 'Fintech'],
    image: '/images/project-gold.jpg',
    color: '#D97706',
    service: 'Web Design & Development',
    timeline: '3 Weeks',
    tools: ['React', 'Framer Motion', 'Figma', 'Vercel'],
    challenge: 'The fintech space is crowded. Aureum needed a landing page that would stand out from competitors while building immediate credibility with high-net-worth prospective clients.',
    solution: 'I designed a dark, premium aesthetic with gold accent tones and implemented smooth scroll-triggered animations. Real-time market data widgets and client testimonials were strategically placed above the fold to build trust.',
    outcome: 'The landing page achieved a 12% conversion rate on qualified leads, outperforming the industry average by 3x. The client secured their Series A funding partially attributed to the professional web presence.',
  },
  {
    slug: 'nextera-dashboard',
    title: 'Nextera Analytics',
    description: 'A real-time analytics dashboard application with interactive charts, custom reporting, and role-based access control.',
    longDescription: 'Nextera needed a comprehensive analytics platform that could process and visualize large datasets in real-time. I built a full-stack web application with interactive dashboards, custom report generation, and a granular permissions system.',
    category: 'development',
    tags: ['Web App', 'Dashboard'],
    image: '/images/project-blue.jpg',
    color: '#2563EB',
    service: 'Web App Development',
    timeline: '8 Weeks',
    tools: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    challenge: 'The platform needed to handle real-time data from multiple sources, render complex visualizations without lag, and support concurrent users with different permission levels.',
    solution: 'I implemented WebSocket connections for real-time data streaming, used canvas-based charting for performance, and built a custom RBAC system. Server-side data aggregation ensured the frontend stayed responsive even with large datasets.',
    outcome: 'The dashboard now processes over 2 million data points daily with zero downtime. User engagement increased by 60%, and the custom reporting feature became the top-requested feature among enterprise clients.',
  },
  {
    slug: 'greenvita-wellness',
    title: 'GreenVita Wellness',
    description: 'A modern wellness platform with appointment booking, content management, and an integrated membership system.',
    longDescription: 'GreenVita Wellness wanted to unify their online booking, content marketing, and membership management into a single cohesive platform. I delivered a clean, calming design with powerful backend functionality.',
    category: 'development',
    tags: ['Web Platform', 'Booking System'],
    image: '/images/project-teal.jpg',
    color: '#0D9488',
    service: 'Full-Stack Development',
    timeline: '5 Weeks',
    tools: ['Next.js', 'Tailwind CSS', 'Prisma', 'Vercel'],
    challenge: 'The client operated across three locations with different schedules, practitioners, and service offerings. They needed a unified booking system that was simple for clients but powerful for administrators.',
    solution: 'I built a multi-tenant booking engine with real-time availability checking, automated confirmation emails, and a CMS for their wellness blog. The membership portal features tiered access with Stripe-powered recurring billing.',
    outcome: 'Online bookings increased by 70% in the first month. The integrated content platform drove a 40% increase in organic traffic, and the membership system generated a new recurring revenue stream for the business.',
  },
];
