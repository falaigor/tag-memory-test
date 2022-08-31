import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
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
});
