import React, { useState } from "react";
import "./login.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useShop } from "../../context/ShopContext";

const Login = () => {
  const { login, error, loading } = useShop();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const [internalErrorMsg, setInternalErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setShowError(true);
        setInternalError(false);
        return;
      }
      const response = await login(email, password);
      const role = response.user.role;

      if (role === "cashier") navigate("/cashier/home");
      if (role === "barista") navigate("/barista/preparation");
      if (role === "manager") navigate("/manager/dashboard");
    } catch (error) {
      console.error("login fail: " + error);
      setInternalError(true);
      setInternalErrorMsg(error.message);
      setShowError(false);
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <img src={assets.mainLogo_3} />
        </div>

        <form onSubmit={(e) => handleLogin(e)}>
          <div className="login-form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {showError && (
            <div className="error-text">Email or password cannot be empty!</div>
          )}

          {internalError && (
            <div className="error-text">
              {internalErrorMsg ||
                "Oops! Something went wrong. Please try again later!"}
            </div>
          )}

          <div className="login-form-footer">
            <button className="login-btn" type="submit">
              {loading ? "Login...." : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
