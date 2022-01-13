import React, { useEffect, useState } from "react";
import Button from "./UI/Button";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

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
    "absolute w-full h-min-screen flex flex-row justify-between items-center px-16 py-8 lg:px-32 z-50 transition-all";

  return (
    <>
      <div className={`${bg} ${always}`}>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 font-black text-4xl">
          A
        </div>
        <div className="lg:hidden cursor-pointer">
          <FaBars className="text-white" />
        </div>
        <div className="hidden flex-row justify-center items-center space-x-10 lg:flex">
          <ul className="space-x-10 text-secondary text-sm">
            <li className="inline">
              <Link
                className="cursor-pointer rounded-full py-1 px-2 hover:text-white/50"
                to="About"
                smooth={true}
                duration={800}
                spy
                exact="true"
                offset={0}
              >
                About
              </Link>
            </li>
            <li className="inline">
              <Link
                className="cursor-pointer rounded-full py-1 px-2 hover:text-white/50"
                to="Work"
                smooth={true}
                duration={800}
                spy
                exact="true"
                offset={0}
              >
                Work
              </Link>
            </li>
            <li className="inline">
              <Link
                className="cursor-pointer rounded-full py-1 px-2 hover:text-white/50"
                to="Contact"
                smooth={true}
                duration={800}
                spy
                exact="true"
                offset={0}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Button text="Resume" />
        </div>
      </div>
      <div className="hidden lg:flex fixed left-12 bottom-12 flex-col justify-center items-center space-y-8 z-50">
        <div className="p-2 rounded-full cursor-pointer group">
          <FiGithub className="text-secondary text-xl group-hover:text-white/50" />
        </div>
        <div className="p-2 rounded-full cursor-pointer group">
          <FiLinkedin className="text-secondary text-xl  group-hover:text-white/50" />
        </div>
        <div className="p-2 rounded-full cursor-pointer group">
          <FiMail className="text-secondary text-xl  group-hover:text-white/50" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
