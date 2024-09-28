import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="nav_container fixed top-0 left-0 w-full z-50 bg-white min-h-[6rem] px-[2rem] flex items-center justify-between">
      <div className="item_container">
        <img src="/images/CompanyLogo.png" alt="company-logo" className="" />
      </div>
      <nav className="nav_container md:block hidden">
        <ul className="">
          <li className="flex items-center justify-center gap-4">
            <Link to="/" className="text-[#686868] font-semibold">
              Business Directory
            </Link>
            <Link to="/" className="text-[#686868] font-semibold">
              Features
            </Link>
            <Link to="/" className="text-[#686868] font-semibold">
              Pricing
            </Link>
            <Link to="/" className="text-[#686868] font-semibold">
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      {toggleNav && (
        <nav className="mobile_nav_container fixed w-full pb-8 pt-5 left-0 top-[6rem] bg-white md:hidden block">
          <ul className="">
            <li className="flex items-start px-7 justify-center gap-4 flex-col">
              <Link to="/" className="text-[#686868] font-semibold">
                Business Directory
              </Link>
              <Link to="/" className="text-[#686868] font-semibold">
                Features
              </Link>
              <Link to="/" className="text-[#686868] font-semibold">
                Pricing
              </Link>
              <Link to="/" className="text-[#686868] font-semibold">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="burger md:hidden block">
        <button
          onClick={() => setToggleNav(!toggleNav)}
          className="outline-none border-none"
        >
          <img
            src="/svgs/burger.svg"
            alt=""
            //   className="w-[2rem] h-[2rem] bg-[]"
          />
        </button>
      </div>

      <div className="button_container hidden md:flex items-center justify-center gap-7">
        <button
          onClick={() => navigate("/login")}
          className={`${
            location.pathname === "/login"
              ? "border-solid border-[1px] rounded-[6px] border-[#603F8B]"
              : ""
          }  text-[#603F8B] w-[10rem] min-h-[3rem] flex items-center justify-center`}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className={`${
            location.pathname === "/signup"
              ? "border-solid border-[1px] rounded-[6px] border-[#603F8B]"
              : ""
          }  text-[#603F8B] w-[10rem] min-h-[3rem] flex items-center justify-center`}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Nav;
