import HeroHome from "@/components/HeroHome/HeroHome";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <main>
        <HeroHome />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
