import React, { useEffect, useState } from "react";
import "./orderList.css";
import { useNavigate } from "react-router-dom";
import { ORDER_LIST } from "../../assets/dummyDB";
import OrderDetails from "../orderDetails/OrderDetails";
import { useShop } from "../../context/ShopContext";

const OrderList = ({ isManager = false }) => {
  const { listOrder, error, loading, getOrders } = useShop();
  const [isOrderDetails, setIsOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleSelectedOrder = (item) => {
    setSelectedOrder(item);
    setIsOrderDetails(true);
  };

  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getOrders();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setOrders([...listOrder]);
  }, [listOrder]);

  return (
    <>
      {isOrderDetails === false ? (
        <div
          className={`order-list-wrapper ${
            isManager === false ? "left-right" : "manager-wrapper"
          }`}
        >
          <div className="order-list-header">
            <div className="order-header-left">
              <h2 className="order-list-title">Order List</h2>
            </div>
            <div className="order-header-right">
              <input
                type="text"
                placeholder="Search..."
                className="order-search"
              />
              {isManager && <button className="order-list-add-btn">Add</button>}
            </div>
          </div>

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
            {orders.map((order, index) => (
              <div className="order-grid item" key={order.orderId}>
                <div>{index + 1}</div>
                <div>#{order.orderId}</div>
                <div>{formatPrice(order.totalAmount)}</div>
                <div>{order.createdAt}</div>
                <div className={`status ${order.orderStatus.toLowerCase()}`}>
                  {order.orderStatus}
                </div>
                <div className="actions">
                  <button
                    className="btn-icon detail"
                    onClick={() => {
                      handleSelectedOrder(order);
                    }}
                  >
                    <i className="bxr  bx-eye"></i>
                  </button>
                  <button
                    className="btn-icon edit"
                    onClick={() => navigate(`/orders/${order.orderId}/edit`)}
                  >
                    <i className="bx bx-edit"></i>
                  </button>
                </div>
              </div>
            ))}

            {/* List-footer */}
            <div className="order-list-footer">
              <div className="footer-left">Total: {orders.length} orders</div>

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
      ) : (
        <OrderDetails
          order={selectedOrder}
          onBack={() => setIsOrderDetails(false)}
          onManager={isManager}
        />
      )}
    </>
  );
};

export default OrderList;
