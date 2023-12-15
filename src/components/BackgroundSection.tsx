import Image from "next/image";
import headshot from "../../public/headshot.png";
import { TechnologyDisplay } from "./TechnologyDisplay";

export function BackgroundSection() {
  return (
    <>
      <section
        id="background"
        className="p-9 pb-9 md:p-24 md:pb-9 max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative h-72 md:h-[400px] lg:h-[500px] md:w-[65%]">
            <Image
              src={headshot}
              sizes="33vw"
              fill
              alt="Headshot of Bradley Taylor"
              className="grayscale rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-end h-48 md:h-[400px] lg:h-[500px] md:w-[35%] p-6 bg-neutral-200 dark:bg-neutral-800 rounded-3xl text-lg font-semibold leading-7">
            <p>Bradley Taylor</p>
            <p>Full-stack Developer</p>
            <p>Based in Las Vegas</p>
          </div>
        </div>
        <p className="md:w-[70%] md:ml-auto pt-28 font-medium text-neutral-500 dark:text-neutral-400 text-sm">
          I&apos;m a professional musician, educator, and now full-stack
          software engineer. While learning to program, I focused on the
          fundamentals and how to approach problem solving. I draw upon my
          experience as a musician and educator to bring a unique perspective to
          my work, infusing my creativity to find scalable solutions with my
          passion for learning new technologies.
        </p>
        <h3 className="md:w-[70%] md:ml-auto pt-28 font-extrabold text-4xl">
          Technologies I&apos;ve used
        </h3>
      </section>
      <TechnologyDisplay />
    </>
  );
}
