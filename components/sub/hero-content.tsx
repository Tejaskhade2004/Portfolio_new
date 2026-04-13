"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import { PROFILE } from "@/constants";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-24 flex w-full flex-col items-center justify-center gap-10 px-6 sm:mt-28 sm:px-10 lg:mt-36 lg:flex-row lg:gap-0 lg:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-5 text-center lg:items-start lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Computer Science Engineering - AI & ML
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[760px] flex-col gap-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          <span>{PROFILE.name}</span>
          <span className="text-3xl md:text-4xl font-medium text-gray-300">
            {PROFILE.title}
          </span>
          <span className="text-base leading-7 text-gray-300 sm:text-lg md:text-xl md:leading-8">
            {PROFILE.summary}
          </span>
          <span className="text-sm text-gray-400 sm:text-base md:text-lg">
            Based in {PROFILE.location} · {PROFILE.email}
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="mt-3 flex w-full flex-wrap justify-center gap-4 lg:justify-start"
        >
          <a
            href="#projects"
            className="button-primary min-w-[170px] cursor-pointer rounded-lg px-6 py-3 text-center text-white max-sm:w-full"
          >
            View Projects
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="min-w-[170px] rounded-lg border border-[#7042f88b] bg-[rgba(3,0,20,0.37)] px-6 py-3 text-center text-white transition hover:text-[#b49bff] max-sm:w-full"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 lg:justify-start"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            AI & ML
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Backend Development
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            LLM & RAG 
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Data Analytics
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Prompt Engineer
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="h-auto w-full max-w-[320px] select-none sm:max-w-[420px] lg:max-w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};
