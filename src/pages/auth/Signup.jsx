import React, { useState } from "react";
import CommonLayout from "../../layout/CommonLayout";
import InputComp from "../../components/common/InputComp";
import ButtonComp from "../../components/common/ButtonComp";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    const { fullName, email, number, password, confirmPassword } = form;

    console.log(form, "form");
  };

  const [paid, setPaid] = useState(true);

  return (
    <CommonLayout>
      <div className="page_container py-10 max-w-[30rem] w-[95%] mx-auto">
        <div className="words_container w-full">
          <small className="text-[#686868] block text-left">
            Sign up for free!
          </small>
          <h1 className="font-semibold text-[2rem] text-[#1E1E4B] font-serif text-left">
            Signup
          </h1>
        </div>

        <div className="icon_container hidden my-10 md:flex items-center gap-4">
          <button
            onClick={() => setPaid(false)}
            className={`border-solid relative rounded-[6px]  ${
              !paid
                ? "border-[#603F8B] text-[#603F8B]"
                : "border-[#EEEEFF] text-[#EEEEFF]"
            } h-[3.6rem] w-[10rem] border-[1px] flex items-center justify-center font-semibold gap-4`}
          >
            <img src={`/svgs/${paid ? "ProfileGray" : "Profile"}.svg`} alt="" />
            Regular User
            {!paid && (
              <div className="item absolute top-[-30%] right-[-10%]">
                <img src="/svgs/tick.svg" alt="" />
              </div>
            )}
          </button>

          <button
            onClick={() => setPaid(true)}
            className={`text-[#603F8B] relative rounded-[6px] ${
              paid
                ? "border-[#603F8B] text-[#603F8B]"
                : "border-[#EEEEFF] text-[#EEEEFF]"
            }  h-[3.6rem] w-[14rem] border-[1px] flex items-center justify-center font-semibold gap-4`}
          >
            <img src={`/svgs/${paid ? "home" : "homeGray"}.svg`} alt="" />
            Service Provider
            {paid && (
              <div className="item absolute top-[-30%] right-[-10%]">
                <img src="/svgs/tick.svg" alt="" />
              </div>
            )}
          </button>
        </div>

        <div>
          <select
            name="user"
            id=""
            className="dropdown_component md:hidden block border-solid border-[#603F8B] border-[1.5px] rounded-[6px] w-[13rem] px-[1rem] outline-none min-h-[3rem] my-auto"
          >
            <option value="Regular User"> Regular User</option>
            <option value="Service Provider"> Service Provider</option>
          </select>
        </div>

        <div className="user_container mt-5">
          <InputComp
            label={"Full Name"}
            title={"Full Name"}
            containerStyle={"mb-8"}
            value={form.fullName}
            handleChangeText={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
          />
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
            label={"Phone Number"}
            title={"Phone Number"}
            containerStyle={"mb-8"}
            value={form.number}
            handleChangeText={(e) =>
              setForm({ ...form, number: e.target.value })
            }
          />

          <InputComp
            label={"Password"}
            title={"Password"}
            containerStyle={"mb-8"}
            value={form.password}
            handleChangeText={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <InputComp
            label={"Confirm Password"}
            title={"Password"}
            containerStyle={"mb-8"}
            value={form.confirmPassword}
            handleChangeText={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <div className="item_container flex items-center gap-3">
            <input type="checkbox" />
            <small className="">
              I agree to Dutiful's <Link to="/">terms and Conditions</Link>
            </small>
          </div>

          <ButtonComp
            handlePress={handleSubmit}
            text={"Sign up"}
            buttonStyle={"mt-8"}
          />

          <small className="block text-[#A3B1BF] mt-2 mb-[4rem] text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#A16AE8]">
              Login
            </Link>
          </small>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Signup;
