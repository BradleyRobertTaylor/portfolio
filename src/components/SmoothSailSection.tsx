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

export function SmoothSailSection() {
  return (
    <section id="projects" className="p-9 py-28 flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <Link
          target="_blank"
          href={SMOOTH_SAIL_BASE_URL}
          className="relative max-w-5xl rounded-3xl p-4 md:p-16 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 grid place-items-center transition-colors duration-500"
        >
          <div className="-z-10 absolute text-[9.688rem] md:text-[15rem] md:-top-44 font-black tracking-[-4px] -top-32 left-5">
            01
          </div>
          <Image
            src={smoothSailDashboard}
            priority
            alt="SmoothSail dashboard screenshot"
            className="rounded-xl aspect-video"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-10 items-center">
        <div className="flex flex-col gap-2 md:flex-row md:gap-10">
          <div className="flex flex-col gap-2 md:w-2/3 md:flex-row md:gap-24">
            <Link
              href={SMOOTH_SAIL_BASE_URL}
              className="flex gap-1 font-bold text-[28px] tracking-[-0.4px]"
            >
              <div className="hidden dark:block dark:w-12">
                <Image src={smoothSailLogoTransparent} alt="SmoothSail logo" />
              </div>
              SmoothSail
            </Link>
            <div>
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
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-medium">Case Study</p>
              <Link
                href={SMOOTH_SAIL_CASE_STUDY_URL}
                target="_blank"
                className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-sm transition-colors duration-500"
              >
                {SMOOTH_SAIL_CASE_STUDY_URL}
              </Link>
            </div>
            <div>
              <div className="flex items-end justify-between md:gap-10">
                <div>
                  <p className="font-medium">GitHub</p>
                  <Link
                    href={SMOOTH_SAIL_GITHUB_URL}
                    target="_blank"
                    className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-sm transition-colors duration-500"
                  >
                    {SMOOTH_SAIL_GITHUB_URL}
                  </Link>
                </div>
                <ArrowButton
                  className="w-12"
                  target="_blank"
                  size="base"
                  arrowRotationDeg="rotate-[225deg]"
                  href={SMOOTH_SAIL_CASE_STUDY_URL}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
