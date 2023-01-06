import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-[80px] font-inter">
      <Navbar />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
