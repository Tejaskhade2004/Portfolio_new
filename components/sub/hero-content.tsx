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
      className="flex flex-row items-center justify-center px-20 mt-36 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
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
          className="flex flex-col gap-5 mt-6 text-6xl text-bold text-white max-w-[720px] w-auto h-auto"
        >
          <span>{PROFILE.name}</span>
          <span className="text-3xl md:text-4xl font-medium text-gray-300">
            {PROFILE.title}
          </span>
          <span className="text-lg md:text-xl leading-8 text-gray-300">
            {PROFILE.summary}
          </span>
          <span className="text-base md:text-lg text-gray-400">
            Based in {PROFILE.location} · {PROFILE.email}
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-wrap gap-4 mt-3"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg min-w-[170px]"
          >
            View Projects
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="py-3 px-6 rounded-lg min-w-[170px] border border-[#7042f88b] bg-[rgba(3,0,20,0.37)] text-center text-white hover:text-[#b49bff] transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-3 text-sm text-gray-400"
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
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
