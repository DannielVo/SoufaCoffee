import React, { useEffect, useState } from "react";
import "./ingredientModal.css";
import BaseModal from "../baseModal/BaseModal";

const IngredientModal = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
  onSubmit,
}) => {
  const isEdit = mode === "edit";

  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    status: "out-of-stock",
    description: "",
    lowStockValue: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        name: initialData.name || "",
        unit: initialData.unit || "",
        status: initialData.status || "active",
        description: initialData.description || "",
        lowStockValue: initialData.lowStockValue || "",
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
      <h2 className="ingredient-modal-title">
        {isEdit ? "Edit Ingredient" : "Add Ingredient"}
      </h2>

      <div className="modal-form">
        {/* Ingredient Name */}
        <div className="form-group">
          <label>Ingredient</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter ingredient name"
          />
        </div>

        {/* Unit */}
        <div className="form-group">
          <label>Unit</label>
          <input
            type="text"
            value={formData.unit}
            onChange={(e) => handleChange("unit", e.target.value)}
            placeholder="e.g., gram, ml, bag..."
          />
        </div>

        {/* Status */}
        <div className="form-group">
          <label>Status</label>
          <select
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            {!isEdit && <option value="out-of-stock">Out of stock</option>}
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Enter description"
          />
        </div>

        {/* Low-stock value */}
        <div className="form-group">
          <label>Low Stock Value</label>
          <input
            type="number"
            value={formData.lowStockValue}
            onChange={(e) => handleChange("lowStockValue", e.target.value)}
            placeholder="Enter low stock threshold"
          />
        </div>

        {/* Submit */}
        <button className="submit-btn" onClick={handleSubmit}>
          {isEdit ? "Confirm" : "Add"}
        </button>
      </div>
    </BaseModal>
  );
};

export default IngredientModal;
