import Image from "next/image";

import AnimateOnView from "@/shared/components/AnimateOnView/AnimateOnView";
import GitHubAnchor from "@/shared/components/SvgAnchors/GitHubAnchor";

import styles from "./ProjectCard.module.scss";
export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    href?:string;
}

const ProjectCard = ({ title, description, technologies, href="https://github.com/JumboMiller" }: ProjectCardProps) => {
    return (
        <AnimateOnView className={styles.item} animationClass="animate__animated animate__fadeIn">
            <div className={styles.item_content}>
                <div className={styles.item_title_box}>
                    <h3 className={styles.item_title}>{title}</h3>
                    <GitHubAnchor href={href} />
                </div>
                <div className={styles.item_project}>
                    <Image className={styles.item_project_icon} width={460} height={240} src={"/portfolio-project2.png"} alt={title} />
                </div>
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
        </AnimateOnView>
    )
}

export default ProjectCard