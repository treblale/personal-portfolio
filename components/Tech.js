import React from "react";
import Section from "./Section";
import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";

const Tech = () => {
  return (
    <Section>
      <div className="w-full h-96 flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-primary text-6xl text-center mb-2">
            Tech Stack
          </h1>
          <p className="text-white mb-12 ">
            Recent technologies that I have learned and used.
          </p>
          <div className="w-full flex flex-row justify-center items-center space-x-4 mb-4">
            <div className="bg-primary rounded-md py-4 px-8">
              <SiStyledcomponents className="text-black text-6xl" />
            </div>
            <div className="bg-primary rounded-md py-4 px-8">
              <SiGraphql className="text-black text-6xl" />
            </div>
            <div className="bg-primary rounded-md py-4 px-8">
              <SiApollographql className="text-black text-6xl" />
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center space-x-4">
            <div className="bg-primary rounded-md py-4 px-8">
              <FaReact className="text-black text-6xl" />
            </div>
            <div className="bg-primary rounded-md py-4 px-8">
              <FaHtml5 className="text-black text-6xl" />
            </div>
            <div className="bg-primary rounded-md py-4 px-8">
              <SiTailwindcss className="text-black text-6xl" />
            </div>
            <div className="bg-primary rounded-md py-4 px-8">
              <SiNextdotjs className="text-black text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
