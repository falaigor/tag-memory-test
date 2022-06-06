import { render, screen } from "../../tests/test-utils";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("should render Loading component", () => {
    render(<Loading />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
