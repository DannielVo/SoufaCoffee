import React from "react";
import "./ingredientList.css";
import { INGREDIENT_LIST } from "../../assets/dummyDB";

const IngredientList = () => {
  return (
    <div className="ingredient-list-wrapper left-right">
      <h2 className="ingredient-list-title">Ingredient List</h2>

      <div className="ingredient-list-container">
        <div className="ingredient-grid header">
          <div>No.</div>
          <div>Ingredient</div>
          <div>Unit</div>
          <div>Status</div>
          <div>Remaining</div>
          <div className="actions-col">Actions</div>
        </div>

        {/* List items */}
        {INGREDIENT_LIST.map((item, index) => (
          <div className="ingredient-grid item" key={`ingredient-${item.id}`}>
            <div>{index + 1}</div>
            <div>{item.name}</div>
            <div>{item.unit}</div>
            <div className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </div>
            <div>{item.remaining}</div>

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

export default IngredientList;
