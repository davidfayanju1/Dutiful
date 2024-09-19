import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const company = [
    {
      name: "About",
      route: "/",
    },
    {
      name: "Contact Us",
      route: "/",
    },
    {
      name: "FAQs",
      route: "/",
    },
  ];

  const quickLinks = [
    {
      name: "Find Services",
      route: "/",
    },
    {
      name: "Pricing & Plans",
      route: "/",
    },
    {
      name: "List your business",
      route: "/",
    },
  ];

  const resources = [
    {
      name: "Blog",
      route: "/",
    },
    {
      name: "Affiliate Program",
      route: "/",
    },
  ];

  const more = [
    {
      name: "Dutiful Jobs",
      route: "/",
    },
  ];

  return (
    <footer className="bg-[#532F82] min-h-[27rem] md:px-[8rem] px-[1rem] py-[6rem]">
      <div className="item_container flex items-start flex-wrap gap-4 justify-between">
        <div className="card_container">
          <div className="title mb-5 font-semibold text-white text-[1.3rem]">
            Company
          </div>
          <ul>
            {company.map((item) => (
              <Link to={item.route} className="block text-[#B6B6E5] mb-4">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="card_container">
          <div className="title mb-5 font-semibold text-white text-[1.3rem]">
            Quick links
          </div>
          <ul>
            {quickLinks.map((item) => (
              <Link to={item.route} className="block text-[#B6B6E5] mb-4">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="card_container">
          <div className="title mb-5 font-semibold text-white text-[1.3rem]">
            Resources
          </div>
          <ul>
            {resources.map((item) => (
              <Link to={item.route} className="block text-[#B6B6E5] mb-4">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="card_container">
          <div className="title mb-5 font-semibold text-white text-[1.3rem]">
            More from Dutiful
          </div>
          <ul>
            {more.map((item) => (
              <Link to={item.route} className="block text-[#B6B6E5] mb-4">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="lnks_container border-y-2 border-[#63428E] flex items-center justify-between md:flex-row flex-row flex-wrap gap-6 min-h-[7rem] mt-5">
        <div className="items_container flex items-center gap-3">
          <span className="block text-white font-semibold">Follow Us</span>
          <Link to={"/facebook.com"}>
            <img src="/svgs/facebook.svg" alt="" />
          </Link>
          <Link to={"/instagram.com"}>
            <img src="/svgs/instagram.svg" alt="" />
          </Link>
          <Link to={"/twitter.com"}>
            <img src="/svgs/twitter.svg" alt="" />
          </Link>
          <Link to={"/youtube.com"}>
            <img src="/svgs/youtube.svg" alt="" />
          </Link>
          <Link to={"/linkedin.com"}>
            <img src="/svgs/Linkedin.svg" alt="" />
          </Link>
        </div>

        <div className="download_container flex items-center gap-3">
          <span className="block text-white font-semibold">
            Download the app
          </span>
          <Link to={"/"}>
            <img src="/svgs/apple.svg" alt="" />
          </Link>
          <Link to={"/"}>
            <img src="/svgs/playstore.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="copyright_container mt-5 flex md:flex-row flex-col flex-wrap items-center gap-10">
        <span className="text-white">&#169; 2022 Dutiful &reg;</span>
        <div className="links_flex flex items-center md:gap-3 gap-2">
          <Link to={"/"} className="block text-[#B6B6E5]">
            Terms of Service
          </Link>
          <Link to={"/"} className="block text-[#B6B6E5]">
            Privacy Policy
          </Link>
          <Link to={"/"} className="block text-[#B6B6E5]">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
