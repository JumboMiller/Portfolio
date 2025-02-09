import SkillCards from "@/features/skills-section/SkillCard/SkillCards";

import styles from "./Skills.module.scss";

const hardSkills: string[] = [
    "HTML: Understanding the structure of web documents.",
    "CSS: Creating adaptive and stylish user interfaces.",
    "JavaScript: Basic knowledge of the programming language.",
    "TypeScript: Ensuring type safety in JavaScript projects.",
    "React: Developing components and working with the Virtual DOM.",
    "Redux: Managing application state effectively.",
    "Next.js: Building server-side rendered React applications.",
    "Git: Version control and team collaboration.",
    "REST API: Interacting with the backend via HTTP requests.",
    "Webpack/Vite: Configuring and optimizing project builds.",
    "Responsive Design: Adapting interfaces for various devices.",
    "Basic Algorithms: Understanding data structures and basic algorithms.",
    "Testing: Writing basic unit tests (Jest, React Testing Library).",
    "Teamwork: Following Agile/Scrum methodologies.",
    "UI/UX Basics: Focusing on interface usability and accessibility.",
]
const softSkills: string[] = [
    "Communication: Ability to clearly express ideas and collaborate effectively.",
    "Problem-Solving: Analytical thinking and finding creative solutions.",
    "Adaptability: Quickly learning and adapting to new tools or requirements.",
    "Time Management: Efficiently prioritizing and completing tasks.",
    "Team Collaboration: Working well with others to achieve common goals.",
    "Continuous Learning: Staying curious and improving skills over time.",
    "Empathy: Understanding user needs and contributing to team harmony.",
    "Attention to Detail: Ensuring high-quality and error-free work.",
]

const Skills = () => {

    return (
        <section className={styles.base}>
            <div className={styles.inner}>
                <div className={styles.column}>
                    <h2>
                        <span className="accent-color">Hard</span> Skill
                    </h2>
                    <div className={styles.content}>
                        <SkillCards skills={hardSkills} />
                    </div>
                </div>
                <div className={styles.column}>
                    <h2>
                        <span className="accent-color">Soft</span> Skill
                    </h2>
                    <div className={styles.content}>
                        <SkillCards skills={softSkills} />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills