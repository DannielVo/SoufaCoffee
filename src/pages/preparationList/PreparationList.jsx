import React, { useState } from "react";
import "./preparationList.css";
import { useNavigate } from "react-router-dom";
import { PREP_LIST } from "../../assets/dummyDB";
import PrepDetails from "../prepDetails/PrepDetails";

const PreparationList = () => {
  const [isPrepDetails, setIsPrepDetails] = useState(false);
  const [selectedPrep, setSelectedPrep] = useState(null);

  const handleSelectedPrep = (item) => {
    setSelectedPrep(item);
    setIsPrepDetails(true);
  };

  const navigate = useNavigate();

  return (
    <>
      {isPrepDetails === false ? (
        <div className="prep-list-wrapper left-right">
          <h2 className="prep-list-title">Preparation List</h2>

          <div className="prep-list-container">
            <div className="prep-grid header">
              <div>No.</div>
              <div>Preparation ID</div>
              <div>Date</div>
              <div>Last Edited By</div>
              <div>Status</div>
              <div className="actions-col">Actions</div>
            </div>

            {/* List items */}
            {PREP_LIST.map((prep, index) => (
              <div className="prep-grid item" key={`prep-${prep.id}`}>
                <div>{index + 1}</div>
                <div>#{prep.id}</div>
                <div>{prep.created_at}</div>
                <div>{prep.staff}</div>
                <div className={`status ${prep.status.toLowerCase()}`}>
                  {prep.status}
                </div>

                <div className="actions">
                  <button
                    className="btn-icon detail"
                    onClick={() => handleSelectedPrep(prep)}
                  >
                    <i className="bxr  bx-eye"></i>
                  </button>
                  <button className="btn-icon edit">
                    <i className="bx bx-edit"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <PrepDetails
          prep={selectedPrep}
          onBack={() => setIsPrepDetails(false)}
        />
      )}
    </>
  );
};

export default PreparationList;
