import styles from './MainHeader.module.css';

export default function MainHeader(props) {
  return <header className={styles.header}>{props.children}</header>;
}
