import React, { createContext, useContext, useEffect, useState } from "react";
import { HttpStatusCode } from "axios";
import { apiRequest } from "../utils/api";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [customerId, setCustomerId] = useState(0);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Lấy thtin account của user login
  const fetchAccountInfo = async (customerId) => {
    if (customerId === 0) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("account", "/" + customerId, {
        method: "GET",
      });
      setAccount(data);
      localStorage.setItem("account", JSON.stringify(data));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Hàm login
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("auth", "/login", {
        method: "POST",
        body: JSON.stringify({ username: email, password: password }),
      });

      // Giả sử API trả về token và user info
      setToken(data.access_token);
      setCustomerId(data.customerId);

      // Lưu token vào localStorage để dùng cho các request sau
      localStorage.setItem("token", data.access_token);

      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    setToken(null);
    setCustomerId(0);
    localStorage.removeItem("token");
    localStorage.removeItem("customer");
    localStorage.removeItem("account");
  };

  //   useEffect(() => {
  //     fetchCustomerInfo(customerId);
  //     fetchAccountInfo(customerId);
  //   }, [customerId]);

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     const customer = localStorage.getItem("customer");
  //     const account = localStorage.getItem("account");

  //     if (token) {
  //       setToken(token);
  //       if (customer) {
  //         setCustomer(JSON.parse(customer));
  //         setCustomerId(JSON.parse(customer).customer_id);
  //       }
  //       if (account) {
  //         setAccount(JSON.parse(account));
  //       }
  //     }
  //   }, []);

  return (
    <ShopContext.Provider
      value={{
        customerId,
        token,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
