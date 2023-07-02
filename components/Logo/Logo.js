import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <a className={`${styles.logo}`} tabIndex="0" href="/">
      <span>Bradley Taylor</span>
    </a>
  );
}
