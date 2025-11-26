import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem("role"); // "cashier" | "barista" | "manager"

  if (!userRole) {
    // chưa login => chuyển về login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // role không hợp lệ => redirect về trang mặc định theo role
    if (userRole === "cashier") return <Navigate to="/cashier/home" replace />;
    if (userRole === "barista")
      return <Navigate to="/barista/preparation" replace />;
    if (userRole === "manager")
      return <Navigate to="/manager/dashboard" replace />;
  }

  return <Outlet />; // role hợp lệ => render các route con
};

export default PrivateRoute;
