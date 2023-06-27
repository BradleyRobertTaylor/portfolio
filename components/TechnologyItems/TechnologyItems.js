import styles from "./TechnologyItems.module.css";

export default function TechnologyItems({ items }) {
  return items.map(({ technology, svg }, index) => {
    return (
      <li key={index} className={styles["technology-wrapper"]}>
        {svg}
        <span className={styles["technology-title"]}>{technology}</span>
      </li>
    );
  });
}
