import Experience from "@/features/experience-section/Experience"
import Hero from "@/features/hero-section/Hero"
import Projects from "@/features/project-section/Projects"
import Skills from "@/features/skills-section/Skills"


const Index = () => {

  return (
    <main className="content">
      <div className="content__section">
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
      </div>
    </main>
  )
}
export default Index

  