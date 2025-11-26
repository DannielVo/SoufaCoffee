// src/api.js
import axios from "axios";

export const SERVICES = {
  customer: "http://localhost:5000/api",
};

// Hàm chung gọi API
export async function apiRequest(service, endpoint, options = {}) {
  const url = `${SERVICES[service]}${endpoint}`;

  try {
    const response = await axios({
      url,
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        ...(options.headers || {}),
      },
      data: options.body ? JSON.parse(options.body) : undefined, // fetch body -> axios data
      params: options.params || undefined, // query params nếu có
    });

    return response.data; // axios trả về { data, status, headers... }
  } catch (err) {
    console.error("API Request Error:", err.response || err.message);
    // throw err.response?.data || err;
    throw { status_code: err.response?.status || 500, ...err.response?.data };
  }
}
