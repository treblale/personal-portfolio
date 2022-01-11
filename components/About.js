import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section>
      <div className="w-full min-h-screen flex flex-row justify-center items-start relative px-64 pt-32">
        <div className="flex flex-col justify-center items-start w-96">
          <h1 className="font-black text-primary text-6xl mb-4 uppercase">
            About Me
          </h1>
          <p className="text-white">
            Hello, my name is Albert Le, I am a software engineer with
            experience in the latest web technologies.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
