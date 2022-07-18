import React from "react";

const Button = ({ text }) => {
  return (
    <div className="border-white/20 border px-5 py-2 rounded-lg cursor-pointer hover:bg-white/10">
      <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
        {text}
      </div>
    </div>
  );
};

export default Button;
