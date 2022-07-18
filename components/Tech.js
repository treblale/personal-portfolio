import React, { useEffect } from "react";
import Section from "./Section";
import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiGraphql,
  SiApollographql,
  SiJava,
  SiJavascript,
} from "react-icons/si";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tech = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <Section>
      <div className="w-full h-fit flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <div className="overflow-hidden h-fit mb-2 my-8">
            <motion.h1
              className="font-bold text-white text-3xl lg:text-5xl text-center"
              variants={container}
              ref={ref}
              initial="hidden"
              animate={controls}
            >
              Tech Stack
            </motion.h1>
          </div>
          <p className="text-white/50 mb-4 lg:mb-12 text-xs lg:text-base">
            Recent technologies that I have learned and used.
          </p>
          <motion.div
            className="w-full flex flex-wrap lg:flex-nowrap lg:flex-row justify-center items-center lg:space-x-12 mb-4"
            variants={container}
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiJava className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiJavascript className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
            <div className="w-full lg:hidden"></div>
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <FaReact className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiNextdotjs className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <FaHtml5 className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiTailwindcss className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiStyledcomponents className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
