import React from "react";
import "./wareHouse.css";
import { WAREHOUSE_DATA } from "../../assets/dummyDB";

const WareHouse = ({ data = [], isManager = false }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  return (
    <div
      className={`warehouse-wrapper ${
        isManager === false ? "left-right" : "manager-wrapper"
      }`}
    >
      <div className="warehouse-header">
        <div className="wh-left">
          <h2 className="wh-title">Warehouse</h2>
        </div>

        <div className="wh-right">
          <input type="text" placeholder="Search..." className="wh-search" />
          <button className="wh-add-btn">Add</button>
        </div>
      </div>

      {/* ===== Content Table ===== */}
      <section className="wh-details-section">
        <div className="wh-details-table">
          <div
            className={`wh-table-header ${
              isManager ? "grid-manager" : "grid-cashier"
            }`}
          >
            <div>No.</div>
            <div>Ingredient</div>
            <div>Stock Qty</div>
            <div>Price</div>
            <div>Date In</div>
            <div>Remaining</div>
            <div>Unit</div>
            {isManager && <div>Staff Added</div>}
            {isManager && <div>Last Edited By</div>}
            <div>Actions</div>
          </div>

          {WAREHOUSE_DATA.map((item, index) => (
            <div
              className={`wh-table-row ${
                isManager ? "grid-manager" : "grid-cashier"
              }`}
              key={`wh-${item.id}`}
            >
              <div>{index + 1}</div>
              <div>{item.name}</div>
              <div>{item.stock_quantity}</div>
              <div>{formatPrice(item.price)}</div>
              <div>{item.date_stock_in}</div>
              <div>{item.remaining}</div>
              <div>{item.unit}</div>

              {isManager && <div>{item.staff_add}</div>}
              {isManager && <div>{item.last_edit}</div>}

              <div>
                <button className="wh-edit-btn">
                  <i className="bx bx-edit"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WareHouse;
