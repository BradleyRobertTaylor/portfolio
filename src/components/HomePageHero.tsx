"use client";

import { motion } from "framer-motion";

import { ArrowButton } from "./ui/ArrowButton";
import Link from "next/link";
import { SMOOTH_SAIL_BASE_URL } from "@/data/constants";

export function HomePageHero() {
  return (
    <section className="z-0 relative p-9 md:p-24 h-[90vh] lg:h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
          delay: 0.5,
        }}
        className="flex flex-col column justify-around gap-12 md:max-w-[70%]"
      >
        <h1 className="sr-only">
          Hey, I&apos;m Bradley Taylor. a full stack software engineer. I&apos;m
          one of the creators of SmoothSail, a feature flag management tool.
        </h1>
        <p className="font-extrabold text-5xl lg:text-[4rem] xl:text-[5rem] leading-[1.1em] tracking-tight">
          Hello <span className="md:hidden">-</span>
          <span className="hidden md:inline">&#8212;</span> I&apos;m Brad.
          <br className="hidden md:inline" /> A Las Vegas - based{" "}
          <br className="hidden md:inline" />
          Software Engineer.
        </p>
        <p className="lg:w-[90%] 2xl:w-[70%] font-semibold text-xl lg:text-2xl text-neutral-500 dark:text-neutral-300">
          Recently I built{" "}
          <Link
            href={SMOOTH_SAIL_BASE_URL}
            target="_blank"
            className="font-raleway font-light hover:text-[#239DB8] transition duration-300"
          >
            SmoothSail
          </Link>
          , a feature flag management tool for decoupling deployment from
          release.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1, delay: 1 }}
        className="absolute bottom-6 right-9 lg:bottom-24 lg:right-24"
      >
        <ArrowButton animate href="/#projects" />
      </motion.div>
    </section>
  );
}
