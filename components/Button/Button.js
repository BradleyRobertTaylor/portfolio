import { motion } from "framer-motion";

import styles from "./Button.module.css";

const buttonVariants = {
  // inactive: {
  //   color: "white",
  // },
  // hover: {
  //   color: "black",
  // },
};

const hoverVariants = {
  inactive: { height: "0px" },
  hover: {
    height: "100px",
    transition: { duration: 0.5 },
  },
};

// export default function Button({ type, text }) {
//   return (
//     <motion.button
//       type={type}
//       whileHover="hover"
//       initial="inactive"
//       variants={buttonVariants}
//       className={styles["button"]}
//     >
//       {text}
//       <motion.div className={styles.hover} variants={hoverVariants} />
//     </motion.button>
//   );
// }
//

export default function Button({ type, text }) {
  return (
    <button className={styles.button} type={type}>
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  );
}
