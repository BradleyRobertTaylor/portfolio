"use client";

import HeroHome from "@/components/HeroHome/HeroHome";
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
