import styles from "./Experience.module.scss";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      date: "January 2021 – April 2021",
      title: "HTML/CSS Intern Developer",
      company: "Specvuzavtomatika",
      description: "Development of static HTML/CSS pages and maintenance of existing projects.",
    },
    {
      date: "June 2021 – February 2022",
      title: "Microsoft Teams Manager",
      company: "ROST Alekseevka",
      description: "Managing team communications through Microsoft Teams.",
    },
    {
      date: "February 2022 – September 2022",
      title: "Frontend Developer",
      company: "Freelance",
      description: "Creating responsive interfaces using React and integrating with APIs.",
    },
    {
      date: "March 2022 – September 2022",
      title: "Content Creator",
      company: "Satrup",
      description: "Creating and editing content for social media platforms.",
    },
  ];

  return (
    <section className={styles.experience}>
      <div className={styles.experience__inner}>
        <div className={styles.experience__body}>
          <h2>Work <span className="accent-color">Experience</span> !</h2>
          <ul className={styles.experience__timeline}>
            {experiences.map((experience, index) => (
              <li key={index} >
                <ExperienceItem {...experience} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience