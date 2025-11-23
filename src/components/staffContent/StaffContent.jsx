import React, { useState } from "react";
import "./staffContent.css";
import { STAFF_LIST } from "../../assets/dummyDB";
import StatusDropdown from "../statusDropdown/StatusDropdown";
import { STAFF_COLOR, STAFF_STATUS } from "../../assets/assets";

const StaffContent = () => {
  const [staffList, setStaffList] = useState(STAFF_LIST);

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
          <div className="status-col">
            Status<i class="bx bxs-hand-up"></i>{" "}
          </div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {staffList.map((staff, index) => (
          <div className="staff-grid item" key={`staff-${staff.id}`}>
            <div>{staff.id}</div>
            <div>{staff.name}</div>
            <div>{staff.email}</div>
            <div>{staff.phone}</div>
            <div>{staff.role}</div>
            {/* <div className={`status ${staff.status.toLowerCase()}`}>
              {staff.status}
            </div> */}

            <StatusDropdown
              value={staff.status}
              options={STAFF_STATUS}
              colorMap={STAFF_COLOR}
              onChange={(newStatus) => {
                setStaffList((prev) =>
                  prev.map((s) =>
                    s.id === staff.id ? { ...s, status: newStatus } : s
                  )
                );
              }}
            />

            <div className="actions">
              <button className="btn-icon edit">
                <i className="bx bx-edit"></i>
              </button>
              <button className="btn-icon save">
                <i class="bxr  bx-save"></i>
              </button>
            </div>
          </div>
        ))}

        {/* List-footer */}
        <div className="staff-list-footer">
          <div className="footer-left">Total: {staffList.length} staffs</div>

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
  );
};

export default StaffContent;
