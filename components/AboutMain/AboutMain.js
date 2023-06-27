import TechnologyCarousel from "../TechnologyCarousel/TechnologyCarousel";
import styles from "./AboutMain.module.css";

export default function AboutMain() {
  return (
    <>
      <section className={styles["text-block"]}>
        <p>
          I'm a Product Designer with 10 years of experience designing digital
          products that are intuitive, visually appealing, and effective. My
          passion for creating user-centered design solutions that improve
          people's lives has driven me to work with a wide range of clients,
          from small startups to large corporations.
        </p>
        <p>
          I approach every design project with a research-driven mindset,
          starting with user testing and analysis to ensure that the products I
          design meet the needs of their target audience. I specialize in
          creating user personas, user journeys, and wireframes to map out the
          user experience and identify pain points and areas for improvement.
        </p>
        <p>
          As a Product Designer, I have a keen eye for detail and a passion for
          creating beautiful and functional interfaces. I use a variety of
          design tools, including Sketch, Figma, and Adobe Creative Suite, and
          stay up-to-date with the latest design trends and technologies. I have
          a deep understanding of design principles such as typography, color
          theory, and layout, which I apply to my designs to create a consistent
          and visually appealing user experience.
        </p>
      </section>
      <TechnologyCarousel />
    </>
  );
}
