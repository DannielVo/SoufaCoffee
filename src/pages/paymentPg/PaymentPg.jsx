import React, { useState } from "react";
import "./paymentPg.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { ORDER_PAYMENT } from "../../assets/dummyDB";

const PaymentPg = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("cash");
  const [cashReceived, setCashReceived] = useState("");
  const orderId = 101;

  const total = ORDER_PAYMENT.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const cashReturned = cashReceived ? Number(cashReceived) - total : "";

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  return (
    <div className="payment-wrapper left-right">
      <h1 className="page-title">Payment Information</h1>
      <p className="order-id">Order ID: #{orderId}</p>

      <div className="payment-content">
        {/* ORDER SUMMARY */}
        <div className="order-summary-section">
          <div className="order-summary-grid header">
            <div>No.</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {ORDER_PAYMENT.map((item, index) => (
            <div className="order-summary-grid row" key={item.id}>
              <div>{index + 1}</div>
              <div>{item.name}</div>
              <div>{formatPrice(item.price)}</div>
              <div>{item.qty}</div>
              <div>{formatPrice(item.price * item.qty)}</div>
            </div>
          ))}

          <div className="summary-total">
            <span>Total Amount:</span>
            <span className="total-value">{formatPrice(total)}</span>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="payment-section">
          <h2 className="section-title">Payment Method</h2>

          <div className="payment-tabs">
            <button
              className={method === "cash" ? "active" : ""}
              onClick={() => setMethod("cash")}
            >
              Cash
            </button>
            <button
              className={method === "ewallet" ? "active" : ""}
              onClick={() => setMethod("ewallet")}
            >
              E-wallet
            </button>
          </div>

          <div className="payment-box">
            {method === "cash" && (
              <div className="cash-section">
                <div className="input-group">
                  <label>Cash received:</label>
                  <input
                    type="number"
                    value={cashReceived}
                    onChange={(e) => setCashReceived(e.target.value)}
                    placeholder="Enter customer's cash"
                  />
                </div>

                <div className="input-group">
                  <label>Cash returned:</label>
                  <input
                    type="text"
                    value={cashReceived ? formatPrice(cashReturned) : "0 VND"}
                    disabled
                  />
                </div>
              </div>
            )}

            {method === "ewallet" && (
              <div className="ewallet-section">
                <p className="qr-guide-text">Scan this QR to pay</p>
                {/* <div className="qr-box">QR CODE</div> */}
                <img src={assets.qr_code} alt="" className="qr-code-img" />
              </div>
            )}
          </div>

          <div className="payment-actions">
            <button className="btn-confirm">Confirm</button>
            <button
              className="btn-update-order"
              onClick={() => navigate("/cashier/home")}
            >
              Update order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPg;
