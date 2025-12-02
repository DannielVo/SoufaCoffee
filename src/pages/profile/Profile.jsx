import React, { useEffect, useState } from "react";
import "./profile.css";
import { useShop } from "../../context/ShopContext";

const Profile = () => {
  const {
    user,
    userDetails,
    getUserDetails,
    updateUserProfile,
    loading,
    error,
  } = useShop();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  // Lấy dữ liệu user khi vào trang
  useEffect(() => {
    const fetchUser = async () => {
      // {full_name, email, phone_number}
      const data = await getUserDetails();
      setFormData({
        fullName: data.full_name || "",
        email: data.email || "",
        phoneNumber: data.phone_number || "",
      });
    };
    fetchUser();
  }, []);

  // Cập nhật state khi user gõ vào form
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateUserProfile(userDetails.staff_id, formData);
    alert(res.message || "Updated successfully!");
  };

  // Reset form về dữ liệu gốc
  const handleReset = () => {
    setFormData({
      fullName: userDetails.full_name,
      email: userDetails.email,
      phoneNumber: userDetails.phone_number,
    });
  };

  return (
    <div className="profile-wrapper">
      <div class="user-profile-container">
        <div class="user-avatar">
          <i class="bx bx-user"></i>
        </div>
        <div class="user-info">
          <h2>Your Information</h2>
          <form onSubmit={handleSubmit}>
            <div class="profile-form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div class="profile-form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled={user.role === "manager" ? false : true}
              />
            </div>

            <div class="profile-form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div class="profile-btn">
              <button type="reset" class="cancel-btn" onClick={handleReset}>
                Cancel
              </button>
              <button type="submit" class="update-btn">
                {loading ? "Update...." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
