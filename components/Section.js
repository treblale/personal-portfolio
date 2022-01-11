import React from "react";
import { motion } from "framer-motion";

const Section = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };
  return (
    <motion.article
      className="relative"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      {children}
    </motion.article>
  );
};

export default Section;
