import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

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
