import React, { useEffect, useState } from "react";
import Button from "./UI/Button";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-scroll";
import Sidebar from "./UI/Sidebar";
import Message from "./UI/Message";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [message, setMessage] = useState(false);

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  const copyCliboard = () => {
    navigator.clipboard.writeText("albertphongle@gmail.com");
    setMessage(true);
  };

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
  const side = sidebar ? "fixed" : "";
  const always =
    "w-full h-min-screen fixed flex backdrop-blur-md bg-black/5 flex-row justify-between items-center px-16 py-8 lg:px-32 z-50 transition-all overflow-hidden";

  const animate1 = sidebar ? "rotate-45 translate-y-1.5" : "";
  const animate2 = sidebar ? "-rotate-45 -translate-y-1" : "";

  return (
    <>
      <Sidebar open={sidebar} setOpen={setSidebar} />
      <Message
        text="Copied to clipboard"
        icon={<FiCopy />}
        open={message}
        set={setMessage}
      />
      <div className={`${bg} ${always} ${side}`}>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-black text-4xl">
          A
        </div>
        <div
          className="lg:hidden cursor-pointer flex flex-col justify-center items-center space-y-2"
          onClick={() => sidebarHandler()}
        >
          <div
            className={`${animate1} bg-white w-6 h-[2px] transition duration-300 ease-in`}
          />
          <div
            className={`${animate2} bg-white w-6 h-[2px] transition duration-300 ease-in`}
          />
        </div>
        <div className="hidden flex-row justify-center items-center space-x-10 lg:flex selection:bg-primary selection:text-black">
          <ul className="space-x-10 text-white text-sm">
            <li className="inline">
              <Link
                className="cursor-pointer rounded-lg py-1 px-2 hover:text-light"
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
                className="cursor-pointer rounded-lg py-1 px-2 hover:text-light"
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
                className="cursor-pointer rounded-lg py-1 px-2 hover:text-light"
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
      <div className="hidden lg:flex fixed left-12 bottom-12 flex-col justify-center items-start space-y-8 z-50">
        <a
          className="p-2 rounded-lg cursor-pointer group"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/treblale"
        >
          <FiGithub className="text-white text-xl group-hover:text-light" />
        </a>
        <a
          className="p-2 rounded-lg cursor-pointer group"
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/"
        >
          <FiLinkedin className="text-white text-xl  group-hover:text-light" />
        </a>
        <a
          className="p-2 rounded-lg cursor-pointer flex flex-row justify-center items-center relative hover:border-white/10 border-transparent border-[1px] group space-x-2"
          onClick={() => copyCliboard()}
        >
          <FiMail className="text-white text-xl  group-hover:text-light" />
          <p className="top-2.5 left-10 text-xs text-white hidden group-hover:inline">
            albertphongle@gmail.com
          </p>
        </a>
      </div>
    </>
  );
};

export default Navbar;
