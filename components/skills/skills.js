'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { poppins } from '@/app/fonts';
import styles from './skills.module.css';

import javaScriptLogo from '../../public/skills/javascript.svg';
import typeScriptLogo from '../../public/skills/typescript.svg';
import rubyLogo from '../../public/skills/ruby.svg';
import reactLogo from '../../public/skills/react.svg';
import htmlLogo from '../../public/skills/html.svg';
import cssLogo from '../../public/skills/css.svg';
import nodeLogo from '../../public/skills/node.svg';
import railsLogo from '../../public/skills/rails.svg';
import postgresLogo from '../../public/skills/postgresql.svg';
import mongoDBLogo from '../../public/skills/mongodb.svg';
import gitLogo from '../../public/skills/git.svg';
import awsLogo from '../../public/skills/aws.svg';

const skillItems = [
  { title: 'JavaScript', imagePath: javaScriptLogo },
  { title: 'TypeScript', imagePath: typeScriptLogo },
  { title: 'Ruby', imagePath: rubyLogo },
  { title: 'React', imagePath: reactLogo },
  { title: 'HTML', imagePath: htmlLogo },
  { title: 'CSS', imagePath: cssLogo },
  { title: 'Node.js', imagePath: nodeLogo },
  { title: 'Ruby on Rails', imagePath: railsLogo },
  { title: 'PostgreSQL', imagePath: postgresLogo },
  { title: 'mongoDB', imagePath: mongoDBLogo },
  { title: 'Git', imagePath: gitLogo },
  { title: 'AWS', imagePath: awsLogo },
];

export default function Skills() {
  return (
    <section className={styles['skills-section']}>
      <div className={styles.container}>
        <span className={styles['small-text']}>check out my</span>
        <h2 className={`${styles['section-title']} ${poppins.className}`}>
          Skills
        </h2>
        <ul className={styles['skills-grid']}>
          {skillItems.map(({ title, imagePath }, id) => {
            return (
              <motion.li
                whileHover={{ scale: 1.25 }}
                className={styles['skill-item']}
                key={id}
              >
                <Image
                  src={imagePath}
                  alt={`${title} logo`}
                  width="40"
                  height="40"
                ></Image>
                <p>{title}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
