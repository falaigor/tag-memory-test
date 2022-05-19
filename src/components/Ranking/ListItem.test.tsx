import { render, screen } from "@testing-library/react";
import { RankingListItem } from "./ListItem";

describe("RankingListItem", () => {
  it("should render Ranking List Item component", () => {
    render(<RankingListItem />);

    expect(screen.getByTestId("ranking-item")).toBeInTheDocument();
  });

  it("should render component with information", () => {
    render(<RankingListItem />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/Igor Santos/i)).toBeInTheDocument();
    expect(screen.getByText(/79 tags guesseds/i)).toBeInTheDocument();
    expect(screen.getByText(/432 seconds/i)).toBeInTheDocument();
  });
});
