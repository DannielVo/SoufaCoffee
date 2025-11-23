import React, { useState } from "react";
import "./productContent.css";
import { PRODUCTS } from "../../assets/dummyDB";
import StatusDropdown from "../statusDropdown/StatusDropdown";
import { PRODUCT_COLOR, PRODUCT_STATUS } from "../../assets/assets";

const ProductContent = () => {
  const [productList, setProductList] = useState(PRODUCTS);

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
          <div className="status-col">
            Status<i class="bx bxs-hand-up"></i>{" "}
          </div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {productList.map((product, index) => (
          <div className="product-grid item" key={`product-${product.id}`}>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{formatPrice(product.price)}</div>
            <div>{product.remaining}</div>
            <StatusDropdown
              value={product.status}
              options={PRODUCT_STATUS}
              colorMap={PRODUCT_COLOR}
              onChange={(newStatus) => {
                setProductList((prev) =>
                  prev.map((p) =>
                    p.id === product.id ? { ...p, status: newStatus } : p
                  )
                );
              }}
            />
            <div className="actions">
              <button className="btn-icon edit">
                <i className="bx bx-edit"></i>
              </button>
              <button className="btn-icon save">
                <i class="bxr  bx-save"></i>
              </button>
            </div>
          </div>
        ))}

        <div className="product-list-footer">
          {" "}
          <div className="footer-left">
            Total: {productList.length} products
          </div>
          <div className="footer-right">
            <button className="page-btn" disabled={true}>
              Previous
            </button>
            <button className="page-btn active">1</button>
            <button className="page-btn" disabled={true}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
