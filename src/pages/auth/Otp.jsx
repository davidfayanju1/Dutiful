import React from "react";
import CommonLayout from "../../layout/CommonLayout";
import ButtonComp from "../../components/common/ButtonComp";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();

  return (
    <CommonLayout>
      <div className="bg-white py-10 max-w-[30rem] w-[95%] mx-auto">
        <div className="image_container mb-9 rounded-full relative h-[9rem] w-[9rem] flex items-center justify-center bg-[#F8F3FF] mx-auto">
          <img src="/svgs/email.svg" alt="" className="relative" />
          <img
            src="/svgs/greenTick.svg"
            alt=""
            className="absolute top-[20%] right-[20%]"
          />
        </div>

        <span className="block mx-auto text-[#686868] text-center md:w-[90%]">
          An OTP code has been sent to segunsolaru@gmail.com. Check your email
          to get the code
        </span>
        <ButtonComp
          text={"Next"}
          handlePress={() => navigate("/enterotp")}
          buttonStyle={"mb-[11rem] mt-8"}
        />
      </div>
    </CommonLayout>
  );
};

export default Otp;
