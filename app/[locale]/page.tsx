import Experience from "@/features/experience-section/Experience"
import Hero from "@/features/hero-section/Hero"
import Mail from "@/features/mail-section/Mail"
import Projects from "@/features/project-section/Projects"
import Skills from "@/features/skills-section/Skills"


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

  