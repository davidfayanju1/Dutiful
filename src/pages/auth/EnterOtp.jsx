import React, { useState } from "react";
import CommonLayout from "../../layout/CommonLayout";
import ButtonComp from "../../components/common/ButtonComp";
import { Link, useNavigate } from "react-router-dom";
import OtpBox from "react-otp-box";

const EnterOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleChange = (value) => {
    setOtp(value);
  };

  return (
    <CommonLayout>
      <div className="bg-white py-10 max-w-[30rem] w-[95%] mx-auto">
        <div className="input_container mt-[10rem] mb-5">
          <OtpBox values={otp} onChange={handleChange} numInputs={8} />
        </div>
        <span className="block mx-auto text-[#686868] text-center md:w-[90%]">
          Enter OTP code that was sent to your email, segunsolaru@gmail.com.
        </span>

        <ButtonComp
          text={"Confirm Otp"}
          handlePress={() => navigate("/resetpassword")}
          buttonStyle={"mt-8"}
        />
        <span className="block text-center mb-[11rem] mt-3 font-semibold text-gray-400">
          Didn't get a code{" "}
          <Link to={"/login"} className="text-[#532F82]">
            Resend
          </Link>
        </span>
      </div>
    </CommonLayout>
  );
};

export default EnterOtp;
