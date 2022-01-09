import React from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-row justify-center items-center relative">
      <div className="flex flex-col justify-center items-center px-32">
        {/* <h3 className="text-secondary text-xl">Welcome, my name is</h3> */}
        <h1 className="font-black text-primary uppercase text-9xl">
          Albert Le
        </h1>
        <h2 className="text-secondary uppercase text-2xl tracking mb-12">
          Software engineer & Fullstack Developer
        </h2>
        <div className="bg-primary rounded-md flex justify-center items-center text-white text-sm font-bold uppercase py-3 px-16 cursor-pointer mb-4">
          resume
        </div>
        {/* <div className="flex flex-row justify-center items-center space-x-16">
        <FiGithub className="text-secondary text-xl" />
        <FiLinkedin className="text-secondary text-xl" />
        <FiMail className="text-secondary text-xl" />
      </div> */}
      </div>
      <div className="absolute w-full bottom-12 flex justify-center items-center">
        <RiArrowDownSFill className="text-white text-3xl animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
