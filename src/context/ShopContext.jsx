import React, { createContext, useContext, useEffect, useState } from "react";
import { HttpStatusCode } from "axios";
import { apiRequest } from "../utils/api";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [listUser, setListUser] = useState([]);

  const deleteUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs/" + userId, {
        method: "DELETE",
      });
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (userId, user) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/profile/" + userId, {
        method: "PUT",
        body: JSON.stringify({
          full_name: user.fullName,
          phone_number: user.phoneNumber,
        }),
      });
      // data: {message}
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userId, user) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs/" + userId, {
        method: "PUT",
        body: JSON.stringify({
          full_name: user.full_name,
          phone_number: user.phone_number,
          role: user.role,
          status: user.status,
          email: user.email,
        }),
      });

      getListUser();
      // data: {message}
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (user) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs", {
        method: "POST",
        body: JSON.stringify({
          full_name: user.full_name,
          email: user.email,
          phone_number: user.phone_number,
          role: user.role,
        }),
      });
      getListUser();

      // data: {message, staff_id, initial_password}
      return data;
    } catch (err) {
      setError(err.detail);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getListUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest("staff", "/staffs", {
        method: "GET",
      });
      setListUser(data);
      return data;
    } catch (err) {
      setError(err.detail);
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
      const data = await apiRequest("staff", "/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
      });

      // Giả sử API trả về token và user info
      setToken(data.access_token);
      setUser(data.user);

      // Lưu token vào localStorage để dùng cho các request sau
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.user.role);

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
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  //   useEffect(() => {
  //     fetchCustomerInfo(customerId);
  //     fetchAccountInfo(customerId);
  //   }, [customerId]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setToken(token);
      if (user) {
        setUser(JSON.parse(user));
      }
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        token,
        loading,
        error,
        login,
        logout,
        getListUser,
        createUser,
        updateUser,
        deleteUser,
        user,
        listUser,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
