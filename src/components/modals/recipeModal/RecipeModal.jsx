import React, { useEffect, useState } from "react";
import "./recipeModal.css";
import BaseModal from "../baseModal/BaseModal";

const RecipeModal = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
  onSubmit,
  ingredientOptions = [], // danh sách nguyên liệu để chọn
  productOptions = [], // danh sách sp để chọn
}) => {
  const isEdit = mode === "edit";

  const [formData, setFormData] = useState({
    product: "",
    ingredient: "",
    quantityRequired: "",
    unit: "",
  });

  // Fill data when editing
  useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        product: initialData.product || "",
        ingredient: initialData.name || "",
        quantityRequired: initialData.quantity || "",
        unit: initialData.unit || "",
      });
    }
  }, [isEdit, initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2 className="recipe-modal-title">
        {isEdit ? "Edit Recipe" : "Add Recipe"}
      </h2>

      <div className="modal-form">
        {/* Product */}
        <div className="form-group">
          <label>Product</label>
          {isEdit ? (
            <input
              type="text"
              value={formData.product}
              onChange={(e) => handleChange("product", e.target.value)}
            />
          ) : (
            <select
              value={formData.product}
              onChange={(e) => handleChange("product", e.target.value)}
            >
              <option value="">Select product</option>
              {productOptions.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Ingredient */}
        <div className="form-group">
          <label>Ingredient</label>
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
        </div>

        {/* Quantity Required */}
        <div className="form-group">
          <label>Quantity Required</label>
          <input
            type="number"
            value={formData.quantityRequired}
            onChange={(e) => handleChange("quantityRequired", e.target.value)}
            placeholder="Enter quantity"
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

export default RecipeModal;
