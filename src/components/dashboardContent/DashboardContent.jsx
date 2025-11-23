import React from "react";
import "./dashboardContent.css";
import { DASHBOARD_STATS, MONTHLY_REVENUE_DATA } from "../../assets/dummyDB";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DashboardContent = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code",
    }).format(price);
  };

  return (
    <div className="dashboard-content">
      {/* SECTION 1: STAT CARDS */}
      <div className="db-cards-wrapper">
        {DASHBOARD_STATS.map((item) => {
          const isPositive = item.percentChange >= 0;

          return (
            <div key={item.id} className="db-card">
              <div className="db-card-header">
                <i className={item.icon}></i>
                <span>{item.title}</span>
              </div>

              <div className="db-card-content">
                <span className="db-card-value">
                  {item.type === "Revenue"
                    ? formatPrice(item.value)
                    : item.value}
                </span>

                <span
                  className={`db-card-percent ${
                    isPositive ? "positive" : "negative"
                  }`}
                >
                  {isPositive ? (
                    <i className="bx bx-trending-up"></i>
                  ) : (
                    <i className="bx bx-trending-down"></i>
                  )}
                  {Math.abs(item.percentChange)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* SECTION 2: BAR CHART */}
      <div className="dashboard-section-two">
        <h2 className="chart-title">Total revenue (Monthly)</h2>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={MONTHLY_REVENUE_DATA} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value / 1_000_000} M`} />
              <Tooltip formatter={(value) => `${formatPrice(value)}`} />
              <Bar dataKey="revenue" fill="#4C8BF5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
