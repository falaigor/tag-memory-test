import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("should render Loading component", () => {
    render(<Loading />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
