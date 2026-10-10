export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'web-design' | 'development' | 'ecommerce';
  tags: string[];
  image: string;
  liveUrl: string;
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
    slug: 'zenox-hear-beyond',
    title: 'ZENOX — Hear Beyond',
    description: 'A cinematic, product-led audio brand experience with bold typography, immersive burgundy visuals, and a premium headphone storefront aesthetic.',
    longDescription: 'ZENOX — Hear Beyond is a headphone brand website concept built around a distinctive dark-and-crimson visual identity. The experience pairs oversized product imagery, editorial typography, feature storytelling, and a carefully paced layout to make the brand feel premium and memorable.',
    category: 'web-design',
    tags: ['Brand Experience', 'Product Design', 'Web Design'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://zenox-hear-beyond.zameerpanhwer67.chatgpt.site/',
    liveUrl: 'https://zenox-hear-beyond.zameerpanhwer67.chatgpt.site/',
    color: '#0F172A',
    service: 'Brand & Product Website',
    timeline: 'Custom Build',
    tools: ['Visual Direction', 'Responsive Design', 'Motion Design'],
    challenge: 'Give a headphone brand a distinctive online identity while keeping the product and brand message at the centre of the experience.',
    solution: 'Created a dark, cinematic visual system with crimson lighting, expressive type, product-focused sections, and clear content hierarchy.',
    outcome: 'A published brand experience that presents the ZENOX headphone concept through a cohesive, premium storefront-style website.',
  },
  {
    slug: 'sardaar-g-construction',
    title: 'Sardaar G Construction',
    description: 'A polished construction business website designed to build trust, communicate services clearly, and give prospective customers a strong first impression.',
    longDescription: 'A professional digital presence for a construction business, using confident visual hierarchy and a clear business-first structure to help visitors understand the company and explore its services.',
    category: 'web-design',
    tags: ['Construction', 'Business Website', 'Responsive UI'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://sardaar-g-construction.zameerpanhwer67.chatgpt.site/',
    liveUrl: 'https://sardaar-g-construction.zameerpanhwer67.chatgpt.site/',
    color: '#B45309',
    service: 'Business Website Design',
    timeline: 'Custom Build',
    tools: ['Visual Design', 'Responsive Layout', 'Conversion-Focused UX'],
    challenge: 'Present a construction company professionally and make its business offering straightforward for potential customers to understand.',
    solution: 'Structured the website around clear business messaging, service presentation, and a modern visual direction suited to the construction industry.',
    outcome: 'A live business website concept that gives the company a dedicated online presence and a clear starting point for customer enquiries.',
  },
  {
    slug: 'salon-eight',
    title: 'Salon Eight',
    description: 'A refined salon website concept with an elegant visual identity, service-led presentation, and a smooth experience for prospective clients.',
    longDescription: 'Salon Eight is a premium salon website experience designed to make the brand feel considered and inviting. Its visual direction centres on a clean, modern presentation and an easy-to-follow path for visitors exploring salon services.',
    category: 'web-design',
    tags: ['Beauty & Wellness', 'Brand Website', 'Web Design'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://salon-eight-mocha.vercel.app/',
    liveUrl: 'https://salon-eight-mocha.vercel.app/',
    color: '#9A756B',
    service: 'Salon Website Design',
    timeline: 'Custom Build',
    tools: ['Visual Design', 'Responsive Layout', 'Brand Experience'],
    challenge: 'Create an online presence that feels premium and reflects the salon’s brand while helping visitors quickly explore its offering.',
    solution: 'Used an elegant, contemporary design direction with clear content hierarchy and a polished browsing experience across screen sizes.',
    outcome: 'A live salon website that presents the brand and its services in a cohesive, professional format.',
  },
  {
    slug: 'super-snap-studio',
    title: 'Super Snap Studio',
    description: 'A full-stack creative studio platform with an owner admin dashboard, client portal, project and photo delivery workflows, invoices, and integrated payment flows.',
    longDescription: 'Super Snap Studio is a full-stack digital platform for a photography, videography, and live-streaming studio. Beyond the public-facing brand website, it brings studio operations into one connected experience: an owner-only dashboard for managing clients and projects, a client space for accessing project updates and delivered photos, invoice and deposit tracking, and Square payment workflows. The platform is designed to support client communication and creative delivery from one place.',
    category: 'development',
    tags: ['Full-Stack Platform', 'Admin Dashboard', 'Client Portal', 'Payments'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://snap-studio-zeta.vercel.app/',
    liveUrl: 'https://snap-studio-zeta.vercel.app/',
    color: '#7C3AED',
    service: 'Full-Stack Studio Platform',
    timeline: 'Custom Build',
    tools: ['Next.js', 'Supabase', 'Square', 'Resend', 'Client Portal'],
    challenge: 'Give a creative studio more than a brochure website: it needed a central way to manage clients and projects while providing clients with a private, useful online space.',
    solution: 'Built a public-facing studio website alongside an owner dashboard and client portal, with project/client management, photo delivery, invoice records, and Square-oriented payment workflows.',
    outcome: 'A connected studio platform concept that brings the brand website, studio administration, client access, creative delivery, and payment-related workflows into one experience.',
  },
];
