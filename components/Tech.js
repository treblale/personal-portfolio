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
        <div className="absolute blur-[100px]  md:flex flex-row hidden">
          <div className="w-[44rem] h-[24rem] rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 opacity-40" />
        </div>
        <div className="flex flex-col justify-center items-center z-50">
          <p className="text-light text-xs lg:text-sm uppercase font-semibold tracking-widest">
            Technologies
          </p>
          <div className="overflow-hidden h-fit my-6">
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
          <p className="text-light mb-4 lg:mb-12 text-sm lg:text-lg font-base">
            Recent technologies that I have worked with.
          </p>
          <motion.div
            className="w-full flex flex-wrap lg:flex-nowrap lg:flex-row justify-center items-center lg:space-x-12 mb-4"
            variants={container}
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              className="rounded-full p-6 hover:shadow-lg hover:scale-110 transition-all group bg-gradient-to-br  "
              variants={items}
            >
              <SiJava className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 bg-gradient-to-br   hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiJavascript className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
            <div className="w-full lg:hidden"></div>
            <motion.div
              className="rounded-full p-6 bg-gradient-to-br   hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <FaReact className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 bg-gradient-to-br   hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiNextdotjs className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 bg-gradient-to-br   hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <FaHtml5 className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 bg-gradient-to-br   hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiTailwindcss className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
            <motion.div
              className="rounded-full p-6 bg-gradient-to-br   hover:shadow-lg hover:scale-110 transition-all group"
              variants={items}
            >
              <SiStyledcomponents className="text-light lg:text-4xl text-4xl group-hover:text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
