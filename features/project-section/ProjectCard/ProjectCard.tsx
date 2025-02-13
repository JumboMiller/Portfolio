import Image from "next/image";

import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
}

const ProjectCard = ({ title, description, technologies }: ProjectCardProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.item_content}>
                <h3 className={styles.item_title}>{title}</h3>
                <Image className={styles.item_project_icon} width={360} height={215} src={"/portfolio-project.png"} alt={title} />
                <p className={styles.item_description}>{description}</p>
                <ul className={styles.item_img_ul}>
                    {
                        technologies.map((tech, key) =>
                            <li className={styles.item_img_li} key={key}>
                                <Image className={styles.item_icon} width={32} height={32} src={`/${tech}.svg`} alt={`${tech} icon`} />
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard