import dynamic from "next/dynamic";

import Hero from "@/features/hero-section/Hero";

const Skills = dynamic(() => import("@/features/skills-section/Skills"), {
  ssr: true,
});

const Experience = dynamic(() => import("@/features/experience-section/Experience"), {
  ssr: true,
});

const Projects = dynamic(() => import("@/features/project-section/Projects"), {
  ssr: true,
});

const Mail = dynamic(() => import("@/features/mail-section/Mail"), {
  ssr: true,
});

export default async function Index() {
  return (
    <main className="content">
      <div className="content__section">
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Mail/>
      </div>
    </main>
  )
}

  