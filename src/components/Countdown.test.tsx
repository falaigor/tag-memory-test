import { render, screen } from "@testing-library/react";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
  it("should render Countdown component", () => {
    render(<Countdown countdown={60} />);

    expect(screen.getByTestId("countdown")).toBeInTheDocument();
  });

  it("should show a minutes", () => {
    render(<Countdown countdown={60} />);

    const minute = `
    <div
    data-testid="minute"
  >
    <span>
      0
    </span>
    <span>
      1
    </span>
  </div>
    `;

    expect(minute).toMatchSnapshot();
  });

  it("should show a seconds", () => {
    render(<Countdown countdown={125} />);

    const second = `
    <div
    data-testid="second"
  >
    <span>
      0
    </span>
    <span>
      5
    </span>
  </div>
    `;

    expect(second).toMatchSnapshot();
  });
});
