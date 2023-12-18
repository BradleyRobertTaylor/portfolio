"use client";

import Image from "next/image";
import smoothSailDashboard from "../../public/smoothsail-dashboard.png";
import smoothSailLogoTransparent from "../../public/smoothsail-logo-transparent.png";
import Link from "next/link";
import {
  SMOOTH_SAIL_BASE_URL,
  SMOOTH_SAIL_CASE_STUDY_URL,
  SMOOTH_SAIL_GITHUB_URL,
} from "@/data/constants";
import { ArrowButton } from "./ui/ArrowButton";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export function SmoothSailSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 30);

  return (
    <section id="projects" className="px-9 pt-28 pb-12 flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <Link
          target="_blank"
          href={SMOOTH_SAIL_BASE_URL}
          className="relative max-w-5xl rounded-3xl p-4 md:p-16 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 grid place-items-center transition-colors duration-500"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 1 }}
            ref={ref}
            style={{ y }}
            className="-z-10 absolute text-[9.688rem] md:text-[15rem] md:-top-44 font-black tracking-[-4px] -top-32 left-5"
          >
            01
          </motion.div>
          <Image
            src={smoothSailDashboard}
            priority
            alt="SmoothSail dashboard screenshot"
            className="rounded-xl aspect-video"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-10 items-center">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-2 lg:w-2/3 lg:flex-row lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 1,
              }}
              viewport={{ once: true, amount: 1 }}
              className="flex gap-1 font-bold items-start text-[28px] tracking-[-0.4px]"
            >
              <Link
                href={SMOOTH_SAIL_BASE_URL}
                className="hidden dark:block dark:w-12"
              >
                <Image src={smoothSailLogoTransparent} alt="SmoothSail logo" />
              </Link>
              <Link href={SMOOTH_SAIL_BASE_URL}>SmoothSail</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 1,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 1 }}
            >
              <p className="font-medium text-neutral-500 dark:text-neutral-400 text-sm pb-2">
                SmoothSail is a feature flag management tool designed for
                decoupling deployment from release. It enables developers to
                target specific demographics of users in order to limit the
                impact of unforeseen bugs in production.
              </p>
              <p className="font-medium text-neutral-500 dark:text-neutral-400 text-sm">
                Built using Node.js, Express, React, PostgreSQL, NATS JetStream,
                and Docker for users to conveniently deploy to their
                infrastructure of choice.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 1,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 1 }}
            className="flex flex-col gap-2"
          >
            <div>
              <p className="font-medium">Case Study</p>
              <Link
                href={SMOOTH_SAIL_CASE_STUDY_URL}
                target="_blank"
                className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-sm transition-colors duration-300"
              >
                {SMOOTH_SAIL_CASE_STUDY_URL}
              </Link>
            </div>
            <div>
              <div className="flex items-end justify-between lg:gap-10">
                <div>
                  <p className="font-medium">GitHub</p>
                  <Link
                    href={SMOOTH_SAIL_GITHUB_URL}
                    target="_blank"
                    className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-sm transition-colors duration-300"
                  >
                    {SMOOTH_SAIL_GITHUB_URL}
                  </Link>
                </div>
                <ArrowButton
                  className="w-12"
                  target="_blank"
                  rotateArrow
                  href={SMOOTH_SAIL_CASE_STUDY_URL}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
