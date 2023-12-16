import { HomePageHero } from "@/components/HomePageHero";
import { OtherProjectsList } from "@/components/OtherProjectsList";
import { SmoothSailSection } from "@/components/SmoothSailSection";

export default function Home() {
  return (
    <main>
      <HomePageHero />
      <SmoothSailSection />
      <OtherProjectsList />
    </main>
  );
}
