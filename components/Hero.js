import React from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import Section from "./Section";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <Section>
      <div className="w-full min-h-screen flex flex-row justify-center items-center relative">
        <div className="absolute blur-[100px]  md:flex flex-row space-x-24 hidden ">
          <div className="w-[24rem] h-[30rem] bg-gradient-to-tr to-white/50 from-primary/50 opacity-40" />
          <div className="w-[24rem] h-[30rem] bg-gradient-to-tl to-white/50 from-secondary/50 opacity-40" />
        </div>
        <div className="flex flex-col justify-center items-center px-16 lg:px-32 z-10">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary text-5xl lg:text-9xl animate-gradient-x">
            Albert Le
          </h1>
          <p className="text-light text-sm lg:text-xl tracking mb-8 mt-2 lg:mb-12">
            Software Engineer & Fullstack Developer
          </p>
          <div className="bg-white rounded-lg flex justify-center font-semibold items-center text-black text-sm py-3 px-8 lg:py-3 lg:px-12 cursor-pointer mb-4 group hover:bg-transparent ring-1 ring-transparent hover:ring-white hover:text-white  transition ease-linear duration-200 shadow-sm">
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
