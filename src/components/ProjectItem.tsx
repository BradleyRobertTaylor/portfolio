import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectItem({ img, alt, title, description }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      }}
      viewport={{ once: true, amount: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <Link
        target="_blank"
        href="#"
        className="relative rounded-3xl p-4 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 grid place-items-center transition-colors duration-500"
      >
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
    </motion.div>
  );
}
