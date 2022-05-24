import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import { AppRoutes } from "./AppRoutes";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Home page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AppRoutes }),
  };
};

describe("AppRoutes", () => {
  it('should render Home Page when url equal "/"', () => {
    renderWithRouter(<AppRoutes />);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it('should render Ranking Page when url equal "/ranking"', () => {
    renderWithRouter(<AppRoutes />, { route: "/ranking" });

    expect(screen.getByTestId("ranking-page")).toBeInTheDocument();
  });
});
