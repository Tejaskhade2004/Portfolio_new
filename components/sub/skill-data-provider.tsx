"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#7042f88b] bg-[#0f172a]/70 p-2 shadow-lg backdrop-blur-sm"
    >
      <Image
        src={`/skills/${src}`}
        width={width}
        height={height}
        alt={name}
        className="h-auto w-auto max-h-full max-w-full object-contain"
      />
    </motion.div>
  );
};
