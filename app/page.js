import HeroHome from "@/components/HeroHome/HeroHome";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects/projects";
import MainNavigation from "@/components/navigation/MainNavigation";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <main>
        <HeroHome />
        <Projects />
      </main>
    </>
  );
}
