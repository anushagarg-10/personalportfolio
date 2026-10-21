import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import DesignLanguage from "@/components/DesignLanguage";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <Marquee />
      <Experience />
      <Projects />
      <DesignLanguage />
      <Skills />
      <Background />
      <Contact />
    </main>
  );
}
