import style from "./SkillCard.module.scss"

interface SkillCardProps {
    skill: string
}

const SkillCard = ({ skill }: SkillCardProps) => {
    return (
        <div className={style.card}>
            {skill}
        </div>
    )
}

export default SkillCard