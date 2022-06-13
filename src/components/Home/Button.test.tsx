import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const props = {
    onClick: jest.fn(),
  };

  it("should render Buttton component", () => {
    render(<Button {...props} />);

    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should call props.onClick() when button gets clicked", async () => {
    render(<Button {...props} />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
