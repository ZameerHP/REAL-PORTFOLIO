export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Zameer delivered a website that exceeded every expectation. The attention to detail, performance, and design quality were outstanding. Our conversions jumped 40% within weeks of launch.',
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'Velora Fashion',
  },
  {
    quote: 'Working with Zameer was seamless from start to finish. He understood our vision immediately and translated it into a web experience that truly sets us apart from competitors in our space.',
    name: 'David Chen',
    role: 'CEO',
    company: 'Aureum Capital',
  },
  {
    quote: 'The dashboard Zameer built handles millions of data points without breaking a sweat. His technical expertise and commitment to quality made him an invaluable partner for our product launch.',
    name: 'Priya Sharma',
    role: 'Product Lead',
    company: 'Nextera Analytics',
  },
];
