import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const token = localStorage.getItem("@tagMemoryTest:token");

  if (!!token === false) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
