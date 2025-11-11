import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatDo from "@/components/WhatDo";

export default function Home() {
  return (
    <div>
        <Hero />
        <About/>
        <WhatDo/>
        <Projects />
        <Skills />
        <Experience/>
        <Contact />
    </div>
  );
}
