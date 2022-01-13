import React from "react";
import Section from "./Section";
import { IoIosLock } from "react-icons/io";

const Project = ({ sub, header, desc, img, locked }) => {
  return (
    <div
      className={`${
        locked
          ? "w-[28rem] h-full flex flex-col justify-center items-start border-2 border-light p-8 rounded-lg hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in cursor-not-allowed"
          : "w-[28rem] h-full flex flex-col justify-center items-start border-2 border-light p-8 rounded-lg hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in cursor-pointer"
      }`}
    >
      <p className="text-primary text-sm mb-1">{sub}</p>
      <h1 className="font-bold text-4xl text-white mb-1">{header}</h1>
      <p className="text-white/50 mb-4">{desc}</p>
      {locked ? (
        <div className="bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg w-full h-52 flex justify-center items-center shadow-lg">
          <div className="flex flex-row items-center justify-center space-x-2">
            <IoIosLock className="text-white text-lg" />
            <p className="text-white text-sm">Awaiting Release</p>
          </div>
        </div>
      ) : (
        <img className="object-cover rounded-lg shadow-lg" src={img} alt="" />
      )}
    </div>
  );
};

const Work = () => {
  return (
    <Section>
      <div
        name="Work"
        className="w-full min-h-screen flex flex-col justify-start items-center relative "
      >
        <div className="flex w-full flex-col justify-center items-center px-64 mt-32">
          <h1 className="font-bold text-white text-6xl mb-12">Work</h1>
          <div className="w-full h-[28rem] flex flex-row justify-between items-center mb-8">
            <Project
              sub="Non-fungible Token"
              header="Haywire Wolves"
              desc="5,555 unique characters stored on the Ethereum blockchain."
              img="/images/top.jpeg"
            />
            <Project
              sub="Team Portfolio"
              header="Enigma Labs"
              desc="Agile development teams for Web3 projects."
              img="/images/enigma.jpeg"
            />
          </div>
          <div className="w-full h-[28rem] flex flex-row justify-between items-center">
            <Project
              sub="Web3 Game"
              header="Monke"
              desc="Agile development teams for Web3 projects."
              locked
            />
            <Project
              sub="Web3 Game"
              header="Monke"
              desc="Agile development teams for Web3 projects."
              locked
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
