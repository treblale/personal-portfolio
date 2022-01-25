import React from "react";
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

const Tech = () => {
  return (
    <Section>
      <div className="w-full h-fit flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-white text-4xl lg:text-6xl text-center mb-2 my-8">
            Tech Stack
          </h1>
          <p className="text-white/50 mb-4 lg:mb-12 text-xs lg:text-base">
            Recent technologies that I have learned and used.
          </p>
          <div className="w-full flex flex-wrap lg:flex-nowrap lg:flex-row justify-center items-center lg:space-x-12 mb-4">
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiJava className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiJavascript className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
            <div className="w-full lg:hidden"></div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <FaReact className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiNextdotjs className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <FaHtml5 className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiTailwindcss className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
            <div className="rounded-full p-6 hover:bg-light hover:shadow-lg hover:scale-110 transition-all group">
              <SiStyledcomponents className="text-white/50 lg:text-5xl text-4xl group-hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
