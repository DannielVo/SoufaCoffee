import React, { useState } from "react";
import "./statusDropdown.css";
import { ORDER_STATUS } from "../../assets/assets";

const StatusDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const availableOptions = ORDER_STATUS.filter((s) => s !== value);

  const statusClass = value.toLowerCase().replace(" ", "-");
  return (
    <div className="prep-status-wrapper">
      <div
        className={`prep-status-display ${statusClass}`}
        onClick={() => setOpen(!open)}
      >
        {value}
      </div>

      {/* Dropdown */}
      {open && (
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
      )}
    </div>
  );
};

export default StatusDropdown;
