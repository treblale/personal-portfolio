import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";

const Top = () => {
  const topTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className="fixed right-12 bottom-12 border-2 border-light rounded-full p-4 cursor-pointer group hover:bg-primary/10"
      onClick={() => topTop()}
    >
      <AiOutlineArrowUp className="text-primary text-xl" />
    </div>
  );
};

export default Top;
