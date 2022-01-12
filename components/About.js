import React from "react";
import Section from "./Section";
import { FaReact, FaHtml5, FaHandsHelping } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";

const About = () => {
  return (
    <Section>
      <div
        name="About"
        className="w-full min-h-screen flex flex-row justify-between items-center relative px-64"
      >
        <div className="flex flex-col justify-start items-start w-[26rem] rounded-md ">
          <h1 className="font-bold text-white text-6xl mb-4">About Me</h1>
          <p className="text-white/50 text-left text-lg">
            Hello, my name is Albert Le, I am a{" "}
            <span className="text-primary font-bold">software engineer</span>{" "}
            with experience in the latest web technologies. I started my journey
            as a developer back in 2020 when I found my passion for developing
            <span className="text-primary font-bold"> web applications</span>.
            Since then I have been continously expanding my knowledge and
            improving my technical skills.
          </p>
        </div>
        <div className="flex justify-center items-center rounded-full bg-light shadow-lg p-8">
          <img className="w-80" src="/images/Chip.png" alt="" />
        </div>
      </div>
    </Section>
  );
};

export default About;
