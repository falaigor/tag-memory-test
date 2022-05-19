import { render, screen } from "@testing-library/react";
import { Ranking } from "../Ranking";

describe("Ranking", () => {
  it("should render Ranking Page", () => {
    render(<Ranking />);

    expect(screen.getByTestId("ranking-page")).toBeInTheDocument();
  });

  it("should render the Ranking List containing 2 items", () => {
    render(<Ranking />);

    expect(screen.getAllByTestId("ranking-item")).toHaveLength(2);
  });
});
