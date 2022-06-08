import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/404";
import { HomeDashboard } from "../pages/dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Ranking } from "../pages/Ranking";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/dashboard" element={<HomeDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
