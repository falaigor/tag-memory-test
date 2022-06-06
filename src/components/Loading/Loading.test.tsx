import { fireEvent, render, screen } from "../../tests/test-utils";
import { Loading } from "./";

describe("Loading", () => {
  const props = {
    message: "a message",
  };

  it("should render Loading component", () => {
    render(<Loading {...props} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
