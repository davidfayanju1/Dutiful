import React from "react";
import CommonLayout from "../../layout/CommonLayout";
import ButtonComp from "../../components/common/ButtonComp";

const Plans = () => {
  const plans = [
    {
      name: "Free",
      title: "Basic",
      perks: [
        "Access to dashboard",
        "Add up to 2 businesses",
        "Add up to 2 products/services",
        "Add up to 2 Images",
        "Unlimited keywords",
        "Display service hours and prices",
        "Display address, contact and email",
        "Instant chat",
        "Reviews and ratings",
        "Profile visibility",
        "Instant notifications",
        "Display website and social network",
        "Quotes",
        "Bookmarks",
      ],
    },

    {
      currency: "NGN",
      name: "20, 000/year",
      title: "Standard",
      perks: [
        "Access to dashboard",
        "Add up to 2 businesses",
        "Add up to 2 products/services",
        "Add up to 2 Images",
        "Unlimited keywords",
        "Display service hours and prices",
        "Display address, contact and email",
        "Instant chat",
        "Reviews and ratings",
        "Profile visibility",
        "Instant notifications",
        "Display website and social network",
        "Quotes",
        "Bookmarks",
        "Number of  profile views",
        "Verified badge (purple)",
        "Accept & Sell appointment",
        "Latest offers",
      ],
    },
    {
      currency: "NGN",
      name: "30, 000/year",
      title: "Premium",
      perks: [
        "Access to dashboard",
        "Add up to 2 businesses",
        "Add up to 2 products/services",
        "Add up to 2 Images",
        "Unlimited keywords",
        "Display service hours and prices",
        "Display address, contact and email",
        "Instant chat",
        "Reviews and ratings",
        "Profile visibility",
        "Instant notifications",
        "Display website and social network",
        "Quotes",
        "Bookmarks",
        "Number of  profile views",
        "Verified badge (purple)",
        "Accept & Sell appointment",
        "Latest offers",
        "24/7 service and support",
      ],
    },
  ];

  return (
    <CommonLayout>
      <div className="hero_text text-center pt-[3rem]">
        <h1 className="font-semibold text-[#1E1E4B] font-serif md:text-[2rem] text-[1.4rem] mb-3 text-center">
          Plans to Suit Your Business Budget
        </h1>
        <span className="block text-[#656565] mb-9 md:w-[50%] mx-auto w-[95%]">
          Our fully organized plans deliver valuable content that showcases your
          services and skills, drives Lead, covers all features, and gives
          customers a clear idea to be able to choose your services.
        </span>
      </div>

      <section className="w-full bg-[#FCFAFF] mx-auto md:p-[4rem] p-[1rem] min-h-[100vh]">
        <div className="cards_container flex md:flex-row flex-col gap-[3rem] items-start justify-center">
          {plans.map((item) => (
            <div
              className="item_card h-full px-3 py-[4rem] md:w-[25%] w-full rounded-[8px] bg-white"
              key={item.name}
            >
              <small className="font-semibold text-[1rem] mb-3">
                {item.title}
              </small>

              <div className="text_container flex gap-1 items-start">
                <small className="block text-[.9rem] mt-1">
                  {item.currency && item.currency}
                </small>
                <h1 className="font-serif font-bold text-[1.7rem] mb-4">
                  {item.name}
                </h1>
                <div className="small"></div>
              </div>

              <ButtonComp text={"Get Started"} buttonStyle={"mb-9"} />

              <div className="perks_container">
                {item.perks.map((item) => (
                  <span className="flex mb-8 items-center justify-start gap-4">
                    <img src="/svgs/mark.svg" alt="" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="features_overview mt-8">
          <h1 className="font-semibold text-[1.5rem] ">Features Overview </h1>
        </section>
      </section>
    </CommonLayout>
  );
};

export default Plans;
