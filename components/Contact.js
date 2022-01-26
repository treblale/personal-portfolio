import React, { useEffect } from "react";
import Section from "./Section";
import Button from "./UI/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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

  return (
    <Section>
      <div
        name="Contact"
        className="w-full min-h-screen flex flex-col justify-center items-center relative px-16 lg:px-0  selection:bg-primary selection:text-black"
      >
        <FaTelegramPlane className="text-primary text-4xl lg:text-6xl mb-4" />
        <div className="overflow-hidden h-fit">
          <motion.h1
            className="text-white text-4xl lg:text-6xl font-bold"
            variants={container}
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            Get In Touch
          </motion.h1>
        </div>
        <p className="text-white/50 mt-2 mb-8 text-xs text-center lg:text-base lg:mb-12">
          Shoot me an email! I am always open to new opprotunities.
        </p>
        <a
          className="border-white/20 border px-12 py-3 rounded-full cursor-pointer hover:bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:albertphongle@gmail.com"
        >
          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
            Say Hello
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
