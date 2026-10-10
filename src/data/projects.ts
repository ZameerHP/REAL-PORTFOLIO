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
    slug: 'parachute-jacket',
    title: 'Parachute Jacket Showcase',
    description: 'A streetwear-focused product showcase for parachute jackets, designed to make the collection and colour options easy to explore.',
    longDescription: 'A fashion-focused showcase built around parachute jackets, with an emphasis on bold product presentation, clear colour choices, and a clean shopping-inspired browsing experience.',
    category: 'ecommerce',
    tags: ['Fashion', 'Product Showcase', 'Web Design'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://jacket-masters-showcase.zameerpanhwer67.chatgpt.site/',
    liveUrl: 'https://jacket-masters-showcase.zameerpanhwer67.chatgpt.site/',
    color: '#64748B',
    service: 'Product Showcase Design',
    timeline: 'Custom Build',
    tools: ['ChatGPT Sites', 'Visual Design', 'Responsive Layout'],
    challenge: 'Present a fashion product clearly while keeping the visual focus on the jacket collection and its available colour options.',
    solution: 'Created a focused product showcase with clear visual hierarchy and straightforward browsing controls.',
    outcome: 'A dedicated online showcase that visitors can open to explore the parachute jacket concept and collection.',
  },
  {
    slug: 'zenox-hear-beyond',
    title: 'ZENOX — Hear Beyond',
    description: 'A bold, modern brand website concept with a distinctive identity and a focused product-led presentation.',
    longDescription: 'ZENOX — Hear Beyond is a brand-led website concept designed to give the identity a clear digital home, with strong typography, a modern visual direction, and a focused browsing experience.',
    category: 'web-design',
    tags: ['Brand Website', 'UI Design', 'Web Design'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://zenox-hear-beyond.zameerpanhwer67.chatgpt.site/',
    liveUrl: 'https://zenox-hear-beyond.zameerpanhwer67.chatgpt.site/',
    color: '#0F172A',
    service: 'Brand Website Design',
    timeline: 'Custom Build',
    tools: ['ChatGPT Sites', 'Visual Design', 'Responsive Layout'],
    challenge: 'Give the ZENOX identity a memorable online presence without distracting from the brand message.',
    solution: 'Used a strong brand-first presentation and a streamlined page structure to keep the experience clear and cohesive.',
    outcome: 'A published brand website that visitors can open to explore the ZENOX concept directly.',
  },
  {
    slug: 'sardaar-g-construction',
    title: 'Sardaar G Construction',
    description: 'A professional construction-company website concept built to present services and establish a credible digital presence.',
    longDescription: 'A construction business website concept focused on presenting the company professionally, making its core offering easy to understand, and giving prospective customers a clear starting point.',
    category: 'web-design',
    tags: ['Construction', 'Business Website', 'Web Design'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://sardaar-g-construction.zameerpanhwer67.chatgpt.site/',
    liveUrl: 'https://sardaar-g-construction.zameerpanhwer67.chatgpt.site/',
    color: '#B45309',
    service: 'Business Website Design',
    timeline: 'Custom Build',
    tools: ['ChatGPT Sites', 'Visual Design', 'Responsive Layout'],
    challenge: 'Present a construction business in a clear, professional format that is easy for potential customers to navigate.',
    solution: 'Organised the experience around a business-first layout with clear content hierarchy and a professional visual direction.',
    outcome: 'A published business website concept visitors can explore directly.',
  },
  {
    slug: 'super-snap-studio',
    title: 'Super Snap Studio',
    description: 'A photography and videography studio website showcasing creative services with a polished, image-led presentation.',
    longDescription: 'Super Snap Studio is a creative studio website concept for photography, videography, and related visual services. The presentation puts the studio identity and creative work at the centre of the experience.',
    category: 'web-design',
    tags: ['Photography', 'Creative Portfolio', 'Business Website'],
    image: 'https://image.thum.io/get/width/1200/crop/800/noanimate/https://super-snap-studio.zameerpanhwer67.chatgpt.site/',
    liveUrl: 'https://super-snap-studio.zameerpanhwer67.chatgpt.site/',
    color: '#7C3AED',
    service: 'Creative Studio Website',
    timeline: 'Custom Build',
    tools: ['ChatGPT Sites', 'Visual Design', 'Responsive Layout'],
    challenge: 'Create a polished online presence for a visual studio where the services and creative identity are easy to understand.',
    solution: 'Used a visual-first layout and clear service positioning to give visitors a straightforward way to explore the studio.',
    outcome: 'A published studio website concept that visitors can open to learn about the creative services.',
  },
];
