import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRoutes } from "./AppRoutes";

import "@testing-library/jest-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Home page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AppRoutes }),
  };
};

describe("AppRoutes", () => {
  it('should render Ranking Page when url equal "/ranking"', () => {
    renderWithRouter(<AppRoutes />, { route: "/ranking" });

    expect(screen.getByTestId("ranking-page")).toBeInTheDocument();
  });

  it('should render Login Page when url equal "/login"', () => {
    renderWithRouter(<AppRoutes />, { route: "/login" });

    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  it("should render 404 Page when page not found", () => {
    renderWithRouter(<AppRoutes />, { route: "/asd" });

    expect(screen.getByTestId("404-page")).toBeInTheDocument();
  });
});
