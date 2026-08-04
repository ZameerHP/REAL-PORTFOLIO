import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { TechStack } from '@/components/sections/TechStack';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { HeroScrollTransition } from '@/components/effects/HeroScrollTransition';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroScrollTransition 
        hero={<Hero />}
        content={
          <>
            <About />
            <Services />
            <Skills />
            <TechStack />
            <FeaturedProjects />
            <Process />
            <Testimonials />
            <Experience />
            <Contact />
            <Footer />
          </>
        }
      />
    </>
  );
}
