import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Writing } from "@/components/sections/Writing";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <Projects />
      <About />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}
