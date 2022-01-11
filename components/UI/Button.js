import React from "react";

const Button = ({ text }) => {
  return (
    <div className="border-primary border-2 px-4 py-2 uppercase text-primary rounded-md cursor-pointer text-sm hover:bg-primary/10">
      {text}
    </div>
  );
};

export default Button;
