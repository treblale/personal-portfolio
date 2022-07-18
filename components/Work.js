import React, { useEffect } from "react";
import Section from "./Section";
import { IoIosLock } from "react-icons/io";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = ({ sub, header, desc, img, locked, url, stack, id }) => {
  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.a
      variants={items}
      key={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        locked
          ? "w-80 lg:w-[28rem] h-full flex flex-col justify-center items-start ring-1 ring-light p-8 rounded-lg hover:bg-white/10 hover:ring-primary/50 lg:hover:shadow-lg  lg:hover:-translate-y-2 transition duration-300 ease-in cursor-not-allowed"
          : "w-80 lg:w-[28rem] h-full flex flex-col justify-center items-start ring-1 ring-light p-8 rounded-lg hover:bg-white/10 hover:ring-primary/50 lg:hover:shadow-lg lg:hover:-translate-y-2 transition duration-300 ease-in cursor-pointer"
      }`}
    >
      <p className="text-primary text-xs lg:text-sm mb-1">{sub}</p>
      <h1 className="font-bold text-2xl lg:text-4xl text-white mb-1">
        {header}
      </h1>
      <p className="text-white/50 mb-4 text-sm lg:text-base">{desc}</p>
      {locked ? (
        <div className="bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg w-full h-52 flex justify-center items-center shadow-lg">
          <div className="flex flex-row items-center justify-center space-x-2">
            <IoIosLock className="text-white text-sm lg:text-lg" />
            <p className="text-white text-xs lg:text-sm">Awaiting Release</p>
          </div>
        </div>
      ) : (
        <img className="object-cover rounded-lg shadow-lg" src={img} alt="" />
      )}
      <div className="w-full flex-row flex space-x-2 items-center justify-start mt-4">
        {stack.map((tech) => {
          return (
            <div className="text-white/80 w-fit p-2 rounded-md bg-light text-xs">
              {tech}
            </div>
          );
        })}
      </div>
    </motion.a>
  );
};

const Work = () => {
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
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Section>
      <div
        name="Work"
        className="w-full min-h-screen flex flex-col justify-start items-center relative"
      >
        <motion.div
          className="flex w-full flex-col justify-center items-center lg:px-64 my-32"
          variants={container}
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <div className="overflow-hidden h-fit mb-8 lg:mb-12">
            <motion.h1
              className="font-bold text-white text-4xl lg:text-6xl"
              variants={container}
              initial="hidden"
              animate={controls}
            >
              Work
            </motion.h1>
          </div>
          <div className="w-full h-fit lg:h-[28rem] flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-4 lg:space-y-0 mb-4 lg:mb-8">
            <Project
              sub="Non-fungible Token"
              header="Haywire Wolves"
              desc="5,555 unique characters stored on the Ethereum blockchain."
              img="/images/top.jpeg"
              url="https://haywire-web.vercel.app/"
              stack={["react", "next", "tailwindcss", "solidity"]}
              id="1"
            />
            <Project
              sub="Team Portfolio"
              header="Enigma Labs"
              desc="Agile development teams for Web3 projects."
              img="/images/enigma.jpeg"
              url="https://enigma-portfolio.vercel.app/"
              stack={["react", "next", "tailwindcss"]}
              id="2"
            />
          </div>
          <div className="w-full h-fit lg:h-[28rem] flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-4 lg:space-y-0 mb-4 lg:mb-8">
            <Project
              sub="Web3 App"
              header="Good Morning"
              desc="Good Morning chat application that implements Web3 wallets."
              img="/images/gm.png"
              url="https://goodmorning-rouge.vercel.app/"
              stack={["react", "next", "tailwindcss", "moralis"]}
              id="3"
            />
            <Project
              sub="Gallery"
              header="Rick & Morty Gallery"
              desc="Gallery of all characters from the TV series, Rick and Morty."
              img="/images/rick.jpeg"
              url="https://rick-morty-gallery.vercel.app/"
              stack={["next", "tailwindcss", "apollo", "zustand"]}
              id="4"
            />
          </div>
          <div className="w-full h-fit lg:h-[28rem] flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-4 lg:space-y-0">
            <Project sub="Web3 Game" header="" locked stack={[]} id="5" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Work;
