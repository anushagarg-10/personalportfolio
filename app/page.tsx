import VideoHero from "@/components/VideoHero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <VideoHero />
      <About />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Background />
      <Contact />
    </main>
  );
}
