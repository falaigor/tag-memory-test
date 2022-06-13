import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectRoute";
import { Ranking } from "../pages/Ranking";
import { AppRoute } from "./routes";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Protect Router", () => {
  afterEach(() => {
    localStorage.removeItem("@tagMemoryTest:token");
  });

  it("should render page when authorized", () => {
    localStorage.setItem("@tagMemoryTest:token", "token");

    render(
      <BrowserRouter>
        <ProtectedRoute>
          <Ranking />
        </ProtectedRoute>
      </BrowserRouter>
    );

    expect(screen.getByTestId("ranking-page")).toBeInTheDocument();
  });

  it("should redirect home page when not authorized", () => {
    localStorage.removeItem("@tagMemoryTest:token");

    render(
      <BrowserRouter>
        <ProtectedRoute>
          <Ranking />
        </ProtectedRoute>
      </BrowserRouter>
    );

    expect(window.location.pathname).toEqual(AppRoute.Home);
  });
});
