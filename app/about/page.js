import AboutCoverPhoto from "@/components/AboutCoverPhoto/AboutCoverPhoto";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutMain from "@/components/AboutMain/AboutMain";
import MainNavigation from "@/components/navigation/MainNavigation";

export default function About() {
  return (
    <>
      <MainNavigation />
      <main>
        <AboutHero />
        <AboutCoverPhoto />
        <AboutMain />
      </main>
    </>
  );
}
