import React, { useEffect, useState } from "react";
import "./productModal.css";
import BaseModal from "../baseModal/BaseModal";

const ProductModal = ({
  isOpen,
  onClose,
  mode = "add",
  initialData = {},
  onSubmit,
}) => {
  const isEdit = mode === "edit";

  // Form state
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(isEdit ? "active" : "inactive");
  const [desc, setDesc] = useState("");

  // Load initial data for editing
  useEffect(() => {
    if (isEdit && initialData) {
      setProductName(initialData.productName || "");
      setPrice(initialData.productPrice || "");
      setStatus(initialData.status || "active");
      setDesc(initialData.productDesc || "");
    } else {
      // Reset for Add
      setProductName("");
      setPrice("");
      setStatus("active");
      setDesc("");
    }
  }, [initialData, isEdit]);

  const handleSubmit = () => {
    const override = {
      productName: productName,
      productPrice: Number(price),
      status,
      productDescription: desc,
    };

    const finalData = {
      ...initialData,
      ...override,
    };

    onSubmit(finalData);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title={isEdit ? "Edit Product" : "Add Product"}
      onClose={onClose}
    >
      <h2 className="product-modal-title">
        {isEdit ? "Edit Product" : "Add Product"}
      </h2>

      <div className="modal-form">
        {/* Product Name */}
        <div className="form-group">
          <label>Product</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Price */}
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Status */}
        {isEdit && (
          <div className="form-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        )}

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter product description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
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

export default ProductModal;
