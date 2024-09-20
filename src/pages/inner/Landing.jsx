import React from "react";
import CommonLayout from "../../layout/CommonLayout";

const Landing = () => {
  return (
    <CommonLayout>
      <div className="hero_item_container md:flex-row flex-col md:px-10 px-4 min-h-[20rem] py-4 flex items-center justify-between">
        <header className="md:w-[45%] w-full  block">
          <h1 className="font-semibold font-serif mb-2 md:text-[2.3rem] text-[2rem]">
            List and grow your business  with just few clicks
          </h1>
          <span className="font-semibold text-[#383838]">
            Eliminate manual work and save time by listing your business or
            service on the best business directory in Nigeria.
          </span>
        </header>
        <figure className="image_container md:w-[40%] w-full">
          <img src="/svgs/phone.svg" alt="" className="w-full md:h-[35rem]" />
        </figure>
      </div>

      <div className="hero_item_container  md:flex-row flex-col md:px-10 px-4 min-h-[20rem] py-4 flex items-center justify-between gap-5">
        <div className="images_container  relative">
          <img src="/svgs/ellipse.svg" alt="" className="relative" />
          <img
            src="/svgs/pic1.svg"
            alt=""
            className="absolute md:top-[10%] top-[2%] left-[10%] md:left-[16%]"
          />
          <img
            src="/svgs/pic2.svg"
            alt=""
            className="absolute top-[30%] md:right-[5%] right-0"
          />
          <img
            src="/svgs/pic3.svg"
            alt=""
            className="absolute bottom-[15%] md:left-[20%] left-0"
          />
        </div>
        <div className="text_container md:w-[45%] w-full">
          <span className="md:font-bold font-semibold text-[#1E1E4B] font-serif md:text-[2rem] text-[2rem]">
            Collect reviews and ratings from customers
          </span>
          <small className="block self-start">
            Accelerate your business reputation by 90% and gain social
            proof through reviews and ratings requested from customers.
          </small>
        </div>
      </div>

      <div className="item_container md:min-h-[20rem] w-full min-h-full md:p-8 p-4">
        <img
          src="/images/hero2.png"
          alt=""
          className="w-full md:h-[45rem] h-full"
        />
      </div>

      <div className="item_container min-h-[20rem] w-full md:px-[5rem] px-4 py-[4rem] flex items-start justify-between md:gap-[3rem] gap-[1rem] md:flex-row flex-col">
        <div className="image_card">
          <div className="image_container">
            <img src="/images/people.png" alt="" />
          </div>
          <div className="item flex items-start gap-4">
            <div className="image_container">
              <img src="/images/calendar.png" alt="" />
            </div>
            <div className="image_container">
              <img src="/images/time.png" alt="" />
            </div>
          </div>
        </div>

        <div className="text_container  md:w-[45%] w-full mt-[4rem]">
          <span className="md:font-bold font-semibold text-[#1E1E4B] font-serif md:text-[2rem] text-[2rem]">
            Accept and sell appointments
          </span>
          <small className="block self-start">
            Let customers book their own appointment or consultation. Start
            accepting payments for appointments through your booking page.
          </small>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Landing;
