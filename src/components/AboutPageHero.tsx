import { ArrowButton } from "./ui/ArrowButton";
import { GradientText } from "./ui/GradientText";

export function AboutPageHero() {
  return (
    <section className="z-0 relative p-9 pt-28 md:p-24 md:pt-44 h-[70vh] md:h-auto flex flex-col">
      <div className="flex flex-col column justify-around gap-12 md:w-[75%]">
        <h1 className="font-bold text-4xl lg:text-7xl leading-[2em] tracking-tight">
          I develop <GradientText>web applications</GradientText> that are
          robust and scalable while providing an intuitive user interface.
        </h1>
      </div>
      <div className="absolute bottom-6 right-9 lg:bottom-24 lg:right-24">
        <ArrowButton size="large" href="/about#background" />
      </div>
    </section>
  );
}
