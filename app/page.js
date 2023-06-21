import HeroHome from "@/components/HeroHome/HeroHome";
import ContactMe from "@/components/contactme/contactme";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className="body-container">
      <main>
        <HeroHome />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </div>
  );
}
