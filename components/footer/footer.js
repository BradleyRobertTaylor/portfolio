import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-section']}>
      <Link href="#">
        <div className={`${styles.logo}`}>
          <span>
            <div>
              <span className={styles.purple}>
                <span className={styles['letter-spacing']}>
                  T<span className={styles['upside-down']}>v</span>
                </span>
                y<span className={styles['not-bold']}>lor</span>
              </span>{' '}
            </div>
            <div>
              <span className={styles.made}>Made</span>
            </div>
          </span>
        </div>
      </Link>
      <div className={styles.right}>
        <ul className={styles['contact-links-container']}>
          <li>
            <Link href="#">GitHub</Link>
          </li>
          <li>
            <Link href="#">LinkedIn</Link>
          </li>
          <li>
            <Link href="#">Email</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
