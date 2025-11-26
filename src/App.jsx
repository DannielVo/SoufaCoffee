import React from "react";
import Profile from "./pages/profile/Profile";
import PaymentPg from "./pages/paymentPg/PaymentPg";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFoundPg from "./pages/notFoundPg/NotFoundPg";
import Login from "./pages/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePg from "./pages/homePg/HomePg";
import SettingPage from "./pages/SettingPage";
import PlainPage from "./pages/PlainPage";
import CashierLayout from "./layouts/CashierLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import BaristaLayout from "./layouts/BaristaLayout";
import PreparationList from "./pages/preparationList/PreparationList";
import OrderList from "./pages/orderList/OrderList";
import WareHouse from "./components/wareHouse/WareHouse";
import IngredientList from "./pages/ingredientList/IngredientList";
import RecipePg from "./pages/recipePg/RecipePg";
import PrivateRoute from "./pages/PrivateRoute";

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
        {/* default route / và /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute allowedRoles={["cashier"]} />}>
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
        </Route>

        <Route element={<PrivateRoute allowedRoles={["barista"]} />}>
          <Route element={<BaristaLayout />}>
            <Route path="/barista/preparation" element={<PreparationList />} />
            <Route path="/barista/profile" element={<Profile />} />
            <Route path="/barista/ingrdients" element={<IngredientList />} />
            <Route
              path="/barista/recipe"
              element={<RecipePg isManager={false} />}
            />
          </Route>
        </Route>

        <Route element={<PrivateRoute allowedRoles={["manager"]} />}>
          <Route element={<ManagerLayout />}>
            <Route path="/manager/dashboard" element={<Dashboard />} />
            <Route path="/manager/profile" element={<Profile />} />
          </Route>
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
