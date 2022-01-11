import React from "react";
import Section from "./Section";
import Button from "./UI/Button";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <Section>
      <div className="w-full min-h-screen flex flex-col justify-center items-center relative">
        <FaTelegramPlane className="text-white outline-primary text-6xl mb-4" />
        <h1 className="text-primary text-6xl font-bold">Get In Touch</h1>
        <p className="text-white mt-2">
          Shoot me an email! I am always open to new opprotunities.
        </p>
        <div className="text-sm text-primary rounded-md flex justify-center items-center font-bold uppercase py-3 px-12 cursor-pointer border-2 border-primary mt-12 mb-16 hover:bg-primary/10">
          <p>Contact</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
