import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ViewPage } from "./ViewPage";

describe("ViewPage", () => {
  const renderViewPage = () => {
    render(
      <BrowserRouter>
        <ViewPage>um component</ViewPage>
      </BrowserRouter>
    );
  };

  it("should render ViewPage component", () => {
    renderViewPage();

    expect(screen.getByTestId("view-page")).toBeInTheDocument();
  });

  it("should navigate to pages", async () => {
    renderViewPage();

    const homeLink = screen.getByTestId("home-link");
    fireEvent.click(homeLink);

    expect(homeLink).toHaveAttribute("href", "/");

    const rankingLink = screen.getByTestId("ranking-link");
    fireEvent.click(rankingLink);

    expect(rankingLink).toHaveAttribute("href", "/ranking");

    const loginLink = screen.getByTestId("login-link");
    fireEvent.click(loginLink);

    expect(loginLink).toHaveAttribute("href", "/login");
  });
});
