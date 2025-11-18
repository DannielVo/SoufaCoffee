import React from "react";
import ManagerHeader from "../components/managerHeader/ManagerHeader";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const ManagerLayout = () => {
  return (
    <>
      <ManagerHeader />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default ManagerLayout;
