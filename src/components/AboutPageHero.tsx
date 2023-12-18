"use client";

import { motion } from "framer-motion";

import { ArrowButton } from "./ui/ArrowButton";

export function AboutPageHero() {
  return (
    <section className="z-0 relative p-9 pt-28 md:p-24 md:pt-44 flex flex-col">
      <div className="flex flex-col column justify-around gap-12 lg:w-[60%]">
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 1,
            delay: 0.5,
          }}
          className="font-bold text-4xl md:text-6xl 2xl:text-7xl leading-[2em] tracking-tight"
        >
          I have years of experience in the TypeScript, JavaScript, and Ruby
          ecosystems.
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1, delay: 1 }}
        className="absolute bottom-6 right-9 lg:bottom-24 lg:right-24"
      >
        <ArrowButton animate href="/about#background" />
      </motion.div>
    </section>
  );
}
