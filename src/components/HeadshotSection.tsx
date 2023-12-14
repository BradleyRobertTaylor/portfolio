import Image from "next/image";
import headshot from "../../public/headshot.png";

export function HeadshotSection() {
  return (
    <section
      id="headshot"
      className="p-9 md:p-24 flex flex-col gap-6 md:flex-row max-w-5xl mx-auto"
    >
      <div className="relative h-72 md:h-[400px] lg:h-[500px] md:w-[65%]">
        <Image
          src={headshot}
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
    </section>
  );
}
