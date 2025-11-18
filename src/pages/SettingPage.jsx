import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/cashierHeader/CashierHeader";

const SettingPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SettingPage;
