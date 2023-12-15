import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectItem({ id, img, alt, title, description }: Project) {
  return (
    <div key={id} className="flex flex-col items-center gap-4">
      <Link
        target="_blank"
        href="#"
        className="relative rounded-3xl p-4 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 grid place-items-center transition-colors duration-500"
      >
        {/* <div className="-z-10 absolute text-8xl font-black tracking-[-4px] -top-14 left-5"> */}
        {/*   0{id} */}
        {/* </div> */}
        <Image
          src={img}
          priority
          alt={alt}
          className="rounded-xl aspect-video"
        />
      </Link>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="font-medium text-neutral-500 dark:text-neutral-400 text-sm pb-2">
          {description}
        </p>
      </div>
    </div>
  );
}
