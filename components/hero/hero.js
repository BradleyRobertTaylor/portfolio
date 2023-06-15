'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { space_grotesk } from '@/app/fonts';
import styles from './hero.module.css';

// const buttonTextMotion = {
//   rest: {

//   },
//   hover: {

//   },
// };

const arrowMotion = {
  rest: {
    x: 0,
  },
  hover: {
    x: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.computer}>
        <div className={styles['computer-text']}>
          <h2 className={`${styles.name} ${space_grotesk.className}`}>
            Hi! I'm Brad
          </h2>
          <Typewriter
            options={{
              strings: [
                'Software Engineer',
                'Web Developer',
                'Full Stack Developer',
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: styles.typewriter,
            }}
          />
        </div>
      </div>
      <p className={styles.intro}>
        <span>
          Blending the worlds of classical and software, I'm a{' '}
          <span className="highlight">fullstack developer</span> and cellist
          with a strong basis in the{' '}
          <span className="highlight">fundamentals</span> of programming. I
          bring innovative solutions to life while crafting user experiences.
          {/* Welcome to my website, where you'll discover a portfolio showcasing my
          expertise as a software engineer, highlighting my ability to develop
          robust and scalable applications that optimize performance, enhance
          user experiences, and solve real-world problems. */}
        </span>
      </p>
      <div className={styles['button-container']}>
        <Link href="/projects">
          <motion.button
            className={`${styles['projects-button']} ${space_grotesk.className}`}
            whileHover="hover"
            whileTap={{ scale: 0.8 }}
            initial="rest"
            animate="rest"
          >
            <span>Check Out My Work!</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              initial={{ rotate: 90 }}
              variants={arrowMotion}
            >
              <path
                fill="currentColor"
                d="M12 4a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L13 7.414V19a1 1 0 11-2 0V7.414l-4.293 4.293a1 1 0 01-1.414-1.414l6-6A1 1 0 0112 4z"
              ></path>
            </motion.svg>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
