import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Ranking } from "../Ranking";

describe("Ranking", () => {
  const renderRanking = () =>
    render(
      <BrowserRouter>
        <Ranking />
      </BrowserRouter>
    );

  it("should render Ranking Page", () => {
    renderRanking();

    expect(screen.getByTestId("ranking-page")).toBeInTheDocument();
  });
});
