import { render, screen } from "@testing-library/react";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
  it("should render Countdown component", () => {
    render(<Countdown />);

    expect(screen.getByTestId("countdown")).toBeInTheDocument();
  });
});
