import React, { useState } from "react";

const InputComp = ({
  title,
  containerStyle,
  textColor,
  label,
  value,
  handleChangeText,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {label && (
        <label
          htmlFor={title}
          className="text-[#603F8B] mb-3 font-semibold block"
        >
          {label}
        </label>
      )}

      <div
        className={` ${containerStyle}  min-h-[3rem] bg-gray-50 border-gray-200 rounded-[6px] border-solid border-[1px] flex items-center justify-center`}
      >
        <input
          type={title === "Password" ? (open ? "text" : "password") : "text"}
          className={`${textColor} bg-transparent outline-none px-4 text-[16px] h-full ${
            title === "Password" ? "w-[88%]" : "w-full"
          }`}
          value={value}
          onChange={handleChangeText}
        />

        {title === "Password" && (
          <div className="item_container ">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <img src="/svgs/eyeOpen.svg" alt="" />
              ) : (
                <img src="/svgs/eyeClose.svg" alt="" />
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default InputComp;
