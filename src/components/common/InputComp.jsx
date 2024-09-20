import React, { useState } from "react";

const InputComp = ({
  title,
  containerStyle,
  textColor,
  label,
  value,
  handleChangeText,
  areaTextColor,
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
        {title === "Message" ? (
          <textarea
            className={`${areaTextColor} bg-transparent rounded-[6px] outline-none px-2 py-2 text-black text-[16px] w-full`}
            cols={100}
          />
        ) : title === "Subject" ? (
          <select name="" id="" className="w-[95%] bg-transparent outline-none">
            <option value=""></option>
            <option value=""></option>
          </select>
        ) : (
          <input
            type={title === "Password" ? (open ? "text" : "password") : "text"}
            className={`${textColor} bg-transparent outline-none px-4 text-[16px] h-full ${
              title === "Password" ? "w-[88%]" : "w-full"
            }`}
            value={value}
            onChange={handleChangeText}
          />
        )}

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
