import React, { useState } from "react";
import CommonLayout from "../../layout/CommonLayout";
import InputComp from "../../components/common/InputComp";
import ButtonComp from "../../components/common/ButtonComp";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [form, setForm] = useState("");

  const navigate = useNavigate("/otp");

  return (
    <CommonLayout>
      <div className="bg-white py-10 max-w-[35rem] w-[95%] mx-auto">
        <div className="arrow_container mb-[4rem]">
          <img src="/svgs/arrow.svg" alt="" />
          <h1 className="font-semibold text-[2rem] mt-5 text-[#1E1E4B] font-serif text-left">
            Forgot Password
          </h1>
          <small className="text-[#686868] block text-left text-[1rem]">
            Enter your email and we'll send you a mail on how to reset your
            password
          </small>
        </div>

        <div className="form_container mb-[5rem]">
          <InputComp
            title={"Email"}
            label={"Email"}
            containerStyle={"mb-9"}
            value={form}
            handleChangeText={(e) => setForm(e.target.value)}
          />
          <ButtonComp
            handlePress={() => navigate("/otp")}
            text={"Send email"}
          />

          <span className="block text-center font-semibold text-gray-400">
            Or{" "}
            <Link to={"/login"} className="text-[#532F82]">
              Login
            </Link>
          </span>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ForgotPassword;
