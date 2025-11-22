import React from "react";
import "./staffContent.css";
import { STAFF_LIST } from "../../assets/dummyDB";

const StaffContent = () => {
  return (
    <div className="staff-list-wrapper">
      <div className="staff-list-header">
        <div className="staff-left">
          <h2 className="staff-list-title">Staff List</h2>
        </div>

        <div className="staff-right">
          <input type="text" placeholder="Search..." className="staff-search" />
          <button className="staff-add-btn">Add</button>
        </div>
      </div>

      <div className="staff-list-container">
        <div className="staff-grid header">
          <div>Staff ID</div>
          <div>Full name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Role</div>
          <div>Status</div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {STAFF_LIST.map((staff, index) => (
          <div className="staff-grid item" key={`staff-${staff.id}`}>
            <div>{staff.id}</div>
            <div>{staff.name}</div>
            <div>{staff.email}</div>
            <div>{staff.phone}</div>
            <div>{staff.role}</div>
            <div className={`status ${staff.status.toLowerCase()}`}>
              {staff.status}
            </div>

            <div className="actions">
              <button className="btn-icon edit">
                <i className="bx bx-edit"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffContent;
