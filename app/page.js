import Hero from '../components/hero/hero';
import AboutMe from '../components/aboutme/aboutme';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import ContactMe from '../components/contactme/contactme';
import ThemeToggle from '../components/themetoggle/themetoggle';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <ContactMe />
    </main>
  );
}
