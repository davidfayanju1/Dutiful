import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="item_container">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
