import React from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import Section from "./Section";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <Section>
      <div className="w-full min-h-screen flex flex-row justify-center items-center relative">
        <div className="flex flex-col justify-center items-center px-16 lg:px-32">
          <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 via-indigo-200 text-5xl lg:text-9xl animate-gradient-x">
            Albert Le
          </h1>
          <p className="text-light text-sm lg:text-xl tracking mb-8 mt-2 lg:mb-12">
            Software Engineer & Fullstack Developer
          </p>
          <div className="bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg flex justify-center font-bold items-center text-black text-sm py-3 px-8 lg:py-3 lg:px-12 cursor-pointer mb-4 hover:scale-90 group hover:bg-white/50 transition ease-in duration-300 shadow-sm">
            <p>View Resume</p>
          </div>
        </div>
        <div className="absolute w-full bottom-12 flex justify-center items-center">
          <BiChevronDown className="text-white/50 text-2xl animate-bounce" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
