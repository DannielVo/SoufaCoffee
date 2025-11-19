import React from "react";
import "./orderList.css";
import { useNavigate } from "react-router-dom";
import { ORDER_LIST } from "../../assets/dummyDB";

const OrderList = () => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  return (
    <div className="order-list-wrapper left-right">
      <h2 className="order-list-title">Order List</h2>

      <div className="order-list-container">
        <div className="order-grid header">
          <div>No.</div>
          <div>Order ID</div>
          <div>Total Amount</div>
          <div>Date</div>
          <div>Status</div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {ORDER_LIST.map((order, index) => (
          <div className="order-grid item" key={order.id}>
            <div>{index + 1}</div>
            <div>#{order.id}</div>
            <div>{formatPrice(order.total)}</div>
            <div>{order.date}</div>
            <div className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </div>
            <div className="actions">
              <button
                className="btn-icon detail"
                onClick={() => navigate(`/orders/${order.id}`)}
              >
                <i className="bx bx-info-circle"></i>
              </button>
              <button
                className="btn-icon edit"
                onClick={() => navigate(`/orders/${order.id}/edit`)}
              >
                <i className="bx bx-edit"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
