import React from "react";
import "./baristaHeader.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const BaristaHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="left-right">
      <div className="header-container">
        <div className="nav-left">
          <a onClick={() => navigate("/barista/preparation")} className="logo">
            <img src={assets.mainLogo_3} alt="Logo" />
          </a>
        </div>

        <div className="nav-right">
          <div className="nav-right-item">
            <a
              onClick={() => navigate("/barista/preparation")}
              className="nav-right-title"
            >
              Preparation List
            </a>
          </div>

          <div className="nav-right-item">
            <a
              onClick={() => navigate("/barista/ingrdients")}
              className="nav-right-title"
            >
              Ingredient List
            </a>
          </div>

          <div className="nav-right-item">
            <a
              onClick={() => navigate("/barista/recipe")}
              className="nav-right-title"
            >
              Recipe List
            </a>
          </div>

          <div className="nav-right-item">
            <a
              onClick={() => navigate("/barista/profile")}
              className="nav-right-title"
            >
              My profile
            </a>
          </div>

          <div className="nav-right-item">
            <a onClick={() => navigate("/login")} className="nav-right-title">
              Logout
            </a>
          </div>

          {/* Sẽ có logout và My profile khi user đã login */}

          {/* <button type="button" ref={headerBarsRef} onClick={toggleMobileNav}>
              <i className="bx  bx-menu"></i>
            </button> */}
        </div>
      </div>
    </header>
  );
};

export default BaristaHeader;
