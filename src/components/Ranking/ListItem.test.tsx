import { render, screen } from "@testing-library/react";
import { RankingListItem } from "./ListItem";

describe("RankingListItem", () => {
  const props = {
    user: {
      name: "Igor Santos",
    },
    time: 432,
    position: 1,
    guessedTags: 79,
  };

  it("should render Ranking List Item component", () => {
    render(<RankingListItem {...props} />);

    expect(screen.getByTestId("ranking-item")).toBeInTheDocument();
  });

  it("should render component with information", () => {
    render(<RankingListItem {...props} />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/Igor Santos/i)).toBeInTheDocument();
    expect(screen.getByText(/79 tags/i)).toBeInTheDocument();
    expect(screen.getByText(/432 s/i)).toBeInTheDocument();
  });
});
