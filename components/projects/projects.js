import Image from 'next/image';
import ikeaComputer from '../../public/projects/ikea-computer.webp';
import mobileDummy from '../../public/projects/mobile-dummy.webp';
import dummyProject from '../../public/projects/dummy-project.webp';

import { space_grotesk } from '@/app/fonts';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles['projects-section']}>
      <h2 className={`${styles.title} ${space_grotesk.className}`}>Projects</h2>
      <div className={styles['image-container']}>
        <Image src={ikeaComputer} alt="Picture of Ikea project"></Image>
        <Image src={mobileDummy} alt="Picture Mobile dummy project"></Image>
        <Image src={dummyProject} alt="Picture of dummy project"></Image>
        <Image src={ikeaComputer} alt="Picture of Ikea project"></Image>
      </div>
    </section>
  );
}
