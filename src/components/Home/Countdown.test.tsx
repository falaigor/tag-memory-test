import { render, screen } from "../../tests/test-utils";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
  it("should render Countdown component", () => {
    render(<Countdown />);

    expect(screen.getByTestId("countdown")).toBeInTheDocument();
  });
});
