import Image from "next/image";
import styles from "./AboutCoverPhoto.module.css";
import headshot from "../../public/images/IMG_5850 1.png";

export default function AboutCoverPhoto() {
  return (
    <section className={styles["photo-section"]}>
      <Image src={headshot} alt="Headshot of Bradley Taylor" />
      <div className={styles["titles-section"]}>
        <p>Bradley Taylor</p>
        <p>Full-stack Developer</p>
        <p>Based in Las Vegas</p>
      </div>
    </section>
  );
}
