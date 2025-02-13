import { useTranslations } from "next-intl";

import styles from "./Experience.module.scss";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <section className={styles.base}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>
            {t("title")} <span className="accent-color">{t("highlight")}</span> !
          </h2>
          <ul className={styles.timeline}>
            {Array.from({ length: 4 }, (_, index) => (
              <li key={index}>
                <ExperienceItem
                  date={t(`jobs.${index}.date`)}
                  title={t(`jobs.${index}.title`)}
                  company={t(`jobs.${index}.company`)}
                  description={t(`jobs.${index}.description`)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
