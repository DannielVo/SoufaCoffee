import React, { useEffect, useState } from "react";
import "./ingredientList.css";
import { INGREDIENT_LIST } from "../../assets/dummyDB";
import IngredientModal from "../../components/modals/ingredientModal/IngredientModal";
import { useShop } from "../../context/ShopContext";

const IngredientList = ({ isManager = false }) => {
  const {
    ingredients,
    getIngredients,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    updateIngredientStatus,
    error,
    loading,
  } = useShop();
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [ingredientList, setIngredientList] = useState([]);

  const handleSubmit = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIngredients();
        setIngredientList(data);
      } catch (err) {
        console.error("Failed to fetch ingredients", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
            {isManager && (
              <button
                className="ingredient-add-btn"
                onClick={() => {
                  setEditData(null); // reset form về chế độ Add
                  setOpenModal(true);
                }}
              >
                Add
              </button>
            )}
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
          {ingredientList.map((item, index) => (
            <div
              className="ingredient-grid item"
              key={`ingredient-${item.ingredientId}`}
            >
              <div>{index + 1}</div>
              <div>{item.ingredientName}</div>
              <div className={`status ${item.status.toLowerCase()}`}>
                {item.status}
              </div>
              <div>{item.remaining}</div>
              <div>{item.unit}</div>

              <div className="actions">
                <div className="btn-icon detail">
                  <i class="bxr  bx-alert-circle"></i>
                </div>
                <button
                  className="btn-icon edit"
                  onClick={() => {
                    setEditData(item);
                    setOpenModal(true);
                  }}
                >
                  <i className="bx bx-edit"></i>
                </button>
              </div>
            </div>
          ))}

          {/* List-footer */}
          <div className="ingredient-list-footer">
            <div className="footer-left">
              Total: {ingredientList.length} ingredients
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
      <IngredientModal
        isOpen={openModal}
        mode={editData ? "edit" : "add"}
        initialData={editData}
        onClose={() => setOpenModal(false)}
        onSubmit={(data) => handleSubmit()}
      />
    </>
  );
};

export default IngredientList;
