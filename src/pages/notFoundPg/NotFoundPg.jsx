import React from "react";
import "./notFoundPg.css";
import { useNavigate } from "react-router-dom";

const NotFoundPg = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-content">Page not found!</h2>
      <a onClick={() => navigate("/")} className="back-btn">
        Back to Home Page
      </a>
    </div>
  );
};

export default NotFoundPg;
