import classNames from "classnames";
import { useTranslations } from "next-intl";

import SkillCards from "@/features/skills-section/SkillCard/SkillCards";

import styles from "./Skills.module.scss";

const Skills = () => {
    const t = useTranslations("Skill");

    const hardSkills = Object.values(t.raw("hardSkills")) as string[];
    const softSkills = Object.values(t.raw("softSkills")) as string[];

    return (
        <section className={styles.base}>
            <div className={styles.inner}>
                <div className={classNames("animate__animated animate__fadeInLeft", styles.column)}>
                    <h2>
                        <span className="accent-color">{t("hard")}</span> {t("skill")}
                    </h2>
                    <div className={styles.content}>
                        <SkillCards skills={hardSkills} />
                    </div>
                </div>
                <div className={classNames("animate__animated animate__fadeInRight", styles.column)}>
                    <h2>
                        <span className="accent-color">{t("soft")}</span> {t("skill")}
                    </h2>
                    <div className={styles.content}>
                        <SkillCards skills={softSkills} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
