import styles from "./TechnologyCards.module.css";

export default function TechnologyCards({ technologies }) {
  return (
    <ul className={styles.technologies}>
      {technologies.map((technology, index) => {
        return (
          <li key={index} className={styles["technology-item"]}>
            {technology}
          </li>
        );
      })}
    </ul>
  );
}
