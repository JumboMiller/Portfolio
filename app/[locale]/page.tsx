import Experience from "@/features/experience-section/Experience"
import Hero from "@/features/hero-section/Hero"
import Skills from "@/features/skills-section/Skills"


const Index = () => {

  return (
    <main className="content">
      <div className="content__section">
        <Hero/>
        <Skills/>
        <Experience/>
       
      </div>
    </main>
  )
}
export default Index

  