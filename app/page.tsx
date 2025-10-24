import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      
      <div className="px-8 bg-black">
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}