import React from "react";
import Profile from "./pages/profile/Profile";
import PaymentPg from "./pages/paymentPg/PaymentPg";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFoundPg from "./pages/notFoundPg/NotFoundPg";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import HomePg from "./pages/homePg/HomePg";
import SettingPage from "./pages/SettingPage";
import PlainPage from "./pages/PlainPage";
import CashierLayout from "./layouts/CashierLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import BaristaLayout from "./layouts/BaristaLayout";
import PreparationList from "./pages/preparationList/PreparationList";
import OrderList from "./pages/orderList/OrderList";
import WareHouse from "./components/wareHouse/WareHouse";

const App = () => {
  const plainPages = [
    {
      path: "*",
      component: <NotFoundPg />,
    },
    {
      path: "/login",
      component: <Login />,
    },
  ];

  const pages = [
    {
      path: "/profile",
      component: <Profile />,
    },
    {
      path: "/payment",
      component: <PaymentPg />,
    },
    {
      path: "/dashboard",
      component: <Dashboard />,
    },
  ];

  return (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <SettingPage>
              <HomePg />
            </SettingPage>
          }
        ></Route>

        {pages.map((item, index) => (
          <Route
            key={item.path}
            path={item.path}
            element={<SettingPage>{item.component}</SettingPage>}
          ></Route>
        ))} */}

        <Route element={<CashierLayout />}>
          <Route path="/cashier/home" element={<HomePg />} />
          <Route path="/cashier/payment" element={<PaymentPg />} />
          <Route path="/cashier/orders" element={<OrderList />} />
          <Route path="/cashier/profile" element={<Profile />} />
          <Route
            path="/cashier/warehouse"
            element={<WareHouse isManager={false} />}
          />
        </Route>

        <Route element={<BaristaLayout />}>
          <Route path="/barista/preparation" element={<PreparationList />} />
          <Route path="/barista/profile" element={<Profile />} />
        </Route>

        <Route element={<ManagerLayout />}>
          <Route path="/manager/dashboard" element={<Dashboard />} />
          <Route path="/manager/profile" element={<Profile />} />
          {/* <Route
            path="/manager/warehouse"
            element={<WareHouse isManager={true} />}
          /> */}
        </Route>

        {plainPages.map((item, index) => (
          <Route
            key={item.path}
            path={item.path}
            element={<PlainPage>{item.component}</PlainPage>}
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
