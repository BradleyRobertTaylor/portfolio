"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";

export function TechnologyDisplay() {
  return (
    <div className="px-9 pb-9">
      <div className="overflow-hidden mask">
        <motion.ul
          className="flex gap-24"
          animate={{ x: -1957 }}
          initial={{ x: 0 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {technologies.map(({ svg: SVG, name }) => (
            <li key={name} className="flex items-center flex-col gap-1">
              <SVG className="w-14 fill-neutral-950 dark:fill-neutral-50" />
              <span className="font-extrabold">{name}</span>
            </li>
          ))}
          {technologies.map(({ svg: SVG, name }) => (
            <li key={name} className="flex items-center flex-col gap-1">
              <SVG className="w-14 fill-neutral-950 dark:fill-neutral-50" />
              <span className="font-extrabold">{name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
