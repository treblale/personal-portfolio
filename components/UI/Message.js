import React from "react";

const Message = ({ text, icon, open, set }) => {
  const message = open ? "opacity-100 visible" : "opacity-0 invisible";
  const always =
    "w-full flex items-center fixed justify-center bottom-12 z-50 transition duration-300 delay-100 ease-in";

  setTimeout(() => {
    set(false);
  }, 5000);

  return (
    <div className={`${message} ${always}`}>
      <div className="flex flex-row justify-center items-center space-x-2 py-2 px-3 bg-white rounded-full shadow-lg select-none">
        <div className="text-dark">{icon}</div>
        <p className="text-dark text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Message;
