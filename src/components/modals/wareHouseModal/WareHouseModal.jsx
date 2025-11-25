import React, { useEffect, useState } from "react";
import "./wareHouseModal.css";
import BaseModal from "../baseModal/BaseModal";

const WareHouseModal = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
  onSubmit,
  ingredientOptions = [],
}) => {
  const isEdit = mode === "edit";

  const [formData, setFormData] = useState({
    ingredient: "",
    stockQuantity: "",
    price: "",
    dateIn: "",
    remaining: "",
    unit: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        ingredient: initialData.name || "",
        stockQuantity: initialData.stock_quantity || "",
        price: initialData.price || "",
        dateIn: initialData.date_stock_in || "",
        remaining: initialData.remaining || "",
        unit: initialData.unit || "",
      });
    }
  }, [isEdit, initialData]);

  // Khi ADD => remaining = stock quantity
  useEffect(() => {
    if (!isEdit) {
      setFormData((prev) => ({
        ...prev,
        remaining: prev.stockQuantity || "",
      }));
    }
  }, [formData.stockQuantity, isEdit]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="warehouse-modal-title">
        {isEdit ? "Edit Warehouse Entry" : "Add Warehouse Entry"}
      </h2>

      <div className="modal-form">
        {/* Ingredient */}
        <div className="form-group">
          <label>Ingredient</label>
          {isEdit ? (
            <input
              type="text"
              value={formData.ingredient}
              onChange={(e) => handleChange("ingredient", e.target.value)}
            />
          ) : (
            <select
              value={formData.ingredient}
              onChange={(e) => handleChange("ingredient", e.target.value)}
            >
              <option value="">Select ingredient</option>
              {ingredientOptions.map((ing) => (
                <option key={ing.id} value={ing.name}>
                  {ing.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Stock Quantity */}
        <div className="form-group">
          <label>Stock Quantity</label>
          <input
            type="number"
            value={formData.stockQuantity}
            onChange={(e) => handleChange("stockQuantity", e.target.value)}
            placeholder="Enter quantity"
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => handleChange("price", e.target.value)}
            placeholder="Enter price"
          />
        </div>

        {/* Date In */}
        <div className="form-group">
          <label>Date In</label>
          <input
            type="date"
            value={formData.dateIn}
            onChange={(e) => handleChange("dateIn", e.target.value)}
          />
        </div>

        {/* Remaining */}
        <div className="form-group">
          <label>Remaining</label>
          <input
            type="number"
            value={formData.remaining}
            onChange={(e) => handleChange("remaining", e.target.value)}
            placeholder="Remaining quantity"
          />
        </div>

        {/* Unit */}
        <div className="form-group">
          <label>Unit</label>
          <input
            type="text"
            value={formData.unit}
            onChange={(e) => handleChange("unit", e.target.value)}
            placeholder="e.g., gram, ml..."
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

export default WareHouseModal;
