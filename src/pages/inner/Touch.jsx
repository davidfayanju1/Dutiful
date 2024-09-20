import React, { useState } from "react";
import CommonLayout from "../../layout/CommonLayout";
import InputComp from "../../components/common/InputComp";
import ButtonComp from "../../components/common/ButtonComp";

const Touch = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    businessType: "",
    subject: "",
    writeMessage: "",
  });

  const handleSubmit = () => {
    console.log(form);
  };

  const items = [
    {
      name: "Customer Support",
      url: "/svgs/sms.svg",
      text: "Please fill out the form below",
    },

    {
      name: "Business address",
      url: "/svgs/map.svg",
      text: "Suites (C113 & C114) Akord Shopping Mall,Bogije, Elemoro, 101001, Lagos, Nigeria",
    },

    {
      name: "Phone number",
      url: "/svgs/call.svg",
      text: "+234 903 921 6724",
    },
  ];

  return (
    <CommonLayout>
      <div className="item_container min-h-screen">
        <div className="hero_section w-full">
          <img src="/svgs/touch.svg" alt="" className="w-full" />
        </div>

        <div className="item_card mx-auto md:mt-[-7rem] mt-[-2rem] z-10 absolute w-full gap-6 min-h-[20rem] md:px-8 px-3 flex md:flex-row flex-col items-center justify-between">
          {items.map((item) => (
            <div className="card_container md:w-[25%] w-full rounded-[7px] border-solid border-[1px] px-2 border-gray-300 bg-white min-h-[15rem] items-center justify-center flex flex-col gap-4">
              <div className="flex items-center justify-center gap-3">
                <img src={item.url} alt="" />
                <span className="title block font-semibold md:text-[1.8vw] text-[1.1rem]">
                  {item.name}
                </span>
              </div>
              <span className="block text-center text-[#656565]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className="form_container md:mt-[15rem] mt-[55rem] mx-auto md:max-w-[35rem] w-[95%] min-h-[20rem]">
          <InputComp
            value={form.fullName}
            label={"Full name"}
            title={"Name"}
            containerStyle={"mb-8"}
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
            label={"Business type (Optional)"}
            title={"BusinessType"}
            containerStyle={"mb-8"}
            value={form.businessType}
            handleChangeText={(e) =>
              setForm({ ...form, businessType: e.target.value })
            }
          />

          <InputComp
            label={"Subject"}
            title={"Subject"}
            containerStyle={"mb-8"}
            value={form.subject}
            handleChangeText={(e) =>
              setForm({ ...form, subject: e.target.value })
            }
          />

          <InputComp
            label={"Write your message"}
            title={"Message"}
            containerStyle={"mb-[5rem]"}
            value={form.message}
            handleChangeText={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <ButtonComp
            handlePress={handleSubmit}
            text={"Send message"}
            buttonStyle={"mb-[8rem]"}
          />
        </div>
      </div>
    </CommonLayout>
  );
};

export default Touch;
