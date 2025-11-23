import React from "react";
import "./ingredientList.css";
import { INGREDIENT_LIST } from "../../assets/dummyDB";

const IngredientList = ({ isManager = false }) => {
  return (
    <div
      className={`ingredient-list-wrapper left-right ${
        isManager === false ? "left-right" : "manager-wrapper"
      }`}
    >
      <div className="ingredient-list-header">
        <div className="ingredient-left">
          <h2 className="ingredient-list-title">Ingredient List</h2>
        </div>

        <div className="ingredient-right">
          <input
            type="text"
            placeholder="Search..."
            className="ingredient-search"
          />
          {isManager && <button className="ingredient-add-btn">Add</button>}
        </div>
      </div>

      <div className="ingredient-list-container">
        <div className="ingredient-grid header">
          <div>No.</div>
          <div>Ingredient</div>
          <div>Status</div>
          <div>Remaining</div>
          <div>Unit</div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {INGREDIENT_LIST.map((item, index) => (
          <div className="ingredient-grid item" key={`ingredient-${item.id}`}>
            <div>{index + 1}</div>
            <div>{item.name}</div>
            <div className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </div>
            <div>{item.remaining}</div>
            <div>{item.unit}</div>

            <div className="actions">
              <div className="btn-icon detail">
                <i class="bxr  bx-alert-circle"></i>
              </div>
              <button className="btn-icon edit">
                <i className="bx bx-edit"></i>
              </button>
            </div>
          </div>
        ))}

        {/* List-footer */}
        <div className="ingredient-list-footer">
          <div className="footer-left">
            Total: {INGREDIENT_LIST.length} ingredients
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
  );
};

export default IngredientList;
