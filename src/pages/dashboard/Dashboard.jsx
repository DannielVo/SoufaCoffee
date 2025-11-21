import React, { useState } from "react";
import "./dashboard.css";
import WareHouse from "../../components/wareHouse/WareHouse";
import RecipePg from "../recipePg/RecipePg";
import { DASHBOARD_SIDEBAR_KEY } from "../../assets/assets";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(DASHBOARD_SIDEBAR_KEY.dashboard);

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

      <main>
        {/* <WareHouse isManager={true} /> */}
        {/* <RecipePg isManager={true} /> */}
      </main>
    </div>
  );
};

export default Dashboard;
