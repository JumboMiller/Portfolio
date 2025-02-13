import SkillCard from "./SkillCard"
import style from "./SkillCards.module.scss"

interface SkillCardsProps {
    skills: string[]
}

const SkillCards = ({ skills }: SkillCardsProps) => {
    return (
        <ul className={style.ul_cards}>
            {skills.map((skill, key) => 
                <li className={style.li_item} key={key}>
                    <SkillCard skill={skill} />
                </li>
            )}
        </ul>
    )
}

export default SkillCards