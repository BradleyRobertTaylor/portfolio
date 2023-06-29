import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <h2 className={styles["heading"]}>
        Let's work
        <br /> together.
      </h2>
      <ul className={styles["footer-links"]}>
        <li className={styles.email}>
          <Link target="_blank" href="mailto:taylorbradleyr@gmail.com">
            taylorbradleyr@gmail.com
          </Link>
        </li>
        <li>
          <Link target="_blank" href="#">
            Resume
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/BradleyRobertTaylor/"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/BradleyRobertTaylor">
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
}
