import { render, screen } from "@testing-library/react";
import { RankingList } from "./List";

describe("RankingList", () => {
  it("should render RankingList component", () => {
    render(<RankingList />);

    expect(screen.getByTestId("ranking-list")).toBeInTheDocument();
  });

  it('should show title "Top 5"', () => {
    render(<RankingList />);

    expect(screen.getByText(/Top 5/i)).toBeInTheDocument();
  });

  it("should show ranking list contains 2 items", () => {
    render(<RankingList />);

    expect(screen.getAllByTestId("ranking-item")).toHaveLength(2);
  });
});
