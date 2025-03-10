import { useTranslations } from "next-intl";

import styles from "./Project.module.scss";
import ProjectCard, { ProjectCardProps } from "./ProjectCard/ProjectCard";

const Projects = () => {
    const intl = useTranslations("Project");

    const projects: ProjectCardProps[] = [
        {
            title: intl("PixelForge.title"),
            description: intl("PixelForge.description"),
            technologies: ["React", "JavaScript", "Adobe-Photoshop"],
            href: "https://github.com/JumboMiller/Iron-Helmet"
        },
        {
            title: intl("CodeNest.title"),
            description: intl("CodeNest.description"),
            technologies: ["Next.js", "TypeScript", "Vercel", "Css"],
            href: "https://github.com/JumboMiller/Iron-Helmet"
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
        <div id="projects" className={styles.base}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h2>
                        {intl("title")} <span className="accent-color">{intl("highlight")}</span>
                    </h2>
                    <div className={styles.cards}>
                        {projects.map((project, key) => (
                            <ProjectCard {...project} key={key} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
