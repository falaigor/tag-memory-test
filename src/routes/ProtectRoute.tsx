import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@tagMemoryTest:token");

  if (!token) {
    return navigate(redirectPath);
  }

  return children;
};
