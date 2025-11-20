import React from "react";
import "./prepDetails.css";
import { ORDER_PAYMENT } from "../../assets/dummyDB";

const PrepDetails = ({ prep, onBack }) => {
  return (
    <div className="prep-details-container left-right">
      {/* ===== GENERAL INFO ===== */}
      <div className="prep-details-header">
        <h3 className="section-title">General Information</h3>
        <button className="btn-back" onClick={onBack}>
          <i className="bx bx-arrow-back"></i>
          Back
        </button>
      </div>

      <section className="general-info">
        <div className="info-grid">
          <div className="info-item">
            <span>Preparation:</span> <strong>#{prep.id}</strong>
          </div>

          <div className="info-item">
            <span>Staff:</span> <strong>{prep.staff}</strong>
          </div>

          <div className="info-item">
            <span>Date:</span> <strong>{prep.created_at}</strong>
          </div>

          <div className="info-item">
            <span>Status: </span>
            <span className={`status-badge ${prep.status.toLowerCase()}`}>
              {prep.status}
            </span>
          </div>
        </div>
      </section>

      {/* ===== ORDER ITEMS ===== */}
      <section className="details-section">
        <h3 className="section-title">Preparation Items</h3>

        <div className="details-table">
          <div className="table-header">
            <div>Name</div>
            <div>Quantity</div>
          </div>

          {ORDER_PAYMENT.map((item) => (
            <div className="table-row" key={`order-details${item.id}`}>
              <div>{item.name}</div>
              <div>{item.qty}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrepDetails;
