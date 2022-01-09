import Link from "next/link";
import React from "react";
import Button from "./UI/Button";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-min-screen flex flex-row justify-between items-center py-8 px-32 z-50">
        <div className="text-primary font-black text-4xl">A</div>
        <div className="flex flex-row justify-center items-center space-x-8">
          <ul className="space-x-8 text-secondary text-xs uppercase">
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-white">
              About
            </li>
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-white">
              Skills
            </li>
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-white">
              Work
            </li>
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-white">
              Contact
            </li>
          </ul>
          <Button text="Resume" />
        </div>
      </div>
      <div className="fixed left-12 bottom-12 flex flex-col justify-center items-center space-y-8 z-50">
        <div className="p-2 rounded-md cursor-pointer group">
          <FiGithub className="text-secondary text-xl group-hover:text-primary" />
        </div>
        <div className="p-2 rounded-md cursor-pointer group">
          <FiLinkedin className="text-secondary text-xl  group-hover:text-primary" />
        </div>
        <div className="p-2 rounded-md cursor-pointer group">
          <FiMail className="text-secondary text-xl  group-hover:text-primary" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
