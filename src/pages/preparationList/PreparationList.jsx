import React, { useEffect, useState } from "react";
import "./preparationList.css";
import { useNavigate } from "react-router-dom";
import { PREP_LIST } from "../../assets/dummyDB";
import PrepDetails from "../prepDetails/PrepDetails";
import StatusDropdown from "../../components/statusDropdown/StatusDropdown";
import { PREP_COLOR, PREP_STATUS } from "../../assets/assets";
import { useShop } from "../../context/ShopContext";

const PreparationList = ({ isManager = false }) => {
  const { listPreparation, error, loading, getPreparations } = useShop();
  const [isPrepDetails, setIsPrepDetails] = useState(false);
  const [selectedPrep, setSelectedPrep] = useState(null);
  const [prepList, setPrepList] = useState([]);

  const handleSelectedPrep = (item) => {
    setSelectedPrep(item);
    setIsPrepDetails(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getPreparations();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPrepList([...listPreparation]);
  }, [listPreparation]);

  return (
    <>
      {isPrepDetails === false ? (
        <div
          className={`prep-list-wrapper ${
            isManager === false ? "left-right" : "manager-wrapper"
          }`}
        >
          <h2 className="prep-list-title">Preparation List</h2>

          <div className="prep-list-container">
            <div className="prep-grid header">
              <div>No.</div>
              <div>Preparation ID</div>
              {/* <div>Last Edited By</div> */}
              <div className="status-col">
                Status<i class="bx bxs-hand-up"></i>{" "}
              </div>
              <div className="actions-col">Actions</div>
            </div>

            {/* List items */}
            {prepList.map((prep, index) => (
              <div className="prep-grid item" key={`prep-${prep.prepId}`}>
                <div>{index + 1}</div>
                <div>#{prep.prepId}</div>
                {/* <div>{prep.staffId}</div> */}

                <StatusDropdown
                  value={prep.prepStatus}
                  options={PREP_STATUS}
                  colorMap={PREP_COLOR}
                  onChange={(newStatus) => {
                    setPrepList((prev) =>
                      prev.map((p) =>
                        p.prepId === prep.prepId
                          ? { ...p, prepStatus: newStatus }
                          : p
                      )
                    );
                  }}
                />

                <div className="actions">
                  <button
                    className="btn-icon detail"
                    onClick={() => handleSelectedPrep(prep)}
                  >
                    <i className="bxr  bx-eye"></i>
                  </button>
                  <button className="btn-icon save">
                    <i class="bxr  bx-save"></i>
                  </button>
                </div>
              </div>
            ))}

            {/* List-footer */}
            <div className="preparation-list-footer">
              <div className="footer-left">
                Total: {prepList.length} preparations
              </div>

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
        <PrepDetails
          prep={selectedPrep}
          onBack={() => setIsPrepDetails(false)}
          onManager={isManager}
        />
      )}
    </>
  );
};

export default PreparationList;
