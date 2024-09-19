import React, { useState } from "react";
import CommonLayout from "../../layout/CommonLayout";
import InputComp from "../../components/common/InputComp";
import ButtonComp from "../../components/common/ButtonComp";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <CommonLayout>
      <div className="bg-white py-10 max-w-[30rem] w-[95%] mx-auto">
        <div className="words_container w-full">
          <h1 className="font-semibold text-[2rem] text-[#1E1E4B] font-serif text-left">
            Reset Password
          </h1>
          <small className="text-[#686868] block text-left">
            Set your new password
          </small>
        </div>

        <div className="form_container mt-8">
          <InputComp
            label={"Enter new password"}
            title={"Password"}
            containerStyle={"mb-8"}
            value={form.password}
            handleChangeText={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <InputComp
            label={"Re-enter new password"}
            title={"Password"}
            containerStyle={"mb-8"}
            value={form.confirmPassword}
            handleChangeText={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <ButtonComp
            handlePress={handleSubmit}
            text={"Reset password"}
            buttonStyle={"mt-10"}
          />

          <span className="block text-center font-semibold text-gray-400 mb-[5rem]">
            Or{" "}
            <Link to={"/signup"} className="text-[#532F82]">
              Create new account
            </Link>
          </span>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ResetPassword;
