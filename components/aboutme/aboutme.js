'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import headshot from '../../public/headshot.jpg';

import { poppins, roboto_mono } from '@/app/fonts';
import styles from './aboutme.module.css';

export default function AboutMe() {
  return (
    <section className={`${styles['about-me-section']} ${poppins.className}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            className={styles.headshot}
            src={headshot}
            alt="Headshot of Bradley Taylor"
            height={400}
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>About Me</h2>
          <p className={`${styles.introduction} ${roboto_mono.className}`}>
            Hey, I'm Brad!
          </p>
          <p className={styles['about-me-text']}>
            Oh my goodness, hello! I am a Front-End developer based in Toronto,
            Canada. I love long walks on the beach, writing clean code, and
            pushing my skills to the limit. My interests include joining an
            exciting team of passionate people, personal growth, and making
            silly faces.
          </p>
          <p className={styles['about-me-text']}>
            Other than coding, I love complimenting my Animal Crossing
            villagers, baking cookies, and making people laugh.
          </p>
          <motion.a
            whileHover={{
              scaleX: 1.1,
              color: '#F5BE22',
              borderColor: '#F5BE22',
            }}
            transition={{ duration: 0.2 }}
            href="#"
            className={styles.button}
          >
            View Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
