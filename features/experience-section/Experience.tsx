import { useTranslations } from "next-intl";

import styles from "./Experience.module.scss";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () => {
  const intl = useTranslations("Experience");

  return (
    <section className={styles.base}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>
            {intl("title")} <span className="accent-color">{intl("highlight")}</span> 
          </h2>
          <ul className={styles.timeline}>
            {Array.from({ length: 4 }, (_, index) => (
              <li key={index}>
                <ExperienceItem
                  date={intl(`jobs.${index}.date`)}
                  title={intl(`jobs.${index}.title`)}
                  company={intl(`jobs.${index}.company`)}
                  description={intl(`jobs.${index}.description`)}
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
