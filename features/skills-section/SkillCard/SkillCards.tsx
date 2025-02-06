import SkillCard from "./SkillCard"
import style from "./SkillCard.module.scss"

interface SkillCardsProps {
    skills: string[]
}

const SkillCards = ({ skills }: SkillCardsProps) => {
    return (
        <ul className={style.skill_list}>
            {skills.map((skill, key) => 
                <li key={key}>
                    <SkillCard skill={skill} />
                </li>
            )}
        </ul>
    )
}

export default SkillCards