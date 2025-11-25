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
  const [status, setStatus] = useState(isEdit ? "Active" : "Inactive");
  const [desc, setDesc] = useState("");

  // Load initial data for editing
  useEffect(() => {
    if (isEdit && initialData) {
      setProductName(initialData.name || "");
      setPrice(initialData.price || "");
      setStatus(initialData.status || "Active");
      setDesc(initialData.description || "");
    } else {
      // Reset for Add
      setProductName("");
      setPrice("");
      setStatus("Inactive");
      setDesc("");
    }
  }, [initialData, isEdit]);

  const handleSubmit = () => {
    const formData = {
      name: productName,
      price: Number(price),
      status,
      description: desc,
    };

    onSubmit(formData);
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
        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {isEdit ? (
              <>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </>
            ) : (
              <option value="Inactive">Inactive</option>
            )}
          </select>
        </div>

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
