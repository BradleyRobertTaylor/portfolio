import { ArrowButton } from "./ui/ArrowButton";

export function HomePageHero() {
  return (
    <section className="relative p-9 md:p-24 h-[90vh] lg:h-screen flex flex-col justify-center">
      <div className="flex flex-col column justify-around gap-12 md:max-w-[70%]">
        <h1 className="font-black text-5xl lg:text-[4rem] xl:text-[5rem] leading-[1.1em] tracking-tight">
          Hello <span className="md:hidden">-</span>
          <span className="hidden md:inline">&#8212;</span> I&apos;m Brad.
          <br />A Las Vegas - based Software Engineer.
        </h1>
        <p className="font-semibold text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400">
          Recently I built SmoothSail, a feature flag management tool for
          decoupling deployment from release with user targeting capabilities.
        </p>
      </div>
      <div className="absolute bottom-6 right-9 lg:bottom-24 lg:right-24">
        <ArrowButton />
      </div>
    </section>
  );
}
