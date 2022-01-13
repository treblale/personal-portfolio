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
      <div className="w-full h-fit flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-white text-6xl text-center mb-2">
            Tech Stack
          </h1>
          <p className="text-white/50 mb-12 ">
            Recent technologies that I have learned and used.
          </p>
          <div className="w-full flex flex-row justify-center items-center space-x-12 mb-4">
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiStyledcomponents className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiGraphql className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiApollographql className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <FaReact className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <FaHtml5 className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiTailwindcss className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiNextdotjs className="text-white/50 text-5xl group-hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
