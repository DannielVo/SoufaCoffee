import React, { useEffect, useState } from "react";
import "./homePg.css";
import { ORDER_SUMMARY, PRODUCTS } from "../../assets/dummyDB";
import ProductCard from "../../components/productCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useShop } from "../../context/ShopContext";

const HomePg = () => {
  const {
    products,
    getProducts,
    error,
    loading,
    calculateTotal,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    cartItems,
    totalAmount,
    createOrder,
  } = useShop();
  const [productList, setProductList] = useState([]);
  const [orderItem, setOrderItem] = useState(ORDER_SUMMARY);
  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    await createOrder();
    navigate("/cashier/payment");
  };

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
    // setOrderItem((prevItems) => prevItems.filter((item) => item.id !== id));
    removeFromCart(id);
  };

  const total = orderItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setProductList([...products]);
  }, [products]);

  return (
    <div className="home-wrapper left-right">
      {/* MENU */}
      <div className="menu-container">
        {productList.map((item, index) => (
          <ProductCard
            key={item.productId}
            img={item.productImg}
            name={item.productName}
            price={formatPrice(item.productPrice)}
            remaining={item.numberOfAvailability}
            onChoose={() => addToCart(item)}
          />
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <div className="order-summary-wrapper">
        <div className="order-summary">
          <div className="summary-header">
            <h2 className="summary-title">Order Summary</h2>
            {/* <button className="btn-clear-all">Clear All</button> */}
            <a onClick={() => clearCart()} className="btn-clear-all">
              Clear All
            </a>
          </div>

          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={`order-summary-item${index}`} className="order-item">
                <div className="item-info">
                  <div className="item-name">{item.productName}</div>
                  <div className="item-price">
                    {formatPrice(item.productPrice)}
                  </div>
                  <button
                    className="btn-clear-item"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    Clear
                  </button>
                </div>
                <div className="item-controls">
                  <button
                    className="btn-quantity"
                    onClick={() => decreaseQuantity(item.productId)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="btn-quantity"
                    onClick={() => addToCart(item)}
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
              <span className="total-value">{formatPrice(totalAmount)}</span>
            </div>
          </div>

          <button className="btn-process" onClick={() => handleCreateOrder()}>
            {loading ? " Process Transaction...." : " Process Transaction"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePg;
