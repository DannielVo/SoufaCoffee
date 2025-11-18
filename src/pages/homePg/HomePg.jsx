import React, { useState } from "react";
import "./homePg.css";
import { ORDER_SUMMARY, PRODUCTS } from "../../assets/dummyDB";
import ProductCard from "../../components/productCard/ProductCard";
import { useNavigate } from "react-router-dom";

const HomePg = () => {
  const [orderItem, setOrderItem] = useState(ORDER_SUMMARY);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  const handleQuantityChange = (id, delta) => {
    setOrderItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity < 1) return item;
          if (newQuantity > item.remaining) return item;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id) => {
    setOrderItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = orderItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="home-wrapper left-right">
      {/* MENU */}
      <div className="menu-container">
        {PRODUCTS.map((item, index) => (
          <ProductCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={formatPrice(item.price)}
            remaining={item.remaining}
            onChoose={() => console.log("Add:", item)}
          />
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <div className="order-summary-wrapper">
        <div className="order-summary">
          <div className="summary-header">
            <h2 className="summary-title">Order #101</h2>
            {/* <button className="btn-clear-all">Clear All</button> */}
            <a className="btn-clear-all">Clear All</a>
          </div>

          <div className="order-items">
            {orderItem.map((item, index) => (
              <div key={`order-summary-item${index}`} className="order-item">
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">{formatPrice(item.price)}</div>
                  <button
                    className="btn-clear-item"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Clear
                  </button>
                </div>
                <div className="item-controls">
                  <button
                    className="btn-quantity"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="btn-quantity"
                    onClick={() => handleQuantityChange(item.id, 1)}
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row total-amount">
              <span>Total:</span>
              <span className="total-value">{formatPrice(total)}</span>
            </div>
          </div>

          <button
            className="btn-process"
            onClick={() => navigate("/cashier/payment")}
          >
            Process Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePg;
