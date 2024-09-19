import React, { useState, useEffect } from "react";
import CommonLayout from "../../layout/CommonLayout";
import InputComp from "../../components/common/InputComp";
import ButtonComp from "../../components/common/ButtonComp";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(form);
  };

  return (
    <CommonLayout>
      <div className="bg-white py-10 max-w-[30rem] w-[95%] mx-auto">
        <div className="words_container w-full">
          <small className="text-[#686868] block text-left">
            jump right back in
          </small>
          <h1 className="font-semibold text-[2rem] text-[#1E1E4B] font-serif text-left">
            Login
          </h1>
        </div>

        <div className="form_container">
          <InputComp
            label={"Email"}
            title={"Email"}
            containerStyle={"mb-8"}
            value={form.email}
            handleChangeText={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <InputComp
            label={"Password"}
            title={"Password"}
            containerStyle={"mb-2"}
            value={form.password}
            handleChangeText={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <span className="text-right block text-[#A16AE8]">
            <Link to={"/forgotpassword"}>Forgot Password?</Link>
          </span>

          <ButtonComp
            handlePress={handleLogin}
            text={"Login"}
            buttonStyle={"mt-10 mb-[5rem]"}
          />
        </div>
      </div>
    </CommonLayout>
  );
};

export default Login;
