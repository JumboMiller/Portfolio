import styles from "./ExperienceItem.module.scss";

export interface ExperienceItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem = ({ date, title, company, description }: ExperienceItemProps) => (
  <div className={styles.item}>
    <div className={styles.item_dot} />
    <div className={styles.item_content}>
      <time className={styles.item_content_date}>{date}</time>
      <h3 className={styles.item_content_title}>{title}<br/>{company}</h3>
      <p className={styles.item_content_description}>{description}</p>
    </div>
  </div>
);

export default ExperienceItem;
