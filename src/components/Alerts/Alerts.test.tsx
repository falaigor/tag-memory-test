import { render, screen } from "@testing-library/react";
import { Alerts } from "./";

describe("Alerts", () => {
  const props = {
    alertTitle: "Success",
    type: "success",
    children: "Happy alerts",
  };

  it("should render Alerts component", () => {
    render(<Alerts {...props} />);

    expect(screen.getByTestId("alert")).toBeInTheDocument();
  });

  it("should render component with information", () => {
    render(<Alerts {...props} />);

    expect(screen.getByText(/Success/i)).toBeInTheDocument();
    expect(screen.getByText(/Happy alerts/i)).toBeInTheDocument();
  });
});
