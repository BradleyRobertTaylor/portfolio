'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { poppins } from '@/app/fonts';
import styles from './ProjectCard.module.css';
import TechnologyCards from '../TechnologyCards/TehnologyCards';

export default function ProjectCard({
  id,
  clickHandler,
  screenshot,
  alt,
  title,
  shortDescription,
  technologies,
  height,
}) {
  return (
    <div
      data-id={id}
      onClick={clickHandler}
      className={`${styles['image-container']}`}
    >
      <Image
        data-id={id}
        className={styles['project-image']}
        height={height}
        src={screenshot}
        alt={alt}
        priority
      ></Image>
      <motion.div className={styles['project-information']}>
        <h2 className={styles['project-title']}>{title}</h2>
        <p className={styles['short-description']}>{shortDescription}</p>
        <TechnologyCards technologies={technologies} />
      </motion.div>
    </div>
  );
}
