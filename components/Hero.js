import React from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import Section from "./Section";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <Section>
      <div className="w-full min-h-screen flex flex-row justify-center items-center relative">
        <div className="flex flex-col justify-center items-center px-32">
          {/* <h3 className="text-secondary text-xl">Welcome, my name is</h3> */}
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 text-9xl ">
            Albert Le
          </h1>
          <h2 className="text-white/50 text-xl tracking mb-12">
            Software Engineer & Fullstack Developer
          </h2>
          <div className="bg-primary rounded-full flex justify-center font-bold items-center text-black text-sm py-3 px-12 cursor-pointer mb-4 hover:-translate-y-2 group transition ease-in duration-300 shadow-sm">
            <p>View Resume</p>
          </div>
          {/* <div className="flex flex-row justify-center items-center space-x-16">
        <FiGithub className="text-secondary text-xl" />
        <FiLinkedin className="text-secondary text-xl" />
        <FiMail className="text-secondary text-xl" />
      </div> */}
        </div>
        <div className="absolute w-full bottom-12 flex justify-center items-center">
          <BiChevronDown className="text-white/50 text-2xl animate-bounce" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
