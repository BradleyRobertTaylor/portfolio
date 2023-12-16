"use client";

import { motion } from "framer-motion";

import { ArrowButton } from "./ui/ArrowButton";
import { GradientText } from "./ui/GradientText";
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
        <h1 className="font-black text-5xl lg:text-[4rem] xl:text-[5rem] leading-[1.1em] tracking-tight">
          Hello <span className="md:hidden">-</span>
          <span className="hidden md:inline">&#8212;</span> I&apos;m Brad.
          <br />A Las Vegas - based{" "}
          <GradientText>Software Engineer.</GradientText>
        </h1>
        <p className="font-semibold text-xl lg:text-2xl">
          Recently I built{" "}
          <Link
            href={SMOOTH_SAIL_BASE_URL}
            target="_blank"
            className="font-raleway text-[1.7rem] font-light hover:text-[#23395A] transition duration-300"
          >
            SmoothSail
          </Link>
          , a feature flag management tool for decoupling deployment from
          release with user targeting capabilities.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1, delay: 1 }}
        className="absolute bottom-6 right-9 lg:bottom-24 lg:right-24"
      >
        <ArrowButton animate size="large" href="/#projects" />
      </motion.div>
    </section>
  );
}
