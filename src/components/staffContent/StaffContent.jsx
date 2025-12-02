import React, { useEffect, useState } from "react";
import "./staffContent.css";
import { STAFF_LIST } from "../../assets/dummyDB";
import StatusDropdown from "../statusDropdown/StatusDropdown";
import { STAFF_COLOR, STAFF_STATUS } from "../../assets/assets";
import StaffModal from "../modals/staffModal/StaffModal";
import { useShop } from "../../context/ShopContext";

const StaffContent = () => {
  const {
    listUser,
    getListUser,
    createUser,
    updateUser,
    deleteUser,
    error,
    loading,
  } = useShop();

  const [staffList, setStaffList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleUpdateStaff = async (user) => {
    try {
      await updateUser(user.staff_id, user);
      alert("Update status successfully!");
    } catch (error) {
      alert(error.detail);
    }
  };

  const handleSubmit = async (data) => {
    if (editData) {
      handleUpdateStaff(data);
    } else {
      try {
        await createUser(data);
        alert("Create user successfully!");
      } catch (error) {
        alert(error.detail);
      }
    }
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getListUser();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setStaffList([...listUser]);
  }, [listUser]);

  return (
    <>
      <div className="staff-list-wrapper">
        <div className="staff-list-header">
          <div className="staff-left">
            <h2 className="staff-list-title">Staff List</h2>
          </div>

          <div className="staff-right">
            <input
              type="text"
              placeholder="Search..."
              className="staff-search"
            />
            <button
              className="staff-add-btn"
              onClick={() => {
                setEditData(null); // reset form về chế độ Add
                setOpenModal(true);
              }}
            >
              Add
            </button>
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
              <div>
                {staff.staff_id.length > 5
                  ? staff.staff_id.slice(0, 5) + "xxx"
                  : staff.staff_id}
              </div>
              <div>{staff.full_name}</div>
              <div>{staff.email}</div>
              <div>{staff.phone_number}</div>
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
                      s.staff_id === staff.staff_id
                        ? { ...s, status: newStatus }
                        : s
                    )
                  );
                }}
              />

              <div className="actions">
                <button
                  className="btn-icon edit"
                  onClick={() => {
                    setEditData(staff);
                    setOpenModal(true);
                  }}
                >
                  <i className="bx bx-edit"></i>
                </button>
                <button
                  onClick={() => handleUpdateStaff(staff)}
                  className="btn-icon save"
                >
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
      <StaffModal
        isOpen={openModal}
        mode={editData ? "edit" : "add"}
        initialData={editData}
        onClose={() => setOpenModal(false)}
        onSubmit={(data) => handleSubmit(data)}
      />
    </>
  );
};

export default StaffContent;
