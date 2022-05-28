import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Ranking } from "../pages/Ranking";
import { AppRoute } from "./routes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<Home />} />
        <Route path={AppRoute.Ranking} element={<Ranking />} />
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
