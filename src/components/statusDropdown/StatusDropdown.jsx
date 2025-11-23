import React, { useState } from "react";
import "./statusDropdown.css";
import { ORDER_STATUS } from "../../assets/assets";

const StatusDropdown = ({ value, onChange, options, colorMap = {} }) => {
  const [open, setOpen] = useState(false);

  // const availableOptions = ORDER_STATUS.filter((s) => s !== value);

  // const statusClass = value.toLowerCase().replace(" ", "-");

  // Loại bỏ option hiện tại
  const availableOptions = options.filter((s) => s !== value);

  // Tạo class ánh xạ màu (nếu có), fallback class theo value
  const statusKey = value.toLowerCase().replace(/\s+/g, "-");
  const statusClass = colorMap[value] ? colorMap[value] : statusKey;

  return (
    <div className="prep-status-wrapper">
      <div
        className={`prep-status-display ${statusClass}`}
        onClick={() => setOpen(!open)}
      >
        {value}
      </div>

      {/* Dropdown */}
      {/* {open && (
        <div className="prep-status-menu">
          {availableOptions.map((opt) => (
            <div
              key={`order-status-${opt}`}
              className="prep-status-item"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )} */}
      {open && (
        <div className="prep-status-menu">
          {availableOptions.map((opt) => {
            const optKey = opt.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={`dropdown-opt-${opt}`}
                className={`prep-status-item ${colorMap[opt] || optKey}`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
