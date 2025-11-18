import React from "react";
import BaristaHeader from "../components/baristaHeader/BaristaHeader";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const BaristaLayout = () => {
  return (
    <>
      <BaristaHeader />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default BaristaLayout;
