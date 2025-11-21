import React, { useState } from "react";
import "./dashboard.css";
import WareHouse from "../../components/wareHouse/WareHouse";
import RecipePg from "../recipePg/RecipePg";
import { DASHBOARD_SIDEBAR_KEY } from "../../assets/assets";
import StaffPg from "../staffPg/StaffPg";
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
    Staff: <StaffContent />,
    Product: <ProductContent />,
    Ingredient: <IngredientList isManager={true} />,
    Warehouse: <WareHouse isManager={true} />,
    Recipe: <RecipePg isManager={true} />,
    Order: <OrderList isManager={true} />,
    Preparation: <PreparationList isManager={true} />,
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
