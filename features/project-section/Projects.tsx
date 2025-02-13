import { useTranslations } from "next-intl";

import styles from "./Project.module.scss";
import ProjectCard, { ProjectCardProps } from "./ProjectCard/ProjectCard";

const Projects = () => {
    const intl = useTranslations("Project");

    const projects: ProjectCardProps[] = [
        {
            title: intl("PixelForge.title"),
            description: intl("PixelForge.description"),
            technologies: ["React", "JavaScript", "Adobe-Photoshop"]
        },
        {
            title: intl("CodeNest.title"),
            description: intl("CodeNest.description"),
            technologies: ["Next.js", "TypeScript", "Vercel", "Css"]
        },
        {
            title: intl("WebNova.title"),
            description: intl("WebNova.description"),
            technologies: ["Tailwind", "Figma", "React"]
        },
        {
            title: intl("DevSphere.title"),
            description: intl("DevSphere.description"),
            technologies: ["Redux", "React", "Scss"]
        }
    ];

    return (
        <div className={styles.base}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    {projects.map((project, key) => (
                        <ProjectCard {...project} key={key} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
