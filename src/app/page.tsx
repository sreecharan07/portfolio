import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectsPreview from "@/components/ProjectsPreview";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsPreview />
      <Education />
    </main>
  );
}