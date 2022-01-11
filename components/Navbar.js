import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./UI/Button";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // const changeNavbar = () => {
  //   if (window.scrollY >= 150) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavbar);
  // }, []);

  const bg = navbar ? "backdrop-blur-xl" : "bg-transparent";
  const always =
    "absolute w-full h-min-screen flex flex-row justify-between items-center py-8 px-32 z-50 transition-all";

  return (
    <>
      <div className={`${bg} ${always}`}>
        <div className="text-primary font-black text-4xl">A</div>
        <div className="flex flex-row justify-center items-center space-x-8">
          <ul className="space-x-8 text-secondary text-sm uppercase">
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-black">
              About
            </li>
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-black">
              Work
            </li>
            <li className="inline cursor-pointer rounded-md py-1 px-2 hover:bg-primary hover:text-black">
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
