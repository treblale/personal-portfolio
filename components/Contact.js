import React from "react";
import Section from "./Section";
import Button from "./UI/Button";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <Section>
      <div
        name="Contact"
        className="w-full min-h-screen flex flex-col justify-center items-center relative px-16 lg:px-0"
      >
        <FaTelegramPlane className="text-primary text-4xl lg:text-6xl mb-4" />
        <h1 className="text-white text-4xl lg:text-6xl font-bold">
          Get In Touch
        </h1>
        <p className="text-white/50 mt-2 mb-8 text-xs text-center lg:text-base lg:mb-12">
          Shoot me an email! I am always open to new opprotunities.
        </p>
        <div className="border-white/20 border px-12 py-3 rounded-full cursor-pointer hover:bg-white/10">
          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
            Say Hello
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
