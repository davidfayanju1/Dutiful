import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="nav_container bg-white min-h-[6rem] px-[2rem] flex items-center justify-between">
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
