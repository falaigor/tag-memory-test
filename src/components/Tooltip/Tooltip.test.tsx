import { render, screen } from "@testing-library/react";
import { Tooltip } from "./";

describe("Tooltip", () => {
  const props = {
    tooltipMessage: "Tooltip Message",
    children: "Component",
  };

  it("should render Tooltip component", () => {
    render(<Tooltip {...props} />);

    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });

  it("should show message props in Tooltip", () => {
    render(<Tooltip {...props} />);

    expect(screen.getByText(props.tooltipMessage)).toBeInTheDocument();
  });
});
