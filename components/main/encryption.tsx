"use client";

import { motion } from "framer-motion";

import {
  CERTIFICATIONS,
  CORE_SKILLS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
} from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const ResumeHighlights = () => {
  return (
    <section
      id="experience"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-35">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      <motion.div variants={slideInFromTop} className="relative z-10 px-6 text-center">
        <div className="Welcome-box mx-auto border border-[#7042f88b] px-[15px] py-[4px] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Resume Highlights</h1>
        </div>

        <h2 className="mt-5 text-[40px] font-semibold text-gray-100">
          Experience, education, and certifications.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
          {PROFILE.summary}
        </p>
      </motion.div>

      <div className="relative z-10 mt-14 grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#7042f88b] bg-[rgba(3,0,20,0.72)] p-6 shadow-lg shadow-[#2A0E61]/30 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white">Experience</h3>
          <div className="mt-5 space-y-5 text-sm text-gray-300">
            {EXPERIENCE.map((item) => (
              <div key={`${item.title}-${item.company}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#7042f88b] bg-[rgba(3,0,20,0.72)] p-6 shadow-lg shadow-[#2A0E61]/30 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white">Education</h3>
          <div className="mt-5 space-y-5 text-sm text-gray-300">
            {EDUCATION.map((item) => (
              <div key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{item.institution}</p>
                <p className="mt-2 text-base text-gray-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#7042f88b] bg-[rgba(3,0,20,0.72)] p-6 shadow-lg shadow-[#2A0E61]/30 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white">Certifications</h3>
          <ul className="mt-5 space-y-4 text-sm text-gray-300">
            {CERTIFICATIONS.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-10 w-full max-w-7xl px-6">
        <h3 className="text-center text-2xl font-semibold text-white">Core Skills</h3>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {CORE_SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#7042f88b] bg-[rgba(112,66,248,0.14)] px-4 py-2 text-sm text-gray-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
