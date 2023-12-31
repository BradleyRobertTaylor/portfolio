import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectItem({ img, alt, title, description }: Project) {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative rounded-3xl p-4 bg-neutral-200 dark:bg-neutral-800 grid place-items-center transition-colors duration-300"
      >
        <Image
          src={img}
          priority
          alt={alt}
          className="rounded-xl aspect-video"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h4 className="font-bold">{title}</h4>
        <p className="font-medium text-neutral-500 dark:text-neutral-400 text-sm pb-2">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
