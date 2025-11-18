import React from "react";
import CashierHeader from "../components/cashierHeader/CashierHeader";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const CashierLayout = () => {
  return (
    <>
      <CashierHeader />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default CashierLayout;
