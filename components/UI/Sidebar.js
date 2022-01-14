import React, { useEffect } from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";

const Sidebar = ({ open, setOpen }) => {
  const closeSidbarHandler = () => {
    setOpen(false);
  };

  const sidebar = open ? "opacity-100" : "opacity-0 invisible";
  const always =
    "w-full min-h-screen flex flex-col justify-center items-center fixed bg-light/80 backdrop-blur-xl transition duration-300 ease-in z-50 lg:hidden";

  return (
    <div className={`${sidebar} ${always}`}>
      <Link
        className="text-white text-2xl font-bold cursor-pointer w-full flex flex-col items-start justify-center px-16 mb-4 group"
        to="About"
        smooth={true}
        duration={800}
        spy
        exact="true"
        offset={0}
        onClick={() => setOpen()}
      >
        About
        <div className="w-full h-[1px] bg-white/50 group-hover:bg-primary" />
      </Link>
      <Link
        className="text-white text-2xl font-bold cursor-pointer w-full flex flex-col items-start justify-center px-16 mb-4 group"
        to="Work"
        smooth={true}
        duration={800}
        spy
        exact="true"
        offset={0}
        onClick={() => setOpen()}
      >
        Work
        <div className="w-full h-[1px] bg-white/50 group-hover:bg-primary" />
      </Link>
      <Link
        className="text-white text-2xl font-bold cursor-pointer w-full flex flex-col items-start justify-center px-16 mb-12 group"
        to="Contact"
        smooth={true}
        duration={800}
        spy
        exact="true"
        offset={0}
        onClick={() => setOpen()}
      >
        Contact
        <div className="w-full h-[1px] bg-white/50 group-hover:bg-primary" />
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/treblale"
        className="w-full flex flex-col items-start justify-center px-16 mb-4 cursor-pointer group"
      >
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Github</h1>
          <FiGithub className="text-white text-xl" />
        </div>
        <div className="w-full h-[1px] bg-white/50 group-hover:bg-primary" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://linkedin.com/"
        className="w-full flex flex-col items-start justify-center px-16 mb-4 cursor-pointer group"
      >
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Linkedin</h1>
          <FiLinkedin className="text-white text-xl" />
        </div>
        <div className="w-full h-[1px] bg-white/50 group-hover:bg-primary" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:albertphongle@gmail.com"
        className="w-full flex flex-col items-start justify-center px-16 mb-4 cursor-pointer group"
      >
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Email</h1>
          <FiGithub className="text-white text-xl" />
        </div>
        <div className="w-full h-[1px] bg-white/50 group-hover:bg-primary" />
      </a>
    </div>
  );
};

export default Sidebar;
