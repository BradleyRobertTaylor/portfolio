import styles from './contactme.module.css';
import { space_grotesk } from '@/app/fonts';

export default function ContactMe() {
  return (
    <section id="contact" className={styles['contact-me-section']}>
      <div className={styles['contact-container']}>
        <h2 className={`${styles.title} ${space_grotesk.className}`}>
          Contact
        </h2>
        <h3 className={styles['intro']}>Feel Free to Reach Out!</h3>
        <p className={styles.message}>
          I'd be thrilled to talk with you and explore how my skills as a
          software engineer can contribute to your organization's success.
        </p>
        <button className={styles.button}>Shoot Me An Email</button>
      </div>
    </section>
  );
}
