import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="item_container">
      <Nav />
      <div className="item_container mt-[6rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
