import React from "react";
import "./productCard.css";

const ProductCard = ({ img, name, price, remaining, onChoose }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        <p className="product-price">{price.toLocaleString()} </p>

        <p className={`product-remaining ${remaining === 0 ? "out" : ""}`}>
          Remaining: {remaining}
        </p>
      </div>

      <button
        className="choose-btn"
        onClick={onChoose}
        disabled={remaining === 0}
      >
        {remaining === 0 ? "Sold out" : "Choose"}
      </button>
    </div>
  );
};

export default ProductCard;
