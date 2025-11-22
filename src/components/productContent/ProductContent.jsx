import React from "react";
import "./productContent.css";
import { PRODUCTS } from "../../assets/dummyDB";

const ProductContent = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  return (
    <div className="product-list-wrapper">
      <div className="product-list-header">
        <div className="product-left">
          <h2 className="product-list-title">Product List</h2>
        </div>

        <div className="product-right">
          <input
            type="text"
            placeholder="Search..."
            className="product-search"
          />
          <button className="product-add-btn">Add</button>
        </div>
      </div>

      <div className="product-list-container">
        <div className="product-grid header">
          <div>No.</div>
          <div>Product</div>
          <div>Price</div>
          <div>Reamaining</div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {PRODUCTS.map((product, index) => (
          <div className="product-grid item" key={`product-${product.id}`}>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{formatPrice(product.price)}</div>
            <div>{product.remaining}</div>
            <div className="actions">
              <button className="btn-icon edit">
                <i className="bx bx-edit"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContent;
