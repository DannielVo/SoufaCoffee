import React, { useState } from "react";
import "./orderDetails.css";
import { ORDER_PAYMENT, TRANSACTIONS } from "../../assets/dummyDB";

const OrderDetails = ({ order, onBack }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  return (
    <div className="order-details-container left-right">
      {/* ===== GENERAL INFO ===== */}
      <div className="order-details-header">
        <h3 className="section-title">General Information</h3>
        <button className="btn-back" onClick={onBack}>
          <i className="bx bx-arrow-back"></i>
          Back
        </button>
      </div>

      <section className="general-info">
        <div className="info-grid">
          <div className="info-item">
            <span>Order:</span> <strong>#{order.id}</strong>
          </div>

          <div className="info-item">
            <span>Staff:</span> <strong>{order.staff}</strong>
          </div>

          <div className="info-item">
            <span>Date:</span> <strong>{order.created_at}</strong>
          </div>

          <div className="info-item">
            <span>Total Amount:</span>{" "}
            <strong>{formatPrice(order.total)}</strong>
          </div>

          <div className="info-item">
            <span>Status: </span>

            <span className={`status-badge ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
        </div>
      </section>

      {/* ===== ORDER ITEMS ===== */}
      <section className="details-section">
        <h3 className="section-title">Order Items</h3>

        <div className="details-table">
          <div className="table-header">
            <div>Name</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>

          {ORDER_PAYMENT.map((item) => (
            <div className="table-row" key={`order-details${item.id}`}>
              <div>{item.name}</div>
              <div>{item.qty}</div>
              <div>{formatPrice(item.price)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRANSACTION ===== */}
      <section className="details-section">
        <h3 className="section-title">Transaction History</h3>

        <div className="details-table">
          <div className="table-header">
            <div>No.</div>
            <div>Payment Method</div>
            <div>Amount</div>
            <div>Cash Given</div>
            <div>Status</div>
            <div>Type</div>
            <div>Date</div>
          </div>

          {TRANSACTIONS.map((t, index) => (
            <div className="table-row" key={`transaction${t.id}`}>
              <div>{index + 1}</div>
              <div>{t.method}</div>
              <div>{formatPrice(t.amount)}</div>
              <div>{t.cash_given ? formatPrice(t.cash_given) : "-"}</div>
              <div className={`status-badge small ${t.status.toLowerCase()}`}>
                {t.status}
              </div>
              <div>{t.type}</div>
              <div>{t.created_at}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrderDetails;
