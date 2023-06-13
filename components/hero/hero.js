'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { space_grotesk } from '@/app/fonts';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
        >
          <path
            fill="#B0B0B0"
            stroke="#000"
            strokeWidth="0.391"
            d="M100 159.09c39.324 0 71.205 2.513 71.205 5.613 0 3.099-31.879 5.613-71.205 5.613-39.324 0-71.205-2.514-71.205-5.613 0-3.1 31.879-5.613 71.205-5.613z"
          ></path>
          <path
            fill="#666"
            stroke="#000"
            strokeWidth="0.391"
            d="M25.775 26.259h148.452c4.877 0 8.868 3.99 8.868 8.868v91.447H16.909V35.126c0-4.877 3.991-8.868 8.868-8.868h-.002z"
          ></path>
          <path
            fill="#fff"
            stroke="#000"
            strokeWidth="0.391"
            d="M22.928 120.554h154.144V35.128c0-1.554-1.292-2.847-2.845-2.847H25.775c-1.553 0-2.845 1.291-2.845 2.847v85.426h-.002z"
          ></path>
          <path
            fill="#B4C4AF"
            stroke="#000"
            strokeWidth="0.391"
            d="M183.186 123.253v9.698c0 4.879-4.399 8.868-9.775 8.868H26.775c-5.377 0-9.775-3.989-9.775-8.868v-9.698h166.186z"
          ></path>
          <path
            fill="#B6B6B8"
            stroke="#000"
            strokeWidth="0.391"
            d="M100 132.416a3.052 3.052 0 013.053 3.053 3.052 3.052 0 01-3.053 3.053 3.052 3.052 0 01-3.053-3.053 3.052 3.052 0 013.053-3.053z"
          ></path>
          <path
            fill="#C2C2C4"
            stroke="#000"
            strokeWidth="0.391"
            d="M119.166 159.09l14.1 4.517H66.734l11.375-4.517v-13.95h41.057v13.95z"
          ></path>
          <path
            fill="#B0B0B0"
            stroke="#000"
            strokeWidth="0.391"
            d="M119.166 159.09l-41.057-13.951h41.057v13.951z"
          ></path>
          <path
            fill="#ECF0F1"
            stroke="#000"
            strokeWidth="0.391"
            d="M78.11 159.09h41.056l14.1 4.517v1.947H66.732v-1.947l11.375-4.517h.002z"
          ></path>
        </svg> */}
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
        <p className={styles.intro}>
          Blending the worlds of classical and software, I'm a{' '}
          <span className="highlight">fullstack developer</span> and cellist
          with a strong basis in the{' '}
          <span className="highlight">fundamentals</span> of programming. I
          bring innovative solutions to life while crafting user experiences.
          {/* Welcome to my website, where you'll discover a portfolio showcasing my
          expertise as a software engineer, highlighting my ability to develop
          robust and scalable applications that optimize performance, enhance
          user experiences, and solve real-world problems. */}
        </p>
      </div>
      <div className={styles['button-container']}>
        <span className={styles['button-text']}>Check out my work!</span>
        <a href="#projects">
          <motion.button
            className={styles['down-arrow']}
            initial={{ y: 15 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </motion.button>
        </a>
      </div>
    </section>
  );
}
