import React, { useEffect } from "react";
import Section from "./Section";
import { FaReact, FaHtml5, FaHandsHelping } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  const image = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section>
      <div
        name="About"
        className="w-full min-h-screen flex flex-row justify-center items-center relative px-16 lg:space-x-32"
      >
        <div className="flex flex-col justify-start items-start w-[26rem] rounded-md ">
          <div className="overflow-hidden h-fit mb-4 w-full" ref={ref}>
            <motion.h1
              className="font-bold text-white text-4xl lg:text-6xl"
              variants={container}
              initial="hidden"
              animate={controls}
            >
              About Me
            </motion.h1>
          </div>
          <p className="text-white/50 text-left text-base lg:text-lg">
            Hello, my name is Albert Le, I am a{" "}
            <span className="text-primary font-bold">software engineer</span>{" "}
            with experience in the latest web technologies. I started my journey
            as a developer back in 2020 when I found my passion for developing
            <span className="text-primary font-bold"> web applications</span>.
            Since then I have been continously expanding my knowledge and
            improving my technical skills.
          </p>
        </div>
        <motion.div
          className="hidden lg:flex justify-center items-center rounded-full bg-light shadow-lg p-8"
          variants={image}
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <motion.img
            className="w-80"
            src="/images/Chip.png"
            alt=""
            variants={image}
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
