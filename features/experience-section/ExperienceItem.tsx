import styles from "./ExperienceItem.module.scss";

export interface ExperienceItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem = ({ date, title, company, description }: ExperienceItemProps) => (
  <div className={styles.experience__item}>
    <div className={styles.experience__item__dot} />
    <div className={styles.experience__item__content}>
      <time className={styles.experience__item__content__date}>{date}</time>
      <h3 className={styles.experience__item__content__title}>{title}<br/>{company}</h3>
      <p className={styles.experience__item__content__description}>{description}</p>
    </div>
  </div>
);

export default ExperienceItem;
