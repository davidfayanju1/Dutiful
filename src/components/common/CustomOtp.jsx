import React, { useState } from "react";

const CustomOtp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeInput, setActiveInput] = useState(0);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value.length === 1 && index < 3) {
      setActiveInput(index + 1);
    }
  };

  return (
    <div className="flex justify-between gap-3">
      {otp.map((item, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={item}
          onChange={(e) => handleChange(e, index)}
          className={`w-[5rem] h-[5rem] text-center rounded-[10px] bg-[#F3F3F3] border-[#B6B6E5] border-2  ${
            activeInput === index ? "focus:outline-none" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default CustomOtp;
