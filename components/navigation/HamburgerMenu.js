import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu(props) {
  return (
    <button
      className={styles['hamburger-button']}
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={props.onClick}
    >
      <svg className="hamburger" viewBox="0 0 100 100">
        <rect
          width="80"
          height="10"
          x="10"
          y="25"
          className="line line__top"
          rx="5"
        ></rect>
        <rect
          width="80"
          height="10"
          x="10"
          y="45"
          className="line line__middle"
          rx="5"
        ></rect>
        <rect
          width="80"
          height="10"
          x="10"
          y="65"
          className="line line__bottom"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
}
