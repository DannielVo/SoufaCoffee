import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div class="user-profile-container">
        <div class="user-avatar">
          <i class="bx bx-user"></i>
        </div>
        <div class="user-info">
          <h2>Your Information</h2>
          <form>
            <div class="profile-form-group">
              <label for="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" />
            </div>
            <div class="profile-form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>

            <div class="profile-form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div class="profile-btn">
              <button type="reset" class="cancel-btn">
                Cancel
              </button>
              <button type="submit" class="update-btn">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
