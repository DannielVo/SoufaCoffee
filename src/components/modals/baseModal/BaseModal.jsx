import React from "react";
import "./baseModal.css";

const BaseModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // Không tắt khi click vào nội dung
      >
        <button className="modal-close-btn" onClick={onClose}>
          <i class="bxr  bx-x"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BaseModal;
