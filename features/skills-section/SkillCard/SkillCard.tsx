import style from "./SkillCard.module.scss"

interface SkillCardProps {
    skill: string
}

const SkillCard = ({ skill }: SkillCardProps) => {
    return (
        <div className={style.skill_card}>
            {skill}
        </div>
    )
}

export default SkillCard