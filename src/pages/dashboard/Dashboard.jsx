import React, { useState } from "react";
import "./dashboard.css";
import WareHouse from "../../components/wareHouse/WareHouse";
import RecipePg from "../recipePg/RecipePg";
import { DASHBOARD_SIDEBAR_KEY } from "../../assets/assets";
import IngredientList from "../ingredientList/IngredientList";
import OrderList from "../orderList/OrderList";
import PreparationList from "../preparationList/PreparationList";
import DashboardContent from "../../components/dashboardContent/DashboardContent";
import StaffContent from "../../components/staffContent/StaffContent";
import ProductContent from "../../components/productContent/ProductContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const TAB_COMPONENTS = {
    Dashboard: <DashboardContent />,
    Staffs: <StaffContent />,
    Products: <ProductContent />,
    Ingredients: <IngredientList isManager={true} />,
    Warehouse: <WareHouse isManager={true} />,
    Recipes: <RecipePg isManager={true} />,
    Orders: <OrderList isManager={true} />,
    Preparations: <PreparationList isManager={true} />,
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        {DASHBOARD_SIDEBAR_KEY.map((item, index) => (
          <a
            key={`dashboard-tab-${item.id}`}
            className={`sidebar-item ${
              activeTab === `${item.key}` ? "sidebar-item-active" : ""
            }`}
            onClick={() => setActiveTab(item.key)}
          >
            <i class={item.icon}></i>
            <span>{item.key}</span>
          </a>
        ))}
      </aside>

      <main className="main-content">{TAB_COMPONENTS[activeTab]}</main>
    </div>
  );
};

export default Dashboard;
