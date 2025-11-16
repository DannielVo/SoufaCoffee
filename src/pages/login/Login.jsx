import React from "react";
import "./login.css";
import { assets } from "../../assets/assets";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <img src={assets.mainLogo_3} />
        </div>

        <form>
          <div className="login-form-group">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>

          <div className="login-form-group">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
          </div>

          <div className="error-text">
            "Oops! Something went wrong. Please try again later!"
          </div>

          <div className="login-form-footer">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
