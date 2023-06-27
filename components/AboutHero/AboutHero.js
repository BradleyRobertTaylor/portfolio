import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__wrapper"]}>
        <h1 className={styles.title}>
          I develop web applications that are robust and scalable while
          providing an intuitive user interface.
        </h1>
      </div>
      <a href="#projects" className={styles["arrow-button"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l6-6m-6 6l-6-6m6 6V5"
          ></path>
        </svg>
      </a>
    </section>
  );
}
