import { useTranslations } from "next-intl";

import styles from "./Project.module.scss";
import ProjectCard, { ProjectCardProps } from "./ProjectCard/ProjectCard";

const Projects = () => {
    const intl = useTranslations("Project");

    const projects: ProjectCardProps[] = intl.raw("projects"); 

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
