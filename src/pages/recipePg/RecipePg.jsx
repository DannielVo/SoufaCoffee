import React from "react";
import "./recipePg.css";
import { RECIPE_LIST } from "../../assets/dummyDB";

const RecipePg = ({ isManager = false }) => {
  return (
    <div className="recipe-list-wrapper left-right">
      <div className="recipe-list-header">
        <div className="recipe-left">
          <h2 className="recipe-list-title">Ingredient List</h2>
        </div>

        <div className="recipe-right">
          <input
            type="text"
            placeholder="Search..."
            className="recipe-search"
          />
          {isManager && <button className="recipe-add-btn">Add</button>}
        </div>
      </div>

      <div className="recipe-list-container">
        {RECIPE_LIST.map((recipe) => (
          <div className="recipe-table-wrapper" key={`recipe-${recipe.id}`}>
            <h3 className="recipe-title">{recipe.name}</h3>

            <div
              className={`recipe-grid-header ${
                isManager ? "recipe-manager" : "recipe-barista"
              }`}
            >
              <div>No.</div>
              <div>Ingredient</div>
              <div>Quantity</div>
              <div>Unit</div>
              {isManager && <div>Actions</div>}
            </div>

            {recipe.ingredients.map((item, index) => (
              <div
                className={`recipe-grid-item ${
                  isManager ? "recipe-manager" : "recipe-barista"
                }`}
                key={`ingredient-${recipe.id}-${index}`}
              >
                <div>{index + 1}</div>
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>{item.unit}</div>
                {isManager && (
                  <div>
                    <button className="wh-edit-btn">
                      <i className="bx bx-edit"></i>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePg;
