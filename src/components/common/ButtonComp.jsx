import React from "react";

const ButtonComp = ({ handlePress, text, buttonStyle }) => {
  return (
    <button
      onClick={handlePress}
      className={`${buttonStyle} bg-[#532F82] rounded-[6px] text-white h-[4rem] w-full`}
    >
      {text}
    </button>
  );
};

export default ButtonComp;
