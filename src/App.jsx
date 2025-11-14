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
        <Route
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
        ))}

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
