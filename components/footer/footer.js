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
          <Link href="#">taylorbradleyr@gmail.com</Link>
        </li>
        <li>
          <Link href="#">Resume</Link>
        </li>
        <li>
          <Link href="#">Linkedin</Link>
        </li>
        <li>
          <Link href="#">Github</Link>
        </li>
      </ul>
    </footer>
  );
}
