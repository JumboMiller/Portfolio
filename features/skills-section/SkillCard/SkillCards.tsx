import SkillCard from "./SkillCard"

interface SkillCardsProps {
    skills: string[]
}

const SkillCards = ({ skills }: SkillCardsProps) => {
    return (
        <ul>
            {skills.map((skill, key) => 
                <li key={key}>
                    <SkillCard skill={skill} />
                </li>
            )}
        </ul>
    )
}

export default SkillCards