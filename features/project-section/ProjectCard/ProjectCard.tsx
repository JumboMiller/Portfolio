"use client"
import Image from "next/image";

import GitHub from "@/public/GitHub.svg"
import A from "@/shared/components/A/A";

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
                <div className={styles.item_title_box}>
                    <h3 className={styles.item_title}>{title}</h3>
                    <div className={styles.item_git}>
                        <A className={styles.item_git_a} href="https://github.com/JumboMiller">
                            <GitHub
                                className={styles.item_git_icon}
                                width={32}
                                height={32}
                                alt="GitHub Project Anchor"
                            />
                        </A>
                    </div>
                </div>
                <div className={styles.item_project}>
                    <Image className={styles.item_project_icon} width={400} height={200} src={"/portfolio-project2.png"} alt={title} />
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
        </div>
    )
}

export default ProjectCard