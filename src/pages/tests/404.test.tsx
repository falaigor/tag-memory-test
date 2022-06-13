import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "../../routes/routes";
import { PageNotFound } from "../404";

describe("Page Not Found", () => {
  const renderPageNotFound = () =>
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );

  it("should render Login Page", () => {
    renderPageNotFound();

    expect(screen.getByTestId("404-page")).toBeInTheDocument();
  });

  it("should redirect to Home page when click in button 'Go to back'", () => {
    renderPageNotFound();

    const button = screen.getByRole("link");

    fireEvent.click(button);

    expect(window.location.pathname).toEqual(AppRoute.Home);
  });
});
