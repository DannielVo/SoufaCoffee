import React, { useEffect, useState } from "react";
import "./staffModal.css";
import BaseModal from "../baseModal/BaseModal";

const StaffModal = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
  onSubmit,
}) => {
  const isEdit = mode === "edit";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "staff",
    status: "active",
  });

  // Fill form when editing
  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        fullName: initialData.name || "",
        email: initialData.email || "",
        password: "",
        phone: initialData.phone || "",
        role: initialData.role || "staff",
        status: initialData.status || "active",
      });
    }
  }, [isEdit, initialData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="staff-modal-title">
        {isEdit ? "Edit Staff" : "Add Staff"}
      </h2>

      <div className="modal-form">
        {/* Full name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Enter full name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter email"
          />
        </div>

        {/* Password => Chỉ có ở Add */}
        {!isEdit && (
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter password"
            />
          </div>
        )}

        {/* Phone => Chỉ có ở Edit */}
        {isEdit && (
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
        )}

        {/* Role */}
        <div className="form-group">
          <label>Role</label>
          <select
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="staff">Staff</option>
            <option value="cashier">Cashier</option>
            <option value="barista">Barista</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {/* Status (always visible, default Active) */}
        <div className="form-group">
          <label>Status</label>
          <select
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit */}
        <button className="submit-btn" onClick={handleSubmit}>
          {isEdit ? "Confirm" : "Add"}
        </button>
      </div>
    </BaseModal>
  );
};

export default StaffModal;
