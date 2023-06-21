import Link from 'next/link';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href="/">
      <div className={`${styles.logo}`}>
        <span>Bradley Taylor</span>
      </div>
    </Link>
  );
}
