import React from "react";
import "./login.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = "cashier";
    localStorage.setItem("role", role);

    if (role === "cashier") navigate("/cashier/home");
    if (role === "barista") navigate("/barista/preparation");
    if (role === "manager") navigate("/manager/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <img src={assets.mainLogo_3} />
        </div>

        <form onSubmit={(e) => handleLogin(e)}>
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
