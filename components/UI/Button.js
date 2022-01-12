import React from "react";

const Button = ({ text }) => {
  return (
    <div className="border-white/20 border px-5 py-2 rounded-full cursor-pointer hover:bg-primary/10">
      <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
        {text}
      </div>
    </div>
  );
};

export default Button;
