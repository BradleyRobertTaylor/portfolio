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
        <h2 className={`${styles.name} ${space_grotesk.className}`}>
          Hi! I'm Brad Taylor
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
        <p className={styles.intro}>
          Blending the worlds of classical and software, I'm a{' '}
          <span className="highlight">fullstack developer</span> and cellist
          with a strong basis in the{' '}
          <span className="highlight">fundamentals</span> of programming. I
          bring innovative solutions to life while crafting user experiences.
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
