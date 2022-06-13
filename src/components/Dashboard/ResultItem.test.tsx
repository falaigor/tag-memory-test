import { screen, render } from "@testing-library/react";
import { ResultItem } from "./ResultItem";

describe("ResultItem", () => {
  const props = {
    user: {
      name: "Igor Santos",
    },
    position: 1,
    time: 20,
    guessedTags: 40,
  };

  it("should render ResultItem component", () => {
    render(<ResultItem {...props} />);

    expect(screen.getByTestId("result-item")).toBeInTheDocument();
  });

  it("should render component with information", () => {
    render(<ResultItem {...props} />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/Igor Santos/i)).toBeInTheDocument();
    expect(screen.getByText(/40 tags/i)).toBeInTheDocument();
    expect(screen.getByText(/20s/i)).toBeInTheDocument();
  });
});
