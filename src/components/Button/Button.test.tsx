import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { GithubLogo } from "phosphor-react";

describe("Button", () => {
  const props = {
    label: "Button",
    onClick: jest.fn(),
  };

  it("should render Button component", () => {
    render(<Button {...props} />);

    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should render component with Icon", () => {
    const icon = <GithubLogo />;
    render(<Button icon={icon} {...props} />);

    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("button-icon")).toBeInTheDocument();
  });

  it("should call props.onClick() when button gets clicked", async () => {
    render(<Button {...props} />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
