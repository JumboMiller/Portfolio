import dynamic from "next/dynamic";

import Hero from "@/features/hero-section/Hero";

const Skills = dynamic(() => import("@/features/skills-section/Skills"), {
  loading: () => null,
});

const Experience = dynamic(() => import("@/features/experience-section/Experience"), {
  loading: () => null,
});

const Projects = dynamic(() => import("@/features/project-section/Projects"), {
  loading: () => null,
});

const Mail = dynamic(() => import("@/features/mail-section/Mail"), {
  loading: () => null,
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

  